import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
  estaNosFavoritos: false
}

const initialStateFavoritos: FavoritosState = {
  itens: [],
  estaNosFavoritos: false
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState: initialStateFavoritos,
  reducers: {
    adicionarAosFavoritos: (state, action: PayloadAction<Produto>) => {
      const mercadoria = action.payload

      if (!state.itens.find((produto) => produto.id === mercadoria.id)) {
        state.itens.push(mercadoria)
      }
    },
    removerDosFavoritos: (state, action: PayloadAction<Produto>) => {
      const mercadoria = action.payload
      state.itens = state.itens.filter(
        (produto) => produto.id !== mercadoria.id
      )
    }
  }
})

export const { adicionarAosFavoritos, removerDosFavoritos } =
  favoritosSlice.actions

export const favoritosReducer = favoritosSlice.reducer
