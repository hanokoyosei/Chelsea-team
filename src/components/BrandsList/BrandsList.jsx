import React, { useContext, useEffect } from "react";
import { Card } from "antd";
import "./BrandList.css";
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
        // marginTop: "20px",
      }}
    >
      {brands.map((item) => (
        <Card
        hoverable
        style={{ flexBasis: '33%', background: 'transparent', border: 'none' }}
        cover={<img alt="example" src={item.logo} style={{width: '235px', height: '250px', marginLeft: '20%'}}/>}
      >
        <Meta title={<h3 style={{color: 'white'}}>{item.name}</h3>} style={{display: 'flex', justifyContent: 'center'}} />
        <Meta title={<h4 style={{color: 'white'}}>{item.year}</h4>} style={{display: 'flex', justifyContent: 'center'}} />
      </Card>
      ))}
    </div>
  );
};

export default BrandsList;

