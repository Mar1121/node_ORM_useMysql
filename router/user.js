/*
 * @Author: imc-明安瑞
 * @LastEditors: imc-Mar
 * @Description: 有问题请联系我 tel:13562850362
 * 一川烟草，满城风絮，梅子黄时雨。
 */
// 路由模块
const express = require('express');

// 创建路由对象
const router = express.Router();

// 导入路由处理函数
const userHandler = require('../router_handler/user');

// 注册
router.post('/reguser', userHandler.regUser)
// 登录
router.post('/login', userHandler.login)

// 向外导出路由对象
module.exports = router