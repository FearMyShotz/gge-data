Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastlePaymentDopplerMessageDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePaymentDopplerMessageDialog.NAME) || this;
  }
  n.__extends(CastlePaymentDopplerMessageDialog, e);
  CastlePaymentDopplerMessageDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_paymentdoubler_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_paymentdoubler_copy")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_hint, new a.LocalizedTextVO(""));
  };
  CastlePaymentDopplerMessageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastlePaymentDopplerMessageDialog.__initialize_static_members = function () {
    CastlePaymentDopplerMessageDialog.NAME = "CastlePaymentDopplerMessageEx";
  };
  return CastlePaymentDopplerMessageDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastlePaymentDopplerMessageDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();