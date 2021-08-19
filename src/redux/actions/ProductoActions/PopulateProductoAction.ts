import { PopulateProductoStartAction, PopulateProductoErrorAction, PopulateProductoSucessAction } from '../../types/ProductoTypes'
import { ProductoEnum } from '../../enums/ProductoEnum'
import { Producto } from '../../types/Entities'
import store from '../../store'
import ProductoServices from '../../../services/ProductoServices'


export default function DeleteProductoAction() {

   function start(): PopulateProductoStartAction {
      return {
         type: ProductoEnum.POPULATE_PRODUCTO_START,
         payload: null
      }
   }
   function error(error: Error): PopulateProductoErrorAction {
      return {
         type: ProductoEnum.POPULATE_PRODUCTO_ERROR,
         payload: error
      }
   }

   function success(Producto: Producto[]): PopulateProductoSucessAction {
      return {
         type: ProductoEnum.POPULATE_PRODUCTO_SUCCESS,
         payload: Producto
      }
   }

   store.dispatch(start())
   ProductoServices.getProductos()
      .then(data => {
         store.dispatch(success(data))
      })
      .catch(err => {
         store.dispatch(error(err))
      })
}