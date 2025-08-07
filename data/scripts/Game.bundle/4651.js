Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleWelcomebackDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleWelcomebackDialog.NAME) || this;
  }
  n.__extends(CastleWelcomebackDialog, e);
  CastleWelcomebackDialog.prototype.initLoaded = function (t = null) {
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    e.prototype.initLoaded.call(this, t);
  };
  CastleWelcomebackDialog.prototype.showLoaded = function (t = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_comeback_title")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_comeback_copy"));
    this.itxt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_value, new a.LocalizedTextVO("value_multiplied", [0]));
    this.itxt_value.textContentVO.textId = "value_multiplied";
    this.itxt_value.textContentVO.textReplacements = [this.dialogProperties.amountC2];
    e.prototype.showLoaded.call(this, t);
    if (!this.isOutOfTutorial()) {
      this.hide();
    }
  };
  CastleWelcomebackDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleWelcomebackDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleWelcomebackDialog.__initialize_static_members = function () {
    CastleWelcomebackDialog.NAME = "CastleWellcomeBack";
  };
  return CastleWelcomebackDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleWelcomebackDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();