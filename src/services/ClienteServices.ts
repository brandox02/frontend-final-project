import  { AxiosResponse } from "axios";
import { ApiResponse, Cliente } from "../redux/types/Entities";
import axios from '../baseAxios'

class ClienteServices {

   async getClientes(): Promise<Array<Cliente>> {
      const response: AxiosResponse<ApiResponse<Cliente[]>> = await axios.get('/api/Clientes')
      return response.data.ls
   }

   async addCliente(cliente: Cliente): Promise<Cliente> {
      try {
         const response: AxiosResponse<ApiResponse<Cliente>> = await axios.post('/api/Clientes/ClientRegistrer', cliente)
         return response.data.ls
      } catch (error) {
         console.log(error.message)
      }
     
   }

   async deleteCliente(id: Number): Promise<boolean> {
      try {
         await axios.delete('/api/Clientes/' + id)
         return true
      } catch (error) {
         return false
      }
   }

   async updateCliente(cliente: Cliente): Promise<boolean> {
      try {
         await axios.put('/api/Clientes/' + cliente.id, cliente)
         return true
      } catch (error) {
         return false
      }
   }
}

export default new ClienteServices()