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
import NewsContextProvider from "./contexts/newsContext";
import PlayersContextProvider from "./contexts/playersContext";
import FavContextProvider from "./contexts/favContext";

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <FavContextProvider>
        <BrandsContextProvider>
          <ProductsContextProvider>
            <PlayersContextProvider>
            <NewsContextProvider>
              <BrowserRouter>
                <Header />
                <Routing />
                <Footer />
              </BrowserRouter>
            </NewsContextProvider>

            </PlayersContextProvider>
          </ProductsContextProvider>
        </BrandsContextProvider>
        </FavContextProvider>
       
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;
