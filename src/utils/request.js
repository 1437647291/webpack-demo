import React from 'react';
import axios from 'axios'
import Cookies from 'js-cookie';
import { message } from 'antd';
// import utils from './utils';

// const { backLogin } = utils;

const { pathname } = window.location

// 创建 axios 实例
const service = axios.create({
  baseURL: '/api', // api base_url
  timeout: 60000, // 请求超时时间
})


// export const backLogin = () => {
//   !pathname.includes('/user/login')&&router.history.replace('/user/login');
//   localStorage.clear();
//   Cookies.remove('auth');
// }


const err = (error) => {
  if (error.response) {
    const data = error.response.data
    message.error(data.msg)
    console.log(data)
  } else {
    // 请求超时状态
    if (error.message.includes('timeout')) {
      console.log('超时了')
    } else {
      // 可以展示断网组件
      console.log('断网了')
    }
  }
  return Promise.reject(error)
}

/**
 * 处理参数
 * @param {*} config 
 */
const handleParams = (config) => {
  const { params, data, url } = config;
  console.log(url)
  if ((params && params.offValidation) || (data && data.offValidation)) {
    return config;
  }

  // const cem_timestamp = new Date().getTime();
  // if (params) {
  //   config.params.cem_timestamp = cem_timestamp;
  // } else {
  //   config.params = { cem_timestamp };
  // }

  // const auth = Cookies.get('auth');
  // // auth ? config.headers['Cem-Auth'] = auth : backLogin();
  // if (auth) {
  //   config.headers['Cem-Auth'] = auth;
  //   config.headers['Cem-Pathname'] = window.location.pathname;
  // } else if (!url.includes('foreign')) {
  //   if (pathname === '/new-survey/share') return
  //   // backLogin();
  // }

  return config;
}

// request interceptor
service.interceptors.request.use(config => {
  return handleParams(config)
}, err)

// response interceptor
service.interceptors.response.use((response) => {
  const { status, data: { code, msg } } = response;
  if (status === 200 && code === 200) {
    return response.data
  } else if (status === 200) {
    return response.data
  } else if (status === 401 || code === 401) {
    // backLogin()
  } else if (status === 200 && [88001, 88002, 88003, 88004, 88005, 88006, 88007, 88008].includes(code)) {
    message.error({ content: <span>{msg}，<a href='https://www.cempro.cn/website/price'>去升级&gt;&gt;</a></span>, duration: 3 })
  } else {
    message.error(msg)
  }

  return Promise.reject(response.data)
}, err)

export default service;