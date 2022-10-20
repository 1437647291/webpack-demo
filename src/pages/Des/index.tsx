import React, { useState } from 'react';
import { useUpdateEffect } from 'ahooks';
import { Form, Input, Button, message, Select } from 'antd';
import { getDestest } from '../../api';

import './index.less';

const { Option }  = Select;

const Des = () => {
  const [content, setContent] = useState([]);
  const [newContent, setNewContent] = useState([]);

  const onFinish = values => {
      getDestest(values).then(res => {
        const { data, msg, code } = res;
        if (code === 200) {
          message.success(msg);
          setInterval(() => {
            if (data.course.length) {
              setContent([...data.course.splice(0, 50)]);
            }
          }, 1000)
        } else {
          message.error(msg);
        }
      })
  };

  useUpdateEffect(() => {
    setNewContent([...newContent, ...content])
  }, [content]);

  return (
    <div className='des'>
      <div className='des-form'>
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
            label="明文"
            name="msg"
            rules={[
              { required: true, message: '请输入明文' },
            ]}
          >
            <Input placeholder="请输入明文" />
          </Form.Item>

          <Form.Item
            label="方式"
            name="type"
            rules={[
              { required: true, message: '请选择方式' },
            ]}
          >
            <Select style={{ width: 120 }} placeholder="请选择方式">
              <Option value="1">加密</Option>
              <Option value="2">解密</Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              开始
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className='des-show'>
        {
            newContent.map((item, index) => (
              <div key={index} className='des-show-item'>{item}</div>
            ))
          }
      </div>
    </div>
  )
};

export default Des;
