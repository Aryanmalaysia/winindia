const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '85.195.73.202',
    user: 'win1209_aryanwinuser',
    password: '729288@Rishav$',
    database: 'win1209_aryanwin',
});

export default connection;
