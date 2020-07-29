namespace $.$$ {

	export enum $hyoo_realworld_sections {
		profile = 'profile' ,
		articles = 'articles' ,
		tags = 'tags' ,
		sign_up = 'sign_up' ,
		sign_in = 'sign_in'
	}

	export class $hyoo_realworld extends $.$hyoo_realworld {

		article() {
			const slug = this.$.$mol_state_arg.value( 'article' )
			if( !slug ) return null
			
			return this.$.$hyoo_realworld_domain.article( slug )
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
			return Boolean( this.$.$hyoo_realworld_domain.token() )
		}

		@ $mol_mem
		section( next? : $hyoo_realworld_sections | undefined ) {
			if ( next !== undefined ) {
				this.$.$mol_state_arg.value( 'section' , next ) 
				return next

			}
			return this.$.$mol_state_arg.value( 'section' )
		}

		pages() {
			return [
				this.Menu() ,
				... this.section() === $hyoo_realworld_sections.profile ? [ this.Profile() ] : [ ] ,
				... this.section() === $hyoo_realworld_sections.articles ? [ this.Feed( '' ) ] : [ ] ,
				... this.section() === $hyoo_realworld_sections.tags ? [ this.Tags() ] : [ ] ,
				... this.section() === $hyoo_realworld_sections.sign_in ? [ this.Sign_in() ] : [ ] ,
				... this.section() === $hyoo_realworld_sections.sign_up ? [ this.Sign_up() ] : [ ] ,
				... this.tag() ? [ this.Feed( this.tag() ) ] : [ ] ,
				... this.article() ? [ this.Article( this.article()?.slug ) ] : [] ,
				... ( this.edit() && this.signed() ) ? [ this.Article_edit( this.article()?.slug ) ] : [] ,
				... ( this.edit() && !this.signed() ) ? [ this.Sign_in() ] : [] ,
			]
		}

	}

}
