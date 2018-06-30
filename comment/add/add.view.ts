namespace $.$$ {

	export class $conduit_comment_add extends $.$conduit_comment_add {

		@ $mol_mem
		post( next? : any ) {
			if( !next ) return

			this.$.$conduit_domain.comment_add( this.article().slug , { body : this.message() } , $mol_atom_force_update ).valueOf()
			
			this.message( '' )
			
			return null as any
		}

		@ $mol_mem
		postable() {
			return Boolean( this.message() )
		}

	}

}
