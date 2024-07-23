import React, { useEffect } from 'react';

import './index.less';

const WebWorkerTest = () => {

  useEffect(()  => {
    const worker = new Worker(new URL('./Worker.js', import.meta.url));
    worker.addEventListener('message', e => {
      console.log('收到web worker 消息', e, e.data);
    });
    worker.postMessage('Hello World!');

    return () => {
      worker.terminate();
    }
  }, []);

  return (
    <div className='web-worker' data-color='red'>
      {/* Web Worker */}
      <div>111</div>
      <div>222</div>
      <div>333</div>
    </div>
  )
};

export default WebWorkerTest;
