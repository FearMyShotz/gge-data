Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./470.js");
var r = function (e) {
  function CastleInstantBuildTipDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleInstantBuildTipDialog.NAME) || this;
  }
  n.__extends(CastleInstantBuildTipDialog, e);
  Object.defineProperty(CastleInstantBuildTipDialog.prototype, "tipPicClassName", {
    get: function () {
      return "InstantBuildTip";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleBasicTipDialog.prototype, "tipPicClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleInstantBuildTipDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_tip_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("tip_instantBuild"));
  };
  CastleInstantBuildTipDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleInstantBuildTipDialog.__initialize_static_members = function () {
    CastleInstantBuildTipDialog.NAME = "CastleInstantBuildTipEx";
  };
  return CastleInstantBuildTipDialog;
}(s.CastleBasicTipDialog);
exports.CastleInstantBuildTipDialog = r;
r.__initialize_static_members();
o.classImplementsInterfaces(r, "ICollectableRendererList");