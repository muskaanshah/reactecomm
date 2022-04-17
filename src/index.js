import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { ProductProvider, CartWishlistProvider, AuthProvider, AlertProvider, AddressProvider } from "./context";
import "./index.css";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider>
        <AuthProvider>
          <AddressProvider>
            <ProductProvider>
              <CartWishlistProvider>
                <App />
              </CartWishlistProvider>
            </ProductProvider>
          </AddressProvider>
        </AuthProvider>
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
