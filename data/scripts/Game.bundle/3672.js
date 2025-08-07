Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./470.js");
var r = function (e) {
  function CastleBarrackUnitTipDialog() {
    return e.call(this, CastleBarrackUnitTipDialog.NAME) || this;
  }
  n.__extends(CastleBarrackUnitTipDialog, e);
  Object.defineProperty(CastleBarrackUnitTipDialog.prototype, "tipPicClassName", {
    get: function () {
      return "BarrackUnitTip";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleBasicTipDialog.prototype, "tipPicClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleBarrackUnitTipDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_tip_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("tip_barrackUnit"));
  };
  CastleBarrackUnitTipDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleBarrackUnitTipDialog.__initialize_static_members = function () {
    CastleBarrackUnitTipDialog.NAME = "CastleBarrackUnitTipEx";
  };
  return CastleBarrackUnitTipDialog;
}(s.CastleBasicTipDialog);
exports.CastleBarrackUnitTipDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();