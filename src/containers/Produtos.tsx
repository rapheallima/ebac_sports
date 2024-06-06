import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

interface Props {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  toggleFavorito: (produto: ProdutoType) => void
}

const Produtos: React.FC<Props> = ({ produtos, favoritos, toggleFavorito }) => {
  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={favoritos.some((fav) => fav.id === produto.id)}
          toggleFavorito={toggleFavorito}
        />
      ))}
    </S.Produtos>
  )
}

export default Produtos
