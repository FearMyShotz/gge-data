Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./161.js");
var c = require("./15.js");
var u = require("./4.js");
var d = function (e) {
  function CastleAutoTutorialBlockerDialog() {
    return e.call(this, CastleAutoTutorialBlockerDialog.NAME) || this;
  }
  n.__extends(CastleAutoTutorialBlockerDialog, e);
  CastleAutoTutorialBlockerDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO(""));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_tempServer_buildingCastle_desc"));
    this.txt_progress = this.textFieldManager.registerTextField(this.dialogDisp.txt_progress, new s.LocalizedTextVO("value_percentage", [0]));
    c.CastleBasicController.getInstance().addEventListener(l.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
  };
  CastleAutoTutorialBlockerDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    c.CastleBasicController.getInstance().removeEventListener(l.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
  };
  CastleAutoTutorialBlockerDialog.prototype.onXPChanged = function (e) {
    var t = r.int(a.PlayerConst.getXPFromLevel(6));
    var i = r.int(u.CastleModel.userData.userXP);
    this.dialogDisp.mc_bar.scaleX = Math.max(Math.min(1, i / t), 0);
    this.txt_progress.textContentVO.textReplacements = [r.int(Math.max(Math.min(100, i / t * 100), 0))];
    if (i >= t) {
      this.layoutManager.showPanel(p.CastleMultiInfoPanel);
      this.hide();
    }
  };
  CastleAutoTutorialBlockerDialog.NAME = "CastleAutoTutorialBlocker";
  return CastleAutoTutorialBlockerDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAutoTutorialBlockerDialog = d;
var p = require("./675.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");