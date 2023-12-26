// useState 初始话传入一个函数本身和函数执行的区别

import React, { useState, FC } from 'react';

// const createInitialTodos = () => {
//   console.log('函数执行了');
//   let initialTodos = [];
//   for (let i = 0; i < 50; i++) {
//     initialTodos.push({
//       id: i,
//       text: 'Item ' + (i + 1)
//     });
//   }
//   return initialTodos;
// };

interface Child1PropsTypes {
  a: number
}

const Child1: FC<Child1PropsTypes> = props => {
  const { a } = props;
  // const [todos, setTodos] = useState(createInitialTodos());
  const [text, setText] = useState('');

  return (
    <div>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      {/* <button onClick={() => {
        setText('');
        setTodos([{
          id: todos.length,
          text: text
        }, ...todos]);
      }}>Add</button>
      <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul> */}
    </div>
  )
};

export default Child1;
