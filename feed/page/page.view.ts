namespace $.$$ {

	export class $hyoo_realworld_feed_page extends $.$hyoo_realworld_feed_page {

		tag() {
			return this.$.$mol_state_arg.value( 'tag' ) || ''
		}

		@ $mol_mem
		articles() {
			return this.$.$hyoo_realworld_domain.articles( this.tag() )
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
		body_scroll_top( val? : number ) {
			this.tag()
			return ( val !== void 0 ) ? val : 0
		}

		tools() {
			if ( this.$.$hyoo_realworld_domain.token() ) {
				return [ this.Add_link(), this.Sign_out() ] as readonly any[]
			}

			return [ this.Sign_in() , this.Sign_up() ] as readonly any[]
		}

		sign_out() {
			this.$.$hyoo_realworld_domain.sign_out()
		}
	
	}

}
