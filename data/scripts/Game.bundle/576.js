Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function VisualMapObjectEvent(t, i, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(VisualMapObjectEvent, e);
  VisualMapObjectEvent.__initialize_static_members = function () {
    VisualMapObjectEvent.VE_UPDATED = "veupdated";
    VisualMapObjectEvent.VE_MOVEMENT_REMOVED = "vemovementremoved";
  };
  return VisualMapObjectEvent;
}(createjs.Event);
exports.VisualMapObjectEvent = o;
o.__initialize_static_members();