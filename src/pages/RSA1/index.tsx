import React, { useState } from 'react';
import { useUpdateEffect } from 'ahooks';
import { Form, Input, Select, Button, message } from 'antd';
import { getRsa } from '../../api';

import './index.less'

const { Option } = Select;

const RSA1 = () => {
  const [content, setContent] = useState([]);
  const [newContent, setNewContent] = useState([]);

  const onFinish = values => {
    setNewContent([]);
    getRsa(values).then(res => {
      const { data, msg, code } = res;
      if (code === 200) {
        message.success(msg);
        setInterval(() => {
          if (data.course.length) {
            setContent([...data.course.splice(0, 5)]);
          }
        }, 1000);
      } else {
        message.error(msg);
      }
    })
  };

  useUpdateEffect(() => {
    console.log(content)
    setNewContent([...newContent, ...content])
  }, [content])
  console.log('newContent', newContent)
  return (
    <div className='rsa1'>
      <div className='rsa1-form'>
      <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
          style={{ marginTop: '24px' }}
        >
          <Form.Item
            label="素数 p"
            name="p"
            rules={[
              { required: true, message: '请输入素数 p' },
            ]}
          >
            <Input placeholder="请输入素数 p" />
          </Form.Item>

          <Form.Item
            label="素数 q"
            name="q"
            rules={[
              { required: true, message: '请输入素数 q' },
            ]}
          >
            <Input placeholder="请输入素数 q" />
          </Form.Item>

          <Form.Item
            label="公钥"
            name="public_key"
            rules={[
              { required: true, message: '请输入公钥' },
            ]}
          >
            <Input placeholder="请输入公钥" />
          </Form.Item>

          <Form.Item
            label="明文"
            name="text"
            rules={[
              { required: true, message: '请输入明文' },
            ]}
          >
            <Input placeholder="请输入明文" />
          </Form.Item>

          <Form.Item
            label="加密类型"
            name="type"
            rules={[
              { required: true, message: '请选择加密类型' },
            ]}
          >
            <Select style={{ width: 150 }} placeholder="请选择加密类型">
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
      <div className='rsa1-show'>
          {
            newContent.map((item, index) => (
              <div key={index} className='rsa1-show-item'>{item}</div>
            ))
          }
      </div>
    </div>
  )
}

export default RSA1;
