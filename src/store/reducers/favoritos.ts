import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritoState = {
  itens: Produto[]
  produtosFavoritos: Record<number, boolean>
}

const initialState: favoritoState = {
  itens: [],
  produtosFavoritos: {}
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      state.produtosFavoritos[produto.id] = !state.produtosFavoritos[produto.id]

      if (state.produtosFavoritos[produto.id]) {
        state.itens.push(produto)
      } else {
        state.itens = state.itens.filter((p) => p.id !== produto.id)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
