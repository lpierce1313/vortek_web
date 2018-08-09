var modNode = require('../public/js/modbusResult.js');
var modFuncC = require('../public/js/functions.js');
var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

//Write Coil !! Works FULLY add some labels
module.exports = (function() {

    'use strict';
    var fc02Routes = require('express').Router();
    //App pages for web
    fc02Routes.get('/', function(req, res) {
      res.render('./node/modbusInputStatus');
    });

    //Post request for modbus node
    fc02Routes.post('/', urlencodedParser, function (req, res) {
      var modbus = {input: [], result: []}
      console.log(req.body);
      modbus.input = req.body;
      modbus.input.dataType = "N/A"

      client.connectRTU("/COM" + modbus.input.comPort, { baudRate: parseInt(modbus.input.speed), parity: modbus.input.parity })
          .then(function(){
            client.setID(parseInt(modbus.input.unitAdd));
            client.setTimeout(1000);
          })
          .then(function(){
            // write to coil
            client.readDiscreteInputs(Number(modbus.input.startReg), modbus.input.numReg)
                .then(function(d) {
                    console.log("Works", d);
                    modbus.result.regAdd = modbus.input.startReg;
                    d.data = d.data.join(" ");
                    modbus.result.data = d.data;
                    var obj = JSON.parse(JSON.stringify(d.buffer));
                    console.log(JSON.stringify(d.buffer));
                    console.log(obj.data[0].toString());
                    modbus.result.buffer = obj.data[0].toString();
                  })
                .catch(function(e) {
                  modbus.result.flag = 1;
                  modbus.result.msg = e;
                  res.render('./node/modbus-success', {input: modbus.input, result: modbus.result});
                })
                .then(function(){
                  client.close();
                })
                .then(function(){
                  console.log();
                  res.render('./node/modbus-success', {input: modbus.input, result: modbus.result});
                })
          })
          .catch(function(){
              modbus.result.flag = 1;
              modbus.result.msg = err;
              res.render('./node/modbus-success', {input: modbus.input, result: modbus.result});
          });

      // res.render('./node/modbus-success', {input: modbus.input, result: modbus.result});
    });

    return fc02Routes;
})();
