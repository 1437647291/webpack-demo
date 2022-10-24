import React, { useState } from 'react';
import { Form, Input, Button, Select, message, Col, Row } from 'antd';
import { useUpdateEffect } from 'ahooks';
import { getIdea } from '../../api';

import './index.less';

const { Option } = Select;

const Idea = () => {
  const [content, setContent] = useState([]);
  const [newContent, setNewContent] = useState([]);
  const [type, setType] = useState();
  const [msg, setMsg] = useState();
  const [keys, setKeys] = useState([
    {
      key: 1,
      value: ''
    },
    {
      key: 2,
      value: ''
    },
    {
      key: 3,
      value: ''
    },
    {
      key: 4,
      value: ''
    },
    {
      key: 5,
      value: ''
    },
    {
      key: 6,
      value: ''
    },
    {
      key: 7,
      value: ''
    },
    {
      key: 8,
      value: ''
    },
  ]);

  const changeSel = val => {
    setType(val);
  };

  const changePlaintext = e => {
    setMsg(e.target.value);
  };

  const changeKeys = (e, index) => {
    keys[index].value = e.target.value;
    setKeys(keys);
  };
  
  const onFinish = () => {
    setContent([]);
    setNewContent([]);
    if (!msg) {
      message.error('请填写明文');
      return;
    };
    if (!type) {
      message.error('请选择方式');
      return;
    };
    if (keys.find(item => item.value === '')) {
      message.error('请填写密钥');
      return;
    };

    let formatKeys = [];
    keys.forEach(item => {
      formatKeys.push(item.value);
    });

    const params = {
      msg,
      type,
      keys: formatKeys
    };

    getIdea(params).then(res => {
      const { code, data, msg } = res;
      if (code === 200) {
        message.success(msg);
        setInterval(() => {
          if (data.course.length) {
            setContent([...data.course.splice(0, 200)]);
          }
        }, 1000);
      } else {
        message.error(msg);
      }
    })
  };

  useUpdateEffect(() => {
    setNewContent([...newContent, ...content])
  }, [content]);

  return (
    <div className='idea'>
      <div className='idea-form'>
        <Row style={{ marginTop: '24px' }}>
          <Col span={6}>
            <div className='idea-form-label'>
              <span className='idea-form-label-tips'>*</span>
              <span>密钥：</span>
            </div>
          </Col>
          <Col span={16}>
            <div className='idea-form-content'>
              <Input onChange={(e) => changeKeys(e, 0)} />
              <Input onChange={(e) => changeKeys(e, 1)} />
              <Input onChange={(e) => changeKeys(e, 2)} />
              <Input onChange={(e) => changeKeys(e, 3)} />
              <Input onChange={(e) => changeKeys(e, 4)} />
              <Input onChange={(e) => changeKeys(e, 5)} />
              <Input onChange={(e) => changeKeys(e, 6)} />
              <Input onChange={(e) => changeKeys(e, 7)} />
            </div>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col span={6}>
            <div className='idea-form-label'>
              <span className='idea-form-label-tips'>*</span>
              <span>明文：</span>
            </div>
          </Col>
          <Col span={16}>
            <div className='idea-form-wrap'>
              <Input placeholder="请输入明文" onChange={changePlaintext} />
            </div>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col span={6}>
            <div className='idea-form-label'>
              <span className='idea-form-label-tips'>*</span>
              <span>方式：</span>
            </div>
          </Col>
          <Col span={16}>
            <div className='idea-form-wrap'>
              <Select style={{ width: 120 }} placeholder="请选择方式" onChange={changeSel}>
                <Option value="3">加解密</Option>
                <Option value="1">加密</Option>
              </Select>
            </div>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col span={6}></Col>
          <Col span={16}>
            <Button type="primary" onClick={onFinish}>开始</Button>
          </Col>
        </Row>
      {/* <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
          style={{ marginTop: '24px' }}
        >
          <Form.Item
            label="密钥"
            name="keys"
            rules={[
              { required: true, message: '请输入密钥' },
              // ({ getFieldValue }) => ({
              //   validator(_, value) {
              //     if (value.length < 16) {
              //       return Promise.reject(new Error('密钥长度不足16位!'));
              //     }
              //     return Promise.resolve();
              //   },
              // }),
            ]}
          >
            <Input placeholder="请输入密钥" />
            <Input placeholder="请输入密钥" />
          </Form.Item>

          <Form.Item
            label="明文"
            name="msg"
            rules={[
              { required: true, message: '请输入明文' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (value.length < 16) {
                    return Promise.reject(new Error('明文长度不足16位!'));
                  }
                  return Promise.resolve();
                },
              }),
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
              <Option value="3">解密</Option>
              <Option value="1">加密</Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              开始
            </Button>
          </Form.Item>
        </Form> */}
      </div>
      <div className='idea-show'>
        {
          newContent.map((item, index) => (
            <div key={index} className='idea-show-item'>{item}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Idea;
