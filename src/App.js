import { useState, useEffect, createContext } from "react";
import "./App.css";
import { ProductDetails } from "./components/data/ProductDetails";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export const CartContext = createContext();

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cartIsFull, setCartIsFull] = useState(false);
  const [cartItems, setCartItems] = useState(localStorage.getItem("quantity"));

  function addtoCart() {
    if (quantity > 0 || cartItems > 0) {
      setCartIsFull(true);
      setCartItems(quantity);
    }
  }

  useEffect(() => {
    localStorage.setItem("quantity", JSON.stringify(quantity));
  }, [quantity]);

  console.log(cartItems);
  return (
    <CartContext.Provider
      value={{
        quantity,
        setQuantity,
        cartIsFull,
        setCartIsFull,
        cartItems,
      }}
    >
      <header className="App-header">
        <Navbar
          quantity={quantity}
          ProductDetails={ProductDetails}
          cartIsFull={cartIsFull}
        />
        <Main
          quantity={quantity}
          ProductDetails={ProductDetails}
          addtoCart={addtoCart}
        />
      </header>
    </CartContext.Provider>
  );
}

export default App;
