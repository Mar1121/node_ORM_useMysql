/*
 * @Author: imc-明安瑞
 * @LastEditors: imc-Mar
 * @Description: 有问题请联系我 tel:13562850362
 * 一川烟草，满城风絮，梅子黄时雨。
 */
// 创建user模型：实现模型和数据表的优化
// 模型名 = sequelize.define('数据表名','模型的属性',{其他配置})
// 模型名 <——> 数据表名
// 模型的属性<——> 数据表列

const Sequelize = require('sequelize');
// 导入数据库的配置对象
const db = require('../index.js')

// 创建模型与数据库之间的表实现映射
const User = db.define('imc_user',
    {
        'id': {
            type: Sequelize.INTEGER, //表示id的数据类型为int型
            primaryKey: true,
            autoIncrement: true, //表示id的值在表中是否自增
            allowNull: true, //表示id的值是否可以为空
            fields: 'id',//实现模型的属性名和表的列名之间的映射关系(对应关系)
        },
        'username': {
            type: Sequelize.STRING(10),
            autoIncrement: false,
            allowNull: false,
            fields: 'username',

        },
        'password': {
            type: Sequelize.STRING(10),
            autoIncrement: false,
            allowNull: false,
            fields: 'password',
        },
        'status': {
            type: Sequelize.INTEGER,
            autoIncrement: false,
            allowNull: true,
            fields: 'status',
        },
        'create_time': {
            type: Sequelize.DATE,
            autoIncrement: false,
            allowNull: true,
            fields: 'create_time',
        },
        'update_time': {
            type: Sequelize.DATE,
            autoIncrement: false,
            allowNull: true,
            fields: 'update_time',
        },
        'quit_time': {
            type: Sequelize.DATE,
            autoIncrement: false,
            allowNull: true,
            fields: 'quit_time',
        },
        'login_time': {
            type: Sequelize.DATE,
            autoIncrement: false,
            allowNull: true,
            fields: 'login_time',
        },


    },
    {
        freezeTableName: true, //不使用Sequelize给模型自定义的表名(自定义表名的命名规则：模型名后加s)
        timestamps: false //若为true，在获取数据时会自动添加两列数据(createTime、updateTime)
    })

// 测试连接成功
// console.log(User, '打印');
// User.create({
//     username: 'MAR4',
//     password: '123456'
// })
//     .then(res => {
//         if (res) {
//             console.log(res, '添加成功');
//         }
//     })
//     .catch(err => {
//         console.log('错误信息-----', err,);
//     })

// 导出User模型
// let res
// // console.log();
// let test = async () => {
//     res = await User.findAll({
//         where: {
//             username: 'MAR'
//         }
//     })
//     console.log('结果', res);
// }
// test()

module.exports = User;
// module.exports.test;