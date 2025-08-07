Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./55.js");
var h = require("./1918.js");
var g = require("./172.js");
var C = require("./32.js");
var _ = require("./137.js");
var m = require("./13.js");
var f = require("./4.js");
var O = require("./386.js");
var E = require("./24.js");
var y = require("./82.js");
var b = require("./47.js");
var D = require("./59.js");
var I = function (e) {
  function CastleTemporaryServerEventDialogScoring(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(CastleTemporaryServerEventDialogScoring, e);
  CastleTemporaryServerEventDialogScoring.prototype.init = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new l.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_title")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title1, new l.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_header_" + this.eventVO.settingVO.scoringSystem)));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_overall_ranking, new l.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_overallRankingPoints")));
    this._textScrollComponent = new y.ModernSliderScrollComponent(new b.SimpleScrollVO().initByParent(this.subLayerDisp.mc_descSlider).addMouseWheelElements([this.subLayerDisp.txt_copy]), new D.DynamicSizeScrollStrategyVertical(true, 0), true);
  };
  CastleTemporaryServerEventDialogScoring.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._textScrollComponent.onScrollSignal.add(this.bindFunction(this.onDescriptionScroll));
    this._textScrollComponent.show();
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_Collector.txt_title, new l.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_collector")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_rankSwap.txt_title, new l.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_rankSwap")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_Might.txt_title, new l.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_might")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_charge_points.txt_points1_title, new l.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_tier_charge")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_charge_points.txt_points2_title, new l.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_tonic_charge")));
    this.updateDescription();
    this.controller.addEventListener(g.CastleHighscoreEvent.TEMPORARY_SERVER_HIGHSCORE, this.bindFunction(this.onPointsChanged));
    this.controller.addEventListener(C.CastleUserDataEvent.CHANGE_USER_MIGHT, this.bindFunction(this.onChangeMight));
    f.CastleModel.smartfoxClient.sendCommandVO(new h.C2STemporaryServerHighscoreVO());
    a.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_teaser);
    this.subLayerDisp.mc_teaser.addChild(new E.CastleGoodgameExternalClip("TempServerScoringTeaser_" + this.eventVO.settingVO.scoringSystem, r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(T.CastleTemporaryServerEventDialog.NAME), null, 0, false));
    this.setupScoreField();
  };
  CastleTemporaryServerEventDialogScoring.prototype.setupScoreField = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_daily_ranking, new l.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_dailyRankingPoints")));
    this.subLayerDisp.mc_overall_up.visible = false;
    this.subLayerDisp.mc_Might.visible = this.eventVO.isMightScoring && _.TempServerHelper.isOnTempServer;
    this.subLayerDisp.mc_Collector.visible = this.eventVO.isCollectorScoring && _.TempServerHelper.isOnTempServer;
    this.subLayerDisp.mc_rankSwap.visible = this.eventVO.isRankSwapScoring && _.TempServerHelper.isOnTempServer;
    this.subLayerDisp.mc_charge_points.visible = false;
    this.subLayerDisp.mc_mainserver.visible = !_.TempServerHelper.isOnTempServer;
    this.subLayerDisp.mc_charge_mainserver.visible = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_mainserver.txt_copy, new c.LocalizedTextVO("dialog_tempServer_scoring_mainServer"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_charge_mainserver.txt_copy, new c.LocalizedTextVO("dialog_tempServer_scoring_mainServer"));
    if (_.TempServerHelper.isOnTempServer) {
      switch (this.eventVO.settingVO.scoringSystem) {
        case O.TempServerConfigurationVO.SCORING_SYSTEM_MIGHT:
          this.textFieldManager.registerTextField(this.subLayerDisp.mc_Might.txt_copy, new u.LocalizedNumberVO(f.CastleModel.mightData.userCurrentBuildingMight));
          break;
        case O.TempServerConfigurationVO.SCORING_SYSTEM_COLLECTOR:
          this.textFieldManager.registerTextField(this.subLayerDisp.mc_Collector.txt_copy, new u.LocalizedNumberVO(f.CastleModel.currencyData.getAmountByKey("HE")));
          break;
        case O.TempServerConfigurationVO.SCORING_SYSTEM_RANK_SWAP:
          this.textFieldManager.registerTextField(this.subLayerDisp.mc_rankSwap.txt_copy, new c.LocalizedTextVO("dialog_tempServer_scoring_rankSwap_range", [1, this.eventVO.ownDailyRank]));
      }
    }
  };
  CastleTemporaryServerEventDialogScoring.prototype.onChangeMight = function (e = null) {
    this.setupScoreField();
  };
  CastleTemporaryServerEventDialogScoring.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._textScrollComponent.onScrollSignal.remove(this.bindFunction(this.onDescriptionScroll));
    this._textScrollComponent.hide();
    this.controller.removeEventListener(g.CastleHighscoreEvent.TEMPORARY_SERVER_HIGHSCORE, this.bindFunction(this.onPointsChanged));
    this.controller.removeEventListener(C.CastleUserDataEvent.CHANGE_USER_MIGHT, this.bindFunction(this.onChangeMight));
  };
  CastleTemporaryServerEventDialogScoring.prototype.onPointsChanged = function (e) {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_daily_ranking_amount, this.castleEnv.isOnTemporaryServer ? new u.LocalizedNumberVO(f.CastleModel.tempServerData.getDailyRankPointsByRank(this.eventVO.ownDailyRank)) : new l.TextVO(" "));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_overall_ranking_amount, this.castleEnv.isOnTemporaryServer ? new u.LocalizedNumberVO(this.eventVO.ownOverallPoints) : new l.TextVO(" "));
  };
  CastleTemporaryServerEventDialogScoring.prototype.updateDescription = function () {
    this._tfDesc = this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy, new c.LocalizedTextVO("dialog_tempServer_scoring_desc_" + this.eventVO.settingVO.scoringSystem));
    var e = d.int(p.ClientConstUtils.isTlfMode ? 20 : 1);
    this._textScrollComponent.init(1, this._tfDesc.maxScrollV, e, e);
    this._textScrollComponent.setVisibility(this._tfDesc.maxScrollV > 1);
    this._textScrollComponent.scrollToPercent(0);
  };
  Object.defineProperty(CastleTemporaryServerEventDialogScoring.prototype, "eventVO", {
    get: function () {
      return _.TempServerHelper.tmpServerEvent;
    },
    enumerable: true,
    configurable: true
  });
  CastleTemporaryServerEventDialogScoring.prototype.onDescriptionScroll = function () {
    this._tfDesc.scrollV = s.MathBase.clamp(this._textScrollComponent.currentValue, 1, this._tfDesc.maxScrollV);
  };
  return CastleTemporaryServerEventDialogScoring;
}(require("./34.js").CastleDialogSubLayer);
exports.CastleTemporaryServerEventDialogScoring = I;
var T = require("./1148.js");
o.classImplementsInterfaces(I, "ICollectableRendererList", "ISublayer");