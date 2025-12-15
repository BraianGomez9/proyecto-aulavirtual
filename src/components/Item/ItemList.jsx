import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../../services/productService'
import { CartContext } from '../../context/CartProvider'
import '../../main.css'

const ItemList = ({ product }) => {

    const [item, setItem] = useState(null);

    const { handleAddToCart } = useContext(CartContext);

    const [message, setMessage] = useState('')

    const id = useParams().id

    const addCartMessage = () => {
        handleAddToCart(item)
        setMessage("Agregado al carrito!")

        setTimeout(() => {
            setMessage("")
        }, 3000);
    }

    useEffect(() => {
        fetchProductById(Number(id))
            .then((item) => {
                setItem(item)
            })
            .catch((err) => {
                console.error("Error al solicitar el producto", err)
            })
    }, [id])

    if (!item) return <p>Cargando producto...</p>;

    return (
        <div className="item-view-element"
            key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.image} alt="" />
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button className='add-cart-button' onClick={addCartMessage}>Agregar al carrito</button>
            {message && <p className="cart-message">{message}</p>}
        </div>
    )
}

export default ItemList