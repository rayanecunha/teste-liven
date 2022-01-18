import Image from 'next/image'
import Link from 'next/link'
import { HeaderContainer } from './styles'

const Header = () => {
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
          <a>Carrinho</a>
        </Link>
    </HeaderContainer>   
}

export default Header