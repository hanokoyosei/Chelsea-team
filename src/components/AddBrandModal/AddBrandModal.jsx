import React, { useContext, useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { brandsContext } from "../../contexts/brandsContext";

const AddBrandModal = () => {
  const { createBrand } = useContext(brandsContext)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    createBrand(values).then(() => handleCancel())
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Trophy
      </Button>
      <Modal
        title="Add brand"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >

          <Form.Item
            label="Trophy logo"
            name="logo"
            rules={[
              {
                required: true,
                message: "Please input trophy URL of logo!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Trophy name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input trophy name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Year"
            name="year"
            rules={[
              {
                required: true,
                message: "Please input year of trophies!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Add brand
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddBrandModal;