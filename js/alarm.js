function Clock(time) {
  this.time = time;
}

Clock.prototype.setAlarm = function(setAlarm) {
  var alarm = false;
  if((moment(this.time).format("HH:mm")) === setAlarm) {
    alarm = true;
  }
  return alarm;
};

exports.alarmModule = Clock;
