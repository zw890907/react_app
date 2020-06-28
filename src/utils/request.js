import axios from 'axios';
import Qs from 'qs';
import { message } from 'antd';
import { codeMessage } from '@/constants/config';
// import getCookie from './cookie';

// 导出静态方法
const all = axios.all;
const spread = axios.spread;

// console.log(getCookie());
const request = axios.create({
  // 超时时间
  // timeout: 10000,
  timeout: 30000,
  // 返回值类型
  responseType: 'json',
  headers: {
    // 'CookieData': JSON.stringify(getCookie())
  },
  paramsSerializer: params => {
    return Qs.stringify(params, { arrayFormat: 'brackets' });
  },
  // 允许携带cookie
  withCredentials: true
});

// 请求拦截
// request.interceptors.request.use(
//   config => {
//     // 发送请求前做到事情，查看登陆信息
//     const token = getCookie('token');
//     if (token) {
//       const headers = {
//         token
//       };
//       config.headers = Object.assign({}, headers, config.headers);
//     }
//     return config;
//   },
//   err => Promise.reject(err)
// );

// 响应拦截
request.interceptors.response.use(
  res => {
    // if (res.data && res.data.code === 99998) {
    //   // 验证失败，需要重新登陆
    //   message.error(res.data.message);
    //   // 跳转到登陆系统进行登陆
    //   window.location.href = `${res.data.data.login_url}/?call_back=${encodeURIComponent(
    //     window.location.href
    //   )}`;
    // }
    // 获取到数据处理
    // console.log(res);

    if (res.data && res.data.state == 200 || res.data.state == true) {
      return res.data;
    }
    if (res.data && res.data.code === 10000) {
      return res.data;
    }
    if (res.data && res.data.state === 10000) {
      return res.data;
    }
    // 错误统一处理
    // if (res.data && res.data.state == 400) {
    //   message.error(res.data.message);
    //   return res.data;
    // }
    // http异常
    if (res.data && res.data.code == 4010) {
        window.top.postMessage('__LOGOUT__', '*');
      return;
    }
    if (res.data && (res.data.state == 700004 || res.data.state == 700002)) {
      window.top.postMessage('__LOGOUT__', '*');
      return;
    } else {
      if (res.data && res.data.state != 200 && res.data.state != true) {
        // let msgNode = document.querySelectorAll('.ant-message');
        // if(!msgNode.length){
        // 230003 没有任何渠道权限，不统一在拦截器这里提示错误
        if(res.data.state !== 230003 && res.data.state !=600000){
          message.error(res.data.message);
        }
        //   setTimeout(function() {
        //     message.destroy();
        //   },5000)
        // }
        // message.destroy();
        // message.error(res.data.message);
        return res.data;
      }
      // let msgNode = document.querySelectorAll('.ant-message');
      // if(!msgNode.length){
      //   message.error(codeMessage[res.status]);
      // }
      // return;
    }
  },
  err => {
    if(axios.isCancel(err)) {
      console.log("取消请求。。。");
    } else {
      if (err.response && err.response.status >= 400 && codeMessage[err.response.status]) {
        let msgNode = document.querySelectorAll('.ant-message');
        if (!msgNode.length) {
          message.error(codeMessage[err.response.status]);
        }
      }
      Promise.reject(err);
    }
  }
) ;

export { all, spread, axios };
export default request;
