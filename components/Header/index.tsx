import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { HeaderContainer } from './styles'
import AppContext from "../../context/appContext"

const Header = () => {
    const appContext = useContext(AppContext)
    const { cartProducts } = appContext

    return <HeaderContainer>
        <Image
            src="/images/logo.png"
            alt="Picture of the author"
            width={140}
            height={45}
        />
        <Link href="/">
          <a>Produtos</a>
        </Link>
        <Link href="/cart">
          <a>Carrinho
            <sup>{cartProducts?.length}</sup>
          </a>
        </Link>
    </HeaderContainer>   
}

export default Header