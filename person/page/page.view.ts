namespace $.$$ {

	export class $hyoo_realworld_person_page extends $.$hyoo_realworld_person_page {

		sign_out() {
			this.$.$hyoo_realworld_sign.drop()
			this.$.$mol_state_arg.value( 'person' , null ) 
			this.section( null );
		}
		
		person_current() {
			const name = this.$.$mol_state_arg.value( 'person' )!

			return this.$.$hyoo_realworld_person.item(name)
		}
		
		biography() {
			return this.person_current().biography() ?? ''
		}
		
		avatar() {
			return this.person_current().avatar()
		}
		
		name() {
			return this.person_current().name()
		}
	}

}
