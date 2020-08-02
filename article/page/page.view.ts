namespace $.$$ {

	export class $hyoo_realworld_article_page extends $.$hyoo_realworld_article_page {

		@ $mol_mem
		article() {
			const slug = this.$.$mol_state_arg.value( 'article' )!
			return this.$.$hyoo_realworld_article.item( slug )
		}

		content() {
			return this.article().body()
		}

		title() {
			return this.article().title()
		}

		@ $mol_mem
		comments() {
			return this.article().comments()
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
			return this.article().tags().map( ( tag , index )=> this.Tag_link( index ) )
		}

		tag_name( index : number ) {
			return this.article().tags()[ index ]
		}

	}

}
