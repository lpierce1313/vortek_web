var dataCopy = [
  {key: 0, value: "Temperature", type: "Float", rw: "Read Only"},
  {key: 2, value: "Temperature 1", type: "Float", rw: "Read Only"},
  {key:4, value: "Pressure", type: "Float", rw: "Read Only"},
  {key:8, value: "Mass Flow", type: "Float", rw: "Read Only"},
  {key:10, value: "Energy Flow", type: "Float", rw: "Read Only"},
  {key:12, value: "Fluid Viscosity", type: "Float", rw: "Read Only"},
  {key:14, value: "Fluid Density", type: "Float", rw: "Read Only"},
  {key:16, value: "Fluid Enthalpy[0]", type: "Float", rw: "Read Only"},
  {key:18, value: "Fluid Enthalpy[1]", type: "Float", rw: "Read Only"},
  {key:20, value: "Standard Reference Density", type: "Float", rw: "Read Only"},
  {key:22, value: "Normal Reference Density", type: "Float", rw: "Read Only"},
  {key:24, value: "Frequency", type: "Float", rw: "Read Only"},
  {key:26, value: "Filter Frequency", type: "Float", rw: "Read Only"},
  {key:28, value: "Fluid Velocity", type: "Float", rw: "Read Only"},
  {key:30, value: "Reynolds Number", type: "Float", rw: "Read Only"},
  {key:32, value: "Temp Comp K Factor", type: "Float", rw: "Read Only"},
  {key:34, value: "RTD Resistance[0]", type: "Float", rw: "Read Only"},
  {key:36, value: "RTD Resistance[1]", type: "Float", rw: "Read Only"},
  {key:38, value: "Kc", type: "Float", rw: "Read Only"},
  {key:40, value: "R Total[0].fp", type: "Float", rw: "Read Only"},
  {key:42, value: "R Total[1].fp", type: "Float", rw: "Read Only"},
  {key:44, value: "R Total[2].fp", type: "Float", rw: "Read Only"},
  {key:46, value: "R Total[3].fp", type: "Float", rw: "Read Only"},
  {key:48, value: "NR Total[0].fp", type: "Float", rw: "Read Only"},
  {key:50, value: "NR Total[1].fp", type: "Float", rw: "Read Only"},
  {key:52, value: "NR Total[2].fp", type: "Float", rw: "Read Only"},
  {key:54, value: "NR Total[3].fp", type: "Float", rw: "Read Only"},
  {key:56, value: "Meter Profile Initial Base Kc", type: "Float", rw: "Read Only"},
  {key:58, value: "Placeholder", type: "Float", rw: "Read Only"},
  {key:60, value: "Placeholder", type: "Float", rw: "Read Only"},
  {key:62, value: "Placeholder", type: "Float", rw: "Read Only"},
  {key:64, value: "Placeholder", type: "Float", rw: "Read Only"},
  {key:66, value: "Meter Profile Base Re", type: "Float", rw: "Read Only"},
  {key:68, value: "Internal Temperature", type: "Float", rw: "Read Only"},
  {key:70, value: "Scaled Output Frequency", type: "Float", rw: "Read Only"},
  {key:72, value: "Max Velocity", type: "Float", rw: "Read Only"},
  // PAGE 2 41
  {key:74, value: "Max Temperature", type: "Float", rw: "Read Only"},
  {key:76, value: "Max Temperature 1", type: "Float", rw: "Read Only"},
  {key:78, value: "Max Pressure", type: "Float", rw: "Read Only"},
  {key:80, value: "Max Internal Temperature", type: "Float", rw: "Read Only"},
  {key:82, value: "Min Internal Temperature", type: "Float", rw: "Read Only"},
  {key:84, value: "V rms", type: "Float", rw: "Read Only"},
  {key:86, value: "Hourly Flow", type: "Float", rw: "Read Only"},
  {key:88, value: "Obscuration", type: "Float", rw: "Read Only"},
  {key:90, value: "Profile Factor", type: "Float", rw: "Read Only"},
  {key:92, value: "Insertion", type: "Float", rw: "Read Only"},
  {key:94, value: "Pipe Area", type: "Float", rw: "Read Only"},
  {key:96, value: "Glycol Weight %", type: "Float", rw: "Read Only"},
  {key:98, value: "Loop Milli-amps", type: "Float", rw: "Read Only"},
  {key:100, value: "Differential Pressure", type: "Float", rw: "Read Only"},
  {key:102, value: "Pressure Ve/Vp", type: "Float", rw: "Read Only"},
  {key:500, value: "R Total[0].ip", type: "Long", rw: "Read Only"},
  {key:502, value: "R Total[1].ip", type: "Long", rw: "Read Only"},
  {key:504, value: "R Total[2].ip", type: "Long", rw: "Read Only"},
  {key:506, value: "R Total[3].ip", type: "Long", rw: "Read Only"},
  {key:508, value: "NR Total[0].ip[0]", type: "Long", rw: "Read Only"},
  {key:510, value: "NR Total[0].ip[1]", type: "Long", rw: "Read Only"},
  {key:512, value: "NR Total[1].ip[0]", type: "Long", rw: "Read Only"},
  {key:514, value: "NR Total[1].ip[1]", type: "Long", rw: "Read Only"},
  {key:516, value: "NR Total[2].ip[0]", type: "Long", rw: "Read Only"},
  {key:518, value: "NR Total[2].ip[1]", type: "Long", rw: "Read Only"},
  {key:520, value: "NR Total[3].ip[0]", type: "Long", rw: "Read Only"},
  {key:522, value: "NR Total[3].ip[1]", type: "Long", rw: "Read Only"},
  {key:524, value: "Totalizer 1", type: "Long", rw: "Read Only"},
  {key:526, value: "Totalizer 2", type: "Long", rw: "Read Only"},
  {key:528, value: "External AD Counts", type: "Long", rw: "Read Only"},
  {key:1000, value: "Var Faults", type: "Short", rw: "Read Only"},
  {key:1001, value: "NVAR Faults", type: "Short", rw: "Read Only"},
  {key:1002, value: "AD Counts[0]", type: "Short", rw: "Read Only"},
  {key:1003, value: "AD Counts[1]", type: "Short", rw: "Read Only"},
  {key:1004, value: "AD Counts[2]", type: "Short", rw: "Read Only"},
  {key:1005, value: "AD Counts[3]", type: "Short", rw: "Read Only"},
  {key:1006, value: "Analog Out Counts 0", type: "Short", rw: "Read Only"},
  {key:1007, value: "Analog Out Counts 1", type: "Short", rw: "Read Only"},
  {key:1008, value: "Analog Out Counts 2", type: "Short", rw: "Read Only"},
  {key:1009, value: "Exceptions", type: "Short", rw: "Read Only"},
  {key:1010, value: "AD Counts[ADFILT]", type: "Short", rw: "Read Only"},
  {key:1011, value: "AD Counts[5]", type: "Short", rw: "Read Only"},
  {key:1012, value: "AD Counts[ADTEMP]", type: "Short", rw: "Read Only"},
  {key:1500, value: "Auto Filter", type: "Short(Byte)", rw: "Read Only"},
  {key:1501, value: "Total Log Entries 0", type: "Short(Byte)", rw: "Read Only"},
  {key:1502, value: "Total Log Entries 1", type: "Short(Byte)", rw: "Read Only"},
  {key:1503, value: "Total Log Entries 2", type: "Short(Byte)", rw: "Read Only"},
  // Page 3 42
  {key:1504, value: "Total Log Entries 3", type: "Short(Byte)", rw: "Read Only"},
  {key:1505, value: "Clock Year", type: "Short(Byte)", rw: "Read Only"},
  {key:1506, value: "Clock Month", type: "Short(Byte)", rw: "Read Only"},
  {key:1507, value: "Clock Day", type: "Short(Byte)", rw: "Read Only"},
  {key:1508, value: "Clock Hour", type: "Short(Byte)", rw: "Read Only"},
  {key:1509, value: "Clock Minute", type: "Short(Byte)", rw: "Read Only"},
  {key:1510, value: "Clock Second", type: "Short(Byte)", rw: "Read Only"},
  {key:1511, value: "Hardware Revision", type: "Short(Byte)", rw: "Read Only"},
  {key:1512, value: "Software Revision", type: "Short(Byte)", rw: "Read Only"},
  {key:1513, value: "Firmware Minor Revision", type: "Short(Byte)", rw: "Read Only"},
  {key:1514, value: "Signal Hardware", type: "Short(Byte)", rw: "Read Only"},
  {key:1515, value: "Signal Software", type: "Short(Byte)", rw: "Read Only"},
  {key:1516, value: "System Log Entries", type: "Short(Byte)", rw: "Read Only"},
  {key:1517, value: "Alarm Log Entries", type: "Short(Byte)", rw: "Read Only"},
  {key:1518, value: "Max System Records", type: "Short(Byte)", rw: "Read Only"},
  {key:1519, value: "Max Alarm Records", type: "Short(Byte)", rw: "Read Only"},
  {key:2000, value: "Mass Units", type: "ASCII", rw: "Read Only"},
  {key:2006, value: "Volume Units", type: "ASCII", rw: "Read Only"},
  {key:2012, value: "Energy Units", type: "ASCII", rw: "Read Only"},
  {key:2018, value: "Pressure Units", type: "ASCII", rw: "Read Only"},
  {key:2024, value: "Temperature Units", type: "ASCII", rw: "Read Only"},
  {key:2030, value: "Density Units", type: "ASCII", rw: "Read Only"},
  {key:2036, value: "Totalizer 1 Units", type: "ASCII", rw: "Read Only"},
  {key:2042, value: "Totalizer 2 Units", type: "ASCII", rw: "Read Only"},
  {key:2048, value: "Differential Pressure", type: "ASCII", rw: "Read Only"},
  {key:3000, value: "Simulated Vortex Frequency", type: "Float", rw: "Read and Write"},
  {key:3002, value: "Simulated Temperature 0", type: "Float", rw: "Read and Write"},
  {key:3004, value: "Simulated Temperature 1", type: "Float", rw: "Read and Write"},
  {key:3006, value: "Simulated Pressure", type: "Float", rw: "Read and Write"},
  {key:3008, value: "Insertion Pipe Diameter", type: "Float", rw: "Read and Write"},
  {key:3010, value: "Atmospheric Pressure", type: "Float", rw: "Read and Write"},
  {key:3012, value: "Other Liquid Density", type: "Float", rw: "Read and Write"},
  {key:3014, value: "Other Liquid AL", type: "Float", rw: "Read and Write"},
  {key:3016, value: "Other Liquid BL", type: "Float", rw: "Read and Write"},
  {key:3018, value: "Goyal Mole Weight", type: "Float", rw: "Read and Write"},
  {key:3020, value: "Goyal Critical Pressure", type: "Float", rw: "Read and Write"},
  {key:3022, value: "Goyal Critical Temperature", type: "Float", rw: "Read and Write"},
  {key:3024, value: "Goyal Critical Z", type: "Float", rw: "Read and Write"},
  {key:3026, value: "Goyal AL", type: "Float", rw: "Read and Write"},
  {key:3028, value: "Goyal BL", type: "Float", rw: "Read and Write"},
  {key:3030, value: "API Density", type: "Float", rw: "Read and Write"},
  {key:3032, value: "API K0", type: "Float", rw: "Read and Write"},
  {key:3034, value: "API K0", type: "Float", rw: "Read and Write"},
  {key:3036, value: "API AL", type: "Float", rw: "Read and Write"},
  // Page 4 45
  {key:3038, value: "API BL", type: "Float", rw: "Read and Write"},
  {key:3040, value: "Natural Gas SG", type: "Float", rw: "Read and Write"},
  {key:3042, value: "Natural Gas Mole Fract N2", type: "Float", rw: "Read and Write"},
  {key:3044, value: "Natural Gas Mole Fract CO2", type: "Float", rw: "Read and Write"},
  {key:3046, value: "Natural Gas Reference Temperature", type: "Float", rw: "Read and Write"},
  {key:3048, value: "Natural Gas Reference Pressure", type: "Float", rw: "Read and Write"},
  {key:3050, value: "Other Gas Specific Gravity", type: "Float", rw: "Read and Write"},
  {key:3052, value: "Other Gas Comp Z", type: "Float", rw: "Read and Write"},
  {key:3054, value: "Other Gas Viscosity", type: "Float", rw: "Read and Write"},
  {key:3056, value: "Fluid Standard Temperature", type: "Float", rw: "Read and Write"},
  {key:3058, value: "Fluid Standard Pressure", type: "Float", rw: "Read and Write"},
  {key:3060, value: "Fluid Normal Temperature", type: "Float", rw: "Read and Write"},
  {key:3062, value: "Fluid Normal Pressure", type: "Float", rw: "Read and Write"},
  {key:3064, value: "Alarm 0 Limit", type: "Float", rw: "Read and Write"},
  {key:3066, value: "Alarm 1 Limit", type: "Float", rw: "Read and Write"},
  {key:3068, value: "Alarm 2 Limit", type: "Float", rw: "Read and Write"},
  {key:3070, value: "Hart Variable [0] Lower Range", type: "Float", rw: "Read and Write"},
  {key:3072, value: "Hart Variable [0] Upper Range", type: "Float", rw: "Read and Write"},
  {key:3074, value: "Hart Variable [1] Lower Range", type: "Float", rw: "Read and Write"},
  {key:3076, value: "Hart Variable [1] Upper Range", type: "Float", rw: "Read and Write"},
  {key:3078, value: "Hart Variable [2] Lower Range", type: "Float", rw: "Read and Write"},
  {key:3080, value: "Hart Variable [2] Upper Range", type: "Float", rw: "Read and Write"},
  {key:3082, value: "Analog Output [0] Time Constant", type: "Float", rw: "Read and Write"},
  {key:3084, value: "Analog Output [1] Time Constant", type: "Float", rw: "Read and Write"},
  {key:3086, value: "Analog Output [2] Time Constant", type: "Float", rw: "Read and Write"},
  {key:3088, value: "Analog Alarm[0] Limit", type: "Float", rw: "Read and Write"},
  {key:3090, value: "Analog Alarm[1] Limit", type: "Float", rw: "Read and Write"},
  {key:3092, value: "Analog Alarm[2] Limit", type: "Float", rw: "Read and Write"},
  {key:3094, value: "Hart Variable [3] Lower Range", type: "Float", rw: "Read and Write"},
  {key:3096, value: "Hart Variable [3] Upper Range", type: "Float", rw: "Read and Write"},
  {key:3098, value: "Pulse Full Scale Frequency", type: "Float", rw: "Read and Write"},
  {key:3100, value: "Unit per Pulse", type: "Float", rw: "Read and Write"},
  {key:3102, value: "Analog Out[3] Scaled Frequency", type: "Float", rw: "Read and Write"},
  {key:3104, value: "Manual Filter Frequency", type: "Float", rw: "Read and Write"},
  {key:3106, value: "Flow Rate Adjustment Factor", type: "Float", rw: "Read and Write"},
  {key:3108, value: "Ext Loop Zero Scale", type: "Float", rw: "Read and Write"},
  {key:3110, value: "Ext Loop Full Scale", type: "Float", rw: "Read and Write"},
  {key:3112, value: "Roughness", type: "Float", rw: "Read and Write"},
  {key:3114, value: "Ethylene Glycol %", type: "Float", rw: "Read and Write"},
  {key:3116, value: "Steam Standard Temperature (F)", type: "Float", rw: "Read and Write"},
  {key:3118, value: "Steam Standard Pressure (psia)", type: "Float", rw: "Read and Write"},
  {key:3120, value: "Steam Normal Temperature ( C )", type: "Float", rw: "Read and Write"},
  {key:3122, value: "Steam Normal Pressure (kPa)", type: "Float", rw: "Read and Write"},
  {key:3124, value: "Percent Mass Returned", type: "Float", rw: "Read and Write"},
  {key:3126, value: "Minimum Delta H", type: "Float", rw: "Read and Write"},
  {key:3500, value: "User Password", type: "Long", rw: "Read and Write"},
  {key:3502, value: "Super Password", type: "Long", rw: "Read and Write"},
  {key:3504, value: "Display Menus", type: "Long", rw: "Read and Write"},
  // Page 5 43
  {key:3506, value: "Display Init Time", type: "Long", rw: "Read and Write"},
  {key:3508, value: "Modbus RTC Time", type: "Long", rw: "Read and Write"},
  {key:3510, value: "Modbus RTC Date", type: "Long", rw: "Read and Write"},
  {key:4000, value: "Conversion Temperature", type: "Byte", rw: "Read and Write"},
  {key:4001, value: "Conversion Pressure", type: "Byte", rw: "Read and Write"},
  {key:4002, value: "Conversion Volume", type: "Byte", rw: "Read and Write"},
  {key:4003, value: "Conversion Mass", type: "Byte", rw: "Read and Write"},
  {key:4004, value: "Conversion Energy", type: "Byte", rw: "Read and Write"},
  {key:4005, value: "Conversion Density", type: "Byte", rw: "Read and Write"},
  {key:4006, value: "Differential Pressure Units", type: "Byte", rw: "Read and Write"},
  {key:4500, value: "Fluid Type", type: "Byte", rw: "Read and Write"},
  {key:4501, value: "Real Liquid Type", type: "Byte", rw: "Read and Write"},
  {key:4502, value: "Real Gas Type", type: "Byte", rw: "Read and Write"},
  {key:4503, value: "Alarm [0] Assign", type: "Byte", rw: "Read and Write"},
  {key:4504, value: "Alarm [0] Mode", type: "Byte", rw: "Read and Write"},
  {key:4505, value: "Alarm [1] Assign", type: "Byte", rw: "Read and Write"},
  {key:4506, value: "Alarm [1] Mode", type: "Byte", rw: "Read and Write"},
  {key:4507, value: "Alarm [2] Assign", type: "Byte", rw: "Read and Write"},
  {key:4508, value: "Alarm [2] Mode", type: "Byte", rw: "Read and Write"},
  {key:4509, value: "Analog Out [0] Assign", type: "Byte", rw: "Read and Write"},
  {key:4510, value: "Analog Out [1] Assign", type: "Byte", rw: "Read and Write"},
  {key:4511, value: "Analog Out [2] Assign", type: "Byte", rw: "Read and Write"},
  {key:4512, value: "Analog Alarm[0] Assign", type: "Byte", rw: "Read and Write"},
  {key:4513, value: "Analog Alarm[0] Mode", type: "Byte", rw: "Read and Write"},
  {key:4514, value: "Analog Alarm[1] Assign", type: "Byte", rw: "Read and Write"},
  {key:4515, value: "Analog Alarm[1] Mode", type: "Byte", rw: "Read and Write"},
  {key:4516, value: "Analog Alarm[2] Assign", type: "Byte", rw: "Read and Write"},
  {key:4517, value: "Analog Alarm[2] Mode", type: "Byte", rw: "Read and Write"},
  {key:4518, value: "Analog Out Fault Enable", type: "Byte", rw: "Read and Write"},
  {key:4519, value: "Pulse Assign", type: "Byte", rw: "Read and Write"},
  {key:4520, value: "Analog Out [3] Assign", type: "Byte", rw: "Read and Write"},
  {key:4521, value: "Modbus Baud Rate Index", type: "Byte", rw: "Read and Write"},
  {key:4522, value: "Modbus Address", type: "Byte", rw: "Read and Write"},
  {key:4523, value: "Modbus Protocol", type: "Byte", rw: "Read and Write"},
  {key:4524, value: "Modbus Register Order", type: "Byte", rw: "Read and Write"},
  {key:4525, value: "Modbus Units", type: "Byte", rw: "Read and Write"},
  {key:4526, value: "Display Scan Time", type: "Byte", rw: "Read and Write"},
  {key:4527, value: "Display Precision", type: "Byte", rw: "Read and Write"},
  {key:4528, value: "Display Smoothing TC", type: "Byte", rw: "Read and Write"},
  {key:4529, value: "Mass Flow Scaling", type: "Byte", rw: "Read and Write"},
  {key:4530, value: "Volume Flow Scaling", type: "Byte", rw: "Read and Write"},
  {key:4531, value: "Current Gain", type: "Byte", rw: "Read and Write"},
  {key:4532, value: "Total 1 Assign", type: "Byte", rw: "Read and Write"},
  {key:4533, value: "Total 2 Assign", type: "Byte", rw: "Read and Write"},
  {key:4534, value: "Liquid Gas Type", type: "Byte", rw: "Read and Write"},
  {key:4535, value: "Thermal Oil Type", type: "Byte", rw: "Read and Write"},
  {key:4536, value: "External Loop", type: "Byte", rw: "Read and Write"},
  {key:4537, value: "Differential Pressure", type: "Byte", rw: "Read and Write"},
  {key:4538, value: "Energy Meter Supply", type: "Byte", rw: "Read and Write"},
  {key:4539, value: "Heating System", type: "Byte", rw: "Read and Write"},
  {key:4540, value: "Key Press 0-6", type: "Byte", rw: "Read and Write"},


  // Page 6 45
  {key:5000, value: "Meter Factor", type: "Float", rw: "Read and Write"},
  {key:5002, value: "Low Flow Cutoff", type: "Float", rw: "Read and Write"},
  {key:5004, value: "CK", type: "Float", rw: "Read and Write"},
  {key:5006, value: "A2D Ref Resistor", type: "Float", rw: "Read and Write"},
  {key:5008, value: "A2D P Cal Current", type: "Float", rw: "Read and Write"},
  {key:5010, value: "ADS1217TDalpha", type: "Float", rw: "Read and Write"},
  {key:5012, value: "B00", type: "Float", rw: "Read and Write"},
  {key:5014, value: "B01", type: "Float", rw: "Read and Write"},
  {key:5016, value: "B02", type: "Float", rw: "Read and Write"},
  {key:5018, value: "B10", type: "Float", rw: "Read and Write"},
  {key:5020, value: "B11", type: "Float", rw: "Read and Write"},
  {key:5022, value: "B12", type: "Float", rw: "Read and Write"},
  {key:5024, value: "B20", type: "Float", rw: "Read and Write"},
  {key:5026, value: "B21", type: "Float", rw: "Read and Write"},
  {key:5028, value: "B22", type: "Float", rw: "Read and Write"},
  {key:5030, value: "Temperature[0] RTD A", type: "Float", rw: "Read and Write"},
  {key:5032, value: "Temperature[0] RTD B", type: "Float", rw: "Read and Write"},
  {key:5034, value: "Temperature[0] RTD R0", type: "Float", rw: "Read and Write"},
  {key:5036, value: "Temperature[1] RTD A", type: "Float", rw: "Read and Write"},
  {key:5038, value: "Temperature[1] RTD B", type: "Float", rw: "Read and Write"},
  {key:5040, value: "Temperature[1] RTD R0", type: "Float", rw: "Read and Write"},
  {key:5042, value: "F/Velocity Re[0]", type: "Float", rw: "Read and Write"},
  {key:5044, value: "F/Velocity Kf[0]", type: "Float", rw: "Read and Write"},
  {key:5046, value: "F/Velocity Re[1]", type: "Float", rw: "Read and Write"},
  {key:5048, value: "F/Velocity Kf[1]", type: "Float", rw: "Read and Write"},
  {key:5050, value: "F/Velocity Re[2]", type: "Float", rw: "Read and Write"},
  {key:5052, value: "F/Velocity Kf[2]", type: "Float", rw: "Read and Write"},
  {key:5054, value: "F/Velocity Re[3]", type: "Float", rw: "Read and Write"},
  {key:5056, value: "F/Velocity Kf[3]", type: "Float", rw: "Read and Write"},
  {key:5058, value: "F/Velocity Re[4]", type: "Float", rw: "Read and Write"},
  {key:5060, value: "F/Velocity Kf[4]", type: "Float", rw: "Read and Write"},
  {key:5062, value: "F/Velocity Re[5]", type: "Float", rw: "Read and Write"},
  {key:5064, value: "F/Velocity Kf[5]", type: "Float", rw: "Read and Write"},
  {key:5066, value: "F/Velocity Re[6]", type: "Float", rw: "Read and Write"},
  {key:5068, value: "F/Velocity Kf[6]", type: "Float", rw: "Read and Write"},
  {key:5070, value: "F/Velocity Re[7]", type: "Float", rw: "Read and Write"},
  {key:5072, value: "F/Velocity Kf[7]", type: "Float", rw: "Read and Write"},
  {key:5074, value: "F/Velocity Re[8]", type: "Float", rw: "Read and Write"},
  {key:5076, value: "F/Velocity Kf[8]", type: "Float", rw: "Read and Write"},
  {key:5078, value: "F/Velocity Re[9]", type: "Float", rw: "Read and Write"},
  {key:5080, value: "F/Velocity Kf[9]", type: "Float", rw: "Read and Write"},
  {key:5082, value: "Insertion Head Diameter in Inch", type: "Float", rw: "Read and Write"},
  {key:5084, value: "New Base Kb", type: "Float", rw: "Read and Write"},
  {key:5086, value: "New Base Rb", type: "Float", rw: "Read and Write"},
  {key:5088, value: "Cal E", type: "Float", rw: "Read and Write"},
  {key:5090, value: "Cal At", type: "Float", rw: "Read and Write"},
  {key:5092, value: "Cal Cd", type: "Float", rw: "Read and Write"},
  {key:5094, value: "4-20 Channel 1 mA BaRb", type: "Float", rw: "Read and Write"},
  {key:5096, value: "4-20 Channel 2 mA", type: "Float", rw: "Read and Write"},
  {key:5098, value: "4-20 Channel 3 mA", type: "Float", rw: "Read and Write"},
  {key:5100, value: "Scaled Frequency Hz", type: "Float", rw: "Read and Write"},
  {key:5102, value: "Misc Re[0]", type: "Float", rw: "Read and Write"},
  {key:5104, value: "Misc Cd[0]", type: "Float", rw: "Read and Write"},
  {key:5106, value: "Misc Re[1]", type: "Float", rw: "Read and Write"},
  {key:5108, value: "Misc Cd[1]", type: "Float", rw: "Read and Write"},
  {key:5110, value: "Misc Re[2]", type: "Float", rw: "Read and Write"},
  {key:5112, value: "Misc Cd[2]", type: "Float", rw: "Read and Write"},
  {key:5114, value: "Misc Re[3]", type: "Float", rw: "Read and Write"},
  {key:5116, value: "Misc Cd[3]", type: "Float", rw: "Read and Write"},
  {key:5118, value: "Misc Re[4]", type: "Float", rw: "Read and Write"},
  {key:5120, value: "Misc Cd[4]", type: "Float", rw: "Read and Write"},
  {key:5122, value: "Misc Re[5]", type: "Float", rw: "Read and Write"},
  {key:5124, value: "Misc Cd[5]", type: "Float", rw: "Read and Write"},
  {key:5126, value: "Misc Re[6]", type: "Float", rw: "Read and Write"},
  {key:5128, value: "Misc Cd[6]", type: "Float", rw: "Read and Write"},
  {key:5130, value: "Misc Re[7]", type: "Float", rw: "Read and Write"},
  {key:5132, value: "Misc Cd[7]", type: "Float", rw: "Read and Write"},
  {key:5134, value: "Misc Re[8]", type: "Float", rw: "Read and Write"},
  {key:5136, value: "Misc Cd[8]", type: "Float", rw: "Read and Write"},
  {key:5138, value: "Misc Re[9]", type: "Float", rw: "Read and Write"},
  {key:5140, value: "Misc Cd[9]", type: "Float", rw: "Read and Write"},

  {key:5500, value: "External Zero Counts", type: "Long", rw: "Read and Write"},
  {key:5502, value: "External Span Counts", type: "Long", rw: "Read and Write"},


  {key:6000, value: "Analog Out[0] Zero Scale Count", type: "Short", rw: "Read and Write"},
  // Page 7 30
  {key:6001, value: "Analog Out[0] Full Scale Count", type: "Short", rw: "Read and Write"},
  {key:6002, value: "Analog Out[1] Zero Scale Count", type: "Short", rw: "Read and Write"},
  {key:6003, value: "Analog Out[1] Full Scale Count", type: "Short", rw: "Read and Write"},
  {key:6004, value: "Analog Out[2] Zero Scale Count", type: "Short", rw: "Read and Write"},
  {key:6005, value: "Analog Out[2] Full Scale Count", type: "Short", rw: "Read and Write"},
  // {key:6006, value: "Ext Zero Counts", type: "Short", rw: "Read and Write"},
  // {key:6007, value: "Ext Span Counts", type: "Short", rw: "Read and Write"},
  {key:6500, value: "Inline Meter Index", type: "Byte", rw: "Read and Write"},
  {key:6501, value: "Disable Reynolds", type: "Byte", rw: "Read and Write"},
  {key:65000, value: "Max Velocity", type: "Float", rw: "Read and Write"},
  {key:65002, value: "Max Temperature[0]", type: "Float", rw: "Read and Write"},
  {key:65004, value: "Max Temperature[1]", type: "Float", rw: "Read and Write"},
  {key:65006, value: "Max Pressure", type: "Float", rw: "Read and Write"},
  {key:65100, value: "Serial Number", type: "Long", rw: "Read and Write"},
  {key:65200, value: "Meter Define", type: "Short", rw: "Read and Write"},
  {key:65300, value: "Pressure Time Constant", type: "Char", rw: "Read and Write"},
  {key:65301, value: "Temperature Time Constant", type: "Char", rw: "Read and Write"},
  {key:65302, value: "Splash Screen", type: "Char", rw: "Read and Write"},
  {key:7000, value: "System Log Record 0", type: "String", rw: "Read and Write"},
  {key:7032, value: "System Log Record 1", type: "String", rw: "Read and Write"},
  {key:7064, value: "System Log Record 2", type: "String", rw: "Read and Write"},
  {key:7096, value: "System Log Record 3", type: "String", rw: "Read and Write"},
  {key:7128, value: "System Log Record 4", type: "String", rw: "Read and Write"},
  {key:7160, value: "System Log Record 5", type: "String", rw: "Read and Write"},
  {key:7192, value: "System Log Record 6", type: "String", rw: "Read and Write"},
  {key:7224, value: "System Log Record 7", type: "String", rw: "Read and Write"},
  {key:7256, value: "System Log Record 8", type: "String", rw: "Read and Write"},
  {key:7288, value: "System Log Record 9", type: "String", rw: "Read and Write"},
  {key:7320, value: "System Log Record 10", type: "String", rw: "Read and Write"},
  {key:7352, value: "System Log Record 11", type: "String", rw: "Read and Write"},
  // Page 8 25
  {key:7384, value: "System Log Record 12", type: "String", rw: "Read and Write"},
  {key:7416, value: "System Log Record 13", type: "String", rw: "Read and Write"},
  {key:7448, value: "System Log Record 14", type: "String", rw: "Read and Write"},
  {key:7480, value: "System Log Record 15", type: "String", rw: "Read and Write"},
  {key:7512, value: "System Log Record 16", type: "String", rw: "Read and Write"},
  {key:7544, value: "System Log Record 17", type: "String", rw: "Read and Write"},
  {key:7576, value: "System Log Record 18", type: "String", rw: "Read and Write"},
  {key:7608, value: "System Log Record 19", type: "String", rw: "Read and Write"},
  {key:7640, value: "System Log Record 20", type: "String", rw: "Read and Write"},
  {key:7672, value: "System Log Record 21", type: "String", rw: "Read and Write"},
  {key:7704, value: "System Log Record 22", type: "String", rw: "Read and Write"},
  {key:7736, value: "System Log Record 23", type: "String", rw: "Read and Write"},
  {key:7768, value: "System Log Record 24", type: "String", rw: "Read and Write"},
  {key:7800, value: "Alarm Log Record 0", type: "String", rw: "Read and Write"},
  {key:7832, value: "Alarm Log Record 1", type: "String", rw: "Read and Write"},
  {key:7864, value: "Alarm Log Record 2", type: "String", rw: "Read and Write"},
  {key:7896, value: "Alarm Log Record 3", type: "String", rw: "Read and Write"},
  {key:7928, value: "Alarm Log Record 4", type: "String", rw: "Read and Write"},
  {key:7960, value: "Alarm Log Record 5", type: "String", rw: "Read and Write"},
  {key:7992, value: "Alarm Log Record 6", type: "String", rw: "Read and Write"},
  {key:8024, value: "Alarm Log Record 7", type: "String", rw: "Read and Write"},
  {key:8056, value: "Alarm Log Record 8", type: "String", rw: "Read and Write"},
  {key:8088, value: "Alarm Log Record 9", type: "String", rw: "Read and Write"},
  {key:10000, value: "LCD String, Cursor State and Position", type: "String", rw: "Read and Write"},
]; //Long
var dataCoil = [
  {key: 0, value: "Volume Total"},
  {key: 1, value: "Mass Total"},
  {key: 2, value: "Forward Energy Total"},
  {key: 3, value: "Reverse Energy Total"},
  {key: 4, value: "Write CFG Data"},
  {key: 5, value: "Write Cal Data"},
  {key: 6, value: "Write Fact Data"},
  {key: 7, value: "Clear Exception Status"},
  {key: 8, value: "Reset Meter"},
  {key: 9, value: "Reset Totals"},
  {key: 10, value: "Clear Config Changed"},
  {key: 11, value: "Clear System Log"},
  {key: 12, value: "Clear Alarm Log"},
  {key: 13, value: "Clear Max Values"},
  {key: 14, value: "Init Variables"},
  {key: 15, value: "Set Defaults"},
  {key: 16, value: "Fix Current 1"},
  {key: 18, value: "Fix Current 2"},
  {key: 17, value: "Fix Current 3"},
  {key: 19, value: "Fix Current 4"},
  {key: 20, value: "Key Press"},
];
function decimalToHexString(number)
  {
    if (number < 0)
    {
      number = 0xFFFFFFFF + number + 1;
    }

    return number.toString(16).toUpperCase();
  }
var val = 0;

var methods = {
  findIndex: function node(val){
    for (var i=0; i < dataCopy.length; i++) {
        if (dataCopy[i].key === Number(val)) {
          return dataCopy[i];
        }
    }
  },
  findCoilIndex: function node(val){
    for (var i=0; i < dataCoil.length; i++) {
        if (dataCoil[i].key === Number(val)) {
          return dataCoil[i].value;
        }
    }
  },
  result: function getResult(modbus){

    //Vars
    var temp = [];
    modbus.result.arr = [];
    modbus.result.flag = 0;
    var i = 0;

    // console.log(modbus);
    temp = addon.modbus(modbus.input.comPort,modbus.input.parity,
      modbus.input.speed,modbus.input.code,modbus.input.unitAdd,modbus.input.startReg,
      modbus.input.numReg, modbus.input.format);

      //Convert to ascii if 'a'
      // if(modbus.input.format == 'a'){
      //   temp.forEach(function(val) {
      //     temp[i] = String.fromCharCode(val);
      //     i++;
      //   });
      // }

      //Test for ERROR
      if(temp.length === 1){
        if(modbus.input.format == 'a'){
          if(temp[0].length > 1){
            modbus.result.flag = 1;
          }
          else{
            modbus.result.flag = 0;
          }
        }
        else{
          if(isNaN(temp[0])){
            modbus.result.flag = 1;
          }
          else{
            modbus.result.flag = 0;
          }
        }
      }
      modbus.result.arr.push(0);
      if(!modbus.result.flag){
        for (var i=0; i < dataCopy.length; i++) {
            if (dataCopy[i].key === Number(modbus.input.startReg)) {
                for(var j = 0; j < modbus.input.numReg; j++){
                  modbus.result.arr[j] = {regLabel: dataCopy[i+j].value, regAdd: dataCopy[i+j].key, recType: dataCopy[i+j].type, rw: dataCopy[i+j].rw, value: temp[j]};
                }
            }
        }
      }
      else{
        modbus.result.arr[0] = { value: temp[0] };
      }

      //If float make it smaller
      var num, n, n1;
      if(modbus.input.format == 'f' && modbus.result.arr.length > 1){
        for(var i = 0; i < modbus.input.numReg; i++){
              num = parseFloat(modbus.result.arr[i].value);
                if(num > 10000 || num < -10000){
                  n1 = +num.toPrecision(2);
                  n = n1.toExponential();
                  num = n;
                }
                else{
                  n1 = num.toFixed(2);
                  num = n1;
                }
                modbus.result.arr[i].value = num;
        }
      }
      return modbus;
  },
  option: function checkOptional(modbus){
    console.log(modbus.input);
    //Decide which datatype was chosen
    switch (modbus.input.format){
      case 'a':
      modbus.input.dataType = "Ascii";
      break;
      case 'i':
      modbus.input.dataType = "Integer";
      break;
      case 'b':
      modbus.input.dataType = "Byte";
      break;
      case 'h':
      modbus.input.dataType = "Hex";
      break;
      case 'f':
      modbus.input.dataType = "Float";
      break;
    }

    //Deal with Hex
    if(modbus.input.format == 'h'){
      if(modbus.input.bit == 32){
        modbus.input.format = 'H';
      }
    }

    //Deal with byte
    if(modbus.input.format == 'b'){
      if(modbus.input.sign == 'u'){
        modbus.input.format = 'B';
      }
      else{
        modbus.input.format = 'b';
      }
    }

    //Deal with int
    if(modbus.input.format == 'i'){
      if(modbus.input.bit == 16){
        if(modbus.input.sign == 'u'){
          modbus.input.format = 'I';
        }
      }
      if(modbus.input.bit == 32){
        if(modbus.input.sign == 'u'){
          modbus.input.format = 'L';
        }
        else{
          modbus.input.format = 'l';
        }
      }
    }
    return modbus;
  },
  search: function searchFunction(){},
  dataSet: function setData(){
    return dataCopy;
  },
  dataCoilSet: function setCoil(){
    return dataCoil;
  }
};

exports.data = methods;
