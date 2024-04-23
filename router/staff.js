/*
 * @Author: imc-明安瑞
 * @Date: 2024-04-19 18:22:33
 * @LastEditTime: 2024-04-22 09:43:46
 * @LastEditors: imc-Mar
 * @Description: 有问题请联系我 tel:1356285036
 * @FilePath: \node-express-officePeople\router\staff.js
 * 一川烟草，满城风絮，梅子黄时雨。
 */
const express = require('express');

const router = express.Router();

const staffHandler = require('../router_handler/staff');

// 增
router.post('/add', staffHandler.addStaff)
// 删除
router.get('/delete', staffHandler.deleteStaff)
// 修改
router.post('/update', staffHandler.editStaff)
// 查询
router.get('/query', staffHandler.queryStaff)

module.exports = router