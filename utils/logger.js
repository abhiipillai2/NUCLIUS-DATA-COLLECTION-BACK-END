const log4js = require("log4js");
require('dotenv').config()


log4js.configure({
    appenders: { NUCLIUS_DATA: { type: "file", filename: process.env.LOG_PATH + "NUCLIUS_DATA.log" } },
    categories: { default: { appenders: ["NUCLIUS_DATA"], level: "debug" } }
});

const logger = log4js.getLogger("NUCLIUS_DATA");

//exporting module
module.exports = logger