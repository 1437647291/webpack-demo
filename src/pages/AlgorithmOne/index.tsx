import React from 'react';
import { Button, Select, Form, Input } from 'antd';
import './index.less';
import CreateAlgorithm from '../../components/CreateAlgorithm';

const { Option } = Select;

const AlgorithmOne = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className='algorithm-one'>
      <div className='algorithm-form'>
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
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (value.length < 16) {
                    return Promise.reject(new Error('密钥长度不足16位!'));
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input placeholder="请输入密钥" />
          </Form.Item>

          <Form.Item
            label="方式"
            name="type"
            rules={[
              { required: true, message: '请选择方式' },
            ]}
          >
            <Select style={{ width: 120 }} placeholder="请选择方式">
              <Option value="1">密文</Option>
              <Option value="2">明文</Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              开始
            </Button>
          </Form.Item>
        </Form>

      </div>
      <div className='algorithm-show'></div>
    </div>
  )
};

export default AlgorithmOne;
