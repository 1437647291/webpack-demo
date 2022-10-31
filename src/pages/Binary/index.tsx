import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { stringToHex, toUtf8 } from './binary';

import './index.less';

const Binary = () => {
  const [content, setContent] = useState('');

  const onFinish = values => {
    let str = '';
    const { msg } = values;
    str = toUtf8(msg);
    setContent(stringToHex(str));
  };
  console.log(sm2)
  return (
    <div className="binary">
      <div className='binary-form'>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
          style={{ marginTop: '24px' }}
        >
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
      <div className='binary-show'>
        {content}
      </div>
    </div>
  )
}

export default Binary;
