import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, message } from 'antd';
import { useUpdateEffect } from 'ahooks';
import { getEcc3 } from '../../api';

import './index.less';

const Ecc3 = () => {
  const [content, setContent] = useState([]);
  const [newContent, setNewContent] = useState([]);

  const onFinish = values => {
    setNewContent([]);
    getEcc3(values).then(res => {
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

  return (
    <div className='ecc3'>
      <div className='ecc3-form'>
      <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
          style={{ marginTop: '24px' }}
        >
          <Form.Item
            label="a"
            name="a"
            rules={[
              { required: true, message: '请输入a' },
            ]}
          >
            <InputNumber placeholder="请输入a" />
          </Form.Item>

          <Form.Item
            label="b"
            name="b"
            rules={[
              { required: true, message: '请输入b' },
            ]}
          >
            <InputNumber placeholder="请输入b" />
          </Form.Item>

          <Form.Item
            label="p"
            name="p"
            rules={[
              { required: true, message: '请输入p' },
            ]}
          >
            <InputNumber placeholder="请输入p" />
          </Form.Item>

          <Form.Item
            label="SE"
            name="se"
            rules={[
              { required: true, message: '请输入SE' },
            ]}
          >
            <Input placeholder="请输入SE" />
          </Form.Item>

          <Form.Item
            label="CR"
            name="cr"
            rules={[
              { required: true, message: '请输入CR' },
            ]}
          >
            <Input placeholder="请输入CR" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              开始
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className='ecc3-show'>
        {
          newContent.map((item, index) => (
            <div key={index} className='ecc3-show-item'>{item}</div>
          ))
        }
      </div>
    </div>
  )
};

export default Ecc3;
