namespace $ {

	export const $hyoo_realworld_person_json = $mol_data_record({
		username : $mol_data_string,
		bio : $mol_data_nullable( $mol_data_string ),
		image : $mol_data_string,
		following : $mol_data_boolean,
	})

	const Response = $mol_data_record({
		profile : $hyoo_realworld_person_json,
	})

	export class $hyoo_realworld_person extends $mol_object2 {

		@ $mol_mem_key
		static item( username : string ) {
			const obj = new this
			obj.name = $mol_const( username )
			return obj
		}

		name() {
			return ''
		}

		biography() {
			return this.json().bio 
		}

		avatar() {
			return this.json().image
		}

		@ $mol_mem
		json( next? : typeof $hyoo_realworld_person_json.Value ) {
			
			if( next ) return next
			
			const uri = `profiles/${ this.name() }`
			const json = Response( this.$.$hyoo_realworld_transport.load( uri ) ).profile
			
			return json
		}

	}
	
}
