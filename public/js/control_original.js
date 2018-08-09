var val = 0;
var num_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ']; // 1
var cursor_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'E', '+', '-', '.', ' ']; // 2
var yes_no_arr = ['Y', 'N']; // 3

function find_msg_b(i, j, k, findOptions){
  for(var index = 0; index < findOptions.length; index++ ){
    if(findOptions[index].key == i.toString() + j.toString() + k.toString()){
      val = index;
      break;
    }
  }
}

function find_index(keys){
  var index = 0;
  var char = keys.arr[keys.cursor_pos];
  for(index = 0; index < keys.arr.length; index++){
    if(cursor_arr[index] == keys.arr[keys.cursor_pos]) {
      break;
    }
  }
  console.log(index, cursor_arr[index], keys.arr[keys.cursor_pos]);

  return index;
}

// Menu setup

//Unicodes
var degree = '\xB0' + 'F';
var degreeC = '\xB0' + 'C';
var degreeR = '\xB0' + 'R';

//Output Menu
// 1 1 1
var meas_arr1 = {key: "191", index: 0, arr: ["Volume", "Mass", "None", "Total", "Density", "Press", "Temp"]};
// 1 2 1
var meas_arr2 = {key: "181", index: 0, arr: ["Volume", "Mass", "None", "Total", "Density", "Press", "Temp"]};
// 1 3 1
var meas_arr3 = {key: "171", index: 0, arr: ["Volume", "Mass", "None", "Total", "Density", "Press", "Temp"]};
// 1 4 2
var meas_arr4 = {key: "162", index: 0, arr: ["Volume", "Mass", "None", "Total", "Density", "Press", "Temp"]};
// 1 6 0
var mod_units = {key: "150", index: 0, arr: ["Internal", "Display"]};
// 1 5 0
var mod_order = {key: "140", index: 0, arr: ["0-1:2-3", "1-0:3-2", "2-3:0-1", "3-2:1-0"]};
// 1 7 0
var comm_pro = {key: "130", index: 0, arr: ["Modbus RTU None1", "Modbus RTU Even", "Modbus RTU Odd", "Modbus RTU None2"]};
//1 8 0
var baud_rate = {key: "120", index: 0, arr: ["9600", "4800", "2400", "1200", "115200", "57600", "38400", "19200"]};

//Alarms
//3 5 1
var meas_arr5 = {key: "351", index: 0, arr: ["Volume", "Temp", "Pressure", "Density", "Total", "None", "Mass", "Temp"]};
//3 5 2
var mode_arr = {key: "352", index: 0, arr: ["None", "High Alarm (>)", "Low Alarm (<)"]}
//3 4 1
var meas_arr6 = {key: "341", index: 0, arr: ["Volume", "Mass", "None", "Total", "Density", "Press", "Temp"]};
//3 4 2
var mode_arr1 = {key: "342", index: 0, arr: ["None", "High Alarm (>)", "Low Alarm (<)"]}
//3 3 1
var meas_arr7 = {key: "331", index: 0, arr: ["Volume", "Mass", "None", "Total", "Density", "Press", "Temp"]};
//3 3 2
var mode_arr2 = {key: "332", index: 0, arr: ["None", "High Alarm (>)", "Low Alarm (<)"]}
//3 1 0
var clear_alarm = {key: "310", index: 0, arr: ["NO", "YES"]};

//Total MENU
// 4 3 0
var totaling = {key: "430", index: 0, arr: ["Mass", "Volume", "Inactive"]};
// 4 1 0
var reset_tot = {key: "410", index: 0, arr: ["Yes", "No"]};

//Fluid MENU
//5 5 0
var flowing_fluids = {key: "551", index: 0, arr: ["Liquids", "Other Liquids", "Goyal-Dorais", "API 2540", "Nat Gas AGA8", "Real Gas", "Other Gas", "Liquified Gas", "Thermal Oil", "Ethylene Glycol", "Other Gas"]};
  // Liquids
  // Other Liquids
  // Goyal Dorias
  // API 2540
  // API 2540
  // Nat Gas AGA8
  // Real Gas
  // Other Gas
  // Liquified Gas
  // Thermal Oil
  // Ethylene Glycol
  // Other Gas

//Units MENU
var date = moment().format('ll')
var time = moment().format('LTS')
//6 5 0
var temp_units = {key: "650", index: 0, arr: [degree, degreeC, "Kelvin", degreeR]};
//6 3 0
var pres_units = {key: "630", index: 0, arr: [degree, degreeC, "Kelvin", degreeR]};
//6 1 0
var diff_pres = {key: "610", index: 0, arr: ["mBar", "gm/cm2", "kg/cm2", "Pascal", "kiloPa", "MegaPa", "Torr", "4inH20", "4mmH20", "psi", "inH20", "ftH20", "mmH20", "inHG", "mmHG", "ATM", "Bar"]};
//6 2 0
var gage_pres = {key: "620", index: 0, arr: ["Absolute", "Gage"]};
//Diagnostics MENU
//8 1 0
var clear_sys = {key: "810", index: 0, arr: ["NO", "YES"]};

//Calibration MENU
//9 5 0
var met_size = {key: "950", index: 0, arr: ["1 inch", "1.5 inch", "2 inch", "3 inch", "4 inch", "6 inch", "8 inch", "10 inch", "12 inch", "1/4 inch", "3/8 inch", "1/2 inch", "3/4 inch"]};
//2 4 0
// var num = {key: "240", index: 0, arr: ["1", "2", "3", "4", "5"]};

var findOptions = [meas_arr1, meas_arr2, meas_arr3, meas_arr4, mod_units, mod_order, comm_pro, baud_rate, meas_arr5, mode_arr, meas_arr6, mode_arr1, meas_arr7, mode_arr2, clear_alarm,
totaling, reset_tot, flowing_fluids, temp_units, pres_units, diff_pres, gage_pres, clear_sys, met_size];

var num_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ']; // 1
var cursor_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'E', '+', '-', '.', ' ']; // 2
var yes_no_arr = ['Y', 'N']; // 3


var menu3 = [
  //Real Menus
  {name: "main_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "0.00", msg_b: "lb/h", enter: false, cursor: 0}]},
      {menu: [{msg_t: date, msg_b: time, enter: false, cursor: 0}]},
      {menu: [{msg_t: "Fluid", msg_b: "f000000", enter: false, cursor: 0}]},
      {menu: [{msg_t: "Total (Inactive)", msg_b: "000000000", enter: false, cursor: 0}]},
      {menu: [{msg_t: "62.35", msg_b: "lbm/ft3", enter: false, cursor: 0}]},
      {menu: [{msg_t: "Press 0.00", msg_b: degree + "(A)", enter: false, cursor: 0}]},
      {menu: [{msg_t: "Temp 59.00", msg_b: degree, enter: false, cursor: 0}]},
      {menu: [{msg_t: "0.00", msg_b: "gal/min", enter: false, cursor: 0}]},
    ]},
  {name: "output_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Output", msg_b: "Menu", enter: false, cursor: 0}]},
      {menu: [{msg_t: "Address", msg_b: "1", enter: true, cursor: 1, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}]},
      {menu: [{msg_t: "Baud Rate", msg_b: "9600", enter: true, cursor: 0}]},
      {menu: [{msg_t: "Comm Protocol", msg_b: "Modbus RTU None1", enter: true}]},
      {menu: [{msg_t: "Modbus Order", msg_b: "0-1:2-3", enter: true}]},
      {menu: [{msg_t: "Modbus Units", msg_b: "Display", enter: true, cursor: false}]},
      {menu: [{msg_t: "Scaled Frequency", msg_b: "More ->", enter: false, cursor: false},
              {msg_t: "<Max. Frequency>", msg_b: "10000", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
              {msg_t: "<Measure>", msg_b: "None", enter: true, cursor: 0},
              {msg_t: "<0HZ = <Default>>", msg_b: "0", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
              {msg_t: "<MaxHZ = <Default>>", msg_b: "0", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
              {msg_t: "<Time Const (Sec)", msg_b: "1", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}
             ]},
      {menu: [{msg_t: "4-20 mA Output 3", msg_b: "More ->", enter: false, cursor: false},
              {msg_t: "<Measure>", msg_b: "None", enter: true, cursor: 0},
              {msg_t: "<4mA = <Default>>", msg_b: "0", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
              {msg_t: "<20mA = <Default>>", msg_b: "44883.1", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
              {msg_t: "<Time Const (Sec)", msg_b: "1", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}
             ]},
      {menu: [{msg_t: "4-20 mA Output 2", msg_b: "More ->", enter: false, cursor: false},
              {msg_t: "<Measure>", msg_b: "None", enter: true, cursor: 0},
              {msg_t: "<4mA = <Default>>", msg_b: "0", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' ']},
              {msg_t: "<20mA = <Default>>", msg_b: "44883.1", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' ']},
              {msg_t: "<Time Const (Sec)", msg_b: "1", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ']}
             ]},
      {menu: [{msg_t: "4-20 mA Output 1", msg_b: "More ->", enter: false, cursor: 0},
              {msg_t: "<Measure>", msg_b: "Volume", enter: true, cursor: 0},
              {msg_t: "<4mA = gal/min>", msg_b: "0", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '5', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
              {msg_t: "<20mA = gal/min>", msg_b: "44883.1", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', '3', '4', '8', '8', '3', '.', '1', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
              {msg_t: "<Time Const (Sec)", msg_b: "1", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '3', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}
             ]},
    ]},
  {name: "display_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Display", msg_b: "MENU", enter: false, cursor: false}]},
      {menu: [{msg_t: "A1 A2 A3 F1 Dt", msg_b: "N N N Y Y", enter: true, cursor: 3, arr: ['N', 'N', 'N', 'Y', 'Y']}]},
      {menu: [{msg_t: "Mf Vf Te Pr De T", msg_b: "Y Y Y Y Y Y", enter: true, cursor: 3, arr: ['Y', 'Y', 'Y', 'Y', 'Y', 'Y']}]},
      {menu: [{msg_t: "Display TC(sec)", msg_b: "1", enter: true, cursor: 1, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' ']}]},
      {menu: [{msg_t: "Number of Digits", msg_b: "2", enter: true, cursor: 0}]},
      {menu: [{msg_t: "Cycle Time(Sec)", msg_b: "0", enter: true, cursor: 1, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' ']}]}
    ]},
  {name: "alarms_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Alarms", msg_b: "MENU", enter: false, cursor: false}]},
      {menu: [{msg_t: "Clear Alarm LOG", msg_b: "NO", enter: true, cursor: 0}]},
      {menu: [{msg_t: "Alarm LOG", msg_b: "0 Files (Enter)", enter: false, cursor: false}]},
      {menu: [{msg_t: "Relay Alarm 3", msg_b: "More ->", enter: false, cursor: false},
              {msg_t: "< Measure >", msg_b: "None", enter: true, cursor: 0},
              {msg_t: "< Mode >", msg_b: "None", enter: true, cursor: 0},
              {msg_t: "< < None < Default >", msg_b: "0", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' ']},
             ]},
      {menu: [{msg_t: "Relay Alarm 2", msg_b: "More ->", enter: false, cursor: false},
              {msg_t: "< Measure >", msg_b: "Mass", enter: true, cursor: 0},
              {msg_t: "< Mode >", msg_b: "None", enter: true, cursor: 0},
              {msg_t: "< < Mass > lb/hr", msg_b: "0", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' ']}
             ]},
      {menu: [{msg_t: "Relay Alarm 1", msg_b: "More ->", enter: false, cursor: false},
              {msg_t: "< Measure >", msg_b: "Mass", enter: true, cursor: 0},
              {msg_t: "< Mode >", msg_b: "None", enter: true, cursor: 0},
              {msg_t: "< < Mass > lb/hr", msg_b: "0", enter: false, cursor: false},
             ]}
    ]},
  {name: "total_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Totalizer", msg_b: "MENU", enter: false, cursor: false}]},
      {menu: [{msg_t: "Reset Total?", msg_b: "NO", enter: true, cursor: 0}]},
      {menu: [{msg_t: "Inactive/Pulse", msg_b: "1000", enter: false, cursor: false}]},
      {menu: [{msg_t: "Totaling", msg_b: "Inactive", enter: true, cursor: 0}]}
    ]},
  {name: "fluid_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Fluid", msg_b: "MENU", enter: false, cursor: false}]},
      {menu: [{msg_t: "NORM Press (kPA)", msg_b: "101", enter: false, cursor: false}]},
      {menu: [{msg_t: "NORM Temp " + degreeC, msg_b: "0", enter: false, cursor: false}]},
      {menu: [{msg_t: "STD Press(PSIA)", msg_b: "14.696", enter: false, cursor: false}]},
      {menu: [{msg_t: "STD Temp " + degree, msg_b: "59", enter: false, cursor: false}]},
      {menu: [{msg_t: "Flowing Fluid", msg_b: "Liquids ->", enter: true, cursor: 0},
              {msg_t: "< Liquid", msg_b: "fLiquids", enter: false, cursor: false},
             ]}
    ]},
  {name: "units_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Units", msg_b: "MENU", enter: false, cursor: false}]},
      {menu: [{msg_t: "Diff. Pressure", msg_b: "psi", enter: true, cursor: 0}]},
      {menu: [{msg_t: "Gage Pressure", msg_b: "Absolute", enter: true, cursor: 0}]},
      {menu: [{msg_t: "Pressure Unit", msg_b: degree, enter: true, cursor: 0}]},
      {menu: [{msg_t: "Density Unit", msg_b: "lbm/ft3", enter: false, cursor: false}]},
      {menu: [{msg_t: "Temperature Unit", msg_b: degree, enter: true, cursor: 0}]},
      {menu: [{msg_t: "Volume Flow Unit", msg_b: "gal/hr", enter: false, cursor: false}]},
      {menu: [{msg_t: "Mass Flow Unit", msg_b: "lb/hr", enter: false, cursor: false}]}
    ]},
  {name: "clock_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Time & Date Menu", msg_b: "MENU", enter: false, cursor: false}]},
      {menu: [{msg_t: "Set Date", msg_b: "07/30/18", enter: false, cursor: false}]},
      {menu: [{msg_t: "Set Time", msg_b: "08:53:58", enter: false, cursor: false}]}
    ]},
  {name: "diag_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Diagnostics", msg_b: "MENU", enter: false, cursor: false}]},
      {menu: [{msg_t: "Clear System LOG", msg_b: "NO", enter: true, cursor: 0}]},
      {menu: [{msg_t: "System LOG", msg_b: "0 Files (Enter)", enter: false, cursor: false}]},
      {menu: [{msg_t: "Lowest Int Temp", msg_b: "70", enter: false, cursor: false}]},
      {menu: [{msg_t: "Highest Int Temp", msg_b: "70", enter: false, cursor: false}]},
      {menu: [{msg_t: "Highest Pressure", msg_b: "561.224", enter: false, cursor: false}]},
      {menu: [{msg_t: "Highest Temp", msg_b: "258.265", enter: false, cursor: false}]},
      {menu: [{msg_t: "Highest Velocity", msg_b: "15.1416", enter: false, cursor: false}]},
      {menu: [{msg_t: "Sim Press (psia)", msg_b: "0", enter: false, cursor: false}]},
      {menu: [{msg_t: "Sim Temp (" + degree + ")", msg_b: "0", enter: false, cursor: false}]},
      {menu: [{msg_t: "Sim Vor Freq", msg_b: "0", enter: false, cursor: false}]}
    ]},
  {name: "cal_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Calibration", msg_b: "MENU", enter: false, cursor: false}]},
      {menu: [{msg_t: "Serial Number", msg_b: "123456", enter: false, cursor: false}]},
      {menu: [{msg_t: "Low Flow Cutoff", msg_b: "10", enter: false, cursor: false}]},
      {menu: [{msg_t: "Vortek Coef CK", msg_b: "5", enter: false, cursor: false}]},
      {menu: [{msg_t: "Meter Factor", msg_b: "269.159", enter: false, cursor: false}]},
      {menu: [{msg_t: "Meter Size", msg_b: "2 inch", enter: true, cursor: 0}]}
    ]},
  {name: "password_enter_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Password", msg_b: "MENU", enter: false, cursor: false}]},
      {menu: [{msg_t: "Set Password", msg_b: "1234", enter: false, cursor: false}]}
    ]}
]
// console.log(window.innerWidth);
var msg_t = "VorTek";
var msg_b = "Hit Enter";
var enterPress = 1;
if(window.innerWidth > 768){
  var w = 580;
  var h = 580;
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");
  context.lineWidth = 2;
  context.strokeStyle="#000000";
  //Main Circle
  context.fillStyle = "#D8D8D8";
  context.beginPath();
  context.arc(w/2, h/2, h/2 - 1,0,2*Math.PI);
  context.stroke();
  context.fill();

  // //Rectangle
  context.fillStyle = "#ACFA58";
  context.lineWidth = 10;
  context.strokeRect(70,215,440,110);
  context.fillRect(70,215,440,110);
  context.lineWidth = 2;

  var r = 36;
  var px = 44;
  var circles = {
    circle_one: {x: 150, y: 95},
    circle_two: {x: 290, y: 50},
    circle_three: {x: 430, y: 95},
    circle_four: {x: 150, y: 580 - 95},
    circle_five: {x: 290, y: 580 - 50},
    circle_six: {x: 430, y: 580 - 95}
  }

  //Line 1 LCD
  context.textAlign = 'center';
  context.fillStyle = "black";
  context.font =  px + "px sans-serif";
  context.fillText("VorTek", 290,260);

  //Line 2 LCD
  context.fillStyle = "black";
  context.font = px + "px sans-serif";
  context.fillText("Instruments, LLC",290,310);

  var i = 0, j = 0, k = 0;;
  window.onmousedown = function(e) {
      find_msg_b(i, j, k, findOptions); //Updates val
      var obj = findOptions[val];

      var ys = Math.round(window.scrollY);
      x = e.pageX - canvas.getBoundingClientRect().left;
      y = e.pageY - canvas.getBoundingClientRect().top;

      if(i == 0 && j == 1 && k == 0){
        // console.log("its date and time");
      }

  //////////////////////////////////////////////////////////////////////// Key Presses ////////////////////////////////////////////////////////////////////////
  var keys = menu3[i].menu[j].menu[k];
  if(keys.cursor == 2){
    var arr_index = find_index(keys);
  }

      //Key press Exit
      if (Math.sqrt((x-circles.circle_one.x)*(x-circles.circle_one.x) + (y-circles.circle_one.y - ys)*(y-circles.circle_one.y - ys)) < r) {
        if(enterPress == 1){
          if(i != 0){
            i = 0;
            j = 0;
            k = 0;
          }
        }
      }

      //Key press Up
      if (Math.sqrt((x-circles.circle_two.x)*(x-circles.circle_two.x) + (y-circles.circle_two.y - ys)*(y-circles.circle_two.y - ys)) < r) {
        if(enterPress == 1){
          if(!k > 0){
            if(j == menu3[i].menu.length - 1){
              j = 0;
            }
            else{
              j++;
            }
          }
        }
        else{
          if(menu3[i].menu[j].menu[k].cursor == 0){
            if(obj.index == obj.arr.length - 1){
                obj.index = 0;
            }
            else{
              obj.index++;
            }
            menu3[i].menu[j].menu[k].msg_b = obj.arr[obj.index];
          }

          else if(menu3[i].menu[j].menu[k].cursor == 2){
            console.log(menu3[i].menu[j].menu[k].arr);
          }
        }
      }

      //Key press Enter
      if (Math.sqrt((x-circles.circle_three.x)*(x-circles.circle_three.x) + (y-circles.circle_three.y - ys)*(y-circles.circle_three.y - ys)) < r) {
        //Detect if enter can be pressed, then change if it can and dont execute bottom else update bottom
        if(menu3[i].menu[j].menu[k].enter){
          enterPress = (-1) * enterPress; //Toggle an enter press
          context.fillStyle = "black";
          context.fillRect(70,215,300, 100);
        }
        else{
          j = 0;
          // console.log(i);
          if(i == 0){
            i++;
          }
        }
      }

      //Key press Left
      if (Math.sqrt((x-circles.circle_four.x)*(x-circles.circle_four.x) + (y-circles.circle_four.y - ys)*(y-circles.circle_four.y - ys)) < r) {
        if(enterPress == 1){
          if(i != 0){
            if(j == 0){
              if(menu3[i].menu[j].menu.length == 1){
                if(i == 1){
                  i = menu3.length - 1;
                }
                i--;
              }
            }
            if(menu3[i].menu[j].menu.length > 1){
              if(k == 0){
                k = menu3[i].menu[j].menu.length - 1;
              }
              k--;
            }
          }
        }
      }

      //Key press Down
      if (Math.sqrt((x-circles.circle_five.x)*(x-circles.circle_five.x) + (y-circles.circle_five.y - ys)*(y-circles.circle_five.y - ys)) < r) {
        if(enterPress == 1){
          if(!k > 0){
            if(j == 0){
              j = menu3[i].menu.length - 1;
            }
            else{
              j--;
            }
          }
        }
        else{
          if(findOptions[val].index == 0){
            findOptions[val].index = findOptions[val].arr.length - 1;
          }
          else{
            findOptions[val].index--;
          }
          menu3[i].menu[j].menu[k].msg_b = obj.arr[obj.index];
        }
      }

      //Key press Right
      if (Math.sqrt((x-circles.circle_six.x)*(x-circles.circle_six.x) + (y-circles.circle_six.y - ys)*(y-circles.circle_six.y - ys)) < r) {
        if(enterPress == 1){
          if(i != 0){
            if(j == 0){
              if(menu3[i].menu[j].menu.length == 1){
                if(i == menu3.length - 1){
                  i = 1;
                }
                else{
                  i++;
                }
              }
            }
            if(menu3[i].menu[j].menu.length > 1){
              if(k == menu3[i].menu[j].menu.length - 1){
                k = 0;
              }
              else{
                k++;
              }
            }
          }
        }
      }






  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      // //Rectangle
      context.fillStyle = "#ACFA58";
      context.fillRect(70,215,440,110);

      //Line 1 LCD
      context.fillStyle = "black";
      context.font = px + "px sans-serif";
      context.fillText(menu3[i].menu[j].menu[k].msg_t, 290,260);

      //Line 2 LCD
      context.fillStyle = "black";
      context.font = px + "px sans-serif";
      context.fillText(menu3[i].menu[j].menu[k].msg_b,290,310);

      if(enterPress == -1){
        context.fillStyle = "black";
        context.fillRect(165,319,250,3);
      }
  }

  // console.log("test")


  //Circle 1
  context.fillStyle = "#ffffff";
  context.beginPath();
  context.arc(circles.circle_one.x, circles.circle_one.y, r, 0, 2*Math.PI);
  context.stroke();
  context.fill();

  //Circle 2
  context.fillStyle = "#ffffff";
  context.beginPath();
  context.arc(circles.circle_two.x, circles.circle_two.y, r, 0, 2*Math.PI);
  context.stroke();
  context.fill();

  // //Circle 3
  context.fillStyle = "#ffffff";
  context.beginPath();
  context.arc(circles.circle_three.x, circles.circle_three.y, r, 0, 2*Math.PI);
  context.stroke();
  context.fill();

  // //Circle 4
  context.fillStyle = "#ffffff";
  context.beginPath();
  context.arc(circles.circle_four.x, circles.circle_four.y, r, 0, 2*Math.PI);
  context.stroke();
  context.fill();

  // //Circle 5
  context.fillStyle = "#ffffff";
  context.beginPath();
  context.arc(circles.circle_five.x,circles.circle_five.y, r, 0, 2*Math.PI);
  context.stroke();
  context.fill();

  // //Circle 6
  context.fillStyle = "#ffffff";
  context.beginPath();
  context.arc(circles.circle_six.x, circles.circle_six.y, r, 0, 2*Math.PI);
  context.stroke();
  context.fill();


  //Exit text
  context.textAlign = 'left';
  context.fillStyle = "black";
  context.font = "24px sans-serif";
  context.fillText("EXIT", 125, 163);

  //Enter text
  context.fillStyle = "black";
  context.font = "24px sans-serif";
  context.fillText("ENTER", 392, 163);

  base_image = new Image();
  base_image.src = '/images/vortek.png';
  var w = 700;
  var h = 314;
  context.drawImage(base_image, 196, 334, w/4, h/4);

  // context.beginPath();
  // canvas_arrow(context, 0, 0, 20, 20);
  // context.stroke();

  //center arrow top
  context.beginPath();
  context.moveTo(290, 100);
  context.lineTo(270, 130);
  context.moveTo(290, 100);
  context.lineTo(310, 130);
  context.lineTo(270,130);
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.fillRect(284,130,14,30);

  //center arrow bottom
  context.beginPath();
  context.moveTo(290, 480);
  context.lineTo(310, 450);
  context.moveTo(290, 480);
  context.lineTo(270, 450);
  context.lineTo(310, 450);
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.fillRect(282,420,14,30);

  //center arrow bottom left
  var y_start = 415;
  var x_start = 120;
  context.beginPath();
  context.moveTo(x_start,y_start);
  context.lineTo(x_start + 30, y_start + 20);
  context.moveTo(x_start,y_start);
  context.lineTo(x_start + 30, y_start - 20);
  context.lineTo(x_start + 30, y_start + 20);
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.fillRect(x_start + 30, y_start - 7,30,14);

  //center arrow bottom right
  var x_start = 580 - 151 + 30;
  context.beginPath();
  context.moveTo(x_start,y_start);
  context.lineTo(x_start - 30, y_start - 20);
  context.moveTo(x_start,y_start);
  context.lineTo(x_start - 30, y_start + 20);
  context.lineTo(x_start - 30, y_start - 20);
  context.fillStyle = "black";
  context.fill();
  context.fillRect(580 - 151 - 30,y_start - 7 ,30,14);
  context.stroke();

  context.textAlign = 'center';


  //Cursor characters

}

//Is Mobile
else{
  // console.log("mobile");
  var w = 300;
  var h = 300;
  var canvas = document.getElementById("canvasMobile");
  var context = canvas.getContext("2d");
  context.lineWidth = 2;
  context.strokeStyle="#000000";
  //Main Circle
  context.fillStyle = "#D8D8D8";
  context.beginPath();
  context.arc(w/2, h/2, h/2 - 1,0,2*Math.PI);
  context.stroke();
  context.fill();

  // // // //Rectangle
  context.fillStyle = "#ACFA58";
  context.lineWidth = 5;
  context.strokeRect(25,120,250,50);
  context.fillRect(25,120,250,50);
  context.lineWidth = 1;

  var r = 20;
  var px = 23;

  //Line 1 LCD
  context.textAlign = 'center';
  context.fillStyle = "black";
  context.font =  px + "px sans-serif";
  context.fillText("VorTek", 150,141);

  //Line 2 LCD
  context.fillStyle = "black";
  context.font = px + "px sans-serif";
  context.fillText("Instruments, LLC",150,141 + px + 2);
  //
  var i = 0, j = 0, k = 0;;
  window.onmousedown = function(e) {
      var ys = Math.round(window.scrollY);
      x = e.pageX - canvas.getBoundingClientRect().left;
      y = e.pageY - canvas.getBoundingClientRect().top;

      if(i == 0 && j == 1 && k == 0){
        // console.log("its date and time");
      }

  //////////////////////////////////////////////////////////////////////// Key Presses ////////////////////////////////////////////////////////////////////////

      //Key press Exit
      if (Math.sqrt((x-circles.circle_one.x)*(x-circles.circle_one.x) + (y-circles.circle_one.y - ys)*(y-circles.circle_one.y - ys)) < r) {
          if(i != 0){
            i = 0;
            j = 0;
            k = 0;
          }
      }

      //Key press Up
      if (Math.sqrt((x-circles.circle_two.x)*(x-circles.circle_two.x) + (y-circles.circle_two.y - ys)*(y-circles.circle_two.y - ys)) < r) {
        if(i == 0 || i == 1 || i == 2 || i == 3 || i == 4|| i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10){
          if(j == menu3[i].menu.length - 1){
            j = 0;
          }
          else{
            j++;
          }
        }
      }

      //Key press Enter
      if (Math.sqrt((x-circles.circle_three.x)*(x-circles.circle_three.x) + (y-circles.circle_three.y - ys)*(y-circles.circle_three.y - ys)) < r) {
        j = 0;
        // console.log(i);
        if(i == 0){
          i++;
        }
      }

      //Key press Left
      if (Math.sqrt((x-circles.circle_four.x)*(x-circles.circle_four.x) + (y-circles.circle_four.y - ys)*(y-circles.circle_four.y - ys)) < r) {
        if(i != 0){
          if(j == 0){
            if(menu3[i].menu[j].menu.length == 1){
              if(i == 1){
                i = menu3.length - 1;
              }
              i--;
            }
          }
          if(menu3[i].menu[j].menu.length > 1){
            if(k == 0){
              k = menu3[i].menu[j].menu.length - 1;
            }
            k--;
          }
        }
      }

      //Key press Down
      if (Math.sqrt((x-circles.circle_five.x)*(x-circles.circle_five.x) + (y-circles.circle_five.y - ys)*(y-circles.circle_five.y - ys)) < r) {
          if(i == 0 || i == 1 || i == 2 || i == 3 || i == 4|| i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10){
            if(j == 0){
              j = menu3[i].menu.length - 1;
            }
            else{
              j--;
            }
          }
      }

      //Key press Right
      if (Math.sqrt((x-circles.circle_six.x)*(x-circles.circle_six.x) + (y-circles.circle_six.y - ys)*(y-circles.circle_six.y - ys)) < r) {
        if(i != 0){
          if(j == 0){
            if(menu3[i].menu[j].menu.length == 1){
              if(i == menu3.length - 1){
                i = 1;
              }
              else{
                i++;
              }
            }
          }
          if(menu3[i].menu[j].menu.length > 1){
            if(k == menu3[i].menu[j].menu.length - 1){
              k = 0;
            }
            else{
              k++;
            }
          }
        }
      }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      if(i == 0 && j == 1 && k == 0){

      }

      // //Rectangle
      context.fillStyle = "#ACFA58";
      context.fillRect(25,120,250,50);

      //Line 1 LCD
      context.textAlign = 'center';
      context.fillStyle = "black";
      context.font = px + "px sans-serif";
      context.fillText(menu3[i].menu[j].menu[k].msg_t, 150,141);

      //Line 2 LCD
      context.fillStyle = "black";
      context.font = px + "px sans-serif";
      context.fillText(menu3[i].menu[j].menu[k].msg_b,150,141 + 2 + px);
  }

  // console.log("test")


  var circles = {
    circle_one: {x: 80, y: 50},
    circle_two: {x: 150, y: 50 - r},
    circle_three: {x: 300 - 80, y: 50},
    circle_four: {x: 80, y: 300 - 50},
    circle_five: {x: 150, y: 300 - 50 + r},
    circle_six: {x: 300 - 80, y: 300 - 50}
  }

  //Circle 1
  context.fillStyle = "#ffffff";
  context.beginPath();
  context.arc(circles.circle_one.x, circles.circle_one.y, r, 0, 2*Math.PI);
  context.stroke();
  context.fill();

  // //Circle 2
  context.fillStyle = "#ffffff";
  context.beginPath();
  context.arc(circles.circle_two.x, circles.circle_two.y, r, 0, 2*Math.PI);
  context.stroke();
  context.fill();

  // //Circle 3
  context.fillStyle = "#ffffff";
  context.beginPath();
  context.arc(circles.circle_three.x, circles.circle_three.y, r, 0, 2*Math.PI);
  context.stroke();
  context.fill();

  // Circle 4
  context.fillStyle = "#ffffff";
  context.beginPath();
  context.arc(circles.circle_four.x, circles.circle_four.y, r, 0, 2*Math.PI);
  context.stroke();
  context.fill();

  // Circle 5
  context.fillStyle = "#ffffff";
  context.beginPath();
  context.arc(circles.circle_five.x,circles.circle_five.y, r, 0, 2*Math.PI);
  context.stroke();
  context.fill();

  // Circle 6
  context.fillStyle = "#ffffff";
  context.beginPath();
  context.arc(circles.circle_six.x, circles.circle_six.y, r, 0, 2*Math.PI);
  context.stroke();
  context.fill();

  //Exit text
  context.textAlign = 'left';
  context.fillStyle = "black";
  context.font = "14px sans-serif";
  context.fillText("EXIT", 66, 90);

  //Enter text
  context.fillStyle = "black";
  context.font = "14px sans-serif";
  context.fillText("ENTER", 198, 90);

  //Up text
  context.textAlign = 'left';
  context.fillStyle = "black";
  context.font = "14px sans-serif";
  context.fillText("UP", 140, 70);

  //Left text
  context.textAlign = 'left';
  context.fillStyle = "black";
  context.font = "14px sans-serif";
  context.fillText("LEFT", 63, 222);

  //Down text
  context.textAlign = 'left';
  context.fillStyle = "black";
  context.font = "14px sans-serif";
  context.fillText("DOWN", 128, 242);

  //Right text
  context.textAlign = 'left';
  context.fillStyle = "black";
  context.font = "14px sans-serif";
  context.fillText("RIGHT", 200, 222);



  base_image = new Image();
  base_image.src = '/images/vortek.png';
  var w = 700;
  var h = 314;
  context.drawImage(base_image, 110, 175, w/10, h/10);

}
