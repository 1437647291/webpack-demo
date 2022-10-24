import React, { useState } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { getAes128core } from '../../api';

import './index.less';

const { Option } = Select

const AesText = () => {
  const [content, setContent] = useState([]);

  const onFinish = values => {
    getAes128core(values).then(res => {
      const { msg, code } = res;
      if (code === 200) {
        message.success(msg);
      } else {
        message.error(msg);
      };
    });
  };

  return (
    <div className='aes-text'>
      <div className='aes-text-form'>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
          style={{ marginTop: '24px' }}
        >
          <Form.Item
            label="加密文件路径"
            name="inputPath"
            rules={[
              { required: true, message: '请输入加密文件路径' },
            ]}
          >
            <Input placeholder="请输入加密文件路径" />
          </Form.Item>

          <Form.Item
            label="加密后文件路径"
            name="outputPath"
            rules={[
              { required: true, message: '请输入加密后文件路径' },
            ]}
          >
            <Input placeholder="请输入加密后文件路径" />
          </Form.Item>

          <Form.Item
            label="方式"
            name="code"
            rules={[
              { required: true, message: '请选择加密方式' },
            ]}
          >
            <Select style={{ width: 150 }} placeholder="请选择加密方式">
              <Option value="CBC">CBC</Option>
              <Option value="CFB">CFB</Option>
              <Option value="OFB">OFB</Option>
              <Option value="PCBC">PCBC</Option>
              <Option value="CTR">CTR</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="加密类型"
            name="type"
            rules={[
              { required: true, message: '请选择加密类型' },
            ]}
          >
            <Select style={{ width: 150 }} placeholder="请选择加密类型">
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
    </div>
  )
}

export default AesText;
