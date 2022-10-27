import React, { useState } from 'react';
import { Form, Button, Input } from 'antd';
import MD5FN from './md5Fn';

import './index.less';

const Md5 = () => {
  const [content, setContent] = useState('');

  const onFinish = values => {
    const { key } = values;
    const val = MD5FN(key);
    setContent(val);
  };
  return (
    <div className='md5'>
      <div className='md5-form'>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
          style={{ marginTop: '24px' }}
        >
          <Form.Item
            label="加密内容"
            name="key"
            rules={[
              { required: true, message: '请输入加密内容' },
            ]}
          >
            <Input placeholder="请输入加密内容" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              开始
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className='md5-show'>
        {
          content ? content : ''
        }
      </div>
    </div>
  )
};

export default Md5;
