Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./1202.js");
var p = require("./146.js");
var h = require("./37.js");
var g = require("./21.js");
var C = require("./26.js");
var _ = require("./15.js");
var m = require("./4.js");
var f = require("./27.js");
var O = require("./42.js");
var E = require("./8.js");
var y = require("./11.js");
var b = require("./876.js");
var D = require("./2084.js");
var I = require("./23.js");
var T = function (e) {
  function CastleShoppingCartPrimeDayDialog() {
    var t = this;
    t.categories = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleShoppingCartPrimeDayDialog.NAME) || this;
  }
  n.__extends(CastleShoppingCartPrimeDayDialog, e);
  CastleShoppingCartPrimeDayDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    E.ButtonHelper.initBasicButtons([this.dialogDisp.btnTrash, this.dialogDisp.btnRubies, this.dialogDisp.btnSave, this.dialogDisp.btnClose]);
    this.dialogDisp.btnRubies.toolTipText = "add_Gold";
    this.dialogDisp.btnTrash.toolTipText = "dialog_shoppingCartPrimeDay_clear";
    this.textHeader = this.textFieldManager.registerTextField(this.dialogDisp.header, new c.LocalizedTextVO("xPercent_Bonus"));
    this.textHeader.verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.limitedTime, new c.LocalizedTextVO("limitedOffer")).visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.subHeader, new c.LocalizedTextVO("dialog_primeday_paymentTier_subtitle"));
    this.textFieldManager.registerTextField(this.dialogDisp.pickYourRewards, new c.LocalizedTextVO("dialog_shoppingCartPrimeDay_pickRewards"));
    this.textDescription = this.textFieldManager.registerTextField(this.dialogDisp.description, new c.LocalizedTextVO("dialog_shoppingCartPrimeDay_desc"));
    this.textTimesRemaining = this.textFieldManager.registerTextField(this.dialogDisp.countDown, new c.LocalizedTextVO("dialog_primeday_specialoffer_charges"));
    this.textFieldManager.registerTextField(this.dialogDisp.btnRubies.text, new c.LocalizedTextVO("add_Gold"));
    this.textFieldManager.registerTextField(this.dialogDisp.btnSave.text, new c.LocalizedTextVO("dialog_shoppingCartPrimeDay_save")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.progressBar = new D.CastleShoppingCartPrimeDayProgressBar(this.dialogDisp.rubiesPaid, this.dialogDisp.progressBar);
    E.ButtonHelper.enableButton(this.dialogDisp.btnSave, false);
    E.ButtonHelper.enableButton(this.dialogDisp.btnRubies, false);
    this._popoverComponent = new S.SimplePopoverComponent(this.dialogDisp);
    this._popoverComponent.init(new A.SimplePopoverConfig("StatusPopover"));
    this._popoverComponent.config.closeOnClick = true;
  };
  CastleShoppingCartPrimeDayDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.renderCollectables();
    this.updatePlaceholders();
    this.checkSaveButton(true);
    this._listModified = false;
    this._isClosedClicked = false;
    this._popoverComponent.onShow();
    if (this.getEventVO()) {
      f.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_time, this.getEventVO().remainingEventTimeInSeconds);
    } else {
      this.hide();
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.addEventListenerOnShow = function () {
    _.CastleBasicController.getInstance().addEventListener(b.CastleShoppingCartPrimeDayEvent.SOLD_OUT, this.bindFunction(this.onSoldOut));
    _.CastleBasicController.getInstance().addEventListener(b.CastleShoppingCartPrimeDayEvent.UPDATE_DIALOG, this.bindFunction(this.updatePlaceholders));
    m.CastleModel.specialEventData.addEventListener(C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    this._popoverComponent.onSequenceCompleteSignal.add(this.bindFunction(this.onPopOverCompleted));
    this.controller.addEventListener(h.CastleServerMessageArrivedEvent.SSC_ARRIVED, this.bindFunction(this.onSSCArrived));
    m.CastleModel.timerData.addEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
  };
  CastleShoppingCartPrimeDayDialog.prototype.removeEventListenerOnHide = function () {
    _.CastleBasicController.getInstance().removeEventListener(b.CastleShoppingCartPrimeDayEvent.SOLD_OUT, this.bindFunction(this.onSoldOut));
    _.CastleBasicController.getInstance().removeEventListener(b.CastleShoppingCartPrimeDayEvent.UPDATE_DIALOG, this.bindFunction(this.updatePlaceholders));
    m.CastleModel.specialEventData.removeEventListener(C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    this._popoverComponent.onSequenceCompleteSignal.remove(this.bindFunction(this.onPopOverCompleted));
    this.controller.removeEventListener(h.CastleServerMessageArrivedEvent.SSC_ARRIVED, this.bindFunction(this.onSSCArrived));
    m.CastleModel.timerData.removeEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    this.clearItems();
  };
  CastleShoppingCartPrimeDayDialog.prototype.onUpdateEventTime = function (e) {
    f.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_time, this.getEventVO().remainingEventTimeInSeconds);
  };
  CastleShoppingCartPrimeDayDialog.prototype.clearItems = function () {
    for (var e = 0; e < this.categories.length; e++) {
      this.categories[e].clear();
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.onSoldOut = function (e) {
    this.hide();
  };
  CastleShoppingCartPrimeDayDialog.prototype.onEventRemoved = function (e) {
    if (e && e.specialEventVO && e.specialEventVO.eventId == r.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY) {
      this.hide();
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.showPopOver = function () {
    if (!this._popoverComponent.isVisible) {
      var e = this._popoverComponent.getAssetDisp();
      e.mc_icon.gotoAndStop(L.ClientConstFusion.ACTION_POPOVER_FRAME_DUST);
      this.textFieldManager.registerTextField(e.txt_text, new c.LocalizedTextVO("changesHaveBeenSaved")).autoFitToBounds = true;
      this._popoverComponent.startSequence();
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.onPopOverCompleted = function () {
    this._listModified = false;
    this._popoverComponent.resetTimer();
    if (this._isClosedClicked) {
      this._isClosedClicked = false;
      this.hide();
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.renderCollectables = function () {
    var e = this.getEventVO();
    if (e) {
      this.categories = [];
      for (var t = 0; t < l.ShoppingCartConst.SHOPPING_CART_GROUP_SIZE; t++) {
        var i = e.typeIds.slice(t * l.ShoppingCartConst.OPTIONS_PER_GROUP, (t + 1) * l.ShoppingCartConst.OPTIONS_PER_GROUP);
        var n = [];
        if (e.shoppingCartOptionIds && e.shoppingCartOptionIds.length == l.ShoppingCartConst.SHOPPING_CART_SIZE) {
          n = e.shoppingCartOptionIds.slice(t * m.CastleModel.shoppingCartPrimeDayData.optionCount, (t + 1) * m.CastleModel.shoppingCartPrimeDayData.optionCount);
        }
        var o = CastleShoppingCartPrimeDayDialog.CATEGORIES[t];
        this.categories.push(new v.CastleShoppingCartPrimeDayCategory(this.dialogDisp[o], t, i, n));
      }
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.updatePlaceholders = function (e = null) {
    var t = this.getEventVO();
    if (t) {
      this.progressBar.updatePlaceholders(t.c2Payed, t.c2Needed);
      this.textHeader.textContentVO.textReplacements = [t.averageBonus];
      this.textDescription.textContentVO.textReplacements = [t.c2Needed];
      this.textTimesRemaining.textContentVO.textReplacements = [t.timesBuyable];
    } else {
      this.hide();
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.getEventVO = function () {
    return m.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY);
  };
  CastleShoppingCartPrimeDayDialog.prototype.onClick = function (e) {
    if (!!E.ButtonHelper.isButtonEnabled(e.target) && (!this._popoverComponent.isVisible || !this._isClosedClicked)) {
      var t;
      switch (e.target) {
        case this.dialogDisp.btnRubies:
          this.doSaveCurrentSelection();
          p.CastleOpenShopExecutor.open(u.int(p.CastleOpenShopExecutor.SOURCE_UNKNOWN), P.CXFSourceTrackingConstants.SOURCE_SHOPPING_CART_PRIME_DAY_DIALOG);
          break;
        case this.dialogDisp.btnTrash:
          for (var i = u.int(this.categories.length - 1); i >= 0; i--) {
            (t = this.categories[i]).choosableGroup.reset();
            t.selectedGroup.clear();
          }
          this.checkSaveButton();
          break;
        case this.dialogDisp.btnSave:
          this.saveCurrentSelection();
          break;
        case this.dialogDisp.btnClose:
          this._isClosedClicked = true;
          var n = this._listModified ? this._popoverComponent.config.waitDuration : 0;
          this.saveCurrentSelection();
          I.TweenMax.delayedCall(n, this.bindFunction(this.closeWithDelay));
          return;
      }
      for (var o = u.int(this.categories.length - 1); o >= 0; o--) {
        if ((t = this.categories[o]).checkClick(e.target)) {
          this.checkSaveButton();
          break;
        }
      }
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.checkSaveButton = function (e = false) {
    var t = true;
    var i = true;
    for (var n = u.int(this.categories.length - 1); n >= 0; n--) {
      var o = this.categories[n];
      t = t && o.selectedGroup.full();
      i = i && o.selectedGroup.empty();
    }
    E.ButtonHelper.enableButton(this.dialogDisp.btnSave, !e && t);
    E.ButtonHelper.enableButton(this.dialogDisp.btnRubies, t);
    E.ButtonHelper.enableButton(this.dialogDisp.btnTrash, !i);
    if (t) {
      this._listModified = true;
      this.dialogDisp.btnSave.toolTipText = e ? "dialog_shoppingCartPrimeDay_save_tooltip" : "dialog_shoppingCartPrimeDay_save";
      this.dialogDisp.btnRubies.toolTipText = "add_Gold";
    } else {
      this.dialogDisp.btnSave.toolTipText = "dialog_shoppingCartPrimeDay_listNotFilled_save_tooltip";
      this.dialogDisp.btnRubies.toolTipText = "dialog_shoppingCartPrimeDay_listNotFilled_buy_tooltip";
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.closeWithDelay = function () {
    this.hide();
  };
  CastleShoppingCartPrimeDayDialog.prototype.saveCurrentSelection = function () {
    if (E.ButtonHelper.isButtonEnabled(this.dialogDisp.btnSave) || this._listModified) {
      this.doSaveCurrentSelection();
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.doSaveCurrentSelection = function () {
    var e = [];
    for (var t = 0; t < this.categories.length; t++) {
      var i = this.categories[t];
      if (!i.selectedGroup.full()) {
        return;
      }
      var n = i.selectedGroup.getSelectedOptions();
      e.push(n);
    }
    E.ButtonHelper.enableButton(this.dialogDisp.btnSave, false);
    this.dialogDisp.btnSave.toolTipText = "dialog_shoppingCartPrimeDay_save_tooltip";
    m.CastleModel.smartfoxClient.sendCommandVO(new d.C2SSaveShoppingCartVO(e));
    this.getEventVO().shoppingCartOptionsIdsByCategory = e;
  };
  CastleShoppingCartPrimeDayDialog.prototype.onSSCArrived = function (e) {
    if (e.params[0] == s.ERROR.ALL_OK) {
      this.showPopOver();
    }
  };
  CastleShoppingCartPrimeDayDialog.__initialize_static_members = function () {
    CastleShoppingCartPrimeDayDialog.NAME = "CastleShoppingCartPrimeDay_March2024";
    CastleShoppingCartPrimeDayDialog.CATEGORIES = ["red", "blue", "green"];
  };
  return CastleShoppingCartPrimeDayDialog;
}(y.CastleExternalDialog);
exports.CastleShoppingCartPrimeDayDialog = T;
var v = require("./2085.js");
var S = require("./294.js");
var A = require("./272.js");
var L = require("./216.js");
var P = require("./108.js");
a.classImplementsInterfaces(T, "ICollectableRendererList");
T.__initialize_static_members();