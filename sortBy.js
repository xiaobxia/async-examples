/**
 * Created by xiaobxia on 2017/7/4.
 */
const async = require('async');
/**
 * 把数组中的排序，然后返回结果
 * 会等所有异步完成
 */
async.sortBy([1,9,3,5], function(x, callback) {
    setTimeout(function () {
        callback(null, 10-x);
    },1000*x);
}, function(err,result) {
    if(err){
        console.log(err);
    } else {
        console.log(result)
    }

    // result callback
});