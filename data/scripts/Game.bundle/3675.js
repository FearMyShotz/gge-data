Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./469.js");
var r = function (e) {
  function CastleEfficiencyTipDialog() {
    return e.call(this, CastleEfficiencyTipDialog.NAME) || this;
  }
  n.__extends(CastleEfficiencyTipDialog, e);
  Object.defineProperty(CastleEfficiencyTipDialog.prototype, "tipPicClassName", {
    get: function () {
      return "EfficiencyTip";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleBasicTipDialog.prototype, "tipPicClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleEfficiencyTipDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_tip_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("tip_efficiency"));
  };
  CastleEfficiencyTipDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleEfficiencyTipDialog.__initialize_static_members = function () {
    CastleEfficiencyTipDialog.NAME = "CastleEfficiencyTipEx";
  };
  return CastleEfficiencyTipDialog;
}(s.CastleBasicTipDialog);
exports.CastleEfficiencyTipDialog = r;
r.__initialize_static_members();
o.classImplementsInterfaces(r, "ICollectableRendererList");