namespace $.$$ {

	export class $conduit_comment_card extends $.$conduit_comment_card {

		name() {
			return this.comment().author.username
		}

		text() {
			return this.comment().body
		}

		avatar() {
			return this.comment().author.image
		}

		@ $mol_mem
		moment() {
			return new $mol_time_moment( this.comment().updatedAt ).toOffset( new $mol_time_moment().offset )
		}

		avatar_link() {
			return this.$.$mol_state_arg.make_link({ person : this.comment().author.username })
		}

	}

}
