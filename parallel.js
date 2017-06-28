/**
 * Created by xiaobxia on 2017/6/28.
 */
const async = require('async');
/**
 * 并行得执行,并把结果收集(结果还是按顺序的)
 * 通过callback给值
 * 必须得有callback
 * @type {number}
 */
let test = 0;
async.parallel(
    [
        function (callback) {
            setTimeout(function () {
                test = 1;
                callback(null, 'one');
            }, 200);
        },
        function (callback) {
            setTimeout(function () {
                console.log(test);
                callback(null, 'two');
            }, 100);
        }
    ],
    function (err, results) {
        //[ 'one', 'two' ]
        console.log(results)
    }
);


async.parallel(
    {
        one: function (callback) {
            setTimeout(function () {
                callback(null, 1);
            }, 200);
        },
        two: function (callback) {
            setTimeout(function () {
                callback(null, 2);
            }, 100);
        }
    },
    function (err, results) {
        //{ two: 2, one: 1 },map不能保证顺序
        console.log(results)
    }
);