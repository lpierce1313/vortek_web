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
    var fc16Routes = require('express').Router();
    //App pages for web
    fc16Routes.get('/', function(req, res) {
      res.render('./node/modbusWriteRegisters');
    });

    //Post request for modbus node
    fc16Routes.post('/', urlencodedParser, function (req, res) {
      var modbus = {input: {}, result: {flag: 0, arr: [], keyVal: 0}, data: []}; //reset mod
      modbus.input = req.body;  //Response of get post request
      modbus.input.bit = 16;
      // modFuncC.data.option(modbus); //Find the correct character for format


      var arr = modbus.input.values.split(" ");
      var arr_string = arr.join();
      for(var i = 0; i < arr.length; i++){ arr[i] = parseInt(arr[i]); }
      console.log(arr);
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
            client.writeRegisters(modbus.input.startReg, arr)
                .then(function(d) {
                  console.log(d);
                  modbus.result.msg = "Successful";
                  modbus.result.regAdd = d.address;
                  modbus.result.regVal = arr;
                  modbus.result.length = d.length;
                })
                .catch(function(e) {
                  console.log(e);
                  modbus.result.flag = 1;
                  modbus.result.msg = e;
                  res.render('./node/modbus-success', {input: modbus.input, result: modbus.result});
                })
                .then(function(){
                  client.close();
                })
                .then(function(){
                  console.log(modbus.result);
                  res.render('./node/modbus-success', {input: modbus.input, result: modbus.result});
                })
          })

    });

    return fc16Routes;
})();
