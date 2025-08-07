Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function BasicToolTipEvent(t, n = null, i = false, a = false) {
    var s = e.call(this, t, i, a) || this;
    s.params = n;
    return s;
  }
  i.__extends(BasicToolTipEvent, e);
  BasicToolTipEvent.TOOLTIP_HIDE = "tooltiphide";
  return BasicToolTipEvent;
}(createjs.Event);
exports.BasicToolTipEvent = a;