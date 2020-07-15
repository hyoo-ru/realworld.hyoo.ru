namespace $.$$ {

	export class $hyoo_realworld_article_page extends $.$hyoo_realworld_article_page {

		@ $mol_mem
		article() {
			return this.$.$hyoo_realworld_domain.article( this.$.$mol_state_arg.value( 'article' )! )
		}

		content() {
			return this.article().body
		}

		title() {
			return this.article().title
		}

		@ $mol_mem
		comments() {
			return this.$.$hyoo_realworld_domain.comments( this.article().slug )
		}

		@ $mol_mem
		comment_cards() {
			return this.comments().map( ( comment , index )=> this.Comment_card( index ) )
		}

		@ $mol_mem_key
		comment( index : number ) {
			return this.comments()[ index ]
		}

		@ $mol_mem
		tags() {
			return this.article().tagList.map( ( tag , index )=> this.Tag_link( index ) )
		}

		tag_name( index : number ) {
			return this.article().tagList[ index ]
		}

	}

}
