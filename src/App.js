import { useState, useEffect, createContext } from "react";
import { ProductDetails } from "./components/data/ProductDetails";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Footer } from "./components/Footer";

export const CartContext = createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem("quantity")) || 0;

function App() {
  const [quantity, setQuantity] = useState(cartFromLocalStorage);
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);
  const [cartIsFull, setCartIsFull] = useState(false);

  function addtoCart() {
    if (quantity > 0) {
      setCartItems(localStorage.getItem("quantity"));
      setCartIsFull(true);
    }
  }

  function emptyCart() {
    setCartItems(localStorage.removeItem("quantity"));
    setCartIsFull(false);
  }

  useEffect(() => {
    localStorage.setItem("quantity", JSON.stringify(quantity));
  }, [quantity, cartIsFull]);

  return (
    <CartContext.Provider
      value={{
        quantity,
        setQuantity,
        cartItems,
      }}
    >
      <header className="App-header">
        <Navbar
          quantity={quantity}
          emptyCart={emptyCart}
          ProductDetails={ProductDetails}
        />
        <Main
          quantity={quantity}
          ProductDetails={ProductDetails}
          addtoCart={addtoCart}
        />
      </header>
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
