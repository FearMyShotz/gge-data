Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function BasicBuildListEvent(t, i = true, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(BasicBuildListEvent, e);
  BasicBuildListEvent.__initialize_static_members = function () {
    BasicBuildListEvent.SELECTED_ITEM = "selectedItem";
  };
  return BasicBuildListEvent;
}(createjs.Event);
exports.BasicBuildListEvent = o;
o.__initialize_static_members();