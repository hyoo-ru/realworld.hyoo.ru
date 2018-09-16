namespace $ { export class $conduit_comment_add extends $mol_bar {

	/// article $conduit_article
	@ $mol_mem
	article() {
		return (( obj )=>{
			return obj
		})( new this.$.$conduit_article )
	}

	/// sub /
	/// 	<= Message
	/// 	<= Status
	/// 	<= Submit
	sub() {
		return [].concat( this.Message() , this.Status() , this.Submit() )
	}

	/// Message $mol_textarea
	/// 	hint \Your comment
	/// 	value?val <=> message?val
	@ $mol_mem
	Message() {
		return (( obj )=>{
			obj.hint = () => "Your comment"
			obj.value = ( val? : any ) => this.message( val )
			return obj
		})( new this.$.$mol_textarea )
	}

	/// message?val \
	@ $mol_mem
	message( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Status $mol_status status <= post
	@ $mol_mem
	Status() {
		return (( obj )=>{
			obj.status = () => this.post()
			return obj
		})( new this.$.$mol_status )
	}

	/// Submit $mol_button_major
	/// 	title \Post
	/// 	click?val <=> post?val
	/// 	enabled <= postable
	@ $mol_mem
	Submit() {
		return (( obj )=>{
			obj.title = () => "Post"
			obj.click = ( val? : any ) => this.post( val )
			obj.enabled = () => this.postable()
			return obj
		})( new this.$.$mol_button_major )
	}

	/// post?val null
	@ $mol_mem
	post( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : null as any
	}

	/// postable false
	postable() {
		return false
	}

} }

