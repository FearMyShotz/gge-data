Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function BasicComboboxEvent(t, n = 0, i = false, a = false, s = false) {
    var r = e.call(this, t, i, a) || this;
    r.state = 0;
    r.userHasSelected = false;
    r.state = n;
    r.userHasSelected = s;
    return r;
  }
  i.__extends(BasicComboboxEvent, e);
  BasicComboboxEvent.COMBOBOXCHANGE = "comboboxchange";
  BasicComboboxEvent.COMBOBOXSELECT = "comboboxselect";
  return BasicComboboxEvent;
}(createjs.Event);
exports.BasicComboboxEvent = a;