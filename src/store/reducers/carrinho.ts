import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialStateCarrinho: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: initialStateCarrinho,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const mercadoria = action.payload

      if (state.itens.find((produto) => produto.id === mercadoria.id)) {
        alert('Item já adicionado ao carrinho')
      } else {
        state.itens.push(mercadoria)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
