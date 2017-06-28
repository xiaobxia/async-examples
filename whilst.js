/**
 * Created by xiaobxia on 2017/6/28.
 */
const async = require('async');

let count = 0;
async.whilst(
    function() { return count < 5; },
    function(callback) {
        count++;
        setTimeout(function() {
            callback(null, count);
        }, 1000);
    },
    function (err, n) {
        // 5 seconds have passed, n = 5
    }
);