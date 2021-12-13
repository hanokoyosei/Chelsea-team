import React, { useContext, useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { playersContext } from "../../contexts/playersContext";

const AddPlayerModal = () => {
  const { createPlayer } = useContext(playersContext)
  console.log(createPlayer)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    createPlayer(values).then(() => handleCancel())
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add player
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
            label="Player"
            name="player"
            rules={[
              {
                required: true,
                message: "Please input brand!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Logo"
            name="logo"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
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
              Add player
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddPlayerModal;