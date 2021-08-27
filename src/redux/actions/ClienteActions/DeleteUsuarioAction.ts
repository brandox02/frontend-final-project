import { DeleteClienteStartAction, DeleteClienteErrorAction, DeleteClienteSucessAction } from '../../types/ClienteTypes'
import { ClienteEnum } from '../../enums/ClienteEnum'
import { Cliente } from '../../types/Entities'
import ClienteServices from '../../../services/ClienteServices'
import store from '../../store'

export default function DeleteClienteAction(id: number) {

   function start(): DeleteClienteStartAction {
      return {
         type: ClienteEnum.DELETE_CLIENTE_START,
         payload: null
      }
   }
   function error(error: Error): DeleteClienteErrorAction {
      return {
         type: ClienteEnum.DELETE_CLIENTE_ERROR,
         payload: error
      }
   }

   function success(Cliente: boolean): DeleteClienteSucessAction {
      return {
         type: ClienteEnum.DELETE_CLIENTE_SUCCESS,
         payload: Cliente
      }
   }

   store.dispatch(start())
   ClienteServices.deleteCliente(id)
      .then(data => {
         store.dispatch(success(data))
      })
      .catch(err => {
         store.dispatch(error(err))
      })

}