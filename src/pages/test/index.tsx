import React, { useState, useEffect, useRef, useCallback, useMemo, useReducer } from 'react';
import { flushSync } from 'react-dom';
import { Input, Button } from 'antd';
import Child from './components/Child';
import Child1 from './components/Child1'; // 测试useState初始化传入一个函数本身和函数执行的区别
import Brother from './components/Brother';

const reducer = (state, action) => {
  // console.log('----', state, action);
  switch (action.type) {
    case 'change_name': {
      state.name = action.nextName;
      return state;
      return {
        ...state,
        name: action.nextName,
      }
    };
    case 'change_age': {
      return {
        ...state,
        age: state.age += 1,
      }
    }
  }
};

const init = (params) => {
  // console.log('paramszhixing', params);
  return {
    ...params,
    sex: '男'
  }
}


const Test = () => {
  const [brotherNum, setBrotherNum] = useState<number>(0);
  const [num, setNum] = useState<string>(1);
  const [state, setState] = useReducer(reducer, init({ name: 'hss', age: 18 }));

  const addBrotherNum = useCallback(() => {
    setBrotherNum(brotherNum + 1);
    setState({ type: 'change_age' })
  }, [brotherNum]);

  const addnum = () => {
    setNum(num + 1);
    setState({ type: 'change_name', nextName: 'wtg' });
  };

  const createOptions = useCallback(() => {
    return {
      a: 1
    }
  }, [brotherNum]);

  const childInfo = useMemo(() => {
    if (brotherNum === 0) {
      return {
        msg: '你的兄弟组件是原始状态'
      }
    } else {
      return {
        msg: '你的兄弟组件已经被修改了'
      }
    }
  }, []);

  useEffect(() => {
    const a = createOptions();
  }, [createOptions]);

  return (
    <div>
      {/* <div>{num}-{state.name}-{state.age}-{state.sex}</div>
      <Button type="primary" onClick={addnum}>+1</Button>
      <Child childInfo={childInfo} />
      <Brother num={brotherNum} addBrotherNum={addBrotherNum} /> */}
      <Child1 />
    </div>
  )
};

export default Test;

// 非阻塞的渲染模式 然后提出了filber(本质是个链表)
