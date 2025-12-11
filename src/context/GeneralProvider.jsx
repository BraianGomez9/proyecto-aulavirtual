import { Children, createContext, useContext } from 'react'
import CartProvider from './CartProvider';
import { UserProvider } from './UserProvider';
export const GeneralContext = createContext(useContext);

export const GeneralProvider = ({ children }) => {
    return (
        <UserProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </UserProvider>
    )
}
