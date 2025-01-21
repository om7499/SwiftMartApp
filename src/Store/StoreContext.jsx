
import { createContext, useContext, useReducer, useEffect } from "react";
import { initialState } from '../reducers/StoreReducer';
import reducer from "../reducers/StoreReducer";

// Step 1: Create Context
const CartContext = createContext();

// Step 2: Create Provider
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // UseEffect for cart handling (saving to localStorage)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

// Custom Hook for Context
export const useCart = () => {
  return useContext(CartContext);
};