import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { generateKeyPairBySM2, encryptBySM2, decryptBySM2 } from '../../utils/cryptoFunction';

import './index.less';

const { Option }  = Select;

const SM21 = () => {
  const [content, setContent] = useState('');

  const onFinish = values => {
    var keyPair = generateKeyPairBySM2();
    const { type, msg } = values;
    const publicKey = keyPair.publicKey;
    setContent(encryptBySM2(msg, publicKey)); 
  }
  return (
    <div className='sm21'>
      <div className='sm21-form'>
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
      <div className='sm21-show'>{ content }</div>
    </div>
  )
}

export default SM21;
