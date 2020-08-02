namespace $ {

	export const $hyoo_realworld_tags_json = $mol_data_array( $mol_data_string )

	const Response = $mol_data_record({
		tags : $hyoo_realworld_tags_json,
	})

	export class $hyoo_realworld_tags extends $mol_object2 {

		@ $mol_mem
		static list() {
			return Response( this.$.$hyoo_realworld_transport.load( `tags` ) ).tags
		}

	}

}
