const logger = require('../utils/logger')
const pool = require('../models/dataBseAdapter')
const http = require("http");

//data pusing routing function
exports.dataPush = (req, res) => {
    try {

        //clint ip
        let clintIp = req.socket.remoteAddress

        //request body
        const body = req.body

        //validation
        let hardwareId = body.hardware_id;

        let current = body.data.current
        let voltage = body.data.voltage
        let power = body.data.power
        let data = body.data
        console.log(body)

        //loging
        logger.info(`Request reached from host ${clintIp} and request packet :`);
        logger.info(body);

        if (hardwareId != null && hardwareId != "" && current != null && !isNaN(current) && voltage != null && !isNaN(voltage) && power != null && !isNaN(power)){

            logger.info(`Primary validation is sucess and finding hardware id.`);
            logger.info(`hardware id is present in request | hardware id is : ${hardwareId}`);
            logger.info(`inserting current  = ${current} | voltage = ${voltage} | power = ${power}`);

            pool.connection.getConnection((err, connection) => {
                if (err) {
        
                    logger.info(err)
                }

                logger.info(`connected id ${connection.threadId}`)
                logger.info(`sql query :INSERT INTO ${hardwareId} SET seq_id=?`)
                console.log(data)
        
                connection.query('INSERT INTO ' + hardwareId + ' (current,voltage,power) VALUES(?,?,?)', [ current , voltage , power ], (err, rows) => {
                connection.release()
                if (!err) {

                    res.send({
                        "statusCode": "SC0000",
                        "statusDesc": "Success"
                    })
                    logger.info("data successfully inserted");
                } else {

                    logger.error("databse error");
                    logger.error(err);
                    res.status(500).json({

                            "statusDesc": "Failure",
                            "message" : err.message
                    })
                    
                }
                });
        
            });
        
            
        }else{
            
            logger.error(`primary validation is failed`)
            throw "Primary validation error: Paramas not correct";
            
        }

    console.log(body.data.current)
    

    // res.send({
    //     "statusCode": "SC0000",
    //     "statusDesc": "Success"
    // })
        
    } catch (err) {
        
        res.status(400).json({
            "statusDesc": "Failure",
            "message" : err
        })
    }
    
}