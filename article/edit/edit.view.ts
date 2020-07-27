namespace $.$$ {

	export class $hyoo_realworld_article_edit extends $.$hyoo_realworld_article_edit {

		@ $mol_mem
		article() {
			
			const slug = this.$.$mol_state_arg.value( 'article' )!
			if( !slug ) return null

			return this.$.$hyoo_realworld_article.item( slug )
		}

		@ $mol_mem
		article_title( next? : string ) {
			return next === undefined ? ( this.article()?.title() || '' ) : next
		}

		@ $mol_mem
		article_descr( next? : string ) {
			return next === undefined ? ( this.article()?.description() || '' ) : next
		}

		@ $mol_mem
		article_content( next? : string ) {
			return next === undefined ? ( this.article()?.body() || '' ) : next
		}

		@ $mol_mem
		article_tags( next? : string ) {
			return next === undefined ? ( this.article()?.tags().join( ', ' ) || '' ) : next
		}

		@ $mol_mem
		save( next? : any ) {
			if( !next ) return

			const slug = this.article()?.slug() || ''

			const article = this.$.$hyoo_realworld_article.save( {
				slug ,
				title : this.article_title() ,
				description : this.article_descr() ,
				body : this.article_content() ,
				tagList : this.article_tags().split( /\s*,\s*/g ) ,
			} )

			this.$.$mol_state_arg.value( 'article' , article.slug() )
			this.$.$mol_state_arg.value( 'edit' , null )
			
		}

		@ $mol_mem
		saveable() {
			if( !this.article_title() ) return false
			if( !this.article_content() ) return false

			if( !this.article() ) return true

			if( this.article_title() !== this.article()?.title() ) return true
			if( this.article_descr() !== this.article()?.description() ) return true
			if( this.article_content() !== this.article()?.body() ) return true
			if( this.article_tags() !== this.article()?.tags().join( ', ' ) ) return true

			return false
		}

	}

}
