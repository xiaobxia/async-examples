/**
 * Created by xiaobxia on 2017/7/4.
 */
const async = require('async');
/**
 * 返回第一个不会出现error的
 */
async.detect(['file1','file2','file3'], function(filePath, callback) {
    setTimeout(function () {
        callback(null,filePath);
        /*
        if(filePath==='file1'){
            callback(null)
        } else {
            callback(new Error())
        }
        */
    },1000)
}, function(err, result) {
    console.log(err?err:result)
});