/*
 * @Author: imc-明安瑞
 * @Date: 2024-04-30 15:41:25
 * @LastEditTime: 2024-04-30 17:18:38
 * @LastEditors: imc-Mar
 * @Description: 有问题请联系我 tel:13562850362
 * @FilePath: \node-express-officePeople\socketIO\index.js
 * 一川烟草，满城风絮，梅子黄时雨。
 */
const http = require('http');
const path = require('path');
const express = require('express');

let app = express();
let server = http.createServer(app);
let io = require('socket.io')(server);

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})