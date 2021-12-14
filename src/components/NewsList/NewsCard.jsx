import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import {
  ShoppingCartOutlined,
  EllipsisOutlined,
  StarOutlined,
} from "@ant-design/icons";

import { useState } from "react";

const NewsCard = ({ item }) => {


  return (
    <Card
      hoverable
      key={item.id}
      style={{ width: "280px", margin: "10px" }}
      cover={<img alt="example" src={item.image1} />}
      actions={[
        
        
        <Link to={`/news/${item.id}`}>
          <EllipsisOutlined
            style={{ color: "black", fontSize: "25px" }}
            key="ellipsis"
          />
        </Link>,
      ]}
    >
      <Card.Meta
        title={item.title}
        description={
          <>
            <h3>{item.description}</h3>
            
          </>
        }
      />
    </Card>
  );
};

// {news.map((item) => (
//     <Card
//     hoverable
//     style={{ width: 240 }}
//     cover={<img alt="example" src={item.logo} />}
//   >
//     <Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card>

//   )

export default NewsCard;

