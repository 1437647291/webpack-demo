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
import IdeaInfo from './pages/IdeaInfo';
import Ecc from './pages/Ecc';
import Ecc2 from './pages/Ecc2';
import Ecc3 from './pages/Ecc3';
import SimulatedLogin from './pages/SimulatedLogin';
import Md5 from './pages/Md5';
import RSAInfo from './pages/RSAInfo';
import DesInfo from './pages/DesInfo';
import EccInfo from './pages/EccInfo';
import AesInfo from './pages/AesInfo';
import Binary from './pages/Binary';
import SM21 from './pages/SM21';
import SM22 from './pages/SM22';
import SM23 from './pages/SM23';
import Test from './pages/Test';
import CodeMirrorPro from './pages/CodeMirrorPro';
import './utils/sm2';
import './utils/sm3';
import './utils/sm4';

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
                    key: '1-6',
                    label: <Link style={{ color: '#fff' }} to="/simulatedLogin">模拟登陆</Link>,
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
                  {
                    key: '2-3',
                    label: <Link style={{ color: '#fff' }} to="/desInfo">相关资料</Link>,
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
                  {
                    key: '3-3',
                    label: <Link style={{ color: '#fff' }} to="/rsaInfo">相关资料</Link>,
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
                    key: '4-4',
                    label: <Link style={{ color: '#fff' }} to="/ecc3">ECC3加解密</Link>,
                  },
                  {
                    key: '4-2',
                    label: <Link style={{ color: '#fff' }} to="/ecc2">ECC数字签名</Link>,
                  },
                  {
                    key: '4-3',
                    label: <Link style={{ color: '#fff' }} to="/eccInfo">相关资料</Link>,
                  },
                ]
              },
              // {
              //   key: '9',
              //   icon: <UploadOutlined />,
              //   label: <Link style={{ color: '#fff' }} to="/test">ECC3</Link>,
              // },
              {
                key: '5',
                icon: <UploadOutlined />,
                label: 'IDEA',
                children: [
                  {
                    key: '5-1',
                    label: <Link style={{ color: '#fff' }} to="/idea">IDEA加解密</Link>,
                  },
                  {
                    key: '5-2',
                    label: <Link style={{ color: '#fff' }} to="/ideaInfo">相关资料</Link>,
                  },
                ]
              },
              {
                key: '6',
                icon: <UploadOutlined />,
                label: <Link style={{ color: '#fff' }} to="/md5">MD5</Link>,
              },
              {
                key: '7',
                icon: <UploadOutlined />,
                label: <Link style={{ color: '#fff' }} to="/binary">BINARY</Link>,
              },
              {
                key: '8',
                icon: <UploadOutlined />,
                label: 'SM2',
                children: [
                  {
                    key: '8-1',
                    label: <Link style={{ color: '#fff' }} to="/sm21">sm2(1)</Link>,
                  },
                  {
                    key: '8-2',
                    label: <Link style={{ color: '#fff' }} to="/sm22">sm2(2)</Link>,
                  },
                  {
                    key: '8-3',
                    label: <Link style={{ color: '#fff' }} to="/sm23">sm2(3)</Link>,
                  },
                ]
              },
              {
                key: '9',
                icon: <UploadOutlined />,
                label: <Link style={{ color: '#fff' }} to="/test">测试页面</Link>,
              },
              {
                key: '10',
                icon: <UploadOutlined />,
                label: <Link style={{ color: '#fff' }} to="/codemirror">codemirror</Link>,
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
                <Aes128 a="1" b="2" onClick={() => console.log('dianji')} ob={{ name: 'hss', age: 18 }} />
              </Route>
              <Route path="/aesEncryptionDecryption">
                <AesEncryptionDecryption />
              </Route>
              <Route path="/aesText">
                <AesText />
              </Route>
              <Route path="/information">
                <AesInfo />
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
              <Route path="/ideaInfo">
                <IdeaInfo />
              </Route>
              <Route path="/ecc">
                <Ecc />
              </Route>
              <Route path="/ecc2">
                <Ecc2 />
              </Route>
              <Route path="/ecc3">
                <Ecc3 />
              </Route>
              <Route path="/aesPriview">
                <AesPriview />
              </Route>
              <Route path="/simulatedLogin">
                <SimulatedLogin />
              </Route>
              <Route path="/md5">
                <Md5 />
              </Route>
              <Route path="/rsaInfo">
                <RSAInfo />
              </Route>
              <Route path="/desInfo">
                <DesInfo />
              </Route>
              <Route path="/eccInfo">
                <EccInfo />
              </Route>
              <Route path="/binary">
                <Binary />
              </Route>
              <Route path="/sm21">
                <SM21 />
              </Route>
              <Route path="/sm22">
                <SM22 />
              </Route>
              <Route path="/sm23">
                <SM23 />
              </Route>
              <Route path="/test">
                <Test />
              </Route>
              <Route path="/codemirror">
                <CodeMirrorPro />
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
