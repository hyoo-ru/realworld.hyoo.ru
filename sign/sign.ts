namespace $ {

	const Response = $mol_data_record({
		user : $mol_data_record({
			token: $mol_data_string,
			username: $mol_data_string,
		}),
	})

	export class $hyoo_realworld_sign extends $mol_object2 {

		@ $mol_action
		static auth( creds : { email : string , password : string } ) {

			const res = this.$.$hyoo_realworld_transport.save(
				`user`,
				'post',
				{ user : creds },
			)
			const person = Response( res ).user
			
			this.$.$hyoo_realworld_transport.token( person.token )

			return person
		}

		@ $mol_action
		static register( creds : { username : string , email : string , password : string } ) {

			const res = this.$.$hyoo_realworld_transport.save(
				`user`,
				'post',
				{ user : creds },
			)
			const person = Response( res ).user
			
			this.$.$hyoo_realworld_transport.token( person.token )

			return person
		}

		static signed() {
			return Boolean( this.$.$hyoo_realworld_transport.token() )
		}

		static drop() {
			this.$.$hyoo_realworld_transport.token( '' )
		}

	}

}
