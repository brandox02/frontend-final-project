import { CreateOrdenErrorAction, CreateOrdenStartAction, CreateOrdenSucessAction } from '../../types/OrdenTypes'
import { OrdenEnum } from '../../enums/OrdenEnum'
import { Orden } from '../../types/Entities'
import OrdenServices from '../../../services/OrdenServices'
import store from '../../store'


export default async function createOrdenAction(Orden: Orden) {

   function start(): CreateOrdenStartAction {
      return {
         type: OrdenEnum.CREATE_ORDEN_START,
         payload: null
      }
   }
   function error(error: Error): CreateOrdenErrorAction {
      return {
         type: OrdenEnum.CREATE_ORDEN_ERROR,
         payload: error
      }
   }

   function success(Orden: Orden): CreateOrdenSucessAction {
      return {
         type: OrdenEnum.CREATE_ORDEN_SUCCESS,
         payload: Orden
      }
   }

   store.dispatch(start())
   OrdenServices.createOrden(Orden)
      .then(data => {
         store.dispatch(success(data))
      })
      .catch(err => {
         store.dispatch(error(err))
      })
}