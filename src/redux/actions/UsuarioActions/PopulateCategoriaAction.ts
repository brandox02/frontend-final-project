import { PopulateCategoriaStartAction, PopulateCategoriaErrorAction, PopulateCategoriaSucessAction } from '../../types/CategoriaTypes'
import { CategoriaEnum } from '../../enums/CategoriaEnum'
import { Categoria } from '../../types/Entities'
import store from '../../store'
import CategoriaServices from '../../../services/CategoriaServices'
export default function DeleteCategoriaAction() {

   function start(): PopulateCategoriaStartAction {
      return {
         type: CategoriaEnum.POPULATE_CATEGORIA_START,
         payload: null
      }
   }
   function error(error: Error): PopulateCategoriaErrorAction {
      return {
         type: CategoriaEnum.POPULATE_CATEGORIA_ERROR,
         payload: error
      }
   }

   function success(categoria: Categoria[]): PopulateCategoriaSucessAction {
      return {
         type: CategoriaEnum.POPULATE_CATEGORIA_SUCCESS,
         payload: categoria
      }
   }

   store.dispatch(start())
   CategoriaServices.getCategorias()
      .then(data => {
         store.dispatch(success(data))
      })
      .catch(err => {
         store.dispatch(error(err))
      })

}