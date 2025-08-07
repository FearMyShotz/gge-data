Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./23.js");
var u = require("./1699.js");
var d = require("./21.js");
var p = require("./338.js");
var h = require("./53.js");
var g = require("./4.js");
var C = require("./27.js");
var _ = function (e) {
  function ABGAllianceTowerPanel() {
    return e.call(this, ABGAllianceTowerPanel.NAME) || this;
  }
  n.__extends(ABGAllianceTowerPanel, e);
  ABGAllianceTowerPanel.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    g.CastleModel.timerData.addEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.txt_time0 = this.textFieldManager.registerTextField(this.panelDisp.txt_time0, new r.LocalizedNumberVO(0));
    this.txt_time1 = this.textFieldManager.registerTextField(this.panelDisp.txt_time1, new s.TextVO(""));
    this.txt_time2 = this.textFieldManager.registerTextField(this.panelDisp.txt_time2, new s.TextVO(""));
    this.panelDisp.mc_tt_time0.mouseChildren = false;
    this.panelDisp.mc_tt_time0.toolTipText = "currency_name_AllianceStatuette";
    this.panelDisp.mc_tt_time1.toolTipText = "dialog_remainingTime_AllianceTower_towerReassignment_tooltip";
    this.panelDisp.mc_tt_time1.mouseChildren = false;
    this.panelDisp.mc_tt_time2.toolTipText = "dialog_remainingTime_AllianceTower_playerRevive_tooltip";
    this.panelDisp.mc_tt_time2.mouseChildren = false;
    this.controller.addEventListener(p.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES, this.bindFunction(this.onShowSpecialResources));
    this.controller.addEventListener(p.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES, this.bindFunction(this.onHideSpecialResources));
    this.onHideSpecialResources();
    a.BasicModel.smartfoxClient.sendCommandVO(new u.C2SAllianceBattleGroundGetTimersVO());
  };
  ABGAllianceTowerPanel.prototype.onHideSpecialResources = function (e = null) {
    c.TweenLite.to(this.panelDisp, 0.3, {
      autoAlpha: 1,
      delay: 0.3
    });
  };
  ABGAllianceTowerPanel.prototype.onShowSpecialResources = function (e) {
    c.TweenLite.to(this.panelDisp, 0, {
      autoAlpha: 0,
      delay: 0
    });
  };
  ABGAllianceTowerPanel.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    g.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.controller.removeEventListener(p.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES, this.bindFunction(this.onShowSpecialResources));
    this.controller.removeEventListener(p.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES, this.bindFunction(this.onHideSpecialResources));
  };
  ABGAllianceTowerPanel.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
  };
  ABGAllianceTowerPanel.prototype.updateTime = function (e = null) {
    if (h.ABGHelper.abgEvent) {
      var t = l.int(h.ABGHelper.abgEvent.settingVO.allianceCurrencyID);
      var i = g.CastleModel.allianceData.myAllianceVO.storage.getItemByTypeVO(new f.CollectableTypeVO(m.CollectableEnum.GENERIC_CURRENCY, t));
      this.txt_time0.textContentVO.numberValue = i ? i.amount : 0;
      this.txt_time1.textContentVO.stringValue = C.CastleTimeStringHelper.getShortTimeString(g.CastleModel.allianceBattlegroundData.remainingSecondsTillRelink);
      this.txt_time2.textContentVO.stringValue = C.CastleTimeStringHelper.getShortTimeString(g.CastleModel.allianceBattlegroundData.remainingSecondsTillRevive);
    } else {
      this.hide();
    }
  };
  ABGAllianceTowerPanel.prototype.updatePosition = function () {
    if (this.externalClip && this.externalClip.stage) {
      var e = 30;
      var t = l.int(this.externalClip.stage.stageWidth / 2);
      if (this.layoutManager.isOnMap) {
        e -= 10;
        t += 40;
      }
      this.externalClip.y = e;
      this.externalClip.x = t;
    }
  };
  ABGAllianceTowerPanel.NAME = "ABGPanelAllianceTower";
  return ABGAllianceTowerPanel;
}(require("./844.js").CastleExternalPanel);
exports.ABGAllianceTowerPanel = _;
var m = require("./12.js");
var f = require("./74.js");
o.classImplementsInterfaces(_, "ICollectableRendererList");