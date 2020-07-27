namespace $.$$ {

	export class $hyoo_realworld_comment_card extends $.$hyoo_realworld_comment_card {

		name() {
			return this.comment().author().name()
		}

		text() {
			return this.comment().body()
		}

		avatar() {
			return this.comment().author().avatar()
		}

		@ $mol_mem
		moment() {
			return new $mol_time_moment( this.comment().updated_moment() ).toOffset( new $mol_time_moment().offset! )
		}

		avatar_link() {
			return this.$.$mol_state_arg.make_link({ person : this.comment().author().name() })
		}

	}

}
