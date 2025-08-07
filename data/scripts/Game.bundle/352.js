Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./51.js");
var l = require("./107.js");
var c = function (e) {
  function CastleNoMoneyC1Dialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleNoMoneyC1Dialog.NAME) || this;
  }
  n.__extends(CastleNoMoneyC1Dialog, e);
  CastleNoMoneyC1Dialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_tax]);
  };
  CastleNoMoneyC1Dialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_NoMoneyC1_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_NoMoneyC1_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_youNeed, new s.LocalizedTextVO("dialog_NoMoneyC1_goToTax"));
    this.dialogDisp.btn_tax.toolTipText = "panel_action_tax";
    this.dialogDisp.btn_tax.visible = true;
    l.CharacterHelper.createCharacterBig(r.ClientConstCharacter.CHAR_ID_TAXCOLLECTOR, this.dialogDisp.mc_char, 194, 138);
  };
  CastleNoMoneyC1Dialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_tax:
        this.hide();
        this.openTaxDialog();
    }
  };
  CastleNoMoneyC1Dialog.prototype.openTaxDialog = function () {
    o.CommandController.instance.executeCommand(u.IngameClientCommands.OPEN_ACTIVE_TAX_DIALOG_COMMAND);
  };
  CastleNoMoneyC1Dialog.__initialize_static_members = function () {
    CastleNoMoneyC1Dialog.NAME = "CastleNoMoneyC1Ex";
  };
  return CastleNoMoneyC1Dialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleNoMoneyC1Dialog = c;
var u = require("./29.js");
a.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();