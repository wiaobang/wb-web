import React from "react";
import {Form, Input, Button, Checkbox} from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import './style.css'

const Login = () =>(
    <div className="backgroud">
        <div className="login">
            <div className="login_header">
                <h1>登录</h1>
            </div>
            <Form className="login_form"     
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
            >

                <Form.Item name="username" label="用户名"  rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input prefix={<UserOutlined className="site_form_item_icon" />} placeholder="请输入用户名"/>
                </Form.Item>
                <Form.Item name="password" label="密码"  rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password prefix={<LockOutlined className="site_form_item_icon" />} placeholder="请输入用户密码"/>
                </Form.Item>
                <Form.Item wrapperCol={{offset:2}}>
                    <Form.Item noStyle>
                    <Checkbox>记住密码</Checkbox>
                    </Form.Item>
                    <a className="login_form_forgot" href="">
                    忘记密码?
                    </a>
                </Form.Item>
                <Form.Item wrapperCol={{offset:6, span: 16 }} >
                    <Button className="login_button" type="primary" htmlType="submit">登录</Button>
                    
                </Form.Item>
                <Form.Item wrapperCol={{offset:4 }}>
                    没有账号，<Link to="/register">点我注册</Link>
                </Form.Item>
            </Form>

        </div>
    </div>
)

export default Login;