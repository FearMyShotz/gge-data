Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleEilandTitleNewKingMessageDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastleEilandTitleNewKingMessageDialog, e);
  CastleEilandTitleNewKingMessageDialog.prototype.parseParams = function (t) {
    e.prototype.parseParams.call(this, t);
    this.kingAlliance = this.paramArray[2];
  };
  CastleEilandTitleNewKingMessageDialog.prototype.onGetTitleData = function (t) {
    e.prototype.onGetTitleData.call(this, t);
    this.dialogDisp.mc_titleBonus.visible = false;
    var i = [this.kingName, this.kingAlliance];
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_eiland_titleMessage_newLeft_copy", i));
    this.adjustTextSize();
  };
  CastleEilandTitleNewKingMessageDialog.__initialize_static_members = function () {
    CastleEilandTitleNewKingMessageDialog.NAME = "CastleEilandTitleNewKingMessage";
  };
  return CastleEilandTitleNewKingMessageDialog;
}(require("./1162.js").CastleEilandTitleMessageDialog);
exports.CastleEilandTitleNewKingMessageDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();