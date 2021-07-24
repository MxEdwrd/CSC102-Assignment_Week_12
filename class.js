function start() {
  console.log("Readout Started");
  document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
  index = 0;
  timer = setInterval(updateDisplay, time_interval);
  document.getElementById("startbutton").disabled = true;
  document.getElementById("stopbutton").disabled = false;
}
function stop() {
  console.log("Readout Stopped");
  document.getElementById("stopbutton").disabled = true;
  document.getElementById("startbutton").disabled = false;
  location.reload("index.html");
}
function getData() {
  var loadedData = loadData();
  return loadedData;
}
function dataRow(legend, value, units) {
  msg = "<td>";
  msg += legend;
  msg += ": </td><td>";
  msg += value;
  msg += " " + units;
  msg += "</td>";
  return msg;
}
class InputData {
  constructor(
    time_seconds,
    latitude,
    longitude,
    gps_altitude,
    bmpSensor_altitude,
    bmpSensor_pressure,
    bmpSensor_temp,
    digSensor_temp,
    cssSensor_temp,
    cssSensor_eCO2,
    cssSensor_TVOC,
    UV,
    accelX,
    accelY,
    accelZ,
    magnetX,
    magnetY,
    magnetZ,
    gyroX,
    gyroY,
    gyroZ
  ) {
    this.time_seconds = time_seconds;
    this.latitude = latitude;
    this.longitude = longitude;
    this.gps_altitude = gps_altitude;
    this.bmpSensor_altitude = bmpSensor_altitude;
    this.bmpSensor_pressure = bmpSensor_pressure;
    this.bmpSensor_temp = bmpSensor_temp;
    this.digSensor_temp = digSensor_temp;
    this.cssSensor_temp = cssSensor_temp;
    this.cssSensor_eCO2 = cssSensor_eCO2;
    this.cssSensor_TVOC = cssSensor_TVOC;
    this.UV = UV;
    this.accelX = accelX;
    this.accelY = accelY;
    this.accelZ = accelZ;
    this.magnetX = magnetX;
    this.magnetY = magnetY;
    this.magnetZ = magnetZ;
    this.gyroX = gyroX;
    this.gyroY = gyroY;
    this.gyroZ = gyroZ;
  }
}
