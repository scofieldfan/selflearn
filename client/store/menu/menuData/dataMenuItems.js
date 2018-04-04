/**
 *  菜单数据
 */
const dataManageItems = [
    {
        name: 'css各种图形',
        meta: {
            icon: 'fa-dribbble',
            expanded: true
        },
        path: '/user/demo',
        component: () => import('../../../views/user/BorderRadius.vue')
    },
    {
        name: '三等分布局',
        meta: {
            icon: 'fa-dribbble',
            expanded: true
        },
        path: '/user/flex',
        component: () => import('../../../views/user/Flex.vue')
    },
    {
        name: '垂直居中布局',
        meta: {
            icon: 'fa-dribbble',
            expanded: true
        },
        path: '/user/verticle',
        component: () => import('../../../views/user/verticleMiddle.vue')
    }

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
];

export default dataManageItems;
