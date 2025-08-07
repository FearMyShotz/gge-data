Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function OpenGateEvent(t, i = null, n = false, o = false) {
    var a = this;
    a.params = null;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(OpenGateEvent, e);
  OpenGateEvent.__initialize_static_members = function () {
    OpenGateEvent.CHANGE_OPEN_GATE_COUNTER = "changeOpenGateCounter";
    OpenGateEvent.OPEN_GATE_FINISHED = "finishedopengate";
    OpenGateEvent.OPEN_GATE_CHANGED = "changedopengate";
  };
  return OpenGateEvent;
}(createjs.Event);
exports.OpenGateEvent = o;
o.__initialize_static_members();