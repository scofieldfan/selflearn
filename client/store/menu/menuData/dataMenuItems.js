/**
 *  菜单数据
 */
const dataManageItems = [
    {
        name: 'js测试Import',
        meta: {
            icon: 'fa-dribbble',
            expanded: true
        },
        path: '/user/import',
        component: () => import('../../../views/user/TestImport.vue')
    },
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
    },
    {
        name: 'event loop',
        meta: {
            icon: 'fa-dribbble',
            expanded: true
        },
        path: '/user/eventloop',
        component: () => import('../../../views/user/EventLoop.vue')
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
