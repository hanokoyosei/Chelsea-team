import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import BrandsList from "./components/BrandsList/BrandsList";
import Cart from "./components/Cart/Cart";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Home from "./components/Home/Home";
import Players from "./components/Players/Players";
import ProductsList from "./components/ProductsList/ProductsList";
import NewsList from "./components/NewsList/NewsList";
import { useAuth } from "./contexts/authContext";
import AdminPage from "./pages/AdminPage";
import Error404 from "./pages/Error404";
import CreditCart from "./components/creditCart/CreditCart"

import SuccessCredit from "./components/creditCart/SuccessCredit"

import News from "./components/News/News";
import News2 from "./components/News/News2";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/trophies",
      element: <ProductsList />,
      id: 2,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 3,
    },
    {
      link: "/brands",
      element: <BrandsList />,
      id: 4,
    },
    {
      link: "/trophies/:id",
      element: <DetailsProduct />,
      id: 5,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 6
    },
    {
      link: "/creditCart",
      element:<CreditCart/>,
      id:7
    },
    {
      link: "/players",
      element:<Players/>,
      id:8
    },
    {

      link:"/successCredit",
      element:<SuccessCredit/>,
      id: 9

    },
    {
      link: '/news_daty_matchey',
      element: <News />,
      id: 10
    },
    {
      link: '/news_Christensen_prodlit',
      element: <News2 />,
      id: 11

    },
    {

      link: "/news",
      element:<NewsList/>,
      id:12
    },
    


  ];
  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 2,
    },
  ];
  const { user } = useAuth();
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
      { user ? ADMIN_ROUTES.map((item) => (
        <Route
          path={item.link}
          element={
            user.email === "akjol2001@gmail.com" ? (
              item.element
            ) : (
              <Navigate replace to="*" />
            )
          }
        />
      )): null}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Routing;
