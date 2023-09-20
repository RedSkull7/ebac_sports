import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { adicionar } from '../../store/reducers/carrinho'
import {
  adicionarAosFavoritos,
  removerDosFavoritos
} from '../../store/reducers/favoritos'
import { RootReducer } from '../../store'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const Produto = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const estaNosFavoritos = useSelector((state: RootReducer) =>
    state.favoritos.itens.some((item) => item.id === produto.id)
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => {
          if (estaNosFavoritos) {
            dispatch(removerDosFavoritos(produto))
          } else {
            dispatch(adicionarAosFavoritos(produto))
          }
        }}
        type="button"
      >
        {estaNosFavoritos
          ? '- Remover dos Favoritos'
          : '+ Adicionar aos Favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
