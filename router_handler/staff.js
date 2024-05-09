/*
 * @Author: imc-明安瑞
 * @Date: 2024-04-19 18:22:46
 * @LastEditTime: 2024-05-07 15:02:35
 * @LastEditors: imc-Mar
 * @Description: 有问题请联系我 tel:13562850362
 * @FilePath: \node-express-officePeople\router_handler\staff.js
 * 一川烟草，满城风絮，梅子黄时雨。
 */

const { Sequelize } = require('sequelize');
// 引入Staff实体类 
const Staff = require('../db/model/staff')
// 获取时间的插件
const moment = require('moment')


// 新增
exports.addStaff = (req, res) => {
    // console.log(req.user);
    const user = req.user
    console.log(req.body);
    // console.log("user---", user);
    if (!req.body.address) {
        return res.send({
            status: 200,
            message: '办公地址不能为空'
        })
    }
    if (!req.body.name) {
        return res.send({
            status: 200,
            message: '姓名地址不能为空'
        })
    }
    if (!req.body.department) {
        return res.send({
            status: 200,
            message: '部门不能为空'
        })
    }
    if (!req.body.position) {
        return res.send({
            status: 200,
            message: '职位不能为空'
        })
    }
    if (!req.body.phone_number) {
        return res.send({
            status: 200,
            message: '手机号不能为空'
        })
    } else {
        if (req.body.phone_number.length != 11) {
            return res.send({
                status: 200,
                message: '手机号格式不正确'
            })
        }
    }
    if (!req.body.age) {
        return res.send({
            status: 200,
            message: '年龄不能为空'
        })
    }
    Staff.create({
        // address: "济南",
        // name: "明安瑞",
        // department: "研发团队",
        // position: "前端开发",
        // phone_number: "13562850362",
        // age: 23,
        ...req.body,
        creater: user.username,
    }).then(result => {
        console.log(result);
        res.send({
            status: 200,
            message: '添加成功',
            data: result
        })
    }).catch(error => {
        console.log(error);
        res.send(error)
    })

}

// 修改
exports.editStaff = (req, res) => {
    const user = req.user
    // res.send('ok2')
    if (req.body.id) {
        // 通过接口传值了,只查询id所对应的职工
        console.log(1);
        Staff.findAll({
            where: {
                id: req.body.id,
                status: 0
            }
        }).then(result => {
            // console.log(result);
            if (result.length == 0) {
                return res.send({
                    status: 200,
                    message: '查询失败，非法的id值',
                })
            } else {
                // id值合法 修改id值所对应的接口传来的信息
                Staff.update({
                    // status: 1,
                    // deleter: user.username,
                    // delete_time: moment(new Date()).utcOffset(8).format('YYYY-MM-DD HH:mm:ss')
                    ...req.body,
                    editor: user.username,
                    edit_time: moment(new Date()).utcOffset(8).format('YYYY-MM-DD HH:mm:ss')
                }, {
                    where: {
                        id: req.body.id
                    }
                }).then(updateRes => {
                    // console.log(updateRes);
                    console.log(moment(new Date()).utcOffset(8).format('YYYY-MM-DD HH:mm:ss'));
                    return res.send({
                        status: 200,
                        message: '修改成功',
                        // data: updateRes
                    })
                })
            }
        }).catch(error => {
            // console.log(error);
            return res.send(error)
        })
    } else {
        return res.send({
            status: 200,
            message: 'id值不能为空'
        })
    }
}


// 删除
exports.deleteStaff = (req, res) => {
    const user = req.user
    // 查询id 判断id值是否合法
    if (req.query.id) {
        // 通过接口传值了,只查询id所对应的职工
        console.log(1);
        Staff.findAll({
            where: {
                id: req.query.id,
                status: 0
            }
        }).then(result => {
            // console.log(result);
            if (result.length == 0) {
                return res.send({
                    status: 200,
                    message: '查询失败，非法的id值',
                })
            } else {
                // id值合法 修改id对应的status为1 即为删除
                Staff.update({
                    status: 1,
                    deleter: user.username,
                    delete_time: moment(new Date()).utcOffset(8).format('YYYY-MM-DD HH:mm:ss')
                }, {
                    where: {
                        id: req.query.id
                    }
                }).then(updateRes => {
                    // console.log(updateRes);
                    console.log(moment(new Date()).utcOffset(8).format('YYYY-MM-DD HH:mm:ss'));
                    return res.send({
                        status: 200,
                        message: '删除成功',
                        // data: updateRes
                    })
                })
            }
        }).catch(error => {
            // console.log(error);
            return res.send(error)
        })
    } else {
        return res.send({
            status: 200,
            message: 'id值不能为空'
        })
    }


    // 如果合法将id值所对应的status改为1 并更新 deleter 和 delete_time

    // res.send('ok3')
}

// 查询
exports.queryStaff = (req, res) => {
    // console.log("req.params---", req.query);
    if (req.query.id) {
        // 通过接口传值了,只查询id所对应的职工
        console.log(1);
        Staff.findAll({
            where: {
                id: req.query.id,
                status: 0
            }
        }).then(result => {
            // console.log(result);
            if (result.length == 0) {
                return res.send({
                    status: 200,
                    message: '查询失败，非法的id值',
                })
            } else {
                return res.send({
                    status: 200,
                    message: '查询成功',
                    data: result
                })
            }
        }).catch(error => {
            // console.log(error);
            res.send(error)
        })
    } else {
        // 没有传值过来，查询所有的职工
        Staff.findAll({
            attributes: ['id', 'name', 'address', 'department'],
            where: {
                status: 0
            },
        }).then(result => {
            // console.log(result);
            return res.send({
                status: 200,
                message: '查询成功',
                data: result
            })
        }).catch(error => {
            console.log(error);
            return res.send(error)
        })
        console.log(2);
    }
    // res.send('ok4')
}

// 查询细节 
exports.queryStaffDetailsById = (req, res) => {

}

// 模糊搜索
exports.fuzzySearch = (req, res) => {

}