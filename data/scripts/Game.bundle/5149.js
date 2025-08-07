Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./51.js");
var u = require("./107.js");
var d = function (e) {
  function CastleGetTaxDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleGetTaxDialog.NAME) || this;
  }
  n.__extends(CastleGetTaxDialog, e);
  CastleGetTaxDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_collectedtaxes_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("dialog_collectedtaxes_copy"), new s.InternalGGSTextFieldConfigVO(true));
  };
  CastleGetTaxDialog.prototype.applyPropertiesLoaded = function (t = null) {
    this.itxt_amountC1 ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_amountC1, new l.LocalizedTextVO(a.GenericTextIds.VALUE_MULTIPLIED, [String(this.dialogProperties.collectedTax)], true));
    u.CharacterHelper.createCharacterBig(c.ClientConstCharacter.CHAR_ID_TAXCOLLECTOR, this.dialogDisp.mc_char, 194, 138);
    this.itxt_amountC1.textContentVO.textId = a.GenericTextIds.VALUE_MULTIPLIED;
    this.itxt_amountC1.textContentVO.textReplacements = [String(this.dialogProperties.collectedTax)];
    e.prototype.applyPropertiesLoaded.call(this, t);
  };
  CastleGetTaxDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_yes:
        this.hide();
        o.CommandController.instance.executeCommand(p.IngameClientCommands.OPEN_ACTIVE_TAX_DIALOG_COMMAND);
    }
  };
  Object.defineProperty(CastleGetTaxDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleGetTaxDialog.__initialize_static_members = function () {
    CastleGetTaxDialog.NAME = "CastleGetTax";
  };
  return CastleGetTaxDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleGetTaxDialog = d;
var p = require("./29.js");
r.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();