const mysql = require('mysql2');
const pool = mysql.createPool({
    host: "",
    port: "",
    database: "",
    user: "",
    password: ""
}
);

pool.getConnection((err, con) => {
    con.release()
});
module.exports = pool;
