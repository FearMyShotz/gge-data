Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./21.js");
var c = require("./26.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./27.js");
var h = require("./8.js");
var g = function (e) {
  function SamuraiDaimyoEventDialog() {
    return e.call(this, SamuraiDaimyoEventDialog.NAME) || this;
  }
  n.__extends(SamuraiDaimyoEventDialog, e);
  SamuraiDaimyoEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    h.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_ranking, this.dialogDisp.btn_tab_contracts, this.dialogDisp.btn_tab_info]);
    h.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], E.ClickFeedbackButton);
    this._subLayer = new Map();
    this._subLayer.set(SamuraiDaimyoEventDialog.TAB_RANKING, new O.SamuraiDaimyoEventDialogRanking(this.dialogDisp.tab_ranking));
    this._subLayer.set(SamuraiDaimyoEventDialog.TAB_CONTRACTS, new m.SamuraiDaimyoEventDialogContracts(this.dialogDisp.tab_contracts));
    this._subLayer.set(SamuraiDaimyoEventDialog.TAB_INFO, new f.SamuraiDaimyoEventDialogInfo(this.dialogDisp.tab_info));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("resttime"))).autoFitToBounds = true;
    this.dialogDisp.mc_time.mouseChildren = false;
    this.dialogDisp.btn_tab_ranking.toolTipText = "allianceRanking";
    this.dialogDisp.btn_tab_contracts.toolTipText = "allianceContracts";
    this.dialogDisp.btn_tab_info.toolTipText = "eventGuide";
    this.dialogDisp.btn_help.toolTipText = "help";
    this._bottomMenu = new _.SamuraiDaimyoEventDialogBottomMenu(this.dialogDisp.mc_bottom);
  };
  SamuraiDaimyoEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._bottomMenu.onShow();
    d.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    d.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    if (this.dialogProperties.preselectedTab != "") {
      this.changeCategory(this.dialogProperties.preselectedTab);
    } else {
      this.changeCategory(SamuraiDaimyoEventDialog.TAB_RANKING);
    }
    this.updateRemainingEventTime();
  };
  SamuraiDaimyoEventDialog.prototype.hideLoaded = function (t = null) {
    this._bottomMenu.onHide();
    d.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    d.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    e.prototype.hideLoaded.call(this, t);
  };
  SamuraiDaimyoEventDialog.prototype.updateRemainingEventTime = function () {
    var e = d.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_SAMURAI_INVASION);
    if (e) {
      var t = e.remainingEventTimeInSeconds;
      p.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_text, t);
      this.dialogDisp.mc_time.toolTipText = p.CastleTimeStringHelper.getEventToolTipString(t);
    }
  };
  SamuraiDaimyoEventDialog.prototype.changeCategory = function (t) {
    function updateButton(e, t) {
      e.gotoAndStop(t ? 2 : 1);
    }
    if (this._currentCategory != t) {
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(t), []);
      updateButton(this.dialogDisp.btn_tab_ranking, this._currentCategory == SamuraiDaimyoEventDialog.TAB_RANKING);
      updateButton(this.dialogDisp.btn_tab_contracts, this._currentCategory == SamuraiDaimyoEventDialog.TAB_CONTRACTS);
      updateButton(this.dialogDisp.btn_tab_info, this._currentCategory == SamuraiDaimyoEventDialog.TAB_INFO);
    }
  };
  SamuraiDaimyoEventDialog.prototype.onClick = function (t) {
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_ranking:
          this.changeCategory(SamuraiDaimyoEventDialog.TAB_RANKING);
          break;
        case this.dialogDisp.btn_tab_contracts:
          this.changeCategory(SamuraiDaimyoEventDialog.TAB_CONTRACTS);
          break;
        case this.dialogDisp.btn_tab_info:
          this.changeCategory(SamuraiDaimyoEventDialog.TAB_INFO);
          break;
        case this.dialogDisp.btn_help:
          C.CastleExternalDialog.dialogHandler.showHelper("", r.Localize.text("help_samuraiInvasionDaimyo_contestTab"));
      }
    }
  };
  SamuraiDaimyoEventDialog.prototype.onTickEvent = function (e) {
    this.updateRemainingEventTime();
  };
  SamuraiDaimyoEventDialog.prototype.onRemoveEvent = function (e) {
    if (e.specialEventVO.eventId == a.EventConst.EVENTTYPE_SAMURAI_INVASION) {
      this.hide();
    }
  };
  Object.defineProperty(SamuraiDaimyoEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SamuraiDaimyoEventDialog.NAME = "SamuraiDaimyoEvent";
  SamuraiDaimyoEventDialog.TAB_RANKING = "tab_ranking";
  SamuraiDaimyoEventDialog.TAB_CONTRACTS = "tab_contracts";
  SamuraiDaimyoEventDialog.TAB_INFO = "tab_info";
  return SamuraiDaimyoEventDialog;
}(require("./114.js").CastleExternalSubLayerDialog);
exports.SamuraiDaimyoEventDialog = g;
var C = require("./11.js");
var _ = require("./3743.js");
var m = require("./3744.js");
var f = require("./1774.js");
var O = require("./3749.js");
var E = require("./36.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");