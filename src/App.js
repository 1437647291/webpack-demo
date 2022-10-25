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
import Aes128 from './pages/Aes128';
import AesEncryptionDecryption from './pages/AesEncryptionDecryption';
import AesText from './pages/AesText';
import AesPriview from './pages/AesPriview';
import Information from './pages/Information';
import Des from './pages/Des';
import DesFile from './pages/DesFile';
import RSA1 from './pages/RSA1';
import RSA2 from './pages/RSA2';
import Idea from './pages/Idea';
import Ecc from './pages/Ecc';
import Ecc2 from './pages/Ecc2';

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
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: "AES",
                children: [
                  {
                    key: '1-1',
                    label: <Link style={{ color: '#fff' }} to="/aes128">AES128</Link>,
                  },
                  {
                    key: '1-2',
                    label: <Link style={{ color: '#fff' }} to="/aesEncryptionDecryption">AES加解密</Link>,
                  },
                  {
                    key: '1-3',
                    label: <Link style={{ color: '#fff' }} to="/aesText">AES文本内容</Link>,
                  },
                  {
                    key: '1-5',
                    label: <Link style={{ color: '#fff' }} to="/aesPriview">AES加密演示</Link>,
                  },
                  {
                    key: '1-4',
                    label: <Link style={{ color: '#fff' }} to="/information">相关资料</Link>,
                  }
                ]
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'DES',
                children: [
                  {
                    key: '2-1',
                    label: <Link style={{ color: '#fff' }} to="/des">DES加解密</Link>,
                  },
                  {
                    key: '2-2',
                    label: <Link style={{ color: '#fff' }} to="/desFile">DES加密文件</Link>,
                  },
                ]
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'RSA',
                children: [
                  {
                    key: '3-1',
                    label: <Link style={{ color: '#fff' }} to="/RSA1">RSA加解密</Link>,
                  },
                  {
                    key: '3-2',
                    label: <Link style={{ color: '#fff' }} to="/RSA2">RSA大数</Link>,
                  },
                ]
              },
              {
                key: '4',
                icon: <UploadOutlined />,
                label: 'ECC',
                children: [
                  {
                    key: '4-1',
                    label: <Link style={{ color: '#fff' }} to="/ecc">ECC加解密</Link>,
                  },
                  {
                    key: '4-2',
                    label: <Link style={{ color: '#fff' }} to="/ecc2">ECC数字签名</Link>,
                  },
                ]
              },
              {
                key: '5',
                icon: <UploadOutlined />,
                label: <Link style={{ color: '#fff' }} to="/idea">IDEA</Link>,
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
              <Route path="/aes128">
                <Aes128 />
              </Route>
              <Route path="/aesEncryptionDecryption">
                <AesEncryptionDecryption />
              </Route>
              <Route path="/aesText">
                <AesText />
              </Route>
              <Route path="/information">
                <Information />
              </Route>
              <Route path="/des">
                <Des />
              </Route>
              <Route path="/desFile">
                <DesFile />
              </Route>
              <Route path="/RSA1">
                <RSA1 />
              </Route>
              <Route path="/RSA2">
                <RSA2 />
              </Route>
              <Route path="/idea">
                <Idea />
              </Route>
              <Route path="/ecc">
                <Ecc />
              </Route>
              <Route path="/ecc2">
                <Ecc2 />
              </Route>
              <Route path="/aesPriview">
                <AesPriview />
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
