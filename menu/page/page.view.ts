namespace $.$$ {

	export class $conduit_menu_page extends $.$conduit_menu_page {

		@ $mol_mem
		tags() {
			return [ '' , ... this.$.$conduit_domain.tags() ]
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
			return this.tag_id( index ) || this.tag_all_name()
		}


	}

}
