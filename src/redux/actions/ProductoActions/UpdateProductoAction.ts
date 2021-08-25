import { UpdateProductoStartAction, UpdateProductoErrorAction, UpdateProductoSucessAction } from '../../types/ProductoTypes'
import { ProductoEnum } from '../../enums/ProductoEnum'
import { Producto } from '../../types/Entities'
import ProductoServices from '../../../services/ProductoServices'
import { State } from '../../store'
import PopulateProductoAction from './PopulateProductoAction'

const AddProductoAction = (Producto: Producto) => (dispatch: any, state: State) =>{

   function start(): UpdateProductoStartAction {
      return {
         type: ProductoEnum.UPDATE_PRODUCTO_START,
         payload: null
      }
   }
   function error(error: Error): UpdateProductoErrorAction {
      return {
         type: ProductoEnum.UPDATE_PRODUCTO_ERROR,
         payload: error
      }
   }

   function success(f: boolean): UpdateProductoSucessAction {
      return {
         type: ProductoEnum.UPDATE_PRODUCTO_SUCCESS,
         payload: f
      }
   }

   dispatch(start())
   ProductoServices.updateProducto(Producto)
      .then(data => {
         dispatch(success(data))
         dispatch(PopulateProductoAction())
      })
      // .catch(err => {
      //    dispatch(error(err))
      // })
}

export default AddProductoAction