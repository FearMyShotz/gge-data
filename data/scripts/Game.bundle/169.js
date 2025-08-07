Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function BasicPickerEvent(t, i = true, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(BasicPickerEvent, e);
  BasicPickerEvent.__initialize_static_members = function () {
    BasicPickerEvent.PICKER_CHANGE_VALUE = "pickerchangevalue";
    BasicPickerEvent.PICKER_CHANGE_VALUE_MAX_BLOCKED = "pickermaxblocked";
  };
  return BasicPickerEvent;
}(createjs.Event);
exports.BasicPickerEvent = o;
o.__initialize_static_members();