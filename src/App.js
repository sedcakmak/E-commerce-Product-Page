import { useState, createContext } from "react";
import "./App.css";
import { ProductDetails } from "./components/data/ProductDetails";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export const CartContext = createContext();

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cartIsFull, setCartIsFull] = useState(false);

  function showQuantity() {
    if (quantity > 0) setCartIsFull(true);
  }
  return (
    <CartContext.Provider
      value={{ quantity, setQuantity, cartIsFull, setCartIsFull }}
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
          showQuantity={showQuantity}
        />
      </header>
    </CartContext.Provider>
  );
}

export default App;
