/**
 * Created by xiaobxia on 2017/7/3.
 */
const async = require('async');
/**
 * 如果第一个函数不出错，那结果就是第一个函数的
 * 如果前面一个函数出错，就执行下面一个
 */
async.tryEach([
        function getDataFromFirstWebsite(callback) {
            // Try getting the data from the first website
            let data = {
                a: 'a'
            };
            setTimeout(function () {
                callback(new Error(), data);
            }, 1000)

        },
        function getDataFromSecondWebsite(callback) {
            // First website failed,
            // Try getting the data from the backup website
            let data = {
                b: 'b'
            };
            setTimeout(function () {
                callback(null, data);
            }, 500)
        }
    ],
// optional callback
    function (err, results) {
        if (err) {
            console.log(err)
        } else {
            console.log(results)
        }
    });