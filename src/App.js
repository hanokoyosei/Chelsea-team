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
<<<<<<< HEAD
import NewsContextProvider from "./contexts/newsContext";
=======
import PlayersContextProvider from "./contexts/playersContext";
>>>>>>> b760a41f4156f77a005189e8f39615d21eadd38d

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <BrandsContextProvider>
          <ProductsContextProvider>
<<<<<<< HEAD
            <NewsContextProvider>
=======
            <PlayersContextProvider>
>>>>>>> b760a41f4156f77a005189e8f39615d21eadd38d
              <BrowserRouter>
                <Header />
                <Routing />
                <Footer />
              </BrowserRouter>
<<<<<<< HEAD
            </NewsContextProvider>
=======

            </PlayersContextProvider>
>>>>>>> b760a41f4156f77a005189e8f39615d21eadd38d
          </ProductsContextProvider>
        </BrandsContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;
