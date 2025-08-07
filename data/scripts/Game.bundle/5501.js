Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleIngameMessageTurkeyDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleIngameMessageTurkeyDialog.NAME) || this;
  }
  n.__extends(CastleIngameMessageTurkeyDialog, e);
  CastleIngameMessageTurkeyDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
  };
  CastleIngameMessageTurkeyDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setText();
  };
  CastleIngameMessageTurkeyDialog.prototype.setText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("turkish_paysteaser_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new a.LocalizedTextVO("turkish_paysteaser_copy1"));
  };
  CastleIngameMessageTurkeyDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleIngameMessageTurkeyDialog.__initialize_static_members = function () {
    CastleIngameMessageTurkeyDialog.NAME = "CastleIngameMessageTurkey";
  };
  return CastleIngameMessageTurkeyDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleIngameMessageTurkeyDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();