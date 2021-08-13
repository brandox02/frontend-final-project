import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import categoriaReducer from './reducers/CategoriaReducer'

const reducers = combineReducers({
   categorias: categoriaReducer
})

const store = createStore(
   reducers, composeWithDevTools(applyMiddleware(thunk))
)

export default store 