import React from "react";
import {Form, Input, Button, Checkbox, Select} from "antd";
import { Link } from "react-router-dom";
import './style.css'

const { Option } = Select;

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select  className="number_select">
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );


const Register = ()=>(
    <div className="backgroud">
    <div className="register">
        <div className="register_header">
            <h1>注册</h1>
        </div>
        <Form className="register_form"     
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
        >

            <Form.Item name="username" label="用户名"  rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
            </Form.Item>

            <Form.Item name="telephone" label="手机号码"   rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
            </Form.Item>

            <Form.Item name="password" label="密码"  rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password  />
            </Form.Item>
            
            <Form.Item name="confirm_password" label="确认密码"  rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password  />
            </Form.Item>

            <Form.Item wrapperCol={{offset:6, span: 16 }} >
                <Button className="login_button" type="primary" htmlType="submit">注册</Button>
                
            </Form.Item>
            <Form.Item wrapperCol={{offset:4 }}>
                已有账号，<Link to="/login">点我登陆</Link>
            </Form.Item>
        </Form>

    </div>
</div>
)

export default Register;