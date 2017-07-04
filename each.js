/**
 * Created by xiaobxia on 2017/7/4.
 */
const async = require('async');
/**
 * 对数组中每个执行函数
 */
async.each([1,2,3,4], function(num, callback) {
    if( num > 2 ) {
        callback('big');
    } else {
        callback();
    }
}, function(err) {
    if( err ) {
        console.log('A file failed to process');
    } else {
        console.log('All files have been processed successfully');
    }
});