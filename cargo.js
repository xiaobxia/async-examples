/**
 * Created by xiaobxia on 2017/6/28.
 */
const async = require('async');
/**
 * 这里每次处理两个task
 * 不会等异步
 */
let cargo = async.cargo(function(tasks, callback) {
    console.log('task:',tasks)
    for (var i=0; i<tasks.length; i++) {
        console.log('hello ' + tasks[i].name);
    }
    callback();
}, 2);


cargo.push({name: 'foo'}, function(err) {
    setTimeout(function () {
        console.log('finished processing foo');
    }, 600)
});
cargo.push({name: 'bar'}, function(err) {
    setTimeout(function () {
        console.log('finished processing bar');
    }, 100)
});
cargo.push({name: 'baz'}, function(err) {
    console.log('finished processing baz');
});