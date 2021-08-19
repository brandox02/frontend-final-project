import { Producto } from "./Entities";
import { ProductoEnum } from '../enums/ProductoEnum'

export type PopulateProductoStartAction = {
   type: ProductoEnum.POPULATE_PRODUCTO_START,
   payload: null
}

export type PopulateProductoSucessAction = {
   type: ProductoEnum.POPULATE_PRODUCTO_SUCCESS,
   payload: Array<Producto>
}

export type PopulateProductoErrorAction = {
   type: ProductoEnum.POPULATE_PRODUCTO_ERROR,
   payload: Error
}

export type AddProductoStartAction = {
   type: ProductoEnum.ADD_PRODUCTO_START,
   payload: null
}
export type AddProductoSucessAction = {
   type: ProductoEnum.ADD_PRODUCTO_SUCCESS,
   payload: Producto
}
export type AddProductoErrorAction = {
   type: ProductoEnum.ADD_PRODUCTO_ERROR,
   payload: Error
}

export type DeleteProductoStartAction = {
   type: ProductoEnum.DELETE_PRODUCTO_START,
   payload: null
}
export type DeleteProductoSucessAction = {
   type: ProductoEnum.DELETE_PRODUCTO_SUCCESS,
   payload: Producto
}
export type DeleteProductoErrorAction = {
   type: ProductoEnum.DELETE_PRODUCTO_ERROR,
   payload: Error
}

export type ProductoAction = 
PopulateProductoStartAction | PopulateProductoSucessAction | PopulateProductoErrorAction |
AddProductoStartAction | AddProductoSucessAction | AddProductoErrorAction |
DeleteProductoStartAction | DeleteProductoSucessAction | DeleteProductoErrorAction