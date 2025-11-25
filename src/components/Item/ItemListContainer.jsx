import React from 'react'
import Item from './Item'
const ItemListContainer = ({ products }) => {
    return (
        <div className='product-list-container'>
            {products.map(product => (
                <Item
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    )
}

export default ItemListContainer