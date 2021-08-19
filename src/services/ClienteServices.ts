import { Cliente } from "../redux/types/Entities";


class ClienteServices {

   async getClientes(): Promise<Array<Cliente>> {

      return []
   }

   async addCliente(Cliente: Cliente): Promise<Cliente> {

      return Cliente
   }

   async deleteCliente(id: Number): Promise<Cliente> {
      return
   }

}

export default new ClienteServices()