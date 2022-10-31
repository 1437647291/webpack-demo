import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { hashBySM3 } from '../../utils/digestFunction';

import './index.less';

const SM22 = () => {
  const [content, setContent] = useState('');

  const onFinish = values => {
    const {  msg } = values;
    setContent(hashBySM3(msg));
  };

  return (
    <div className='sm22'>
      <div className='sm22-form'>
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
              开始加密
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className='sm22-show'>{ content }</div>
    </div>
  )
}

export default SM22;
