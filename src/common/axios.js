import Vue from 'vue'
import {AjaxPlugin} from 'vux'
import qs from 'qs'
Vue.use(AjaxPlugin);

//添加一个请求拦截器
AjaxPlugin.$http.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
//添加一个返回拦截器
AjaxPlugin.$http.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});
// 格式化数据
AjaxPlugin.$http.defaults.transformRequest.push(function (data, headers) {
  if (headers['Content-Type'] === 'application/json;charset=utf-8') {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    data = qs.stringify(JSON.parse(data));
  }
  return data;
});
