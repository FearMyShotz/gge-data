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
  function CastleAllianceBattlegroundEventDialogPerformancePlayerTower(t, i) {
    var n = e.call(this, t) || this;
    n.performanceVO = new m.PlayerPerformanceVO();
    n.mainDialog = i;
    return n;
  }
  n.__extends(CastleAllianceBattlegroundEventDialogPerformancePlayerTower, e);
  CastleAllianceBattlegroundEventDialogPerformancePlayerTower.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.subLayerDisp.mc_item0.toolTipText = "stats_contributeAllianceStatuette";
    this.subLayerDisp.mc_item1.toolTipText = "stats_attackAmountEnemyAllianceTower";
    this.subLayerDisp.mc_item2.toolTipText = "stats_defenseAmountAllianceTower";
    this.subLayerDisp.mc_item3.toolTipText = "stats_defenseAmountAllianceCastle";
    this.subLayerDisp.mc_item4.toolTipText = "stats_buffActivationAllianceCastle";
    this.subLayerDisp.mc_item5.toolTipText = "stats_buffIncreaseAllianceCastle";
    this.subLayerDisp.mc_level.toolTipText = "level";
    this.subLayerDisp.mc_might.toolTipText = "playerMight";
    this.subLayerDisp.btn_alliance.actLikeButton = true;
    this.subLayerDisp.btn_player.actLikeButton = true;
    this.subLayerDisp.btn_alliance.gotoAndStop(2);
    this.subLayerDisp.btn_player.gotoAndStop(1);
    this.subLayerDisp.btn_alliance.mouseChildren = false;
    this.subLayerDisp.btn_player.mouseChildren = false;
    this.subLayerDisp.btn_tower.actLikeButton = true;
    this.subLayerDisp.btn_tower.gotoAndStop(2);
    this.subLayerDisp.btn_tower.mouseChildren = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_tower.txt_text1, new r.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_AllianceTower_overview_title")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_alliance.txt_text1, new r.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("alliancePerformance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_player.txt_text, new r.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("myPerformance")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item0.txt_name, new l.LocalizedTextVO("stats_contributeAllianceStatuette"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item1.txt_name, new l.LocalizedTextVO("stats_attackAmountEnemyAllianceTower"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item2.txt_name, new l.LocalizedTextVO("stats_defenseAmountAllianceTower"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item3.txt_name, new l.LocalizedTextVO("stats_defenseAmountAllianceCastle"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item4.txt_name, new l.LocalizedTextVO("stats_buffIncreaseAllianceCastle"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item5.txt_name, new l.LocalizedTextVO("stats_buffActivationAllianceCastle"));
    this.controller.addEventListener(d.CastleServerMessageArrivedEvent.PERFORMANCE_PLAYER_ARRIVED, this.bindFunction(this.onInformationArrived));
    a.BasicModel.smartfoxClient.sendCommandVO(new u.C2SGetPlayerPerformanceVO(h.CastleModel.userData.playerID, s.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND));
  };
  CastleAllianceBattlegroundEventDialogPerformancePlayerTower.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.controller.removeEventListener(d.CastleServerMessageArrivedEvent.PERFORMANCE_PLAYER_ARRIVED, this.bindFunction(this.onInformationArrived));
  };
  CastleAllianceBattlegroundEventDialogPerformancePlayerTower.prototype.onInformationArrived = function (e) {
    this.performanceVO = e.params[0];
    this.updateDialog();
  };
  CastleAllianceBattlegroundEventDialogPerformancePlayerTower.prototype.updateDialog = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_name, new r.TextVO(h.CastleModel.userData.userName));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_allianceName, new r.TextVO(h.CastleModel.userData.allianceName));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_level, new c.LocalizedNumberVO(h.CastleModel.userData.level));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_might, new c.LocalizedNumberVO(h.CastleModel.mightData.userCurrentMight));
    C.CrestHelper.setCrestGraphics(this.subLayerDisp.mc_playercrest, h.CastleModel.userData.playerCrest);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item0.txt_value, new c.LocalizedNumberVO(this.vo.getPerformanceData(f.StatisticsConst.CONTRIBUTION_TO_ALLIANCE_TOWER_POINTS)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item1.txt_value, new c.LocalizedNumberVO(this.vo.getPerformanceData(f.StatisticsConst.ALLIANCE_TOWERS_DEFEATED)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item2.txt_value, new c.LocalizedNumberVO(this.vo.getPerformanceData(f.StatisticsConst.ALLIANCE_TOWERS_DEFENDED)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item3.txt_value, new c.LocalizedNumberVO(this.vo.getPerformanceData(f.StatisticsConst.ALLIANCE_CASTLES_DEFENDED)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item4.txt_value, new c.LocalizedNumberVO(this.vo.getPerformanceData(f.StatisticsConst.TOWER_EFFECT_BUFFS_PURCHASED)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item5.txt_value, new c.LocalizedNumberVO(this.vo.getPerformanceData(f.StatisticsConst.TOWER_EFFECT_BUFFS_ACTIVATED)));
  };
  CastleAllianceBattlegroundEventDialogPerformancePlayerTower.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.btn_alliance:
        this.mainDialog.setCategory(_.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_TOWER);
        break;
      case this.subLayerDisp.btn_player:
        this.mainDialog.setCategory(_.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_TOWER);
        break;
      case this.subLayerDisp.btn_tower:
        this.mainDialog.setCategory(_.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_TOWER);
    }
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformancePlayerTower.prototype, "vo", {
    get: function () {
      return this.performanceVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceBattlegroundEventDialogPerformancePlayerTower;
}(require("./35.js").CastleDialogSubLayer);
exports.CastleAllianceBattlegroundEventDialogPerformancePlayerTower = g;
var C = require("./61.js");
var _ = require("./249.js");
var m = require("./753.js");
var f = require("./5.js");
o.classImplementsInterfaces(g, "ICollectableRendererList", "ISublayer");