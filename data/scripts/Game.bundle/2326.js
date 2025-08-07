Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./8.js");
var s = require("./925.js");
var r = function (e) {
  function AutoSellDialogActiveStateCheckbox(t, i, n) {
    var o = this;
    o._row = -1;
    o._column = -1;
    CONSTRUCTOR_HACK;
    (o = e.call(this, t) || this)._row = i;
    o._column = n;
    return o;
  }
  n.__extends(AutoSellDialogActiveStateCheckbox, e);
  AutoSellDialogActiveStateCheckbox.prototype.onClick = function (t) {
    if (a.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (this.currentState) {
        case s.AAutoSellDialogCheckbox.STATE_UNSELECTED:
          this.setState(s.AAutoSellDialogCheckbox.STATE_SELECTED);
          break;
        case s.AAutoSellDialogCheckbox.STATE_SELECTED:
          this.setState(s.AAutoSellDialogCheckbox.STATE_UNSELECTED);
          break;
        case s.AAutoSellDialogCheckbox.STATE_MIXED:
          this.setState(s.AAutoSellDialogCheckbox.STATE_SELECTED);
      }
    }
  };
  Object.defineProperty(AutoSellDialogActiveStateCheckbox.prototype, "row", {
    get: function () {
      return this._row;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoSellDialogActiveStateCheckbox.prototype, "column", {
    get: function () {
      return this._column;
    },
    enumerable: true,
    configurable: true
  });
  return AutoSellDialogActiveStateCheckbox;
}(s.AAutoSellDialogCheckbox);
exports.AutoSellDialogActiveStateCheckbox = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");