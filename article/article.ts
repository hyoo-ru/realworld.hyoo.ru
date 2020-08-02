namespace $ {

	export const $hyoo_realworld_article_json = $mol_data_record({
		title : $mol_data_string,
		slug : $mol_data_string,
		body : $mol_data_string,
		createdAt : $mol_data_pipe( $mol_data_string , $mol_time_moment ),
		updatedAt : $mol_data_pipe( $mol_data_string , $mol_time_moment ),
		tagList : $hyoo_realworld_tags_json,
		description : $mol_data_string,
		author : $hyoo_realworld_person_json,
		favorited : $mol_data_boolean,
		favoritesCount : $mol_data_integer,
	})	

	const Response_one = $mol_data_record({
		article : $hyoo_realworld_article_json,
	})

	const Response_page = $mol_data_record({
		articles : $mol_data_array( $hyoo_realworld_article_json ),
		articlesCount : $mol_data_integer,
	})

	export class $hyoo_realworld_article extends $mol_object2 {

		@ $mol_mem_key
		static item( slug : string ) {
			const obj = new this
			obj.slug = $mol_const( slug )
			return obj
		}

		slug() {
			return ''
		}

		title() {
			return this.json().title
		}

		description() {
			return this.json().description
		}

		body() {
			return this.json().body
		}

		author() {
			const id = this.json()?.author.username
			return this.$.$hyoo_realworld_person.item( id )
		}

		tags() {
			return this.json().tagList
		}

		comments() {
			return this.$.$hyoo_realworld_comment.list( this )
		}

		@ $mol_mem
		json( next? : typeof $hyoo_realworld_article_json.Value ) {

			if( !next ) {
				const uri = `articles/${ this.slug() }`
				next = Response_one( this.$.$hyoo_realworld_transport.load( uri ) ).article
			}
			
			const author = this.$.$hyoo_realworld_person.item( next.author.username )
			author.json( next.author )
			
			return next
		}

		@ $mol_mem
		static changes( next = '' ) {
			return next
		}

		@ $mol_fiber.method
		static save( next : Partial< typeof $hyoo_realworld_article_json.Value > ) {

			const uri = `articles/${ next.slug }`
			const method = next.slug ? 'put' : 'post'
			const res = this.$.$hyoo_realworld_transport.save( uri , method , next )
			const json = Response_one( res ).article
			
			const article = this.item( json.slug )
			article.json( json )
			this.changes( json.slug )

			return article
		}

		@ $mol_mem_key
		static list( tag : string ) {

			const page_size = this.page_size()
			
			return Array.from( { length : this.count_total( tag ) } , ( _ , index )=> {

				const page = Math.floor( index / page_size )
				
				return $mol_delegate(
					$hyoo_realworld_article.prototype ,
					()=> this.list_page({ tag , page })[ index % page_size ],
				)

			} )

		}

		static page_size() {
			return 20
		}

		static count_total( tag : string ) {
			return this.list_page_json({ tag , page : 0 }).articlesCount
		}

		@ $mol_mem_key
		static list_page( id : { tag : string , page : number } ) {
			return this.list_page_json( id ).articles.map(
				json => this.$.$hyoo_realworld_article.item( json.slug )
			)
		}

		@ $mol_mem_key
		static list_page_json( id : { tag : string , page : number } ) {

			this.changes()

			const limit = this.page_size()
			const offset = id.page * limit
			const url = `articles?tag=${ encodeURIComponent( id.tag ) }&offset=${offset}&limit=${limit}`

			const json = Response_page( this.$.$hyoo_realworld_transport.load( url ) )
			
			for( const article of json.articles ) {
				this.$.$hyoo_realworld_article.item( article.slug ).json( article )
			}

			return json
		}

	}

}
