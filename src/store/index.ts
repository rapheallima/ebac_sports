import { configureStore } from '@reduxjs/toolkit'
import carrinho from './reducers/carrinho'
import favorito from './reducers/favorito'
import api from '../services/api'
import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

export const store = configureStore({
  reducer: {
    carrinho: carrinho,
    favorito: favorito,
    [api.reducerPath]: api.reducer
  },
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
