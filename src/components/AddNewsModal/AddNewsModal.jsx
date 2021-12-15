
import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Form, Input, Select, InputNumber } from "antd";

import { newsContext } from "../../contexts/newsContext";

const AddNewsModal = () => {
  const { createNews } = useContext(newsContext);
  const { getNews, news } = useContext(newsContext);
  useEffect(() => {
    getNews();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    createNews(values).then(() => handleCancel());
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add news
      </Button>
      <Modal
        title="Add news"
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
            label="News title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input news title!",
              },
            ]}
          >
            {/* <Select>
              {brands.map((item) => (
                <Select.Option key={item.id} value={item.brand}>
                  {item.brand}
                </Select.Option>
              ))}
            </Select> */}
           <Input />
          </Form.Item>


          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Paragraph"
            name="paragraph"
            rules={[
              {
                required: true,
                message: "Please input paragraph!",
              },
            ]}
          >
            <Input />
          </Form.Item>

           <Form.Item
            label="Image 1"
            name="image1"
            rules={[
              {
                required: true,
                message: "Please input URL of image 1!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Image 2"
            name="image2"
            rules={[
              {
                required: true,
                message: "Please input URL of image 2!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Video"
            name="video"
            rules={[
              {
                required: true,
                message: "Please input URL of video!",
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
              Add news
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddNewsModal;