import React, { useEffect, useContext } from 'react'
import { CartListContainer } from './styles'
import CartItem from "../CartItem"
import AppContext from "../../context/appContext"

const CartList = () => {
    const appContext = useContext(AppContext)
    const { getCartProducts, cartProducts } = appContext

    useEffect(() => {
        !cartProducts?.length && getCartProducts()
    }, [])

    return <CartListContainer>
        {!!cartProducts?.length ? 
            cartProducts?.map((item, index) => 
                <CartItem product={item} key={index} />
            )
            : 
            <p>Nenhum produto adicionado.</p>
        }
    </CartListContainer>   
}

export default CartList