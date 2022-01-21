import Image from 'next/image'
import { useContext } from 'react'
import AppContext from "../../context/appContext"
import { CartContainer, CartTitle, CartPrice, CartStock, CartButton, CartQtd } from './styles'

type ProductProps = {
    product: {
        qtd: number;
        item: {
            id: number;
            price: string;
            name: string;
            image: string;
            stock: number;
        }
    }
}

// Imagens do get de produtos dando erro
const imageDefault = "https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg"

const CartItem = ({ product }: ProductProps) => {
    const appContext = useContext(AppContext)
    const { setQtdProducts } = appContext

    return <CartContainer>
        <Image
            src={imageDefault}
            alt="Picture of the author"
            width={120}
            height={60}
        />
        <CartTitle>{product?.item?.name}</CartTitle>
        <CartPrice>R$ {product?.item?.price}</CartPrice>
        <CartButton onClick={() => setQtdProducts(product, "rmv")}>-</CartButton>
        <CartQtd>{product?.qtd}</CartQtd>
        <CartButton onClick={() => setQtdProducts(product, "add")}>+</CartButton>
        <CartStock>QTD {product?.item?.stock}</CartStock>
    </CartContainer>   
}

export default CartItem