var fs = require('fs')

var config = fs.readFileSync('./configuration.conf');

var globalConfig = {}

var configArr = config.toString().split('\r\n');

configArr.forEach(function (ele, index) {
    var configStr = ele.split('=');
    globalConfig[configStr[0]] = configStr[1];
})
// var arr = Array.from(globalConfig.static_file_type.split('|'));
// globalConfig.static_file_type = arr;

if (globalConfig.static_file_type) {
    globalConfig.static_file_type = globalConfig.static_file_type.split('|');
} else {
    throw new Error('配置文件异常, 缺少globalConfig.static_file_type')
}

module.exports = globalConfig;
