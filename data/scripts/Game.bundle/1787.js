Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function DynamicTopXEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(DynamicTopXEvent, e);
  DynamicTopXEvent.__initialize_static_members = function () {
    DynamicTopXEvent.UPDATE_DYNAMIC_TOP_X = "update_dynamic_dop_x";
  };
  return DynamicTopXEvent;
}(createjs.Event);
exports.DynamicTopXEvent = o;
o.__initialize_static_members();