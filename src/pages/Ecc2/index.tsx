import React, { useState } from 'react';
import { Button, message } from 'antd';
import { useUpdateEffect } from 'ahooks';
import { getEcc2 } from '../../api';

import './index.less';

const Ecc2 = () => {
  const [content, setContent] = useState([]);
  const [newContent, setNewContent] = useState([]);

  const onEcc = () => {
    setNewContent([]);
    getEcc2().then(res => {
      const { data, msg, code } = res;
      if (code === 200) {
        message.success(msg);
        setInterval(() => {
          if (data.course.length) {
            setContent([...data.course.splice(0, 5)]);
          }
        }, 1000)
      } else {
        message.error(msg);
      }
    })
  };

  useUpdateEffect(() => {
    setNewContent([...newContent, ...content])
  }, [content])

  return (
    <div className='ecc2'>
      <div className='ecc2-form'>
        <Button type="primary" onClick={onEcc}>开始加密</Button>
        <div className='ecc2-bg'></div>
      </div>
      <div className='ecc2-show'>
        {
          newContent.map((item, index) => (
            <div key={index} className='ecc2-show-item'>{item}</div>
          ))
        }
      </div>
    </div>
  )
};

export default Ecc2;
