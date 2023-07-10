import React, { useState, useEffect } from "react";
import { Empty, Avatar,Layout, Menu, Button, Space, Tabs , Col, Row} from 'antd';
import {MenuFoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined,} from '@ant-design/icons';
import './index.css'

import {List} from 'antd';
import { Outlet } from "react-router-dom";
import {  useNavigate, useLocation, useLoaderData } from "react-router-dom";

// export getUserName= ()=>{
//   const location = useLocation();
//   const username = location.state.username;
//   return {username}
// }

const Home = () =>{ 
    const { Header,Content, Footer, Sider } = Layout;

    const navigate = useNavigate();

    // const [homeUserName, setUserName] = useState('游客')
    // console.log('111111111111111')
    // const location = useLocation();
    // const username= location?.state?.username;

    // useEffect(()=>{setUserName(username)},[])

    const homeUserName = localStorage.getItem('username')?localStorage.getItem('username'):'游客'
    // const homeUserName = username? username:'游客';
    
    const [isShowTab, changeShowTable] = useState(false);
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
        justifyContent: 'center',
        backgroundColor: '#fff',
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
      
      // setUserName(username);

      const onTabChange = (key) =>{
            if(key==='1') {navigate('home/personContent')}
            if(key==='2') {navigate('home/updataSecret')}
      }

      const onMenuClick = (e)=>{
        if(e.key==='1') {navigate('')
        changeShowTable(false)}
        if(e.key==='2') {navigate('home/personContent')
        changeShowTable(true)}
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
            <Header style={headerStyle}>Hello</Header>
        </Sider>
        <Content style={{justifyContent:'space-between'}}>
            <Row>
                <Col span={1}><Button
                    type="text"
                    icon={<MenuFoldOutlined />}
                    style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                    
                    }}
                /></Col>
                <Col span={2} offset={20}>
                <div className="person-info"> 
                    <Avatar icon={<UserOutlined />} />
                    <span className="home-username">{homeUserName}</span>
                </div></Col>
                
            </Row>
        </Content>
      </Layout>
      <Layout hasSider>
      <Sider style={siderStyle}>
      <Menu   onClick={onMenuClick}
              mode="inline"
              defaultSelectedKeys={['1']}
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
        { isShowTab &&
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
      </Header>}
      <Content style={contentStyle}>
              {/* <PersonContent/> */}
              {/* <UpdataSecret/> */}
              <Outlet/>
      </Content>
      <Footer style={footerStyle}>designed by React & Ant Design ©2023</Footer>
    </Layout>  
      </Layout>

    </Layout>
        </Space>)
    
}

export default Home;