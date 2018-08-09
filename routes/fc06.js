var modNode = require('../public/js/modbusResult.js');
var modFuncC = require('../public/js/functions.js');
var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

//Write Register


module.exports = (function() {

    'use strict';
    var fc06Routes = require('express').Router();
    //App pages for web
    fc06Routes.get('/', function(req, res) {
      res.render('./node/modbusWriteReg');
    });

    //Post request for modbus node
    fc06Routes.post('/', urlencodedParser, function (req, res) {
      var modbus = {input: {}, result: {flag: 0, arr: [], keyVal: 0}, data: []}; //reset mod
      modbus.input = req.body;  //Response of get post request
      modbus.input.bit = 16;
      modFuncC.data.option(modbus); //Find the correct character for format
      console.log(modbus.input);
      modbus.result.label = modFuncC.data.findIndex(modbus.input.startReg).value;
      modbus.result.recType = modFuncC.data.findIndex(modbus.input.startReg).type;

      //Must convert to signed integer!
        //Work Backwards!!

      client.connectRTU("/COM" + modbus.input.comPort, { baudRate: parseInt(modbus.input.speed), parity: modbus.input.parity })
          .then(function(){
            client.setID(parseInt(modbus.input.unitAdd));
            client.setTimeout(1000);
          })
          .then(function(){
            // write to coil
            client.writeRegister(modbus.input.startReg, modbus.input.regVal)
                .then(function(d) {
                  console.log(d);
                  modbus.result.msg = "Successful";
                  modbus.result.regAdd = d.address;
                  modbus.result.regVal = d.value;
                })
                .catch(function(e) {
                  modbus.result.flag = 1;
                  modbus.result.msg = e; })
                .then(function(){
                  client.close();
                })
                .then(function(){
                  console.log(modbus.result);
                  res.render('./node/modbus-success', {input: modbus.input, result: modbus.result});
                })
          })

    });

    return fc06Routes;
})();
