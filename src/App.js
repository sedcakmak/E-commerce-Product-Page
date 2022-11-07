//import logo from './logo.svg';
import { useState, createContext } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

export const CartContext = createContext();

function App() {
  const [quantity, setQuantity] = useState(0);
  // const [showQuantity, setShowQuantity] = useState(false);
  return (
    <CartContext.Provider value={{ quantity, setQuantity }}>
      <header className="App-header">
        <Navbar
          quantity={quantity}
          ProductDetails={ProductDetails}
          //    showQuantity={showQuantity}
        />
        <Main
          quantity={quantity}
          ProductDetails={ProductDetails}
          //   showQuantity={showQuantity}
        />
      </header>
    </CartContext.Provider>
  );
}

const ProductDetails = [
  {
    title: "Fall Limited Edition Sneakers",
    price: 250,
    discount: 50,
    discountedPrice: 125,
    src: "/images/image-product-1-thumbnail.jpg",
  },
];

export default App;
