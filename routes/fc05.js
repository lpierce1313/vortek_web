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
    var fc05Routes = require('express').Router();
    //App pages for web
    fc05Routes.get('/', function(req, res) {
      res.render('./node/modbusWriteCoil');
    });

    //Post request for modbus node
    fc05Routes.post('/', urlencodedParser, function (req, res) {
      var dataCopy = modFuncC.data.dataSet();
      var modbus = {input: {}, result: {flag: 0, arr: [], keyVal: 0}, data: []}; //reset mod

      modbus.input = req.body;  //Response of get post request
      modbus.result.label = modFuncC.data.findCoilIndex(modbus.input.startReg);
      modbus.input.numReg = "N/A";
      modbus.input.dataType = "N/A";
      var bool = modbus.input.state!=0?true:false;


      client.connectRTU("/COM" + modbus.input.comPort, { baudRate: parseInt(modbus.input.speed), parity: modbus.input.parity })
          .then(function(){
            client.setID(parseInt(modbus.input.unitAdd));
            client.setTimeout(1000);
            console.log("Test");
          })
          .then(function(){
            // write to coil
            client.writeCoil(modbus.input.startReg, bool)
                .then(function(d) {
                    console.log("Works", d);
                    modbus.result.msg = "Successful";
                    modbus.result.regAdd = d.address;
                    modbus.result.regVal = d.state;
                  })
                .catch(function(e) {
                  modbus.result.flag = 1;
                  modbus.result.msg = e;
                  res.render('./node/modbus-success', {input: modbus.input, result: modbus.result}); })
                .then(function(d){
                  client.close();
                })
                .then(function(){
                  res.render('./node/modbus-success', {input: modbus.input, result: modbus.result});
                })
          })
          .catch(function(){
              modbus.result.flag = 1;
              modbus.result.msg = err;
              res.render('./node/modbus-success', {input: modbus.input, result: modbus.result});
          })

    });

    return fc05Routes;
})();
