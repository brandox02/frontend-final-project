import { AddProductoStartAction, AddProductoErrorAction, AddProductoSucessAction } from '../../types/ProductoTypes'
import { ProductoEnum } from '../../enums/ProductoEnum'
import { Producto } from '../../types/Entities'
import ProductoServices from '../../../services/ProductoServices'
import store from '../../store'


export default async function AddProductoAction(Producto: Producto) {

   function start(): AddProductoStartAction {
      return {
         type: ProductoEnum.ADD_PRODUCTO_START,
         payload: null
      }
   }
   function error(error: Error): AddProductoErrorAction {
      return {
         type: ProductoEnum.ADD_PRODUCTO_ERROR,
         payload: error
      }
   }

   function success(Producto: Producto): AddProductoSucessAction {
      return {
         type: ProductoEnum.ADD_PRODUCTO_SUCCESS,
         payload: Producto
      }
   }

   store.dispatch(start())
   ProductoServices.addProducto(Producto)
      .then(data => {
         store.dispatch(success(data))
      })
      .catch(err => {
         store.dispatch(error(err))
      })
}