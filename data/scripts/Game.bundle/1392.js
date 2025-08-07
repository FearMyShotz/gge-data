Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./2525.js");
var u = require("./37.js");
var d = require("./53.js");
var p = require("./13.js");
var h = require("./8.js");
var g = function (e) {
  function CastleAllianceBattleGroundBuyInfoDialog() {
    return e.call(this, CastleAllianceBattleGroundBuyInfoDialog.NAME) || this;
  }
  n.__extends(CastleAllianceBattleGroundBuyInfoDialog, e);
  CastleAllianceBattleGroundBuyInfoDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    h.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel], m.ClickFeedbackButton);
  };
  CastleAllianceBattleGroundBuyInfoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("attention")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_beyondTheHorizon_preEnter_desc_" + d.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring));
    this.dialogDisp.mc_alliance.toolTipText = "allianceName";
    this.dialogDisp.mc_member.toolTipText = "dialog_alliance_member";
    this.dialogDisp.mc_rank.toolTipText = "rank";
    this.getAlliInfo();
  };
  CastleAllianceBattleGroundBuyInfoDialog.prototype.getAlliInfo = function () {
    s.BasicModel.smartfoxClient.sendCommandVO(new c.C2SAllianceBattleGroundJoinedPlayerVO());
  };
  CastleAllianceBattleGroundBuyInfoDialog.prototype.addEventListenerOnShow = function () {
    this.controller.addEventListener(u.CastleServerMessageArrivedEvent.AJP_ARRIVED, this.bindFunction(this.onInfoArrived));
  };
  CastleAllianceBattleGroundBuyInfoDialog.prototype.removeEventListenerOnHide = function () {
    this.controller.removeEventListener(u.CastleServerMessageArrivedEvent.AJP_ARRIVED, this.bindFunction(this.onInfoArrived));
  };
  CastleAllianceBattleGroundBuyInfoDialog.prototype.onInfoArrived = function (e) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceName, new r.LocalizedTextVO(e.params[0].N));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_memberCount, new r.LocalizedTextVO("value_proportional_value", [e.params[0].M, d.ABGHelper.abgEvent.settingVO.maxAllianceSize]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rank, new r.LocalizedTextVO("dialog_alliance_rank" + C.CastleAllianceData.getTextIDForRank(e.params[0].R)));
  };
  CastleAllianceBattleGroundBuyInfoDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancel:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.onOK();
    }
  };
  CastleAllianceBattleGroundBuyInfoDialog.prototype.onOK = function () {
    a.BasicDialogHandler.getInstance().registerDialogs(_.CastleSpecialServerPreBuildCastleSelectionDialog, new f.CastleSpecialServerPreBuildCastleSelectionDialogProperties(f.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_ABG));
    this.hide();
  };
  CastleAllianceBattleGroundBuyInfoDialog.NAME = "CastleAllianceBattleGroundBuyInfo";
  return CastleAllianceBattleGroundBuyInfoDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAllianceBattleGroundBuyInfoDialog = g;
var C = require("./317.js");
var _ = require("./752.js");
var m = require("./36.js");
var f = require("./615.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");