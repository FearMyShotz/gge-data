Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = function (e) {
  function CastleStormIslandsMainDialogPerformancePlayer(t, i) {
    var n = e.call(this, t) || this;
    n.performanceVO = new C.PlayerPerformanceVO();
    n.mainDialog = i;
    return n;
  }
  n.__extends(CastleStormIslandsMainDialogPerformancePlayer, e);
  CastleStormIslandsMainDialogPerformancePlayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.subLayerDisp.mc_icon0.toolTipText = "stats_island_aquamarineCollected";
    this.subLayerDisp.mc_icon1.toolTipText = "stats_island_aquamarineIn_island_village";
    this.subLayerDisp.mc_icon2.toolTipText = "stats_island_aquamarineIn_dungeon_castleName_4";
    this.subLayerDisp.mc_icon3.toolTipText = "stats_island_aquamarineIn_PvP";
    this.subLayerDisp.mc_icon4.toolTipText = "stats_island_aquamarineOut_cargoShip";
    this.subLayerDisp.mc_icon5.toolTipText = "stats_island_aquamarineOut_versusPlayer";
    this.subLayerDisp.icon_level.toolTipText = "level";
    this.subLayerDisp.icon_aquaPoints.toolTipText = "aquamarin_points_alliance_tooltip";
    this.subLayerDisp.btn_performanceAlliance.actLikeButton = true;
    this.subLayerDisp.btn_performancePlayer.actLikeButton = true;
    this.subLayerDisp.btn_titles.actLikeButton = true;
    this.subLayerDisp.btn_performanceAlliance.gotoAndStop(1);
    this.subLayerDisp.btn_performancePlayer.gotoAndStop(2);
    this.subLayerDisp.btn_titles.gotoAndStop(1);
    this.subLayerDisp.btn_performanceAlliance.mouseChildren = false;
    this.subLayerDisp.btn_performancePlayer.mouseChildren = false;
    this.subLayerDisp.btn_titles.mouseChildren = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_performanceAlliance.txt_text1, new a.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("alliancePerformance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_performancePlayer.txt_text, new a.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("myPerformance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_titles.txt_text1, new a.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_stormTitles_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item0.txt_name, new s.LocalizedTextVO("stats_island_aquamarineCollected"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item1.txt_name, new s.LocalizedTextVO("stats_island_aquamarineIn_island_village"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item2.txt_name, new s.LocalizedTextVO("stats_island_aquamarineIn_dungeon_castleName_4"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item3.txt_name, new s.LocalizedTextVO("stats_island_aquamarineIn_PvP"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item4.txt_name, new s.LocalizedTextVO("stats_island_aquamarineOut_cargoShip"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item5.txt_name, new s.LocalizedTextVO("stats_island_aquamarineOut_versusPlayer"));
    this.controller.addEventListener(_.CastleServerMessageArrivedEvent.PERFORMANCE_PLAYER_ARRIVED, this.bindFunction(this.onInformationArrived));
    p.CastleModel.smartfoxClient.sendCommandVO(new g.C2SGetPlayerPerformanceVO(p.CastleModel.userData.playerID, h.EventConst.EVENTTYPE_ISLAND_KINGDOM));
    this.updateDialog();
  };
  CastleStormIslandsMainDialogPerformancePlayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.controller.removeEventListener(_.CastleServerMessageArrivedEvent.PERFORMANCE_PLAYER_ARRIVED, this.bindFunction(this.onInformationArrived));
  };
  CastleStormIslandsMainDialogPerformancePlayer.prototype.onInformationArrived = function (e) {
    this.performanceVO = e.params[0];
    this.updateDialog();
  };
  CastleStormIslandsMainDialogPerformancePlayer.prototype.updateDialog = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_name, new a.TextVO(p.CastleModel.userData.userName));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_allianceName, new a.TextVO(p.CastleModel.userData.allianceName));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_level, new r.LocalizedNumberVO(p.CastleModel.userData.level));
    if (this.vo.points > -1) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_aquaPoints, new r.LocalizedNumberVO(this.vo.points));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_aquaPoints, new a.TextVO("-"));
    }
    u.CrestHelper.setCrestGraphics(this.subLayerDisp.mc_playercrest, p.CastleModel.userData.playerCrest);
    if (this.vo) {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_item0.txt_value, new r.LocalizedNumberVO(this.vo.getPerformanceData(m.StatisticsConst.AQUAMARINE_TOTAL)));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_item1.txt_value, new r.LocalizedNumberVO(this.vo.getPerformanceData(m.StatisticsConst.AQUAMARINE_RESOURCE_ISLE)));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_item2.txt_value, new r.LocalizedNumberVO(this.vo.getPerformanceData(m.StatisticsConst.AQUAMARINE_STORM_FORTRESS)));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_item3.txt_value, new r.LocalizedNumberVO(this.vo.getPerformanceData(m.StatisticsConst.AQUAMARINE_PVP)));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_item4.txt_value, new r.LocalizedNumberVO(this.vo.getPerformanceData(m.StatisticsConst.AQUAMARINE_SPENT)));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_item5.txt_value, new r.LocalizedNumberVO(this.vo.getPerformanceData(m.StatisticsConst.AQUAMARINE_LOST_PVP)));
    }
  };
  CastleStormIslandsMainDialogPerformancePlayer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.btn_performanceAlliance:
        this.mainDialog.setCategory(c.CastleStormIslandsMainDialog.TAB_PERFORMANCE_ALLIANCE);
        break;
      case this.subLayerDisp.btn_performancePlayer:
        this.mainDialog.setCategory(c.CastleStormIslandsMainDialog.TAB_PERFORMANCE_PLAYER);
        break;
      case this.subLayerDisp.btn_titles:
        this.mainDialog.setCategory(c.CastleStormIslandsMainDialog.TAB_TITLES);
    }
  };
  Object.defineProperty(CastleStormIslandsMainDialogPerformancePlayer.prototype, "vo", {
    get: function () {
      return this.performanceVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleStormIslandsMainDialogPerformancePlayer;
}(require("./34.js").CastleDialogSubLayer);
exports.CastleStormIslandsMainDialogPerformancePlayer = l;
var c = require("./473.js");
var u = require("./61.js");
var d = require("./13.js");
var p = require("./4.js");
var h = require("./5.js");
var g = require("./965.js");
var C = require("./751.js");
var _ = require("./37.js");
var m = require("./5.js");
o.classImplementsInterfaces(l, "ICollectableRendererList", "ISublayer");