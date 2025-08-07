Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function VisualVOEvent(t, i = null, n = true, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(VisualVOEvent, e);
  VisualVOEvent.__initialize_static_members = function () {
    VisualVOEvent.VALUEOBJECT_CHANGE = "valueobjectchange";
  };
  return VisualVOEvent;
}(createjs.Event);
exports.VisualVOEvent = o;
o.__initialize_static_members();