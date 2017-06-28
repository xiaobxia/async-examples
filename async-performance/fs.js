/**
 * Created by xiaobxia on 2017/6/28.
 */
const async = require('async');
const fs = require('fs')
//事实证明async配异步比同步要好
let times = 1000;
function count() {
    fs.readFileSync('./async-performance/tsconfig.json')
}
function count2() {
    fs.readFile('./async-performance/tsconfig.json',function () {
    })
}
let time1 = (new Date()).getTime();
for(let a=0;a<times;a++){
    count();
}
let time2 = (new Date()).getTime();
console.log('raw use: ', time2 - time1);
let task = [];
for(let b=0;b<times;b++){
    task.push(function (callback) {
        count2();
        callback(null, 'one');
    })
}
let time3 = (new Date()).getTime();
async.parallel(
    task,
    function (err, results) {
        let time4 = (new Date()).getTime();
        console.log('async use: ', time4 - time3);
    }
)