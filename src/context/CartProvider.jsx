import { useState, useEffect, createContext, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  const [message, setMessage] = useState("")

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  const handleAddToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const exist = prevCart.find((p) => p.id === product.id)

      if (exist) {
        return prevCart.map((p) =>
          p.id === product.id
            ? { ...p, cantidad: p.cantidad + quantity }
            : p
        )
      }

      return [...prevCart, { ...product, cantidad: quantity }]
    })
  }



  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const cleanCart = () => {
    setCart([]);
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  const increaseItem = (id) => {
  setCart(cart.map(item =>
    item.id === id
      ? { ...item, cantidad: item.cantidad + 1 }
      : item
  ))
}

const decreaseItem = (id) => {
  setCart(
    cart
      .map(item =>
        item.id === id
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
      .filter(item => item.cantidad > 0)
  )
}




  return (
    <CartContext.Provider value={{
      cart,
      handleAddToCart,
      increaseItem,
      decreaseItem,
      removeItem,
      cleanCart,
      total
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider