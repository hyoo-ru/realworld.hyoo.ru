namespace $ { export class $conduit_sign_in extends $mol_page {

	/// title @ \Sign In
	title() {
		return this.$.$mol_locale.text( "$conduit_sign_in_title" )
	}

	/// tools / <= Close
	tools() {
		return [].concat( this.Close() )
	}

	/// Close $mol_link
	/// 	arg *
	/// 		sign null
	/// 		edit null
	/// 	sub / <= Close_icon
	@ $mol_mem
	Close() {
		return (( obj )=>{
			obj.arg = () => ({
			"sign" :  null as any ,
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
	/// 		<= Mail_field
	/// 		<= Pass_field
	/// 	buttons /
	/// 		<= Auth
	/// 		<= Auth_status
	@ $mol_mem
	Form() {
		return (( obj )=>{
			obj.form_fields = () => [].concat( this.Mail_field() , this.Pass_field() )
			obj.buttons = () => [].concat( this.Auth() , this.Auth_status() )
			return obj
		})( new this.$.$mol_form )
	}

	/// Mail_field $mol_form_field
	/// 	name <= Mail_name
	/// 	control <= Mail
	@ $mol_mem
	Mail_field() {
		return (( obj )=>{
			obj.name = () => this.Mail_name()
			obj.control = () => this.Mail()
			return obj
		})( new this.$.$mol_form_field )
	}

	/// Mail_name @ \E-Mail
	Mail_name() {
		return this.$.$mol_locale.text( "$conduit_sign_in_Mail_name" )
	}

	/// Mail $mol_string
	/// 	hint \user@example.org
	/// 	value?val <=> mail?val
	@ $mol_mem
	Mail() {
		return (( obj )=>{
			obj.hint = () => "user@example.org"
			obj.value = ( val? : any ) => this.mail( val )
			return obj
		})( new this.$.$mol_string )
	}

	/// mail?val \
	@ $mol_mem
	mail( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Pass_field $mol_form_field
	/// 	name <= Pass_name
	/// 	control <= Pass
	@ $mol_mem
	Pass_field() {
		return (( obj )=>{
			obj.name = () => this.Pass_name()
			obj.control = () => this.Pass()
			return obj
		})( new this.$.$mol_form_field )
	}

	/// Pass_name @ \Password
	Pass_name() {
		return this.$.$mol_locale.text( "$conduit_sign_in_Pass_name" )
	}

	/// Pass $mol_string
	/// 	type \password
	/// 	hint \########
	/// 	value?val <=> pass?val
	@ $mol_mem
	Pass() {
		return (( obj )=>{
			obj.type = () => "password"
			obj.hint = () => "########"
			obj.value = ( val? : any ) => this.pass( val )
			return obj
		})( new this.$.$mol_string )
	}

	/// pass?val \
	@ $mol_mem
	pass( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Auth $mol_button_major
	/// 	title <= Auth_label
	/// 	click?val <=> auth?val
	@ $mol_mem
	Auth() {
		return (( obj )=>{
			obj.title = () => this.Auth_label()
			obj.click = ( val? : any ) => this.auth( val )
			return obj
		})( new this.$.$mol_button_major )
	}

	/// Auth_label @ \Sign In
	Auth_label() {
		return this.$.$mol_locale.text( "$conduit_sign_in_Auth_label" )
	}

	/// auth?val null
	@ $mol_mem
	auth( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : null as any
	}

	/// Auth_status $mol_status status <= auth
	@ $mol_mem
	Auth_status() {
		return (( obj )=>{
			obj.status = () => this.auth()
			return obj
		})( new this.$.$mol_status )
	}

} }

