/*
 * @Author: imc-明安瑞
 * @Date: 2024-04-23 10:23:06
 * @LastEditTime: 2024-04-23 11:24:36
 * @LastEditors: imc-Mar
 * @Description: 有问题请联系我 tel:13562850362
 * @FilePath: \node-express-officePeople\router\imgUpload.js
 * 一川烟草，满城风絮，梅子黄时雨。
 */
// 这是一个图片上传的接口


// 引入 一个中间件函数 处理文件上传


const imgUploadHadnler = require('../router_handler/imgUpload')

// 路由模块
const express = require('express');

// 创建路由对象
const router = express.Router();

router.post('/img', imgUploadHadnler.imgUpload)

module.exports = router;