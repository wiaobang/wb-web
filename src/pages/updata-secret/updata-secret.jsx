import React from "react";
import {Form, Input, Button, Checkbox, Select, InputNumber} from "antd";

export default ()=>{
    return(
    <Form className="login_form"     
    labelCol={{ span: 6 }}
    wrapperCol={{ span: 16 }}
    >
    <Form.Item name="password" label="当前密码" hasFeedback rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password  />
    </Form.Item>

    <Form.Item name="password" label="新密码" hasFeedback rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password  />
    </Form.Item>
                
    <Form.Item name="confirm_password" label="确认密码" dependencies={['password']} hasFeedback rules={[
        { required: true ,message: 'Please confirm your password!' },
        ({ getFieldValue }) => ({
            validator(_, value) {
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('The new password that you entered do not match!'));
            },
        }),
    ]}>
            <Input.Password  />
    </Form.Item>

    <Form.Item wrapperCol={{offset:6, span: 16 }} >
        <Button className="login_button" type="primary" htmlType="submit">修改密码</Button>
        
    </Form.Item>

    </Form>
    )
}