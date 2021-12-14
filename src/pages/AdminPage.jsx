import React from "react";
import { Row, Col } from "antd";

import AddBrandModal from "../components/AddBrandModal/AddBrandModal";
import AddProductModal from "../components/AddProductModal/AddProductModal";
import AdminBrandsList from "../components/AdminBrandsList/AdminBrandsList";
import AdminProductsList from "../components/AdminProductsList/AdminProductsList";
<<<<<<< HEAD
import AddNewsModal from "../components/AddNewsModal/AddNewsModal";
import AdminNewsList from "../components/AdminNewsList/AdminNewsList";
=======
import AddPlayerModal from "../components/AddPlayerModal/AddPlayerModal";
import AdminPlayers from "../components/AdminPlayers/AdminPlayers";
>>>>>>> b760a41f4156f77a005189e8f39615d21eadd38d

const AdminPage = () => {
  return (
    <div className="container" style={{ marginTop: "15px" }}>
      <Row>
        <Col span={12}>
          <Col span={22}>
            <AddBrandModal />
            <AdminBrandsList />
          </Col>
        </Col>
        <Col span={12}>
          <Col span={22}>
            <AddProductModal />
            <AdminProductsList />
          </Col>
        </Col>
        <Col span={12}>
          <Col span={22}>
<<<<<<< HEAD
            <AddNewsModal />
            <AdminNewsList />
          </Col>
        </Col>
=======
            <AddPlayerModal />
            <AdminPlayers />
          </Col>
        </Col>

>>>>>>> b760a41f4156f77a005189e8f39615d21eadd38d
      </Row>
    </div>
  );
};

export default AdminPage;
