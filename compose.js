/**
 * Created by xiaobxia on 2017/7/4.
 */
const async = require('async');
/**
 * 结合异步函数
 */
//mul3(add1(4))
function add1(n, callback) {
    setTimeout(function () {
        callback(null, n + 1);
    }, 10);
}

function mul3(n, callback) {
    setTimeout(function () {
        callback(null, n * 3);
    }, 10);
}
//mul3(add1(4))
var add1mul3 = async.compose(mul3, add1);
add1mul3(4, function (err, result) {
    if(err){
        console.log(err);
    } else {
        console.log(result)
    }

    // result now equals 15
});