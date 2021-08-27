import { DetalleOrden, Orden } from "../redux/types/Entities";
import axios from '../baseAxios'

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