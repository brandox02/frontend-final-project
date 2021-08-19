import { DeleteProductoStartAction, DeleteProductoErrorAction, DeleteProductoSucessAction } from '../../types/ProductoTypes'
import { ProductoEnum } from '../../enums/ProductoEnum'
import { Producto } from '../../types/Entities'
import ProductoServices from '../../../services/ProductoServices'
import store from '../../store'

export default function DeleteProductoAction(id: number) {

   function start(): DeleteProductoStartAction {
      return {
         type: ProductoEnum.DELETE_PRODUCTO_START,
         payload: null
      }
   }
   function error(error: Error): DeleteProductoErrorAction {
      return {
         type: ProductoEnum.DELETE_PRODUCTO_ERROR,
         payload: error
      }
   }

   function success(Producto: Producto): DeleteProductoSucessAction {
      return {
         type: ProductoEnum.DELETE_PRODUCTO_SUCCESS,
         payload: Producto
      }
   }

   store.dispatch(start())
   ProductoServices.deleteProducto(id)
      .then(data => {
         store.dispatch(success(data))
      })
      .catch(err => {
         store.dispatch(error(err))
      })

}