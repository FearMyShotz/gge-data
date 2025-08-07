Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./4.js");
var l = require("./819.js");
var c = function (e) {
  function CastleEilandTitleAssignedMessageDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastleEilandTitleAssignedMessageDialog, e);
  CastleEilandTitleAssignedMessageDialog.prototype.onGetTitleData = function (t) {
    e.prototype.onGetTitleData.call(this, t);
    this.dialogDisp.mc_titleBonus.visible = true;
    var i = [this.kingName, r.CastleModel.languageData.getTextById(this.titleVO.textID)];
    if (this.titleVO.isPositive) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_eiland_titleMessage_gainedGoodTitle_copy", i));
    } else if (!this.titleVO.isPositive) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_eiland_titleMessage_gainedBadTitle_copy", i));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.mc_titleBonus.txt_bonus, new s.TextVO(l.CastleEilandTextComposer.generateBonusText(this.titleVO)));
    this.adjustTextSize();
  };
  CastleEilandTitleAssignedMessageDialog.__initialize_static_members = function () {
    CastleEilandTitleAssignedMessageDialog.NAME = "CastleEilandAssignedTitleMessage";
  };
  return CastleEilandTitleAssignedMessageDialog;
}(require("./1162.js").CastleEilandTitleMessageDialog);
exports.CastleEilandTitleAssignedMessageDialog = c;
o.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();