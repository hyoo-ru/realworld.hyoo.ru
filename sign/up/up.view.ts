namespace $.$$ {

	export class $hyoo_realworld_sign_up extends $.$hyoo_realworld_sign_up {

		reg() {

			const person = this.$.$hyoo_realworld_domain.sign_up( {
				username : this.username() ,
				email : this.mail() ,
				password : this.pass() ,
			} )

			this.$.$mol_state_arg.value( 'person' , person.username ) 
			this.$.$mol_state_arg.value( 'section' , 'articles' )
			
		}

	}

}
