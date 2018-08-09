var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU();
var x;
var value = 0;
function decimalToHexString(number)
  {
    if (number < 0)
    {
      number = 0xFFFFFFFF + number + 1;
    }

    return number.toString(16).toUpperCase();
  }
function makeSignedInt(modbus, bitSize){
  for(var j = 0; j < modbus.input.numReg; j++){
    val = parseInt(modbus.result.arr[j].value);
    if(val > Math.pow(2,bitSize - 1)){
      // console.log("Inisde");
      val = val - Math.pow(2,bitSize);
    }
    modbus.result.arr[j].value = val.toString();
  }
}

function intToByte(modbus){
  var byte_arr = [];
  for(var j = 0; j < modbus.input.numReg/2; j++){
    byte_arr.push(modbus.result.arr[j].value >> 8 & 0xff);
    byte_arr.push(modbus.result.arr[j].value & 0xff);
  }
  for(var j = 0; j < byte_arr.length; j++) {
    modbus.result.arr[j].value = byte_arr[j];
  }
}

function byteToInt(modbus){ // 0 494 511 511 511 => 0 0 1 238 1 255 1 255 1 255
  for(var i = 0; i < byte_arr.length; i = i + 2){
    var val1 = byte_arr[i]
    var val2 = byte_arr[i]
    modbus.result.arr[i/2] = val1 + val2;
  }
}

function intToHex(modbus){
  for(var j = 0; j < modbus.input.numReg; j++){
    val = parseInt(modbus.result.arr[j].value);
    val = decimalToHexString(val);
    var temp = val.length;
    for(var i = 0; i < 4 - temp; i++){
      console.log(i);
      val = '0' + val;
    }
    val = '0X' + val;
    modbus.result.arr[j].value = val.toString();
  }
}

var methods = {
  formatMod: function node(modbus){
      switch(modbus.input.format){
        case 'i':
          makeSignedInt(modbus,16);
          break;
        case 'I':
          //No Change, Correct Format
          break;
        //32 Bits!?
        case 'l':
          byteToInt(modbus);
          break;
        case 'L':
          break;
        case 'b':
          intToByte(modbus);
          break;
        case 'B':
          makeSignedInt(modbus);
          intToByte(modbus);
          break;
        case 'h':
          intToHex(modbus);
          break;
        //32 bits?
        case 'H':
          break;
        case 'f':
          break;
        case 'a':
          makeSignedInt(modbus);
          intToByte(modbus);
          for(var j = 0; j < modbus.input.numReg; j++){
            val = parseInt(modbus.result.arr[j].value);
            if(!val < 32 || !val > 126){
              val = String.fromCharCode(val);
            }
            modbus.result.arr[j].value = val.toString();
          }
          break;
      }
  }
};

exports.data = methods;
