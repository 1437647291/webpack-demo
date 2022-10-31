import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { encryptBySM4, decryptBySM4, } from '../../utils/cryptoFunction';

import './index.less';

const { Option } = Select;

const SM23 = () => {
  const [content, setContent] = useState('');

  const onFinish = values => {
    const { msg, type } = values;
    const keys = "abcdefgh12345678abcdefgh12345678";
    if (type === '1') {
      setContent(encryptBySM4(msg, keys));
    } else {
      setContent(decryptBySM4(msg, keys));
    };
  };

  return (
    <div className='sm23'>
      <div className='sm23-form'>
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
      <div className='sm23-show'>{ content }</div>
    </div>
  )
}

export default SM23;
