namespace $ { export class $conduit extends $mol_book {

	/// attr * mol_theme \$mol_theme_dark
	attr() {
		return ({
			"mol_theme" :  "$mol_theme_dark" ,
		})
	}

	/// pages /
	/// 	<= Menu
	/// 	<= Feed
	/// 	<= Article
	/// 	<= Article_edit
	/// 	<= Sign_in
	pages() {
		return [].concat( this.Menu() , this.Feed() , this.Article() , this.Article_edit() , this.Sign_in() )
	}

	/// Menu $conduit_menu_page
	/// 	minimal_width 200
	/// 	event_top?val <=> event_front_up?val
	@ $mol_mem
	Menu() {
		return (( obj )=>{
			obj.minimal_width = () => 200
			obj.event_top = ( val? : any ) => this.event_front_up( val )
			return obj
		})( new this.$.$conduit_menu_page )
	}

	/// Feed $conduit_feed_page
	/// 	minimal_width 400
	/// 	event_top?val <=> event_front_up?val
	@ $mol_mem
	Feed() {
		return (( obj )=>{
			obj.minimal_width = () => 400
			obj.event_top = ( val? : any ) => this.event_front_up( val )
			return obj
		})( new this.$.$conduit_feed_page )
	}

	/// Article $conduit_article_page
	/// 	minimal_width 600
	/// 	event_top?val <=> event_front_up?val
	@ $mol_mem
	Article() {
		return (( obj )=>{
			obj.minimal_width = () => 600
			obj.event_top = ( val? : any ) => this.event_front_up( val )
			return obj
		})( new this.$.$conduit_article_page )
	}

	/// Article_edit $conduit_article_edit
	/// 	minimal_width 600
	/// 	event_top?val <=> event_front_up?val
	@ $mol_mem
	Article_edit() {
		return (( obj )=>{
			obj.minimal_width = () => 600
			obj.event_top = ( val? : any ) => this.event_front_up( val )
			return obj
		})( new this.$.$conduit_article_edit )
	}

	/// Sign_in $conduit_sign_in
	/// 	minimal_width 200
	/// 	event_top?val <=> event_front_up?val
	@ $mol_mem
	Sign_in() {
		return (( obj )=>{
			obj.minimal_width = () => 200
			obj.event_top = ( val? : any ) => this.event_front_up( val )
			return obj
		})( new this.$.$conduit_sign_in )
	}

	/// Placeholder $mol_book_placeholder sub /
	@ $mol_mem
	Placeholder() {
		return (( obj )=>{
			obj.sub = () => [] as any[]
			return obj
		})( new this.$.$mol_book_placeholder )
	}

} }

