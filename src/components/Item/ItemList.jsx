import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../../assets/services/productService'
import { CartContext } from '../../context/CartProvider'
import '../../main.css'

const ItemList = ({ product }) => {

    const [item, setItem] = useState(null);

    const { addCart } = useContext(CartContext);

    const id = useParams().id

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
            <button onClick={() => addCart(item)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemList