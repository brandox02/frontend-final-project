import { Cliente } from "./Entities";
import { ClienteEnum } from '../enums/ClienteEnum'

export type PopulateClienteStartAction = {
   type: ClienteEnum.POPULATE_CLIENTE_START,
   payload: null
}

export type PopulateClienteSucessAction = {
   type: ClienteEnum.POPULATE_CLIENTE_SUCCESS,
   payload: Array<Cliente>
}

export type PopulateClienteErrorAction = {
   type: ClienteEnum.POPULATE_CLIENTE_ERROR,
   payload: Error
}

export type AddClienteStartAction = {
   type: ClienteEnum.ADD_CLIENTE_START,
   payload: null
}
export type AddClienteSucessAction = {
   type: ClienteEnum.ADD_CLIENTE_SUCCESS,
   payload: Cliente
}
export type AddClienteErrorAction = {
   type: ClienteEnum.ADD_CLIENTE_ERROR,
   payload: Error
}
export type UpdateClienteStartAction = {
   type: ClienteEnum.UPDATE_CLIENTE_START,
   payload: null
}
export type UpdateClienteSucessAction = {
   type: ClienteEnum.UPDATE_CLIENTE_SUCCESS,
   payload: boolean
}
export type UpdateClienteErrorAction = {
   type: ClienteEnum.UPDATE_CLIENTE_ERROR,
   payload: Error
}

export type DeleteClienteStartAction = {
   type: ClienteEnum.DELETE_CLIENTE_START,
   payload: null
}

export type DeleteClienteSucessAction = {
   type: ClienteEnum.DELETE_CLIENTE_SUCCESS,
   payload: Cliente
}
export type DeleteClienteErrorAction = {
   type: ClienteEnum.DELETE_CLIENTE_ERROR,
   payload: Error
}

export type ClienteAction = 
PopulateClienteStartAction | PopulateClienteSucessAction | PopulateClienteErrorAction |
AddClienteStartAction | AddClienteSucessAction | AddClienteErrorAction |
DeleteClienteStartAction | DeleteClienteSucessAction | DeleteClienteErrorAction