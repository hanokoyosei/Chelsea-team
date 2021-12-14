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
            label="Player name"
            name="player"
            rules={[
              {
                required: true,
                message: "Please input player name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Nationality"
            name="nationality"
            rules={[
              {
                required: true,
                message: "Please input player nationality!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: "Please input player age!",
              },
            ]}
          >
            <Input type='number'/>
          </Form.Item>

          <Form.Item
            label="Player number"
            name="number"
            rules={[
              {
                required: true,
                message: "Please input player number!",
              },
            ]}
          >
            <Input type='number'/>
          </Form.Item>

          <Form.Item
            label="Player position"
            name="position"
            rules={[
              {
                required: true,
                message: "Please input player position!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Player photo"
            name="photo"
            rules={[
              {
                required: true,
                message: "Please input URL of photo!",
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