namespace $ {

	export class $hyoo_realworld_domain_tags {
		tags! : string[]
	}

	export class $hyoo_realworld_domain extends $mol_object {
		
		static api_base() {
			return 'https://conduit.productionready.io/api/'
		}

		static page_size() {
			return 20
		}

		@ $mol_mem_key
		static articles_page( { page , tag } : { page : number , tag : string } ) {
			const uri = `${ this.api_base() }articles?limit=${ this.page_size() }&offset=${ page * this.page_size() }&tag=${ tag }`
			return this.$.$mol_fetch.json( uri ) as $hyoo_realworld_feed
		}

		@ $mol_mem_key
		static articles( tag = '' ) {
			return [ ... $mol_range2(
				index => {
					const page = Math.floor( index / this.page_size() )
					return new Proxy( new $hyoo_realworld_article , {
						get: ( target , field )=> this.articles_page({ tag , page }).articles[ index % this.page_size() ][ field ]
					} )
				} , 
				()=> this.articles_page({ tag , page : 0 }).articlesCount ,
			) ]
		}
		
		@ $mol_mem
		static tags() {
			const uri = `${ this.api_base() }tags`
			return ( this.$.$mol_fetch.json( uri ) as $hyoo_realworld_domain_tags ).tags
		}

		@ $mol_mem_key
		static article( slug : string , article? : $hyoo_realworld_article ) {
			if( article ) return article

			const uri = `${ this.api_base() }articles/${ slug }`
			const res = this.$.$mol_fetch.json( uri ) as { article : $hyoo_realworld_article }
			
			return res.article
		}

		@ $mol_mem
		static person_current() {
			const token = this.token()
			if( !token ) return null

			const uri = `${ this.api_base() }user`
			const headers = {
				'Authorization': `Token ${ token }`,
			}

			const res = this.$.$mol_fetch.json( uri , { headers } ) as { user : $hyoo_realworld_person }

			return res.user
		}

		@ $mol_mem_key
		static comments( slug : string ) {
			const uri = `${ this.api_base() }articles/${ slug }/comments`
			const res = this.$.$mol_fetch.json( uri ) as { comments : $hyoo_realworld_comment[] }
			this.comments_fresh( slug )
			return res.comments
		}

		@ $mol_mem_key
		static comments_fresh( slug : string , next? : string ) {
			return next || ''
		}

		@ $mol_fiber.method
		static comment_add( slug : string , comment : Partial< $hyoo_realworld_comment > ) {

			const uri = `${ this.api_base() }articles/${ slug }/comments`
			const res = this.$.$mol_fetch.json( uri , {
				method : 'post',
				headers : {
					'Authorization': `Token ${ this.token() }`,
					'Content-Type': 'application/json',
				},
				body : JSON.stringify({ comment }),
			} ) as { comment : Partial< $hyoo_realworld_comment > }

			this.comments_fresh( slug , res.comment.id )

			return res.comment
		}

		@ $mol_fiber.method
		static article_save( article : Partial< $hyoo_realworld_article > ) {

			const uri = `${ this.api_base() }articles/${ article.slug || '' }`
			const res = this.$.$mol_fetch.json( uri , {
				method : article.slug ? 'put' : 'post',
				headers : {
					'Authorization': `Token ${ this.token() }`,
					'Content-Type': 'application/json',
				},
				body : JSON.stringify({ article }),
			} ) as { article : $hyoo_realworld_article }

			this.article( res.article.slug! , res.article )

			return res.article
		}

		@ $mol_fiber.method
		static sign_in( creds : { email : string , password : string } ) {

			const uri = `${ this.api_base() }users/login`
			const res = this.$.$mol_fetch.json( uri , {
				method : 'post',
				headers : {
					'Content-Type': 'application/json',
				},
				body : JSON.stringify({ user : creds }),
			} ) as { user : $hyoo_realworld_person }

			const person = res.user
			this.token( person['token'] )

			return person
		}

		@ $mol_mem
		static token( next? : string ) {
			return this.$.$mol_state_local.value( 'token' , next ) ?? ''
		}

	}

}
