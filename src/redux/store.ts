import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import CategoriaReducer from './reducers/CategoriaReducer'
import ClienteReducer from './reducers/ClienteReducer'
import ProductoReducer from './reducers/ProductoReducer'
import UsuarioReducer from './reducers/UsuarioReducer'

const reducers = combineReducers({
   categorias: CategoriaReducer,
   productos: ProductoReducer,
   cliente: ClienteReducer,
   usuario: UsuarioReducer
})

const store = createStore(
   reducers, composeWithDevTools(applyMiddleware(thunk))
)

export default store 