import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { createKeyFile } from '../../api';

import './index.less';

const CreateFile = () => {
  const [val, setVal] = useState('');
  const [filePath, setFilePath] = useState('');

  const changeFilePath = e => {
    setFilePath(e.target.value);
  };

  const create = () => {
    if (filePath === '') {
      message.error('请输入密钥文件位置!');
      return;
    };

    createKeyFile({ fileName: filePath}).then(res => {
      const { code, data, msg } = res;
      if (code === 200) {
        message.success(msg);
      } else {
        message.error(msg);
      }
      console.log('res', res);
    })
  };

  return (
    <div className='create_file'>
      <Input value={filePath} onChange={changeFilePath} placeholder="请输入密钥文件位置" />
      {/* <div className='file-wrap'>
        <Input value={val} disabled={true} placeholder="请生成密钥" />
        <CopyToClipboard text={val} onCopy={() => message.success('复制成功!')}>
          <Button type="primary">复制</Button>
        </CopyToClipboard>
      </div> */}
      <Button type="primary" style={{ marginTop: '12px' }} onClick={create}>生成文件</Button>
    </div>
  )
};

export default CreateFile;
