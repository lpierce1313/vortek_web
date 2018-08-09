var modbus = {input: {}, result: {flag: 0, arr: [], keyVal: 0}, data: []}; //reset mod
var modNode = require('../public/js/modbusResult.js');
var modFuncC = require('../public/js/functions.js');
var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});


module.exports = (function() {
    'use strict';
    var readRoutes = require('express').Router();

    //App pages for web
    readRoutes.get('/', function(req, res) {
      res.render('./node/modbus');
    });

    //Post request for modbus node
    readRoutes.post('/', urlencodedParser, function (req, res) {
      modbus = {input: {}, result: {flag: 0, arr: [], keyVal: 0}, data: []}; //reset mod
      modbus.input = req.body;  //Response of get post request
      console.log(modbus.input.code);

      if(modbus.input.regNum % 2 == 1){
        modbus.input.regNum = 1 + modbus.input.regNum;
      }
      modFuncC.data.option(modbus); //Find the correct character for format

      //Modbus Client must stay
      client.connectRTU("/COM" + modbus.input.comPort, { baudRate: parseInt(modbus.input.speed), parity: modbus.input.parity })

          .then(function(){
            client.setID(parseInt(modbus.input.unitAdd));
            client.setTimeout(1000);
          })
          .then(function(){
            client.readHoldingRegisters(parseInt(modbus.input.startReg), parseInt(modbus.input.numReg))
                .then(function(d) {
                    modbus.data = d.data;
                })
                .catch(function(err){
                  modbus.result.flag = 1;
                  modbus.result.msg = err;
                })
                .then(function(){
                  client.close();
                })
                .then(function(){
                  //Format the data
                  modNode.data.generate(modbus);
                  res.render('./node/modbus-success', {input: modbus.input, result: modbus.result});
                })
                .catch(function(err){
                  modbus.result.flag = 1;
                  modbus.result.msg = "Error: Register address is out of bounds";
                  res.render('./node/modbus-success', {input: modbus.input, result: modbus.result});
                })
          })
    });

    return readRoutes;
})();
