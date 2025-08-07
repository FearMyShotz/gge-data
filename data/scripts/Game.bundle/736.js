Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./1.js");
var d = require("./1.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./3.js");
var m = require("./3.js");
var f = require("./3.js");
var O = require("./3.js");
var E = require("./3.js");
var y = require("./6.js");
var b = require("./18.js");
var D = require("./16.js");
var I = require("./58.js");
var T = require("./28.js");
var v = require("./69.js");
var S = require("./21.js");
var A = require("./32.js");
var L = require("./44.js");
var P = require("./85.js");
var M = require("./4.js");
var R = require("./52.js");
var V = require("./27.js");
var x = require("./8.js");
var w = require("./185.js");
var B = require("./1350.js");
var F = require("./11.js");
var N = require("./351.js");
var k = require("./135.js");
var U = createjs.Point;
var G = function (e) {
  function ACastlePostActionDialog(t = null) {
    var i = this;
    i.MAX_BUTTON_AMOUNT = 4;
    i._currentBoostIndex = 0;
    i.isTravelTimePreview = false;
    i.isHorseDialog = false;
    i._slowDownArrivalTime = null;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t || ACastlePostActionDialog.NAME) || this;
  }
  n.__extends(ACastlePostActionDialog, e);
  ACastlePostActionDialog.prototype.initLoaded = function (t = null) {
    var i = new Array();
    if (this.dialogDisp.btn_close) {
      i.push(this.dialogDisp.btn_close);
    }
    if (this.dialogDisp.btn_cancel) {
      i.push(this.dialogDisp.btn_cancel);
    }
    if (this.dialogDisp.btn_back) {
      i.push(this.dialogDisp.btn_back);
    }
    if (this.dialogDisp.btn_help) {
      i.push(this.dialogDisp.btn_help);
    }
    if (this.dialogDisp.btn_ok) {
      i.push(this.dialogDisp.btn_ok);
    }
    if (this.dialogDisp.mc_slowdown) {
      i.push(this.dialogDisp.mc_slowdown);
    }
    this.initBasicButtons(i);
    e.prototype.initLoaded.call(this, t);
  };
  ACastlePostActionDialog.prototype.showLoaded = function (t = null) {
    this.isTravelTimePreview = false;
    this._slowDownArrivalTime = null;
    M.CastleModel.timerData.addEventListener(S.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTravelTimeAndCosts));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new O.LocalizedTextVO("dialog_postAttack_title")).verticalAlign = r.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_arrivel, new O.LocalizedTextVO("dialog_postAttack_arrival")).autoFitToBounds = true;
    this.dialogDisp.mc_traveldistance.toolTipText = "distance";
    this.dialogDisp.mc_traveltime.toolTipText = "travelTime";
    this.dialogDisp.mc_travelcost.toolTipText = "dialog_travelPlanning_supportC1Cost_total_tooltip";
    this.dialogDisp.btn_close.toolTipText = "generic_btn_close";
    this.initPostAttackHorseComponents();
    this.initPostAttackSlowDownComponents();
    this.itxt_date ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_date, new E.TextVO(""));
    this.itxt_time ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new E.TextVO(""));
    this.i_traveldist_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_traveldistance.txt_value, new f.LocalizedNumberVO(0, true, 1));
    this.i_travelcost_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_travelcost.txt_value, new f.LocalizedNumberVO(0));
    this.i_traveltime_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_traveltime.txt_value, new E.TextVO(""));
    this.controller.addEventListener(A.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrenciesUpdated));
    this._currentBoostIndex = -1;
    if (this.i_traveldist_txt_value) {
      this.i_traveldist_txt_value.textContentVO.numberValue = this.distance;
    }
    if (this.i_travelcost_txt_value) {
      this.i_travelcost_txt_value.textContentVO.numberValue = this.getTotalCostsC1();
    }
    this.setArrivalDateAndTime(this.getTotalTravelTime(), this.selectedHorse);
    this.isHorseDialog = this.dialogDisp.btn_horse0 != null;
    if (this.isHorseDialog && !this.horseCheckboxes) {
      this.horseCheckboxes = new Array();
      for (var i = 0; i < this.MAX_BUTTON_AMOUNT; i++) {
        var n = this.dialogDisp["btn_horse" + i];
        if (n) {
          this.horseCheckboxes.push(new o.CheckBoxButton(n, true));
          n.mouseEnabled = false;
        }
      }
    }
    if (this.isHorseDialog) {
      this.initBoosterButtons();
      this.dialogDisp.mc_slowdowncost.visible = false;
    }
    this.updateFTT();
    e.prototype.showLoaded.call(this, t);
  };
  ACastlePostActionDialog.prototype.initPostAttackHorseComponents = function () {
    if (this.dialogDisp.btn_help) {
      this.dialogDisp.btn_help.toolTipText = "generic_help";
    }
    if (this.dialogDisp.mc_pegasusTravelTicket) {
      this.dialogDisp.mc_pegasusTravelTicket.mouseChildren = false;
      this.dialogDisp.mc_pegasusTravelTicket.toolTipText = "fastTravelTickets_tooltip";
      var e = y.int(M.CastleModel.currencyData.getAmountById(R.ClientConstCurrency.ID_PEGASUS_TICKET));
      this.i_pegasusTravelTickets_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_pegasusTravelTicket.txt_fastTravelAmount, new f.LocalizedNumberVO(e));
    }
  };
  ACastlePostActionDialog.prototype.initPostAttackSlowDownComponents = function () {
    if (this.dialogDisp.mc_slowdowncost) {
      this.dialogDisp.mc_slowdowncost.toolTipText = "dialog_travelPlanning_supportC2Cost_total_tooltip";
      this.i_travelcostC2_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_slowdowncost.txt_value, new P.CastleLocalizedNumberVO(h.TravelConst.SLOWDOWN_C2_COSTS));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_slowdown.txt_value, new O.LocalizedTextVO("dialog_postAttack_slowDown"));
      this.dialogDisp.mc_slowdown.visible = !L.SpecialServerHelper.isCrossplay();
    }
  };
  ACastlePostActionDialog.prototype.onSpecialCurrenciesUpdated = function (e) {
    this.updateFTT();
  };
  ACastlePostActionDialog.prototype.updateFTT = function () {
    if (this.i_pegasusTravelTickets_txt_value) {
      var e = y.int(M.CastleModel.currencyData.getAmountById(R.ClientConstCurrency.ID_PEGASUS_TICKET));
      this.i_pegasusTravelTickets_txt_value.textContentVO = new f.LocalizedNumberVO(e);
    }
  };
  ACastlePostActionDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    M.CastleModel.timerData.removeEventListener(S.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTravelTimeAndCosts));
    this.controller.removeEventListener(A.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrenciesUpdated));
    this.resetBoosterValues();
  };
  ACastlePostActionDialog.prototype.resetBoosterValues = function () {
    this._currentBoostIndex = -1;
  };
  ACastlePostActionDialog.prototype.setArrivalDateAndTime = function (e, t) {
    var i = new Date();
    i.setTime(i.getTime() + e * T.ClientConstTime.SEC_2_MILLISEC);
    this.i_traveltime_txt_value.textContentVO.stringValue = c.TimeStringHelper.getShortTimeStringBySeconds(e);
    this.itxt_date.textContentVO.stringValue = V.CastleTimeStringHelper.getDateStringFromDate(i);
    this.itxt_time.textContentVO.stringValue = m.Localize.datetime(i, _.DateTimeStyle.NONE, _.DateTimeStyle.SHORT);
    if (this.dialogDisp.mc_slowdown) {
      var n = this.getOriginalTravelTime() < h.TravelConst.MAX_SLOWDOWN_DURATION_IN_SECONDS;
      x.ButtonHelper.enableButton(this.dialogDisp.mc_slowdown, n);
      this.dialogDisp.mc_slowdown.toolTipText = n ? "" : "dialog_slowArmy_time_maxTime_tooltip";
    }
    w.SubscriptionHelper.showSubscriptionStarToTextField(this.i_traveltime_txt_value, this.isTravelTimeSubscriptionBoosted, 15, new U(-3, 0));
    var o = D.ClientConstColor.FONT_DEFAULT_COLOR;
    if (this.isSlowedDown() && !this.isTravelTimePreview) {
      o = D.ClientConstColor.GENERIC_RED;
    } else if (t) {
      o = D.ClientConstColor.GENERIC_DARK_GREEN;
    } else if (this.isTravelTimeSubscriptionBoosted) {
      o = D.ClientConstColor.DEFAULT_SUBSCRIPTION;
    }
    this.i_traveltime_txt_value.color = o;
  };
  ACastlePostActionDialog.prototype.initBoosterButtons = function () {
    this.initCleanState();
    if (this.unlockedHorses) {
      for (var e = 0; e < this.unlockedHorses.length; e++) {
        this.initSingleButton(e);
      }
    }
  };
  ACastlePostActionDialog.prototype.initSingleButton = function (e) {
    this.initLockedLayer(e);
    this.tooltipVisibility(e);
    var t = this.dialogDisp["btn_horse" + e];
    t.txt_bonus.defaultCacheScale = 2;
    t.txt_cost.defaultCacheScale = 2;
    t.mc_tooltip.txt_name.defaultCacheScale = 2;
    t.mc_tooltip.txt_bonus.defaultCacheScale = 2;
    var i = this.calculateTooltip(e);
    this.textFieldManager.registerTextField(t.mc_tooltip.txt_name, new O.LocalizedTextVO(i));
    var n = this.calculatePercentBonus(e);
    this.textFieldManager.registerTextField(t.mc_tooltip.txt_bonus, new O.LocalizedTextVO("travelSpeedBonusPerField_Dummy", [n]));
    this.textFieldManager.registerTextField(t.txt_bonus, new O.LocalizedTextVO(l.GenericTextIds.VALUE_PERCENTAGE_ADD, [n]));
    this.setHorseCurrencyIconForSingleItem(e, t, this.unlockedHorses[e].isPayedWithPegasusTickets);
    this.dialogDisp["btn_horse" + e].mouseEnabled = !this.dialogDisp["mc_locked" + e].visible;
    t.toolTipText = null;
    t.mc_tooltip.visible = false;
  };
  ACastlePostActionDialog.prototype.tooltipVisibility = function (e) {
    var t = this.dialogDisp["btn_horse" + e];
    var i = this.dialogDisp["mc_locked" + e];
    t.mc_tooltip.visible = !i.visible;
  };
  ACastlePostActionDialog.prototype.initLockedLayer = function (e) {
    var t = this.unlockedHorses[e].isPayedWithPegasusTickets;
    var i = this.dialogDisp["mc_locked" + e];
    var n = y.int(M.CastleModel.currencyData.getAmountById(R.ClientConstCurrency.ID_PEGASUS_TICKET)) > 0;
    i.visible = !!t && !n;
    var o = i.toolTipText;
    if (t && !n) {
      o = this.shipsInsteadOfHorses ? "dialog_travelPlanning_notEnoughTickets_island" : "dialog_travelPlanning_notEnoughTickets";
    }
    i.toolTipText = o;
  };
  ACastlePostActionDialog.prototype.setHorseCurrencyIconForSingleItem = function (e, t, i) {
    if (e > 0) {
      if (i) {
        this.textFieldManager.registerTextField(t.txt_cost, new O.LocalizedTextVO(l.GenericTextIds.VALUE_NOMINAL_ADD, [this.getCostForFastTravelTickets()]));
        t.mc_currency.gotoAndStop(4);
      } else {
        this.textFieldManager.registerTextField(t.txt_cost, new O.LocalizedTextVO(l.GenericTextIds.VALUE_NOMINAL_ADD, [this.getBoostCostC2(this.unlockedHorses[e])]));
        t.mc_currency.gotoAndStop(2);
      }
    } else {
      this.textFieldManager.registerTextField(t.txt_cost, new O.LocalizedTextVO(l.GenericTextIds.VALUE_NOMINAL_ADD, [this.getBoostCostC1(this.unlockedHorses[e])]));
      t.mc_currency.gotoAndStop(1);
    }
  };
  ACastlePostActionDialog.prototype.calculatePercentBonus = function (e) {
    var t = this.getTravelTime(this.unlockedHorses[e]);
    var i = this.normalTravelTime - t;
    return Math.floor(i / this.normalTravelTime * 100);
  };
  ACastlePostActionDialog.prototype.calculateTooltip = function (e) {
    return (this.shipsInsteadOfHorses ? "eiland_ship" : "horse") + (e + 1);
  };
  ACastlePostActionDialog.prototype.initCleanState = function () {
    var e = y.int(this.shipsInsteadOfHorses ? b.ClientConstCastle.HORSE_BOOSTER_COUNT : 0);
    for (var t = 0; t < b.ClientConstCastle.HORSE_BOOSTER_COUNT; t++) {
      var i = t + 1 + e;
      var n = this.dialogDisp["btn_horse" + t];
      var o = this.dialogDisp["mc_locked" + t];
      this.textFieldManager.registerTextField(n.txt_bonus, new E.TextVO("-"));
      this.textFieldManager.registerTextField(n.txt_cost, new E.TextVO("-"));
      n.mc_horseIcon.gotoAndStop(i);
      o.parent.addChild(o);
      o.toolTipText = "noStable";
      o.visible = true;
      this.tooltipVisibility(t);
      var a = u.castAs(this.horseCheckboxes[t], "CheckBoxButton");
      if (a) {
        a.isSelected = false;
      }
    }
  };
  ACastlePostActionDialog.prototype.tryToggleSelectedBoosterButton = function (e) {
    var t = e.isSelected;
    if (!this.isSlowedDown() || t) {
      this.toggleSelectedBoosterButton(e);
      this._slowDownArrivalTime = null;
    } else {
      this.confirmRemoveSlowDown(e);
    }
  };
  ACastlePostActionDialog.prototype.confirmRemoveSlowDown = function (e) {
    var t = this;
    F.CastleExternalDialog.dialogHandler.registerDefaultDialogs(z.CastleStandardYesNoDialog, new s.BasicStandardYesNoDialogProperties(m.Localize.text("alert_cancelArmyDelay_header"), m.Localize.text("alert_cancelArmyDelay_desc"), function () {
      t.toggleSelectedBoosterButton(e);
      t._slowDownArrivalTime = null;
    }));
  };
  ACastlePostActionDialog.prototype.toggleSelectedBoosterButton = function (e) {
    this._currentBoostIndex = -1;
    for (var t = 0; t < Math.min(this.unlockedHorses.length, this.MAX_BUTTON_AMOUNT); t++) {
      var i = this.horseCheckboxes[t];
      if (e == i) {
        var n = !i.isSelected;
        if (n) {
          this._currentBoostIndex = t;
        }
        i.isSelected = n;
      } else {
        i.isSelected = false;
      }
    }
    this.setArrivalDateAndTime(this.getTotalTravelTime(), this.selectedHorse);
  };
  ACastlePostActionDialog.prototype.checkForHorsePayedWithPegasusTickets = function () {
    return !!this.selectedHorse && this.selectedHorse.isPayedWithPegasusTickets;
  };
  ACastlePostActionDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (x.ButtonHelper.isButtonEnabled(t.target)) {
      if (this.isHorseDialog && t.target.name && t.target.name.indexOf("btn_horse") != -1) {
        var i = t.target.name;
        i = i.replace("btn_horse", "");
        this.tryToggleSelectedBoosterButton(this.horseCheckboxes[parseInt(i)]);
      }
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_back:
          if (M.CastleModel.userData.userLevel > I.ClientConstLevelRestrictions.PLAYERLEVEL_AT_FIRST_DUNGEONATTACK) {
            this.hide();
          }
          break;
        case this.dialogDisp.btn_help:
          H.CastleDialogHandler.getInstance().showHelper("", m.Localize.text(this.getHelperTextID()));
          break;
        case this.dialogDisp.btn_ok:
          if (this.checkMoney()) {
            this.startTravelAction();
          }
          break;
        case this.dialogDisp.mc_slowdown:
          var n = new B.CastleSetTimeDialogProperties(this.getOrCreateSlowDownArrivalTime().getTime(), this.getOriginalTravelTime(), h.TravelConst.MAX_SLOWDOWN_DURATION_IN_SECONDS, this.bindFunction(this.onSlowDownSelected));
          H.CastleDialogHandler.getInstance().registerDefaultDialogs(j.CastleMovementSetTimeDialog, n);
      }
    }
  };
  ACastlePostActionDialog.prototype.destroy = function () {
    e.prototype.destroy.call(this);
  };
  ACastlePostActionDialog.prototype.onSlowDownSelected = function (e) {
    this._slowDownArrivalTime ||= new Date();
    this._slowDownArrivalTime.setTime(e);
    if (this.normalTravelTime < this.getTotalTravelTime()) {
      this.toggleSelectedBoosterButton(null);
    }
    this.updateTravelTimeAndCosts();
  };
  ACastlePostActionDialog.prototype.getOrCreateSlowDownArrivalTime = function () {
    if (this.isSlowedDown()) {
      return this._slowDownArrivalTime;
    } else {
      return this.getOriginalArrivalTime();
    }
  };
  ACastlePostActionDialog.prototype.updateC1Costs = function () {
    var e = this.getTotalCostsC1();
    var t = M.CastleModel.currencyData.c1Amount >= e;
    this.i_travelcost_txt_value.textContentVO.numberValue = e;
    this.i_travelcost_txt_value.color = t ? D.ClientConstColor.FONT_DEFAULT_COLOR : D.ClientConstColor.FONT_INSUFFICIENT_COLOR;
  };
  ACastlePostActionDialog.prototype.updateC2Costs = function () {
    var e = this.getTotalCostsC2();
    var t = M.CastleModel.currencyData.c2Amount >= e;
    this.dialogDisp.mc_slowdowncost.visible = e > 0;
    this.i_travelcostC2_txt_value.textContentVO.numberValue = e;
    this.i_travelcostC2_txt_value.color = t ? D.ClientConstColor.FONT_DEFAULT_COLOR : D.ClientConstColor.FONT_INSUFFICIENT_COLOR;
  };
  ACastlePostActionDialog.prototype.getTotalArrivalTime = function () {
    var e = this.getOriginalArrivalTime();
    if (this._slowDownArrivalTime && this._slowDownArrivalTime.getTime() > e.getTime()) {
      return this._slowDownArrivalTime;
    } else {
      return e;
    }
  };
  ACastlePostActionDialog.prototype.getTotalTravelTime = function () {
    return y.int((this.getTotalArrivalTime().getTime() - new Date().getTime()) * T.ClientConstTime.MILLISEC_2_SEC);
  };
  ACastlePostActionDialog.prototype.getOriginalArrivalTime = function () {
    var e = this.getTravelTime(this.selectedHorse) * T.ClientConstTime.SEC_2_MILLISEC;
    var t = new Date();
    t.setTime(t.getTime() + e);
    return t;
  };
  ACastlePostActionDialog.prototype.getOriginalTravelTime = function () {
    return y.int(this.getTravelTime(this.selectedHorse));
  };
  ACastlePostActionDialog.prototype.getSlowDownOffsetInSeconds = function () {
    if (this._slowDownArrivalTime) {
      return y.int(Math.max(0, (this._slowDownArrivalTime.getTime() - this.getOriginalArrivalTime().getTime()) * T.ClientConstTime.MILLISEC_2_SEC));
    } else {
      return 0;
    }
  };
  ACastlePostActionDialog.prototype.isSlowedDown = function () {
    return this.getSlowDownOffsetInSeconds() > 0;
  };
  ACastlePostActionDialog.prototype.getHelperTextID = function () {
    return "help_travelPlanning";
  };
  ACastlePostActionDialog.prototype.updateTravelTimeAndCosts = function (e = null) {
    this.checkClearSlowDown();
    this.updateTravelTime();
    this.updateC1Costs();
    if (this.dialogDisp.mc_slowdowncost) {
      this.updateC2Costs();
    }
  };
  ACastlePostActionDialog.prototype.checkClearSlowDown = function () {
    if (this._slowDownArrivalTime && this._slowDownArrivalTime.getTime() <= this.getOriginalArrivalTime().getTime()) {
      this._slowDownArrivalTime = null;
    }
  };
  ACastlePostActionDialog.prototype.updateTravelTime = function () {
    if (!this.isTravelTimePreview) {
      this.setArrivalDateAndTime(this.getTotalTravelTime(), this.selectedHorse);
    }
  };
  ACastlePostActionDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this.isTravelTimePreview = false;
    this.updateTravelTime();
  };
  ACastlePostActionDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (this.isHorseDialog) {
      for (var i = 0; i < b.ClientConstCastle.HORSE_BOOSTER_COUNT; i++) {
        if (t.target == this.dialogDisp["btn_horse" + i] && x.ButtonHelper.isButtonEnabled(t.target)) {
          t.target.parent.addChild(t.target);
          t.target.mc_tooltip.visible = true;
          this.isTravelTimePreview = true;
          this.setArrivalDateAndTime(this.getTravelTime(this.unlockedHorses[i]), this.unlockedHorses[i]);
        } else {
          this.dialogDisp["btn_horse" + i].mc_tooltip.visible = false;
        }
      }
    }
  };
  ACastlePostActionDialog.prototype.getTravelTime = function (e = null) {
    if (e) {
      return y.int(this.getBoostedTravelTime(this.getTravelBoost(e)));
    } else {
      return this.normalTravelTime;
    }
  };
  ACastlePostActionDialog.prototype.getTotalCostsC1 = function () {
    var e = this.cost;
    if (this._currentBoostIndex >= 0) {
      e += y.int(this.getBoostCostC1(this.selectedHorse));
    }
    return e;
  };
  ACastlePostActionDialog.prototype.getTotalCostsC2 = function () {
    var e = 0;
    if (this._currentBoostIndex >= 0) {
      e += y.int(this.getBoostCostC2(this.selectedHorse));
    }
    if (this.isSlowedDown()) {
      e += y.int(h.TravelConst.SLOWDOWN_C2_COSTS);
    }
    return e;
  };
  ACastlePostActionDialog.prototype.checkMoney = function () {
    return !!this.checkForHorsePayedWithPegasusTickets() || (M.CastleModel.currencyData.c2Amount < this.getTotalCostsC2() ? (H.CastleDialogHandler.getInstance().registerDefaultDialogs(Y.CastleNoMoneyC2Dialog, new k.CastleNoMoneyC2DialogProperties()), false) : !(M.CastleModel.currencyData.c1Amount < this.getTotalCostsC1()) || (H.CastleDialogHandler.getInstance().registerDefaultDialogs(W.CastleNoMoneyC1Dialog, new N.CastleNoMoneyC1DialogProperties()), false));
  };
  ACastlePostActionDialog.prototype.startTravelAction = function () {
    throw new v.AbstractMethodError();
  };
  Object.defineProperty(ACastlePostActionDialog.prototype, "distance", {
    get: function () {
      throw new v.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastlePostActionDialog.prototype, "cost", {
    get: function () {
      throw new v.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastlePostActionDialog.prototype, "unlockedHorses", {
    get: function () {
      throw new v.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastlePostActionDialog.prototype, "selectedHorse", {
    get: function () {
      if (this._currentBoostIndex >= 0) {
        return this.unlockedHorses[this._currentBoostIndex];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  ACastlePostActionDialog.prototype.getTravelBoost = function (e) {
    throw new v.AbstractMethodError();
  };
  ACastlePostActionDialog.prototype.getBoostCostC1 = function (e) {
    throw new v.AbstractMethodError();
  };
  ACastlePostActionDialog.prototype.getBoostCostC2 = function (e) {
    throw new v.AbstractMethodError();
  };
  ACastlePostActionDialog.prototype.getCostForFastTravelTickets = function () {
    return 1;
  };
  Object.defineProperty(ACastlePostActionDialog.prototype, "normalTravelTime", {
    get: function () {
      throw new v.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  ACastlePostActionDialog.prototype.getBoostedTravelTime = function (e) {
    throw new v.AbstractMethodError();
  };
  Object.defineProperty(ACastlePostActionDialog.prototype, "isTravelTimeSubscriptionBoosted", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastlePostActionDialog.prototype, "shipsInsteadOfHorses", {
    get: function () {
      throw new v.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  ACastlePostActionDialog.prototype.hasEnoughEventTime = function (e) {
    return !this.isEventTimeRunningOut(p.EventConst.EVENTTYPE_FACTION, e.areaType == g.WorldConst.AREA_TYPE_FACTION_CAMP) && !this.isEventTimeRunningOut(p.EventConst.EVENTTYPE_FACTION, e.areaType == g.WorldConst.AREA_TYPE_FACTION_CAPITAL) && !this.isEventTimeRunningOut(p.EventConst.EVENTTYPE_FACTION, e.areaType == g.WorldConst.AREA_TYPE_FACTION_TOWER) && !this.isEventTimeRunningOut(p.EventConst.EVENTTYPE_FACTION, e.areaType == g.WorldConst.AREA_TYPE_FACTION_VILLAGE) && !this.isEventTimeRunningOut(p.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, e.areaType == g.WorldConst.AREA_TYPE_NOMAD_CAMP) && !this.isEventTimeRunningOut(p.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, e.areaType == g.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP) && !this.isEventTimeRunningOut(p.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, e.areaType == g.WorldConst.AREA_TYPE_ALIEN_CAMP) && !this.isEventTimeRunningOut(p.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE, e.areaType == g.WorldConst.AREA_TYPE_RED_ALIEN_CAMP) && !this.isEventTimeRunningOut(p.EventConst.EVENTTYPE_SAMURAI_INVASION, e.areaType == g.WorldConst.AREA_TYPE_SAMURAI_CAMP) && !this.isEventTimeRunningOut(p.EventConst.EVENTTYPE_FACTION_INVASION, e.areaType == g.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP) && (e.kingdomID != C.WorldIsland.KINGDOM_ID || !(M.CastleModel.kingdomData.getKingdomVOByID(C.WorldIsland.KINGDOM_ID).resetTime < this.getTotalTravelTime())) && !this.isRandomDungeonEventRunningOut(p.EventConst.EVENTTYPE_DUNGEON, e.absAreaPos) || (this.showNotEnoughTimeWarning(), false);
  };
  ACastlePostActionDialog.prototype.isEventTimeRunningOut = function (e, t) {
    if (t && this.isEventActive(e)) {
      var i = M.CastleModel.specialEventData.getActiveEventByEventId(e);
      return !!i && i.remainingEventTimeInSeconds < this.getTotalTravelTime();
    }
    return false;
  };
  ACastlePostActionDialog.prototype.isEventActive = function (e) {
    return M.CastleModel.specialEventData.isEventActive(e);
  };
  ACastlePostActionDialog.prototype.isRandomDungeonEventRunningOut = function (e, t) {
    if (this.isEventActive(e)) {
      var i = M.CastleModel.specialEventData.getActiveEventByEventId(e);
      if (i.targetAreaVO && i.targetAreaVO.absAreaPos.equals(t) && i.remainingEventTimeInSeconds < this.getTotalTravelTime()) {
        return true;
      }
    }
    return false;
  };
  ACastlePostActionDialog.prototype.showNotEnoughTimeWarning = function () {
    H.CastleDialogHandler.getInstance().registerDefaultDialogs(K.CastleStandardOkDialog, new a.BasicStandardOkDialogProperties(m.Localize.text(this.notEnoughTimeWarningHeader), m.Localize.text(this.notEnoughTimeWarningCopy)));
  };
  Object.defineProperty(ACastlePostActionDialog.prototype, "notEnoughTimeWarningCopy", {
    get: function () {
      return "dialog_postAttack_eventNotLongEnough";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastlePostActionDialog.prototype, "notEnoughTimeWarningHeader", {
    get: function () {
      return "generic_alert_watchout";
    },
    enumerable: true,
    configurable: true
  });
  ACastlePostActionDialog.prototype.hideAttackDisplayElements = function () {
    this.dialogDisp.mc_siegeTime.visible = false;
    this.dialogDisp.mc_estimatedHonor.visible = false;
    this.dialogDisp.mc_checkbox.visible = false;
    this.dialogDisp.mc_dropdown.visible = false;
    this.dialogDisp.mc_wait.visible = false;
  };
  ACastlePostActionDialog.NAME = "CastlePostAttack";
  return ACastlePostActionDialog;
}(F.CastleExternalDialog);
exports.ACastlePostActionDialog = G;
var H = require("./9.js");
var j = require("./2394.js");
var W = require("./352.js");
var Y = require("./138.js");
var K = require("./38.js");
var z = require("./151.js");
d.classImplementsInterfaces(G, "ICollectableRendererList");