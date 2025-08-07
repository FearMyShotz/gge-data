Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./469.js");
var r = function (e) {
  function CastleBuildListTipDialog() {
    return e.call(this, CastleBuildListTipDialog.NAME) || this;
  }
  n.__extends(CastleBuildListTipDialog, e);
  Object.defineProperty(CastleBuildListTipDialog.prototype, "tipPicClassName", {
    get: function () {
      return "BuildListTip";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleBasicTipDialog.prototype, "tipPicClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleBuildListTipDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_tip_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("tip_buildList"));
  };
  CastleBuildListTipDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleBuildListTipDialog.__initialize_static_members = function () {
    CastleBuildListTipDialog.NAME = "CastleBuildListTipEx";
  };
  return CastleBuildListTipDialog;
}(s.CastleBasicTipDialog);
exports.CastleBuildListTipDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();