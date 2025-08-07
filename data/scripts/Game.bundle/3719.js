Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./3.js");
var _ = require("./241.js");
var m = require("./264.js");
var f = require("./37.js");
var O = require("./210.js");
var E = require("./15.js");
var y = require("./4.js");
var b = require("./251.js");
var D = require("./8.js");
var I = require("./288.js");
var T = require("./34.js");
var v = require("./330.js");
var S = function (e) {
  function CastleNomadInvasionPointsEventSublayer(t) {
    var i = e.call(this, t) || this;
    i.textFieldManager.registerTextField(t.txt_title, new g.LocalizedTextVO("dialog_nomadInvasion_overview_title"));
    i.textFieldManager.registerTextField(t.txt_desc1, new g.LocalizedTextVO("dialog_nomadInvasion_overview_desc"));
    i.textFieldManager.registerTextField(t.txt_desc2, new g.LocalizedTextVO("dialog_nomadInvasion_overview_pointsEventInfo"));
    i.textFieldManager.registerTextField(t.txt_description, new g.LocalizedTextVO("dialog_nomadInvasion_desc"));
    D.ButtonHelper.initBasicButton(t.btn_showMe);
    i.textFieldManager.registerTextField(t.mc_disabledRanking.txt_rank, new g.LocalizedTextVO("rank")).autoFitToBounds = true;
    t.mc_disabledRanking.toolTipText = "dialog_tournament_yourRank";
    t.mc_disabledRanking.mouseChildren = false;
    t.btn_showMe.mouseChildren = false;
    t.btn_showMe.toolTipText = "dialog_nomadInvasion_overview_seekNomadsButton";
    i._seasonLeague = new R.SeasonLeagueEventElementComponent(t.mc_seasonLeague, l.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    return i;
  }
  n.__extends(CastleNomadInvasionPointsEventSublayer, e);
  CastleNomadInvasionPointsEventSublayer.prototype.setScoreBarData = function (e) {
    this.scoreBarData = e;
  };
  CastleNomadInvasionPointsEventSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    if (this.eventVO && this.eventVO.khanCampBarVO && y.CastleModel.userData.userLevel >= c.PlayerConst.LEVEL_CAP) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc2, new g.LocalizedTextVO("dialog_nomadInvasion_overview_pointsEventInfo_khan"));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc2, new g.LocalizedTextVO("dialog_nomadInvasion_overview_pointsEventInfo"));
    }
    if (y.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE)) {
      y.CastleModel.smartfoxClient.sendCommandVO(new _.C2SPointEventGetPointsVO(l.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE));
    }
    var i = new P.RewardsDialogScoreBarProperties(this.scoreBarData.rewardLists, "nomadInvasion", this.tooltipValues, this.levelLabels);
    var n = new (s.getDefinitionByName("NomadInvasionEvent_Score_Icon"))();
    n.toolTipText = "dialog_nomadInvasion_nomadPoints";
    var o = new (s.getDefinitionByName("NomadInvasionEvent_Background"))();
    this.scoreBar = new V.RewardsDialogScoreBarComponentExternal();
    this.scoreBar.load(this.subLayerDisp.mc_scoreBarContainer, this.bindFunction(this.onScorebarAssetLoaded), "Scorebar_Player", n, o, CastleNomadInvasionPointsEventSublayer.openRewardsDialog, i);
    this.subLayerDisp.mc_seasonLeague.visible = false;
    this._seasonLeague.onShow();
    this.subLayerDisp.mc_difficulty.visible = this.eventVO.isDifficultyScalingActivated;
    if (this.subLayerDisp.mc_difficulty.visible) {
      I.DifficultyScalingHelper.addDifficultyIcon(this.subLayerDisp.mc_difficulty.mc_icon, y.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(this.eventVO.difficultyIDChoosen), 45, 45, this.subLayerDisp.mc_difficulty);
    }
  };
  CastleNomadInvasionPointsEventSublayer.prototype.onScorebarAssetLoaded = function () {
    this.onUpdatePoints();
    E.CastleBasicController.getInstance().addEventListener(O.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleNomadInvasionPointsEventSublayer.openRewardsDialog = function () {
    L.CastleDialogHandler.getInstance().registerDefaultDialogs(x.CastleAllianceNomadInvasionRewardListDialog, new v.GenericEventInfoListProperties(l.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, M.AllianceAndPlayerPointEventRewardListDialog.TAB_PLAYER));
  };
  CastleNomadInvasionPointsEventSublayer.prototype.showHelp = function () {
    L.CastleDialogHandler.getInstance().showHelper("", p.Localize.text("help_nomadinvasion"));
  };
  CastleNomadInvasionPointsEventSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.scoreBar) {
      this.scoreBar.destroy();
      E.CastleBasicController.getInstance().removeEventListener(O.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    }
    if (this._seasonLeague) {
      this._seasonLeague.onHide();
    }
  };
  CastleNomadInvasionPointsEventSublayer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.btn_showMe:
        var i = y.CastleModel.userData.castleList.getMainCastleByKingdomID(u.WorldClassic.KINGDOM_ID);
        o.CommandController.instance.executeCommand(A.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [i.kingdomID, i.absAreaPosX, i.absAreaPosY]);
        this.controller.addEventListener(f.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
    }
  };
  CastleNomadInvasionPointsEventSublayer.prototype.onGAAarrived = function (e) {
    this.controller.removeEventListener(f.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
    y.CastleModel.smartfoxClient.sendCommandVO(new m.C2SFindNextMapObjectVO(d.WorldConst.AREA_TYPE_NOMAD_CAMP, u.WorldClassic.KINGDOM_ID, -1, -1, r.DungeonConst.BASIC_NOMAD_CAMP_PLAYER_ID));
  };
  CastleNomadInvasionPointsEventSublayer.prototype.onUpdatePoints = function (e = null) {
    this.updateProgressBars();
  };
  Object.defineProperty(CastleNomadInvasionPointsEventSublayer.prototype, "tooltipValues", {
    get: function () {
      var e = [];
      for (var t = 0; t < this.scoreBarData.pointThresholds.length && this.scoreBarData.pointThresholds[t] != 0; t++) {
        e.push(this.scoreBarData.pointThresholds[t]);
      }
      for (var i = 0; i < this.scoreBarData.topX.length; i++) {
        e.push(this.scoreBarData.topX[i]);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNomadInvasionPointsEventSublayer.prototype, "levelLabels", {
    get: function () {
      var e = [];
      var t = 0;
      for (t = 0; t < this.scoreBarData.pointThresholds.length && this.scoreBarData.pointThresholds[t] != 0; t++) {
        e.push(this.scoreBarData.pointThresholds[t]);
      }
      for (t = 0; t < this.scoreBarData.topX.length; t++) {
        e.push(p.Localize.text("Ranking_TopX", [this.scoreBarData.topX[t]]));
      }
      e.push(p.Localize.text("Ranking_Winner"));
      return e;
    },
    enumerable: true,
    configurable: true
  });
  CastleNomadInvasionPointsEventSublayer.prototype.updateProgressBars = function () {
    this.scoreBar.update(new b.CastleScoreBarProgressVO(this.scoreBarData.ownPoints, this.scoreBarData.ownRank, this.scoreBarData.pointThresholds, this.scoreBarData.topX, this.scoreBarData.rewardsReceived));
    if (this.scoreBarData.ownRank > 0) {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_disabledRanking.txt_value, new h.LocalizedNumberVO(this.scoreBarData.ownRank));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_disabledRanking.txt_value, new C.TextVO("-"));
    }
  };
  Object.defineProperty(CastleNomadInvasionPointsEventSublayer.prototype, "eventVO", {
    get: function () {
      return y.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    },
    enumerable: true,
    configurable: true
  });
  return CastleNomadInvasionPointsEventSublayer;
}(T.CastleDialogSubLayer);
exports.CastleNomadInvasionPointsEventSublayer = S;
var A = require("./29.js");
var L = require("./9.js");
var P = require("./464.js");
var M = require("./332.js");
var R = require("./655.js");
var V = require("./465.js");
var x = require("./1092.js");
a.classImplementsInterfaces(S, "ICollectableRendererList", "ISublayer");