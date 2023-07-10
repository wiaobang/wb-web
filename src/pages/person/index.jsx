import { Descriptions, Button} from 'antd';
import './index.css'
import { redirect, Form } from "react-router-dom";
import {useNavigate } from "react-router-dom";
import React from "react";


const PersonContent = () =>
{

    const navigate = useNavigate();

    const logOut=()=>{
        localStorage.removeItem('Authorization')
        localStorage.removeItem('username')
        navigate('/login')
    }
    
return(
    <div className='person-center'>
        {/* <Avatar size={64} icon={<UserOutlined />} /> */}
        {/* <List.Item>
            <List.Item.Meta title='个人简介' description='个人简介描述个人简介描述个人简介描述个人简介描述个人简介描述'/>
        </List.Item>
        <List.Item>
            <List.Item.Meta title='个性签名' description='个性签名个性签名个性签名个性签名个性签名个性签名'/>
        </List.Item> */}
        <Descriptions title='个人中心' layout='vertical'>
            <Descriptions.Item label="用户名">ricket</Descriptions.Item>
            <Descriptions.Item label="手机号码">1826000000</Descriptions.Item>
            <Descriptions.Item label="单位">中国科学院苏州生物医学工程研究所</Descriptions.Item>
            <Descriptions.Item label="地址" span={2}>
            江苏省苏州市虎丘区科灵路88号
            </Descriptions.Item>
            <Descriptions.Item label="个人介绍">无</Descriptions.Item>
        </Descriptions>

        <Button type="primary" onClick={()=>logOut()}>退出登录</Button>
    </div>
)
}

export default PersonContent;