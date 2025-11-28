import { useState, useEffect, createContext, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  const addCart = (product) => {
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


  return (
    <CartContext.Provider value={{ cart, addCart, removeItem, cleanCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider