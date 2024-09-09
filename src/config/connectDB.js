const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '85.195.73.202',
    user: 'win1209_dalilywinuser',
    password: '76440@Rishav$',
    database: 'win1209_dailywin',
});

export default connection;
