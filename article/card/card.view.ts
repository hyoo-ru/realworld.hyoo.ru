namespace $.$$ {

	export class $conduit_article_card extends $.$conduit_article_card {

		title() {
			return this.article().title
		}

		descr() {
			return this.article().description
		}

		avatar() {
			return this.article().author.image
		}

		author_name() {
			return this.article().author.username
		}

	}

}
