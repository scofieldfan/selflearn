/**
 *  菜单数据
 */
const dataManageItems = {
    name: 'border-Radius',
    meta: {
        icon: 'fa-database',
        expanded: true
    },
    path: '/user/demo',
    component: () => import('../../../views/user/BorderRadius.vue')
    /*
    children: [
        {
            name: '示例',
            path: '/user/demo',
            component: () => import('../../../views/user/BorderRadius.vue'),
            meta: {},
            children: []
        }
    ]
    */
};

export default dataManageItems;
