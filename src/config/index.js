// 根据环境引入不同配置 process.env.NODE_ENV
// https://blog.csdn.net/liuxiao723846/article/details/108313832
const environment = process.env.NODE_ENV || 'production'
const config = require('./env.' + environment)
module.exports = config
