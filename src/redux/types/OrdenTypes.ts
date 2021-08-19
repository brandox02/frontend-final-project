import { Orden } from "./Entities";
import { OrdenEnum } from '../enums/OrdenEnum'

export type CreateOrdenStartAction = {
   type: OrdenEnum.CREATE_ORDEN_START,
   payload: null
}

export type CreateOrdenSucessAction = {
   type: OrdenEnum.CREATE_ORDEN_SUCCESS,
   payload: Orden
}

export type CreateOrdenErrorAction = {
   type: OrdenEnum.CREATE_ORDEN_ERROR,
   payload: Error
}

export type DeleteOrdenStartAction = {
   type: OrdenEnum.DELETE_ORDEN_START,
   payload: null
}
export type DeleteOrdenSucessAction = {
   type: OrdenEnum.DELETE_ORDEN_SUCCESS,
   payload: Orden
}
export type DeleteOrdenErrorAction = {
   type: OrdenEnum.DELETE_ORDEN_ERROR,
   payload: Error
}

export type AddOrdenDetailStartAction = {
   type: OrdenEnum.ADD_ORDEN_DETAIL_START,
   payload: null
}
export type AddOrdenDetailSucessAction = {
   type: OrdenEnum.ADD_ORDEN_DETAIL_SUCCESS,
   payload: Orden
}
export type AddOrdenDetailErrorAction = {
   type: OrdenEnum.ADD_ORDEN_DETAIL_ERROR,
   payload: Error
}

export type OrdenAction = 
CreateOrdenStartAction | CreateOrdenSucessAction | CreateOrdenErrorAction |
DeleteOrdenStartAction | DeleteOrdenSucessAction | DeleteOrdenErrorAction |
AddOrdenDetailStartAction | AddOrdenDetailSucessAction | AddOrdenDetailErrorAction