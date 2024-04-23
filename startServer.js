/*
 * @Author: imc-明安瑞
 * @LastEditors: imc-Mar
 * @Description: 有问题请联系我 tel:13562850362
 * 一川烟草，满城风絮，梅子黄时雨。
 */
// 导入express 
const express = require('express');
// 创建web服务器
const app = express();

// cors中间件
const cors = require('cors');
// 解析表单的中间件
const bodyParser = require('body-parser');



// 全局中间件 在路由之前配置cors中间件,解决接口跨域问题
app.use(cors())

// 全局中间件 配置解析application/x-www-form-urlencoded表单数据的中间件
app.use(express.urlencoded({ extended: false }));
// 配置 body-parser 中间件来解析 application/x-www-form-urlencoded 类型的数据
app.use(bodyParser.urlencoded({ extended: false }));

// 在路由之前配置解析token的中间件
const expressJWT = require('express-jwt');
const config = require('./config');
app.use(expressJWT({
    secret: config.jwtScreenKey,

}).unless({ path: [/^\/api/, /^\/images/] }))

// 注册路由模块
const userRouter = require('./router/user');
app.use('/api', userRouter);
// 注册staff路由模块
const staffRouter = require('./router/staff');
app.use('/staff', staffRouter);
// 注册图片上传的路由模块
// 引入中间件函数处理文件上传
// const multer = require('multer')
// const upload = multer({ dest: './images/' }) // 指定文件上传的目录
const uploadRouter = require('./router/imgUpload');
// app.use('/upload', upload.single('image'), uploadRouter);
app.use('/upload', uploadRouter);



// 错误级别中间件
app.use((err, req, res, next) => {

    // 身份认证失败的错误
    if (err.name === 'UnauthorizedError') {
        return res.send({ status: 401, message: '身份验证失败,无效的token' })
    }
    // 未知问题
    res.send({
        status: 500,
        message: '未知错误'
    })

})

// 修改这里，将地址从 127.0.0.1 更改为你的局域网 IP 地址
const ipAddress = '192.168.20.147';
const port = 80;

// 托管静态资源--图片
app.use('/images', express.static('images'));


// 调用app.listen方法，指定端口号并启动web服务器
app.listen(port, ipAddress, () => {
    console.log(`Express server running at ${ipAddress}:${port}`);
})

