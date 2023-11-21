import React, { useState, FC } from 'react';
import { Button, Input, message, Select } from 'antd';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { createKey } from '../../api';

import './index.less';

const { Option } = Select;

const CreateAlgorithm = props => {
  const { aaksdjflakjsdkaj, b } = props;
  console.log(aaksdjflakjsdkaj, b)
  const [val, setVal] = useState('');
  const [selValue, setSelValue] = useState(8);

  const handleChange = value => {
    setSelValue(value);
  };

  const create = () => {
    createKey(selValue).then(res => {
      const { code, data, msg } = res;
      if (code === 200) {
        message.success(msg);
        setVal(data.key);
      } else {
        message.error(msg);
      };
    })
  };

  return (
    <div className='create-algorithm'>
      <div className='algorithm'>
        <span>密钥：</span>
        <Select value={selValue} style={{ width: 120 }} onChange={handleChange}>
          <Option value={8}>8位</Option>
          <Option value={16}>16位</Option>
          <Option value={24}>24位</Option>
          <Option value={32}>32位</Option>
        </Select>
        <Input value={val} disabled={true} placeholder="请生成密钥" />
        <CopyToClipboard text={val} onCopy={() => message.success('复制成功!')}>
          <Button type="primary">复制</Button>
        </CopyToClipboard>
      </div>
      <Button type="primary" onClick={create}>生成密钥</Button>
    </div>
  )
}

export default CreateAlgorithm;
