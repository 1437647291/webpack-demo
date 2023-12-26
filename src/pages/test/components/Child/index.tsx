import React, { useEffect, useState, memo } from 'react';
import { Button } from 'antd';

const Child = props => {
  // console.log('执行了子组件', props);
  const [childNum, setChildNum] = useState(0);
  const [childNum1, setChildNum1] = useState(1);

  const add3 = () => {
    setChildNum1(childNum1 + 1);
    setChildNum(5);
    setChildNum(num => {
      console.log('1', num);
      return num + 1;
    });
    setChildNum(num => {
      console.log('2', num);
      return num + 1;
    });
  };
  console.log('zhixing');
  return (
    <div>
      {/* 父组件的值为：{props.childInfo.msg} */}
      该组件的值：{childNum}-{childNum1}
      <Button onClick={add3}>+3</Button>
    </div>
  )
};

export default memo(Child);
