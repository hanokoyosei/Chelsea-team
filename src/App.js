<<<<<<< HEAD
import './App.css';
=======
import React from "react";
import { BrowserRouter } from "react-router-dom";
>>>>>>> 7b83361dc75b2d71afe58c9f528fe11ed88a4707

import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";
import BrandsContextProvider from "./contexts/brandsContext";
import CartContextProvider from "./contexts/cartContext";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Routing from "./Routing";

import "antd/dist/antd.css";
import "./App.css";

const App = () => {
  return (
<<<<<<< HEAD
    <div>
      
    </div>
=======
    <AuthContextProvider>
      <CartContextProvider>
        <BrandsContextProvider>
          <ProductsContextProvider>
            <BrowserRouter>
              <Header />
              <Routing />
              <Footer />
            </BrowserRouter>
          </ProductsContextProvider>
        </BrandsContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
>>>>>>> 7b83361dc75b2d71afe58c9f528fe11ed88a4707
  );
};

export default App;

// CRUD
// фильтрация
// пагинация
// поиск
// корзина
// роутинг
// админка
