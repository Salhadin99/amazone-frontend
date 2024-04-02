import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./Contexts/products_context";
import { FilterProvider } from "./Contexts/filter_context";
import { CartProvider } from "./Contexts/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./Contexts/user_context";
import { AuthProvider } from "./Contexts/auth_context";
import { AddProductProvider } from "./Contexts/add_product_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-utu6kyix18fhnoxz.us.auth0.com"
    clientId="s8BMxP7s4djvnSDNFD47g4EsVBEGP56O"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocatoin="localStorage"
  >
    <UserProvider>
      <React.StrictMode>
        <AuthProvider>
          <AddProductProvider>
            <BrowserRouter>
              <ProductsProvider>
                <FilterProvider>
                  <CartProvider>
                    <App />
                  </CartProvider>
                </FilterProvider>
              </ProductsProvider>
            </BrowserRouter>
          </AddProductProvider>
        </AuthProvider>
      </React.StrictMode>
    </UserProvider>
  </Auth0Provider>
);
