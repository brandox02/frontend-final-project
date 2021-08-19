import { AddUsuarioStartAction, AddUsuarioErrorAction, AddUsuarioSucessAction } from '../../types/UsuarioTypes'
import { UsuarioEnum } from '../../enums/UsuarioEnum'
import { Usuario } from '../../types/Entities'
import UsuarioServices from '../../../services/UsuarioServices'
import store from '../../store'


export default async function AddUsuarioAction(Usuario: Usuario) {

   function start(): AddUsuarioStartAction {
      return {
         type: UsuarioEnum.ADD_USUARIO_START,
         payload: null
      }
   }
   function error(error: Error): AddUsuarioErrorAction {
      return {
         type: UsuarioEnum.ADD_USUARIO_ERROR,
         payload: error
      }
   }

   function success(Usuario: Usuario): AddUsuarioSucessAction {
      return {
         type: UsuarioEnum.ADD_USUARIO_SUCCESS,
         payload: Usuario
      }
   }

   store.dispatch(start())
   UsuarioServices.addUsuario(Usuario)
      .then(data => {
         store.dispatch(success(data))
      })
      .catch(err => {
         store.dispatch(error(err))
      })
}