/**
 *  菜单数据
 */
var demo = 'user/Demo.vue';
const dataManageItems = {
    name: '用户',
    meta: {
        icon: 'fa-database',
        expanded: false
    },
    children: [
        {
            name: '示例',
            path: '/user/demo',
            component: function() {
                // return import('../../../views/resource/Demo.vue');
                return import('../../../views/' + demo);
            },
            meta: {},
            children: []
        },
        {
            name: '二级菜单',
            path: '/user/test',
            component: function() {
                return import('../../../views/user/Test.vue');
            },
            meta: {}
        }
    ]
};

export default dataManageItems;
