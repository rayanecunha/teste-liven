import React from 'react'
import { ShelfList } from './styles'
import { ProductsProps } from '../../pages'
import Card from "../Card"

const Shelf = ({ products }: ProductsProps) => {
    return <ShelfList>
        {products?.map((item, index) => 
            <Card product={item} key={index} />
      )}
    </ShelfList>   
}

export default Shelf