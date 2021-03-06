import { AddProductoStartAction, AddProductoErrorAction, AddProductoSucessAction } from '../../types/ProductoTypes'
import { ProductoEnum } from '../../enums/ProductoEnum'
import { Producto } from '../../types/Entities'
import ProductoServices from '../../../services/ProductoServices'
import { State } from '../../store'
import PopulateProductoAction from './PopulateProductoAction'

const AddProductoAction = (Producto: Producto) => (dispatch: any, state: State) =>{

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

   dispatch(start())
   ProductoServices.addProducto(Producto)
      .then(data => {
         console.log(data)
         dispatch(success(data))
         dispatch(PopulateProductoAction())
      })
      // .catch(err => {
      //    dispatch(error(err))
      // })
}

export default AddProductoAction