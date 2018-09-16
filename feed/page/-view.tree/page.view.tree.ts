namespace $ { export class $conduit_feed_page extends $mol_page {

	/// title @ \Articles
	title() {
		return this.$.$mol_locale.text( "$conduit_feed_page_title" )
	}

	/// minimal_width 400
	minimal_width() {
		return 400
	}

	/// tools / <= Add_link
	tools() {
		return [].concat( this.Add_link() )
	}

	/// Add_link $mol_link
	/// 	arg *
	/// 		article \
	/// 		edit \
	/// 	sub / <= Add_icon
	@ $mol_mem
	Add_link() {
		return (( obj )=>{
			obj.arg = () => ({
			"article" :  "" ,
			"edit" :  "" ,
		})
			obj.sub = () => [].concat( this.Add_icon() )
			return obj
		})( new this.$.$mol_link )
	}

	/// Add_icon $mol_icon_plus
	@ $mol_mem
	Add_icon() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_icon_plus )
	}

	/// body / <= Article_links
	body() {
		return [].concat( this.Article_links() )
	}

	/// Article_links $mol_list rows <= article_links
	@ $mol_mem
	Article_links() {
		return (( obj )=>{
			obj.rows = () => this.article_links()
			return obj
		})( new this.$.$mol_list )
	}

	/// article_links /
	article_links() {
		return [] as any[]
	}

	/// Article_link!index $mol_link
	/// 	arg * article <= article_slug!index
	/// 	sub / <= Article_card!index
	@ $mol_mem_key
	Article_link( index : any ) {
		return (( obj )=>{
			obj.arg = () => ({
			"article" :  this.article_slug(index) ,
		})
			obj.sub = () => [].concat( this.Article_card(index) )
			return obj
		})( new this.$.$mol_link )
	}

	/// article_slug!index \
	article_slug( index : any ) {
		return ""
	}

	/// Article_card!index $conduit_article_card article <= article!index
	@ $mol_mem_key
	Article_card( index : any ) {
		return (( obj )=>{
			obj.article = () => this.article(index)
			return obj
		})( new this.$.$conduit_article_card )
	}

	/// article!index $conduit_article
	@ $mol_mem_key
	article( index : any ) {
		return (( obj )=>{
			return obj
		})( new this.$.$conduit_article )
	}

} }

