import { Categoria } from "./Entities";
import { CategoriaEnum } from '../enums/CategoriaEnum'

export type PopulateCategoriaStartAction = {
   type: CategoriaEnum.POPULATE_CATEGORIA_START,
   payload: null
}

export type PopulateCategoriaSucessAction = {
   type: CategoriaEnum.POPULATE_CATEGORIA_SUCCESS,
   payload: Array<Categoria>
}

export type PopulateCategoriaErrorAction = {
   type: CategoriaEnum.POPULATE_CATEGORIA_ERROR,
   payload: Error
}

export type AddCategoriaStartAction = {
   type: CategoriaEnum.ADD_CATEGORIA_START,
   payload: null
}
export type AddCategoriaSucessAction = {
   type: CategoriaEnum.ADD_CATEGORIA_SUCCESS,
   payload: Categoria
}
export type AddCategoriaErrorAction = {
   type: CategoriaEnum.ADD_CATEGORIA_ERROR,
   payload: Error
}

export type UpdateCategoriaStartAction = {
   type: CategoriaEnum.UPDATE_CATEGORIA_START,
   payload: null
}
export type UpdateCategoriaSucessAction = {
   type: CategoriaEnum.UPDATE_CATEGORIA_SUCCESS,
   payload: null
}
export type UpdateCategoriaErrorAction = {
   type: CategoriaEnum.UPDATE_CATEGORIA_ERROR,
   payload: Error
}

export type DeleteCategoriaStartAction = {
   type: CategoriaEnum.DELETE_CATEGORIA_START,
   payload: null
}
export type DeleteCategoriaSucessAction = {
   type: CategoriaEnum.DELETE_CATEGORIA_SUCCESS,
   payload: Categoria
}
export type DeleteCategoriaErrorAction = {
   type: CategoriaEnum.DELETE_CATEGORIA_ERROR,
   payload: Error
}

export type CategoriaAction = 
PopulateCategoriaStartAction | PopulateCategoriaSucessAction | PopulateCategoriaErrorAction |
AddCategoriaStartAction | AddCategoriaSucessAction | AddCategoriaErrorAction |
DeleteCategoriaStartAction | DeleteCategoriaSucessAction | DeleteCategoriaErrorAction