namespace $ {

	export const $hyoo_realworld_comment_json = $mol_data_record({
		author : $hyoo_realworld_person_json,
		id : $mol_data_integer,
		body : $mol_data_string,
		createdAt : $mol_data_pipe( $mol_data_string , $mol_time_moment ),
		updatedAt : $mol_data_pipe( $mol_data_string , $mol_time_moment ),
	})	

	const Response_one = $mol_data_record({
		comment : $hyoo_realworld_comment_json,
	})

	const Response_list = $mol_data_record({
		comments : $mol_data_array( $hyoo_realworld_comment_json ),
	})

	export class $hyoo_realworld_comment extends $mol_object2 {

		@ $mol_mem_key
		static item( id : number ) {
			const obj = new this
			obj.id = $mol_const( id )
			return obj
		}

		id() {
			return 0
		}

		body() {
			return this.json().body
		}

		updated_moment() {
			return this.json().updatedAt
		}

		author() {
			const id = this.json()?.author.username
			return this.$.$hyoo_realworld_person.item( id )
		}

		@ $mol_mem
		json( next = {} as typeof $hyoo_realworld_comment_json.Value ) {

			const author = this.$.$hyoo_realworld_person.item( next.author.username! )
			author.json( next.author )
			
			return next
		}

		@ $mol_mem
		static changes( next = 0 ) {
			return next
		}

		@ $mol_fiber.method
		static save( article : string , next : Partial< typeof $hyoo_realworld_comment_json.Value > ) {

			const uri = `articles/${ article }/comments`
			const res = this.$.$hyoo_realworld_transport.save( uri , 'post' , next )
			const json = Response_one( res ).comment
			
			const comment = this.item( json.id )
			comment.json( json )
			this.changes( json.id )

			return article
		}

		@ $mol_mem_key
		static list( article : $hyoo_realworld_article ) {

			this.changes()

			const url = `articles/${ article.slug() }/comments`

			const json = Response_list( this.$.$hyoo_realworld_transport.load( url ) )
			
			const next = json.comments.map( json => {
				this.$.$hyoo_realworld_comment.item( json.id ).json( json )
				return this.$.$hyoo_realworld_comment.item( json.id )
			} )

			return next
		}

	}

}
