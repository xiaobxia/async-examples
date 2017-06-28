/**
 * Created by xiaobxia on 2017/6/28.
 */
const async = require('async');
/**
 * 用来解决callback的
 */
async.waterfall(
    [
        //函数1
        function (callback) {
            //callback是函数2
            callback(null, 'one', 'two');
        },
        //函数2
        function (arg1, arg2, callback) {
            //callback是函数3
            callback(null, 'three');
        },
        function (arg1, callback) {
            //callback是函数4
            callback(null, 'done');
        }
    ],
    //函数4
    function (err, result) {
        console.log(result)
    }
);


async.waterfall(
    [
        myFirstFunction,
        mySecondFunction,
        myLastFunction,
    ],
    function (err, result) {
        console.log(result)
    }
);
function myFirstFunction(callback) {
    callback(null, 'one', 'two');
}
function mySecondFunction(arg1, arg2, callback) {
    callback(null, 'three');
}
function myLastFunction(arg1, callback) {
    callback(null, 'done');
}