import React from 'react'
import { Link } from 'react-router'
import "../../main.css"
const Item = ({ product }) => {
    return (
        <div className='product-card'>
            <h3>{product.title}</h3>
            <img src={product.image} alt="" />
            <span>{product.description}</span>
            <p>{product.price}</p>
            <Link to={`/item-view/${product.id}`}>Ver mas</Link>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default Item