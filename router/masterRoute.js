const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//const moment = require('moment')
//const date = moment()
const pool = require('../models/dataBseAdapter')
const logger = require('../utils/logger')
const masterController = require('../controler/masterController')
require('dotenv').config()
const router = express.Router()

//must use body parser for decoding the params from the url
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//master hardware data Push Route
router.post('/dataPush', masterController.dataPush)
//exporting
module.exports = router;