var mysql = require('mysql');

function createMysql() {
    var commpent = mysql.createConnection({
        // 主机地址
        host: '127.0.0.1',
        // 端口
        port: '3306',
        // 名字
        user: 'root',
        // 密码
        password: '123456',
        // 库名
        database:'lisaisai'
    });
    return commpent;
}
module.exports.createMysql = createMysql;