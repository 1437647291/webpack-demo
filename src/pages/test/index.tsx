import React, { useState, useEffect, useRef, useCallback, useMemo, useReducer } from 'react';
import { flushSync } from 'react-dom';
import { Input, Button, Modal, DatePicker } from 'antd';
import { useThrottleFn } from 'ahooks';
import { useUpdateEffect }  from 'ahooks';
import Child from './components/Child';
import Child1 from './components/Child1'; // 测试useState初始化传入一个函数本身和函数执行的区别
import Brother from './components/Brother';
import SortablePro from './components/SortablePro';
import UnitTest from './components/UnitTest';
import RatePro from './components/RatePro';
import WebWorkerTest from './components/WebWorkerTest';
import moment from 'moment';

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

const { RangePicker } = DatePicker;

const Test = () => {
  const [date, setDate] = useState<any>(undefined);

  useEffect(() => {
    const endTime = new Date().getTime();
    const endDate = moment(endTime).format('YYYY-MM-DD');
    const startDate =  moment(endDate).subtract(1, 'months').format('YYYY-MM-DD');
    setDate([moment(startDate), moment(endDate)]);
  }, []);

  return (
    <div>
      {/* <RangePicker
        value={date}
      /> */}
      {/* <SortablePro /> */}
      {/* <RatePro /> */}
      {/* <UnitTest /> */}
      <WebWorkerTest />
    </div>
  )
};

export default Test;

// 非阻塞的渲染模式 然后提出了filber(本质是个链表)
