var fs = require('fs');

 var globalConfig = require('./config');

 var pathMap = new Map();

 var pathArr = [];
 var fiter = fs.readdirSync(globalConfig['web_path']);

 fiter.forEach(ele => {
    //  Map 是一个obj 要
    // 因为你到导出来的是path
     var temp = require('./' + globalConfig['web_path'] + '/' + ele);
     if(temp.path){
         for(var [key,value] of temp.path){
            //  如果不等于空 就是一个url 对应了两个接口
             if(pathMap.get(key) == null){
                pathMap.set(key,value);
             }else{
                 throw new Error('url 异常' + key);
             }
         }
         
     }
 })
 module.exports = pathMap;
   
