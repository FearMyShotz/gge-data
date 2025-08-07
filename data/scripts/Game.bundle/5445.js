Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./4.js");
var c = function (e) {
  function CastleEilandTitleLostMessageDialog() {
    var t = this;
    t.type = -1;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleEilandTitleLostMessageDialog, e);
  CastleEilandTitleLostMessageDialog.prototype.parseParams = function (t) {
    e.prototype.parseParams.call(this, t);
    this.type = r.int(this.paramArray[2]);
  };
  CastleEilandTitleLostMessageDialog.prototype.onGetTitleData = function (t) {
    e.prototype.onGetTitleData.call(this, t);
    this.dialogDisp.mc_titleBonus.visible = false;
    var i = [this.kingName, l.CastleModel.languageData.getTextById(this.titleVO.textID)];
    switch (this.type) {
      case a.MessageConst.DATATYPE_TITLE_LOST_LEADER_LEFT:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_eiland_titleMessage_kingLeft_copy", i));
        break;
      case a.MessageConst.DATATYPE_TITLE_LOST_PLAYER_LEFT:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_eiland_titleMessage_playerLeft_copy", i));
        break;
      case a.MessageConst.DATATYPE_TITLE_LOST_RESET:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_eiland_titleMessage_resetTitle_copy", i));
        break;
      case a.MessageConst.DATATYPE_TITLE_LOST_TAKEN:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_eiland_titleMessage_lostTitle_copy", i));
    }
    this.adjustTextSize();
  };
  CastleEilandTitleLostMessageDialog.__initialize_static_members = function () {
    CastleEilandTitleLostMessageDialog.NAME = "CastleEilandTitleLostMessage";
  };
  return CastleEilandTitleLostMessageDialog;
}(require("./1162.js").CastleEilandTitleMessageDialog);
exports.CastleEilandTitleLostMessageDialog = c;
o.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();