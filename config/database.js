var mysql = require('mysql');
var db_info = {
    host: 'sungwooaurora-1.cluster-clwijzgmbsxj.ap-northeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'sungwoo',
    password: 'rkawkaos12',
    database: 'board01'
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}