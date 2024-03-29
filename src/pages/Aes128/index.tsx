import React, { useState } from 'react';
import { useUpdateEffect } from 'ahooks';
import { Button, Select, Form, Input, message } from 'antd';
import './index.less';
import CreateAlgorithm from '../../components/CreateAlgorithm';
import { getAes } from '../../api';

const { Option } = Select;

const AlgorithmOne = props => {
  const [content, setContent] = useState([]);
  const [newContent, setNewContent] = useState([]);

  const onFinish = (values) => {
    // setContent([]);
    setNewContent([]);
    const { key, msg } = values;
    if (msg && msg.length !== 16) {
      message.error('明文长度不足16位！');
      return;
    };
    getAes(values).then(res => {
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
    });
  };

  useUpdateEffect(() => {
    setNewContent([...newContent, ...content]);
  }, [content])

  return (
    <div className='algorithm-one'>
      <div className='algorithm-form'>
        <CreateAlgorithm aaksdjflakjsdkaj={2} />
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

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              开始
            </Button>
          </Form.Item>
        </Form>

      </div>
      <div className='algorithm-show'>
          {
            newContent.map((item, index) => (
              <div key={index} className='algorithm-show-item'>{item}</div>
            ))
          }
      </div>
    </div>
  )
};

export default AlgorithmOne;
