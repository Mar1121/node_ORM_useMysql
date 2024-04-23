/*
 * @Author: imc-明安瑞
 * @Date: 2024-04-23 10:34:20
 * @LastEditTime: 2024-04-23 15:19:30
 * @LastEditors: imc-Mar
 * @Description: 有问题请联系我 tel:13562850362
 * @FilePath: \node-express-officePeople\router_handler\imgUpload.js
 * 一川烟草，满城风絮，梅子黄时雨。
 */
// 图片上传接口的处理函数
const multer = require('multer')
const path = require('path')
// 引入Staff实体类 
const Staff = require('../db/model/staff')
const { error } = require('console')

// 设置存储引擎并指定上传的目标目录
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/') //存储到uploads目录
    },
    filename: function (req, file, cb) {
        // console.log('filename---req--', req);
        // console.log('filename---file--', file);
        // 保存时修改文件名
        cb(null, (file.originalname.split('.'))[0] + '_' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 } // 限制文件大小为10MB
}).single('file')

exports.imgUpload = (req, res) => {
    // let imgPath
    // const user = req.user
    // console.log('user-----', req.user);
    upload(req, res, uploadErr => {
        // console.log(req.file);
        // console.log(req.body.id);
        // if (!req.body.id) {
        //     return res.send({
        //         status: 400,
        //         message: 'id值不能为空'
        //     })
        // } else {// id值传了
        //     // 查询id值是否合法
        //     Staff.findAll({
        //         where: {
        //             id: req.body.id,
        //             status: 0
        //         }
        //     }).then(result => {
        //         if (result.length == 0) {
        //             return res.send({
        //                 status: 400,
        //                 message: 'id值不合法'
        //             })
        //         } else {

        //         }
        //     }).catch(error => {
        //         return res.send({
        //             status: 400,
        //             message: error.toString()
        //         })
        //     })

        // }

        //  file值没穿的情况
        if (!req.file) {
            return res.send({
                status: 400,
                message: '图片文件未上传'
            })
        }
        if (uploadErr) {
            // 处理错误
            // console.log('上传失败的错误原因------', uploadErr);
            res.send({
                status: 400,
                message: '图片上传失败'
            })
        } else {
            // 文件上传成功
            // console.log('req----', req);
            // console.log('res----', res);
            res.send({
                status: 200,
                message: '图片上传成功',
                data: (req.file.path).replace('\\', '/')
            })


        }
        // imgPath = req.file.path
        // console.log('imgPath---', imgPath);
    })


}