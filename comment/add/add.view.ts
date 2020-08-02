namespace $.$$ {

	export class $hyoo_realworld_comment_add extends $.$hyoo_realworld_comment_add {

		@ $mol_fiber.method
		post() {
			
			this.$.$hyoo_realworld_comment.save(
				this.article().slug(),
				{ body : this.message() },
			)
			
			this.message( '' )
			
			return null as any
		}

		@ $mol_mem
		postable() {
			return Boolean( this.message() )
		}

	}

}
