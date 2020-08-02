namespace $.$$ {

	export class $hyoo_realworld_sign_in extends $.$hyoo_realworld_sign_in {

		auth() {

			const person = this.$.$hyoo_realworld_sign.auth({
				email : this.mail() ,
				password : this.pass() ,
			})

			this.$.$mol_state_arg.value( 'person' , person.username ) 
			this.$.$mol_state_arg.value( 'section' , 'articles' )
			
		}

	}

}
