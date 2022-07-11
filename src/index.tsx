import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartContextProvider } from "./Context/CartContext";
import { WishListContextProvider } from "./Context/WishlistContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <CartContextProvider>
        <WishListContextProvider>
          <App />
        </WishListContextProvider>
      </CartContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals();
