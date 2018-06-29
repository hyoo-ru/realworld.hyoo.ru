namespace $.$$ {

	export class $conduit_article_edit extends $.$conduit_article_edit {

		@ $mol_mem
		article() {
			const slug = this.$.$mol_state_arg.value( 'article' )
			return slug ? this.domain().article( slug ) : null
		}

		@ $mol_mem
		article_title( next? : string ) {
			const article = this.article()
			return next === undefined ? ( article && article.title || '' ) : next
		}

		@ $mol_mem
		article_descr( next? : string ) {
			const article = this.article()
			return next === undefined ? ( article && article.description || '' ) : next
		}

		@ $mol_mem
		article_content( next? : string ) {
			const article = this.article()
			return next === undefined ? ( article && article.body || '' ) : next
		}

		@ $mol_mem
		article_tags( next? : string ) {
			const article = this.article()
			return next === undefined ? ( article && article.tagList.join( ', ' ) || '' ) : next
		}

		@ $mol_mem
		save( next? : any ) {
			if( !next ) return

			const slug = this.article() && this.article().slug

			const article = this.domain().article_save( {
				slug ,
				title : this.article_title() ,
				description : this.article_descr() ,
				body : this.article_content() ,
				tagList : this.article_tags().split( /\s*,\s*/g ) ,
			} )

			this.$.$mol_state_arg.value( 'article' , article.slug ) 
			this.$.$mol_state_arg.value( 'edit' , null ) 
		}

		@ $mol_mem
		saveable() {
			if( !this.article_title() ) return false
			if( !this.article_content() ) return false

			if( !this.article() ) return true

			if( this.article_title() !== this.article().title ) return true
			if( this.article_descr() !== this.article().description ) return true
			if( this.article_content() !== this.article().body ) return true
			if( this.article_tags() !== this.article().tagList.join( ', ' ) ) return true

			return false
		}

	}

}
