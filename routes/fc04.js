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
    var fc04Routes = require('express').Router();
    //App pages for web
    fc04Routes.get('/', function(req, res) {
      res.render('./node/modbusInputReg');
    });

    //Post request for modbus node
    fc04Routes.post('/', urlencodedParser, function (req, res) {
      var modbus = {input: [], result: []}
      console.log(req.body);
      modbus.input = req.body;
      modbus.input.dataType = "N/A"
      modbus.result.label = modFuncC.data.findIndex(modbus.input.startReg).value;
      modbus.result.regAdd = modbus.input.startReg;

      client.connectRTU("/COM" + modbus.input.comPort, { baudRate: parseInt(modbus.input.speed), parity: modbus.input.parity })
          .then(function(){
            client.setID(parseInt(modbus.input.unitAdd));
            client.setTimeout(1000);
          })
          .then(function(){
            // write to coil
            client.readInputRegisters(Number(modbus.input.startReg), modbus.input.numReg)
                .then(function(d) {
                    console.log("Works", d);
                    d.data = d.data.join(" ");
                    modbus.result.data = d.data;
                    var obj = JSON.parse(JSON.stringify(d.buffer));
                    console.log(JSON.stringify(d.buffer));
                    console.log(obj.data[0].toString());
                    for(var i = 0; i < obj.data.length; i++){
                      obj.data[i] = ((obj.data[i])).toString(16);
                      if(obj.data[i].length < 2){
                        obj.data[i] = "0" + obj.data[i];
                      }
                      var str = obj.data.join(' ');
                    }
                    modbus.result.buffer = str;
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

    return fc04Routes;
})();
