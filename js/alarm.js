var Alarm = function() {
  this.time = moment();
  this.userAlarmTime = alarmTime;
};

Alarm.prototype.currentTime = function() {
  if (CurrentTime === userAlarmTime) {
    //add moment.js thing.
    console.log(this.time);
  }
};


exports.alarmModule = Alarm;
