/**
 * Created by xiaobxia on 2017/7/3.
 */
const async = require('async');
/**
 * 有了reflect，即使中间有函数出错了，也会打印
 */
async.parallel([
        async.reflect(function(callback) {
            setTimeout(function () {
                callback(null, 'one');
            },900);
        }),
        async.reflect(function(callback) {
            setTimeout(function () {
                callback(new Error());
            },600);
        }),
        async.reflect(function(callback) {
            setTimeout(function () {
                callback(null, 'two');
            },300);
        })
    ],
// optional callback
    function(err, results) {
        if(err){
            console.log(err)
        } else {
            console.log(results)
        }
        // values
        // results[0].value = 'one'
        // results[1].error = 'bad stuff happened'
        // results[2].value = 'two'
    });