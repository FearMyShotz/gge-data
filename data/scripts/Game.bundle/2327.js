Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./8.js");
var s = require("./925.js");
var r = function (e) {
  function AutoSellDialogSelectAllCheckbox(t) {
    return e.call(this, t) || this;
  }
  n.__extends(AutoSellDialogSelectAllCheckbox, e);
  AutoSellDialogSelectAllCheckbox.prototype.onClick = function (t) {
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
  return AutoSellDialogSelectAllCheckbox;
}(s.AAutoSellDialogCheckbox);
exports.AutoSellDialogSelectAllCheckbox = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");