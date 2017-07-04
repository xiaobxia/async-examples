/**
 * Created by xiaobxia on 2017/7/4.
 */
/**
 * 感觉没什么软用
 */
const async = require('async');
var slow_fn = function(name, callback) {
    setTimeout(function () {
        callback(null, name);
    },1000)
    // do something
};
var fn = async.memoize(slow_fn);

// fn can now be used as if it were slow_fn
fn('some name', function(err, result) {
    console.log(err?err:result)
    // callback
});