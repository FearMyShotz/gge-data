Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleResourceCollectorEvent(t, i = true, n = false) {
    var o = this;
    o.newValue = 0;
    CONSTRUCTOR_HACK;
    return o = e.call(this, t, i, n) || this;
  }
  n.__extends(CastleResourceCollectorEvent, e);
  CastleResourceCollectorEvent.__initialize_static_members = function () {
    CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY = "castleresourcecollectorvaluechange";
  };
  return CastleResourceCollectorEvent;
}(createjs.Event);
exports.CastleResourceCollectorEvent = o;
o.__initialize_static_members();