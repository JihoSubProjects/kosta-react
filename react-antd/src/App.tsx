import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';

import Home from "./component/Home";
import Button from './component/Button';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" title="General">
                  <Menu.Item key="1">Components Overview</Menu.Item>
                  <Menu.Item key="2" onClick={() => window.open('/button')}>Button</Menu.Item>
                  <Menu.Item key="3">Icon</Menu.Item>
                  <Menu.Item key="4">Typography</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="Layout">
                  <Menu.Item key="5">Divider</Menu.Item>
                  <Menu.Item key="6">Grid</Menu.Item>
                  <Menu.Item key="7">Layout</Menu.Item>
                  <Menu.Item key="8">Space</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title="Navigation">
                  <Menu.Item key="9">Affix</Menu.Item>
                  <Menu.Item key="10">Breadcrumb</Menu.Item>
                  <Menu.Item key="11">Dropdown</Menu.Item>
                  <Menu.Item key="12">Menu</Menu.Item>
                  <Menu.Item key="13">PageHeader</Menu.Item>
                  <Menu.Item key="14">Pagination</Menu.Item>
                  <Menu.Item key="15">Steps</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/button" element={<Button />} />
                </Routes>
              </BrowserRouter>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
    </>
  )
}

export default App;