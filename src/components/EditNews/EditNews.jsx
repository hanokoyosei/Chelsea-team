import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Form, Input } from "antd";
import { newsContext } from "../../contexts/newsContext";

const EditNews = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { getOneNews, oneNews, updateNews } =
    useContext(newsContext);
  const { getNews } = useContext(newsContext);
  const [form] = Form.useForm();
  useEffect(() => {
    getOneNews(params.id);
    getNews();
  }, []);
  useEffect(() => {
    form.setFieldsValue(oneNews);
  }, [oneNews]);
  const onFinish = (values) => {
    console.log("Success:", values);
    updateNews(params.id, values).then(() => navigate("/admin"));
  };
  return (
    <div className="container" style={{ marginTop: "15px" }}>
      <h2>Edit news</h2>
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
            wrapperCol={{
              offset: 9,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Edit news
            </Button>
          </Form.Item>
        </Form>
    </div>
  );
};

export default EditNews;