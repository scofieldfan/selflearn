export default {
    // 2 levels.
    generateRoutesFromMenu(menu = [], routes = [], parentMenu = null) {
        for (let i = 0, l = menu.length; i < l; i++) {
            const item = menu[i];
            if (item.path) {
                item.meta.parentMenu = parentMenu;
                const itemClone = { ...item };
                delete itemClone.children;
                routes.push(itemClone);
            }
            if (item.children) {
                this.generateRoutesFromMenu(item.children, routes, item);
            }
        }
        return routes;
    }
};
