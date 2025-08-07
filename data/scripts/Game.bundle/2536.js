Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./1232.js");
var l = require("./37.js");
var c = require("./21.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./27.js");
var h = require("./76.js");
var g = require("./77.js");
var C = function (e) {
  function CastleAllianceBattlegroundEventDialogPerformanceTower(t, i) {
    var n = e.call(this, t) || this;
    n.mainDialog = i;
    var o = new g.InfiniteScrollListOptions(f.CastleAllianceBattlegroundEventDialogPerformanceTowerItem, "CastleABGEventDialog_TowerItem", m.CastleAllianceBattleGroundEventDialog.NAME);
    o.itemPaddingY = 7;
    o.useSmoothScroll = true;
    n._scrollList = new _.InfiniteScrollListComponent(new h.InfiniteScrollListClips(n.subLayerDisp.mc_list).addMaskMc(n.subLayerDisp.mc_list.mc_mask).addSliderMc(n.subLayerDisp.mc_list.mc_slider).addItemContainerMc(n.subLayerDisp.mc_list.mc_items), o);
    return n;
  }
  n.__extends(CastleAllianceBattlegroundEventDialogPerformanceTower, e);
  CastleAllianceBattlegroundEventDialogPerformanceTower.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_AllianceTower_overview_subTitle")));
    this.subLayerDisp.btn_alliance.actLikeButton = true;
    this.subLayerDisp.btn_player.actLikeButton = true;
    this.subLayerDisp.btn_alliance.gotoAndStop(2);
    this.subLayerDisp.btn_player.gotoAndStop(2);
    this.subLayerDisp.btn_alliance.mouseChildren = false;
    this.subLayerDisp.btn_player.mouseChildren = false;
    this.subLayerDisp.btn_tower.actLikeButton = true;
    this.subLayerDisp.btn_tower.gotoAndStop(1);
    this.subLayerDisp.btn_tower.mouseChildren = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_tower.txt_text, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_AllianceTower_overview_title")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_alliance.txt_text1, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("alliancePerformance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_player.txt_text1, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("myPerformance")));
    this.itxt_reassign = this.textFieldManager.registerTextField(this.subLayerDisp.mc_reassign.txt_time0, new s.TextVO(""));
    this.itxt_revive = this.textFieldManager.registerTextField(this.subLayerDisp.mc_revive.txt_time1, new s.TextVO(""));
    this.subLayerDisp.mc_reassign.toolTipText = "dialog_remainingTime_AllianceTower_towerReassignment_tooltip";
    this.subLayerDisp.mc_revive.toolTipText = "dialog_remainingTime_AllianceTower_playerRevive_tooltip";
    this.subLayerDisp.mc_reassign.mouseChildren = false;
    this.subLayerDisp.mc_revive.mouseChildren = false;
    this.onTimer();
    d.CastleModel.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.controller.addEventListener(l.CastleServerMessageArrivedEvent.ABG_TOWERS_LIST_INFO, this.bindFunction(this.updateItems));
    a.BasicModel.smartfoxClient.sendCommandVO(new r.C2SAllianceBattleGroundGetTowerInfoVO(d.CastleModel.userData.allianceID));
    this._scrollList.onShow();
  };
  CastleAllianceBattlegroundEventDialogPerformanceTower.prototype.onTimer = function (e = null) {
    this.itxt_reassign.textContentVO.stringValue = p.CastleTimeStringHelper.getShortTimeString(d.CastleModel.allianceBattlegroundData.remainingSecondsTillRelink);
    this.itxt_revive.textContentVO.stringValue = p.CastleTimeStringHelper.getShortTimeString(d.CastleModel.allianceBattlegroundData.remainingSecondsTillRevive);
  };
  CastleAllianceBattlegroundEventDialogPerformanceTower.prototype.hide = function () {
    e.prototype.hide.call(this);
    d.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.controller.removeEventListener(l.CastleServerMessageArrivedEvent.ABG_TOWERS_LIST_INFO, this.bindFunction(this.updateItems));
    this._scrollList.onHide();
  };
  CastleAllianceBattlegroundEventDialogPerformanceTower.prototype.updateItems = function (e) {
    var t = [];
    for (var i = e.params, n = 0; n < i.length; n += 2) {
      var o = {
        vo1: i[n]
      };
      if (i.length > n + 1) {
        o.vo2 = i[n + 1];
      }
      t.push(o);
    }
    this._scrollList.updateWithNewData(t);
  };
  CastleAllianceBattlegroundEventDialogPerformanceTower.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.btn_alliance:
        this.mainDialog.setCategory(m.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_TOWER);
        break;
      case this.subLayerDisp.btn_player:
        this.mainDialog.setCategory(m.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_TOWER);
        break;
      case this.subLayerDisp.btn_tower:
        this.mainDialog.setCategory(m.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_TOWER);
    }
  };
  return CastleAllianceBattlegroundEventDialogPerformanceTower;
}(require("./35.js").CastleDialogSubLayer);
exports.CastleAllianceBattlegroundEventDialogPerformanceTower = C;
var _ = require("./78.js");
var m = require("./249.js");
var f = require("./2537.js");
o.classImplementsInterfaces(C, "ICollectableRendererList", "ISublayer");