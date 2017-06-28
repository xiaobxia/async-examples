/**
 * Created by xiaobxia on 2017/6/28.
 */
const async = require('async');
/**
 * 得到最先执行完回调的值
 */
async.race(
    [
        function (callback) {
            setTimeout(function () {
                callback(null, 'one');
            }, 200);
        },
        function (callback) {
            setTimeout(function () {
                callback(null, 'two');
            }, 100);
        }
    ],
    function (err, result) {
        console.log(result)
    }
);