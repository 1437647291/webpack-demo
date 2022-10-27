import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useUpdateEffect } from 'ahooks';
import { getAes } from '../../api';

import './index.less';

const SimulatedLogin = () => {
  const [accountContent, setAccountContent] = useState([]);
  const [newAccountContent, setNewAccountContent] = useState([]);
  const [passContent, setPassContent] = useState([]);
  const [newPassContent, setNewPassContent] = useState([]);

  const onFinish = values => {
    console.log('values', values);
    const { account, password } = values;
    getAes({ key: '3xftc9vw', msg: account }).then(res => {
      const { code, data, msg } = res;
      if (code === 200) {
        message.success(msg);
        setInterval(() => {
          if (data.course.length) {
            setAccountContent([...data.course.splice(0, 5)]);
          }
        }, 1000);
      } else {
        message.error(msg);
      }
    });
    getAes({ key: '3xftc9vw', msg: password }).then(res => {
      const { code, data, msg } = res;
      if (code === 200) {
        message.success(msg);
        setInterval(() => {
          if (data.course.length) {
            setPassContent([...data.course.splice(0, 5)]);
          }
        }, 1000);
      } else {
        message.error(msg);
      }
    });
  };

  useUpdateEffect(() => {
    setNewAccountContent([...newAccountContent, ...accountContent]);
  }, [accountContent]);

  useUpdateEffect(() => {
    setNewPassContent([...newPassContent, ...passContent]);
  }, [passContent]);

  return (
    <div className='simulated-login'>
      <div className='simulated-login-form'>
      <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
          style={{ marginTop: '24px' }}
        >
          <Form.Item
            label="账号"
            name="account"
            rules={[
              { required: true, message: '请输入账号' },
            ]}
          >
            <Input style={{ width: '280px' }} placeholder="请输入账号" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              { required: true, message: '请输入密码' },
            ]}
          >
            <Input style={{ width: '280px' }} placeholder="请输入密码" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className='simulated-login-show'>
        <div className='show-items'>
          {
            newAccountContent.map((item, index) => (
              <div key={index} className='show-item'>{item}</div>
            ))
          }
        </div>
        <div className='show-items'>
          {
            newPassContent.map((item, index) => (
              <div key={index} className='show-item'>{item}</div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default SimulatedLogin;
