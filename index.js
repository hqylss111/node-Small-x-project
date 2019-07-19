var http = require('http');
var url = require('url');
var fs = require('fs');

var globalConfig = require('./config');

var loaderMap = require('./loader');

var logoText = require('./logText');
var $http = http.createServer(function (request, response) {
    //request  需要 要求  ==》 我需要干嘛
    // response 响应回应  ==》 我需要给前端什么响应回应
    var pathName = url.parse(request.url).pathname; //端口后面的地址
    var pathText = url.parse(request.url, true).query;
    var isStatic = judegStatic(pathName);
    logoText(pathName)
    if (isStatic) {
        try {
          
            var data = fs.readFileSync(globalConfig['page_path'] + pathName);
            response.writeHead(200);
            response.write(data)
            response.end()
        } catch (e) {
          
            response.writeHead(404);
            response.write('<html><body><h1>404 Node Fond</h1></body></html>');
            response.end()
        }
    } else {
       
        var func = loaderMap.get(pathName);
        if (func != null) {
            func(request, response)
        } else {
            response.writeHead(404);
            response.write('<html><body><h1>404 Node Fond</h1></body></html>');
            response.end();
        }
    }
}).listen(globalConfig.part, function () {
    console.log('连接成功')
})


$http.on('connection', function () {
    console.log('页面和服务器连接成功')
})

function judegStatic(pathName) {
    for (var i = 0; i < globalConfig.static_file_type.length; i++) {
        if (pathName.indexOf(globalConfig.static_file_type[i]) == pathName.length - globalConfig.static_file_type[i].length) {
            return true;
        }
    }
    return false;
}