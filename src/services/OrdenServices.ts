import { DetalleOrden, Orden } from "../redux/types/Entities";


class OrdenServices {

   async createOrden(orden: Orden): Promise<Orden> {

      return 
   }

   async addOrdenDetail(detalleOrden: DetalleOrden): Promise<Orden> {

      return
   }

   async deleteOrden(id: Number): Promise<Orden> {
      return
   }

}

export default new OrdenServices()