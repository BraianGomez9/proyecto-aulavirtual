import { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'
import { Link } from 'react-router'
import "../../main.css"


const Item = ({ product }) => {

    const { addCart } = useContext(CartContext);

    return (
        <div className='product-card'>
            <h3>{product.title}</h3>
            <img src={product.image} alt="" />
            <span>{product.description}</span>
            <b>${product.price}</b>
            <Link to={`/item-view/${product.id}`}><p className='view-more'>Ver mas</p></Link>
            <button className='add-cart-button' onClick={() => addCart(product)}>Agregar al carrito</button>
        </div>
    )
}

export default Item