import React, { useContext, useEffect } from "react";
import { Card } from "antd";

import { brandsContext } from "../../contexts/brandsContext";

const { Meta } = Card;
const BrandsList = () => {
  const { getBrands, brands } = useContext(brandsContext);
  useEffect(() => {
    getBrands();
  }, []);

  
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {brands.map((item) => (
        <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={item.logo} />}
      >
        <Meta title={item.title} />
      </Card>
      ))}
    </div>
  );
};

export default BrandsList;

