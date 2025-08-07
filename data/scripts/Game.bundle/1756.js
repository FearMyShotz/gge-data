Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./1757.js");
var c = require("./243.js");
var u = require("./192.js");
var d = require("./4.js");
var p = require("./8.js");
var h = require("./1089.js");
var g = require("./1758.js");
var C = function (e) {
  function CastleHandleKingdomDialog() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleHandleKingdomDialog, e);
  CastleHandleKingdomDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.sublayers.add(g.ACastleHandleSpaceDialog.SUBLAYER_SUPPORT, null, new f.CastleHandleKingdomDialogSupport(this.dialogDisp.sublayer_support));
  };
  CastleHandleKingdomDialog.prototype.getSublayerProperties = function (t) {
    if (t == g.ACastleHandleSpaceDialog.SUBLAYER_SUPPORT) {
      return this.dialogProperties_0.kingdomVO;
    } else {
      return e.prototype.getSublayerProperties.call(this, t);
    }
  };
  CastleHandleKingdomDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.dialogProperties_0.isEiland()) {
      this.controller.addEventListener(c.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
    }
    d.CastleModel.kingdomData.addEventListener(u.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
    d.CastleModel.smartfoxClient.sendCommandVO(new l.C2SKingdomPayInfoVO());
  };
  CastleHandleKingdomDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.controller.removeEventListener(c.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
    d.CastleModel.kingdomData.removeEventListener(u.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
  };
  CastleHandleKingdomDialog.prototype.onBackgroundSkinLoaded = function (t) {
    e.prototype.onBackgroundSkinLoaded.call(this, t);
    if (this.dialogProperties_0.isEiland()) {
      this.textFieldManager.registerTextField(this.backgroundDisp.mc_banner.txt_description, new s.LocalizedTextVO("dialog_kingdom_start_eilandDescription"));
      this.updateAlliancePoints(this.backgroundDisp.mc_alliancePoints);
      this.backgroundDisp.btn_ranking.toolTipText = "eiland_ranking_tooltip";
      p.ButtonHelper.initBasicButton(this.backgroundDisp.btn_ranking);
    }
  };
  CastleHandleKingdomDialog.prototype.updateAlliancePoints = function (e) {
    if (d.CastleModel.userData.isInAlliance) {
      e.toolTipText = "aquamarin_points_alliance_tooltip";
      this.textFieldManager.registerTextField(e.txt_value, new a.LocalizedNumberVO(d.CastleModel.allianceData.myAllianceVO.aquaPoints));
      e.mouseChildren = false;
    } else {
      e.toolTipText = "aquamarin_points_noAlliance_tooltip";
      this.textFieldManager.registerTextField(e.txt_value, new r.TextVO("-"));
      e.mouseChildren = false;
    }
    e.visible = this.dialogProperties_0.isUnlocked();
  };
  CastleHandleKingdomDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this.backgroundDisp) {
      switch (t.target) {
        case this.backgroundDisp.btn_ranking:
          _.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleEilandRankingDialog, new h.CastleEilandRankingDialogProperties());
      }
    }
  };
  CastleHandleKingdomDialog.prototype.onEilandReset = function (e) {
    this.hide();
  };
  CastleHandleKingdomDialog.prototype.onKingdomDataUpdated = function (e) {
    this.showCurrentSublayer();
  };
  Object.defineProperty(CastleHandleKingdomDialog.prototype, "dialogProperties_0", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleHandleKingdomDialog.NAME = "CastleKingdom";
  return CastleHandleKingdomDialog;
}(g.ACastleHandleSpaceDialog);
exports.CastleHandleKingdomDialog = C;
var _ = require("./9.js");
var m = require("./1090.js");
var f = require("./3706.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");