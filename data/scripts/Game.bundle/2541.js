Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./55.js");
var _ = require("./2542.js");
var m = require("./172.js");
var f = require("./53.js");
var O = require("./13.js");
var E = require("./4.js");
var y = require("./681.js");
var b = require("./24.js");
var D = require("./82.js");
var I = require("./47.js");
var T = require("./59.js");
var v = require("./8.js");
var S = function (e) {
  function CastleAllianceBattleGroundEventDialogScoring(t, i) {
    var n = e.call(this, t) || this;
    n.init();
    n.mainDialog = i;
    return n;
  }
  n.__extends(CastleAllianceBattleGroundEventDialogScoring, e);
  CastleAllianceBattleGroundEventDialogScoring.prototype.init = function () {
    v.ButtonHelper.initButtons([this.subLayerDisp.btn_tower, this.subLayerDisp.btn_help], R.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new d.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_journey_title_" + this.scoringName)));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title1, new d.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_journey_subtitle_" + this.scoringName)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_Landmark.txt_alliRanking, new d.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("allianceRank")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_Landmark.txt_points, new d.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("currency_name_Influence")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_Landmark.txt_alliPoints, new d.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("currency_name_AllianceInfluence")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_alliRanking, new d.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("allianceRank")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_points, new d.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("stats_contributeAllianceStatuette")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_alliPoints, new d.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("currency_name_AllianceStatuette")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_malus, new d.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("currency_name_StatuetteMalus")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_help.txt_value, new d.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("moreInfo")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_tower.txt_value, new d.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_AllianceTower_overview_title")));
    this.subLayerDisp.txt_copy.mouseEnabled = true;
    this._textScrollComponent = new D.ModernSliderScrollComponent(new I.SimpleScrollVO().initByParent(this.subLayerDisp.mc_descSlider).addMouseWheelElements([this.subLayerDisp.txt_copy]), new T.DynamicSizeScrollStrategyVertical(true, 0), true);
  };
  CastleAllianceBattleGroundEventDialogScoring.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._textScrollComponent.onScrollSignal.add(this.bindFunction(this.onDescriptionScroll));
    this._textScrollComponent.show();
    this.subLayerDisp.btn_tower.visible = f.ABGHelper.isOnABGAndTower;
    this.updateDescription();
    this.onPointsChanged();
    this.controller.addEventListener(m.CastleHighscoreEvent.ALLIANCE_BATTLEGROUND_SERVER_HIGHSCORE, this.bindFunction(this.onPointsChanged));
    if (f.ABGHelper.isOnABGServer) {
      E.CastleModel.smartfoxClient.sendCommandVO(new _.C2SAllianceBattleGroundGetOwnRanksVO(E.CastleModel.userData.allianceID));
    }
    c.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_teaser);
    this.subLayerDisp.mc_teaser.addChild(new b.CastleGoodgameExternalClip("AllianceBattleGroundScoringTeaser_" + this.scoringName, r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(P.CastleAllianceBattleGroundEventDialog.NAME), null, 0, false));
    this.setupScoreField();
  };
  CastleAllianceBattleGroundEventDialogScoring.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.btn_help:
        s.BasicDialogHandler.getInstance().registerDialogs(M.CastleAllianceBattlegroundStartDialog);
        break;
      case this.subLayerDisp.btn_tower:
        this.mainDialog.setCategory(P.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_TOWER);
    }
  };
  CastleAllianceBattleGroundEventDialogScoring.prototype.setupScoreField = function () {
    this.subLayerDisp.mc_Landmark.visible = f.ABGHelper.isOnABGAndCollector;
    this.subLayerDisp.mc_tower.visible = f.ABGHelper.isOnABGAndTower;
    this.subLayerDisp.mc_mainserver.visible = !f.ABGHelper.isOnABGServer;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_mainserver.txt_copy, new h.LocalizedTextVO("dialog_beyondTheHorizon_main_journey_AllianceCollector_hiddenProgress"));
    if (f.ABGHelper.isOnABGServer) {
      var e = g.int(f.ABGHelper.abgEvent.settingVO.currencyID);
      var t = g.int(f.ABGHelper.abgEvent.settingVO.allianceCurrencyID);
      var i = g.int(f.ABGHelper.abgEvent.settingVO.malusCurrencyID);
      var n = g.int(E.CastleModel.currencyData.getAmountByType(new L.CollectableTypeVO(A.CollectableEnum.GENERIC_CURRENCY, e)));
      var o = E.CastleModel.allianceData.myAllianceVO.storage.getItemByTypeVO(new L.CollectableTypeVO(A.CollectableEnum.GENERIC_CURRENCY, t));
      var a = E.CastleModel.allianceData.myAllianceVO.storage.getItemByTypeVO(new L.CollectableTypeVO(A.CollectableEnum.GENERIC_CURRENCY, i));
      switch (this.scoringName) {
        case y.AllianceBattleGroundScoringVO.SCORING_SYSTEM_ALLIANCE_COLLECTOR:
          this.textFieldManager.registerTextField(this.subLayerDisp.mc_Landmark.txt_points_value, new p.LocalizedNumberVO(n));
          this.textFieldManager.registerTextField(this.subLayerDisp.mc_Landmark.txt_alliPoints_value, new p.LocalizedNumberVO(o ? o.amount : 0));
          break;
        case y.AllianceBattleGroundScoringVO.SCORING_SYSTEM_ALLIANCE_TOWER:
          this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_points_value, new p.LocalizedNumberVO(n));
          this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_alliPoints_value, new p.LocalizedNumberVO(o ? o.amount : 0));
          var s = a ? a.amount : 0;
          if (s == 0) {
            this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_malus_value, new h.LocalizedTextVO(u.GenericTextIds.VALUE_PERCENTAGE, [s])).color = 15974986;
          } else {
            this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_malus_value, new h.LocalizedTextVO(u.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [s])).color = V.ClientConstColor.MODERN_RED2;
          }
      }
    }
  };
  CastleAllianceBattleGroundEventDialogScoring.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._textScrollComponent.onScrollSignal.remove(this.bindFunction(this.onDescriptionScroll));
    this._textScrollComponent.hide();
    this.controller.removeEventListener(m.CastleHighscoreEvent.ALLIANCE_BATTLEGROUND_SERVER_HIGHSCORE, this.bindFunction(this.onPointsChanged));
  };
  CastleAllianceBattleGroundEventDialogScoring.prototype.onPointsChanged = function (e = null) {
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_Landmark.txt_alliRanking_value, f.ABGHelper.isOnABGServer ? new p.LocalizedNumberVO(f.ABGHelper.abgEvent.ownAllianceRank) : new d.TextVO(" "));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_alliRanking_value, f.ABGHelper.isOnABGServer ? new p.LocalizedNumberVO(f.ABGHelper.abgEvent.ownAllianceRank) : new d.TextVO(" "));
  };
  CastleAllianceBattleGroundEventDialogScoring.prototype.updateDescription = function () {
    this._tfDesc = this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy, new h.LocalizedTextVO("dialog_beyondTheHorizon_main_journey_desc_" + this.scoringName));
    var e = g.int(C.ClientConstUtils.isTlfMode ? 20 : 1);
    this._textScrollComponent.init(1, Math.ceil(this._tfDesc.maxScrollV), e, e);
    this._textScrollComponent.setVisibility(this._tfDesc.maxScrollV > 1);
    this._textScrollComponent.scrollToPercent(0);
  };
  Object.defineProperty(CastleAllianceBattleGroundEventDialogScoring.prototype, "scoringName", {
    get: function () {
      return f.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattleGroundEventDialogScoring.prototype.onDescriptionScroll = function () {
    this._tfDesc.scrollV = a.MathBase.clamp(this._textScrollComponent.currentValue, 1, this._tfDesc.maxScrollV);
  };
  Object.defineProperty(CastleAllianceBattleGroundEventDialogScoring.prototype, "castleEnv_0", {
    get: function () {
      return l.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceBattleGroundEventDialogScoring;
}(require("./34.js").CastleDialogSubLayer);
exports.CastleAllianceBattleGroundEventDialogScoring = S;
var A = require("./12.js");
var L = require("./74.js");
var P = require("./249.js");
var M = require("./1400.js");
var R = require("./20.js");
var V = require("./16.js");
o.classImplementsInterfaces(S, "ICollectableRendererList", "ISublayer");