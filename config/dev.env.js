/*
 * @Author: your name
 * @Date: 2020-05-23 22:04:05
 * @LastEditTime: 2020-05-23 23:20:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \周记 张经伟c:\Users\宝宝\Desktop\horticultural_second_edition\config\dev.env.js
 */
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_BASE_API: '"http://39.100.238.21:8082/fish-web-0.0.1-SNAPSHOT/"'
  //VUE_APP_BASE_API: '"http://192.168.1.134:8081/fish-web/"'   //原ip地址为localhost
  //VUE_APP_BASE_API: '"/api"'
})
