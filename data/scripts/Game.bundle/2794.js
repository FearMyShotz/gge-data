Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./8.js");
var r = function (e) {
  function CastleNotEnoughVillageTokensDialog() {
    return e.call(this, CastleNotEnoughVillageTokensDialog.NAME) || this;
  }
  n.__extends(CastleNotEnoughVillageTokensDialog, e);
  CastleNotEnoughVillageTokensDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_privateResourceVillages_shop_notEnoughTokens_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new a.LocalizedTextVO("dialog_privateResourceVillages_shop_notEnoughTokens_desc"));
    s.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
  };
  CastleNotEnoughVillageTokensDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleNotEnoughVillageTokensDialog.NAME = "CastleNotEnoughVillageTokens";
  return CastleNotEnoughVillageTokensDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleNotEnoughVillageTokensDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");