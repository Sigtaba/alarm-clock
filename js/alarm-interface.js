var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {
  $('#alarmForm').submit(function(event) {
    event.preventDefault();
    var hours = parseInt($('#hours').val());
    var minutes = parseInt($('#minutes').val());
    var alarmClock = new Alarm("alarm1");
    var time = alarmClock.currentTime(time);
  });
})
