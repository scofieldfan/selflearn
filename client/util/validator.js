export default {
    validatePassword(rule, value, callback) {
        if (value.length < 8) {
            callback(new Error('密码长度不够8位'));
        } else if (!/\d/.test(value) || !/[a-zA-Z]/.test(value)) {
            callback(new Error('密码必须含有数字和字母'));
        } else {
            callback();
        }
    },
    validateConfirmPassword(rule, value, callback) {
        if (value.length < 8) {
            callback(new Error('密码长度不够8位'));
        } else if (!/\d/.test(value) || !/[a-zA-Z]/.test(value)) {
            callback(new Error('密码必须含有数字和字母'));
        } else if (this.form.password != value) {
            callback('两次输入的密码不一致,请重新输入');
        } else {
            callback();
        }
    }
};
