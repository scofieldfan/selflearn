// import config from '../../config/index';

// 获取资源树
const treeList = {
    url: '/uds/ss/ares/v1/sys/resources',
    method: 'get'
};
// 编辑节点
const edit = {
    url: '/uds/ss/ares/v1/sys/resources',
    method: 'post'
};
// 新增节点
const add = {
    url: '/uds/ss/ares/v1/sys/resources',
    method: 'post'
};
// 删除节点
const del = {
    url: '/uds/ss/ares/v1/sys/resources/',
    method: 'post'
};

export { treeList, edit, add, del };
