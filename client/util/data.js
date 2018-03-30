/**
 * Created by hanguangtian on 16/9/5.
 * 数字转换为字符串
 */
const data = {
    /**
     * 数字转化为末尾是"万"的字符串
     * @param num
     * @returns {*}
     */
    toTenThousand: function(num) {
        let result = num;
        if (num > 9999) {
            result = (num / 10000).toFixed(2) + 'w';
        }

        return result;
    },
    /**
     * 数字转化为国际标准形式(3位加一个逗号)
     * @param num
     * @returns {*}
     */
    toStandard: function(num) {
        num = num === 0 ? '0' : num;
        return (num || '')
            .toString()
            .replace(/(?=(?!\b)(?:\d\d\d)+(?!\d))/g, ',');
    },
    /**
     * 手机号码格式化为 xxx-xxxx-xxxx格式
     * @param phone
     */
    toPhoneNum: function(phone) {
        return phone.replace(/(\d\d\d)(\d\d\d\d)(\d\d\d\d)/g, '$1-$2-$3');
    },
    /**
     * 数字格式化为 n 位小数的形式
     * @param value 传入需要格式化的数
     * @param length 需要格式化为几位小数
     * @returns {*}
     */
    toFloat(value, length = 0) {
        console.log(value);
        if (value || value === 0 || value === '0') {
            const point = length > 0 ? '.' : '';
            value = Number(value) || 0;
            value = value + '';
            const valueAry = value.split('.');
            valueAry[1] = valueAry[1] || 0;
            value =
                valueAry[0] + point + (valueAry[1] + '00000').slice(0, length);
            console.log('本次返回值', value);
            return value;
        } else {
            return '0';
        }
    }
};

module.exports = data;
