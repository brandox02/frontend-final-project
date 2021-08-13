import { CategoriaAction } from '../types/CategoriaTypes'
import { Categoria } from '../types/Entities'
import { CategoriaEnum } from '../enums/CategoriaEnum'

const initialState: Array<Categoria> = []

export default function CategoriaReducer(state = initialState, action: CategoriaAction) {


   switch (action.type) {

      case CategoriaEnum.ADD_CATEGORIA_START:
         return state

      case CategoriaEnum.DELETE_CATEGORIA_START:
         return state
      case CategoriaEnum.POPULATE_CATEGORIA_START:
         return state

      case CategoriaEnum.ADD_CATEGORIA_SUCCESS:
         return action.payload

      case CategoriaEnum.DELETE_CATEGORIA_SUCCESS:
         return action.payload

      case CategoriaEnum.POPULATE_CATEGORIA_SUCCESS:
         return action.payload

      case CategoriaEnum.ADD_CATEGORIA_ERROR:
         return action.payload

      case CategoriaEnum.DELETE_CATEGORIA_ERROR:
         return action.payload

      case CategoriaEnum.POPULATE_CATEGORIA_ERROR:
         return action.payload

      default:
         return state
   }

}