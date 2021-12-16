import { Form, Input, Select, Tooltip, Button, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import "./CreditForm.css"
const { Option } = Select;

const creditForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
    
  
  return (
      <div style={{marginTop:"50px"}}>
    <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Form.Item label="Username">
        <Space>
          <Form.Item
            name="username"
            noStyle
            rules={[{ required: true, message: 'Username is required' }]}
          >
            <Input style={{ width: 160 }} placeholder="Please input" />
            <Form.Item
            name="username"
            noStyle
            rules={[{ required: true, message: 'Username is required' }]}
          />
          
         
            
          </Form.Item>
          
          <Tooltip title="Useful information">
            <Typography.Link href="#API">нужна помощь?</Typography.Link>
          </Tooltip>
          
        </Space>
        
      </Form.Item>
      <Form.Item label="Address">
        <Input.Group compact>
          <Form.Item
            name={['address', 'province']}
            noStyle
            rules={[{ required: true, message: 'Province is required' }]}
          >
            <Select placeholder="Select province">
              <Option value="Бишкек">Бишкек</Option>
              <Option value="Ош">Ош</Option>
            </Select>
          </Form.Item>
          <br/>   <br/> 
          <Form.Item
            name={['address', 'street']}
            noStyle
            rules={[{ required: true, message: 'Street is required' }]}
          >
            <Input style={{ width: '50%' }} placeholder="Input street" />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
        <Form.Item
          name="year"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        >
          <Input placeholder="Input birth year" />
        </Form.Item>
        <Form.Item
          name="month"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
        >
          <Input placeholder="Input birth month" />
        </Form.Item>
      </Form.Item>
      <Form.Item label=" " colon={false}>
         <Link to="/creditCart">
        <Button  type="primary" htmlType="submit">
        Submit
        </Button>
        </Link>
        
      </Form.Item>
    </Form>
    </div>
  );
};

export default creditForm;