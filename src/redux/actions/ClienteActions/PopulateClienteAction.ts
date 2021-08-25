import { PopulateClienteStartAction, PopulateClienteErrorAction, PopulateClienteSucessAction } from '../../types/ClienteTypes'
import { ClienteEnum } from '../../enums/ClienteEnum'
import { Cliente } from '../../types/Entities'
import store, { State } from '../../store'
import ClienteServices from '../../../services/ClienteServices'

const PopulateClienteAction = () => (dispatch: any, state: State) => {

   function start(): PopulateClienteStartAction {
      return {
         type: ClienteEnum.POPULATE_CLIENTE_START,
         payload: null
      }
   }
   function error(error: Error): PopulateClienteErrorAction {
      return {
         type: ClienteEnum.POPULATE_CLIENTE_ERROR,
         payload: error
      }
   }

   function success(Cliente: Cliente[]): PopulateClienteSucessAction {
      return {
         type: ClienteEnum.POPULATE_CLIENTE_SUCCESS,
         payload: Cliente
      }
   }

   store.dispatch(start())
   ClienteServices.getClientes()
      .then(data => {
         store.dispatch(success(data))
      })
      .catch(err => {
         store.dispatch(error(err))
      })

}
export default PopulateClienteAction