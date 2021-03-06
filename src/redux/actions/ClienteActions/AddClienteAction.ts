import { AddClienteStartAction, AddClienteErrorAction, AddClienteSucessAction } from '../../types/ClienteTypes'
import { ClienteEnum } from '../../enums/ClienteEnum'
import { Cliente } from '../../types/Entities'
import ClienteServices from '../../../services/ClienteServices'
import store, { State } from '../../store'
import PopulateClienteAction from './PopulateClienteAction'


const AddClienteAction = (cliente: Cliente) => (dispatch: any, state: State) =>  {

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

   dispatch(start())
   ClienteServices.addCliente(cliente)
      .then(data => {
         dispatch(success(data))
         dispatch(PopulateClienteAction())
      })
      // .catch(err => {
      //    console.log(err)
      //    dispatch(error(err))
      // })
}

export default AddClienteAction