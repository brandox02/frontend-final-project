import { UpdateClienteStartAction, UpdateClienteErrorAction, UpdateClienteSucessAction } from '../../types/ClienteTypes'
import { ClienteEnum } from '../../enums/ClienteEnum'
import { Cliente } from '../../types/Entities'
import ClienteServices from '../../../services/ClienteServices'
import store, { State } from '../../store'
import PopulateClienteAction from './PopulateClienteAction'


const UpdateClienteAction = (cliente: Cliente) => (dispatch: any, state: State) =>  {

   function start(): UpdateClienteStartAction {
      return {
         type: ClienteEnum.UPDATE_CLIENTE_START,
         payload: null
      }
   }
   function error(error: Error): UpdateClienteErrorAction {
      return {
         type: ClienteEnum.UPDATE_CLIENTE_ERROR,
         payload: error
      }
   }

   function success(f: boolean): UpdateClienteSucessAction {
      return {
         type: ClienteEnum.UPDATE_CLIENTE_SUCCESS,
         payload: f
      }
   }

   dispatch(start())
   ClienteServices.updateCliente(cliente)
      .then(data => {
         dispatch(success(data))
         dispatch(PopulateClienteAction())
      })
      // .catch(err => {
      //    console.log(err)
      //    dispatch(error(err))
      // })
}

export default UpdateClienteAction