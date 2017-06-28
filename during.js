/**
 * Created by xiaobxia on 2017/5/31.
 */
const async = require('async');
var count = 0;

async.during(
    //执行异步函数前测试
    function (callback) {
        //console.log(callback)
        return callback(null, count < 4);
    },
    //测试通过时的异步功能
    function (callback) {
        count++;
        console.log(count)
        setTimeout(callback, 2000);
    },
    //出错或是结束时的回调
    function (err) {
        // 5 seconds have passed
        console.log('ok')
    }
);