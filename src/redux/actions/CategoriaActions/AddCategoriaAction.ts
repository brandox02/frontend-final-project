import { AddCategoriaStartAction, AddCategoriaErrorAction, AddCategoriaSucessAction } from '../../types/CategoriaTypes'
import { CategoriaEnum } from '../../enums/CategoriaEnum'
import { Categoria } from '../../types/Entities'
import CategoriaServices from '../../../services/CategoriaServices'
import  { State } from '../../store'


const AddCategoriaAction =  (categoria: Categoria) => (dispatch: any, state: State) => {

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

   dispatch(start())
   CategoriaServices.addCategoria(categoria)
      .then(data => {
         dispatch(success(data))
      })
      .catch(err => {
         dispatch(error(err))
      })
}

export default AddCategoriaAction