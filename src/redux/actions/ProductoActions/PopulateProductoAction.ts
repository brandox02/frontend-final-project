import { PopulateProductoStartAction, PopulateProductoErrorAction, PopulateProductoSucessAction } from '../../types/ProductoTypes'
import { ProductoEnum } from '../../enums/ProductoEnum'
import { Producto } from '../../types/Entities'
import store, { State } from '../../store'
import ProductoServices from '../../../services/ProductoServices'


const PopulateProductoAction = () => (dispatch: any, state: State ) => {

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

   dispatch(start())
   ProductoServices.getProductos()
      .then(data => {
         dispatch(success(data))
      })
      .catch(err => {
         dispatch(error(err))
      })
}

export default PopulateProductoAction