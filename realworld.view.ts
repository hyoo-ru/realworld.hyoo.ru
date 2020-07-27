namespace $.$$ {

	export class $hyoo_realworld extends $.$hyoo_realworld {

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
		sign() {
			return this.$.$mol_state_arg.value( 'sign' )
		}

		@ $mol_mem
		tag() {
			return this.$.$mol_state_arg.value( 'tag' ) || ''
		}

		signed() {
			return this.$.$hyoo_realworld_sign.signed()
		}

		pages() {
			return [
				this.Tags() ,
				this.Feed( this.tag() ) ,
				... this.article() ? [ this.Article( this.article()?.slug ) ] : [] ,
				... ( this.edit() && this.signed() ) ? [ this.Article_edit( this.article()?.slug ) ] : [] ,
				... ( ( this.edit() && !this.signed() ) || ( this.sign() === 'in' ) ) ? [ this.Sign_in() ] : [] ,
			]
		}

	}

}
