Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./469.js");
var r = function (e) {
  function CastleOverseerTipDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleOverseerTipDialog.NAME) || this;
  }
  n.__extends(CastleOverseerTipDialog, e);
  Object.defineProperty(CastleOverseerTipDialog.prototype, "tipPicClassName", {
    get: function () {
      return "OverseerTip";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleBasicTipDialog.prototype, "tipPicClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleOverseerTipDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_tip_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("tip_overseer"));
  };
  CastleOverseerTipDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleOverseerTipDialog.__initialize_static_members = function () {
    CastleOverseerTipDialog.NAME = "CastleOverseerTipEx";
  };
  return CastleOverseerTipDialog;
}(s.CastleBasicTipDialog);
exports.CastleOverseerTipDialog = r;
r.__initialize_static_members();
o.classImplementsInterfaces(r, "ICollectableRendererList");