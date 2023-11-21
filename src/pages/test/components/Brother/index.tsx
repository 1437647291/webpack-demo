import React, { useState } from 'react';
import { Button } from 'antd';

const Brother = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <div>Brother：{num}</div>
      <Button onClick={() => setNum(num + 1)}>Brother组件+1</Button>
    </div>
  )
};

export default Brother;
