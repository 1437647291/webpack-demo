import React, { useState } from 'react';
import { Button } from 'antd';
import { addNum, preveNum } from './const';

const UnitTest = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1>单元测试</h1>
      <div>{count}</div>
      <Button onClick={() => setCount(addNum)}>+1</Button>
      <Button onClick={() => setCount(preveNum)}>-1</Button>
    </div>
  )
};

export default UnitTest;
