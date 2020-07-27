namespace $ {
	
	export class $hyoo_realworld_transport extends $mol_object2 {

		static api_base() {
			return 'https://conduit.productionready.io/api/'
		}

		@ $mol_mem
		static token( next? : string | null ) {
			return this.$.$mol_state_local.value( 'token' , next )
		}
		
		@ $mol_mem
		static headers() {

			const headers = {
				'Content-Type': 'application/json',
			}
			
			const token = this.token()
			if( !token ) return headers
			
			return {
				... headers,
				'Authorization': `Token ${token}`,
			}

		}

		@ $mol_fiber.method
		static load( path : string ) : any {
			return this.$.$mol_fetch.json( this.api_base() + path , {
				headers : this.headers()
			} )
		}

		@ $mol_fiber.method
		static save(
			path : string ,
			method : 'post' | 'put' ,
			body : object
		) : any {

			const uri = this.api_base() + path
			
			const res = this.$.$mol_fetch.json( uri , {
				method ,
				headers : this.headers(),
				body : JSON.stringify( body ),
			} )

			return res
		}

	}

}
