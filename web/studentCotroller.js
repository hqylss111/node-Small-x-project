
//这个web 调用 数据层
// loader 来触发这里的方法
var controller = require('../dao/stuendDao');
var path = new Map()
// 获取学生信息
function getStudentInforamtion(request, response) {
    controller.queryData(function (res) {
        console.log(JSON.stringify(res));
        response.writeHead(200);
        response.write(JSON.stringify(res))
        response.end()
    })
}
path.set('/getStudentInforamtion', getStudentInforamtion)

// 获取学生年领
function getStudentInforamAge(rquest, response) {

}
path.set('/getStudentInforamAge', getStudentInforamAge)

module.exports.path = path;