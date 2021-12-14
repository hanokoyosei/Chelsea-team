import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "antd";

import { productsContext } from "../../contexts/productsContext";


const DetailsProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      {product ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "370px", height: '450px' }}>
                <div>
                  <img width="100%" src={product.image1} alt="" />
                </div>
            </div>
            <div style={{ width: "40vw" }}>
              <h2>{product.brand}</h2>
              <h3>{product.model}</h3>
              <h2>{`$ ${product.price}`}</h2>
              <Link to="/creditCart">
              <Button
                size="large"
                style={{ margin: "15px 0px", width: "100%", background:"#001489", color:"white" }}
              >
                ADD TO CART
              </Button>
              </Link>
              <div>{product.description}</div>
            </div>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailsProduct;

