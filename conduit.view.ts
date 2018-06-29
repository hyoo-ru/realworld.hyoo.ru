namespace $.$$ {

	export class $conduit extends $.$conduit {

		@ $mol_mem
		article() {
			const slug = this.$.$mol_state_arg.value( 'article' )
			if( !slug ) return null
			
			return this.domain().article( slug )
		}

		@ $mol_mem
		edit() {
			return this.$.$mol_state_arg.value( 'edit' ) !== null
		}

		@ $mol_mem
		sign() {
			return this.$.$mol_state_arg.value( 'sign' )
		}

		signed() {
			return Boolean( this.domain().token() )
		}

		pages() {
			return [
				this.Menu() ,
				this.Feed() ,
				... this.article() ? [ this.Article() ] : [] ,
				... ( this.edit() && this.signed() ) ? [ this.Article_edit() ] : [] ,
				... ( ( this.edit() && !this.signed() ) || ( this.sign() === 'in' ) ) ? [ this.Sign_in() ] : [] ,
			]
		}

	}

}
