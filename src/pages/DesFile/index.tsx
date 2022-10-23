import React, { useState } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import { getDesfile } from '../../api';

import './index.less';

const { Option } = Select;

const DesFile = () => {
  const [content, setContent] = useState([]);

  const onFinish = values => {
    getDesfile(values).then(res => {
      const { code, data, msg } = res;
      if (code === 200) {
        message.success(msg);
        setContent(data.course)
      } else {
        message.error(msg);
      }
    })
  }
  return (
    <div className='des-file'>
      <div className='des-file-form'>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
          style={{ marginTop: '24px' }}
        >
          <Form.Item
            label="密钥文件位置"
            name="keyName"
            rules={[
              { required: true, message: '请输入密钥文件位置' },
            ]}
          >
            <Input placeholder="请输入密钥文件位置" />
          </Form.Item>

          <Form.Item
            label="文件位置"
            name="fileName"
            rules={[
              { required: true, message: '请输入文件位置' },
            ]}
          >
            <Input placeholder="请输入文件位置" />
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
      <div className='des-file-show'>
        {
          content.map(item => (
            <div className='des-file-show-item'>{item}</div>
          ))
        }
      </div>
    </div>
  )
}

export default DesFile;
