Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./8.js");
var s = function (e) {
  function CastleDelayedYesNoDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, new Library.CastleInterfaceElements.CastleStandardYesNo()) || this;
  }
  n.__extends(CastleDelayedYesNoDialog, e);
  CastleDelayedYesNoDialog.prototype.applyProperties = function () {
    e.prototype.applyProperties.call(this);
    a.ButtonHelper.delayEnableButton(this.standardDialog.btn_yes, true);
  };
  CastleDelayedYesNoDialog.prototype.onClick = function (t) {
    if (a.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
    }
  };
  CastleDelayedYesNoDialog.__initialize_static_members = function () {
    CastleDelayedYesNoDialog.NAME = "CastleDelayedYesNoDialog";
  };
  return CastleDelayedYesNoDialog;
}(require("./151.js").CastleStandardYesNoDialog);
exports.CastleDelayedYesNoDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();