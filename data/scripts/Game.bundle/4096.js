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
var p = require("./8.js");
var h = function (e) {
  function ABGAllianceCollectorPointDepletionInfoPanel() {
    return e.call(this, ABGAllianceCollectorPointDepletionInfoPanel.NAME) || this;
  }
  n.__extends(ABGAllianceCollectorPointDepletionInfoPanel, e);
  ABGAllianceCollectorPointDepletionInfoPanel.prototype.onClick = function (t) {
    if (!this.isLocked && p.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.panelDisp.mc_info:
      }
    }
  };
  ABGAllianceCollectorPointDepletionInfoPanel.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    d.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.panelDisp.mc_disabled.toolTipText = "depletion_influence_tt";
    if (this.boosterBuildingVO) {
      this.panelDisp.mc_info.toolTipText = {
        t: "help_depletion_influence_tt",
        p: [this.boosterBuildingVO.mineVO.maxInfluencePoints]
      };
    }
    this.updateData();
    this.controller.addEventListener(c.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES, this.bindFunction(this.onShowSpecialResources));
    this.controller.addEventListener(c.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES, this.bindFunction(this.onHideSpecialResources));
    this.onHideSpecialResources();
  };
  ABGAllianceCollectorPointDepletionInfoPanel.prototype.onHideSpecialResources = function (e = null) {
    r.TweenLite.to(this.panelDisp, 0.3, {
      autoAlpha: 1,
      delay: 0.3
    });
  };
  ABGAllianceCollectorPointDepletionInfoPanel.prototype.onShowSpecialResources = function (e) {
    r.TweenLite.to(this.panelDisp, 0, {
      autoAlpha: 0,
      delay: 0
    });
  };
  ABGAllianceCollectorPointDepletionInfoPanel.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    d.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.controller.removeEventListener(c.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES, this.bindFunction(this.onShowSpecialResources));
    this.controller.removeEventListener(c.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES, this.bindFunction(this.onHideSpecialResources));
  };
  ABGAllianceCollectorPointDepletionInfoPanel.prototype.updateData = function () {
    this.updateTime();
  };
  ABGAllianceCollectorPointDepletionInfoPanel.prototype.updateTime = function (e = null) {
    if (u.ABGHelper.abgEvent) {
      var t = this.boosterBuildingVO;
      if (t) {
        this.textFieldManager.registerTextField(this.panelDisp.txt_time, new s.TextVO(o.TimeStringHelper.getHoureMinutesTimeString(t.timeTillEmptyInSeconds)));
      }
    } else {
      this.hide();
    }
  };
  Object.defineProperty(ABGAllianceCollectorPointDepletionInfoPanel.prototype, "boosterBuildingVO", {
    get: function () {
      var e = g.Iso.renderer.objects.innerBuildings.list;
      if (e != null) {
        for (var t = 0, i = e; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && n.buildingVO.name == "MetropolisBooster") {
            return n.buildingVO;
          }
        }
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  ABGAllianceCollectorPointDepletionInfoPanel.prototype.updatePosition = function () {
    if (this.externalClip && this.externalClip.stage) {
      this.externalClip.y = 65;
      this.externalClip.x = this.externalClip.stage.stageWidth / 2;
    }
  };
  ABGAllianceCollectorPointDepletionInfoPanel.NAME = "ABGAllianceCollectorPointDepletionInfo";
  return ABGAllianceCollectorPointDepletionInfoPanel;
}(require("./844.js").CastleExternalPanel);
exports.ABGAllianceCollectorPointDepletionInfoPanel = h;
var g = require("./33.js");
a.classImplementsInterfaces(h, "ICollectableRendererList");