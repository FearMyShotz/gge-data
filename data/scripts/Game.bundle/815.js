Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleArmyExternalDialog(t, i = null, n = null) {
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleArmyExternalDialog, e);
  CastleArmyExternalDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.lordTooltipTrigger = new r.LordEffectTooltipTrigger(this.dialogDisp.mc_lordHolder);
  };
  CastleArmyExternalDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.lordTooltipTrigger.show();
  };
  CastleArmyExternalDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.lordTooltipTrigger.hide();
    s.LordEffectHelper.hideToolTip();
  };
  return CastleArmyExternalDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleArmyExternalDialog = a;
var s = require("./133.js");
var r = require("./298.js");
o.classImplementsInterfaces(a, "ICollectableRendererList");