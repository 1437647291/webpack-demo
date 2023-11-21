import React, { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import { Input, Button } from 'antd';
import Child from './components/Child';
import Brother from './components/Brother';


const Test = () => {
  const ulRef = useRef(null);
  const [isPrinting, setIsPrinting] = useState(false);
  const [numArr, setNumArr] = useState([]);

  const getNum = () => {
    console.log('numArr111', numArr);
  };

  const addNum = () => {
    flushSync(() => {
      setNumArr([ ...numArr, numArr.length + 1 ]);
    });
    console.log(ulRef.current.lastChild)
    getNum();
  };

  return (
    <div>
      <ul ref={ulRef}>
        {
          numArr.map(item => (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
      <Child num={1} />
      <Brother />
      <Button onClick={addNum}>+1</Button>
    </div>
  )
};

export default Test;

// 非阻塞的渲染模式 然后提出了filber(本质是个链表)
