var Clock = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  $("#time").text(moment());
  $("#alarmForm").submit(function(event) {
    event.preventDefault();
    var newClock = new Clock();
    var userAlarm = $("#setAlarm").val();
    var countdown = setInterval(alarmTimer, 1000);
    function alarmTimer() {
      console.log(newClock.setAlarm(userAlarm));
      if (newClock.setAlarm(userAlarm) === true) {
        $("#output").html("wake up");
        clearInterval(countdown);
      }
    }
    $("#output").html(userAlarm);
  });
});
