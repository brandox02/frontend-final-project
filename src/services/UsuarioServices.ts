import { Usuario } from "../redux/types/Entities";


class UsuarioServices {

   async getUsuarios(): Promise<Array<Usuario>> {

      return []
   }

   async addUsuario(Usuario: Usuario): Promise<Usuario> {

      return Usuario
   }

   async deleteUsuario(id: Number): Promise<Usuario> {
      return
   }

}

export default new UsuarioServices()