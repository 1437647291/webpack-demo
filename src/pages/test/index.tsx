import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { stringify } from '_rc-field-form@1.27.2@rc-field-form/es/useWatch';

// import styles from './index.module.less';

const Test = () => {
  const [state, setState] = useState(1);

  const arr = [
    { a: 1, b: 2 },
    { a: 1, b: 2 },
    { a: 1, b: 3 },
  ];
  const a = (c, d) => {
    if (c.a === d.a && c.b === d.b) {
      return true;
    } else {
      return false;
    }
  };

  const e = new Set(arr, a);
  console.log(e, e)
  // let formatArr = [];
  // arr.forEach(item => {
  //   const curItem = formatArr.find(formatItem => (formatItem.a === item.a && formatItem.b === item.b));
  //   if (!curItem) {
  //     formatArr.push(item);
  //   }
  // });
  // console.log('arr', arr)
  // console.log('formatArr', formatArr)
  
  return (
    <div>
      {/* <div className={styles.box2}>
        <div className={styles.box3}></div>
      </div> */}
      {/* { state } */}
      {/* <Button style={{ marginTop: '300px' }}>登录</Button> */}
    </div>
  )
};

export default Test;
