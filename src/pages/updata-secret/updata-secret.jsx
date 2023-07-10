import React from "react";
import {Form, Input, Button,  message} from "antd";
import {useRequest} from 'ahooks';
import axios from "axios";
import {useNavigate } from "react-router-dom";

export default ()=>{
    const onFinish = (values) => {
        console.log('Success:', values);
      };

    const navigate = useNavigate();

      let { loading, run, cancel } = useRequest(
        data => {
            const {old_password, new_password } = data;

            const username = localStorage.getItem('username')

           return axios({
            url: 'http://localhost:3000/updatePassword',
            method: 'GET',
            params: {
                username:username,
                password: old_password,
                newPassword: new_password,

            },
            });
        },
        {
            manual: true,
            onSuccess: (result,params) => {
            const {code,msg} = result.data;
            console.log(result.data)
            // console.log(params[0])
            if(code===200){
                message.success(msg)
                localStorage.removeItem('Authorization')
                localStorage.removeItem('username')
                navigate('/login')
                return
            }
            message.error(msg)
            },
            onError: () => {
            console.log('onError');
            },
        }
        );

    return(
    <Form className="login_form"     
    labelCol={{ span: 6 }}
    wrapperCol={{ span: 16 }}
    onFinish={values=>run(values)}
    >
    <Form.Item name="old_password" label="当前密码" hasFeedback rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password  />
    </Form.Item>

    <Form.Item name="new_password" label="新密码" hasFeedback rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password  />
    </Form.Item>
                
    <Form.Item name="confirm_password" label="确认密码" dependencies={['password']} hasFeedback rules={[
        { required: true ,message: 'Please confirm your password!' },
        ({ getFieldValue }) => ({
            validator(_, value) {
            if (!value || getFieldValue('new_password') === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('The new password that you entered do not match!'));
            },
        }),
    ]}>
            <Input.Password  />
    </Form.Item>

    <Form.Item wrapperCol={{offset:6, span: 16 }} >
        <Button className="updata_button" type="primary" htmlType="submit">修改密码</Button>
        
    </Form.Item>

    </Form>
    )
}