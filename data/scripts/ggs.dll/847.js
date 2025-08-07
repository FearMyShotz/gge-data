Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function BasicUserEvent(t, n = null, i = false, a = false) {
    var s = e.call(this, t, i, a) || this;
    s.params = n;
    return s;
  }
  i.__extends(BasicUserEvent, e);
  BasicUserEvent.LOGGEDIN_TIME_INTERVAL = "loggedintimeinterval";
  BasicUserEvent.REGISTERED = "registered";
  return BasicUserEvent;
}(createjs.Event);
exports.BasicUserEvent = a;