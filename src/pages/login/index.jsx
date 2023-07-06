import React from "react";
import {Form, Input, Button, Checkbox} from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";
import {useRequest} from 'ahooks';
import md5 from 'md5';
import axios from "axios";
// import './style.css'


const Login =  () =>{

    const navigate = useNavigate();
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    // const fet = (data) =>{
    //     let {username, password } = data;
    //     axios({
    //         url: 'http://localhost:3000/login',
    //         method: 'GET',
    //         params: {
    //             username: username,
    //             password: password,
    //         }
    //         }).then((res)=>console.log(res.data));
    // }

    let { loading, run, cancel } = useRequest(
        data => {
            let {username, password } = data;

           return axios({
            url: 'http://localhost:3000/login',
            method: 'GET',
            params: {
                username: username,
                password: password,
            },
            });
        },
        {
            manual: true,
            onSuccess: (result) => {
            const {token} = result.data;
        
            if (token) {
                // 添加全局请求头token
                console.log(token)
                localStorage.setItem('Authorization', token);
                axios.defaults.headers.common['Authorization'] = token;
                navigate('/home');
            }
            },
            onError: () => {
            console.log('onError');
            },
        }
        );
    
    return(
    <div className="backgroud">
        <div className="login">
            <div className="login_header">
                <h1>登录</h1>
            </div>
            <Form className="login_form"     
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                onFinish={values=>run(values)}
                // onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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
}
export default Login;