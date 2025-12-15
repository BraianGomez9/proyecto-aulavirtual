import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../../services/productService'
import { CartContext } from '../../context/CartProvider'
import '../../main.css'

const ItemList = () => {

  const [item, setItem] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [message, setMessage] = useState('')

  const { handleAddToCart } = useContext(CartContext)

  const { id } = useParams()

  useEffect(() => {
    fetchProductById(Number(id))
      .then((item) => {
        setItem(item)
      })
      .catch((err) => {
        console.error("Error al solicitar el producto", err)
      })
  }, [id])

  const increase = () => setQuantity(q => q + 1)

  const decrease = () => {
    if (quantity > 1) setQuantity(q => q - 1)
  }

  const addCartMessage = () => {
    handleAddToCart(item, quantity)
    setMessage("Agregado al carrito!")

    setTimeout(() => setMessage(""), 3000)
  }

  if (!item) return <p>Cargando producto...</p>

  return (
    <div className="item-view-element" key={item.id}>
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <p>${item.price}</p>

      {/* 👇 CONTADOR */}
      <div className="quantity-control">
        <button onClick={decrease}>−</button>
        <span>{quantity}</span>
        <button onClick={increase}>+</button>
      </div>

      <button className='add-cart-button' onClick={addCartMessage}>
        Agregar al carrito
      </button>

      {message && <p className="cart-message">{message}</p>}
    </div>
  )
}

export default ItemList
