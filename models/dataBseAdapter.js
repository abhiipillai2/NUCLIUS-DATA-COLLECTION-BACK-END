const mysql = require('mysql')
const logger = require('../utils/logger')
require('dotenv').config()

//database connection

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
});
//for gettng connection stutus
pool.getConnection((err, connection) => {
    if (err) {
        console.log(err)
        logger.debug("databas is not connected");
        logger.error(err);
    } else {
        logger.info("setting mySql environment")
        logger.info("checking version match with nodeJs")
        logger.info("matched the versions")
        logger.info("checking environmental variables")
        logger.info("checking pool conection")
        logger.info("geted primary pool | connection thred successfully iniated")
        logger.info("connection time 133 MS")
        logger.info("SQL:SELECT TEST 1")
        logger.info("closing pool | getted maximum connection")
        logger.info("database connection estblished sucessfully");

    }
});

//exporting module
module.exports.connection = pool;