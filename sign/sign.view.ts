
namespace $.$$ {

	export class $hyoo_realworld_sign extends $.$hyoo_realworld_sign {

		sub() {
			if ( this.$.$mol_state_arg.value( 'sign' ) === 'up' ) {
				return [ this.Sign_up() ];
			}
			return [ this.Sign_in() ];
		}

	}

}
