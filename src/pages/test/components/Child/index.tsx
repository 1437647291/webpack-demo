import React, { useEffect, useState, memo } from 'react';

const Child = props => {
  console.log('执行了子组件');
  return (
    <div>父组件的值为：{props.num}</div>
  )
};

export default memo(Child);
