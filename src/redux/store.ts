import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import CategoriaReducer from './reducers/CategoriaReducer'
import ClienteReducer from './reducers/ClienteReducer'
import ProductoReducer from './reducers/ProductoReducer'
import UsuarioReducer from './reducers/UsuarioReducer'
import { Categoria, Producto, Cliente, Usuario } from './types/Entities'


export type State = {
   categorias: Categoria[],
   productos: Producto[],
   clientes: Cliente[],
   usuarios: Usuario[]
}

const reducers = combineReducers({
   categorias: CategoriaReducer,
   productos: ProductoReducer,
   clientes: ClienteReducer,
   usuarios: UsuarioReducer
})

const store = createStore(
   reducers, composeWithDevTools(applyMiddleware(thunk))
)

export default store 