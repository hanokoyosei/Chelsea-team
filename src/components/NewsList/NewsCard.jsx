import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

const NewsCard = ({ item }) => {
  return (
    <Card
      hoverable
      key={item.id}
      style={{ width: "580px", margin: "10px" }}
      cover={<img alt="example" src={item.image1} />}
      actions={[
          <EllipsisOutlined
            style={{ color: "black", fontSize: "25px" }}
            key="ellipsis"
          />
      ]}
    >
      <Card.Meta
        title={item.title}
        description={
          <>
            <h3>{item.description}</h3>
            <p>{item.paragraph}</p>
          </>
        }
      />
    </Card>
  );
};

export default NewsCard;

