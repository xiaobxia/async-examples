/**
 * Created by xiaobxia on 2017/6/28.
 */
const async = require('async');
/**
 * 串行得执行,把所有函数的结果集结起来
 * 结果通过callback给
 */
//下面的series2并不会等series1全部结束了再开始
let test = 0;
async.series(//series1
    //在前面的先执行
    [
        function (callback) {
        //这个异步完全执行了才执行下面那个异步
            setTimeout(function () {
                test = 1;
                callback(null, 'one');
            }, 300);
        },
        function (callback) {
            setTimeout(function () {
                console.log(test)
                callback(null, 'two');
            }, 200);
        }
    ],
    function (err, results) {
        //[one,two]
        console.log(results)
    }
);

async.series(//series2
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
        //{one: 1, two:2}
        console.log(results)
    }
);