
import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer,persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import Slice from '../Slice'
 
 
const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  prods:Slice
})

const persistedReducer = persistReducer(persistConfig,rootReducer)
 
export default () => {
  let store = configureStore({
    reducer:persistedReducer
  })
  let persistor = persistStore(store)
  return { store, persistor }
}