import { useState, useContext, } from 'react'
import { CartContext } from '../../context/CartProvider'
import { useNavigate } from 'react-router'
import Navbar from '../../components/Navbar/Navbar'
import "../../main.css"

const Cart = () => {

  const { cart, removeItem, cleanCart, total } = useContext(CartContext)

  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const handleModal = () => {
    setModal(!modal)
  }

  const handleBuyModal = () => {
    setModal(!modal)
    cleanCart();
    navigate("/")
  }

  return (
    <div className='cart-main-container'>
      <Navbar />
      <h2>Carrito</h2>
      <div className="cart-container">
        {cart.map((item) => (
          <div className="cart-content" key={item.id}>
            <h2> {item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>{item.cantidad}</p>
            <p>Precio unitario: ${item.price}</p>
            <p>Subtotal: ${item.price * item.cantidad}</p>
            <button onClick={() => removeItem(item.id)}>Remover Item</button>
          </div>
        ))}
      </div>
      <h3>Total ${total}</h3>
      <button onClick={cleanCart}>Limpiar Carrito</button>
      <button onClick={handleModal}>Comprar</button>
      {modal && (
        <div className='modal-main-container'>
          <div className='modal-container'>
            <h3>Gracias por su compra!</h3>
            <button onClick={handleBuyModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart