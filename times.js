/**
 * Created by xiaobxia on 2017/6/28.
 */
const async = require('async');
/**
 * 重复执行函数，并得到所有的值
 * 函数内部有异步，顺序会不一样
 *
 * 值通过next传递
 * @param id
 * @param callback
 */
let createUser = function (id, callback) {
    setTimeout(function () {
        callback(null, {
            id: 'user' + id
        });
    },(6-id)*100)
};

async.times(
    5,
    function (n, next) {
        //next是自带的回调
        //n是0到4
        console.log(n)
        createUser(n, function (err, user) {
            console.log(user);
            next(err, user);
        });
    },
    function (err, users) {
        //[]
        console.log(users)
    }
);