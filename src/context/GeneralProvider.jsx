import CartProvider from './CartProvider';
import UserProvider from './UserProvider';

const GeneralProvider = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </UserProvider>
  );
};

export default GeneralProvider;

