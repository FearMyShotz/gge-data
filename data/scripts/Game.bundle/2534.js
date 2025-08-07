Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./966.js");
var d = require("./37.js");
var p = require("./13.js");
var h = require("./4.js");
var g = function (e) {
  function CastleAllianceBattlegroundEventDialogPerformancePlayerCollector(t, i) {
    var n = e.call(this, t) || this;
    n.performanceVO = new m.PlayerPerformanceVO();
    n.mainDialog = i;
    return n;
  }
  n.__extends(CastleAllianceBattlegroundEventDialogPerformancePlayerCollector, e);
  CastleAllianceBattlegroundEventDialogPerformancePlayerCollector.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.subLayerDisp.mc_icon0.toolTipText = "stats_contributeAllianceInfluence";
    this.subLayerDisp.mc_icon1.toolTipText = "stats_cityStatesConquered";
    this.subLayerDisp.mc_icon2.toolTipText = "stats_capitalsLooted";
    this.subLayerDisp.mc_icon3.toolTipText = "stats_influenceCityStates";
    this.subLayerDisp.mc_icon4.toolTipText = "stats_influenceEnemyCastles";
    this.subLayerDisp.mc_icon5.toolTipText = "stats_influenceEnemyCapitals";
    this.subLayerDisp.mc_level.toolTipText = "level";
    this.subLayerDisp.mc_might.toolTipText = "playerMight";
    this.subLayerDisp.btn_alliance.actLikeButton = true;
    this.subLayerDisp.btn_player.actLikeButton = true;
    this.subLayerDisp.btn_alliance.gotoAndStop(2);
    this.subLayerDisp.btn_player.gotoAndStop(1);
    this.subLayerDisp.btn_alliance.mouseChildren = false;
    this.subLayerDisp.btn_player.mouseChildren = false;
    if (this.subLayerDisp.btn_tower) {
      this.textFieldManager.registerTextField(this.subLayerDisp.btn_tower.txt_text, new r.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_AllianceTower_overview_title")));
    }
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_alliance.txt_text1, new r.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("alliancePerformance")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_player.txt_text, new r.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("myPerformance")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item0.txt_name, new l.LocalizedTextVO("stats_contributeAllianceInfluence"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item1.txt_name, new l.LocalizedTextVO("stats_cityStatesConquered"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item2.txt_name, new l.LocalizedTextVO("stats_capitalsLooted"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item3.txt_name, new l.LocalizedTextVO("stats_influenceCityStates"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item4.txt_name, new l.LocalizedTextVO("stats_influenceEnemyCastles"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item5.txt_name, new l.LocalizedTextVO("stats_influenceEnemyCapitals"));
    this.controller.addEventListener(d.CastleServerMessageArrivedEvent.PERFORMANCE_PLAYER_ARRIVED, this.bindFunction(this.onInformationArrived));
    a.BasicModel.smartfoxClient.sendCommandVO(new u.C2SGetPlayerPerformanceVO(h.CastleModel.userData.playerID, s.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND));
  };
  CastleAllianceBattlegroundEventDialogPerformancePlayerCollector.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.controller.removeEventListener(d.CastleServerMessageArrivedEvent.PERFORMANCE_PLAYER_ARRIVED, this.bindFunction(this.onInformationArrived));
  };
  CastleAllianceBattlegroundEventDialogPerformancePlayerCollector.prototype.onInformationArrived = function (e) {
    this.performanceVO = e.params[0];
    this.updateDialog();
  };
  CastleAllianceBattlegroundEventDialogPerformancePlayerCollector.prototype.updateDialog = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_name, new r.TextVO(h.CastleModel.userData.userName));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_allianceName, new r.TextVO(h.CastleModel.userData.allianceName));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_level, new c.LocalizedNumberVO(h.CastleModel.userData.level));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_might, new c.LocalizedNumberVO(h.CastleModel.mightData.userCurrentMight));
    C.CrestHelper.setCrestGraphics(this.subLayerDisp.mc_playercrest, h.CastleModel.userData.playerCrest);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item0.txt_value, new c.LocalizedNumberVO(this.vo.getPerformanceData(f.StatisticsConst.CONTRIBUTION_TO_ALLIANCE_INFLUENCE)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item1.txt_value, new c.LocalizedNumberVO(this.vo.getPerformanceData(f.StatisticsConst.CITY_STATES_CONQUERED)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item2.txt_value, new c.LocalizedNumberVO(this.vo.getPerformanceData(f.StatisticsConst.CAPITALS_ATTACKED)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item3.txt_value, new c.LocalizedNumberVO(this.vo.getPerformanceData(f.StatisticsConst.INFLUENCE_FROM_CITY_STATES)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item4.txt_value, new c.LocalizedNumberVO(this.vo.getPerformanceData(f.StatisticsConst.INFLUENCE_FROM_ENEMY_CASTLES)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item5.txt_value, new c.LocalizedNumberVO(this.vo.getPerformanceData(f.StatisticsConst.INFLUENCE_FROM_ENEMY_CAPITALS)));
  };
  CastleAllianceBattlegroundEventDialogPerformancePlayerCollector.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.btn_alliance:
        this.mainDialog.setCategory(_.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_COLLECTOR);
        break;
      case this.subLayerDisp.btn_player:
        this.mainDialog.setCategory(_.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_COLLECTOR);
    }
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformancePlayerCollector.prototype, "vo", {
    get: function () {
      return this.performanceVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceBattlegroundEventDialogPerformancePlayerCollector;
}(require("./35.js").CastleDialogSubLayer);
exports.CastleAllianceBattlegroundEventDialogPerformancePlayerCollector = g;
var C = require("./61.js");
var _ = require("./249.js");
var m = require("./753.js");
var f = require("./5.js");
o.classImplementsInterfaces(g, "ICollectableRendererList", "ISublayer");