/*
 * @Author: imc-明安瑞
 * @Date: 2024-04-19 17:52:12
 * @LastEditTime: 2024-05-06 16:08:14
 * @LastEditors: imc-Mar
 * @Description: 有问题请联系我 tel:13562850362
 * @FilePath: \node-express-officePeople\db\model\staff.js
 * 一川烟草，满城风絮，梅子黄时雨。
 */
// 创建Staff模型：实现模型和数据表的优化
// 模型名 = sequelize.define('数据表名','模型的属性',{其他配置})
// 模型名 <——> 数据表名
// 模型的属性<——> 数据表列
const Sequelize = require('sequelize');
// 导入数据库的配置对象
const db = require('../index.js')

// 创建模型与数据库之间的表实现映射
const Staff = db.define('imc_staff',
    {
        'id': {
            type: Sequelize.INTEGER(10), // 数据类型
            primaryKey: true, // 主键
            autoIncrement: true, // 自动增长
            allowNull: true,// 是否允许为空
            fields: 'id',
        },
        'name': {
            type: Sequelize.STRING(10), // 数据类型
            autoIncrement: false, // 自动增长
            allowNull: false,// 是否允许为空
            fields: 'name',
        },
        'address': {
            type: Sequelize.STRING(20), // 数据类型
            autoIncrement: false, // 自动增长
            allowNull: false,// 是否允许为空
            fields: 'adress',
        },
        'department': {
            type: Sequelize.STRING(20), // 数据类型
            autoIncrement: false, // 自动增长
            allowNull: false,// 是否允许为空
            fields: 'department',
        },
        'status': {
            type: Sequelize.INTEGER(1), // 数据类型
            autoIncrement: false, // 自动增长
            allowNull: true,// 是否允许为空
            fields: 'status',
        },
        'isLeader': {
            type: Sequelize.INTEGER(1), // 数据类型
            autoIncrement: false, // 自动增长
            allowNull: true,// 是否允许为空
            fields: 'isLeader',
        },
        'position': {
            type: Sequelize.STRING(10), // 数据类型
            autoIncrement: false, // 自动增长
            allowNull: false,// 是否允许为空
            fields: 'position',
        },
        'sex': {
            type: Sequelize.INTEGER(1), // 数据类型
            autoIncrement: false, // 自动增长
            allowNull: true,// 是否允许为空
            fields: 'sex',
        },
        'phone_number': {
            type: Sequelize.STRING(11), // 数据类型
            autoIncrement: false, // 自动增长
            allowNull: false,// 是否允许为空
            fields: 'phone_number',
        },
        'age': {
            type: Sequelize.INTEGER(2), // 数据类型
            autoIncrement: false, // 自动增长
            allowNull: false,// 是否允许为空
            fields: 'age',
        },
        'image_head': {
            type: Sequelize.STRING(255), // 数据类型
            autoIncrement: false, // 自动增长
            allowNull: true,// 是否允许为空
            fields: 'image_head',
        },
        'create_time': {
            type: Sequelize.DATE,
            autoIncrement: false,
            allowNull: true,
            fields: 'create_time',
        },
        'edit_time': {
            type: Sequelize.DATE,
            autoIncrement: false,
            allowNull: true,
            fields: 'edit_time',
        },
        'delete_time': {
            type: Sequelize.DATE,
            autoIncrement: false,
            allowNull: true,
            fields: 'delete_time',
        },
        'creater': {
            type: Sequelize.STRING(15), // 数据类型
            autoIncrement: false, // 自动增长
            allowNull: true,// 是否允许为空
            fields: 'creater',
        },
        'editor': {
            type: Sequelize.STRING(15), // 数据类型
            autoIncrement: false, // 自动增长
            allowNull: true,// 是否允许为空
            fields: 'editor',
        },
        'deleter': {
            type: Sequelize.STRING(15), // 数据类型
            autoIncrement: false, // 自动增长
            allowNull: true,// 是否允许为空
            fields: 'deleter',
        }
    },
    {
        freezeTableName: true, //不使用Sequelize给模型自定义的表名(自定义表名的命名规则：模型名后加s)
        timestamps: false //若为true，在获取数据时会自动添加两列数据(createTime、updateTime)
    })

module.exports = Staff; // 导出模型