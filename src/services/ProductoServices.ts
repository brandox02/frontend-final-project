import { Producto } from "../redux/types/Entities";


class ProductoServices {

   async getProductos(): Promise<Array<Producto>> {

      return []
   }

   async addProducto(Producto: Producto): Promise<Producto> {

      return Producto
   }

   async deleteProducto(id: Number): Promise<Producto> {
      return
   }

}

export default new ProductoServices()