var date = moment().format('ll');
var time = moment().format('LTS');

function draw_circle(){
  context.lineWidth = 2;
  context.strokeStyle="#000000";

  //Main Circle
  context.fillStyle = "#D8D8D8";
  context.beginPath();
  context.arc(580/2, 580/2, 580/2 - 1,0,2*Math.PI);
  context.stroke();
  context.fill();

  // //Rectangle
  context.fillStyle = "#ACFA58";
  context.lineWidth = 10;
  context.strokeRect(70,215,440,110);
  context.fillRect(70,215,440,110);
  context.lineWidth = 2;

  //Line 1 LCD
  context.textAlign = 'center';
  context.fillStyle = "black";
  context.font =  px + "px sans-serif";
  context.fillText("VorTek", 290,260);

  //Line 2 LCD
  context.fillStyle = "black";
  context.font = px + "px sans-serif";
  context.fillText("Instruments, LLC",290,310);

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
}

function find_msg_b(i, j, k, findOptions){
  for(var index = 0; index < findOptions.length; index++ ){
    if(findOptions[index].key == i.toString() + j.toString() + k.toString()){
      val = index;
      break;
    }
  }
}

function find_index(keys, arr){
  var index = 0;
  var char = keys.arr[keys.cursor_pos];
  for(index = 0; index < keys.arr.length; index++){
    if(arr[index] == keys.arr[keys.cursor_pos]) {
      break;
    }
  }
  return index;
}

function draw_result(top, bottom, enterPress){
  // //Rectangle
  context.fillStyle = "#ACFA58";
  context.fillRect(70,215,440,110);

  //Line 1 LCD
  context.fillStyle = "black";
  context.font = px + "px sans-serif";
  context.fillText(top, 290,260);

  //Line 2 LCD
  context.fillStyle = "black";
  context.font = px + "px sans-serif";
  context.fillText(bottom,290,310);

  if(enterPress == -1){
    context.fillStyle = "black";
    context.fillRect(165,319,250,3);
  }
}

function update_time(){
  menu3[0].menu[1].menu[0].msg_t = moment().format('ll');
  menu3[0].menu[1].menu[0].msg_b = moment().format('LTS');
}

//Unicodes
var degree = '\xB0' + 'F';
var degreeC = '\xB0' + 'C';
var degreeR = '\xB0' + 'R';

var menu3 = [
  {name: "main_menu", hidden: false,
    menu: [
      //Good
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
      {menu: [{msg_t: "Output", msg_b: "MENU", enter: false, cursor: 0}]},
      {menu: [{msg_t: "Address", msg_b: "1", enter: true, cursor: 1, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}]},
      {menu: [{msg_t: "Baud Rate", msg_b: "9600", enter: true, cursor: 4}]},
      {menu: [{msg_t: "Comm Protocol", msg_b: "Modbus RTU None1", enter: true, cursor: 4}]},
      {menu: [{msg_t: "Modbus Order", msg_b: "0-1:2-3", enter: true, cursor: 4}]},
      {menu: [{msg_t: "Modbus Units", msg_b: "Display", enter: true, cursor: 4}]},
      {menu: [{msg_t: "Scaled Frequency", msg_b: "More ->", enter: false, cursor: 0},
              {msg_t: "<Max. Frequency>", msg_b: "10000", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
              {msg_t: "<Measure>", msg_b: "None", enter: true, cursor: 4},
              {msg_t: "<0HZ = <Default>>", msg_b: "0", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
              {msg_t: "<MaxHZ = <Default>>", msg_b: "0", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
              {msg_t: "<Time Const (Sec)", msg_b: "1", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}
             ]},
      {menu: [{msg_t: "4-20 mA Output 3", msg_b: "More ->", enter: false, cursor: 0},
              {msg_t: "<Measure>", msg_b: "None", enter: true, cursor: 4},
              {msg_t: "<4mA = <Default>>", msg_b: "0", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
              {msg_t: "<20mA = <Default>>", msg_b: "44883.1", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
              {msg_t: "<Time Const (Sec)", msg_b: "1", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}
             ]},
      {menu: [{msg_t: "4-20 mA Output 2", msg_b: "More ->", enter: false, cursor: 0},
              {msg_t: "<Measure>", msg_b: "None", enter: true, cursor: 4},
              {msg_t: "<4mA = <Default>>", msg_b: "0", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
              {msg_t: "<20mA = <Default>>", msg_b: "44883.1", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
              {msg_t: "<Time Const (Sec)", msg_b: "1", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}
             ]},
      {menu: [{msg_t: "4-20 mA Output 1", msg_b: "More ->", enter: false, cursor: 0},
              {msg_t: "<Measure>", msg_b: "Volume", enter: true, cursor: 4},
              {msg_t: "<4mA = gal/min>", msg_b: "0", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '5', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
              {msg_t: "<20mA = lb/hr>", msg_b: "44883.1", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', '3', '4', '8', '8', '3', '.', '1', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
              {msg_t: "<Time Const (Sec)", msg_b: "1", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '3', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}
             ]},
    ]},
  {name: "display_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Display", msg_b: "MENU", enter: false, cursor: 0}]},
      {menu: [{msg_t: "A1 A2 A3 F1 Dt", msg_b: "N N N Y Y", enter: true, cursor: 3, arr: ['N', 'N', 'N', 'Y', 'Y'], cursor_pos: 2}]},
      {menu: [{msg_t: "Mf Vf Te Pr De T", msg_b: "Y Y Y Y Y Y", enter: true, cursor: 3, arr: ['Y', 'Y', 'Y', 'Y', 'Y', 'Y'], cursor_pos: 2}]},
      {menu: [{msg_t: "Display TC(sec)", msg_b: "1", enter: true, cursor: 1, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}]},
      //TODO
      {menu: [{msg_t: "Number of Digits", msg_b: "2", enter: true, cursor: 4}]},
      {menu: [{msg_t: "Cycle Time(Sec)", msg_b: "0", enter: true, cursor: 1, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}]}
    ]},
  {name: "alarms_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Alarms", msg_b: "MENU", enter: false, cursor: 0}]},
      {menu: [{msg_t: "Clear Alarm LOG", msg_b: "NO", enter: true, cursor: 4}]},
      {menu: [{msg_t: "Alarm LOG", msg_b: "0 Files (Enter)", enter: false, cursor: 0}]},
      {menu: [{msg_t: "Relay Alarm 3", msg_b: "More ->", enter: false, cursor: 0},
              {msg_t: "< Measure >", msg_b: "None", enter: true, cursor: 4},
              {msg_t: "< Mode >", msg_b: "None", enter: true, cursor: 4},
              {msg_t: "< < None < Default >", msg_b: "0", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
             ]},
      {menu: [{msg_t: "Relay Alarm 2", msg_b: "More ->", enter: false, cursor: 0},
              {msg_t: "< Measure >", msg_b: "None", enter: true, cursor: 4},
              {msg_t: "< Mode >", msg_b: "None", enter: true, cursor: 4},
              {msg_t: "< < Mass > lb/hr", msg_b: "0", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}
             ]},
      {menu: [{msg_t: "Relay Alarm 1", msg_b: "More ->", enter: false, cursor: 0},
              {msg_t: "< Measure >", msg_b: "None", enter: true, cursor: 4},
              {msg_t: "< Mode >", msg_b: "None", enter: true, cursor: 4},
              {msg_t: "< < Mass > lb/hr", msg_b: "0", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8},
             ]}
    ]},
  {name: "total_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Totalizer", msg_b: "MENU", enter: false, cursor: 0}]},
      {menu: [{msg_t: "Reset Total?", msg_b: "NO", enter: true, cursor: 4}]},
      {menu: [{msg_t: "Inactive/Pulse", msg_b: "1000", cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}]},
      {menu: [{msg_t: "Totaling", msg_b: "Inactive", enter: true, cursor: 4}]}
    ]},
    //TODO
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
    //TODO
  {name: "units_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Units", msg_b: "MENU", enter: false, cursor: 0}]},
      {menu: [{msg_t: "Diff. Pressure", msg_b: "psi", enter: true, cursor: 4}]},
      {menu: [{msg_t: "Gage Pressure", msg_b: "Absolute", enter: true, cursor: 4}]},
      {menu: [{msg_t: "Pressure Unit", msg_b: degree, enter: true, cursor: 4}]},
      {menu: [{msg_t: "Density Unit", msg_b: "lbm/ft3", enter: true, cursor: 4}]},
      {menu: [{msg_t: "Temperature Unit", msg_b: degree, enter: true, cursor: 4}]},
      {menu: [{msg_t: "Volume Flow Unit", msg_b: "gal/hr", enter: true, cursor: 5, arr: ['gal', '/', 'hr'], cursor_pos: 0}]},
      {menu: [{msg_t: "Mass Flow Unit", msg_b: "lb/hr", enter: true, cursor: 5, arr: ['lb', '/', 'hr'], cursor_pos: 0}]}
    ]},
    //TODO
  {name: "clock_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Time & Date Menu", msg_b: "MENU", enter: false, cursor: false}]},
      {menu: [{msg_t: "Set Date", msg_b: "07/30/18", enter: true, cursor: 7, arr: [moment().format('MM'), '/', moment().format('DD'), '/', moment().format('YY')], cursor_pos: 0}]},
      {menu: [{msg_t: "Set Time", msg_b: "08:53:58", enter: true, cursor: 6, arr: [moment().format('hh'), ':', moment().format('mm'), ':', moment().format('ss'), ' ', moment().format('A')], cursor_pos: 0}]}
    ]},
  {name: "diag_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Diagnostics", msg_b: "MENU", enter: false, cursor: false}]},
      {menu: [{msg_t: "Clear System LOG", msg_b: "NO", enter: true, cursor: 4}]},
      {menu: [{msg_t: "System LOG", msg_b: "0 Files (Enter)", enter: false, cursor: false}]},
      {menu: [{msg_t: "Lowest Int Temp", msg_b: "70", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}]},
      {menu: [{msg_t: "Highest Int Temp", msg_b: "70", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}]},
      {menu: [{msg_t: "Highest Pressure", msg_b: "561.224", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}]},
      {menu: [{msg_t: "Highest Temp", msg_b: "258.265", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}]},
      {menu: [{msg_t: "Highest Velocity", msg_b: "15.1416", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}]},
      {menu: [{msg_t: "Sim Press (psia)", msg_b: "0", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}]},
      {menu: [{msg_t: "Sim Temp (" + degree + ")", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}]},
      {menu: [{msg_t: "Sim Vor Freq", msg_b: "0", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}]}
    ]},
  {name: "cal_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Calibration", msg_b: "MENU", enter: false, cursor: false}]},
      {menu: [{msg_t: "Serial Number", msg_b: "123456", enter: true, cursor: 1, arr: [' ', ' ', ' ', ' ', ' ', ' ', '1', '2', '3', '4', '5', '6', ' ', ' ', ' ', ' '], cursor_pos: 6}]},
      {menu: [{msg_t: "Low Flow Cutoff", msg_b: "10", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 7}]},
      {menu: [{msg_t: "Vortek Coef CK", msg_b: "5", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '7', ' ', ' ', ' ', ' ', ' ', ' ', ' '], cursor_pos: 8}]},
      {menu: [{msg_t: "Meter Factor", msg_b: "269.159", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', '2', '6', '9', '.', '1', '5', '9', ' ', ' ', ' ', ' '], cursor_pos: 5}]},
      {menu: [{msg_t: "Meter Size", msg_b: "2 inch", enter: true, cursor: 4}]}
    ]},
  {name: "password_enter_menu", hidden: false,
    menu: [
      {menu: [{msg_t: "Password", msg_b: "MENU", enter: false, cursor: false}]},
      {menu: [{msg_t: "Set Password", msg_b: "1234", enter: true, cursor: 2, arr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', '2', '3', '4', ' ', ' ', ' ', ' ', ' '], cursor_pos: 7}]}
    ]}
]


var val = 0;
var msg_t = "VorTek";
var msg_b = "Hit Enter";
var enterPress = 1;

//Unicodes
var degree = '\xB0' + 'F';
var degreeC = '\xB0' + 'C';
var degreeR = '\xB0' + 'R';

//Units Menu
var time_arr = {index: 0, arr: ['day', 'hr', 'min', 'sec']}
var mass_arr = {key: "670", index: 0, arr: ['kg', 'gram', 'Lton', 'Ston', 'lb', 'nm3', 'scf', 'Mton']};
var vol_arr = {key: "660", index: 0, arr: ['gal', 'ft3', 'm3', 'MilL', 'lit', 'bbl', 'ImpG', 'MilG']};
var num_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ']; // 1
var cursor_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'E', '+', '-', '.', ' ']; // 2
var yes_no_arr = ['Y', 'N']; // 3



//Output Menu
var meas_arr1 = {key: "191", index: 0, arr: ["Volume", "Mass", "None", "Total", "Density", "Press", "Temp"]};
var meas_arr2 = {key: "181", index: 0, arr: ["Volume", "Mass", "None", "Total", "Density", "Press", "Temp"]};
var meas_arr3 = {key: "171", index: 0, arr: ["Volume", "Mass", "None", "Total", "Density", "Press", "Temp"]};
var meas_arr4 = {key: "162", index: 0, arr: ["Volume", "Mass", "None", "Total", "Density", "Press", "Temp"]};
var mod_units = {key: "150", index: 0, arr: ["Internal", "Display"]};
var mod_order = {key: "140", index: 0, arr: ["0-1:2-3", "1-0:3-2", "2-3:0-1", "3-2:1-0"]};
var comm_pro = {key: "130", index: 0, arr: ["Modbus RTU None1", "Modbus RTU Even", "Modbus RTU Odd", "Modbus RTU None2"]};
var baud_rate = {key: "120", index: 0, arr: ["9600", "4800", "2400", "1200", "115200", "57600", "38400", "19200"]};
var meas_arr5 = {key: "351", index: 0, arr: ["Volume", "Mass", "None", "Total", "Density", "Press", "Temp"]};
var mode_arr = {key: "352", index: 0, arr: ["None", "High Alarm (>)", "Low Alarm (<)"]}
var meas_arr6 = {key: "341", index: 0, arr: ["Volume", "Mass", "None", "Total", "Density", "Press", "Temp"]};
var mode_arr1 = {key: "342", index: 0, arr: ["None", "High Alarm (>)", "Low Alarm (<)"]}
var meas_arr7 = {key: "331", index: 0, arr: ["Volume", "Mass", "None", "Total", "Density", "Press", "Temp"]};
var mode_arr2 = {key: "332", index: 0, arr: ["None", "High Alarm (>)", "Low Alarm (<)"]}
var clear_alarm = {key: "310", index: 0, arr: ["NO", "YES"]};
var totaling = {key: "430", index: 0, arr: ["Mass", "Inactive", "Volume"]};
var reset_tot = {key: "410", index: 0, arr: ["YES", "NO"]};
var flowing_fluids = {key: "551", index: 0, arr: ["Liquids", "Other Liquids", "Goyal-Dorais", "API 2540", "Nat Gas AGA8", "Real Gas", "Other Gas", "Liquified Gas", "Thermal Oil", "Ethylene Glycol", "Other Gas"]};
var temp_units = {key: "650", index: 0, arr: [degree, degreeR, "Kelvin", degreeC]};
var pres_units = {key: "630", index: 0, arr: ["mBar", "Bar", "ATM", "mmHg", "inHg", "mmH2O", "ftH20", "inH20", "psi", "4mmH20", "4inH20", "Torr", "MegaPa", "kiloPa", "Pascal", "kg/cm2", "gm/cm2"]};
var diff_pres = {key: "610", index: 0, arr: ["mBar", "Bar", "ATM", "mmHg", "inHg", "mmH2O", "ftH20", "inH20", "psi", "4mmH20", "4inH20", "Torr", "MegaPa", "kiloPa", "Pascal", "kg/cm2", "gm/cm2"]};
var gage_pres = {key: "620", index: 0, arr: ["Absolute", "Gage"]};
var clear_sys = {key: "810", index: 0, arr: ["NO", "YES"]};
var met_size = {key: "950", index: 0, arr: ["1 inch", "1.5 inch", "2 inch", "3 inch", "4 inch", "6 inch", "8 inch", "10 inch", "12 inch", "1/4 inch", "3/8 inch", "1/2 inch", "3/4 inch"]};
var array_of_1_5 = {key: "240", index: 0, arr: ["1", "2", "3", "4", "5"]};
var density = {key: "640", index: 0, arr: ["lbm/ft3", "kg/m3", "gm/cc", "lbm/gal", "gm/mlit", "kg/lit", "gm/lit", "lbm/in3"]};

var findOptions = [meas_arr1, meas_arr2, meas_arr3, meas_arr4, mod_units, mod_order, comm_pro, baud_rate, meas_arr5, mode_arr, meas_arr6, mode_arr1, meas_arr7, mode_arr2, clear_alarm,
totaling, reset_tot, flowing_fluids, temp_units, pres_units, diff_pres, gage_pres, clear_sys, met_size, array_of_1_5, density];


if(window.innerWidth > 768){
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");
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

  var i = 0, j = 0, k = 0;
  window.onmousedown = function(e) {

      update_time(menu3);
      find_msg_b(i, j, k, findOptions); //Updates val

      var obj = findOptions[val];
      var ys = Math.round(window.scrollY);
      var keys = menu3[i].menu[j].menu[k];
      var up = 0, down = 0, left = 0, right = 0, enter = 0, exit = 0, arr_str = '0';

      x = e.pageX - canvas.getBoundingClientRect().left;
      y = e.pageY - canvas.getBoundingClientRect().top;

      if (Math.sqrt((x-circles.circle_one.x)*(x-circles.circle_one.x) + (y-circles.circle_one.y - ys)*(y-circles.circle_one.y - ys)) < r) { exit = 1; }
      if (Math.sqrt((x-circles.circle_two.x)*(x-circles.circle_two.x) + (y-circles.circle_two.y - ys)*(y-circles.circle_two.y - ys)) < r) { up = 1; }
      if (Math.sqrt((x-circles.circle_three.x)*(x-circles.circle_three.x) + (y-circles.circle_three.y - ys)*(y-circles.circle_three.y - ys)) < r) { enter = 1; }
      if (Math.sqrt((x-circles.circle_four.x)*(x-circles.circle_four.x) + (y-circles.circle_four.y - ys)*(y-circles.circle_four.y - ys)) < r) { left = 1; }
      if (Math.sqrt((x-circles.circle_five.x)*(x-circles.circle_five.x) + (y-circles.circle_five.y - ys)*(y-circles.circle_five.y - ys)) < r) { down = 1; }
      if (Math.sqrt((x-circles.circle_six.x)*(x-circles.circle_six.x) + (y-circles.circle_six.y - ys)*(y-circles.circle_six.y - ys)) < r) { right = 1; }

      if(keys.cursor == 1 || keys.cursor == 2 || keys.cursor == 3){
        var arr = [];
        var cursor_2_obj = {};
        if(keys.cursor == 1){
          arr = num_arr;
        }
        else if(keys.cursor == 2){
          arr = cursor_arr;
        }
        else if(keys.cursor == 3){
          arr = yes_no_arr;
        }
        else if(keys.cursor = 5){

        }
        var num = find_index(keys, arr);
      }

      if(up){
        if(enterPress == -1){
          if(keys.cursor == 4){
            if(obj.index == obj.arr.length - 1){
                obj.index = 0;
            }
            else{
              obj.index++;
            }
            keys.msg_b = obj.arr[obj.index];
          }
          else if(keys.cursor == 1 || keys.cursor == 2 || keys.cursor == 3){
            if(num == arr.length - 1){
              num = 0;
            }
            else{
              num++;
            }
            keys.arr[keys.cursor_pos] = arr[num];
            console.log(keys.arr[keys.cursor_pos]);
          }
          else if(keys.cursor = 5){

          }
        }

        //dont touch
        else{
          if(!k > 0){
            if(j == menu3[i].menu.length - 1){
              j = 0;
            }
            else{
              j++;
            }
          }
        }
      }


      if(down){

        if(enterPress == -1){
          if(keys.cursor == 4){
            if(findOptions[val].index == 0){
              findOptions[val].index = findOptions[val].arr.length - 1;
            }
            else{
              findOptions[val].index--;
            }
            keys.msg_b = obj.arr[obj.index];
          }

          else if(keys.cursor == 1 || keys.cursor == 2 || keys.cursor == 3){
            if(num == 0){
              num = arr.length - 1;
            }
            else{
              num--;
            }
            keys.arr[keys.cursor_pos] = arr[num];
            console.log(keys.arr[keys.cursor_pos]);
          }
          else if(keys.cursor = 5){

          }
        }

        else{
          if(!k > 0){
            if(j == 0){
              j = menu3[i].menu.length - 1;
            }
            else{
              j--;
            }
          }
        }
      }


      if(left){
        //Enter not pressed
        if(enterPress == -1){
          if(keys.cursor == 1 || keys.cursor == 2 || keys.cursor == 3){
            if(keys.cursor_pos == 0){
              keys.cursor_pos = keys.arr.length - 1;
            }
            else{
              keys.cursor_pos--;
            }
          }
          else if(keys.cursor = 5){

          }
        }
        else{
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


      if(right){
        //Enter not pressed
        if(enterPress == -1){
          if(keys.cursor == 1 || keys.cursor == 2 || keys.cursor == 3){
            if(keys.cursor_pos == keys.arr.length - 1){
              keys.cursor_pos = 0;
            }
            else{
              keys.cursor_pos++;
            }
          }
          else if(keys.cursor = 5){

          }
        }
        else{
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


      if(exit){
        //Enter not pressed
        if(enterPress == -1){

        }

        else{
          if(i != 0){
            i = 0;
            j = 0;
            k = 0;
          }
        }
      }

      if(enter){
        //Detect if enter can be pressed, then change if it can and dont execute bottom else update bottom
        console.log(menu3[i].menu[j].menu[k]);
        if(menu3[i].menu[j].menu[k].cursor == 4 || menu3[i].menu[j].menu[k].cursor == 1 || menu3[i].menu[j].menu[k].cursor == 2 || menu3[i].menu[j].menu[k].cursor == 3 || menu3[i].menu[j].menu[k].cursor == 5 || menu3[i].menu[j].menu[k].cursor == 6 || menu3[i].menu[j].menu[k].cursor == 7){
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

      if(menu3[i].menu[j].menu[k].cursor == 1  || menu3[i].menu[j].menu[k].cursor == 2 || menu3[i].menu[j].menu[k].cursor == 3 || menu3[i].menu[j].menu[k].cursor == 6 || menu3[i].menu[j].menu[k].cursor == 7) {
        arr_str = menu3[i].menu[j].menu[k].arr.join('');
        menu3[i].menu[j].menu[k].msg_b = arr_str;
      }

      console.log(i, j, k, menu3[i].menu[j].menu[k]);
      draw_result(menu3[i].menu[j].menu[k].msg_t, menu3[i].menu[j].menu[k].msg_b, enterPress);
  }
  draw_circle();
}
