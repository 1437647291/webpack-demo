import React, { useEffect, useState } from 'react';
import { useUpdateEffect } from 'ahooks';
import { Form, Input, Select, Button, message } from 'antd';
import CreateAlgorithm from '../../components/CreateAlgorithm';
import { getAesall3 } from '../../api';

import './index.less';

const { Option } = Select;
let info = [];

const AesEncryptionDecryption = () => {
  const [content, setContent] = useState([]);
  const [newContent, setNewContent] = useState([]);

  const onFinish = values => {
    setNewContent([]);
    const { key, msg } = values;
    if (key && key.length !== 16) {
      message.error('密钥长度不足16位！');
      return;
    };
    if (msg && msg.length !== 16) {
      message.error('明文长度不足16位！');
      return;
    };
    
    getAesall3(values).then(res => {
      const { data, msg, code } = res;
      if (code === 200) {
        message.success(msg);
        setInterval(() => {
          if (data.course.length) {
            setContent([...data.course.splice(0, 5)]);
          }
        }, 1000)
      } else {
        message.error(msg);
      }   
    });
  };

  useUpdateEffect(() => {
    setNewContent([...newContent, ...content])
  }, [content])
  
  return (
    <div className='aes-encryption-decryption'>
      <div className='aes-encryption-decryption-form'>
        <CreateAlgorithm />

        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
          style={{ marginTop: '24px' }}
        >
          <Form.Item
            label="密钥"
            name="key"
            rules={[
              { required: true, message: '请输入密钥' },
            ]}
          >
            <Input placeholder="请输入密钥" />
          </Form.Item>

          <Form.Item
            label="密文/明文"
            name="msg"
            rules={[
              { required: true, message: '请输入密文/明文' },
            ]}
          >
            <Input placeholder="请输入密文/明文" />
          </Form.Item>

          <Form.Item
            label="方式"
            name="type"
            rules={[
              { required: true, message: '请选择方式' },
            ]}
          >
            <Select style={{ width: 120 }} placeholder="请选择方式">
              <Option value="2">解密</Option>
              <Option value="1">加密</Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              开始
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className='aes-encryption-decryption-show'>
        {
          newContent.map((item, index) => (
            <div key={index} className='aes-encryption-decryption-show-item'>{item}</div>
          ))
        }
      </div>
    </div>
  )
};

export default AesEncryptionDecryption;
