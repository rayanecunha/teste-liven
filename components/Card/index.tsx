import Image from 'next/image'
import { useContext } from 'react'
import AppContext from "../../context/appContext"
import { CardContainer, CardTitle, CardPrice, CardStock, CardButton } from './styles'

type ProductProps = {
    product: {
        id: number;
        price: string;
        name: string;
        image: string;
        stock: number;
    }
    handleEvent: () => any;
}

// Imagens do get de produtos dando erro
const imageDefault = "https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg"

const Card = ({ product, handleEvent }: ProductProps) => {
    const appContext = useContext(AppContext)
    const { cartProducts } = appContext

    const isCart = cartProducts?.filter(item => item?.item?.id === product?.id)

    return <CardContainer>
        <Image
            src={imageDefault}
            alt="Picture of the author"
            width={120}
            height={60}
        />
        <CardTitle>{product?.name}</CardTitle>
        <CardPrice>R$ {product?.price}</CardPrice>
        {!!isCart?.length ?
            <CardButton disabled={!!isCart?.length}>ADICIONADO</CardButton>
            :
            <CardButton onClick={() => handleEvent()}>ADICIONAR</CardButton>
        }
        <CardStock>QTD {product?.stock}</CardStock>
    </CardContainer>   
}

export default Card