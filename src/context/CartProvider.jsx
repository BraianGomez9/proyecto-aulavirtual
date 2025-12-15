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

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const exist = prevCart.find((p) => p.id === product.id);
      if (exist) {
        return prevCart.map((p) =>
          p.id === product.id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        )
      }
      return [...prevCart, { ...product, cantidad: 1 }]
    })
  }


  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const cleanCart = () => {
    setCart([]);
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);



  return (
    <CartContext.Provider value={{ cart, handleAddToCart, removeItem, cleanCart, total, message }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider