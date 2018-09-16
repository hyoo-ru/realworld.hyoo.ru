namespace $ { export class $conduit_article_edit extends $mol_page {

	/// title @ \Article editor
	title() {
		return this.$.$mol_locale.text( "$conduit_article_edit_title" )
	}

	/// tools / <= Close
	tools() {
		return [].concat( this.Close() )
	}

	/// Close $mol_link
	/// 	arg * edit null
	/// 	sub / <= Close_icon
	@ $mol_mem
	Close() {
		return (( obj )=>{
			obj.arg = () => ({
			"edit" :  null as any ,
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

	/// body / <= Form
	body() {
		return [].concat( this.Form() )
	}

	/// Form $mol_form
	/// 	form_fields /
	/// 		<= Article_title_field
	/// 		<= Article_descr_field
	/// 		<= Article_content_field
	/// 		<= Article_tags_field
	/// 	buttons /
	/// 		<= Save
	/// 		<= Save_status
	@ $mol_mem
	Form() {
		return (( obj )=>{
			obj.form_fields = () => [].concat( this.Article_title_field() , this.Article_descr_field() , this.Article_content_field() , this.Article_tags_field() )
			obj.buttons = () => [].concat( this.Save() , this.Save_status() )
			return obj
		})( new this.$.$mol_form )
	}

	/// Article_title_field $mol_form_field
	/// 	name <= article_title_name
	/// 	control <= Article_title
	@ $mol_mem
	Article_title_field() {
		return (( obj )=>{
			obj.name = () => this.article_title_name()
			obj.control = () => this.Article_title()
			return obj
		})( new this.$.$mol_form_field )
	}

	/// article_title_name @ \Title
	article_title_name() {
		return this.$.$mol_locale.text( "$conduit_article_edit_article_title_name" )
	}

	/// Article_title $mol_string value?val <=> article_title?val
	@ $mol_mem
	Article_title() {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.article_title( val )
			return obj
		})( new this.$.$mol_string )
	}

	/// article_title?val \
	@ $mol_mem
	article_title( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Article_descr_field $mol_form_field
	/// 	name <= article_descr_name
	/// 	control <= Article_descr
	@ $mol_mem
	Article_descr_field() {
		return (( obj )=>{
			obj.name = () => this.article_descr_name()
			obj.control = () => this.Article_descr()
			return obj
		})( new this.$.$mol_form_field )
	}

	/// article_descr_name @ \Description
	article_descr_name() {
		return this.$.$mol_locale.text( "$conduit_article_edit_article_descr_name" )
	}

	/// Article_descr $mol_textarea
	/// 	value?val <=> article_descr?val
	/// 	hint \markdown
	@ $mol_mem
	Article_descr() {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.article_descr( val )
			obj.hint = () => "markdown"
			return obj
		})( new this.$.$mol_textarea )
	}

	/// article_descr?val \
	@ $mol_mem
	article_descr( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Article_content_field $mol_form_field
	/// 	name <= article_content_name
	/// 	control <= Article_content
	@ $mol_mem
	Article_content_field() {
		return (( obj )=>{
			obj.name = () => this.article_content_name()
			obj.control = () => this.Article_content()
			return obj
		})( new this.$.$mol_form_field )
	}

	/// article_content_name @ \Content
	article_content_name() {
		return this.$.$mol_locale.text( "$conduit_article_edit_article_content_name" )
	}

	/// Article_content $mol_textarea
	/// 	value?val <=> article_content?val
	/// 	hint \markdown
	@ $mol_mem
	Article_content() {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.article_content( val )
			obj.hint = () => "markdown"
			return obj
		})( new this.$.$mol_textarea )
	}

	/// article_content?val \
	@ $mol_mem
	article_content( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Article_tags_field $mol_form_field
	/// 	name <= article_tags_name
	/// 	control <= Article_tags
	@ $mol_mem
	Article_tags_field() {
		return (( obj )=>{
			obj.name = () => this.article_tags_name()
			obj.control = () => this.Article_tags()
			return obj
		})( new this.$.$mol_form_field )
	}

	/// article_tags_name @ \Tags
	article_tags_name() {
		return this.$.$mol_locale.text( "$conduit_article_edit_article_tags_name" )
	}

	/// Article_tags $mol_string
	/// 	value?val <=> article_tags?val
	/// 	hint \comma, separated, values
	@ $mol_mem
	Article_tags() {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.article_tags( val )
			obj.hint = () => "comma, separated, values"
			return obj
		})( new this.$.$mol_string )
	}

	/// article_tags?val \
	@ $mol_mem
	article_tags( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Save $mol_button_major
	/// 	title <= Save_label
	/// 	click?val <=> save?val
	/// 	enabled <= saveable
	@ $mol_mem
	Save() {
		return (( obj )=>{
			obj.title = () => this.Save_label()
			obj.click = ( val? : any ) => this.save( val )
			obj.enabled = () => this.saveable()
			return obj
		})( new this.$.$mol_button_major )
	}

	/// Save_label @ \Submit
	Save_label() {
		return this.$.$mol_locale.text( "$conduit_article_edit_Save_label" )
	}

	/// save?val null
	@ $mol_mem
	save( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : null as any
	}

	/// saveable false
	saveable() {
		return false
	}

	/// Save_status $mol_status status <= save
	@ $mol_mem
	Save_status() {
		return (( obj )=>{
			obj.status = () => this.save()
			return obj
		})( new this.$.$mol_status )
	}

} }

