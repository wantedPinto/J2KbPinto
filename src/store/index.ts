import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import spinner, { name as spinnerName } from 'store/spinner-store'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  blacklist: [spinnerName],
  storage,
}

export const reducer = combineReducers({
  [spinnerName]: spinner,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export { spinnerName }

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: [],
})

export default store

export type RootState = ReturnType<typeof store.getState>
