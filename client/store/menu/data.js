/**
 * 菜单数据
 */

// import dataMenuItems from './menuData/dataMenuItems';
import string from '../../util/string';

// console.log(string.toLastWordUpperCase('/aaa/bbb/ccc/ddd'));
const serverMenuData = window.serverMenus;
// console.log('serverMenuData', serverMenuData);
const genMenus = menuDataItems => {
    const menus = [];
    if (menuDataItems) {
        menuDataItems.forEach(menuItem => {
            const menuItemFe = {
                name: menuItem.name,
                meta: {
                    icon: menuItem.class_name,
                    expanded: false
                },
                children: []
            };
            menuItem.children &&
                menuItem.children.forEach(item => {
                    const vuePath =
                        string.toLastWordUpperCase(item.url) + '.vue';
                    const menuSubItems = {
                        name: item.name,
                        path: item.url,
                        component: function() {
                            return import('../../views' + vuePath);
                        },
                        meta: {},
                        children: []
                    };
                    // console.log('item', item);
                    const identifiers =
                        item.children &&
                        item.children.map(sItem => {
                            return sItem.identifier;
                        });

                    // console.log('identifiers', identifiers);
                    item.children &&
                        item.children
                            .filter(subItem => {
                                return subItem.type !== '2';
                                //1 为 menu，2是 function 3 是page 我们这里只要 menu和 page 不要 function
                            })
                            .forEach(subItem => {
                                const subVuePath =
                                    string.toLastWordUpperCase(subItem.url) +
                                    '.vue';
                                // console.log(subVuePath);
                                //需要区分所有的叶子节点
                                const menuSubSubItems = {
                                    name: subItem.name,
                                    path: subItem.url,
                                    component: function() {
                                        return import('../../views' +
                                            subVuePath);
                                    },
                                    meta: {
                                        identifiers: identifiers
                                    },
                                    children: []
                                };
                                menuSubItems.meta.identifiers = identifiers;
                                menuSubItems.children.push(menuSubSubItems);
                            });
                    menuItemFe.children.push(menuSubItems);
                });

            menus.push(menuItemFe);
        });
    }
    return menus;
};
const routes = genMenus(
    serverMenuData && serverMenuData.data && serverMenuData.data.list
);
// console.log('routes', routes);
const data = () => {
    //return [dataMenuItems];
    return routes;
};

export default data;
