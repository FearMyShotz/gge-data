Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function BasicFirstVisitEvent(t, n = false, i = false) {
    return e.call(this, t, n, i) || this;
  }
  i.__extends(BasicFirstVisitEvent, e);
  BasicFirstVisitEvent.AVATARCREATION_FINISHED = "avaFinished";
  return BasicFirstVisitEvent;
}(createjs.Event);
exports.BasicFirstVisitEvent = a;