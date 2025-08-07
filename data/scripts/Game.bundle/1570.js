Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./18.js");
var p = require("./16.js");
var h = require("./982.js");
var g = require("./169.js");
var C = require("./4.js");
var _ = require("./8.js");
var m = require("./185.js");
var f = createjs.MouseEvent;
var O = createjs.Point;
var E = function () {
  function CastleRecruitSelectedUnitComponent(e) {
    this._oldSelectedUnitAmount = 1;
    this._initialized = false;
    this._freeSlots = 0;
    this._disp = e;
    _.ButtonHelper.initBasicButtons([this._disp.btn_max, this._disp.recruitmentBtn]);
    this._disp.visible = false;
  }
  CastleRecruitSelectedUnitComponent.prototype.initWithProp = function (e) {
    this.properties = e;
    if (e.updateCompleteComponent) {
      this.hide();
    }
    this.init();
    this.addEventListeners();
    this._disp.visible = true;
    this._initialized = true;
  };
  CastleRecruitSelectedUnitComponent.prototype.hide = function () {
    if (this.properties && this.properties.updateCompleteComponent || !_.ButtonHelper.isEnablingDelayed(this._disp.recruitmentBtn)) {
      _.ButtonHelper.enableButton(this._disp.recruitmentBtn, false);
    }
    if (this.costTextFields) {
      this.costTextFields.length = 0;
    }
    if (this._amountPicker) {
      this._amountPicker.destroy();
    }
    this.removeEventListeners();
    this._disp.visible = false;
  };
  CastleRecruitSelectedUnitComponent.prototype.dispose = function () {
    this.hide();
    this._initialized = false;
  };
  CastleRecruitSelectedUnitComponent.prototype.addEventListeners = function () {
    this._disp.addEventListener(f.CLICK, this.bindFunction(this.onClick));
    this._disp.addEventListener(g.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeUnitAmount));
    this._disp.addEventListener(g.BasicPickerEvent.PICKER_CHANGE_VALUE_MAX_BLOCKED, this.bindFunction(this.onMaxValueBlocked));
  };
  CastleRecruitSelectedUnitComponent.prototype.removeEventListeners = function () {
    this._disp.removeEventListener(f.CLICK, this.bindFunction(this.onClick));
    this._disp.removeEventListener(g.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeUnitAmount));
    this._disp.removeEventListener(g.BasicPickerEvent.PICKER_CHANGE_VALUE_MAX_BLOCKED, this.bindFunction(this.onMaxValueBlocked));
  };
  CastleRecruitSelectedUnitComponent.prototype.init = function () {
    if (!this.textFieldManager.isTextFieldRegistered(this._disp.txt_title)) {
      this.i_txt_title = this.textFieldManager.registerTextField(this._disp.txt_title, new l.LocalizedTextVO(""));
      this.i_infoTime_txt_value = this.textFieldManager.registerTextField(this._disp.infoTime.txt_value, new c.TextVO(""));
      this._disp.infoTime.txt_value.mouseEnabled = false;
      v.CastleRecruitDialogUnits.setIconInInfoArea(v.CastleRecruitDialogUnits.ICON_TIME, this._disp.infoTime);
      this.i_infoFood_txt_value = this.textFieldManager.registerTextField(this._disp.infoFood.txt_value, new c.TextVO(""));
      this.i_recruitment_txt_title = this.textFieldManager.registerTextField(this._disp.recruitmentBtn.txt_title, new l.LocalizedTextVO(""));
      this._disp.infoFood.txt_value.mouseEnabled = false;
      this.costTextFields = [];
      this._disp.btn_max.toolTipText = "max";
      this._disp.txt_cost0.toolTipText = "costs";
      this._disp.txt_cost1.toolTipText = "costs";
    }
    if (this._amountPicker) {
      this._amountPicker.destroy();
    }
    this._amountPicker = new R.CastleUnitAmountComponent();
    this._amountPicker.init(this.disp.mc_slider, this._disp.amountPicker, this._disp.btn_max);
    if (this.properties.updateCompleteComponent) {
      this._oldSelectedUnitAmount = -1;
    }
    this.i_txt_title.textContentVO.textId = this.properties.unitVO.getNameString();
    var e;
    var t = u.int(this.properties.unitVO.wodId);
    var i = C.CastleModel.wodData.createVObyWOD(t, I.CastleWodData.TYPE_UNIT);
    if (s.instanceOfClass(this.properties.unitVO, "ToolUnitVO")) {
      this._disp.infoTime.toolTipText = "dialog_recruit_tools_requiredProductionTime_tooltip";
      this._disp.txt_cost1.toolTipText = "costs";
    } else {
      if (this.properties.isHospitalDialog) {
        this._disp.infoTime.toolTipText = "dialog_heal_units_requiredHealingTime_tooltip";
      } else {
        this._disp.infoTime.toolTipText = "dialog_recruit_units_requiredRecruitmentTime_tooltip";
      }
      e = i.beefSupply > 0 ? "dialog_recruit_units_beefConsumptionTotal_tooltip" : i.meadSupply > 0 ? "dialog_recruit_units_meadConsumptionTotal_tooltip" : "dialog_recruit_units_foodConsumptionTotal_tooltip";
      this._disp.infoFood.toolTipText = e;
      this._disp.txt_cost1.toolTipText = e;
    }
    _.ButtonHelper.enableButton(this._disp.btn_max, true);
    var n = u.int(Math.max(C.CastleModel.currencyData.getAffordableAmount(i), C.CastleModel.areaData.activeStorage.getAffordableAmount(i)));
    if (this.properties.unitVO.costC2 > 0 && !this.properties.isHospitalDialog) {
      n = s.instanceOfClass(this.properties.unitVO, "ToolUnitVO") ? this.properties.maxUnits : 99;
    }
    this._amountPicker.setNumberOfItems((Math.min(Math.max(1, n), this.properties.maxUnits), this.properties.maxUnits));
    if ((this.properties.unitVO.costC2 <= 0 || this.properties.isHospitalDialog) && this.properties.updateCompleteComponent) {
      this.selectMaxAmount();
    }
    this.costTextFields.push(this.textFieldManager.registerTextField(this._disp.txt_cost0.txt_cost, new c.TextVO("")));
    this.costTextFields.push(this.textFieldManager.registerTextField(this._disp.txt_cost1.txt_cost, new c.TextVO("")));
    var o = 0;
    if (!this.properties.updateCompleteComponent) {
      if (this._amountPicker.numberOfItems < this._oldSelectedUnitAmount) {
        this._oldSelectedUnitAmount = u.int(this._amountPicker.numberOfItems);
      }
      o = this._oldSelectedUnitAmount;
      this._oldSelectedUnitAmount = -1;
      this._amountPicker.setSelectedAmount(o);
    }
    this.onChangeUnitAmount();
    this.initCosts();
    this.setupRecruitBtn();
  };
  CastleRecruitSelectedUnitComponent.prototype.setupRecruitBtn = function () {
    if (this._freeSlots > 0) {
      if (this.properties.isHospitalDialog) {
        this.i_recruitment_txt_title.textContentVO.textId = "dialog_allianceHelp_healUnits_short";
        this.enableRecruitBtnWithTooltip("", true, true);
      } else if (s.instanceOfClass(this.properties.unitVO, "ToolUnitVO")) {
        if (this.properties.unitVO.getRecruitmentTime(1) > 0) {
          this.i_recruitment_txt_title.textContentVO.textId = "panel_action_buildTools_short";
          this.enableRecruitBtnWithTooltip("", true, true);
        } else {
          this.i_recruitment_txt_title.textContentVO.textId = "panel_action_buyTools_short";
          this.enableRecruitBtnWithTooltip("", true, true);
        }
      } else {
        this.i_recruitment_txt_title.textContentVO.textId = "panel_action_recruit";
        this.enableRecruitBtnWithTooltip("", true, true);
      }
    } else if (this.properties.isHospitalDialog) {
      this.i_recruitment_txt_title.textContentVO.textId = "dialog_allianceHelp_healUnits_short";
      this.enableRecruitBtnWithTooltip("panel_action_recruit_slotsoccupied_tooltip", false, false);
    } else if (s.instanceOfClass(this.properties.unitVO, "ToolUnitVO")) {
      if (this.properties.unitVO.getRecruitmentTime(1) > 0) {
        this.i_recruitment_txt_title.textContentVO.textId = "panel_action_buildTools_short";
        this.enableRecruitBtnWithTooltip("panel_action_buildTools_slotsoccupied_tooltip", false, false);
      } else {
        this.i_recruitment_txt_title.textContentVO.textId = "panel_action_buyTools_short";
        this.enableRecruitBtnWithTooltip("", true, true);
      }
    } else {
      this.i_recruitment_txt_title.textContentVO.textId = "panel_action_recruit";
      this.enableRecruitBtnWithTooltip("panel_action_recruit_slotsoccupied_tooltip", false, false);
    }
    if (this._disp.recruitmentBtn.cacheCanvas) {
      this._disp.recruitmentBtn.updateCache();
    }
  };
  CastleRecruitSelectedUnitComponent.prototype.enableRecruitBtnWithTooltip = function (e, t, i) {
    this._disp.recruitmentBtn.toolTipText = e;
    if (i && this.properties.updateCompleteComponent || _.ButtonHelper.isEnablingDelayed(this._disp.recruitmentBtn)) {
      _.ButtonHelper.delayEnableButton(this._disp.recruitmentBtn, t);
    } else {
      _.ButtonHelper.enableButton(this._disp.recruitmentBtn, t);
    }
  };
  CastleRecruitSelectedUnitComponent.prototype.selectMaxAmount = function () {
    this._amountPicker.setSelectedAmount(this._amountPicker.numberOfItems);
  };
  CastleRecruitSelectedUnitComponent.prototype.getTimeForSelectedAmount = function (e) {
    var t;
    var i = this.properties.unitVO;
    if (this.properties.isHospitalDialog) {
      t = i.getBoostedHealTimeForAmount(e);
    } else {
      t = i.getBoostedRecruitmentTime(e);
      t -= u.int(C.CastleModel.researchData.getAbsoluteProductionBoost(i, t, e, C.CastleModel.areaData.activeAreaInfo));
    }
    return t;
  };
  CastleRecruitSelectedUnitComponent.prototype.isOutOfTutorial = function () {
    return !C.CastleModel.tutorialData.isTutorialActive;
  };
  Object.defineProperty(CastleRecruitSelectedUnitComponent.prototype, "selectedUnitAmount", {
    get: function () {
      if (this._amountPicker) {
        return this._amountPicker.getSelectedAmount();
      } else {
        return 0;
      }
    },
    set: function (e) {
      this._amountPicker.setSelectedAmount(e);
      this.onChangeUnitAmount();
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitSelectedUnitComponent.prototype.getMissingResourcesArray = function () {
    var e = [];
    var t = u.int(this.selectedUnitAmount + 1);
    for (var i = this.getCostList(t), n = 0; n < i.length; ++n) {
      var o = i.getItemByIndex(n);
      var a = u.int(T.CostHelper.getAvailableGoods(new D.CollectableTypeVO().initByCollectable(o)));
      e.push(o.amount > a);
    }
    return e;
  };
  CastleRecruitSelectedUnitComponent.prototype.onMaxValueBlocked = function (e = null) {
    if (this.isOutOfTutorial()) {
      for (var t = this.getMissingResourcesArray(), i = 0; i < t.length; ++i) {
        if (t[i]) {
          this.costTextFields[i].color = p.ClientConstColor.FONT_INSUFFICIENT_COLOR;
        }
      }
      window.setTimeout(this.bindFunction(this.deactivateBlockedHint), 500);
    }
  };
  CastleRecruitSelectedUnitComponent.prototype.deactivateBlockedHint = function () {
    this.initCosts();
  };
  CastleRecruitSelectedUnitComponent.prototype.initCosts = function () {
    var e = this.getCostList(this.selectedUnitAmount);
    if (e.length > 2) {
      throw new Error("Item costs more than two resources, but this dialog can only display two.");
    }
    var t = this.fillToolTipForCostsSuccess(e);
    T.CostHelper.initAsCosts(e, this._disp, false, !t);
    this._disp.mc_discount.visible = false;
    var i = S.castAs(C.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_UNIT_PRIME_SALE), "UnitPrimeSaleEventVO");
    if (!this.properties.isHospitalDialog && i && i.wodIDHasDiscount(this.properties.unitVO.wodId)) {
      this._disp.mc_discount.visible = true;
      this.textFieldManager.registerTextField(this._disp.mc_discount.txt_value, new l.LocalizedTextVO(n.GenericTextIds.VALUE_PERCENTAGE, [-i.discount]));
    }
  };
  CastleRecruitSelectedUnitComponent.prototype.fillToolTipForCostsSuccess = function (e) {
    var t;
    var i = false;
    var n = e.list[0];
    var o = e.list[1];
    var a = this.getStorageAmountForCollectable(n);
    var s = this.getStorageAmountForCollectable(o);
    if (a != -1) {
      t = l.Localize.text(n.getTooltipTextId());
      this._disp.txt_cost0.toolTipText = {
        t: "currencyPlaceholder_StockPlaceholder",
        p: [t, l.Localize.number(a)]
      };
      i = true;
    }
    if (s != -1) {
      t = l.Localize.text(o.getTooltipTextId());
      this._disp.txt_cost1.toolTipText = {
        t: "currencyPlaceholder_StockPlaceholder",
        p: [t, l.Localize.number(s)]
      };
      i = true;
    }
    return i;
  };
  CastleRecruitSelectedUnitComponent.prototype.getStorageAmountForCollectable = function (e) {
    var t = -1;
    if (!e) {
      return -1;
    }
    var i = y.CollectableHelper.getServerKeyByCollectable(e);
    var n = C.CastleModel.currencyData.getCurrencyByKey(i);
    if (n) {
      t = n.amount;
    }
    return t;
  };
  CastleRecruitSelectedUnitComponent.prototype.onChangeUnitAmount = function (e = null) {
    if (this._oldSelectedUnitAmount != this.selectedUnitAmount) {
      this.refresh();
      this.initCosts();
      this._oldSelectedUnitAmount = u.int(this.selectedUnitAmount);
      this.updateTutorialStep();
      _.ButtonHelper.enableButton(this._disp.btn_max, this._amountPicker.getSelectedAmount() != this._amountPicker.numberOfItems);
      this.setupRecruitBtn();
    }
  };
  CastleRecruitSelectedUnitComponent.prototype.refresh = function () {
    if (this.i_infoTime_txt_value && this.i_infoTime_txt_value.textContentVO) {
      this.i_infoTime_txt_value.textContentVO.stringValue = a.TimeStringHelper.getShortTimeStringBySeconds(this.getTimeForSelectedAmount(this.selectedUnitAmount));
    }
    if (this.properties.isHospitalDialog) {
      var e = this.properties.unitVO.healingCostC2 > 0 && this.properties.unitVO.isSubscriptionHealingPremiumActive || this.properties.unitVO.healingCostC2 < 0 && this.properties.unitVO.isSubscriptionHealingNonPremiumActive;
      m.SubscriptionHelper.showSubscriptionStarToTextField(this.i_infoTime_txt_value, e, 20, new O(-5, 0));
    } else {
      m.SubscriptionHelper.showSubscriptionStarToTextField(this.i_infoTime_txt_value, this.properties.unitVO.isRecruitTimeSubscriptionBuffed, 20, new O(-5, 0));
    }
    var t = u.int(this.properties.unitVO.foodSupply * this.selectedUnitAmount);
    var i = u.int(this.properties.unitVO.meadSupply * this.selectedUnitAmount);
    var o = u.int(this.properties.unitVO.beefSupply * this.selectedUnitAmount);
    this.i_infoFood_txt_value.textContentVO.stringValue = String(n.MathBase.max(t, i, o));
    this._disp.infoFood.visible = n.MathBase.max(t, i, o) > 0;
    if (o > 0) {
      v.CastleRecruitDialogUnits.setIconInInfoArea(v.CastleRecruitDialogUnits.ICON_BEEF_CONSUMPTION, this._disp.infoFood);
    }
    if (i > 0) {
      v.CastleRecruitDialogUnits.setIconInInfoArea(v.CastleRecruitDialogUnits.ICON_MEAD_CONSUMPTION, this._disp.infoFood);
    } else if (t > 0) {
      v.CastleRecruitDialogUnits.setIconInInfoArea(v.CastleRecruitDialogUnits.ICON_FOOD_CONSUMPTION, this._disp.infoFood);
    }
  };
  CastleRecruitSelectedUnitComponent.prototype.onReviveClick = function () {
    C.CastleModel.smartfoxClient.sendCommandVO(new M.C2SReviveUnitPackageVO(this.properties.unitVO.wodId, this.selectedUnitAmount));
    _.ButtonHelper.enableButton(this._disp.recruitmentBtn, false);
  };
  CastleRecruitSelectedUnitComponent.prototype.onRecruitmentClick = function () {
    var e = this.properties.unitVO;
    _.ButtonHelper.enableButton(this._disp.recruitmentBtn, false);
    C.CastleModel.smartfoxClient.sendCommandVO(new h.C2SBuyUnitPackageVO(C.CastleModel.militaryData.getListIdByCategory(e.isAuxiliary ? d.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES : e.unitCategory), e.wodId, this.selectedUnitAmount, C.CastleModel.kingdomData.activeKingdomID, C.CastleModel.permanentCastleData.getCurrentCastle().areaId));
  };
  CastleRecruitSelectedUnitComponent.prototype.updateTutorialStep = function () {
    this._amountPicker.enableComponent(true);
  };
  CastleRecruitSelectedUnitComponent.prototype.getCostList = function (e) {
    var t = new b.CollectableList();
    if (this.properties.isHospitalDialog) {
      t = P.CollectableManager.parser.createGoodsListSave(new A.CollectableItemC1VO(this.properties.unitVO.healingCostC1 * e), new L.CollectableItemC2VO(this.properties.unitVO.healingCostC2 * e));
    } else {
      for (var i = 0, n = this.properties.unitVO.getCostTypes(); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = u.int(this.properties.unitVO.getCost(o));
          var s = S.castAs(C.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_UNIT_PRIME_SALE), "UnitPrimeSaleEventVO");
          if (s && s.wodIDHasDiscount(this.properties.unitVO.wodId)) {
            a = Math.ceil(a * (1 - s.discount / 100));
          }
          if (a) {
            t.addItem(y.CollectableHelper.createVO(o.type, a * e, o.id));
          }
        }
      }
    }
    return t;
  };
  CastleRecruitSelectedUnitComponent.prototype.onClick = function (e) {
    if (_.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this._disp.recruitmentBtn:
          if (this.properties.isHospitalDialog) {
            this.onReviveClick();
          } else {
            this.onRecruitmentClick();
          }
          if (this.properties.confirmCallback != null) {
            this.properties.confirmCallback();
          }
          break;
        case this._disp.btn_max:
          this.selectMaxAmount();
      }
    }
  };
  Object.defineProperty(CastleRecruitSelectedUnitComponent.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRecruitSelectedUnitComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRecruitSelectedUnitComponent.prototype, "needsUpdate", {
    get: function () {
      return this._disp.visible || !this._initialized;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRecruitSelectedUnitComponent.prototype, "freeSlots", {
    set: function (e) {
      this._freeSlots = e;
      if (this._initialized) {
        this.setupRecruitBtn();
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitSelectedUnitComponent.MAX_WIDTH = 100;
  CastleRecruitSelectedUnitComponent.MAX_HEIGHT = 90;
  return CastleRecruitSelectedUnitComponent;
}();
exports.CastleRecruitSelectedUnitComponent = E;
var y = require("./45.js");
var b = require("./48.js");
var D = require("./74.js");
var I = require("./56.js");
var T = require("./66.js");
var v = require("./643.js");
var S = require("./1.js");
var A = require("./234.js");
var L = require("./128.js");
var P = require("./50.js");
var M = require("./2965.js");
var R = require("./297.js");