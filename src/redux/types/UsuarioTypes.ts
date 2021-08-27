import { Usuario } from "./Entities";
import { UsuarioEnum } from '../enums/UsuarioEnum'

export type PopulateUsuarioStartAction = {
   type: UsuarioEnum.POPULATE_USUARIO_START,
   payload: null
}

export type PopulateUsuarioSucessAction = {
   type: UsuarioEnum.POPULATE_USUARIO_SUCCESS,
   payload: Array<Usuario>
}

export type PopulateUsuarioErrorAction = {
   type: UsuarioEnum.POPULATE_USUARIO_ERROR,
   payload: Error
}

export type AddUsuarioStartAction = {
   type: UsuarioEnum.ADD_USUARIO_START,
   payload: null
}
export type AddUsuarioSucessAction = {
   type: UsuarioEnum.ADD_USUARIO_SUCCESS,
   payload: Usuario
}
export type AddUsuarioErrorAction = {
   type: UsuarioEnum.ADD_USUARIO_ERROR,
   payload: Error
}

export type DeleteUsuarioStartAction = {
   type: UsuarioEnum.DELETE_USUARIO_START,
   payload: null
}
export type DeleteUsuarioSucessAction = {
   type: UsuarioEnum.DELETE_USUARIO_SUCCESS,
   payload: boolean
}
export type DeleteUsuarioErrorAction = {
   type: UsuarioEnum.DELETE_USUARIO_ERROR,
   payload: Error
}

export type UsuarioAction = 
PopulateUsuarioStartAction | PopulateUsuarioSucessAction | PopulateUsuarioErrorAction |
AddUsuarioStartAction | AddUsuarioSucessAction | AddUsuarioErrorAction |
DeleteUsuarioStartAction | DeleteUsuarioSucessAction | DeleteUsuarioErrorAction