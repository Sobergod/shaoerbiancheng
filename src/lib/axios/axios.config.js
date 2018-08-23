/**
 * @author CJH
 * @description 拦截器+全局axios配置
 */
import axios from 'axios';

// 接口默认地址
const baseUrl = 'http://localhost:3000/api/a';

// 配置axios请求信息
let AX = axios.create({
    baseURL: baseUrl,
    timeout: 3000,
    responseType: 'json',
})
// todo拦截器
export default AX;