var fs  = require('fs');

var globoConfig = require('./config');

var moment = require('moment');
console.log()

var pathSite =  globoConfig.log_path  + '/' + globoConfig.log_name;



function printLog(data){
    var time = moment().format()
    var pathSite =  globoConfig.log_path  + '/' + globoConfig.log_name;
    fs.appendFile(pathSite ,time + ' : ' + data + '\n',function(){
        console.log('成功打印')
    })

}
module.exports = printLog;