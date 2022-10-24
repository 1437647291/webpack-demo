import React, { useState } from 'react';
import { Button, Input, message } from 'antd';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { createKey } from '../../api';

import './index.less'

const CreateAlgorithm = () => {
  const [val, setVal] = useState('');

  const create = () => {
    createKey().then(res => {
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
