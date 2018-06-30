namespace $ {

	export class $conduit_domain_tags {
		tags : string[]
	}

	export class $conduit_domain extends $mol_object {
		
		static api_base() {
			return 'https://conduit.productionready.io/api/'
		}

		static page_size() {
			return 20
		}

		@ $mol_mem_key
		static articles_page( { page , tag } : { page : number , tag : string } ) {
			const uri = `${ this.api_base() }articles?limit=${ this.page_size() }&offset=${ page * this.page_size() }&tag=${ tag }`
			return this.$.$mol_http.resource( uri ).json< $conduit_feed >()
		}

		@ $mol_mem_key
		static articles( tag = '' ) {
			return $mol_range2(
				index => {
					const page = Math.floor( index / this.page_size() )
					return new Proxy( new $conduit_article , {
						get: ( target , field )=> this.articles_page({ page , tag }).articles[ index % this.page_size() ][ field ]
					} )
				} , 
				()=> this.articles_page({ tag , page : 0 }).articlesCount ,
			)
		}
		
		@ $mol_mem
		static tags() {
			const uri = `${ this.api_base() }tags`
			return this.$.$mol_http.resource( uri ).json< $conduit_domain_tags >().tags
		}

		@ $mol_mem_key
		static article( slug : string , article? : Partial< $conduit_article > , force? : $mol_atom_force_update ) {
			const uri = `${ this.api_base() }articles/${ slug }`
			return this.$.$mol_http.resource( uri ).json<{ article : $conduit_article }>().article
		}

		@ $mol_mem
		static person_current() {
			const token = this.token()
			if( !token ) return null

			const uri = `${ this.api_base() }user`
			const res = this.$.$mol_http.resource( uri )

			res.headers = ()=> ({
				'Authorization': `Token ${ token }`,
			})
			
			return res.json<{ user : $conduit_person }>().user
		}

		@ $mol_mem_key
		static comments( slug : string ) {
			const uri = `${ this.api_base() }articles/${ slug }/comments`
			return this.$.$mol_http.resource( uri ).json<{ comments : $conduit_comment[] }>().comments
		}

		@ $mol_mem_key
		static comment_add( slug : string , comment : Partial< $conduit_comment > , force? : $mol_atom_force_update ) {
			if( !comment ) return

			const uri = `${ this.api_base() }articles/${ slug }/comments`
			const res = this.$.$mol_http.resource( uri + '?' )

			res.method_put = ()=> 'post'
			res.headers = ()=> ({
				'Authorization': `Token ${ this.token() }`,
				'Content-Type': 'application/json',
			})
			
			comment = res.json<{ comment : Partial< $conduit_comment > }>( { comment } , force ).comment
			this.$.$mol_http.resource( uri ).json( undefined , $mol_atom_force_update )

			return comment
		}

		@ $mol_mem
		static article_save( article : Partial< $conduit_article > , force? : $mol_atom_force_update ) {
			if( !article ) return

			const uri = `${ this.api_base() }articles/${ article.slug || '' }`
			const res = this.$.$mol_http.resource( uri + '?' )

			res.method_put = ()=> article.slug ? 'put' : 'post'
			res.headers = ()=> ({
				'Authorization': `Token ${ this.token() }`,
				'Content-Type': 'application/json',
			})
			
			article = res.json<{ article : Partial< $conduit_article > }>( { article } , force ).article
			this.article( article.slug , article , $mol_atom_force_cache )

			return article
		}

		@ $mol_mem
		static sign_in( creds : { email : string , password : string } , force? : $mol_atom_force_update ) {
			if( !creds ) return

			const uri = `${ this.api_base() }users/login`
			const res = this.$.$mol_http.resource( uri )

			res.method_put = ()=> 'post'
			res.headers = ()=> ({
				'Content-Type': 'application/json',
			})
			
			const person = res.json( { user : creds } as any , force ).user as $conduit_person
			this.token( person['token'] )

			return person as any
		}

		@ $mol_mem
		static token( next? : string ) {
			return this.$.$mol_state_local.value( 'token' , next )
		}

	}

}
