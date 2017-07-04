/**
 * Created by xiaobxia on 2017/7/4.
 */
const async = require('async');
/**
 * 用在waterfall和auto的第一个函数中，用来给一个默认值
 */
async.waterfall([
    async.constant(42),
    function (value, callback) {
        callback(null,value)
    },
], function (err, results) {
    console.log(err?err: results)
});