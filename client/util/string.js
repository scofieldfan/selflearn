export default {
    toFirstLetterUpperCase(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    },
    /*
       输入 /user/list/test 输出 /user/list/Test
       输入 /user/list/test/aaa 输出 /user/list/test/Aaa
    */
    toLastWordUpperCase(url) {
        let ret = '';
        const paths = (url && url.split('/')) || '';
        if (paths && paths.length > 0) {
            paths[paths.length - 1] = this.toFirstLetterUpperCase(
                paths[paths.length - 1]
            );
            ret = paths.join('/');
        }
        return ret;
    }
};
