import { ClienteAction } from '../types/ClienteTypes'
import { Cliente } from '../types/Entities'
import { ClienteEnum } from '../enums/ClienteEnum'

const initialState: Array<Cliente> | null =  null

export default function ClienteReducer(state = initialState, action: ClienteAction) {


   switch (action.type) {

      case ClienteEnum.ADD_CLIENTE_START:
         return state

      case ClienteEnum.DELETE_CLIENTE_START:
         return state
      case ClienteEnum.POPULATE_CLIENTE_START:
         return state

      case ClienteEnum.ADD_CLIENTE_SUCCESS:
         return state

      case ClienteEnum.DELETE_CLIENTE_SUCCESS:
         return action.payload

      case ClienteEnum.POPULATE_CLIENTE_SUCCESS:
         return action.payload

      case ClienteEnum.ADD_CLIENTE_ERROR:
         return action.payload

      case ClienteEnum.DELETE_CLIENTE_ERROR:
         return action.payload

      case ClienteEnum.POPULATE_CLIENTE_ERROR:
         return action.payload

      default:
         return state
   }

}