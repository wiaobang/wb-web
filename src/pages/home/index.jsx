import React from "react";
import { Empty, Avatar,Layout, Menu, Button, Space, Tabs } from 'antd';
import {MenuFoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined,} from '@ant-design/icons';
import './index.css'

import {List} from 'antd';
import { Outlet } from "react-router-dom";
import {  useNavigate } from "react-router-dom";

const Home = () =>{ 
    const { Header,Content, Footer, Sider } = Layout;

    const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        height: 64,
        paddingInline: 50,
        lineHeight: '64px',
        backgroundColor: 'RGB(0,33,64)',
      };
      const contentStyle = {
        textAlign: 'center',
        minHeight: 800,
        lineHeight: '120px',
        color: '#000',
        // backgroundColor: '#108ee9',
      };
      const siderStyle = {
        textAlign: 'center',
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: 'RGB(0,21,41)',
      };
      const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'RGB(0,40,44)',
      };

      const navigate = useNavigate();

      const onTabChange = (key) =>{
            if(key==='1') {navigate('personContent')}
            if(key==='2') {navigate('updataSecret')}
      }

    return(
        <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
        size={[0, 48]}
      >
    <Layout>
      <Layout>
        <Sider>
            <Header style={headerStyle}>Header</Header>
        </Sider>
        <Content>
            <Button
                type="text"
                icon={<MenuFoldOutlined />}
                style={{
                fontSize: '16px',
                width: 64,
                height: 64,
                }}
            />
        </Content>
      </Layout>
      <Layout hasSider>
      <Sider style={siderStyle}>
      <Menu
              mode="inline"
              defaultSelectedKeys={['2']}
              defaultOpenKeys={['sub1']}
              theme="dark"
              style={{
                height: '100%',
              }}
              items={[
                {key:'1', label:'首页'},
                {key:'2', label:'个人中心'}
              ]}
      />

      </Sider>
    <Layout>
       <Header style={{
        color: '#000',
        height: 64,
        paddingInline: 50,
        lineHeight: '64px',
        backgroundColor: '#FFF',
      }}>

        <Tabs defaultActiveKey="1" 
        items={[
                {key:'1', label:'个人资料'},
                {key:'2', label:'修改密码'}
            ]}
            onChange={onTabChange}/>
      </Header>
      <Content style={contentStyle}>
              {/* <PersonContent/> */}
              {/* <UpdataSecret/> */}
              <Outlet/>
      </Content>
    </Layout>  
      </Layout>
      <Footer style={footerStyle}>designed by React & Ant Design ©2023</Footer>
    </Layout>
        </Space>)
    
}

export default Home;