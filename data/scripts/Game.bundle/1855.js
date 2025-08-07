Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./23.js");
var l = require("./21.js");
var c = require("./338.js");
var u = require("./53.js");
var d = require("./4.js");
var p = require("./52.js");
var h = function (e) {
  function ABGAllianceTowerPointMalusInfoPanel() {
    return e.call(this, ABGAllianceTowerPointMalusInfoPanel.NAME) || this;
  }
  n.__extends(ABGAllianceTowerPointMalusInfoPanel, e);
  ABGAllianceTowerPointMalusInfoPanel.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    d.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.panelDisp.mc_malus.toolTipText = "statuetteMalusInfo_tt";
    this.panelDisp.mc_malus.mouseChildren = false;
    this.panelDisp.mc_info.toolTipText = "help_StatuetteMalusInfo_tt";
    this.panelDisp.mc_info.mouseChildren = false;
    this.updateData();
    this.controller.addEventListener(c.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES, this.bindFunction(this.onShowSpecialResources));
    this.controller.addEventListener(c.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES, this.bindFunction(this.onHideSpecialResources));
    this.onHideSpecialResources();
  };
  ABGAllianceTowerPointMalusInfoPanel.prototype.onHideSpecialResources = function (e = null) {
    r.TweenLite.to(this.panelDisp, 0.3, {
      autoAlpha: 1,
      delay: 0.3
    });
  };
  ABGAllianceTowerPointMalusInfoPanel.prototype.onShowSpecialResources = function (e) {
    r.TweenLite.to(this.panelDisp, 0, {
      autoAlpha: 0,
      delay: 0
    });
  };
  ABGAllianceTowerPointMalusInfoPanel.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    d.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.controller.removeEventListener(c.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES, this.bindFunction(this.onShowSpecialResources));
    this.controller.removeEventListener(c.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES, this.bindFunction(this.onHideSpecialResources));
  };
  ABGAllianceTowerPointMalusInfoPanel.prototype.updateData = function () {
    this.updateTime();
  };
  ABGAllianceTowerPointMalusInfoPanel.prototype.updateTime = function (e = null) {
    if (u.ABGHelper.abgEvent) {
      var t = d.CastleModel.allianceData.myAllianceVO.storage.getItemByTypeVO(new C.CollectableTypeVO(g.CollectableEnum.GENERIC_CURRENCY, p.ClientConstCurrency.ID_STATUETTE_MALUS));
      var i = t ? t.amount : 0;
      if (i == 0) {
        this.textFieldManager.registerTextField(this.panelDisp.txt_malus, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [i])).color = _.ClientConstColor.FONT_DEFAULT_COLOR;
      } else {
        this.textFieldManager.registerTextField(this.panelDisp.txt_malus, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [i])).color = _.ClientConstColor.MODERN_RED2;
      }
    } else {
      this.hide();
    }
  };
  ABGAllianceTowerPointMalusInfoPanel.prototype.updatePosition = function () {
    if (this.externalClip && this.externalClip.stage) {
      this.externalClip.y = 65;
      this.externalClip.x = this.externalClip.stage.stageWidth / 2;
      if (this.layoutManager.isOnMap) {
        this.externalClip.y -= 10;
        this.externalClip.x += 40;
      }
    }
  };
  ABGAllianceTowerPointMalusInfoPanel.NAME = "ABGAllianceTowerPointMalusInfo";
  return ABGAllianceTowerPointMalusInfoPanel;
}(require("./845.js").CastleExternalPanel);
exports.ABGAllianceTowerPointMalusInfoPanel = h;
var g = require("./12.js");
var C = require("./74.js");
var _ = require("./16.js");
a.classImplementsInterfaces(h, "ICollectableRendererList");