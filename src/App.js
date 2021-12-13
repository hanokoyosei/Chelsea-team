import React from "react";
import { BrowserRouter } from "react-router-dom";

import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";
import BrandsContextProvider from "./contexts/brandsContext";
import CartContextProvider from "./contexts/cartContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Routing from "./Routing";

import "antd/dist/antd.css";
import "./App.css";
import PlayersContextProvider from "./contexts/playersContext";

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <BrandsContextProvider>
          <ProductsContextProvider>
            <PlayersContextProvider>
              <BrowserRouter>
                <Header />
                <Routing />
                <Footer />
              </BrowserRouter>

            </PlayersContextProvider>
          </ProductsContextProvider>
        </BrandsContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;

