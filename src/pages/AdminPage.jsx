import React from "react";
import { Row, Col } from "antd";
import "./AdminPage.css"
import AddBrandModal from "../components/AddBrandModal/AddBrandModal";
import AddProductModal from "../components/AddProductModal/AddProductModal";
import AdminBrandsList from "../components/AdminBrandsList/AdminBrandsList";
import AdminProductsList from "../components/AdminProductsList/AdminProductsList";
import AddNewsModal from "../components/AddNewsModal/AddNewsModal";
import AdminNewsList from "../components/AdminNewsList/AdminNewsList";
import AddPlayerModal from "../components/AddPlayerModal/AddPlayerModal";
import AdminPlayers from "../components/AdminPlayers/AdminPlayers";

const AdminPage = () => {
  return (
    <div className="page" style={{ marginTop: "15px", marginLeft: '2%' }}>
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
            <AddNewsModal />
            <AdminNewsList />
          </Col>
        </Col>
        <Col span={12}>
          <Col span={22}>
            <AddPlayerModal />
            <AdminPlayers />
          </Col>
        </Col>

      </Row>
    </div>
  );
};

export default AdminPage;
