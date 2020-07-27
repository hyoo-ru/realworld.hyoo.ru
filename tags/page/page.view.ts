namespace $.$$ {

	export class $hyoo_realworld_tags_page extends $.$hyoo_realworld_tags_page {

		@ $mol_mem
		tags() {
			return this.$.$hyoo_realworld_tags.list()
		}

		@ $mol_mem
		tag_links() {
			return this.tags().map( ( tag , index )=> this.Tag_link( index ) )
		}

		@ $mol_mem_key
		tag_id( index : number ) {
			return this.tags()[ index ]
		}

		@ $mol_mem_key
		tag_name( index : number ) {
			return this.tag_id( index )
		}


	}

}
