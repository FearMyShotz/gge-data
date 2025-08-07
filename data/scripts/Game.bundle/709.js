Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleFightDataEvent(t, i = null, n = true, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(CastleFightDataEvent, e);
  CastleFightDataEvent.__initialize_static_members = function () {
    CastleFightDataEvent.NEW_TOOL_BOUGHT = "newtoolbought";
  };
  return CastleFightDataEvent;
}(createjs.Event);
exports.CastleFightDataEvent = o;
o.__initialize_static_members();