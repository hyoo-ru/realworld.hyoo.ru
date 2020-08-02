namespace $.$$ {

	export class $hyoo_realworld_article_card extends $.$hyoo_realworld_article_card {

		title() {
			return this.article().title()
		}

		descr() {
			return this.article().description()
		}

		avatar() {
			return this.article().author().avatar()
		}

		author_name() {
			return this.article().author().name()
		}

	}

}
