import Image from 'next/image'
import { CardContainer, CardTitle, CardPrice, CardStock, CardButton } from './styles'

type ProductProps = {
    product: {
        price: string;
        name: string;
        image: string;
        stock: number;
    }
}

const imageDefault = "https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg"

const Card = ({ product }: ProductProps) => {
    return <CardContainer>
        <Image
            src={imageDefault}
            alt="Picture of the author"
            width={120}
            height={60}
        />
        <CardTitle>{product?.name}</CardTitle>
        <CardPrice>R$ {product?.price}</CardPrice>
        <CardButton>ADICIONAR</CardButton>
        <CardStock>QTD {product?.stock}</CardStock>
    </CardContainer>   
}

export default Card