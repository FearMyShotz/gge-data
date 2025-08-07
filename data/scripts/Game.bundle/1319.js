Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./21.js");
var u = require("./139.js");
var d = require("./26.js");
var p = require("./4.js");
var h = require("./8.js");
var g = require("./11.js");
var C = require("./2344.js");
var _ = function (e) {
  function CastleMovementOverviewDialog() {
    return e.call(this, CastleMovementOverviewDialog.NAME) || this;
  }
  n.__extends(CastleMovementOverviewDialog, e);
  CastleMovementOverviewDialog.prototype.initLoaded = function (t = null) {
    h.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_movementAll, this.dialogDisp.btn_movementOwn, this.dialogDisp.btn_movementAttack, this.dialogDisp.btn_movementSpy, this.dialogDisp.btn_movementAllianceOutgoing, this.dialogDisp.btn_movementAllianceIncoming, this.dialogDisp.btn_movementTrade]);
    this.initBasicButtons([this.dialogDisp.bg.btn_help, this.dialogDisp.btn_close, this.dialogDisp.mc_itemContainer.btn_up, this.dialogDisp.mc_itemContainer.btn_down]);
    this.initGenerals();
    this.stonewallBg ||= new f.CastleStonewallBackgroundComponent(this.dialogDisp.bg);
    this.stonewallBg.setTitleByTextId("dialog_moveOverview_title");
    this.initTooltips();
    this.initScroller();
    e.prototype.initLoaded.call(this, t);
  };
  CastleMovementOverviewDialog.prototype.initGenerals = function () {
    this.fieldKnight = this.textFieldManager.registerTextField(this.dialogDisp.infoKnights.txt_value, new r.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    this.fieldBaron = this.textFieldManager.registerTextField(this.dialogDisp.infoBarons.txt_value, new r.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
  };
  CastleMovementOverviewDialog.prototype.initTooltips = function () {
    this.dialogDisp.btn_movementAll.toolTipText = "dialog_castleListOverview_all";
    this.dialogDisp.btn_movementOwn.toolTipText = "dialog_moveOverview_catOwn";
    this.dialogDisp.btn_movementAttack.toolTipText = "dialog_moveOverview_catAttack";
    this.dialogDisp.btn_movementSpy.toolTipText = "dialog_moveOverview_catSpy";
    this.dialogDisp.btn_movementAllianceIncoming.toolTipText = "dialog_moveOverview_catIncomingAlliance";
    this.dialogDisp.btn_movementAllianceOutgoing.toolTipText = "dialog_moveOverview_catOutgoingAlliance";
    this.dialogDisp.btn_movementTrade.toolTipText = "dialog_moveOverview_catTrade";
    this.dialogDisp.bg.btn_help.toolTipText = "generic_help";
    this.dialogDisp.infoBarons.toolTipText = "dialog_recuit_reeves";
    this.dialogDisp.infoKnights.toolTipText = "dialog_recuit_generals";
  };
  CastleMovementOverviewDialog.prototype.initFilterButtons = function () {
    var e = this._currentFilter.name;
    h.ButtonHelper.setButtonSelected(this.dialogDisp.btn_movementAll, e == C.FilterAll.NAME);
    h.ButtonHelper.setButtonSelected(this.dialogDisp.btn_movementOwn, e == D.FilterOwn.NAME);
    h.ButtonHelper.setButtonSelected(this.dialogDisp.btn_movementAttack, e == b.FilterAttack.NAME);
    h.ButtonHelper.setButtonSelected(this.dialogDisp.btn_movementSpy, e == I.FilterSpy.NAME);
    h.ButtonHelper.setButtonSelected(this.dialogDisp.btn_movementAllianceIncoming, e == E.FilterAllianceIncoming.NAME);
    h.ButtonHelper.setButtonSelected(this.dialogDisp.btn_movementAllianceOutgoing, e == y.FilterAllianceOutgoing.NAME);
    h.ButtonHelper.setButtonSelected(this.dialogDisp.btn_movementTrade, e == T.FilterTrade.NAME);
  };
  CastleMovementOverviewDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.initFilter();
    this.updateGenerals();
    this.initEventListener();
    this.layoutManager.hideAllIngameUIComponents();
    this.stonewallBg.update();
  };
  CastleMovementOverviewDialog.prototype.updateGenerals = function () {
    this.fieldKnight.textContentVO.textReplacements = [p.CastleModel.lordData.numAvailableCommanders, p.CastleModel.lordData.numAllCommanders];
    this.fieldBaron.textContentVO.textReplacements = [p.CastleModel.lordData.numAvailableBarons, p.CastleModel.lordData.numAllBarons];
  };
  CastleMovementOverviewDialog.prototype.initFilter = function () {
    this.movementOverviewDialogProperties.selectedCategory ||= C.FilterAll.NAME;
    this.setFilter(this.movementOverviewDialogProperties.selectedCategory);
  };
  CastleMovementOverviewDialog.prototype.setFilter = function (e) {
    this._currentFilter = CastleMovementOverviewDialog.FILTER_STRATEGIES.get(e);
    this.initFilterButtons();
    this.updateScroller(0);
  };
  CastleMovementOverviewDialog.prototype.changeFilter = function (e) {
    if (e != this._currentFilter.name) {
      this.setFilter(e);
    }
  };
  CastleMovementOverviewDialog.prototype.initScroller = function () {
    this._itemScrollList = new o.ItemScrollList(this.dialogDisp.mc_itemContainer);
    this._itemScrollList.scrollItemClass = O.CastleMovementItem;
    this._itemScrollList.scrollStep = 3;
  };
  CastleMovementOverviewDialog.prototype.addEventListenerOnShow = function () {
    p.CastleModel.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerIntervalSecond));
  };
  CastleMovementOverviewDialog.prototype.removeEventListenerOnHide = function () {
    p.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerIntervalSecond));
  };
  CastleMovementOverviewDialog.prototype.onTimerIntervalSecond = function (e) {
    for (var t = 0, i = this._currentFilter.getFilteredList(); t < i.length; t++) {
      if (!i[t].movement.shouldBeShown()) {
        this.updateScroller();
        return;
      }
    }
    this._itemScrollList.resetItems();
  };
  CastleMovementOverviewDialog.prototype.updateScroller = function (e = -1) {
    this._itemScrollList.clear();
    for (var t = 0, i = this._currentFilter.getFilteredList(); t < i.length; t++) {
      var n = i[t];
      this._itemScrollList.pushContent(n);
    }
    this._itemScrollList.initList(e == -1 ? this._itemScrollList.currentStartIndex : e);
  };
  CastleMovementOverviewDialog.prototype.updateMovements = function () {
    this.updateScroller();
    this.updateGenerals();
  };
  CastleMovementOverviewDialog.prototype.initEventListener = function () {
    this.controller.addEventListener(u.CastleArmyDataEvent.NEW_MOVEMENT, this.bindFunction(this.onNewMovement));
    this.controller.addEventListener(u.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onRemoveMovement));
    p.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    p.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
  };
  CastleMovementOverviewDialog.prototype.removeEventListeners = function () {
    this.controller.removeEventListener(u.CastleArmyDataEvent.NEW_MOVEMENT, this.bindFunction(this.onNewMovement));
    this.controller.removeEventListener(u.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onRemoveMovement));
    p.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    p.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
  };
  CastleMovementOverviewDialog.prototype.onRemoveSpecialEvent = function (e) {
    this.updateMovements();
  };
  CastleMovementOverviewDialog.prototype.onRefreshSpecialEvent = function (e) {
    this.updateMovements();
  };
  CastleMovementOverviewDialog.prototype.onRemoveMovement = function (e) {
    this.updateMovements();
  };
  CastleMovementOverviewDialog.prototype.onNewMovement = function (e) {
    this.updateMovements();
  };
  CastleMovementOverviewDialog.prototype.onClick = function (t) {
    if (!this.isLocked && !this.isWaitingForServerMessage && h.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.bg.btn_help:
          m.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_movementOverview"));
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_movementAll:
          this.changeFilter(C.FilterAll.NAME);
          break;
        case this.dialogDisp.btn_movementOwn:
          this.changeFilter(D.FilterOwn.NAME);
          break;
        case this.dialogDisp.btn_movementAttack:
          this.changeFilter(b.FilterAttack.NAME);
          break;
        case this.dialogDisp.btn_movementSpy:
          this.changeFilter(I.FilterSpy.NAME);
          break;
        case this.dialogDisp.btn_movementAllianceOutgoing:
          this.changeFilter(y.FilterAllianceOutgoing.NAME);
          break;
        case this.dialogDisp.btn_movementAllianceIncoming:
          this.changeFilter(E.FilterAllianceIncoming.NAME);
          break;
        case this.dialogDisp.btn_movementTrade:
          this.changeFilter(T.FilterTrade.NAME);
      }
    }
  };
  CastleMovementOverviewDialog.prototype.hideLoaded = function (t = null) {
    this.removeEventListeners();
    this._itemScrollList.clear();
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(CastleMovementOverviewDialog.prototype, "movementOverviewDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMovementOverviewDialog.__initialize_static_members = function () {
    var e;
    (e = new Map()).set(C.FilterAll.NAME, new C.FilterAll());
    e.set(D.FilterOwn.NAME, new D.FilterOwn());
    e.set(I.FilterSpy.NAME, new I.FilterSpy());
    e.set(y.FilterAllianceOutgoing.NAME, new y.FilterAllianceOutgoing());
    e.set(E.FilterAllianceIncoming.NAME, new E.FilterAllianceIncoming());
    e.set(b.FilterAttack.NAME, new b.FilterAttack());
    e.set(T.FilterTrade.NAME, new T.FilterTrade());
    CastleMovementOverviewDialog.FILTER_STRATEGIES = e;
  };
  CastleMovementOverviewDialog.NAME = "CastleMovementOverviewEx_APR25";
  return CastleMovementOverviewDialog;
}(g.CastleExternalDialog);
exports.CastleMovementOverviewDialog = _;
var m = require("./9.js");
var f = require("./875.js");
var O = require("./2346.js");
var E = require("./2374.js");
var y = require("./2375.js");
var b = require("./2376.js");
var D = require("./2377.js");
var I = require("./2378.js");
var T = require("./2379.js");
s.classImplementsInterfaces(_, "ICollectableRendererList");
_.__initialize_static_members();