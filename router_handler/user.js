/*
 * @Author: imc-明安瑞
 * @LastEditors: imc-Mar
 * @Description: 有问题请联系我 tel:13562850362
 * 一川烟草，满城风絮，梅子黄时雨。
 */

// 引入 User 实体类 用于数据库操作
const User = require('../db/model/user')
// 导入生成Token的包
const jwt = require('jsonwebtoken')
// 导入全局的配置文件
const config = require('../config')


// 在这里书写处理函数，供router/user.js调用
// 注册的处理函数
// 密码未加密
exports.regUser = (req, res) => {
    // 获取客户端提交的信息
    const userInfo = req.body
    userInfo.username.trim()
    userInfo.password.trim()
    // console.log(userInfo);
    if (!userInfo.username.trim()) {
        return res.send({
            status: 400,
            msg: '用户名不能为空'
        })
    }
    if (!userInfo.password.trim()) {
        return res.send({
            status: 400,
            msg: '密码不能为空'
        })
    }
    // 查询用户名是否被占用
    User.findAll({
        where: {
            username: userInfo.username
        }
    })
        .then(queryRes => {
            // console.log(queryRes);
            if (queryRes.length > 0) {
                return res.send({
                    status: 409,
                    msg: `用户名${userInfo.username}已存在,请更换后重试`
                })
            }
            else {
                User.create({
                    username: userInfo.username,
                    password: userInfo.password
                }).then(results => {
                    // console.log(results);
                    if (results) {
                        res.send({
                            status: 200,
                            msg: '注册成功'
                        })
                    }
                })
            }
        })
        .catch(err => {
            res.send({
                status: 500,
                msg: err.toString()
            })
        })
}


// 登录的处理函数
exports.login = (req, res) => {
    const userInfo = req.body
    userInfo.username.trim()
    userInfo.password.trim()
    if (!userInfo.username.trim()) {
        return res.send({
            status: 400,
            msg: '用户名不能为空'
        })
    }
    if (!userInfo.password.trim()) {
        return res.send({
            status: 400,
            msg: '密码不能为空'
        })
    }
    // res.send('login ok')
    // 根据用户名查表  
    User.findAll({
        where: {
            username: userInfo.username
        }
    }).then(queryRes => {
        // console.log(queryRes);
        //  查不到 未发现该用户
        if (queryRes.length === 0) {
            return res.send({
                status: 400,
                msg: '用户不存在，请注册后重试'
            })
        } else {
            // 查到了 
            // 密码比对 登录失败 密码错误
            console.log(queryRes[0].dataValues);
            if (queryRes[0].dataValues.password !== userInfo.password) {
                return res.send({
                    status: 400,
                    msg: '密码错误，请重新输入'
                })
            } else {// 登录成功 返回 JWT字符串的token 
                // 对用户的信息进行加密,生成token字符串
                const tokenStr = jwt.sign({
                    id: queryRes[0].dataValues.id,
                    username: userInfo.username,
                    password: userInfo.password
                }, config.jwtScreenKey, {
                    expiresIn: config.expiresIn
                })
                return res.send({
                    status: 200,
                    msg: '登录成功',
                    token: 'Bearer ' + tokenStr
                })
            }
        }
    })
        .catch(err => {
            res.send({
                status: 500,
                msg: err.toString()
            })
        })





}

