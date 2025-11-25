import { Children, createContext, useContext } from 'react'
import { CartProvider } from './CartContext'

export const GeneralContext = createContext(useContext);

export const GeneralProvider = ({ children }) => {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    )
}
