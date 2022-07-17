import React from 'react';
import ReactDOM from 'react-dom';
import './main.less';
// import './one';
import './two';
import './error';
import SendRequest from './snedRequest';
import Header from '@components/Header';
import Footer from '@components/Footer';
import calc from './one';

// show('hh');
const fn = () => console.log('es6箭头函数');
fn();
const map = new Map();
map.set('name', 'hss');

// es7语法，相当于 new A(); a = 1;
// webpack不识别类的装饰器，需要添加识别装饰器的plugins，此处不做过多的演示，因为现在的项目都是使用hooks函数组件
// @log;
class A {
  a = 1
};
let aa = new A();
console.log(aa.a);

function log (target) {
  console.log(target, '22')
};

console.log('------', PUBLIC_CDN_URL)

console.log(calc.sum(1, 2), 'hhhhhhhh');

const onLoad = () => {
  console.log(11111);
  // 引入 loadFile 一直报找不到文件，引入Header等其余文件就可以，一直未找到原因
  import('@components/Header').then(res => {
    console.log('res', res)
  });
};

ReactDOM.render(
  <div>
    <Header />
    <img style={{ width: '50px', height: '50px' }} src={require('../assets/icon1.png')} alt="" />
    <button onClick={onLoad}>1111</button>
    <SendRequest />
    <Footer />
  </div>,
  document.getElementById('box')
)