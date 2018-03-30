/**
 * 使用vue resource获取请求数据。根据总数拆分请求
 * Created on 2017/12/26.
 *    
 * ex:  
 * import multiRequest from '../../util/multi';
    const request = {
        url: '/lookalike/search', //请求地址
        data: {
            game_name: '官居一品'
        },
        method: 'post', // post/POST,get......
        page: 'QueryBegin', // 请求分页参数
        number: 'QueryNumber', // 请求分页参数，（尽量大，减少请求数）
        total: '100', // 最多获取多少条信息，不超过3000
        dataList: 'searchgames' // 返回数据取得数据列表字段名
    };
    multiRequest(request)
        .then(data => {
            params.data = data;
            excel(params);
        })
        .catch(res => {
            console.log('catch', res);
        });
 */

import axios from 'axios';

const multiRequest = request => {
    return new Promise((resolve, reject) => {
        const { url, page, number, dataList, data } = request;
        let { total, method } = request;
        // 请求地址
        if (!url) {
            reject({
                status: 'error',
                msg: '请求参数地址不存在'
            });
            return false;
        }
        if (total > 3000) {
            reject({
                status: 'error',
                msg: '数目超长'
            });
            return false;
        }
        if (total < 1) {
            reject({
                status: 'error',
                msg: '数目小于1'
            });
            return false;
        }
        // 初始化条件
        if (page && number) {
            data[page] = data[page] || 0;
            data[number] = data[number] || 100;
        }
        total = total || 3000;
        method = method ? method.toLowerCase() : 'post';
        // 一共发送多少请求。后续判断数据为空就不请求
        const pageNumTotal = Math.ceil(total / data[number]);
        if (pageNumTotal > 30) {
            reject({
                status: 'error',
                msg: '发送请求数目过多，total / number'
            });
            return false;
        }

        const loadData = {};
        let returnData = [];
        // 对象
        const promiseAll = [];
        for (let i = 0; i < pageNumTotal; i++) {
            const pageNum = i;

            let requestParams = {};
            let requestData = {};

            const originalData = data || {};
            const setData = {};
            for (const key in originalData) {
                if (
                    originalData[key] !== null &&
                    originalData[key] !== undefined &&
                    originalData[key] !== ''
                ) {
                    setData[key] = originalData[key];
                }
            }

            if (method != 'post' && method != 'put' && method != 'PATCH') {
                requestParams = setData;
            } else {
                requestData = setData;
            }
            const requestApi = axios({
                url,
                data: { ...requestData },
                params: { ...requestParams },
                method
            }).then(res => {
                const data = res.data;
                if (data.data[dataList] && data.data[dataList].length > 0) {
                    loadData[pageNum] = data.data[dataList];
                }
            });
            promiseAll.push(requestApi);
            data[page] += data[number];
        }

        Promise.all(promiseAll)
            .then(() => {
                for (let i = 0; i < pageNumTotal; i++) {
                    if (loadData[i]) {
                        returnData = returnData.concat(loadData[i]);
                    }
                }
                resolve(returnData);
            })
            .catch(() => {
                reject({
                    status: 'error',
                    msg: '请求数据失败'
                });
                return false;
            });
    });
};

export default multiRequest;
