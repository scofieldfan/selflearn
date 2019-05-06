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
        name: '常见布局',
        meta: {
            icon: 'fa-dribbble',
            expanded: true
        },
        path: '/user/layout',
        component: () => import('../../../views/user/layout/Index.vue'),
        children: [

            {
                name: '三等分布局',
                meta: {},
                path: '/user/layout/flex',
                component: () => import('../../../views/user/layout/Flex.vue')
            },
            {
                name: '垂直居中布局',
                meta: {},
                path: '/user/layout/verticle',
                component: () => import('../../../views/user/layout/VerticleMiddle.vue')
            },
            {
                name: '两栏布局',
                path: '/user/layout/layout',
                component: () => import('../../../views/user/layout/Layouts.vue')
            },
            {
                name: '圣杯布局',
                path: '/user/layout/grails',
                component: () => import('../../../views/user/layout/Grail.vue')
            }


        ]
    },
    {
        name: 'event loop',
        meta: {
            icon: 'fa-dribbble',
            expanded: true
        },
        path: '/user/eventloop',
        component: () => import('../../../views/user/EventLoop.vue')
    },
    {
        name: '30CSS',
        meta: {
            icon: 'fa-dribbble',
            expanded: true
        },
        path: '/user/css',
        component: () => import('../../../views/user/Css.vue')
    },
    {
        name: '父子组件',
        meta: {
            icon: 'fa-dribbble',
            expanded: true
        },
        path: '/user/father',
        component: () => import('../../../views/user/Father.vue')
    },
    {
        name: '小函数',
        meta: {
            icon: 'fa-dribbble',
            expanded: true
        },
        path: '/user/function',
        component: () => import('../../../views/user/Function.vue')
    },
    {
        name: '滚动条测试',
        meta: {
            icon: 'fa-dribbble',
            expanded: true
        },
        path: '/user/scroll',
        component: () => import('../../../views/user/Scroll.vue')
    },
    {
        name: 'Prototype',
        meta: {
            icon: 'fa-dribbble',
            expanded: true
        },
        path: '/user/object',
        component: () => import('../../../views/user/Object.vue')
    },
    {
        name: 'router测试',
        meta: {
            icon: 'fa-dribbble',
            expanded: true
        },
        path: '/user/router',
        component: () => import('../../../views/router/Index.vue'),
        children: [
            {
                path: '/user/router',
                meta: {},
                name: 'default',
                component: () => import('../../../views/router/Default.vue')
            },
            {
                path: '/user/router/foo',
                meta: {},
                name: 'foo',
                component: () => import('../../../views/router/Foo.vue')
            },
            {
                path: '/user/router/bar',
                meta: {},
                name: 'bar',
                component: () => import('../../../views/router/Bar.vue')
            }
        ]
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
