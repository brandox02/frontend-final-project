import { AddCategoriaStartAction, AddCategoriaErrorAction, AddCategoriaSucessAction } from '../../types/CategoriaTypes'
import { CategoriaEnum } from '../../enums/CategoriaEnum'
import { Categoria } from '../../types/Entities'
import CategoriaServices from '../../../services/CategoriaServices'
import store from '../../store'


export default async function AddCategoriaAction(categoria: Categoria) {

   function start(): AddCategoriaStartAction {
      return {
         type: CategoriaEnum.ADD_CATEGORIA_START,
         payload: null
      }
   }
   function error(error: Error): AddCategoriaErrorAction {
      return {
         type: CategoriaEnum.ADD_CATEGORIA_ERROR,
         payload: error
      }
   }

   function success(categoria: Categoria): AddCategoriaSucessAction {
      return {
         type: CategoriaEnum.ADD_CATEGORIA_SUCCESS,
         payload: categoria
      }
   }

   store.dispatch(start())
   CategoriaServices.addCategoria(categoria)
      .then(data => {
         store.dispatch(success(data))
      })
      .catch(err => {
         store.dispatch(error(err))
      })
}