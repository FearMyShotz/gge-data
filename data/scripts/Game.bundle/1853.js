Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./23.js");
var u = require("./21.js");
var d = require("./32.js");
var p = require("./338.js");
var h = require("./53.js");
var g = require("./15.js");
var C = require("./4.js");
var _ = require("./52.js");
var m = require("./27.js");
var f = function (e) {
  function ABGAllianceCollectorPointPanel() {
    return e.call(this, ABGAllianceCollectorPointPanel.NAME) || this;
  }
  n.__extends(ABGAllianceCollectorPointPanel, e);
  ABGAllianceCollectorPointPanel.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    C.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.txt_ownPoints = this.textFieldManager.registerTextField(this.panelDisp.txt_points, new s.NumberVO(0));
    this.txt_alliPoints = this.textFieldManager.registerTextField(this.panelDisp.txt_alliRanking, new s.NumberVO(0));
    this.updateData();
    this.panelDisp.mc_tt_alliRank.toolTipText = new y.CollectableItemGenericCurrencyVO(_.ClientConstCurrency.ID_ALLIANCE_INFLUENCE).getNameTextId();
    this.panelDisp.mc_tt_alliRank.mouseChildren = false;
    this.panelDisp.mc_tt_points.toolTipText = new y.CollectableItemGenericCurrencyVO(_.ClientConstCurrency.ID_INFLUENCE).getNameTextId();
    this.panelDisp.mc_tt_points.mouseChildren = false;
    this.controller.addEventListener(p.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES, this.bindFunction(this.onShowSpecialResources));
    this.controller.addEventListener(p.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES, this.bindFunction(this.onHideSpecialResources));
    this.onHideSpecialResources();
    g.CastleBasicController.getInstance().addEventListener(d.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.updateData));
  };
  ABGAllianceCollectorPointPanel.prototype.onHideSpecialResources = function (e = null) {
    c.TweenLite.to(this.panelDisp, 0.3, {
      autoAlpha: 1,
      delay: 0.3
    });
  };
  ABGAllianceCollectorPointPanel.prototype.onShowSpecialResources = function (e) {
    c.TweenLite.to(this.panelDisp, 0, {
      autoAlpha: 0,
      delay: 0
    });
  };
  ABGAllianceCollectorPointPanel.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    C.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.controller.removeEventListener(p.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES, this.bindFunction(this.onShowSpecialResources));
    this.controller.removeEventListener(p.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES, this.bindFunction(this.onHideSpecialResources));
    g.CastleBasicController.getInstance().removeEventListener(d.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.updateData));
  };
  ABGAllianceCollectorPointPanel.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
  };
  ABGAllianceCollectorPointPanel.prototype.updateData = function (e = null) {
    var t;
    var i = C.CastleModel.currencyData.getAmountByType(new E.CollectableTypeVO(O.CollectableEnum.GENERIC_CURRENCY, _.ClientConstCurrency.ID_INFLUENCE));
    this.txt_ownPoints = this.textFieldManager.registerTextField(this.panelDisp.txt_points, new s.NumberVO(i));
    if (C.CastleModel.allianceData.myAllianceVO) {
      t = C.CastleModel.allianceData.myAllianceVO.storage.getItemByTypeVO(new E.CollectableTypeVO(O.CollectableEnum.GENERIC_CURRENCY, _.ClientConstCurrency.ID_ALLIANCE_INFLUENCE));
      this.txt_alliPoints = this.textFieldManager.registerTextField(this.panelDisp.txt_alliRanking, new s.NumberVO(t ? t.amount : 0));
    }
  };
  ABGAllianceCollectorPointPanel.prototype.updateTime = function (e = null) {
    if (h.ABGHelper.abgEvent) {
      this.textFieldManager.registerTextField(this.panelDisp.txt_time, new a.TextVO(m.CastleTimeStringHelper.getShortTimeString(h.ABGHelper.abgEvent.remainingEventTimeInSeconds)));
      var t = r.Localize.text("resttime") + "\n" + m.CastleTimeStringHelper.getFullTimeString(h.ABGHelper.abgEvent.remainingEventTimeInSeconds);
      this.panelDisp.mc_tt_time.toolTipText = t;
      this.panelDisp.mc_tt_time.mouseChildren = false;
      this.updateData();
    } else {
      this.hide();
    }
  };
  ABGAllianceCollectorPointPanel.prototype.updatePosition = function () {
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
  ABGAllianceCollectorPointPanel.NAME = "ABGAllianceCollectorPoint";
  return ABGAllianceCollectorPointPanel;
}(require("./845.js").CastleExternalPanel);
exports.ABGAllianceCollectorPointPanel = f;
var O = require("./12.js");
var E = require("./74.js");
var y = require("./155.js");
o.classImplementsInterfaces(f, "ICollectableRendererList");