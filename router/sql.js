const mySql = require('mysql');
function dbOper(sql, parameter, callback) {
    // 数据库链接
    var dbs = mySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'project3'
    })
    // 数据库启动
    dbs.connect();

    dbs.query(sql, parameter, callback);
    // 数据库关闭
    dbs.end();
}
module.exports = {
    query: dbOper
}