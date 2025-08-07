Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./35.js");
var c = require("./474.js");
var u = require("./78.js");
var d = require("./76.js");
var p = require("./77.js");
var h = require("./4018.js");
var g = require("./13.js");
var C = require("./1762.js");
var _ = require("./4.js");
var m = require("./1761.js");
var f = require("./172.js");
var O = require("./61.js");
var E = function (e) {
  function CastleStormIslandsMainDialogPerformanceAlliance(t, i) {
    var n = e.call(this, t) || this;
    n.mainDialog = i;
    var o = new p.InfiniteScrollListOptions(h.CastleStormIslandsMainDialogPerformanceAllianceItem, "CastleStormIslandsMainPerformanceAlliance_Item", c.CastleStormIslandsMainDialog.NAME);
    o.itemPaddingY = 4;
    o.useSmoothScroll = true;
    n._scrollList = new u.InfiniteScrollListComponent(new d.InfiniteScrollListClips(n.subLayerDisp.mc_list).addMaskMc(n.subLayerDisp.mc_list.mc_mask).addSliderMc(n.subLayerDisp.mc_list.mc_slider).addItemContainerMc(n.subLayerDisp.mc_list.mc_items), o);
    n.subLayerDisp.icon_rank.toolTipText = "rank";
    n.subLayerDisp.icon_level.toolTipText = "level";
    n.subLayerDisp.icon_aquaPoints.toolTipText = "cargo_points";
    n.subLayerDisp.mc_topContributor.icon_aquapoints.toolTipText = "cargo_points";
    return n;
  }
  n.__extends(CastleStormIslandsMainDialogPerformanceAlliance, e);
  CastleStormIslandsMainDialogPerformanceAlliance.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.subLayerDisp.btn_performanceAlliance.actLikeButton = true;
    this.subLayerDisp.btn_performancePlayer.actLikeButton = true;
    this.subLayerDisp.btn_titles.actLikeButton = true;
    this.subLayerDisp.btn_performanceAlliance.gotoAndStop(2);
    this.subLayerDisp.btn_performancePlayer.gotoAndStop(1);
    this.subLayerDisp.btn_titles.gotoAndStop(1);
    this.subLayerDisp.btn_performanceAlliance.mouseChildren = false;
    this.subLayerDisp.btn_performancePlayer.mouseChildren = false;
    this.subLayerDisp.btn_titles.mouseChildren = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_performanceAlliance.txt_text, new a.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("alliancePerformance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_performancePlayer.txt_text1, new a.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("myPerformance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_titles.txt_text1, new a.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_stormTitles_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_name, new a.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_highscore_name")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_topContributor.txt_top, new s.LocalizedTextVO("topContributor_colon"));
    if (_.CastleModel.userData.isInAlliance && _.CastleModel.allianceData.myAllianceVO) {
      if (_.CastleModel.allianceData.myAllianceVO.allianceEnteredIslands) {
        this.controller.addEventListener(f.CastleHighscoreEvent.AQUAPOINTS_HIGSCORE_ALLY_PLAYER, this.bindFunction(this.onGetHighscoreData));
        this.subLayerDisp.txt_noAlliance.visible = false;
        this.requestHighscoreData();
      } else {
        this.subLayerDisp.mc_list.visible = false;
        this.subLayerDisp.mc_topContributor.visible = false;
        this.subLayerDisp.txt_noAlliance.visible = true;
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_noAlliance, new s.LocalizedTextVO("dialog_island_main_internalAllianceRanking_noMemberjoined_desc"));
      }
    } else {
      this.subLayerDisp.mc_list.visible = false;
      this.subLayerDisp.mc_topContributor.visible = false;
      this.subLayerDisp.txt_noAlliance.visible = true;
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_noAlliance, new s.LocalizedTextVO("dialog_island_main_internalAllianceRanking_notAllianceMember_desc"));
    }
  };
  CastleStormIslandsMainDialogPerformanceAlliance.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._scrollList.onHide();
    this.controller.removeEventListener(f.CastleHighscoreEvent.AQUAPOINTS_HIGSCORE_ALLY_PLAYER, this.bindFunction(this.onGetHighscoreData));
  };
  CastleStormIslandsMainDialogPerformanceAlliance.prototype.onClick = function (t) {
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
  CastleStormIslandsMainDialogPerformanceAlliance.prototype.requestHighscoreData = function () {
    var e = _.CastleModel.allianceData.myAllianceVO.allianceId;
    _.CastleModel.smartfoxClient.sendCommandVO(new m.C2SAllianceMemberAquaPoints(e));
  };
  CastleStormIslandsMainDialogPerformanceAlliance.prototype.onGetHighscoreData = function (e) {
    var t = this.createHighscoreList(e.params[0].APH);
    this._scrollList.onShow();
    this._scrollList.updateWithNewData(t);
    this.subLayerDisp.mc_list.visible = true;
    this.subLayerDisp.mc_topContributor.visible = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_topContributor.txt_top_name, new a.TextVO(g.TextHelper.toUpperCaseLocaSafe(t[0].playerName)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_topContributor.txt_top_points, new r.LocalizedNumberVO(t[0].aquaPoints));
    O.CrestHelper.setCrestGraphics(this.subLayerDisp.mc_topContributor.mc_playercrest, t[0].crestVO);
  };
  CastleStormIslandsMainDialogPerformanceAlliance.prototype.createHighscoreList = function (e) {
    var t = [];
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      t[i] = new C.CastleEilandPlayerRankingItemVO(n);
    }
    t.sort(this.bindFunction(this.sort));
    i = 0;
    for (; i < t.length; i++) {
      t[i].rank = i + 1;
    }
    return t;
  };
  CastleStormIslandsMainDialogPerformanceAlliance.prototype.sort = function (e, t) {
    if (!e.hasUnlockedEiland && t.hasUnlockedEiland) {
      return 1;
    } else if (e.hasUnlockedEiland && !t.hasUnlockedEiland) {
      return -1;
    } else if (e.hasUnlockedEiland || t.hasUnlockedEiland) {
      if (e.aquaPoints > t.aquaPoints) {
        return -1;
      } else if (e.aquaPoints < t.aquaPoints) {
        return 1;
      } else {
        return e.allianceRank - t.allianceRank;
      }
    } else {
      return e.allianceRank - t.allianceRank;
    }
  };
  return CastleStormIslandsMainDialogPerformanceAlliance;
}(l.CastleDialogSubLayer);
exports.CastleStormIslandsMainDialogPerformanceAlliance = E;
o.classImplementsInterfaces(E, "ICollectableRendererList", "ISublayer");