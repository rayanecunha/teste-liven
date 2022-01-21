import React, { createContext, useReducer } from "react"
import { default as appReducer } from "./appReducer"
import { CART_PRODUCTS } from "./types"
import { toast } from 'react-toastify';

const initialState = {
    cartProducts: [],
    qtdTotal: 0,
}

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const cartProducts = state.cartProducts;

    const getCartProducts = () => {
        const cartData = localStorage.getItem('cart');
        !!cartData && dispatch({ type: CART_PRODUCTS, payload: JSON.parse(cartData)})
    }

    const addCartProducts = (product) => {
        localStorage.setItem('cart', JSON.stringify([...cartProducts, {qtd: 1, item: product}]))
        getCartProducts()
        toast.success("Produto adicionado ao carrinho!")
    }

    const setQtdProducts = (product, func) => {
        const productIndex = cartProducts.findIndex(x => x?.item?.id === product?.item?.id);
        if(product?.qtd === 1 && func === "rmv") {
            cartProducts.splice(productIndex, 1);
        } else {
            cartProducts[productIndex] = { qtd: func === "add" ? product?.qtd + 1 : product?.qtd - 1, item: product?.item};
        }
        localStorage.setItem('cart', JSON.stringify([...cartProducts]))
        getCartProducts()
        toast.success(`Produto ${func === "add" ? "adicionado ao carrinho" : "removido do carrinho"}!`)
    }

    return (
        <AppContext.Provider value={{...state, getCartProducts, addCartProducts, setQtdProducts}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
export { AppProvider }