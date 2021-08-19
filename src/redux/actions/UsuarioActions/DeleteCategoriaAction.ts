import { DeleteCategoriaStartAction, DeleteCategoriaErrorAction, DeleteCategoriaSucessAction } from '../../types/CategoriaTypes'
import { CategoriaEnum } from '../../enums/CategoriaEnum'
import { Categoria } from '../../types/Entities'
import CategoriaServices from '../../../services/CategoriaServices'
import store from '../../store'

export default function DeleteCategoriaAction(id: number) {

   function start(): DeleteCategoriaStartAction {
      return {
         type: CategoriaEnum.DELETE_CATEGORIA_START,
         payload: null
      }
   }
   function error(error: Error): DeleteCategoriaErrorAction {
      return {
         type: CategoriaEnum.DELETE_CATEGORIA_ERROR,
         payload: error
      }
   }

   function success(categoria: Categoria): DeleteCategoriaSucessAction {
      return {
         type: CategoriaEnum.DELETE_CATEGORIA_SUCCESS,
         payload: categoria
      }
   }

   store.dispatch(start())
   CategoriaServices.deleteCategoria(id)
      .then(data => {
         store.dispatch(success(data))
      })
      .catch(err => {
         store.dispatch(error(err))
      })

}