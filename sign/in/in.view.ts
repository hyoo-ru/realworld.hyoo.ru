namespace $.$$ {

	export class $conduit_sign_in extends $.$conduit_sign_in {

		@ $mol_mem
		auth( next? : any ) {
			if( !next ) return

			const person = this.$.$conduit_domain.sign_in( {
				email : this.mail() ,
				password : this.pass() ,
			} )

			this.$.$mol_state_arg.value( 'person' , person.slug ) 
			this.$.$mol_state_arg.value( 'sign' , null ) 
		}

	}

}
