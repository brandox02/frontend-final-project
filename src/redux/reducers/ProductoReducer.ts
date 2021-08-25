import { ProductoAction } from '../types/ProductoTypes'
import { Producto } from '../types/Entities'
import { ProductoEnum } from '../enums/ProductoEnum'

const initialState: Array<Producto> = []

export default function ProductoReducer(state = initialState, action: ProductoAction) {


   switch (action.type) {

      case ProductoEnum.ADD_PRODUCTO_START:
         return state

      case ProductoEnum.UPDATE_PRODUCTO_START:
         return state

      case ProductoEnum.DELETE_PRODUCTO_START:
         return state
      case ProductoEnum.POPULATE_PRODUCTO_START:
         return state

      case ProductoEnum.ADD_PRODUCTO_SUCCESS:
         return [...state, action.payload]

      case ProductoEnum.UPDATE_PRODUCTO_SUCCESS:
         return state

      case ProductoEnum.DELETE_PRODUCTO_SUCCESS:
         return action.payload

      case ProductoEnum.POPULATE_PRODUCTO_SUCCESS:
         return action.payload

      case ProductoEnum.ADD_PRODUCTO_ERROR:
         return action.payload

      case ProductoEnum.ADD_PRODUCTO_ERROR:
         return action.payload

      case ProductoEnum.DELETE_PRODUCTO_ERROR:
         return action.payload

      case ProductoEnum.POPULATE_PRODUCTO_ERROR:
         return action.payload


      default:
         return state
   }

}