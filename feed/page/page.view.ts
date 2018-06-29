namespace $.$$ {

	export class $conduit_feed_page extends $.$conduit_feed_page {

		tag() {
			return this.$.$mol_state_arg.value( 'tag' ) || ''
		}

		@ $mol_mem
		articles() {
			return this.domain().articles( this.tag() )
		}

		@ $mol_mem
		article_links() {
			return this.articles().map( ( article , index )=> this.Article_link( index ) )
		}

		@ $mol_mem_key
		article_slug( index : number ) {
			return this.articles()[ index ].slug
		}

		@ $mol_mem_key
		article( index : number ) {
			return this.articles()[ index ]
		}

		@ $mol_mem
		body_scroll_top( val? : number , force? : $mol_atom_force ) {
			this.tag()
			return ( val !== void 0 ) ? val : 0
		}
	
	}

}
