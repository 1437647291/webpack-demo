import React, { useState } from 'react';
import { useUpdateEffect } from 'ahooks';
import { Form, Input, Button, message } from 'antd';
import { getRsa2 } from '../../api';

import './index.less';

const RSA2 = () => {
  const [content, setContent] = useState([]);
  const [newContent, setNewContent] = useState([]);

  const onFinish = values => {
    setContent([]);
    setNewContent([]);
    const { size, msg } = values;
    getRsa2({ size: Number(size), msg: Number(msg) }).then(res => {
      const { data, msg } = res;
      message.success(msg);
      setInterval(() => {
        if (data.course.length) {
          setContent([...data.course.splice(0, 5)]);
        }
      }, 1000)
    })
  };

  useUpdateEffect(() => {
    setNewContent([...newContent, ...content])
  }, [content])

  return (
    <div className='rsa2'>
      <div className='rsa2-form'>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
          style={{ marginTop: '24px' }}
        >
          <Form.Item
            label="q p生成范围"
            name="size"
            rules={[
              { required: true, message: '请输入q p生成范围' },
            ]}
          >
            <Input placeholder="请输入q p生成范围" />
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

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              开始
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className='rsa2-show'>
        {
          newContent.map((item, index) => (
            <div key={index} className='rsa2-show-item'>{item}</div>
          ))
        }
      </div>
    </div>
  )
};

export default RSA2;
