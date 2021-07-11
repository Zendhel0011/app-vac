const mysql = require('mysql2');
const pool = mysql.createPool({
    host: "remotemysql.com",
    port: "3306",
    database: "Y5Y1JP9CCs",
    user: "Y5Y1JP9CCs",
    password: "JsES16082O"
}
);

pool.getConnection((err, con) => {
    con.release()
});
module.exports = pool;