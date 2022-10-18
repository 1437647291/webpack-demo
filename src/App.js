import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Route, useHistory, Link, Switch } from 'react-router-dom';
import AlgorithmOne from './pages/AlgorithmOne';
import AlgorithmTwo from './pages/AlgorithmTwo';
import AlgorithmThree from './pages/AlgorithmThree';

const { Header, Sider, Content } = Layout;

const App = props => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();

  // const clickMenu = currentMenu => {
  //   console.log(currentMenu.key, history)
  //   if (currentMenu.key === '1') {
  //     history.push('/algorithmOne');
  //   } else if (currentMenu.key === '2') {
  //     history.push('/algorithmTwo');
  //   } else if (currentMenu.key === '3') {
  //     history.push('/algorithmThree');
  //   };
  // };

  return (
    <div className='app'>
      <BrowserRouter>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: <Link style={{ color: '#fff' }} to="/algorithmOne">算法1</Link>,
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: <Link style={{ color: '#fff' }} to="/algorithmTwo">算法2</Link>,
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: <Link style={{ color: '#fff' }} to="/algorithmThree">算法3</Link>,
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/algorithmOne">
                <AlgorithmOne />
              </Route>
              <Route path="/algorithmTwo">
                <AlgorithmTwo />
              </Route>
              <Route path="/algorithmThree">
                <AlgorithmThree />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
      </BrowserRouter>
    </div>
  )
};

export default App;
