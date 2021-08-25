import axios, { AxiosResponse } from "axios";
import { ApiResponse, Producto } from "../redux/types/Entities";

class ProductoServices {

   async getProductos(): Promise<Array<Producto>> {
      const response: AxiosResponse<ApiResponse<Producto[]>> = await axios.get('https://192.168.100.195:5000/api/Productoes')
      return response.data.ls
   }

   async addProducto(producto: Producto): Promise<Producto> {
      try {
         const response: AxiosResponse<Producto> = await axios.post('https://192.168.100.195:5000/api/Productoes', producto)
         console.log(response)
         return response.data
      } catch (error) {
         console.log(error.message)
      }
   }

   async updateProducto(producto: Producto): Promise<boolean> {
      try {
         await axios.put('https://192.168.100.195:5000/api/Productoes/' + producto.id, producto)
         return true
      } catch (error) {
         return false
      }
   }

   async deleteProducto(id: Number): Promise<Producto> {
      return
   }

}

export default new ProductoServices()