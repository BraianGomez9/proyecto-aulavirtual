import { useState, useContext, } from 'react'
import { CartContext } from '../../context/CartProvider'
import Navbar from '../../components/Navbar/Navbar'

const Cart = () => {

  const { cart, removeItem, cleanCart, total } = useContext(CartContext)

  return (
    <div>
      <Navbar />
      <h2>Carrito</h2>
      {cart.map((item) => (
        <div className="cart-content" key={item.id}>
          <h2> {item.title}</h2>
          <p>{item.cantidad}</p>
          <p>Precio unitario: ${item.price}</p>
          <p>Subtotal: ${item.price * item.cantidad}</p>
          <button onClick={() => removeItem(item.id)}>Remover Item</button>
        </div>
      ))}
      <h3>Total ${total}</h3>
      <button onClick={cleanCart}>Limpiar Carrito</button>
    </div>
  )
}

export default Cart