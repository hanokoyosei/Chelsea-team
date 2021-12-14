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
        style={{ flexBasis: '33%' }}
        cover={<img alt="example" src={item.logo} style={{width: '235px', height: '250px', marginLeft: '20%'}}/>}
      >
        <Meta title={item.name} style={{display: 'flex', justifyContent: 'center'}} />
        <Meta title={item.year} style={{display: 'flex', justifyContent: 'center'}} />
      </Card>
      ))}
    </div>
  );
};

export default BrandsList;

