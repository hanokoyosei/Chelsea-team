import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import {
  ShoppingCartOutlined,
  EllipsisOutlined,
  StarOutlined,
} from "@ant-design/icons";

import { cartContext } from "../../contexts/cartContext";
import { useState } from "react";

const ProductCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
  useEffect(() => {
    setCheckInCart(checkItemInCart(item.id))
  })
  return (
    <Card
      hoverable
      key={item.id}
      style={{ width: "280px", margin: "10px", background: 'transparent' }}
      cover={<img alt="example" src={item.image1} style={{width: '250px', marginLeft: '5.5%'}} />}
      actions={[
        <StarOutlined style={{ color: "black", fontSize: "25px" }} />,
        <ShoppingCartOutlined
          style={{ color: checkInCart ? "red" : "black", fontSize: "25px" }}
          onClick={() => {
            addProductToCart(item);
            setCheckInCart(checkItemInCart(item.id));
          }}
        />,
        <Link to={`/trophies/${item.id}`}>
          <EllipsisOutlined
            style={{ color: "black", fontSize: "25px" }}
            key="ellipsis"
          />
        </Link>,
      ]}
    >
      <Card.Meta
        title={<h3 style={{color: 'white'}}>{item.brand}</h3>}
        description={
          <>
            <h3 style={{color: 'white'}}>{item.model}</h3>
            <h2 style={{color: 'white'}}>{"$" + item.price}</h2>
          </>
        }
      />
    </Card>
  );
};

export default ProductCard;

