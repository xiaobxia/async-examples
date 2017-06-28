/**
 * Created by xiaobxia on 2017/6/28.
 */
const async = require('async');
/**
 * 用于既要并行又要串行
 * get_data和make_folder并行
 */
async.auto(
    //第一个参数是object
    {
        get_data: function (callback) {
            setTimeout(function () {
                console.log('in get_data');
                //传两个参,接收时就是数组
                callback(null, 'data', 'converted to array');
            }, 200)
        },
        make_folder: function (callback) {
            console.log('in make_folder');
            callback(null, 'folder');
        },
        write_file: ['get_data', 'make_folder', function (results, callback) {
            /**
             * {}
             * 'get_data', 'make_folder'传来的
             */
            console.log(results)
            console.log('in write_file', JSON.stringify(results));
            callback(null, 'filename');
        }],
        email_link: ['write_file', function (results, callback) {
            /**
             * {}
             * 'get_data', 'make_folder', 'write_file'传来的
             */
            console.log(results)
            console.log('in email_link', JSON.stringify(results));
            callback(null, {'file': results.write_file, 'email': 'user@example.com'});
        }]
    }, function (err, results) {
        /**
         * {}
         * 'get_data', 'make_folder', 'write_file', 'email_link'传来的
         */
        console.log('err = ', err);
        console.log('results = ', results);
    });