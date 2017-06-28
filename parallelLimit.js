/**
 * Created by xiaobxia on 2017/6/28.
 */
const async = require('async');
let test = 0;
/**
 * 限制并发
 * 我这里2个一次，分为3组
 * 第一组当中只要有一个函数执行完，就进入第二组，不会等完全执行完
 */
async.parallelLimit(
    [
        function (callback) {
            setTimeout(function () {
                test = 1;
                callback(null, '1');
            }, 50);
        },
        function (callback) {
            setTimeout(function () {
                console.log('1',test);
                callback(null, '2');
            }, 600);
        },
        function (callback) {
            setTimeout(function () {
                test = 2;
                callback(null, '3');
            }, 200);
        },
        function (callback) {
            setTimeout(function () {
                console.log('2',test);
                callback(null, '4');
            }, 300);
        },
        function (callback) {
            setTimeout(function () {
                test = 3;
                callback(null, '5');
            }, 100);
        },
        function (callback) {
            setTimeout(function () {
                console.log('3',test);
                callback(null, '6');
            }, 200);
        }
    ],
    //一次并发两个
    2,
    function (err, results) {
        //[1,2,3,4,5,6]
        console.log(results)
    }
);