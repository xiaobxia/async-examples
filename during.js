/**
 * Created by xiaobxia on 2017/5/31.
 */
const async = require('async');
var count = 0;

async.during(
    /**
     * 函数1
     * 用来test pass，如果callback(null, true)就执行函数2
     * @param callback
     * @returns {*}
     */
    function (callback) {
        console.log('verify')
        return callback(null, count < 4);
    },
    /**
     * 函数2
     * 被执行的异步函数
     * @param callback 就是自己本身
     */
    function (callback) {
        count++;
        console.log(count)
        //每次自己调用前会执行函数1
        console.log(callback())
        setTimeout(callback, 2000);
    },
    /**
     * 函数3
     * 出错或是都执行完时的回调
     * @param err
     */
    function (err) {
        // 5 seconds have passed
        console.log('ok')
    }
);