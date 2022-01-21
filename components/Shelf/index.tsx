import React, { useEffect, useContext } from 'react'
import { ShelfList } from './styles'
import { ProductsProps } from '../../pages'
import Card from "../Card"
import AppContext from "../../context/appContext"

const Shelf = ({ products }: ProductsProps) => {
    const appContext = useContext(AppContext)
    const { getCartProducts, addCartProducts } = appContext

    useEffect(() => {
        getCartProducts()
    }, [])

    return <ShelfList>
        {products?.map((item, index) => 
            <Card product={item} key={index} handleEvent={() => addCartProducts(item)} />
      )}
    </ShelfList>   
}

export default Shelf