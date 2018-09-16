namespace $ { export class $conduit_article_page extends $mol_page {

	/// title @ \Article
	title() {
		return this.$.$mol_locale.text( "$conduit_article_page_title" )
	}

	/// tools /
	/// 	<= Edit_link
	/// 	<= Close_link
	tools() {
		return [].concat( this.Edit_link() , this.Close_link() )
	}

	/// Edit_link $mol_link
	/// 	arg * edit \
	/// 	sub / <= Edit_icon
	@ $mol_mem
	Edit_link() {
		return (( obj )=>{
			obj.arg = () => ({
			"edit" :  "" ,
		})
			obj.sub = () => [].concat( this.Edit_icon() )
			return obj
		})( new this.$.$mol_link )
	}

	/// Edit_icon $mol_icon_edit
	@ $mol_mem
	Edit_icon() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_icon_edit )
	}

	/// Close_link $mol_link
	/// 	arg * article null
	/// 	sub / <= Close_icon
	@ $mol_mem
	Close_link() {
		return (( obj )=>{
			obj.arg = () => ({
			"article" :  null as any ,
		})
			obj.sub = () => [].concat( this.Close_icon() )
			return obj
		})( new this.$.$mol_link )
	}

	/// Close_icon $mol_icon_cross
	@ $mol_mem
	Close_icon() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_icon_cross )
	}

	/// body /
	/// 	<= Content
	/// 	<= Tags
	/// 	<= Comments
	/// 	<= Comment_add
	body() {
		return [].concat( this.Content() , this.Tags() , this.Comments() , this.Comment_add() )
	}

	/// Content $mol_text text <= content
	@ $mol_mem
	Content() {
		return (( obj )=>{
			obj.text = () => this.content()
			return obj
		})( new this.$.$mol_text )
	}

	/// content \
	content() {
		return ""
	}

	/// Tags $mol_row sub / <= tags
	@ $mol_mem
	Tags() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.tags() )
			return obj
		})( new this.$.$mol_row )
	}

	/// tags /
	tags() {
		return [] as any[]
	}

	/// Comments $mol_list rows <= comment_cards
	@ $mol_mem
	Comments() {
		return (( obj )=>{
			obj.rows = () => this.comment_cards()
			return obj
		})( new this.$.$mol_list )
	}

	/// comment_cards /
	comment_cards() {
		return [] as any[]
	}

	/// Comment_add $conduit_comment_add article <= article
	@ $mol_mem
	Comment_add() {
		return (( obj )=>{
			obj.article = () => this.article()
			return obj
		})( new this.$.$conduit_comment_add )
	}

	/// article $conduit_article
	@ $mol_mem
	article() {
		return (( obj )=>{
			return obj
		})( new this.$.$conduit_article )
	}

	/// Comment_card!index $conduit_comment_card comment <= comment!index
	@ $mol_mem_key
	Comment_card( index : any ) {
		return (( obj )=>{
			obj.comment = () => this.comment(index)
			return obj
		})( new this.$.$conduit_comment_card )
	}

	/// comment!index $conduit_comment
	@ $mol_mem_key
	comment( index : any ) {
		return (( obj )=>{
			return obj
		})( new this.$.$conduit_comment )
	}

	/// Tag_link!index $mol_link
	/// 	arg *
	/// 		tag <= tag_name!index
	/// 		article null
	/// 	sub / <= tag_name!index
	@ $mol_mem_key
	Tag_link( index : any ) {
		return (( obj )=>{
			obj.arg = () => ({
			"tag" :  this.tag_name(index) ,
			"article" :  null as any ,
		})
			obj.sub = () => [].concat( this.tag_name(index) )
			return obj
		})( new this.$.$mol_link )
	}

	/// tag_name!index \
	tag_name( index : any ) {
		return ""
	}

} }

