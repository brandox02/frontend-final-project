import { PopulateCategoriaStartAction, PopulateCategoriaErrorAction, PopulateCategoriaSucessAction } from '../../types/CategoriaTypes'
import { CategoriaEnum } from '../../enums/CategoriaEnum'
import { Categoria } from '../../types/Entities'
import CategoriaServices from '../../../services/CategoriaServices'
import { State } from '../../store'


const PopulateCategoriaAction = () => (dispatch: any, getState: State) => {

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

   dispatch(start())
   CategoriaServices.getCategorias()
      .then(data => {
         console.log(data)
         dispatch(success(data))
      })
      .catch(err => {
         dispatch(error(err))
      })

}

export default PopulateCategoriaAction