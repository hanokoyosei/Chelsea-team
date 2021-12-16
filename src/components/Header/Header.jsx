import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Badge } from "antd";
import { ShoppingCartOutlined, StarOutlined } from "@ant-design/icons";

import { useAuth } from "../../contexts/authContext";

import { cartContext } from "../../contexts/cartContext";

import "./Header.css";
import { favContext } from "../../contexts/favContext";
import LoginButton from "./LoginButton";


const Header = () => {
  const location = useLocation();
  // const {
  //   handleLogout,
  //   user: { email },
  // } = useAuth();

  // корзина
  const { getCart, cartLength } = useContext(cartContext)
  useEffect(() => {
    getCart()
  }, [])
  
  //избранное
  const { getFav, favLength } = useContext(favContext)
  useEffect(() => {
    getFav()
  }, [])

  const NAV_ITEMS = [
    {
      title: "TROPHIES",
      link: "/brands",
      id: 1,
    },
    {
      title: "SHOP",
      link: "/trophies",
      id: 2,
    },
    {
      title: "NEWS",
      link: "/news",
      id: 4,
    },
    {
      title: "PLAYERS",
      link: "/players",
      id: 5,
    },
  ];
  return (
    <div className="div">
    <div>
      <nav>
         <LoginButton />
      </nav>

      
      <div className="header">
        <Link to="/">
          <img
            style={{display:"flex",justifyContent:"center"}}
            className="img"
            width="400px"
            src="https://logos-world.net/wp-content/uploads/2020/05/Chelsea-Logo.png"
            alt=""
          />
        </Link>
        < div style = {{display: "flex" , justifyContent: "space-between", width: "150px"}}>
        <div>
          <Link to="/cart">
            <Badge count={+cartLength}>
              <ShoppingCartOutlined
                style={{ fontSize: "40px", cursor: "pointer" ,color: "white" }}
              />
            </Badge>
          </Link>
          
        </div>
        <div>
        <Link to="/fav">
            <Badge count={+favLength}>
              <StarOutlined
                style={{ fontSize: "40px", cursor: "pointer", color: "white" }}
              />
            </Badge>
          </Link>
        </div>
        </div>        
      </div>
      
      
      <div className="navbar">
        
        {NAV_ITEMS.map((item) => (
          <Link
            to={item.link}
            className={
              location.pathname === item.link
                ? "navbar__item-active"
                : "navbar__item"
            }
          >
            {item.title}
          </Link>
        ))}

       
      </div>
    </div>
    </div>
  );
};

export default Header;
