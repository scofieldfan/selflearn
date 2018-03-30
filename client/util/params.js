/**
 * Created by mac on 2017/12/19.
 * @desc 常用参数工具函数
 */

const params = {};

params.getUrlParam = function(str, url) {
    const re = new RegExp('(^|\\?|&)' + str + '=([^&^#]+)(&|$|#)', 'i');
    url = url || window.location.href;
    const m = url.match(re);
    if (m) {
        return m[2];
    }
    return '';
};

export default params;
