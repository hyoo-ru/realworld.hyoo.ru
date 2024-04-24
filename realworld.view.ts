namespace $.$$ {

	export class $hyoo_realworld extends $.$hyoo_realworld {

		article_current() {
			return this.Article( this.article()?.slug )
		}

		feed_current() {
			return this.Feed( this.tag() )
		}

		edit_current() {
			return this.Article_edit( this.article()?.slug )
		}

		@ $mol_mem
		article() {
			const slug = this.$.$mol_state_arg.value( 'article' )
			if( !slug ) return null

			return this.$.$hyoo_realworld_article.item( slug )
		}

		@ $mol_mem
		edit() {
			return this.$.$mol_state_arg.value( 'edit' ) !== null
		}

		@ $mol_mem
		tag() {
			return this.$.$mol_state_arg.value( 'tag' ) || ''
		}

		signed() {
			return this.$.$hyoo_realworld_sign.signed()
		}

		@ $mol_mem
		section( next? : string | undefined ) {
			return this.$.$mol_state_arg.value( 'section' , next ) ?? ''
		}
		
		person( next? : string | undefined ) {
			return this.$.$mol_state_arg.value( 'person' , next ) ?? ''
		}

		pages() {
			return [
				this.Home() ,
				this.section() ? this.sections()[ this.section()! ] : this.sections().articles , 
				this.tag() && this.feed_current() ,
				this.article() && this.article_current() ,
				this.edit() && (
					this.signed() ? this.edit_current() : this.sections().sign_in
				),
				this.person() ? this.Person() : null , 
			].filter( Boolean )
		}

	}

}
