namespace $.$$ {

	export class $hyoo_realworld_home_page extends $.$hyoo_realworld_home_page {
		
		body() {
			return Boolean( this.$.$hyoo_realworld_domain.token() ) ? this.signed_links() : this.unsigned_links()
		}

	}

}
