Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./18.js");
var s = require("./91.js");
var r = require("./21.js");
var l = require("./4.js");
var c = require("./68.js");
var u = function (e) {
  function CastleSeasonEventActionPanel() {
    var t = this;
    t._isPanelActive = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, new Library.CastleInterfaceElements.SeasonEventActionPanel_Relicus()) || this;
  }
  n.__extends(CastleSeasonEventActionPanel, e);
  CastleSeasonEventActionPanel.prototype.init = function () {
    e.prototype.init.call(this);
    this.controller.addEventListener(s.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    l.CastleModel.timerData.addEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onChangeLayoutState));
    this._buttons = new f.PanelButtonsComponent(this.panelDisp.mc_buttons, Library.CastleInterfaceElements.ActionPanelButton);
    this.panelDisp.mc_buttons.mc_backgroundDeco.visible = false;
  };
  CastleSeasonEventActionPanel.prototype.buildButtons = function () {
    this._buttons.switchCreationMode(true);
    this._buttons.addMainButton(new h.PremiumMarketPanelButton());
    this._buttons.addMainButton(new p.MovementsPanelButton());
    this._buttons.addMainButton(new _.SeasonOverviewPanelButton());
    this._buttons.addMainButton(new d.BuildMenuPanelButton());
    this._buttons.addMainButton(new g.SeasonCampPanelButton());
    this._buttons.addMainButton(new m.SeasonWorldmapPanelButton());
    this._buttons.addMainButton(new C.SeasonHomeCastlePanelButton());
    this._buttons.switchCreationMode(false);
  };
  CastleSeasonEventActionPanel.prototype.show = function () {
    e.prototype.show.call(this);
    this.activatePanel();
    this._buttons.onShow();
    this.buildButtons();
  };
  CastleSeasonEventActionPanel.prototype.hide = function () {
    this._buttons.onHide();
    if (this.layoutManager.isInMyCastleBuildMode) {
      this.deactivatePanel();
    } else {
      e.prototype.hide.call(this);
    }
  };
  CastleSeasonEventActionPanel.prototype.destroy = function () {
    this.controller.removeEventListener(s.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    l.CastleModel.timerData.removeEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onChangeLayoutState));
    e.prototype.destroy.call(this);
  };
  CastleSeasonEventActionPanel.prototype.activatePanel = function () {
    this.panelDisp.mouseChildren = true;
    this._isPanelActive = true;
    this.panelDisp.filters = c.BitmapFilterHelper.NO_FILTER;
  };
  CastleSeasonEventActionPanel.prototype.deactivatePanel = function () {
    this.panelDisp.mouseChildren = false;
    this._isPanelActive = false;
    var e = new o.ColorMatrix();
    e.desaturate();
    this.panelDisp.filters = [e.filter];
    if (this.panelDisp.parent) {
      this.panelDisp.parent.setChildIndex(this.panelDisp, 0);
    }
  };
  CastleSeasonEventActionPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = this.disp.stage.stageHeight;
      this.disp.x = this.disp.stage.stageWidth;
      if (this.env.hasNetworkBuddies) {
        this.disp.y -= a.ClientConstCastle.BUDDY_PANEL_HEIGHT;
      }
    }
  };
  CastleSeasonEventActionPanel.prototype.onChangeLayoutState = function (e = null) {
    this._buttons.updateButtons();
    this.unLockPanel();
  };
  Object.defineProperty(CastleSeasonEventActionPanel.prototype, "panelDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleSeasonEventActionPanel.NAME = "CastleSeasonEventActionPanel";
  return CastleSeasonEventActionPanel;
}(require("./131.js").CastlePanel);
exports.CastleSeasonEventActionPanel = u;
var d = require("./1132.js");
var p = require("./1857.js");
var h = require("./1858.js");
var g = require("./4127.js");
var C = require("./4128.js");
var _ = require("./4129.js");
var m = require("./4131.js");
var f = require("./1130.js");