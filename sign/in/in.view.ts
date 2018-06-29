namespace $.$$ {

	export class $conduit_sign_in extends $.$conduit_sign_in {

		// @ $mol_mem
		// article() {
		// 	const slug = this.$.$mol_state_arg.value( 'article' )
		// 	return slug ? this.domain().article( slug ) : null
		// }

		// @ $mol_mem
		// article_title( next? : string ) {
		// 	const article = this.article()
		// 	return next === undefined ? ( article && article.title || '' ) : next
		// }

		// @ $mol_mem
		// article_descr( next? : string ) {
		// 	const article = this.article()
		// 	return next === undefined ? ( article && article.description || '' ) : next
		// }

		// @ $mol_mem
		// article_content( next? : string ) {
		// 	const article = this.article()
		// 	return next === undefined ? ( article && article.body || '' ) : next
		// }

		// @ $mol_mem
		// article_tags( next? : string ) {
		// 	const article = this.article()
		// 	return next === undefined ? ( article && article.tagList.join( ', ' ) || '' ) : next
		// }

		@ $mol_mem
		auth( next? : any ) {
			if( !next ) return

			const person = this.domain().sign_in( {
				email : this.mail() ,
				password : this.pass() ,
			} )

			this.$.$mol_state_arg.value( 'person' , person.slug ) 
			this.$.$mol_state_arg.value( 'sign' , null ) 
		}

	}

}
