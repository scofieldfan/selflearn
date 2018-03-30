/**
 * server封装，所有请求都走这里
 * option = {
 *      url:请求地址
 *      method: 'post' // 请求方式，post\get\put\delete
 *      data: {}, // 参数
 * }
 * service(option)
            .then(data => {
                console.log('then', data);
            })
            .catch(data => {
                console.log('catch', data);
            });
 */

import axios from 'axios';
import config from '../config/index';

const service = option => {
    // const originUrl = option.url;
    // const method = option.method;
    const originalData = option.data || {};
    const data = {
        url: option.url,
        method: option.method,
        body: {}
    };
    for (const key in originalData) {
        if (
            originalData[key] !== null &&
            originalData[key] !== undefined &&
            originalData[key] !== ''
        ) {
            data.body[key] = originalData[key];
        }
    }
    /*
    let params = {};
    if (method != 'post' && method != 'put' && method != 'PATCH') {
        params = data;
        data = {};
    }
    */

    const url =
        config.serverHost +
        '/uds/ss/backend/v1/proxy/api-agent?urm_service=URM';

    const bodyStr = JSON.stringify(data.body);
    if (bodyStr === '{}') {
        delete data.body;
    } else {
        data.body = bodyStr;
    }
    const qs = require('qs');
    const sendData = qs.stringify(data);
    console.log('service:', option);
    console.log('sendData', sendData);
    return axios({ url, data: sendData, method: 'post' })
        .then(res => {
            const response = res.data;
            if (response.result_code != 'success') {
                //session 过期刷新页面
                if (response.result_code === 'session_invalid') {
                    location.reload();
                    return Promise.reject();
                } else {
                    throw response;
                }
            } else {
                return response;
            }
        })
        .catch(res => {
            throw res;
        });
};
export default service;
