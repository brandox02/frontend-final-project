import { Categoria } from "../redux/types/Entities";


class CategoriaServices {

   async getCategorias(): Promise<Array<Categoria>> {

      return []
   }

   async addCategoria(categoria: Categoria): Promise<Categoria> {

      return categoria
   }

   async deleteCategoria(id: Number): Promise<Categoria> {
      return
   }

}

export default new CategoriaServices()