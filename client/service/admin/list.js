/**
 * 管理员接口
 * /admin/list
 */

// import config from '../../config/index';

// 获取管理员列表
const SelectAdmin = {
    url: '/uds/ss/ares/v1/sys/administrators',
    method: 'get'
};

// 添加管理员
const AddAdmin = {
    url: '/uds/ss/ares/v1/sys/administrators',
    method: 'post'
};

// 编辑管理员
const EditAdmin = {
    url: '/uds/ss/ares/v1/sys/administrators/',
    method: 'post'
};

//删除管理员
const DeleteAdmin = {
    url: '/uds/ss/ares/v1/sys/administrators/',
    method: 'post'
};

//获取角色列表
const SelectRoles = {
    url: '/uds/ss/ares/v1/sys/roles',
    method: 'get'
};

// 分配角色
const AllotRoles = {
    url: '/uds/ss/ares/v1/sys/administrators/',
    method: 'post'
};

export {
    SelectAdmin,
    AddAdmin,
    EditAdmin,
    DeleteAdmin,
    SelectRoles,
    AllotRoles
};
