import { AddClienteStartAction, AddClienteErrorAction, AddClienteSucessAction } from '../../types/ClienteTypes'
import { ClienteEnum } from '../../enums/ClienteEnum'
import { Cliente } from '../../types/Entities'
import ClienteServices from '../../../services/ClienteServices'
import store from '../../store'


export default async function AddClienteAction(Cliente: Cliente) {

   function start(): AddClienteStartAction {
      return {
         type: ClienteEnum.ADD_CLIENTE_START,
         payload: null
      }
   }
   function error(error: Error): AddClienteErrorAction {
      return {
         type: ClienteEnum.ADD_CLIENTE_ERROR,
         payload: error
      }
   }

   function success(Cliente: Cliente): AddClienteSucessAction {
      return {
         type: ClienteEnum.ADD_CLIENTE_SUCCESS,
         payload: Cliente
      }
   }

   store.dispatch(start())
   ClienteServices.addCliente(Cliente)
      .then(data => {
         store.dispatch(success(data))
      })
      .catch(err => {
         store.dispatch(error(err))
      })
}