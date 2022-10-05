const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')
const logger = require('./utils/logger')
const hardwarePuash = require('./router/masterRoute')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5080 //must for production environmentnpm install dotenv --save

//must use body parser for decoding the params from the url
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

//using hardware push
app.use(hardwarePuash);


let nodeVersion = process.version
logger.info(`checking node node environment`);
logger.info(`Found that node version is ${nodeVersion} and is adapt to the running`);
logger.info(`checking node modules on system | system get moduels values as ?`);
logger.info({
    "name": "node",
    "version": "1.0.0",
    "description": "R&D",
    "main": "app.js",
    "scripts": {
      "start": "nodemon app.js"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/abhiipillai2/NUCLIUS-DATA-COLLECTION-BACK-END.git"
    },
    "author": "ATOM DEVELOPERS",
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/abhiipillai2/NUCLIUS-DATA-COLLECTION-BACK-END/issues"
    },
    "homepage": "https://github.com/abhiipillai2/NUCLIUS-DATA-COLLECTION-BACK-END#readme",
    "dependencies": {
      "body-parser": "^1.20.0",
      "cors": "^2.8.5",
      "dotenv": "^16.0.2",
      "express": "^4.18.1",
      "log4js": "^6.6.1",
      "momment": "^0.0.1",
      "mysql": "^2.18.1"
    },
    "devDependencies": {
      "nodemon": "^2.0.20"
    }
  }
  );
app.listen(PORT, () => logger.info("checked all dependencies and server start successfully"));
logger.info(`printing port | port : 5080`);
