Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClientConstTime() {}
  ClientConstTime.isOneDay = function (e) {
    return e / ClientConstTime.SECONDS_PER_DAY == 1;
  };
  ClientConstTime.isOneHour = function (e) {
    return e * ClientConstTime.SEC_2_HOURES == 1;
  };
  ClientConstTime.isOneMinute = function (e) {
    return e / ClientConstTime.SEC_2_MILLISEC == 1;
  };
  ClientConstTime.__initialize_static_members = function () {
    ClientConstTime.MILLISEC_2_SEC = 0.001;
    ClientConstTime.SEC_2_HOURES = 1 / 3600;
    ClientConstTime.SEC_2_MILLISEC = 1000;
    ClientConstTime.SIX_HOURS_2_MILLISEC = 21600000;
    ClientConstTime.DAYS_2_MILLISEC = 86400000;
    ClientConstTime.HOURES_2_SEC = 3600;
    ClientConstTime.MINUTES_2_MILLISEC = ClientConstTime.SEC_2_MILLISEC * 60;
    ClientConstTime.HOURES_2_MILLISEC = ClientConstTime.MINUTES_2_MILLISEC * 60;
    ClientConstTime.MINUTES_2_SEC = 60;
    ClientConstTime.SECONDS_PER_DAY = ClientConstTime.HOURES_2_SEC * 24;
    ClientConstTime.SECONDS_PER_YEAR = ClientConstTime.SECONDS_PER_DAY * 365;
    ClientConstTime.SECONDS_PER_FOUR_WEEKS = o.int(ClientConstTime.SECONDS_PER_DAY * 28);
    ClientConstTime.DEFAULT_ENABLE_BUTTON_WAIT_IN_SECONDS = 0.5;
  };
  return ClientConstTime;
}();
exports.ClientConstTime = n;
var o = require("./6.js");
n.__initialize_static_members();