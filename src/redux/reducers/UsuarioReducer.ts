import { UsuarioAction } from '../types/UsuarioTypes'
import { Usuario } from '../types/Entities'
import { UsuarioEnum } from '../enums/UsuarioEnum'

const initialState: Array<Usuario> | null = null

export default function UsuarioReducer(state = initialState, action: UsuarioAction) {


   switch (action.type) {

      case UsuarioEnum.ADD_USUARIO_START:
         return state

      case UsuarioEnum.DELETE_USUARIO_START:
         return state
      case UsuarioEnum.POPULATE_USUARIO_START:
         return state

      case UsuarioEnum.ADD_USUARIO_SUCCESS:
         return action.payload

      case UsuarioEnum.DELETE_USUARIO_SUCCESS:
         return action.payload

      case UsuarioEnum.POPULATE_USUARIO_SUCCESS:
         return action.payload

      case UsuarioEnum.ADD_USUARIO_ERROR:
         return action.payload

      case UsuarioEnum.DELETE_USUARIO_ERROR:
         return action.payload

      case UsuarioEnum.POPULATE_USUARIO_ERROR:
         return action.payload

      default:
         return state
   }

}