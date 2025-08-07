Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./49.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./3.js");
var _ = require("./3.js");
var m = require("./3.js");
var f = require("./6.js");
var O = require("./18.js");
var E = require("./2935.js");
var y = require("./2936.js");
var b = require("./623.js");
var D = require("./312.js");
var I = require("./21.js");
var T = require("./794.js");
var v = require("./129.js");
var S = require("./26.js");
var A = require("./71.js");
var L = require("./4.js");
var P = require("./1562.js");
var M = require("./213.js");
var R = require("./1563.js");
var V = require("./42.js");
var x = require("./8.js");
var w = require("./185.js");
var B = require("./35.js");
var F = require("./768.js");
var N = require("./2937.js");
var k = function (e) {
  function CastleRecruitDialogHospital(t) {
    var i = e.call(this, t) || this;
    i.waitingForHFL = false;
    i.initButtons();
    i._reviveListComponent = new X.UnitReviveListComponent(i.hospitalDialog.mc_buildList, Y.BasicBuildListComponent.ALIGN_HORIZONTAL);
    i._inventoryListComponent = new q.HospitalInventoryListComponent(i.hospitalDialog.itemSelection, i.bindFunction(i.onSelectUnit));
    i._allianceHelpRequestBtnComponent = new R.CastleAllianceHelpRequestButtonComponent(i.hospitalDialog.btn_alliance_help_request);
    i._allianceHelpRequestBtnComponent.hide();
    i.textFieldManager.registerTextField(i.hospitalDialog.txt_title, new _.LocalizedTextVO("dialog_hospital_title"));
    i.textFieldManager.registerTextField(i.hospitalDialog.btn_deleteAll.txt_text, new _.LocalizedTextVO("dialog_hospital_deleteAllButton"));
    i.textFieldManager.registerTextField(i.hospitalDialog.mc_rubyBlockOverlay.txt_desc, new _.LocalizedTextVO("dialog_hospital_rubyUnitsFilter_desc")).verticalAlign = V.CastleGGSVerticalAlign.MIDDLE;
    i.textFieldManager.registerTextField(i.hospitalDialog.btn_revive_all.txt_value, new _.LocalizedTextVO("dialog_hospital_reviveAllButton")).verticalAlign = V.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    i.hospitalDialog.btn_filter_melee.toolTipText = "dialog_hospital_filterMelee_tooltip";
    i.hospitalDialog.btn_filter_range.toolTipText = "dialog_hospital_filterRange_tooltip";
    i.hospitalDialog.btn_filter_mead_melee.toolTipText = "dialog_hospital_filterMeleeMeadUnits_tooltip";
    i.hospitalDialog.btn_filter_mead_range.toolTipText = "dialog_hospital_filterRangedMeadUnits_tooltip";
    i.hospitalDialog.btn_filter_ruby.toolTipText = "dialog_hospital_filterRubyUnits_tooltip";
    i.hospitalDialog.btn_filter_all.toolTipText = "dialog_hospital_filterAll_tooltip";
    i.hospitalDialog.btn_filter_special.toolTipText = "dialog_hospital_filterSpecial_tooltip";
    i.hospitalDialog.btn_cancel.toolTipText = "dialog_recruit_abort";
    i.hospitalDialog.btn_rubyFilter_active.toolTipText = "dialog_hospital_rubyUnitsFilter_button_filterActive_tooltip";
    i.hospitalDialog.btn_rubyFilter_inactive.toolTipText = "dialog_hospital_rubyUnitsFilter_button_filterInactive_tooltip";
    i.hospitalDialog.mc_hospitalCapacity.toolTipText = "hospital_info_capacity";
    i.hospitalDialog.mc_hospitalCapacity.mouseChildren = false;
    i.hospitalDialog.btn_revive_all.mc_discount.visible = false;
    i.unitRecruitmentControls = new ee.CastleRecruitSelectedUnitComponent(i.hospitalDialog.unitRecruitmentControls);
    return i;
  }
  n.__extends(CastleRecruitDialogHospital, e);
  CastleRecruitDialogHospital.prototype.initButtons = function () {
    var e = new Array();
    e.push(this.hospitalDialog.btn_alliance_help_request);
    e.push(this.hospitalDialog.btn_revive_all);
    e.push(this.hospitalDialog.btn_skip);
    e.push(this.hospitalDialog.btn_cancel);
    this.initBasicButtons(e);
    x.ButtonHelper.initButtons([this.hospitalDialog.btn_filter_melee, this.hospitalDialog.btn_filter_range, this.hospitalDialog.btn_filter_mead_melee, this.hospitalDialog.btn_filter_mead_range, this.hospitalDialog.btn_filter_ruby, this.hospitalDialog.btn_filter_all, this.hospitalDialog.btn_filter_special], a.TwoStateIconZoomButton);
    x.ButtonHelper.initButtons([this.hospitalDialog.mc_rubyBlockOverlay.btn_checkbox], ne.TwoStateButton);
    x.ButtonHelper.initButtons([this.hospitalDialog.btn_deleteAll, this.hospitalDialog.btn_rubyFilter_active, this.hospitalDialog.btn_rubyFilter_inactive], J.ClickFeedbackButtonHover);
  };
  CastleRecruitDialogHospital.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._inventoryListComponent.destroy();
  };
  Object.defineProperty(CastleRecruitDialogHospital.prototype, "hospitalDialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialogHospital.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.capacityTextfield = this.textFieldManager.registerTextField(this.hospitalDialog.mc_hospitalCapacity.txt_value, new _.LocalizedTextVO(s.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    this.progressTextfield = this.textFieldManager.registerTextField(this.hospitalDialog.unitProgress.txt_progress, new m.TextVO(""));
    this.reviveAllDiscountTextField = this.textFieldManager.registerTextField(this.hospitalDialog.btn_revive_all.mc_discount.txt_value, new _.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [0]));
    this.controller.addEventListener(A.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onCastleDataUpdated));
    L.CastleModel.timerData.addEventListener(I.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerSecondIntervalTick));
    this._reviveListComponent.addEventListener(T.BasicBuildListEvent.SELECTED_ITEM, this.bindFunction(this.onSelectReviveListItem));
    this.controller.addEventListener(v.CastleMilitaryDataEvent.HOSPITALINVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    this.controller.addEventListener(v.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
    L.CastleModel.allianceHelpRequestData.addEventListener(D.CastleAllianceHelpRequestDataEvent.REQUEST_COMPLETE, this.bindFunction(this.onRequestComplete));
    L.CastleModel.allianceHelpRequestData.addEventListener(D.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onRequestComplete));
    L.CastleModel.specialEventData.addEventListener(S.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    L.CastleModel.specialEventData.addEventListener(S.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    this.controller.addEventListener(Q.CastleEilandEvent.NEW_EILAND_TITLE, this.bindFunction(this.onInventoryUpdated));
    this.controller.addEventListener(oe.CastleHospitalEvent.HOSPITAL_FLAGS_RECEIVED, this.bindFunction(this.onHospitalFlagsReceived));
    this._inventoryListComponent.pageChangedSignal.add(this.bindFunction(this.onInventoryUpdated));
    this.hideItemProgressInfo();
    this.currentFilter = CastleRecruitDialogHospital.FILTER_SOLDIER_ALL;
    this.onCastleDataUpdated();
    this.onInventoryUpdated();
    this.onPackageListUpdated();
    this.onEventUpdated();
    this._reviveListComponent.selectedSlot = 0;
    this._inventoryListComponent.show();
    if (this.lastBasicUnitVOSelected) {
      this.openSelectUnitComponent(this.lastBasicUnitVOSelected);
    } else {
      this.unitRecruitmentControls.hide();
      this.setUnitSelectorVisible(false);
    }
    this.hospitalDialog.mc_rubyBlockOverlay.visible = false;
    this.hospitalDialog.btn_rubyFilter_active.visible = false;
    this.hospitalDialog.btn_rubyFilter_inactive.visible = false;
    L.CastleModel.smartfoxClient.sendCommandVO(new ae.C2SHospitalFlagsVO(L.CastleModel.areaData.activeAreaInfo.kingdomID, L.CastleModel.areaData.activeAreaInfo.objectId));
    this.waitingForHFL = true;
  };
  CastleRecruitDialogHospital.prototype.onEventUpdated = function (e = null) {
    var t = CastleRecruitDialogHospital.getHealAllDiscount();
    if (t > 0) {
      this.hospitalDialog.btn_revive_all.mc_discount.visible = true;
      this.reviveAllDiscountTextField.textContentVO.textReplacements = [t];
    } else {
      this.hospitalDialog.btn_revive_all.mc_discount.visible = false;
    }
  };
  CastleRecruitDialogHospital.getHealAllDiscount = function () {
    var e;
    e = L.CastleModel.specialEventData.getActiveEventByEventId(h.EventConst.EVENTTYPE_PRIME_SALES_REVIVE_ALL);
    return f.int(e ? e.discount : 0);
  };
  CastleRecruitDialogHospital.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this._reviveListComponent.selectedSlot > 0) {
      this._reviveListComponent.selectedSlot = 0;
    }
    this._reviveListComponent.clearItems();
    this.controller.removeEventListener(A.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onCastleDataUpdated));
    L.CastleModel.timerData.removeEventListener(I.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerSecondIntervalTick));
    this._reviveListComponent.removeEventListener(T.BasicBuildListEvent.SELECTED_ITEM, this.bindFunction(this.onSelectReviveListItem));
    this.controller.removeEventListener(v.CastleMilitaryDataEvent.HOSPITALINVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    this.controller.removeEventListener(v.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
    L.CastleModel.allianceHelpRequestData.removeEventListener(D.CastleAllianceHelpRequestDataEvent.REQUEST_COMPLETE, this.bindFunction(this.onRequestComplete));
    L.CastleModel.allianceHelpRequestData.removeEventListener(D.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onRequestComplete));
    L.CastleModel.specialEventData.removeEventListener(S.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    L.CastleModel.specialEventData.removeEventListener(S.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    this.controller.removeEventListener(Q.CastleEilandEvent.NEW_EILAND_TITLE, this.bindFunction(this.onInventoryUpdated));
    this.controller.removeEventListener(oe.CastleHospitalEvent.HOSPITAL_FLAGS_RECEIVED, this.bindFunction(this.onHospitalFlagsReceived));
    this._inventoryListComponent.pageChangedSignal.remove(this.bindFunction(this.onInventoryUpdated));
    this.unitRecruitmentControls.dispose();
  };
  CastleRecruitDialogHospital.prototype.onRequestComplete = function (e) {
    if (e.requestVO && e.requestVO.requestTypeId == d.AllianceConst.ALLIANCE_HELP_HEAL_UNIT) {
      L.CastleModel.smartfoxClient.sendCommandVO(new b.C2SShowPackageListVO(L.CastleModel.militaryData.getListIdByCategory(O.ClientConstCastle.CATEGORY_HOSPITAL)));
    }
  };
  CastleRecruitDialogHospital.prototype.showHelp = function () {
    W.CastleDialogHandler.getInstance().showHelper(this.hospitalDialog.txt_title.text, C.Localize.text("help_hospital"));
  };
  Object.defineProperty(CastleRecruitDialogHospital.prototype, "currentFilter", {
    get: function () {
      return this._currentFilter;
    },
    set: function (e) {
      if (e != this._currentFilter) {
        this._currentFilter = e;
        this._inventoryListComponent.currentPage = 0;
        this.initFilterButtons();
        this.fillShopItems();
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialogHospital.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (x.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.hospitalDialog.btn_skip:
          this.skipCurrentSlot();
          break;
        case this.hospitalDialog.btn_filter_melee:
          this.currentFilter = CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE;
          break;
        case this.hospitalDialog.btn_filter_range:
          this.currentFilter = CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE;
          break;
        case this.hospitalDialog.btn_filter_mead_melee:
          this.currentFilter = CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE_MEAD;
          break;
        case this.hospitalDialog.btn_filter_mead_range:
          this.currentFilter = CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE_MEAD;
          break;
        case this.hospitalDialog.btn_filter_ruby:
          this.currentFilter = CastleRecruitDialogHospital.FILTER_SOLDIER_RUBY;
          break;
        case this.hospitalDialog.btn_filter_all:
          this.currentFilter = CastleRecruitDialogHospital.FILTER_SOLDIER_ALL;
          break;
        case this.hospitalDialog.btn_filter_special:
          this.currentFilter = CastleRecruitDialogHospital.FILTER_SOLDIER_SPECIAL;
          break;
        case this.hospitalDialog.btn_cancel:
          this.cancelCurrentSlot();
          break;
        case this.hospitalDialog.btn_revive_all:
          this.openReviveAllDialog();
          break;
        case this.hospitalDialog.btn_deleteAll:
          W.CastleDialogHandler.getInstance().registerDefaultDialogs(Z.ModernYesNoDialog, new s.BasicStandardYesNoDialogProperties("dialog_hospital_deleteAll_header", C.Localize.text("dialog_hospital_deleteAll_copy", [this.getFilteredUnitAmount()]), this.bindFunction(this.onConfirmDeleteAll)));
          break;
        case this.hospitalDialog.btn_rubyFilter_active:
        case this.hospitalDialog.btn_rubyFilter_inactive:
          this.hospitalDialog.mc_rubyBlockOverlay.visible = !this.hospitalDialog.mc_rubyBlockOverlay.visible;
          break;
        case this.hospitalDialog.mc_rubyBlockOverlay.btn_checkbox:
          this.toggleRubyBlock();
      }
    }
  };
  CastleRecruitDialogHospital.prototype.getFilteredUnitAmount = function () {
    var e = 0;
    for (var t = this.getFilteredSoldierInventory(), i = 0; i < t.length; i++) {
      e += L.CastleModel.militaryData.unitHospitalInventory.getUnitCountByWodId(t[i].wodId);
    }
    return e;
  };
  CastleRecruitDialogHospital.prototype.onConfirmDeleteAll = function (e = null) {
    var t = [];
    for (var i = this.getFilteredSoldierInventory(), n = 0; n < i.length; n++) {
      t.push({
        U: i[n].wodId,
        A: L.CastleModel.militaryData.unitHospitalInventory.getUnitCountByWodId(i[n].wodId)
      });
    }
    s.BasicModel.smartfoxClient.sendCommandVO(new $.C2SDismissManyHospitalUnits(t));
  };
  CastleRecruitDialogHospital.prototype.skipCurrentSlot = function () {
    x.ButtonHelper.enableButton(this.hospitalDialog.btn_skip, false);
    this._allianceHelpRequestBtnComponent.hide();
    this.controller.addEventListener(G.HSSCommand.EVENT_SKIP_HOSPITAL_SLOT_FAILED, this.bindFunction(this.onSkipHospitalSlotSkipFailed));
    L.CastleModel.smartfoxClient.sendCommandVO(new y.C2SSkipHospitalSlot(this._reviveListComponent.selectedItem.slotVO.pos));
    this._reviveListComponent.preventNextDynamicPreselection();
  };
  CastleRecruitDialogHospital.prototype.onSkipHospitalSlotSkipFailed = function (e) {
    x.ButtonHelper.enableButton(this.hospitalDialog.btn_skip, true);
    this.updateAllianceHelpButton();
    this.controller.removeEventListener(G.HSSCommand.EVENT_SKIP_HOSPITAL_SLOT_FAILED, this.bindFunction(this.onSkipHospitalSlotSkipFailed));
  };
  CastleRecruitDialogHospital.prototype.cancelCurrentSlot = function () {
    var e = require("./767.js").CastleTimedYesNoDialog;
    var t = this._reviveListComponent.selectedItem.unitPackageSlotVO.isFirst ? e : K.CastleLargeYesNoDialog;
    W.CastleDialogHandler.getInstance().registerDefaultDialogs(t, new F.CastleTimedYesNoDialogProperties(C.Localize.text("dialog_hospital_cancelHealing_title"), C.Localize.text("dialog_hospital_cancelHealing_desc"), "countdown_restTime", this._reviveListComponent.selectedItem.unitPackageSlotVO.remainingTimeInSeconds, false, this.bindFunction(this.onCurrentSlotCancelled)));
  };
  CastleRecruitDialogHospital.prototype.onCurrentSlotCancelled = function (e = null) {
    if (this._reviveListComponent && this._reviveListComponent.selectedItem && this._reviveListComponent.selectedItem.slotVO) {
      L.CastleModel.smartfoxClient.sendCommandVO(new E.C2SCancelHospitalSlot(this._reviveListComponent.selectedItem.slotVO.pos));
      this._reviveListComponent.preventNextDynamicPreselection();
    }
  };
  CastleRecruitDialogHospital.prototype.openReviveAllDialog = function () {
    var e = 0;
    var t = 0;
    var i = 0;
    var n = 0;
    for (var o = L.CastleModel.militaryData.unitHospitalInventory.getUnits(null), a = 0; a < o.length; ++a) {
      var s = o[a];
      t += f.int(s.inventoryAmount * s.foodSupply);
      i += f.int(s.inventoryAmount * s.meadSupply);
      n += f.int(s.inventoryAmount * s.beefSupply);
      e += f.int(s.inventoryAmount * s.reviveAllCostC2);
    }
    e = Math.ceil(e * (100 - CastleRecruitDialogHospital.getHealAllDiscount()) / 100);
    W.CastleDialogHandler.getInstance().registerDefaultDialogs(z.CastleHospitalReviveAllDialog, new N.CastleHospitalReviveAllDialogProperties(e, t, i, n, CastleRecruitDialogHospital.getHealAllDiscount()));
  };
  CastleRecruitDialogHospital.prototype.onSelectReviveListItem = function (e) {
    this.updateSkipButton();
    this.updateAllianceHelpButton();
    this.updateProgress();
  };
  CastleRecruitDialogHospital.prototype.onTimerSecondIntervalTick = function (e = null) {
    this.updateProgress();
    this.updateSkipButton(false);
  };
  CastleRecruitDialogHospital.prototype.onInventoryUpdated = function (e = null) {
    this.fillShopItems();
    if (this.lastBasicUnitVOSelected) {
      var t = null;
      for (var i = L.CastleModel.militaryData.unitHospitalInventory.getSoldiers(), n = 0; n < i.length; n++) {
        if (this.lastBasicUnitVOSelected.wodId == i[n].wodId) {
          t = i[n];
        }
      }
      this.openSelectUnitComponent(t);
    }
    this.updateOccupancy();
    this.updateReviveAllButton();
  };
  CastleRecruitDialogHospital.prototype.onCastleDataUpdated = function (e = null) {
    this.updateOccupancy();
  };
  CastleRecruitDialogHospital.prototype.updateReviveAllButton = function () {
    x.ButtonHelper.enableButton(this.hospitalDialog.btn_revive_all, L.CastleModel.militaryData.unitHospitalInventory.getUnitCount(null) > 0);
    if (x.ButtonHelper.isButtonEnabled(this.hospitalDialog.btn_revive_all)) {
      this.hospitalDialog.btn_revive_all.toolTipText = null;
    } else {
      this.hospitalDialog.btn_revive_all.toolTipText = "dialog_hospital_reviveAllButton_inactive_tooltip";
    }
  };
  CastleRecruitDialogHospital.prototype.onPackageListUpdated = function (e = null) {
    var t = L.CastleModel.militaryData.getPackageListById(g.UnitProductionConst.HOSPITAL_LIST);
    this._reviveListComponent.fillItems(t);
    if (this._reviveListComponent.selectedItem && this._reviveListComponent.selectedItem.slotVO.pos == this._reviveListComponent.selectedSlot) {
      this.updateSkipButton();
    }
    this.updateAllianceHelpButton();
    this.updateProgress();
    this.unitRecruitmentControls.freeSlots = t.numFreeSlots + t.lockedSlots;
    x.ButtonHelper.enableButton(this.hospitalDialog.btn_cancel, true);
  };
  CastleRecruitDialogHospital.prototype.fillShopItems = function () {
    var e = this.getFilteredSoldierInventory();
    e.sort(U.ClientConstSort.sortByUnitSortOrder);
    this._inventoryListComponent.changeUnitInventory(e);
    if (e.length == 0) {
      var t;
      this.hospitalDialog.itemSelection.hospitalInventory_overlay.visible = true;
      switch (this._currentFilter) {
        case CastleRecruitDialogHospital.FILTER_SOLDIER_ALL:
          t = "dialog_hospital_filterAll_empty";
          break;
        case CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE:
          t = "dialog_hospital_filterMelee_empty";
          break;
        case CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE_MEAD:
          t = "dialog_hospital_filterMeleeMeadUnits_empty";
          break;
        case CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE:
          t = "dialog_hospital_filterRange_empty";
          break;
        case CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE_MEAD:
          t = "dialog_hospital_filterRangedMeadUnits_empty";
          break;
        case CastleRecruitDialogHospital.FILTER_SOLDIER_RUBY:
          t = "dialog_hospital_filterRubyUnits_empty";
          break;
        case CastleRecruitDialogHospital.FILTER_SOLDIER_SPECIAL:
          t = "dialog_hospital_filterSpecial_empty";
          break;
        default:
          t = "dialog_hospital_filterAll_empty";
      }
      this.textFieldManager.registerTextField(this.hospitalDialog.itemSelection.hospitalInventory_overlay.txt_description, new _.LocalizedTextVO(t));
      x.ButtonHelper.enableButton(this.hospitalDialog.btn_deleteAll, false);
      this.hospitalDialog.btn_deleteAll.toolTipText = "dialog_hospital_reviveAllButton_inactive_tooltip";
    } else {
      this.hospitalDialog.itemSelection.hospitalInventory_overlay.visible = false;
      x.ButtonHelper.enableButton(this.hospitalDialog.btn_deleteAll, true);
      this.hospitalDialog.btn_deleteAll.toolTipText = null;
    }
    this.openSelectUnitComponent(this.lastBasicUnitVOSelected);
  };
  CastleRecruitDialogHospital.prototype.getFilteredSoldierInventory = function (e = null) {
    var t;
    var i;
    var n = L.CastleModel.militaryData.unitHospitalInventory;
    var o = 0;
    var a = e || this._currentFilter;
    switch (a) {
      case CastleRecruitDialogHospital.FILTER_SOLDIER_ALL:
      case CastleRecruitDialogHospital.FILTER_SOLDIER_RUBY:
        t = n.getUnits(null);
        break;
      case CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE:
      case CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE_MEAD:
        t = n.getUnitsByType(CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE);
        break;
      case CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE:
      case CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE_MEAD:
        t = n.getUnitsByType(CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE);
        break;
      case CastleRecruitDialogHospital.FILTER_SOLDIER_SPECIAL:
        t = n.getEventUnits();
    }
    if (a == CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE || a == CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE) {
      for (i = []; o < t.length; o++) {
        if (t[o].foodSupply > 0) {
          i.push(t[o]);
        }
      }
    }
    if (a == CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE_MEAD || a == CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE_MEAD) {
      for (i = []; o < t.length; o++) {
        if (t[o].meadSupply > 0 || t[o].beefSupply > 0) {
          i.push(t[o]);
        }
      }
    }
    if (a == CastleRecruitDialogHospital.FILTER_SOLDIER_RUBY) {
      for (i = []; o < t.length; o++) {
        if (t[o].healingCostC2 > 0) {
          i.push(t[o]);
        }
      }
    }
    return i || t;
  };
  CastleRecruitDialogHospital.prototype.showItemProgressInfo = function () {
    var e = this._reviveListComponent.selectedItem.unitPackageSlotVO;
    this.hospitalDialog.unitProgress.visible = true;
    this.hospitalDialog.btn_skip.visible = true;
    this.hospitalDialog.unitProgress.progressBarStatus.scaleX = e.healingReadyInPercent;
    this.hospitalDialog.btn_cancel.visible = true;
    this.progressTextfield.textContentVO.stringValue = r.TimeStringHelper.getTimeToString(e.remainingTimeInSeconds, r.TimeStringHelper.TWO_TIME_FORMAT, C.Localize.text);
    var t = e.unitVO.healingCostC2 > 0;
    w.SubscriptionHelper.showSubscriptionStarToTextField(this.progressTextfield, t ? e.unitVO.isSubscriptionHealingPremiumActive : e.unitVO.isSubscriptionHealingNonPremiumActive, 0, null, false);
  };
  CastleRecruitDialogHospital.prototype.updateAllianceHelpButton = function () {
    var e = l.castAs(this._reviveListComponent.selectedItem, "UnitReviveListItem");
    if (e) {
      var t = l.castAs(e.unitPackageSlotVO, "UnitHealPackageSlotVO");
      if (t && u.instanceOfClass(t.unitVO, "SoldierUnitVO") && !L.CastleModel.areaData.activeArea.isFactionCamp) {
        var i = L.CastleModel.militaryData.getPackageListById(g.UnitProductionConst.HOSPITAL_LIST);
        var n = f.int(i.listId);
        var o = new P.AllianceHelpRequestHealParamsVO(t.recruitmentID, n, L.CastleModel.areaData.activeArea.areaId, L.CastleModel.areaData.activeArea.spaceId);
        this._allianceHelpRequestBtnComponent.setParams(n, o, t.healTimeReduction > 0);
        this._allianceHelpRequestBtnComponent.show();
        return;
      }
    }
    this._allianceHelpRequestBtnComponent.hide();
  };
  CastleRecruitDialogHospital.prototype.updateSkipButton = function (e = true) {
    var t = l.castAs(this._reviveListComponent.selectedItem, "UnitReviveListItem");
    if (t) {
      var i = t.unitPackageSlotVO;
      if (i) {
        var n = i.unitVO;
        if (n) {
          if (e) {
            x.ButtonHelper.delayEnableButton(this.hospitalDialog.btn_skip, true, o.BasicButton.DEFAULT_DELAY_TIME);
          }
          this.updateSkipTooltip(t, n, i);
        }
      }
    }
  };
  CastleRecruitDialogHospital.prototype.updateSkipTooltip = function (e, t, i) {
    var n = i.amount;
    var o = e.unitPackageSlotVO.remainingTimeInSeconds / i.healingTime;
    var a = f.int(p.ConstructionConst.getSkipCostForUnits(t.healingSkipCost * n, o));
    this.hospitalDialog.btn_skip.toolTipText = {
      t: "dialog_hospital_skipButton_tooltip",
      p: [a]
    };
  };
  CastleRecruitDialogHospital.prototype.hideItemProgressInfo = function () {
    this._allianceHelpRequestBtnComponent.hide();
    this.hospitalDialog.unitProgress.visible = false;
    this.hospitalDialog.btn_skip.visible = false;
    this.hospitalDialog.btn_cancel.visible = false;
  };
  CastleRecruitDialogHospital.prototype.initFilterButtons = function () {
    x.ButtonHelper.setButtonSelected(this.hospitalDialog.btn_filter_melee, this._currentFilter == CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE);
    x.ButtonHelper.setButtonSelected(this.hospitalDialog.btn_filter_range, this._currentFilter == CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE);
    x.ButtonHelper.setButtonSelected(this.hospitalDialog.btn_filter_mead_melee, this._currentFilter == CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE_MEAD);
    x.ButtonHelper.setButtonSelected(this.hospitalDialog.btn_filter_mead_range, this._currentFilter == CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE_MEAD);
    x.ButtonHelper.setButtonSelected(this.hospitalDialog.btn_filter_ruby, this._currentFilter == CastleRecruitDialogHospital.FILTER_SOLDIER_RUBY);
    x.ButtonHelper.setButtonSelected(this.hospitalDialog.btn_filter_all, this._currentFilter == CastleRecruitDialogHospital.FILTER_SOLDIER_ALL);
    x.ButtonHelper.setButtonSelected(this.hospitalDialog.btn_filter_special, this._currentFilter == CastleRecruitDialogHospital.FILTER_SOLDIER_SPECIAL);
    this.hospitalDialog.btn_filter_mead_melee.visible = L.CastleModel.legendSkillData.meadUnitsUnlocked;
    this.hospitalDialog.btn_filter_mead_range.visible = L.CastleModel.legendSkillData.meadUnitsUnlocked;
  };
  CastleRecruitDialogHospital.prototype.updateProgress = function () {
    var e = l.castAs(this._reviveListComponent.selectedItem, "UnitReviveListItem");
    if (e && e.unitPackageSlotVO && e.unitPackageSlotVO.unitVO) {
      this.showItemProgressInfo();
    } else {
      this.hideItemProgressInfo();
    }
  };
  CastleRecruitDialogHospital.prototype.updateOccupancy = function () {
    var e;
    var t = f.int(L.CastleModel.militaryData.unitHospitalInventory.getUnitCount(null));
    if (e = L.CastleModel.areaData.activeArea.isFactionCamp ? j.Iso.data.objects.provider.getObjectByType(H.IsoObjectEnum.FACTION_HOSPITAL) : j.Iso.data.objects.provider.getObjectByType(H.IsoObjectEnum.HOSPITAL)) {
      var i = this.getHospitalCapacity(e);
      var n = M.CastleMathHelper.clamp(t / i, 0, 1);
      this.capacityTextfield.textContentVO.textReplacements = [t, i];
      this.hospitalDialog.mc_hospitalCapacity.bar.scaleX = n;
    }
  };
  CastleRecruitDialogHospital.prototype.getHospitalCapacity = function (e) {
    var t = f.int(L.CastleModel.researchData.getResearchEffectValue(ie.EffectTypeEnum.EFFECT_TYPE_HOSPITAL_CAPACITY_BONUS, L.CastleModel.areaData.activeAreaInfo.areaType, L.CastleModel.areaData.activeArea.spaceId).strength);
    var i = L.CastleModel.lordData.getBaronByCastleMapObjectVO(j.Iso.data.areaData.areaInfo);
    var n = f.int(i ? i.getEffectValue(ie.EffectTypeEnum.EFFECT_TYPE_HOSPITAL_CAPACITY_BONUS) : 0);
    var o = L.CastleModel.areaData.activeArea.constructionItems.getConstructionItemEffectValue(se.CastleEffectEnum.HOSPITALCAPACITY);
    return e.baseHospitalCapacity + o + t + n;
  };
  CastleRecruitDialogHospital.prototype.onSelectUnit = function (e) {
    this.openSelectUnitComponent(e);
    this.hospitalDialog.mc_rubyBlockOverlay.visible = false;
  };
  CastleRecruitDialogHospital.prototype.openSelectUnitComponent = function (e, t = true) {
    this.lastBasicUnitVOSelected = e;
    if (e && this.selectUnitInStorePage(e)) {
      var i = f.int(L.CastleModel.researchData.getResearchEffectValue(ie.EffectTypeEnum.EFFECT_TYPE_HOSPITAL_SLOT_BONUS).strength);
      var n = L.CastleModel.subscriptionData.isEffectTypeActive(ie.EffectTypeEnum.EFFECT_TYPE_HOSPITAL_SLOT_BONUS);
      var o = f.int(n ? L.CastleModel.subscriptionData.getEffectValue(ie.EffectTypeEnum.EFFECT_TYPE_HOSPITAL_SLOT_BONUS) : 0);
      var a = f.int(Math.min(e.inventoryAmount, CastleRecruitDialogHospital.BASIC_HEALINGLIMIT + i + o));
      this.unitRecruitmentControls.initWithProp(new te.CastleRecruitSelectUnitsDialogProperties(e, a, null, t, true));
    } else {
      this.unitRecruitmentControls.hide();
    }
  };
  CastleRecruitDialogHospital.prototype.selectUnitInStorePage = function (e) {
    var t = -1;
    var i = this._inventoryListComponent.currentPage * CastleRecruitDialogHospital.SHOP_ITEMS_PER_PAGE;
    for (var n = Math.min(i + CastleRecruitDialogHospital.SHOP_ITEMS_PER_PAGE - 1, this._inventoryListComponent.unitInventory.length), o = i; o <= n; o++) {
      var a = this._inventoryListComponent.unitInventory[o];
      if (a && a.wodId == e.wodId) {
        t = o % CastleRecruitDialogHospital.SHOP_ITEMS_PER_PAGE;
      }
    }
    if (t > -1) {
      this.hospitalDialog.itemSelection.unitSelector.x = this.hospitalDialog.itemSelection["i" + t].x - 2;
      this.setUnitSelectorVisible(true);
      return true;
    } else {
      this.setUnitSelectorVisible(false);
      return false;
    }
  };
  CastleRecruitDialogHospital.prototype.setUnitSelectorVisible = function (e) {
    this.hospitalDialog.itemSelection.unitSelector.visible = e;
  };
  CastleRecruitDialogHospital.prototype.toggleRubyBlock = function () {
    if (!this.waitingForHFL) {
      x.ButtonHelper.setButtonSelected(this.hospitalDialog.mc_rubyBlockOverlay.btn_checkbox, !this.hospitalFlags.hasRubyFilter);
      L.CastleModel.smartfoxClient.sendCommandVO(new ae.C2SHospitalFlagsVO(L.CastleModel.areaData.activeAreaInfo.kingdomID, L.CastleModel.areaData.activeAreaInfo.objectId, this.hospitalFlags.hasRubyFilter ? 0 : 1));
      this.waitingForHFL = true;
    }
  };
  CastleRecruitDialogHospital.prototype.onHospitalFlagsReceived = function (e) {
    if (e.hospitalFlags.isCurrentCastle()) {
      this.waitingForHFL = false;
      this.hospitalFlags = e.hospitalFlags;
      this.hospitalDialog.btn_rubyFilter_active.visible = this.hospitalFlags.hasRubyFilter;
      this.hospitalDialog.btn_rubyFilter_inactive.visible = !this.hospitalFlags.hasRubyFilter;
      x.ButtonHelper.setButtonSelected(this.hospitalDialog.mc_rubyBlockOverlay.btn_checkbox, this.hospitalFlags.hasRubyFilter == 1);
    }
  };
  CastleRecruitDialogHospital.__initialize_static_members = function () {
    CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE = O.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE;
    CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE = O.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE;
    CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE_MEAD = O.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE_MEAD;
    CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE_MEAD = O.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE_MEAD;
    CastleRecruitDialogHospital.FILTER_SOLDIER_SPECIAL = O.ClientConstCastle.UNIT_TYPE_EVENTUNIT;
  };
  CastleRecruitDialogHospital.FILTER_SOLDIER_RUBY = "ruby";
  CastleRecruitDialogHospital.FILTER_SOLDIER_ALL = "allUnits";
  CastleRecruitDialogHospital.SHOP_ITEMS_PER_PAGE = 5;
  CastleRecruitDialogHospital.BASIC_HEALINGLIMIT = 5;
  return CastleRecruitDialogHospital;
}(B.CastleDialogSubLayer);
exports.CastleRecruitDialogHospital = k;
var U = require("./75.js");
var G = require("./1564.js");
var H = require("./80.js");
var j = require("./34.js");
var W = require("./9.js");
var Y = require("./458.js");
var K = require("./449.js");
var z = require("./2938.js");
var q = require("./2940.js");
var X = require("./2945.js");
var Q = require("./243.js");
var J = require("./20.js");
var Z = require("./282.js");
var $ = require("./2949.js");
var ee = require("./1570.js");
var te = require("./1572.js");
var ie = require("./33.js");
var ne = require("./49.js");
var oe = require("./1580.js");
var ae = require("./2967.js");
var se = require("./97.js");
c.classImplementsInterfaces(k, "ICollectableRendererList", "ISublayer");
k.__initialize_static_members();