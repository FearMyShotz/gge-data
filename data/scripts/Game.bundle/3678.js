Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./469.js");
var r = function (e) {
  function CastleProductivityTipDialog() {
    return e.call(this, CastleProductivityTipDialog.NAME) || this;
  }
  n.__extends(CastleProductivityTipDialog, e);
  Object.defineProperty(CastleProductivityTipDialog.prototype, "tipPicClassName", {
    get: function () {
      return "ProductivityTip";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleBasicTipDialog.prototype, "tipPicClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleProductivityTipDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_tip_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("tip_productivity"));
  };
  CastleProductivityTipDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleProductivityTipDialog.__initialize_static_members = function () {
    CastleProductivityTipDialog.NAME = "CastleProductivityTipEx";
  };
  return CastleProductivityTipDialog;
}(s.CastleBasicTipDialog);
exports.CastleProductivityTipDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();