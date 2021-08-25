import { UpdateCategoriaStartAction, UpdateCategoriaErrorAction, UpdateCategoriaSucessAction } from '../../types/CategoriaTypes'
import { CategoriaEnum } from '../../enums/CategoriaEnum'
import { Categoria } from '../../types/Entities'
import CategoriaServices from '../../../services/CategoriaServices'
import { State } from '../../store'
import PopulateCategoriaAction from './PopulateCategoriaAction'


const UpdateCategoriaAction = (categoria: Categoria) => (dispatch: any, state: State) => {

   function start(): UpdateCategoriaStartAction {
      return {
         type: CategoriaEnum.UPDATE_CATEGORIA_START,
         payload: null
      }
   }
   function error(error: Error): UpdateCategoriaErrorAction {
      return {
         type: CategoriaEnum.UPDATE_CATEGORIA_ERROR,
         payload: error
      }
   }

   function success(): UpdateCategoriaSucessAction {
      return {
         type: CategoriaEnum.UPDATE_CATEGORIA_SUCCESS,
         payload: null
      }
   }

   dispatch(start())
   CategoriaServices.updateCategoria(categoria)
      .then(data => {
         if (data) {

            dispatch(success())
            dispatch(PopulateCategoriaAction())
         }
      })
      .catch(err => {
         dispatch(error(err))
      })
}

export default UpdateCategoriaAction