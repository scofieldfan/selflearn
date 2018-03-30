/**
 * 角色接口
 * /admin/role
 */

// import config from '../../config/index';

// 获取角色列表
const SelectRoles = {
    url: '/uds/ss/ares/v1/sys/roles',
    method: 'get'
};

//增加角色
const AddRole = {
    url: '/uds/ss/ares/v1/sys/roles',
    method: 'post'
};

// 删除角色
const DeleteRole = {
    url: '/uds/ss/ares/v1/sys/roles/',
    method: 'post'
};

//编辑角色
const EditRole = {
    url: '/uds/ss/ares/v1/sys/roles/',
    method: 'post'
};

//获取角色资源列表
const SelectResource = {
    url: '/uds/ss/ares/v1/sys/roles/',
    method: 'get'
};

//获取资源列表
const SelectResourceList = {
    url: '/uds/ss/ares/v1/sys/resources',
    method: 'get'
};

// 给角色分配资源
const AllotResource = {
    url: '/uds/ss/ares/v1/sys/roles/',
    method: 'post'
};

export {
    SelectRoles,
    AddRole,
    DeleteRole,
    EditRole,
    SelectResource,
    SelectResourceList,
    AllotResource
};
