namespace $ { export class $conduit_menu_page extends $mol_page {

	/// title @ \Tags
	title() {
		return this.$.$mol_locale.text( "$conduit_menu_page_title" )
	}

	/// body / <= Tag_links
	body() {
		return [].concat( this.Tag_links() )
	}

	/// Tag_links $mol_list rows <= tag_links
	@ $mol_mem
	Tag_links() {
		return (( obj )=>{
			obj.rows = () => this.tag_links()
			return obj
		})( new this.$.$mol_list )
	}

	/// tag_links /
	tag_links() {
		return [] as any[]
	}

	/// Tag_link!index $mol_link
	/// 	minimal_height 40
	/// 	minimal_width 40
	/// 	arg *
	/// 		tag <= tag_id!index
	/// 		article null
	/// 		edit null
	/// 	title <= tag_name!index
	@ $mol_mem_key
	Tag_link( index : any ) {
		return (( obj )=>{
			obj.minimal_height = () => 40
			obj.minimal_width = () => 40
			obj.arg = () => ({
			"tag" :  this.tag_id(index) ,
			"article" :  null as any ,
			"edit" :  null as any ,
		})
			obj.title = () => this.tag_name(index)
			return obj
		})( new this.$.$mol_link )
	}

	/// tag_id!index \
	tag_id( index : any ) {
		return ""
	}

	/// tag_name!index \
	tag_name( index : any ) {
		return ""
	}

	/// tag_all_name @ \All articles
	tag_all_name() {
		return this.$.$mol_locale.text( "$conduit_menu_page_tag_all_name" )
	}

} }

