Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleYesNoOrangeWarningDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleYesNoOrangeWarningDialog.NAME) || this;
  }
  n.__extends(CastleYesNoOrangeWarningDialog, e);
  CastleYesNoOrangeWarningDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.titleTxt = this.textFieldManager.registerTextField(this.dialog.titleTxt, new a.LocalizedTextVO(""));
    this.titleTxt.autoFitToBounds = true;
    this.descTxt = this.textFieldManager.registerTextField(this.dialog.descTxt, new a.LocalizedTextVO(""));
    this.descTxt.autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialog.discardBtn.txtArea, new a.LocalizedTextVO("dialog_primeday_oneTimeOffer_confirm_buttonNo")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialog.okBtn.txtArea, new a.LocalizedTextVO("dialog_primeday_oneTimeOffer_confirm_buttonYes")).autoFitToBounds = true;
    this.initBasicButtons([this.dialog.discardBtn, this.dialog.okBtn, this.dialog.closeBtn]);
  };
  CastleYesNoOrangeWarningDialog.prototype.applyProperties = function () {
    this.titleTxt.textContentVO.textId = this.dialogProperties.titleTextId;
    this.descTxt.textContentVO.textId = this.dialogProperties.descTextId;
  };
  CastleYesNoOrangeWarningDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialog.okBtn:
      case this.dialog.closeBtn:
        this.hide();
        break;
      case this.dialog.discardBtn:
        this.hide();
        if (this.dialogProperties.cancelCallback != null) {
          this.dialogProperties.cancelCallback();
        }
    }
  };
  Object.defineProperty(CastleYesNoOrangeWarningDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleYesNoOrangeWarningDialog.prototype, "dialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleYesNoOrangeWarningDialog.__initialize_static_members = function () {
    CastleYesNoOrangeWarningDialog.NAME = "CastleYesNoOrangeWarningDialog";
  };
  return CastleYesNoOrangeWarningDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleYesNoOrangeWarningDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();