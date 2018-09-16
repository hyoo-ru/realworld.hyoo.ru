namespace $ { export class $conduit_article_card extends $mol_row {

	/// minimal_height 88
	minimal_height() {
		return 88
	}

	/// minimal_width 88
	minimal_width() {
		return 88
	}

	/// article $conduit_article
	@ $mol_mem
	article() {
		return (( obj )=>{
			return obj
		})( new this.$.$conduit_article )
	}

	/// sub /
	/// 	<= Author
	/// 	<= Title
	/// 	<= Descr
	sub() {
		return [].concat( this.Author() , this.Title() , this.Descr() )
	}

	/// Author $mol_view sub /
	/// 	<= Avatar
	/// 	<= Author_name
	@ $mol_mem
	Author() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Avatar() , this.Author_name() )
			return obj
		})( new this.$.$mol_view )
	}

	/// Avatar $mol_image uri <= avatar
	@ $mol_mem
	Avatar() {
		return (( obj )=>{
			obj.uri = () => this.avatar()
			return obj
		})( new this.$.$mol_image )
	}

	/// avatar \
	avatar() {
		return ""
	}

	/// Author_name $mol_view sub / <= author_name
	@ $mol_mem
	Author_name() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.author_name() )
			return obj
		})( new this.$.$mol_view )
	}

	/// author_name \
	author_name() {
		return ""
	}

	/// Title $mol_view sub / <= title
	@ $mol_mem
	Title() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.title() )
			return obj
		})( new this.$.$mol_view )
	}

	/// title \
	title() {
		return ""
	}

	/// Descr $mol_view sub / <= descr
	@ $mol_mem
	Descr() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.descr() )
			return obj
		})( new this.$.$mol_view )
	}

	/// descr \
	descr() {
		return ""
	}

} }

