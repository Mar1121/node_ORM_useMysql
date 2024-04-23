/*
 * @Author: imc-明安瑞
 * @LastEditors: imc-Mar
 * @Description: 有问题请联系我 tel:13562850362
 * 一川烟草，满城风絮，梅子黄时雨。
 */
const Sequelize = require('sequelize');

// 配置数据库连接信息
// 数据库名 用户名 密码
const mysql_sequelize = new Sequelize('db_imc', 'root', 'root', {
    host: 'localhost',//数据库服务器的IP地址或域名
    port: '3307', //数据库使用的端口号，MySQL数据库默认端口号3306
    dialect: 'mysql', //数据库的类型
    timezone: '+08:00', // 设置为东八区时间' 已在数据库中设置时区
    pool: {  //数据库连接池：可以放若干个数据库的连接对象，提高数据库访问效率
        max: 20, //数据库连接池中连接对象的最大个数
        min: 3, //数据库连接池中连接对象的最少个数
        idle: 20000 //等待延迟的时间，单位：毫秒
    },
    define: {
        'charset': 'utf8' //处理MySQL中中文字符的问题
    }

})

// 测试连接
mysql_sequelize.authenticate()
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch(err => {
        console.log('数据库连接失败error:' + err);
    })

module.exports = mysql_sequelize