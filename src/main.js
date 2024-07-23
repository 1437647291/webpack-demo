import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import './main.less';
// import lodashEs from 'lodash-es';
// console.log('lodashEs1', lodashEs)


ReactDOM.render(
  <div className='main'>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </div>,
  document.getElementById('box')
)

// ReactDOM.createRoot(document.getElementById("box")).render(
//   <RouterProvider router={router} />
// );
// createRoot(document.getElementById("box")).render(
//   <RouterProvider router={router} />
// );