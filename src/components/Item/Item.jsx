import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartProvider'
import { Link } from "react-router";
import "../../main.css"


const Item = ({ product }) => {


    const { handleAddToCart } = useContext(CartContext);
    const [message, setMessage] = useState('')

    const addCartMessage = () => {
        handleAddToCart(product)
        setMessage("Agregado al carrito!")

        setTimeout(() => {
            setMessage("")
        }, 3000);
    }

    return (
        <div className='product-card'>
            <h3>{product.title}</h3>
            <img src={product.image} alt="" />
            <span>{product.description}</span>
            <b>${product.price}</b>
            <Link to={`/item-view/${product.id}`}><p className='view-more'>Ver mas</p></Link>
            <button className='add-cart-button' onClick={addCartMessage}>Agregar al carrito</button>
            {message && <p className="cart-message">{message}</p>}
        </div>
    )
}

export default Item