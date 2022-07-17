import React, { useEffect } from 'react';
import { useRequest } from 'ahooks';

const SendRequest = () => {
  const getName = () => {
    return new Promise((res, rej) => {
      res({ name: 'hss' })
    })
  };
  
  // const { data, run, error } = useRequest(() => ({
  //   url: '/user',
  //   method: 'GET',
  //   parama: ''
  // }), {
  //   onSuccess: res => {
  //     console.log('res', res);
  //   }
  // });
  
  // useRequest('/web/contact/parameterList', {
  //   manual: false,
  //   onSuccess: res => {
  //     console.log(res)
  //   }
  // });
  
  let xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/user', true);
  xhr.onload = () => {
    console.log(xhr.response)
  };
  xhr.send();

  // useEffect(() => {
  //   console.log('run执行')
  //   run();
  //   console.log('run执行1')
  // }, []);

  return (
    <div>请求</div>
  )
};

export default SendRequest;
