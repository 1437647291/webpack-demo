import React, { useState, useEffect, memo } from 'react';
import { Button } from 'antd';

const Brother = props => {
  const { num, addBrotherNum } = props;

  useEffect(() => {
    // console.log('Effect zhixing')
  }, []);
  
  return (
    <div>
      <div>Brother：{num}</div>
      <Button onClick={addBrotherNum}>Brother组件+1</Button>
    </div>
  )
};

export default memo(Brother);
