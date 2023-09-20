import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtosData, isLoading } = useGetProdutosQuery()

  if (isLoading) {
    return <h2>Carregando os produtos...</h2>
  } else <h2>Ocorreu um erro ao carregar os produtos.</h2>

  return (
    <>
      <S.Produtos>
        {produtosData?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
