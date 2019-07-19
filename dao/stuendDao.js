var util = require('./util');
function queryData(success) {
    var sql = 'select * from message ';
    // var queryParams = [offse, limit]
    var compoent = util.createMysql();
    compoent.connect(); //连接数据库
    compoent.query(sql, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error)
        }
    })
    compoent.end();
}
module.exports.queryData = queryData;