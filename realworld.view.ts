namespace $.$$ {
	export class $hyoo_realworld extends $.$hyoo_realworld {

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
			return this.$.$mol_state_arg.value( 'tag' )
		}

		signed() {
			return this.$.$hyoo_realworld_sign.signed()
		}

		section( name : string ) {
			return this.$.$mol_state_arg.value( 'section' ) === name 
		}

		pages() {
			return [
				this.Menu() ,
				... this.section( 'profile' ) ? [ this.Profile() ] : [ ] ,
				... this.section( 'articles' ) ? [ this.Feed( '' ) ] : [ ] ,
				... this.section( 'tags' ) ? [ this.Tags() ] : [ ] ,
				... this.tag() ? [ this.Feed( this.tag() ) ] : [ ] ,
				... this.section( 'signin' ) ? [ this.Sign_in() ] : [ ] ,
				... this.section( 'signup' ) ? [ this.Sign_up() ] : [ ] ,
				... this.article() ? [ this.Article( this.article()?.slug() ) ] : [] ,
				... ( this.edit() && this.signed() ) ? [ this.Article_edit( this.article()?.slug() ) ] : [] ,
				... ( this.edit() && !this.signed() ) ? [ this.Sign_in() ] : [] ,
			]
		}

	}

}
