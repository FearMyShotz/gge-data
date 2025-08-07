Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./49.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./1.js");
var d = require("./1.js");
var p = require("./1.js");
var h = require("./1.js");
var g = require("./1.js");
var C = require("./5.js");
var _ = require("./5.js");
var m = require("./5.js");
var f = require("./5.js");
var O = require("./5.js");
var E = require("./5.js");
var y = require("./3.js");
var b = require("./3.js");
var D = require("./3.js");
var I = require("./3.js");
var T = require("./6.js");
var v = require("./23.js");
var S = require("./23.js");
var A = require("./513.js");
var L = require("./18.js");
var P = require("./16.js");
var M = require("./58.js");
var R = require("./28.js");
var V = require("./760.js");
var x = require("./2949.js");
var w = require("./706.js");
var B = require("./622.js");
var F = require("./2950.js");
var N = require("./243.js");
var k = require("./21.js");
var U = require("./792.js");
var G = require("./129.js");
var H = require("./220.js");
var j = require("./32.js");
var W = require("./71.js");
var Y = require("./30.js");
var K = require("./85.js");
var z = require("./4.js");
var q = require("./1571.js");
var X = require("./97.js");
var Q = require("./35.js");
var J = require("./27.js");
var Z = require("./1563.js");
var $ = require("./8.js");
var ee = require("./34.js");
var te = require("./371.js");
var ie = require("./2951.js");
var ne = require("./120.js");
var oe = require("./1572.js");
var ae = require("./2952.js");
var se = require("./1573.js");
var re = createjs.Point;
var le = createjs.Container;
var ce = createjs.TimerEvent;
var ue = function (e) {
  function CastleRecruitDialogUnits(t) {
    var i = this;
    i._shopCurrentPage = 0;
    i.timeRemainingForUnitsRecruitment = 0;
    i.amountOfUnitsInQueue = 0;
    i.shopMaxPage = 0;
    i._unitProductionBoost = 0;
    i._festivalWasActive = false;
    i._isInTestGroup = false;
    i._useSkipButton = false;
    i._lastGetUnitInventoryRequest = 0;
    i.mcInfoTotalProductionTimeX = 0;
    i.mcInfoProductivityX = 0;
    i.xDiffBetFestivalAndProdIcons = 0;
    i._allianceHelpConfirmed = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).recruitDialog.btn_filter_melee.toolTipText = "melees";
    i.recruitDialog.btn_filter_range.toolTipText = "ranges";
    i.recruitDialog.btn_filter_mead_melee.toolTipText = "meleeMeadUnits";
    i.recruitDialog.btn_filter_mead_range.toolTipText = "rangedMeadUnits";
    i.recruitDialog.btn_filter_all.toolTipText = "allUnits";
    i.recruitDialog.infoFood.toolTipText = "foodproduction";
    i.recruitDialog.infoMead.toolTipText = "meadproduction";
    i.recruitDialog.infoBeef.toolTipText = "beefproduction";
    i.recruitDialog.btn_festival.toolTipText = "dialog_recruit_festival";
    i.recruitDialog.faction_auxiliaries_capacity.btn_faction_auxiliaries_increase_capacity.toolTipText = "dialog_factionRecruit_increaseCapacity_tooltip";
    i.recruitDialog.itemSelection.mc_unitTooltip.mouseChildren = false;
    i.recruitDialog.itemSelection.mc_unitTooltip.mouseEnabled = false;
    i._allianceHelpRequestBtnComponent = new Z.CastleAllianceHelpRequestButtonComponent(i.recruitDialog.btn_alliance_help_request);
    i.hideItemProgressInfo();
    i._buildListComponent = new Re.UnitProductionListComponent(i.recruitDialog.productionElements, Ee.BasicBuildListComponent.ALIGN_HORIZONTAL);
    i.unitRecruitmentControls = new Me.CastleRecruitSelectedUnitComponent(i.recruitDialog.unitRecruitmentControls);
    var n = new le();
    n.visible = false;
    n.tickEnabled = false;
    n.name = "buy_unit_list_mc_content";
    i.unitRecruitmentControls.disp.addChild(n);
    i.unitRecruitmentControls.disp.mc_content = n;
    i.i_totalUnitStack_txt_value = i.textFieldManager.registerTextField(i.recruitDialog.infoTotalUnitStack.txt_value, new b.LocalizedNumberVO(0));
    CastleRecruitDialogUnits.setIconInInfoArea(CastleRecruitDialogUnits.ICON_TOTAL_UNITS, i.recruitDialog.infoTotalUnitStack);
    i.recruitDialog.infoTotalUnitStack.visible = false;
    i.i_totalProductionTime_txt_value = i.textFieldManager.registerTextField(i.recruitDialog.infoTotalProductionTime.txt_value, new I.TextVO(""));
    CastleRecruitDialogUnits.setIconInInfoArea(CastleRecruitDialogUnits.ICON_TOTAL_PRODUCTION_TIME, i.recruitDialog.infoTotalProductionTime);
    i.recruitDialog.infoTotalProductionTime.visible = false;
    i.i_utool_txt_info = i.textFieldManager.registerTextField(i.recruitDialog.itemSelection.mc_unitTooltip.txt_info, new D.LocalizedTextVO(""));
    i.i_utool_txt_name = i.textFieldManager.registerTextField(i.recruitDialog.itemSelection.mc_unitTooltip.txt_name, new D.LocalizedTextVO(""));
    i.i_utool_txt_name.autoFitToBounds = true;
    i.i_utool_txt_food = i.textFieldManager.registerTextField(i.recruitDialog.itemSelection.mc_unitTooltip.txt_food, new I.TextVO(""));
    i.i_utool_txt_status = i.textFieldManager.registerTextField(i.recruitDialog.itemSelection.mc_unitTooltip.txt_status, new I.TextVO(""));
    i.i_utool_txt_time = i.textFieldManager.registerTextField(i.recruitDialog.itemSelection.mc_unitTooltip.txt_time, new I.TextVO(""));
    i.i_fest_txt_value = i.textFieldManager.registerTextField(i.recruitDialog.btn_festival.txt_value, new I.TextVO(""));
    i.i_txt_title = i.textFieldManager.registerTextField(i.recruitDialog.txt_title, new D.LocalizedTextVO("dialog_recuit_title"));
    i.i_tcount_txt_value = i.textFieldManager.registerTextField(i.recruitDialog.infoTroopCount.txt_value, new K.CastleLocalizedNumberVO(0, {
      compactThreshold: 1000000,
      compactFractionalDigits: 2
    }));
    i.recruitDialog.infoTroopCount.txt_value.mouseEnabled = false;
    i.i_ifood_txt_value = i.textFieldManager.registerTextField(i.recruitDialog.infoFood.txt_value, new b.LocalizedNumberVO(0));
    i.i_imead_txt_value = i.textFieldManager.registerTextField(i.recruitDialog.infoMead.txt_value, new b.LocalizedNumberVO(0));
    i.i_ibeef_txt_value = i.textFieldManager.registerTextField(i.recruitDialog.infoBeef.txt_value, new b.LocalizedNumberVO(0));
    i.recruitDialog.infoFood.txt_value.mouseEnabled = false;
    i.recruitDialog.infoMead.txt_value.mouseEnabled = false;
    i.recruitDialog.infoBeef.txt_value.mouseEnabled = false;
    i.i_iproductivity_txt_value = i.textFieldManager.registerTextField(i.recruitDialog.infoProductivity.txt_value, new D.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE, [0]));
    i.recruitDialog.infoProductivity.txt_value.mouseEnabled = false;
    i.i_uprogress_txt_progress = i.textFieldManager.registerTextField(i.recruitDialog.unitProgress.txt_progress, new I.TextVO(""));
    i.i_faction_auxiliaries_capacity = i.textFieldManager.registerTextField(i.recruitDialog.faction_auxiliaries_capacity.txt_value, new D.LocalizedTextVO(s.GenericTextIds.VALUE_PROPORTIONAL_VALUE, []));
    i.i_faction_auxiliaries_message = i.textFieldManager.registerTextField(i.recruitDialog.faction_auxiliaries_message.txt_value, new D.LocalizedTextVO("dialog_factionRecruit_explanation"));
    return i;
  }
  n.__extends(CastleRecruitDialogUnits, e);
  CastleRecruitDialogUnits.prototype.getSlotMCs = function () {
    var e = new Array();
    for (var t = 0; t < CastleRecruitDialogUnits.SHOP_ITEMS_PER_PAGE; t++) {
      e.push(this.recruitDialog.itemSelection["i" + t]);
    }
    return e;
  };
  CastleRecruitDialogUnits.prototype.initButtons = function () {
    var e = this.getSlotMCs();
    e.push(this.recruitDialog.btn_boost);
    e.push(this.recruitDialog.btn_alliance_help_request);
    e.push(this.recruitDialog.btn_festival);
    e.push(this.recruitDialog.btn_cancelRecruitment);
    e.push(this.recruitDialog.faction_auxiliaries_capacity.btn_faction_auxiliaries_increase_capacity);
    e.push(this.recruitDialog.itemSelection.btn_leftArrow);
    e.push(this.recruitDialog.itemSelection.btn_rightArrow);
    e.push(this.recruitDialog.btnProductionMode);
    this.updateRecruitmentMode(1);
    e.push(this.recruitDialog.btn_copy_production);
    this.initBasicButtons(e);
    this.recruitDialog.btn_copy_production.visible = false;
  };
  CastleRecruitDialogUnits.prototype.updateCopyButtonTooltip = function () {
    this.recruitDialog.btn_copy_production.toolTipText = this.isSoldiersCategory() ? "dialog_recruit_units_copy_tooltip" : "dialog_recruit_tools_copy_tooltip";
  };
  Object.defineProperty(CastleRecruitDialogUnits.prototype, "recruitDialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialogUnits.prototype.show = function (t) {
    this._currentUnitCategory = "";
    this._isInTestGroup = A.ClientConstABTests.takesPartInSkipRecruitingTest;
    this.controller.addEventListener(j.CastleUserDataEvent.ATTACKPROTECTION_UPDATED, this.bindFunction(this.onAttackProtectionUpdated));
    this.controller.addEventListener(W.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onCastleDataUpdated));
    this.controller.addEventListener(W.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onResourcesUpdate));
    this.controller.addEventListener(G.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
    this.controller.addEventListener(G.CastleMilitaryDataEvent.UNIT_UPDATED, this.bindFunction(this.onUnitUpdated));
    this.controller.addEventListener(G.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    z.CastleModel.timerData.addEventListener(k.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerSecondIntervalTick));
    this.controller.addEventListener(W.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onAttackProtectionUpdated));
    this.controller.addEventListener(N.CastleEilandEvent.NEW_EILAND_TITLE, this.bindFunction(this.onNewTitle));
    this._buildListComponent.addEventListener(U.BasicBuildListEvent.SELECTED_ITEM, this.bindFunction(this.onSelectBuildlistItem));
    z.CastleModel.boostData.addEventListener(H.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataRefreshed));
    this.controller.addEventListener(j.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onResourcesUpdate));
    this.controller.addEventListener(j.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED, this.bindFunction(this.onDowntimeStatusUpdated));
    this.recruitDialog.itemSelection.mc_unitTooltip.visible = false;
    var i = t.shift();
    var n = t.shift();
    this.initButtons();
    if (i == "") {
      this.changeCategory(z.CastleModel.militaryData.getFirstAvalibleUnitCategory());
    } else {
      this.changeCategory(i);
    }
    if (n) {
      if (this._currentUnitCategory == L.ClientConstCastle.UNIT_CATEGORY_TOOLS && CastleRecruitDialogUnits.lastToolFilterSelected != n) {
        CastleRecruitDialogUnits.lastToolFilterSelected = n;
        this.changeCurrentFilter(CastleRecruitDialogUnits.lastToolFilterSelected);
      } else if (this._currentUnitCategory != L.ClientConstCastle.UNIT_CATEGORY_TOOLS && CastleRecruitDialogUnits.lastUnitFilterSelected != n) {
        CastleRecruitDialogUnits.lastUnitFilterSelected = n;
        this.changeCurrentFilter(CastleRecruitDialogUnits.lastUnitFilterSelected);
      }
    }
    e.prototype.show.call(this, t);
    this.updateCopyButtonTooltip();
    this.refreshInventory();
    this.onCastleDataUpdated(null);
    this.onPackageListUpdated(null);
    this.onInventoryUpdated(null);
    this._buildListComponent.selectedSlot = 0;
    this.checkFestivalBoost();
    this.setUnitSelectorVisible(true);
    this.onTimerSecondIntervalTick();
  };
  CastleRecruitDialogUnits.prototype.onUnitUpdated = function (e) {
    if (this.packageList) {
      z.CastleModel.smartfoxClient.sendCommandVO(new B.C2SShowPackageListVO(this.packageList.listId));
    }
  };
  CastleRecruitDialogUnits.prototype.checkFestivalBoost = function () {
    if (z.CastleModel.boostData.festivalVO.isActive) {
      this.requestBoostUpdate(z.CastleModel.boostData.festivalVO.remainingTimeInSeconds);
    }
  };
  CastleRecruitDialogUnits.prototype.requestBoostUpdate = function (e) {
    if (this._boostValueUpdateTimer == null) {
      this._boostValueUpdateTimer = new u.Timer(e * 1000, 1);
    }
    this._boostValueUpdateTimer.delay = e * 1000;
    this._boostValueUpdateTimer.addEventListener(ce.TIMER_COMPLETE, this.bindFunction(this.onBoostUpdate));
    this._boostValueUpdateTimer.start();
  };
  CastleRecruitDialogUnits.prototype.onBoostUpdate = function (e) {
    z.CastleModel.boostData.addEventListener(H.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataRefreshed));
    z.CastleModel.smartfoxClient.sendCommandVO(new V.C2SBoosterInfoVO());
  };
  CastleRecruitDialogUnits.prototype.onBoosterDataRefreshed = function (e) {
    var t = this._unitProductionBoost;
    this._unitProductionBoost = Math.round(z.CastleModel.militaryData.getBuildingProductionSpeed(this.getBuildingTypeByUnitUnitType(this._currentFilter)));
    if (z.CastleModel.boostData.festivalVO.isActive && t == this._unitProductionBoost) {
      this.requestBoostUpdate(z.CastleModel.boostData.festivalVO.remainingTimeInSeconds + 5);
    }
    this.unitRecruitmentControls.refresh();
    this.fillInfoTextFields();
  };
  CastleRecruitDialogUnits.prototype.onDowntimeStatusUpdated = function (e) {
    this.fillInfoTextFields();
  };
  CastleRecruitDialogUnits.prototype.hide = function () {
    if (this._buildListComponent.selectedSlot > 0) {
      this._buildListComponent.selectedSlot = 0;
    }
    this._buildListComponent.clearItems();
    this.controller.removeEventListener(W.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onCastleDataUpdated));
    this.controller.removeEventListener(j.CastleUserDataEvent.ATTACKPROTECTION_UPDATED, this.bindFunction(this.onAttackProtectionUpdated));
    this.controller.removeEventListener(G.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
    this.controller.removeEventListener(G.CastleMilitaryDataEvent.UNIT_UPDATED, this.bindFunction(this.onUnitUpdated));
    this.controller.removeEventListener(G.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    this.controller.removeEventListener(W.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onResourcesUpdate));
    z.CastleModel.timerData.removeEventListener(k.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerSecondIntervalTick));
    this.controller.removeEventListener(W.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onAttackProtectionUpdated));
    this._buildListComponent.removeEventListener(U.BasicBuildListEvent.SELECTED_ITEM, this.bindFunction(this.onSelectBuildlistItem));
    this.controller.removeEventListener(N.CastleEilandEvent.NEW_EILAND_TITLE, this.bindFunction(this.onNewTitle));
    this.controller.removeEventListener(j.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onResourcesUpdate));
    this.controller.removeEventListener(j.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED, this.bindFunction(this.onDowntimeStatusUpdated));
    z.CastleModel.boostData.removeEventListener(H.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataRefreshed));
    this.disposeBoostValueUpdateTimer();
    this.unitRecruitmentControls.dispose();
    e.prototype.hide.call(this);
  };
  CastleRecruitDialogUnits.prototype.disposeBoostValueUpdateTimer = function () {
    if (this._boostValueUpdateTimer) {
      this._boostValueUpdateTimer.removeEventListener(ce.TIMER_COMPLETE, this.bindFunction(this.onBoostUpdate));
      this._boostValueUpdateTimer.stop();
      this._boostValueUpdateTimer = null;
    }
  };
  CastleRecruitDialogUnits.prototype.showHelp = function () {
    if (this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_MELEE || this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_RANGE || this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_MELEE_MEAD || this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_RANGE_MEAD || this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_ALL) {
      Oe.CastleDialogHandler.getInstance().showHelper(this.recruitDialog.txt_title.text, y.Localize.text(z.CastleModel.areaData.activeArea.isFactionCamp ? "help_factionRecruit" : "help_recruit_units_automatic"));
    } else if (this._currentFilter == CastleRecruitDialogUnits.FILTER_TOOLS_ATTACK || this._currentFilter == CastleRecruitDialogUnits.FILTER_TOOLS_DEFENCE) {
      Oe.CastleDialogHandler.getInstance().showHelper(this.recruitDialog.txt_title.text, y.Localize.text("help_recuit_tools_automatic"));
    }
  };
  CastleRecruitDialogUnits.prototype.onNewTitle = function (e) {
    this.refreshInventory();
  };
  CastleRecruitDialogUnits.prototype.fillShopItemsByGroup = function (e) {
    var t;
    if (e === undefined) {
      e = true;
    }
    var i = this.getFilteredArray();
    this.initShopArrows(i.length);
    this.shopCurrentPage = T.int(Math.min(this.shopCurrentPage, this.shopMaxPage));
    var n = this.shopCurrentPage * CastleRecruitDialogUnits.SHOP_ITEMS_PER_PAGE;
    this.currentShownUnits = [];
    var o;
    for (var a = 0; a < CastleRecruitDialogUnits.SHOP_ITEMS_PER_PAGE; a++) {
      var l = this.recruitDialog.itemSelection["i" + a];
      var c = this.recruitDialog.itemSelection["btn_info" + a];
      $.ButtonHelper.initBasicButton(c);
      $.ButtonHelper.enableButton(c, !z.CastleModel.tutorialData.isTutorialActive);
      if (n < i.length) {
        l.toolTipText = null;
        l.mc_contentHolder.mouseChildren = false;
        t = i[n];
        c.visible = true;
        c.unitVO = t;
        l.unitVO = t;
        De.WodPicHelper.setCorrectUnitBackgroundPic(t, l.mc_bg, Library.CastleInterfaceElements.castleRecruitUnitBackground, Library.CastleInterfaceElements.castleRecruitUnitBackground_Berimond);
        De.WodPicHelper.addUnitPic(t, l.mc_contentHolder.mc_content, CastleRecruitDialogUnits.SHOP_MAX_ITEM_WIDTH, CastleRecruitDialogUnits.SHOP_MAX_ITEM_HEIGHT, z.CastleModel.userData.playerCrest.colorsTwo[0], z.CastleModel.userData.playerCrest.colorsTwo[1], 26, new re(12, 14), true, true, true, null, l.mc_level);
        var u = T.int(z.CastleModel.militaryData.unitInventory.getUnitCountByWodId(t.wodId));
        var p = this.textFieldManager.registerTextField(l.mc_contentHolder.infoAmount.txt_value, new K.CastleLocalizedNumberVO(u, {
          compactThreshold: 10000,
          compactFractionalDigits: 0
        }, 0), new r.InternalGGSTextFieldConfigVO(true));
        this.textFieldManager.registerTextField(l.mc_contentHolder.infoAmount_mead.txt_value, new K.CastleLocalizedNumberVO(u, {
          compactThreshold: 10000,
          compactFractionalDigits: 0
        }, 0), new r.InternalGGSTextFieldConfigVO(true));
        p.autoFitToBounds = true;
        p.textContentVO.compose();
        l.mc_contentHolder.infoAmount.visible = u > 0 && t.level <= 0;
        l.mc_contentHolder.infoAmount_mead.visible = u > 0 && t.level > 0;
        l.iconLock.visible = false;
        l.iconNA.visible = false;
        if (!t.isAvailableByLevel) {
          l.iconLock.visible = true;
          l.toolTipText = t.getRequiredBuildingString();
        }
        this.fillPriceInfo(t, l);
        if (!l.iconLock.visible) {
          this.checkPeaceModeProductionSlowDown(t, l);
          this.checkPalaceDamageLock(t, l);
          this.checkFameUnlocked(t, l);
          this.checkNoFreeSlots(t, l);
          if (!this.unitAvailableByTutorialLevel(t)) {
            l.iconNA.visible = true;
            l.iconNA.alpha = 0.7;
            this.textFieldManager.registerTextField(l.iconNA.txt_text, new D.LocalizedTextVO("panel_shop_needQuestProgress"), new r.InternalGGSTextFieldConfigVO(true));
          }
        }
        var h = d.castAs(z.CastleModel.specialEventData.getActiveEventByEventId(m.EventConst.EVENTTYPE_UNIT_PRIME_SALE), "UnitPrimeSaleEventVO");
        l.mc_discount.visible = false;
        if (h && h.wodIDHasDiscount(t.wodId) && t.isAvailableByLevel) {
          l.mc_discount.visible = true;
          this.textFieldManager.registerTextField(l.mc_discount.txt_value, new D.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE, [-h.discount]));
        }
        l.visible = true;
        this.currentShownUnits.push(t);
      } else {
        l.visible = false;
        c.visible = false;
      }
      if (this.lastBasicUnitVOSelected && t && this.lastBasicUnitVOSelected.wodId == t.wodId) {
        a;
        o = t;
      }
      n++;
    }
    this.updateShopSlotLocks();
    if (o && o.isAvailable && this.unitRecruitmentControls.needsUpdate) {
      this.openSelectUnitDialog(o, e);
    } else {
      this.setUnitSelectorVisible(false);
      this.unitRecruitmentControls.hide();
    }
  };
  CastleRecruitDialogUnits.prototype.updateShopItemsInfo = function () {
    var e = this.getFilteredArray();
    var t = this.shopCurrentPage * CastleRecruitDialogUnits.SHOP_ITEMS_PER_PAGE;
    this.currentShownUnits = [];
    for (var i = 0; i < CastleRecruitDialogUnits.SHOP_ITEMS_PER_PAGE; i++) {
      var n = this.recruitDialog.itemSelection["i" + i];
      if (t < e.length) {
        var o = e[t];
        n.iconNA.visible = false;
        if (!n.iconLock.visible) {
          this.checkPeaceModeProductionSlowDown(o, n);
          this.checkPalaceDamageLock(o, n);
          this.checkFameUnlocked(o, n);
          this.checkNoFreeSlots(o, n);
          if (!this.unitAvailableByTutorialLevel(o)) {
            n.iconNA.visible = true;
            n.iconNA.alpha = 0.7;
            this.textFieldManager.registerTextField(n.iconNA.txt_text, new D.LocalizedTextVO("panel_shop_needQuestProgress"), new r.InternalGGSTextFieldConfigVO(true));
          }
        }
      }
      t++;
    }
  };
  CastleRecruitDialogUnits.prototype.checkNoFreeSlots = function (e, t) {
    if (this._buildListComponent && this._buildListComponent.isUnitPackageListLoaded() && this._buildListComponent.freeSlots <= 0 && e.getRecruitmentTime(1) > 0) {
      t.iconNA.visible = true;
      t.iconNA.alpha = 0.7;
      var i = this.isSoldiersCategory() ? "dialog_recruit_noFreeSlot_overlay" : "dialog_recruit_production_noFreeSlot_overlay";
      this.textFieldManager.registerTextField(t.iconNA.txt_text, new D.LocalizedTextVO(i), new r.InternalGGSTextFieldConfigVO(true));
    }
  };
  CastleRecruitDialogUnits.prototype.selectUnitInStorePage = function (e) {
    var t = 0;
    for (var i = 0; i < CastleRecruitDialogUnits.SHOP_ITEMS_PER_PAGE; i++) {
      var n = this.recruitDialog.itemSelection["i" + i];
      if (n.unitVO && n.unitVO.wodId == e.wodId) {
        t = i;
        break;
      }
    }
    this.recruitDialog.itemSelection.unitSelector.x = this.recruitDialog.itemSelection["i" + t].x;
    this.setUnitSelectorVisible(true);
  };
  CastleRecruitDialogUnits.prototype.setUnitSelectorVisible = function (e) {
    this.recruitDialog.itemSelection.unitSelector.visible = e;
  };
  CastleRecruitDialogUnits.prototype.updateShopSlotLocks = function () {
    for (var e = 0; e < CastleRecruitDialogUnits.SHOP_ITEMS_PER_PAGE; e++) {
      var t = this.recruitDialog.itemSelection["i" + e];
      t.iconLock.visible = !t.unitVO || !t.unitVO.isAvailableByLevel;
    }
  };
  CastleRecruitDialogUnits.prototype.showItemProgressInfo = function () {
    var e = this._buildListComponent.productionItem.unitPackageSlotVO;
    this.recruitDialog.unitProgress.visible = true;
    this.recruitDialog.progressBarBgr.visible = true;
    this.recruitDialog.unitProgress.progressBarStatus.scaleX = 1 - e.unitReadyInPercent;
    var t = c.TimeStringHelper.getTimeToString(e.remainingTimeInSeconds, c.TimeStringHelper.TWO_TIME_FORMAT, y.Localize.text);
    this.i_uprogress_txt_progress.textContentVO.stringValue = t;
  };
  CastleRecruitDialogUnits.prototype.showItemButtons = function () {
    var e = this._buildListComponent.selectedItem.unitPackageSlotVO;
    if (g.instanceOfClass(e.unitVO, "SoldierUnitVO") && z.CastleModel.areaData.activeArea && !z.CastleModel.areaData.activeArea.isFactionCamp) {
      var t = T.int(C.AllianceConst.ALLIANCE_HELP_RECRUITMENT_LIST);
      var i = T.int(this.packageList.listId);
      var n = new q.AllianceHelpRequestRecruitParamsVO(i, z.CastleModel.areaData.activeArea.areaId, z.CastleModel.areaData.activeArea.spaceId, this.packageList.listId);
      this._allianceHelpRequestBtnComponent.setParams(t, n, this._allianceHelpConfirmed, this.amountOfUnitsInQueue);
      this._allianceHelpRequestBtnComponent.show();
    } else {
      this._allianceHelpRequestBtnComponent.hide();
    }
    this.recruitDialog.btn_cancelRecruitment.visible = z.CastleModel.userData.userLevel >= M.ClientConstLevelRestrictions.MIN_LEVEL_RECRUITMENT_ABORT;
  };
  CastleRecruitDialogUnits.prototype.updateBoostBtn = function () {
    var e = d.castAs(this._buildListComponent.selectedItem, "UnitBuildListItem");
    if (e && e.unitPackageSlotVO && e.unitPackageSlotVO.unitVO) {
      this.recruitDialog.btn_boost.visible = true;
      var t = e.unitPackageSlotVO;
      var i = t.unitVO;
      var n = t.numOfBoost;
      if (this.isOutOfTutorial()) {
        if (g.instanceOfClass(i, "SoldierUnitVO")) {
          this.setSoldierBoostBtn(n, i, t.amount);
        } else {
          this.setToolBoostBtn(n, i, t.amount);
        }
      } else {
        $.ButtonHelper.enableButton(this.recruitDialog.btn_boost, false);
        this.recruitDialog.btn_boost.toolTipText = {
          t: "expansion_higherLevelNeeded",
          p: [M.ClientConstLevelRestrictions.MIN_LEVEL_TROOP_BOOST_BUTTON_AVAILABLE]
        };
      }
    }
  };
  CastleRecruitDialogUnits.prototype.getDoubledUnitAmount = function (e) {
    return T.int(e * 2);
  };
  CastleRecruitDialogUnits.prototype.setSoldierBoostBtn = function (e, t, i) {
    if (this._useSkipButton) {
      $.ButtonHelper.delayEnableButton(this.recruitDialog.btn_boost, true, o.BasicButton.DEFAULT_DELAY_TIME);
      this.updateSkipTooltip(t, i);
    } else if (e < E.UnitProductionConst.MAX_UNIT_BOOST_AMOUNT) {
      var n = this.getDoubledUnitAmount(i);
      var a = T.int(this.getUnitDoublingCosts(t, e, i));
      $.ButtonHelper.delayEnableButton(this.recruitDialog.btn_boost, true, o.BasicButton.DEFAULT_DELAY_TIME);
      this.recruitDialog.btn_boost.toolTipText = new D.LocalizedTextVO("dialog_paymentdoubler_unitAmount_copy", [n, new I.TextVO(y.Localize.number(a, false))]);
    } else {
      $.ButtonHelper.enableButton(this.recruitDialog.btn_boost, false);
      this.recruitDialog.btn_boost.toolTipText = "dialog_recuit_btn_dopplerUsed_units_max";
    }
  };
  CastleRecruitDialogUnits.prototype.setToolBoostBtn = function (e, t, i) {
    if (this._useSkipButton) {
      $.ButtonHelper.delayEnableButton(this.recruitDialog.btn_boost, true, o.BasicButton.DEFAULT_DELAY_TIME);
      this.updateSkipTooltip(t, i);
    } else if (e < E.UnitProductionConst.MAX_TOOL_BOOST_AMOUNT) {
      var n = [T.int(this.getUnitDoublingCosts(t, e, i))];
      $.ButtonHelper.delayEnableButton(this.recruitDialog.btn_boost, true, o.BasicButton.DEFAULT_DELAY_TIME);
      this.recruitDialog.btn_boost.toolTipText = {
        t: "dialog_recuit_btn_doppler_tools",
        p: n
      };
    } else {
      $.ButtonHelper.enableButton(this.recruitDialog.btn_boost, false);
      this.recruitDialog.btn_boost.toolTipText = "dialog_recuit_btn_dopplerUsed_tools_max";
    }
  };
  CastleRecruitDialogUnits.prototype.getUnitDoublingCosts = function (e, t, i) {
    return T.int(z.CastleModel.costsData.getFinalCostsC2(e.cleavageOfCellsCosts[t] * i));
  };
  CastleRecruitDialogUnits.prototype.updateSkipTooltip = function (e, t) {
    var i = this._buildListComponent.selectedItem.slotVO;
    var n = T.int(z.CastleModel.userData.isInPeaceMode && !e.isAvailableInPeaceMode && e.isAvailable ? E.UnitProductionConst.PEACE_MODE_SLOWDOWN : 1);
    var o = Math.min(1, i.remainingTimeInSeconds / (i.productionTime * n));
    var a = e.skipCost * t;
    a = _.ConstructionConst.getSkipCostForUnits(a, o);
    this.recruitDialog.btn_boost.toolTipText = {
      t: "dialog_unitRecruitment_skip_copy",
      p: [a]
    };
  };
  CastleRecruitDialogUnits.prototype.hideItemProgressInfo = function () {
    if (this.recruitDialog.unitProgress.visible) {
      this.recruitDialog.unitProgress.visible = false;
      this.recruitDialog.progressBarBgr.visible = false;
    }
  };
  CastleRecruitDialogUnits.prototype.hideItemButtons = function () {
    this._allianceHelpRequestBtnComponent.hide();
    this.recruitDialog.btn_boost.visible = false;
    this.recruitDialog.btn_cancelRecruitment.visible = false;
  };
  CastleRecruitDialogUnits.prototype.initUnitTooltip = function (e, t) {
    this.recruitDialog.itemSelection.mc_unitTooltip.x = t.x;
    this.i_utool_txt_info.textContentVO.textId = e.getShortInfoString();
    this.i_utool_txt_name.textContentVO.textId = e.getNameString();
    if (e.foodSupply > 0 || e.meadSupply > 0 || e.beefSupply > 0) {
      this.i_utool_txt_food.textContentVO.stringValue = String(Math.max(e.meadSupply, e.foodSupply, e.beefSupply));
      this.recruitDialog.itemSelection.mc_unitTooltip.mc_ressi.mc_mead.visible = e.meadSupply > 0;
      this.recruitDialog.itemSelection.mc_unitTooltip.mc_ressi.mc_beef.visible = e.beefSupply > 0;
      this.recruitDialog.itemSelection.mc_unitTooltip.mc_ressi.mc_food.visible = e.foodSupply > 0;
    } else {
      this.recruitDialog.itemSelection.mc_unitTooltip.mc_ressi.mc_mead.visible = false;
      this.recruitDialog.itemSelection.mc_unitTooltip.mc_ressi.mc_beef.visible = false;
      this.i_utool_txt_food.textContentVO.stringValue = "-";
    }
    var i = e.getBoostedRecruitmentTime();
    i -= T.int(z.CastleModel.researchData.getAbsoluteProductionBoost(e, i, 1, z.CastleModel.areaData.activeAreaInfo));
    this.i_utool_txt_time.textContentVO.stringValue = c.TimeStringHelper.getShortTimeStringBySeconds(i);
    if (z.CastleModel.userData.isInPeaceMode && !e.isAvailableInPeaceMode && e.isAvailable && e.costC2 <= 0) {
      this.i_utool_txt_time.color = P.ClientConstColor.GENERIC_RED;
    } else {
      this.i_utool_txt_time.color = P.ClientConstColor.GENERIC_BLACK;
    }
    if (e.isAuxiliary) {
      this.recruitDialog.itemSelection.mc_unitTooltip.mc_ressi.visible = false;
      this.i_utool_txt_status.textContentVO.stringValue = y.Localize.text("auxiliaries");
      this.i_utool_txt_food.textContentVO.stringValue = "";
      this.i_utool_txt_time.textContentVO.stringValue = "";
    } else {
      this.recruitDialog.itemSelection.mc_unitTooltip.mc_ressi.visible = true;
      this.i_utool_txt_status.textContentVO.stringValue = "";
    }
    this.recruitDialog.itemSelection.mc_unitTooltip.visible = true;
    S.TweenMax.fromTo(this.recruitDialog.itemSelection.mc_unitTooltip, 0.2, {
      y: t.y - 20
    }, {
      y: t.y - 40,
      ease: v.Linear.easeIn
    });
    S.TweenMax.fromTo(this.recruitDialog.itemSelection.mc_unitTooltip, 0.2, {
      alpha: 0
    }, {
      alpha: 1,
      ease: v.Linear.easeIn
    });
  };
  CastleRecruitDialogUnits.prototype.updateFestivalIcon = function () {
    $.ButtonHelper.enableButton(this.recruitDialog.btn_festival, this.isOutOfTutorial() && z.CastleModel.userData.userLevel >= CastleRecruitDialogUnits.MIN_LEVEL_FOR_FESTIVALBUTTON);
    this.recruitDialog.btn_festival.visible = this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_ALL || this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_MELEE || this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_RANGE || this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_MELEE_MEAD || this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_RANGE_MEAD;
    if (z.CastleModel.boostData.festivalVO.isActive) {
      this.recruitDialog.btn_festival.gotoAndStop(1);
      this.i_fest_txt_value = this.textFieldManager.registerTextField(this.recruitDialog.btn_festival.txt_value, new I.TextVO(c.TimeStringHelper.getShortTimeStringBySeconds(z.CastleModel.boostData.festivalVO.remainingTimeInSeconds)), new r.InternalGGSTextFieldConfigVO(true));
    } else {
      this.recruitDialog.btn_festival.gotoAndStop(2);
    }
    this.recruitDialog.btn_festival.mc_button_sizer.mouseEnabled = false;
    if (z.CastleModel.areaData.activeArea.isFactionCamp) {
      this.recruitDialog.infoTroopCount.visible = false;
      this.recruitDialog.infoFood.visible = false;
      this.recruitDialog.infoMead.visible = false;
      this.recruitDialog.infoBeef.visible = false;
      this.recruitDialog.infoProductivity.x = this.recruitDialog.infoMead.x;
    }
    var e = z.CastleModel.areaData.activeArea && z.CastleModel.areaData.activeArea.isFactionCamp ? -10 : -18.75;
    this.recruitDialog.btn_festival.x = this.recruitDialog.infoProductivity.x - this.recruitDialog.infoProductivity.width * 0.5 - this.recruitDialog.btn_festival.mc_button_sizer.width * 0.5 + e;
  };
  CastleRecruitDialogUnits.prototype.setCategory = function (e) {
    this._currentUnitCategory = e;
    this.recruitDialog.infoTotalUnitStack.visible = false;
    this.recruitDialog.infoTotalProductionTime.visible = false;
    this.refreshPackageList();
    this.initFilterButtons();
    this.fillInfoTextFields();
    this._buildListComponent.setCategory(this._currentUnitCategory);
    switch (this._currentUnitCategory) {
      case L.ClientConstCastle.UNIT_CATEGORY_SOLDIERS:
      case L.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES:
        if (CastleRecruitDialogUnits.lastUnitFilterSelected) {
          this.changeCurrentFilter(CastleRecruitDialogUnits.lastUnitFilterSelected);
        } else {
          this.changeCurrentFilter(CastleRecruitDialogUnits.FILTER_UNITS_ALL);
        }
        this.i_txt_title.textContentVO.textId = this._currentUnitCategory == L.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES ? "hire" : "dialog_recuit_title";
        this.recruitDialog.infoProductivity.toolTipText = z.CastleModel.areaData.activeArea.isFactionCamp ? "dialog_factionRecruit_hireSpeed_tooltip" : "dialog_recuit_recruitSpeed";
        this.recruitDialog.infoTroopCount.toolTipText = "dialog_recuit_unitsAvialable";
        CastleRecruitDialogUnits.setIconInInfoArea(CastleRecruitDialogUnits.ICON_UNITS, this.recruitDialog.infoTroopCount);
        this.recruitDialog.infoTotalUnitStack.toolTipText = "dialog_recruit_recruitAmountCounter_tooltip";
        CastleRecruitDialogUnits.setIconInInfoArea(CastleRecruitDialogUnits.ICON_TOTAL_UNITS, this.recruitDialog.infoTotalUnitStack);
        break;
      case L.ClientConstCastle.UNIT_CATEGORY_TOOLS:
        if (CastleRecruitDialogUnits.lastToolFilterSelected) {
          this.changeCurrentFilter(CastleRecruitDialogUnits.lastToolFilterSelected);
        } else if (z.CastleModel.militaryData.isBuildingCategoryAllowed(L.ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP)) {
          this.changeCurrentFilter(CastleRecruitDialogUnits.FILTER_TOOLS_ATTACK);
        } else {
          this.changeCurrentFilter(CastleRecruitDialogUnits.FILTER_TOOLS_DEFENCE);
        }
        this.i_txt_title.textContentVO.textId = "produce";
        this.recruitDialog.infoProductivity.toolTipText = "dialog_recuit_prodspeed";
        this.recruitDialog.infoTroopCount.toolTipText = "dialog_recuit_toolsavailable";
        CastleRecruitDialogUnits.setIconInInfoArea(CastleRecruitDialogUnits.ICON_TOOLS, this.recruitDialog.infoTroopCount);
        this.recruitDialog.infoTotalUnitStack.toolTipText = "dialog_recruit_productionAmountCounter_tooltip";
        CastleRecruitDialogUnits.setIconInInfoArea(CastleRecruitDialogUnits.ICON_TOTAL_TOOLS, this.recruitDialog.infoTotalUnitStack);
    }
    CastleRecruitDialogUnits.setIconInInfoArea(CastleRecruitDialogUnits.ICON_PRODUCTIVITY, this.recruitDialog.infoProductivity);
  };
  CastleRecruitDialogUnits.prototype.changeCategory = function (e) {
    if (e != this._currentUnitCategory) {
      this.setCategory(e);
    }
  };
  CastleRecruitDialogUnits.prototype.changeCurrentFilter = function (e, t = -1, i = false) {
    if (e != this._currentFilter || i) {
      this._currentFilter = e;
      if (this._currentUnitCategory == L.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
        CastleRecruitDialogUnits.lastToolFilterSelected = this._currentFilter;
        this.lastBasicUnitVOSelected = CastleRecruitDialogUnits.lastToolSelected;
      } else {
        CastleRecruitDialogUnits.lastUnitFilterSelected = this._currentFilter;
        this.lastBasicUnitVOSelected = CastleRecruitDialogUnits.lastUnitSelected;
      }
      this._useSkipButton = this._isInTestGroup && this.isUnitProduction();
      this.shopCurrentPage = T.int(t >= 0 ? t : this.setBestUnitToSelectAndGetPage());
      this.initFilterButtons();
      this.fillInfoTextFields();
      this.fillShopItemsByGroup();
      this.updateBoostbutton();
    }
  };
  CastleRecruitDialogUnits.prototype.forceToManualSelection = function () {
    this.changeCurrentFilter(this._currentFilter, 0, true);
    this.unitRecruitmentControls.hide();
    this.setUnitSelectorVisible(false);
  };
  CastleRecruitDialogUnits.prototype.setBestUnitToSelectAndGetPage = function () {
    var e;
    var t;
    var i = this.getFilteredArray();
    var n = T.int(i.length);
    if (this.currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_ALL || this._currentUnitCategory == L.ClientConstCastle.UNIT_CATEGORY_TOOLS && !this.lastBasicUnitVOSelected) {
      this.lastBasicUnitVOSelected = i[0];
      return 0;
    }
    var o = 0;
    var a = 0;
    var s = 0;
    for (var r = 0; r < n; r++) {
      e = i[r];
      e = i[r];
      if (this.lastBasicUnitVOSelected && e.wodId == this.lastBasicUnitVOSelected.wodId) {
        return r / CastleRecruitDialogUnits.SHOP_ITEMS_PER_PAGE;
      }
      if (this._currentUnitCategory != L.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
        var l = e;
        if (o < (s = T.int(this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_RANGE ? l.rangeAttack : l.meleeAttack)) && l.isAvailable) {
          t = e;
          o = s;
          a = T.int(r / CastleRecruitDialogUnits.SHOP_ITEMS_PER_PAGE);
        }
      }
    }
    if (this._currentUnitCategory == L.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      this.lastBasicUnitVOSelected = i[0];
      return 0;
    } else {
      this.lastBasicUnitVOSelected = t;
      return T.int(a);
    }
  };
  CastleRecruitDialogUnits.prototype.updateBoostbutton = function () {
    this.recruitDialog.btn_boost.gotoAndStop(this._useSkipButton ? 2 : 1);
  };
  CastleRecruitDialogUnits.prototype.isUnitProduction = function () {
    return this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_MELEE || this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_RANGE || this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_ALL;
  };
  CastleRecruitDialogUnits.prototype.initFilterButtons = function () {
    $.ButtonHelper.initButtons([this.recruitDialog.btn_filter_melee, this.recruitDialog.btn_filter_range, this.recruitDialog.btn_filter_mead_melee, this.recruitDialog.btn_filter_mead_range, this.recruitDialog.btn_filter_all, this.recruitDialog.btn_filter_attacktools, this.recruitDialog.btn_filter_defencetools, this.recruitDialog.btn_filter_stronghold, this.recruitDialog.btn_filter_eventUnits, this.recruitDialog.btn_filter_berimond_auxiliaries], a.TwoStateIconZoomButton);
    var e = _e.Iso.data.objects.provider.getObjectByType(Ce.IsoObjectEnum.BARRACKS);
    $.ButtonHelper.enableButton(this.recruitDialog.btn_filter_melee, true);
    $.ButtonHelper.enableButton(this.recruitDialog.btn_filter_range, true);
    $.ButtonHelper.enableButton(this.recruitDialog.btn_filter_mead_melee, true);
    $.ButtonHelper.enableButton(this.recruitDialog.btn_filter_mead_range, true);
    var t = z.CastleModel.areaData.activeArea.isFactionCamp;
    this.recruitDialog.btn_filter_melee.visible = this.isSoldiersCategory() && !t;
    this.recruitDialog.btn_filter_range.visible = this.isSoldiersCategory() && !t;
    this.recruitDialog.btn_filter_mead_melee.visible = this.isSoldiersCategory() && !t && e && e.level >= 14;
    this.recruitDialog.btn_filter_mead_range.visible = this.isSoldiersCategory() && !t && e && e.level >= 14;
    this.recruitDialog.btn_filter_all.visible = this.isSoldiersCategory() && !t;
    this.recruitDialog.btn_filter_attacktools.visible = this.isToolCategory && !t;
    this.recruitDialog.btn_filter_defencetools.visible = this.isToolCategory && !t;
    var i = z.CastleModel.militaryData.isBuildingCategoryAllowed(L.ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP);
    var n = z.CastleModel.militaryData.isBuildingCategoryAllowed(L.ClientConstCastle.UNIT_BUILDINGTYPE_DWORKSHOP);
    $.ButtonHelper.enableButton(this.recruitDialog.btn_filter_attacktools, i);
    $.ButtonHelper.enableButton(this.recruitDialog.btn_filter_defencetools, n);
    $.ButtonHelper.setButtonSelected(this.recruitDialog.btn_filter_melee, this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_MELEE);
    $.ButtonHelper.setButtonSelected(this.recruitDialog.btn_filter_range, this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_RANGE);
    $.ButtonHelper.setButtonSelected(this.recruitDialog.btn_filter_mead_melee, this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_MELEE_MEAD);
    $.ButtonHelper.setButtonSelected(this.recruitDialog.btn_filter_mead_range, this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_RANGE_MEAD);
    $.ButtonHelper.setButtonSelected(this.recruitDialog.btn_filter_all, this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_ALL);
    $.ButtonHelper.setButtonSelected(this.recruitDialog.btn_filter_attacktools, this._currentFilter == CastleRecruitDialogUnits.FILTER_TOOLS_ATTACK);
    $.ButtonHelper.setButtonSelected(this.recruitDialog.btn_filter_defencetools, this._currentFilter == CastleRecruitDialogUnits.FILTER_TOOLS_DEFENCE);
    $.ButtonHelper.enableButton(this.recruitDialog.btn_filter_melee, this.isOutOfTutorial());
    $.ButtonHelper.enableButton(this.recruitDialog.btn_filter_range, this.isOutOfTutorial());
    $.ButtonHelper.enableButton(this.recruitDialog.btn_filter_mead_melee, this.isOutOfTutorial());
    $.ButtonHelper.enableButton(this.recruitDialog.btn_filter_mead_range, this.isOutOfTutorial());
    $.ButtonHelper.enableButton(this.recruitDialog.btn_filter_defencetools, this.isOutOfTutorial());
    $.ButtonHelper.enableButton(this.recruitDialog.btn_filter_attacktools, this.isOutOfTutorial());
    this.recruitDialog.btn_filter_attacktools.toolTipText = i ? "attackTools" : "dialog_siegeworkshop_tab_tooltip_notBuilt";
    this.recruitDialog.btn_filter_defencetools.toolTipText = n ? "defenceTools" : "dialog_defenseworkshop_tab_tooltip_notBuilt";
    this.mcInfoProductivityX ||= this.recruitDialog.infoProductivity.x;
    this.recruitDialog.infoProductivity.x = t ? this.recruitDialog.infoFood.x : this.mcInfoProductivityX;
    this.recruitDialog.infoTroopCount.visible = !t;
    this.setInfoFoodVisibility();
    this.recruitDialog.faction_auxiliaries_capacity.visible = t;
    this.recruitDialog.faction_auxiliaries_message.visible = t;
    this._factionUnitCampBuildingVO = _e.Iso.data.objects.provider.getObjectByType(Ce.IsoObjectEnum.FACTION_UNIT_CAMP);
    if (this._factionUnitCampBuildingVO) {
      var o = this._factionUnitCampBuildingVO.canUpgrade();
      $.ButtonHelper.enableButton(this.recruitDialog.faction_auxiliaries_capacity.btn_faction_auxiliaries_increase_capacity, o);
      this.recruitDialog.faction_auxiliaries_capacity.btn_faction_auxiliaries_increase_capacity.toolTipText = o ? "dialog_factionRecruit_increaseCapacity_tooltip" : "dialog_alliance_maxUpgradeLevel";
    }
  };
  CastleRecruitDialogUnits.prototype.refreshInventory = function () {
    if (this._lastGetUnitInventoryRequest == 0 || Y.CachedTimer.getCachedTimer() - this._lastGetUnitInventoryRequest > 500) {
      z.CastleModel.smartfoxClient.sendCommandVO(new w.C2SGetUnitInventoryVO());
      this._lastGetUnitInventoryRequest = T.int(Y.CachedTimer.getCachedTimer());
    }
  };
  CastleRecruitDialogUnits.prototype.fillInfoTextFields = function () {
    if (z.CastleModel.userData.foodFrozen) {
      CastleRecruitDialogUnits.setIconInInfoArea(CastleRecruitDialogUnits.ICON_FOOD_PRODUCTION_FROZEN, this.recruitDialog.infoFood);
      CastleRecruitDialogUnits.setIconInInfoArea(CastleRecruitDialogUnits.ICON_MEAD_PRODUCTION_FROZEN, this.recruitDialog.infoMead);
      CastleRecruitDialogUnits.setIconInInfoArea(CastleRecruitDialogUnits.ICON_BEEF_PRODUCTION_FROZEN, this.recruitDialog.infoBeef);
    } else {
      CastleRecruitDialogUnits.setIconInInfoArea(CastleRecruitDialogUnits.ICON_FOOD_PRODUCTION, this.recruitDialog.infoFood);
      CastleRecruitDialogUnits.setIconInInfoArea(CastleRecruitDialogUnits.ICON_MEAD_PRODUCTION, this.recruitDialog.infoMead);
      CastleRecruitDialogUnits.setIconInInfoArea(CastleRecruitDialogUnits.ICON_BEEF_PRODUCTION, this.recruitDialog.infoBeef);
    }
    var e = z.CastleModel.userCastleListDetailed.getVObyCastleID(z.CastleModel.areaData.activeArea.areaId, z.CastleModel.kingdomData.activeKingdomID);
    var t = e ? l.MathBase.floor(e.getEffectiveResourceProduction(pe.CollectableEnum.FOOD), 1) : 0;
    var i = e ? l.MathBase.floor(e.getEffectiveResourceProduction(pe.CollectableEnum.MEAD), 1) : 0;
    var n = e ? l.MathBase.floor(e.getEffectiveResourceProduction(pe.CollectableEnum.BEEF), 1) : 0;
    this.i_ifood_txt_value.color = z.CastleModel.userData.foodFrozen ? P.ClientConstColor.FONT_FROZEN : t < 0 ? P.ClientConstColor.FONT_INSUFFICIENT_COLOR : P.ClientConstColor.FONT_DEFAULT_COLOR;
    this.i_ifood_txt_value.textContentVO.numberValue = t;
    this.i_imead_txt_value.color = z.CastleModel.userData.foodFrozen ? P.ClientConstColor.FONT_FROZEN : i < 0 ? P.ClientConstColor.FONT_INSUFFICIENT_COLOR : P.ClientConstColor.FONT_DEFAULT_COLOR;
    this.i_imead_txt_value.textContentVO.numberValue = i;
    this.i_ibeef_txt_value.color = z.CastleModel.userData.foodFrozen ? P.ClientConstColor.FONT_FROZEN : n < 0 ? P.ClientConstColor.FONT_INSUFFICIENT_COLOR : P.ClientConstColor.FONT_DEFAULT_COLOR;
    this.i_ibeef_txt_value.textContentVO.numberValue = n;
    this.recruitDialog.infoFood.toolTipText = z.CastleModel.userData.foodFrozen ? "foodProductionPerHour_freeze" : "foodproduction";
    this.recruitDialog.infoMead.toolTipText = z.CastleModel.userData.foodFrozen ? "meadProductionPerHour_freeze" : "meadproduction";
    this.recruitDialog.infoBeef.toolTipText = z.CastleModel.userData.foodFrozen ? "beefProductionPerHour_freeze" : "beefproduction";
    if (z.CastleModel.boostData.festivalVO.isActive) {
      this.recruitDialog.btn_festival.toolTipText = {
        t: "dialog_recruit_festival_inProgress",
        p: [z.CastleModel.boostData.festivalVO.boostAmount]
      };
    } else {
      this.recruitDialog.btn_festival.toolTipText = z.CastleModel.areaData.activeArea.isFactionCamp ? "dialog_factionRecruit_festival" : "dialog_recruit_festival";
    }
    if (z.CastleModel.areaData.activeArea.isFactionCamp) {
      var o = this.getFactionCamp();
      if (o) {
        this.i_faction_auxiliaries_capacity.textContentVO.textReplacements = [o.auxiliaryCount, z.CastleModel.areaData.activeMorality.maxAuxiliariesStorage];
      }
    } else {
      var a = 0;
      if (this._currentFilter == CastleRecruitDialogUnits.FILTER_UNITS_ALL) {
        a = T.int(z.CastleModel.militaryData.unitInventory.getSoldierCount() + z.CastleModel.militaryData.unitStrongholdInventory.getSoldierCount());
      } else if (this._currentFilter !== undefined) {
        a = T.int(z.CastleModel.militaryData.unitInventory.getUnitCountByUnitType(this._currentFilter, false, false) + z.CastleModel.militaryData.unitStrongholdInventory.getUnitCountByUnitType(this._currentFilter, false, false));
      }
      this.i_tcount_txt_value.textContentVO.numberValue = a;
    }
    this.setInfoFoodVisibility();
    this.i_iproductivity_txt_value.textContentVO.textId = s.GenericTextIds.VALUE_PERCENTAGE;
    var r = Math.round(z.CastleModel.militaryData.getBuildingProductionSpeed(this.getBuildingTypeByUnitUnitType(this._currentFilter)));
    if (this._currentUnitCategory != L.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      if (z.CastleModel.boostData.festivalVO.isActive) {
        r += z.CastleModel.boostData.festivalVO.boostAmount;
        this.recruitDialog.infoProductivity.toolTipText = z.CastleModel.areaData.activeArea.isFactionCamp ? "dialog_factionRecruit_hireSpeed_feastActive_tooltip" : "dialog_recuit_recruitSpeed_feastActive";
      }
      if (z.CastleModel.boostData.instructorVO.isActive) {
        this._unitProductionBoost += T.int(z.CastleModel.boostData.instructorVO.bonusValue);
      }
    }
    this.i_iproductivity_txt_value.textContentVO.textReplacements = [r];
  };
  CastleRecruitDialogUnits.prototype.getFactionCamp = function () {
    return _e.Iso.data.objects.provider.getObjectByType(Ce.IsoObjectEnum.FACTION_UNIT_CAMP);
  };
  CastleRecruitDialogUnits.prototype.setInfoFoodVisibility = function () {
    this.recruitDialog.infoFood.visible = this.isSoldiersCategory(true) && !z.CastleModel.areaData.activeArea.isFactionCamp;
    this.recruitDialog.infoMead.visible = this.isSoldiersCategory(true) && !z.CastleModel.areaData.activeArea.isFactionCamp;
    this.recruitDialog.infoBeef.visible = this.isSoldiersCategory(true) && !z.CastleModel.areaData.activeArea.isFactionCamp;
  };
  CastleRecruitDialogUnits.prototype.isSoldiersCategory = function (e = false) {
    var t = this._currentUnitCategory == L.ClientConstCastle.UNIT_CATEGORY_SOLDIERS;
    if (e) {
      t = t || this._currentUnitCategory == L.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES;
    }
    return t;
  };
  Object.defineProperty(CastleRecruitDialogUnits.prototype, "isToolCategory", {
    get: function () {
      return this._currentUnitCategory == L.ClientConstCastle.UNIT_CATEGORY_TOOLS;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialogUnits.prototype.updateUnitProductionBoost = function () {
    var e;
    this._unitProductionBoost = Math.round(z.CastleModel.militaryData.getBuildingProductionSpeed(this.getBuildingTypeByUnitUnitType(this._currentFilter)));
    if (!z.CastleModel.boostData.festivalVO.isActive && this._festivalWasActive) {
      this.requestBoostUpdate(1);
    }
    this._festivalWasActive = z.CastleModel.boostData.festivalVO.isActive;
    if (this._festivalWasActive && this.isSoldiersCategory(true)) {
      e = z.CastleModel.boostData.festivalVO;
      this._unitProductionBoost += e.boostAmount;
    }
    if (z.CastleModel.boostData.instructorVO.isActive) {
      this._unitProductionBoost += T.int(z.CastleModel.boostData.instructorVO.bonusValue);
    }
    this.i_iproductivity_txt_value.textContentVO.textReplacements = [this._unitProductionBoost];
  };
  CastleRecruitDialogUnits.prototype.refreshPackageList = function () {
    z.CastleModel.smartfoxClient.sendCommandVO(new B.C2SShowPackageListVO(z.CastleModel.militaryData.getListIdByCategory(this._currentUnitCategory)));
  };
  CastleRecruitDialogUnits.prototype.initShopArrows = function (e) {
    this.shopMaxPage = T.int((e - 1) / CastleRecruitDialogUnits.SHOP_ITEMS_PER_PAGE);
    this.recruitDialog.itemSelection.btn_rightArrow.visible = this.shopMaxPage > 0 && this.shopCurrentPage < this.shopMaxPage;
    this.recruitDialog.itemSelection.btn_leftArrow.visible = this.shopMaxPage > 0 && this.shopCurrentPage > 0;
    if (!this.isOutOfTutorial()) {
      this.recruitDialog.itemSelection.btn_rightArrow.visible = false;
    }
  };
  CastleRecruitDialogUnits.prototype.checkPalaceDamageLock = function (e, t) {
    if (!e.isAvailableByPalace) {
      t.iconNA.visible = true;
      t.iconNA.alpha = 0.7;
      this.textFieldManager.registerTextField(t.iconNA.txt_text, new D.LocalizedTextVO("palaceDamaged"), new r.InternalGGSTextFieldConfigVO(true));
    }
  };
  CastleRecruitDialogUnits.prototype.checkFameUnlocked = function (e, t) {
    if (!!t.iconNA.visible && !!ye.CastleTitleSystemHelper.isWodIdUnlocked(e.wodId) && (!z.CastleModel.userData.isInPeaceMode || !!e.isAvailableInPeaceMode || !e.isAvailable || !(e.costC2 <= 0))) {
      t.iconNA.visible = false;
      t.iconNA.alpha = 1;
    }
  };
  CastleRecruitDialogUnits.prototype.checkPeaceModeProductionSlowDown = function (e, t) {
    if (this.isFactionKingdom()) {
      this.checkPeaceModeProductionSlowDownForFaction(e, t);
    } else {
      this.checkPeaceModeProductionSlowDownForKingdoms(e, t);
    }
  };
  CastleRecruitDialogUnits.prototype.checkPeaceModeProductionSlowDownForKingdoms = function (e, t) {
    if (z.CastleModel.userData.isInPeaceMode && !e.isAvailableInPeaceMode && e.isAvailable && e.costC2 <= 0 && !e.isAuxiliary) {
      this.slowDownUnitsLayer(t);
    }
  };
  CastleRecruitDialogUnits.prototype.checkPeaceModeProductionSlowDownForFaction = function (e, t) {
    var i = z.CastleModel.specialEventData.getActiveEventByEventId(m.EventConst.EVENTTYPE_FACTION).isInPreOrActivePeaceMode;
    if (!e.isAvailableInPeaceMode && e.isAvailable && e.costC2 <= 0 && i) {
      this.slowDownUnitsLayer(t);
    }
  };
  CastleRecruitDialogUnits.prototype.slowDownUnitsLayer = function (e) {
    e.iconNA.visible = true;
    e.iconNA.alpha = 0.7;
    this.textFieldManager.registerTextField(e.iconNA.txt_text, new D.LocalizedTextVO("dialog_recruit_peaceModeBlock"), new r.InternalGGSTextFieldConfigVO(true));
  };
  CastleRecruitDialogUnits.prototype.unitAvailableByTutorialLevel = function (e) {
    return true;
  };
  CastleRecruitDialogUnits.prototype.getBuildingTypeByUnitUnitType = function (e) {
    switch (e) {
      case CastleRecruitDialogUnits.FILTER_UNITS_ALL:
      case L.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE:
      case L.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE:
      case L.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE_MEAD:
      case L.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE_MEAD:
      case L.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE_BEEF:
      case L.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE_BEEF:
        return L.ClientConstCastle.UNIT_BUILDINGTYPE_BARRACKS;
      case L.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK:
        return L.ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP;
      case L.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE:
        return L.ClientConstCastle.UNIT_BUILDINGTYPE_DWORKSHOP;
    }
    return "";
  };
  CastleRecruitDialogUnits.prototype.fillPriceInfo = function (e, t) {
    if (e.isAvailable) {
      var i = d.castAs(z.CastleModel.specialEventData.getActiveEventByEventId(m.EventConst.EVENTTYPE_UNIT_PRIME_SALE), "UnitPrimeSaleEventVO");
      var n = new ge.CollectableList();
      for (var o = 0, a = e.getCostTypes(); o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          var r = T.int(e.getCost(s));
          var l = 0;
          if (s.type == pe.CollectableEnum.C2 && i && i.wodIDHasDiscount(e.wodId)) {
            l = i.discount;
            r = Math.ceil(e.costC2 * (1 - l / 100));
          }
          if (r) {
            n.addItem(he.CollectableHelper.createVO(s.type, r, s.id));
          }
        }
      }
      be.CostHelper.initAsCosts(n, t.mc_contentHolder, false, true, null, new re(25, 18));
    } else {
      for (var c = 0; c < 3; c++) {
        t.mc_contentHolder["txt_cost" + c].visible = false;
      }
    }
  };
  CastleRecruitDialogUnits.prototype.getFilteredArray = function (e = null) {
    var t = [];
    var i = [];
    if (z.CastleModel.permanentCastleData.getCurrentCastle()) {
      var n = z.CastleModel.permanentCastleData.getCurrentCastle().unitsVO;
      switch (e || this._currentFilter) {
        case CastleRecruitDialogUnits.FILTER_UNITS_ALL:
          t = z.CastleModel.areaData.activeArea.isFactionCamp ? n.unlockedAuxiliaries.concat(n.lockedAuxiliaries) : n.unlockedSoldiers.concat(n.lockedSoldiers);
          break;
        case CastleRecruitDialogUnits.FILTER_UNITS_MELEE:
        case CastleRecruitDialogUnits.FILTER_UNITS_RANGE:
          t = n.getUnlockedSoldiersByUnitType(this._currentFilter, false, false).concat(n.getLockedSoldiersByUnitType(this._currentFilter, false, false));
          break;
        case CastleRecruitDialogUnits.FILTER_UNITS_MELEE_MEAD:
          t = n.getUnlockedSoldiersByUnitType(CastleRecruitDialogUnits.FILTER_UNITS_MELEE, false, true, true).concat(n.getLockedSoldiersByUnitType(CastleRecruitDialogUnits.FILTER_UNITS_MELEE, false, true, true));
          break;
        case CastleRecruitDialogUnits.FILTER_UNITS_RANGE_MEAD:
          t = n.getUnlockedSoldiersByUnitType(CastleRecruitDialogUnits.FILTER_UNITS_RANGE, false, true, true).concat(n.getLockedSoldiersByUnitType(CastleRecruitDialogUnits.FILTER_UNITS_RANGE, false, true, true));
          break;
        default:
          t = n.getWorkshopToolsByUnitType(this._currentFilter);
      }
      t.sort(de.ClientConstSort.sortByUnitSortOrderRecruit);
      t.forEach(function (e) {
        var t = z.CastleModel.militaryData.getBuildingLevel(e.unitBuildingType);
        if (!n.isLockedByWodId(e.wodId) || e.unitBuildingType != L.ClientConstCastle.UNIT_BUILDINGTYPE_BARRACKS || e.buildingLevel > t) {
          i.push(e);
        }
      });
    }
    return i;
  };
  CastleRecruitDialogUnits.prototype.boostCurrentSlot = function () {
    var e = this._buildListComponent.selectedItem.unitPackageSlotVO;
    if (this._useSkipButton) {
      Ve.RecruitmentHelper.skipSlot(this.packageList.listId, e.pos);
    } else {
      Ve.RecruitmentHelper.boostCurrentSlot(e, this.packageList.listId, this.isSoldiersCategory(), this.packageList.currentProductionSlot, this.bindFunction(this.onConfirmDoublingLoopedSlot), this.bindFunction(this.declinedDoublingLoopedSlot));
    }
  };
  CastleRecruitDialogUnits.prototype.onConfirmDoublingLoopedSlot = function (e) {};
  CastleRecruitDialogUnits.prototype.declinedDoublingLoopedSlot = function (e) {
    $.ButtonHelper.enableButton(this.recruitDialog.btn_boost, true);
  };
  CastleRecruitDialogUnits.prototype.onCancelCurrentSlotConfirmed = function (e = null) {
    if (this._buildListComponent && this._buildListComponent.selectedItem && this._buildListComponent.selectedItem.slotVO) {
      z.CastleModel.smartfoxClient.sendCommandVO(new x.C2SCancelUnitPackageVO(z.CastleModel.militaryData.getListIdByCategory(this._currentUnitCategory), this._buildListComponent.selectedItem.slotVO.pos, this._buildListComponent.isProductionItemSelected ? O.RecruitmentConst.PRODUCTION_SLOT_TYPE_NAME : O.RecruitmentConst.QUEUE_SLOT_TYPE_NAME));
      this._buildListComponent.preventNextDynamicPreselection();
    }
  };
  CastleRecruitDialogUnits.prototype.openSelectUnitDialog = function (e, t = true) {
    var i = 0;
    if (g.instanceOfClass(e, "BarracksUnitVO") || g.instanceOfClass(e, "EventunitUnitVO")) {
      if (e.isAuxiliary) {
        if (_e.Iso.data.objects.provider.getObjectByType(Ce.IsoObjectEnum.FACTION_BARRACKS)) {
          i = T.int(_e.Iso.data.objects.provider.getObjectByType(Ce.IsoObjectEnum.FACTION_BARRACKS).stackSize);
        }
        if (z.CastleModel.subscriptionData.isEffectTypeActive(Q.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SLOT_BONUS)) {
          i += T.int(z.CastleModel.subscriptionData.getEffectValue(Q.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SLOT_BONUS));
        }
        if (this.getFactionCamp()) {
          i = T.int(Math.min(i, Math.max(z.CastleModel.areaData.activeMorality.maxAuxiliariesStorage - this.getFactionCamp().auxiliaryCount, 0)));
        }
      } else {
        i = T.int(_e.Iso.data.objects.provider.getObjectByType(Ce.IsoObjectEnum.BARRACKS).stackSize);
        i += T.int(z.CastleModel.areaData.activeConstructionItems.getConstructionItemEffectValue(X.CastleEffectEnum.STACKSIZE));
        if (z.CastleModel.subscriptionData.isEffectTypeActive(Q.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SLOT_BONUS)) {
          i += T.int(z.CastleModel.subscriptionData.getEffectValue(Q.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SLOT_BONUS));
        }
      }
    } else if (g.instanceOfClass(e, "ToolUnitVO")) {
      i = e.costC2 > 0 ? T.int(O.RecruitmentConst.MAXIMUM_PREMIUM_TOOL_STACK_SIZE) : T.int(E.UnitProductionConst.TOOLS_LIMIT);
    }
    if (!this.isOutOfTutorial()) {
      i = CastleRecruitDialogUnits.LIMIT_UNITS_TO_PRODUCE_IN_TUTORIAL;
    }
    if (this._currentUnitCategory == L.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      CastleRecruitDialogUnits.lastToolSelected = e;
    } else {
      CastleRecruitDialogUnits.lastUnitSelected = e;
    }
    this.lastBasicUnitVOSelected = e;
    this.selectUnitInStorePage(e);
    this.unitRecruitmentControls.initWithProp(new oe.CastleRecruitSelectUnitsDialogProperties(e, i, null, t));
  };
  CastleRecruitDialogUnits.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if ($.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.recruitDialog.itemSelection.btn_leftArrow:
        case this.recruitDialog.itemSelection.btn_rightArrow:
          this.onClickShopArrow(t);
          break;
        case this.recruitDialog.btn_boost:
          this.handleBoostSlot();
          break;
        case this.recruitDialog.btn_filter_melee:
          this.changeCurrentFilter(CastleRecruitDialogUnits.FILTER_UNITS_MELEE);
          break;
        case this.recruitDialog.btn_filter_range:
          this.changeCurrentFilter(CastleRecruitDialogUnits.FILTER_UNITS_RANGE);
          break;
        case this.recruitDialog.btn_filter_mead_melee:
          this.changeCurrentFilter(CastleRecruitDialogUnits.FILTER_UNITS_MELEE_MEAD);
          break;
        case this.recruitDialog.btn_filter_mead_range:
          this.changeCurrentFilter(CastleRecruitDialogUnits.FILTER_UNITS_RANGE_MEAD);
          break;
        case this.recruitDialog.btn_filter_all:
          this.changeCurrentFilter(CastleRecruitDialogUnits.FILTER_UNITS_ALL);
          break;
        case this.recruitDialog.btn_filter_attacktools:
          this.changeCurrentFilter(CastleRecruitDialogUnits.FILTER_TOOLS_ATTACK);
          break;
        case this.recruitDialog.btn_filter_defencetools:
          this.changeCurrentFilter(CastleRecruitDialogUnits.FILTER_TOOLS_DEFENCE);
          break;
        case this.recruitDialog.btn_cancelRecruitment:
          this.handleCancelRecruitment();
          break;
        case this.recruitDialog.btn_copy_production:
          this.onCopyProduction();
          break;
        case this.recruitDialog.btn_festival:
          Oe.CastleDialogHandler.getInstance().registerDefaultDialogs(Ie.CastlePremiumMarketPlaceDialog, new te.CastlePremiumMarketPlaceDialogProperties(me.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST, new fe.CastleFestivalPremiumShopVO()));
          break;
        case this.recruitDialog.faction_auxiliaries_capacity.btn_faction_auxiliaries_increase_capacity:
          _e.Iso.renderer.mouse.changeSelectedTarget(_e.Iso.renderer.objects.provider.getObjectByVO(this._factionUnitCampBuildingVO));
          this.layoutManager.hideAllDialogs();
          break;
        case this.recruitDialog.btnProductionMode:
          var i = false;
          if (this.packageList.recruitmentMode == O.RecruitmentConst.FINISH_FIRST_STACK_MODE_ID) {
            this.packageList.recruitmentMode = 1;
            i = true;
          } else {
            this.packageList.recruitmentMode = 0;
            i = false;
          }
          z.CastleModel.smartfoxClient.sendCommandVO(new F.C2SSetRecruitmentModeVO(this.packageList.listId, z.CastleModel.kingdomData.activeKingdomID, z.CastleModel.permanentCastleData.getCurrentCastle().areaId, i));
          break;
        case this.recruitDialog.itemSelection.i0:
        case this.recruitDialog.itemSelection.i1:
        case this.recruitDialog.itemSelection.i2:
        case this.recruitDialog.itemSelection.i3:
        case this.recruitDialog.itemSelection.i4:
          if (t.target.unitVO.isAvailable && this.unitAvailableByTutorialLevel(t.target.unitVO)) {
            this.openSelectUnitDialog(t.target.unitVO);
          }
          this.controller.dispatchEvent(new se.CastleRecruitSelectUnitEvent(se.CastleRecruitSelectUnitEvent.SHOW_UNIT_SELECTION));
          break;
        case this.recruitDialog.itemSelection.btn_info0:
        case this.recruitDialog.itemSelection.btn_info1:
        case this.recruitDialog.itemSelection.btn_info2:
        case this.recruitDialog.itemSelection.btn_info3:
        case this.recruitDialog.itemSelection.btn_info4:
          if (!z.CastleModel.tutorialData.isTutorialActive) {
            Oe.CastleDialogHandler.getInstance().registerDefaultDialogs(Le.CastleRecruitInfoDialog, new ne.CastleRecruitInfoDialogProperties(t.target.unitVO));
          }
      }
    }
  };
  CastleRecruitDialogUnits.prototype.handleBoostSlot = function () {
    var e = this._buildListComponent.selectedItem.unitPackageSlotVO;
    var t = e.unitVO;
    var i = e.numOfBoost;
    var n = this.getDoubledUnitAmount(e.amount);
    var o = T.int(this.getUnitDoublingCosts(t, i, e.amount));
    Oe.CastleDialogHandler.getInstance().registerDefaultDialogs(Pe.DoubleUnitsConfirmationDialog, new ae.DoubleUnitsConfirmationProperties(this.isSoldiersCategory(true), this.bindFunction(this.onDoubleUnitsConfirmation), o, n, t.getNameString(), this.packageList.listId));
  };
  CastleRecruitDialogUnits.prototype.onDoubleUnitsConfirmation = function () {
    if (this._buildListComponent && this._buildListComponent.selectedItem) {
      $.ButtonHelper.enableButton(this.recruitDialog.btn_boost, false);
      this.boostCurrentSlot();
    }
  };
  CastleRecruitDialogUnits.prototype.updateRecruitmentMode = function (e) {
    this.recruitDialog.btnProductionMode.btnProductionMode.gotoAndStop(e);
    if (this._currentUnitCategory != L.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      this.recruitDialog.btnProductionMode.toolTipText = this.recruitDialog.btnProductionMode.btnProductionMode.currentFrame == 0 ? "dialog_recruit_queueMode_firstSlot_tooltip" : "dialog_recruit_queueMode_slotAfterSlot_tooltip";
    } else {
      this.recruitDialog.btnProductionMode.toolTipText = this.recruitDialog.btnProductionMode.btnProductionMode.currentFrame == 0 ? "dialog_recruit_production_queueMode_firstSlot_tooltip" : "dialog_recruit_production_queueMode_slotAfterSlot_tooltip";
    }
  };
  Object.defineProperty(CastleRecruitDialogUnits.prototype, "packageList", {
    get: function () {
      return z.CastleModel.militaryData.getPackageListByCategory(this._currentUnitCategory);
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialogUnits.prototype.handleCancelRecruitment = function () {
    Oe.CastleDialogHandler.getInstance().registerDefaultDialogs(Ae.CancelRecruitmentDialog, new ie.CancelRecruitmentProperties(this.isSoldiersCategory(true), this.bindFunction(this.onCancelCurrentSlotConfirmed)));
  };
  CastleRecruitDialogUnits.prototype.onCopyProduction = function () {
    if (this._currentUnitCategory != L.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      Oe.CastleDialogHandler.getInstance().registerDefaultDialogs(ve.AutoRecruitmentCopyUnitsDialog, new Se.AutoRecruitmentCopyDialogProperties());
    } else {
      Oe.CastleDialogHandler.getInstance().registerDefaultDialogs(Te.AutoRecruitmentCopyToolsDialog, new Se.AutoRecruitmentCopyDialogProperties());
    }
  };
  CastleRecruitDialogUnits.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    switch (t.target) {
      case this.recruitDialog.itemSelection.i0:
      case this.recruitDialog.itemSelection.i1:
      case this.recruitDialog.itemSelection.i2:
      case this.recruitDialog.itemSelection.i3:
      case this.recruitDialog.itemSelection.i4:
        if (t.target.unitVO && t.target.unitVO.isAvailable) {
          t.target.toolTipText = null;
          this.initUnitTooltip(t.target.unitVO, t.target);
        }
    }
  };
  CastleRecruitDialogUnits.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this.recruitDialog.itemSelection.mc_unitTooltip.visible = false;
  };
  CastleRecruitDialogUnits.prototype.onSelectBuildlistItem = function (e) {
    this.updateBoostBtn();
    this.updateProgress();
  };
  CastleRecruitDialogUnits.prototype.onAttackProtectionUpdated = function (e) {
    this.fillShopItemsByGroup();
    this.fillInfoTextFields();
  };
  CastleRecruitDialogUnits.prototype.onTimerSecondIntervalTick = function (e = null) {
    if (this.timeRemainingForUnitsRecruitment > 0) {
      var t = J.CastleTimeStringHelper.getShortTimeString(Math.ceil(this.timeRemainingForUnitsRecruitment - Y.CachedTimer.getCachedTimer()) * R.ClientConstTime.MILLISEC_2_SEC);
      this.i_totalProductionTime_txt_value.textContentVO.stringValue = y.Localize.digitalClock(t);
      this.recruitDialog.infoTotalProductionTime.visible = true;
      if (this._currentUnitCategory != L.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
        this.recruitDialog.infoTotalProductionTime.toolTipText = "dialog_recruit_recruitTimer_tooltip";
      } else {
        this.recruitDialog.infoTotalProductionTime.toolTipText = "dialog_recruit_productionTimer_tooltip";
      }
    } else {
      this.recruitDialog.infoTotalProductionTime.visible = false;
    }
    this.updateProgress();
  };
  CastleRecruitDialogUnits.prototype.updateProgress = function () {
    var e = d.castAs(this._buildListComponent.productionItem, "UnitBuildListItem");
    if (e && e.unitPackageSlotVO && e.unitPackageSlotVO.unitVO && e.unitPackageSlotVO.remainingTimeInSeconds >= 0) {
      this.showItemProgressInfo();
    } else {
      this.hideItemProgressInfo();
    }
    var t = d.castAs(this._buildListComponent.selectedItem, "UnitBuildListItem");
    if (t && t.unitPackageSlotVO && t.unitPackageSlotVO.unitVO) {
      this.showItemButtons();
    } else {
      this.hideItemButtons();
    }
    this.updateUnitProductionBoost();
    this.updateFestivalIcon();
    this.updateCopyProductionInfos();
  };
  CastleRecruitDialogUnits.prototype.updateCopyProductionInfos = function () {
    this.updateCopyButton();
    this.isSoldiersCategory();
    this.recruitDialog.btn_cancelRecruitment.toolTipText = "dialog_recruit_abort";
  };
  CastleRecruitDialogUnits.prototype.updateCopyButton = function () {
    var e;
    var t = true;
    var i = T.int(this.packageList.numOfSlots);
    var n = this.getFilteredArray();
    var o = false;
    if (z.CastleModel.userData.castleList.list.length <= 1) {
      this.recruitDialog.btn_copy_production.toolTipText = this.isSoldiersCategory() ? "dialog_recruit_copy_unavailable_noCastles" : "dialog_recruit_production_copy_unavailable_noCastles";
      t = false;
    } else {
      for (var a = 0; a < i; a++) {
        if (!((e = this.packageList.getSlotByArrayPos(a)).amount <= 0)) {
          o = false;
          if (n != null) {
            for (var s = 0, r = n; s < r.length; s++) {
              var l = r[s];
              if (l !== undefined && e.wodId == l.wodId && l.isAvailable && l.isUnitAvailableByEvent()) {
                o = true;
                break;
              }
            }
          }
          if (!o) {
            t = false;
            break;
          }
        }
      }
      if (t) {
        this.updateCopyButtonTooltip();
      } else {
        this.recruitDialog.btn_copy_production.toolTipText = this.isSoldiersCategory() ? "dialog_recruit_copy_unavailable" : "dialog_recruit_production_copy_unavailable";
      }
    }
    $.ButtonHelper.enableButton(this.recruitDialog.btn_copy_production, t);
  };
  CastleRecruitDialogUnits.prototype.isFactionKingdom = function () {
    return z.CastleModel.kingdomData.activeKingdomID == f.FactionConst.KINGDOM_ID;
  };
  CastleRecruitDialogUnits.prototype.areUsedSlotsLoopable = function () {
    return this.packageList.meetsLoopingRequirements();
  };
  CastleRecruitDialogUnits.prototype.onResourcesUpdate = function (e) {
    this.fillShopItemsByGroup(false);
  };
  CastleRecruitDialogUnits.prototype.onInventoryUpdated = function (e) {
    this.fillShopItemsByGroup(false);
    this.fillInfoTextFields();
  };
  CastleRecruitDialogUnits.prototype.onCastleDataUpdated = function (e) {
    if (z.CastleModel.militaryData.userHasAnyMilitarybuilding) {
      this.refreshInventory();
    } else {
      this.hide();
    }
  };
  CastleRecruitDialogUnits.prototype.onPackageListUpdated = function (e) {
    var t;
    var i;
    var n = z.CastleModel.militaryData.getPackageListByCategory(this._currentUnitCategory);
    this._buildListComponent.fillItems(n);
    if (n.currentProductionSlot) {
      var o = T.int(n.slotsArray.length);
      this.amountOfUnitsInQueue = T.int(n.currentProductionSlot.amount);
      this.timeRemainingForUnitsRecruitment = 0;
      this._allianceHelpConfirmed = true;
      if (n.currentProductionSlot.amount >= 5) {
        this._allianceHelpConfirmed = !!n.currentProductionSlot.receivedAllianceHelp;
      }
      for (var a = 0; a < o; a++) {
        t = n.getSlotByArrayPos(a);
        if (g.instanceOfClass(t, "UnitPackageSlotVO") && (i = t).amount > 0) {
          this.amountOfUnitsInQueue += i.amount;
          if (i.amount >= 5 && !i.receivedAllianceHelp) {
            this._allianceHelpConfirmed = false;
          }
        }
      }
      if (n.remainingSecondsForProduction > 0) {
        this.timeRemainingForUnitsRecruitment = Y.CachedTimer.getCachedTimer() + n.remainingSecondsForProduction * R.ClientConstTime.SEC_2_MILLISEC;
      }
      if (this.amountOfUnitsInQueue > 0) {
        this.recruitDialog.infoTotalUnitStack.visible = true;
        this.i_totalUnitStack_txt_value.textContentVO.numberValue = this.amountOfUnitsInQueue;
      } else {
        this.recruitDialog.infoTotalUnitStack.visible = false;
      }
      this.updateBoostBtn();
      this.updateProgress();
      this.updateShopSlotLocks();
      this.updateCopyButtonTooltip();
      this.recruitSelectedUnitComponent.freeSlots = n.numFreeSlots + n.lockedSlots;
      this.updateShopItemsInfo();
      this.updateRecruitmentMode(n.recruitmentMode + 1);
    }
  };
  CastleRecruitDialogUnits.prototype.onClickShopArrow = function (e) {
    if (!z.CastleModel.questData.isQuestActive(17) || this._currentFilter != CastleRecruitDialogUnits.FILTER_TOOLS_DEFENCE) {
      var t = this.shopCurrentPage;
      if (e.target == this.recruitDialog.itemSelection.btn_leftArrow) {
        this.shopCurrentPage = T.int(Math.max(0, this.shopCurrentPage - 1));
      } else {
        this.shopCurrentPage = T.int(Math.min(this.shopMaxPage, this.shopCurrentPage + 1));
      }
      if (t != this.shopCurrentPage) {
        this.fillShopItemsByGroup();
      }
    }
  };
  Object.defineProperty(CastleRecruitDialogUnits.prototype, "currentFilter", {
    get: function () {
      return this._currentFilter;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialogUnits.prototype.getClipContainerForUnitVO = function (e) {
    for (var t = 0; t < this.currentShownUnits.length; t++) {
      if (this.currentShownUnits[t].wodId == e) {
        return this.recruitDialog.itemSelection["i" + t];
      }
    }
    return null;
  };
  CastleRecruitDialogUnits.setIconInInfoArea = function (e, t) {
    var i;
    switch (e) {
      case CastleRecruitDialogUnits.ICON_TOTAL_UNITS:
        i = h.getDefinitionByName("Icon_Total_Units");
        break;
      case CastleRecruitDialogUnits.ICON_TOTAL_TOOLS:
        i = h.getDefinitionByName("Icon_Total_Tools");
        break;
      case CastleRecruitDialogUnits.ICON_TOTAL_PRODUCTION_TIME:
        i = h.getDefinitionByName("Icon_Total_Production");
        break;
      case CastleRecruitDialogUnits.ICON_TIME:
        i = h.getDefinitionByName("Icon_Time");
        break;
      case CastleRecruitDialogUnits.ICON_C1:
        i = h.getDefinitionByName("icon_C11");
        break;
      case CastleRecruitDialogUnits.ICON_C2:
        i = h.getDefinitionByName("Icon_C2");
        break;
      case CastleRecruitDialogUnits.ICON_FOOD_CONSUMPTION:
        i = h.getDefinitionByName("Icon_Food_Consumption");
        break;
      case CastleRecruitDialogUnits.ICON_MEAD_CONSUMPTION:
        i = h.getDefinitionByName("Icon_Mead_Consumption");
        break;
      case CastleRecruitDialogUnits.ICON_BEEF_CONSUMPTION:
        i = h.getDefinitionByName("Icon_Beef_Consumption");
        break;
      case CastleRecruitDialogUnits.ICON_WOOD:
        i = h.getDefinitionByName("Icon_Wood");
        break;
      case CastleRecruitDialogUnits.ICON_STONE:
        i = h.getDefinitionByName("Icon_Stone");
        break;
      case CastleRecruitDialogUnits.ICON_UNITS:
        i = h.getDefinitionByName("Icon_Units");
        break;
      case CastleRecruitDialogUnits.ICON_TOOLS:
        i = h.getDefinitionByName("Icon_Tools");
        break;
      case CastleRecruitDialogUnits.ICON_PRODUCTIVITY:
        i = h.getDefinitionByName("Icon_Productivity");
        break;
      case CastleRecruitDialogUnits.ICON_FOOD_PRODUCTION:
        i = h.getDefinitionByName("Icon_Food_Production");
        break;
      case CastleRecruitDialogUnits.ICON_MEAD_PRODUCTION:
        i = h.getDefinitionByName("Icon_Mead_Production");
        break;
      case CastleRecruitDialogUnits.ICON_BEEF_PRODUCTION:
        i = h.getDefinitionByName("Icon_Beef_production");
        break;
      case CastleRecruitDialogUnits.ICON_FOOD_PRODUCTION_FROZEN:
        i = h.getDefinitionByName("Icon_Food_Production_Frozen");
        break;
      case CastleRecruitDialogUnits.ICON_MEAD_PRODUCTION_FROZEN:
        i = h.getDefinitionByName("Icon_Mead_Production_Frozen");
        break;
      case CastleRecruitDialogUnits.ICON_BEEF_PRODUCTION_FROZEN:
        i = h.getDefinitionByName("Icon_Beef_Production_Frozen");
        break;
      case CastleRecruitDialogUnits.ICON_KNIGHTS:
        i = h.getDefinitionByName("Icon_Knights");
        break;
      case CastleRecruitDialogUnits.ICON_BARONS:
        i = h.getDefinitionByName("Icon_Baron");
    }
    var n = new i();
    n.mouseEnabled = false;
    s.MovieClipHelper.scaleToFit(n, 20, 28);
    t.iconMC.mouseEnabled = false;
    t.iconMC.removeChildren();
    t.iconMC.addChild(n);
  };
  Object.defineProperty(CastleRecruitDialogUnits.prototype, "shopCurrentPage", {
    get: function () {
      return this._shopCurrentPage;
    },
    set: function (e) {
      this._shopCurrentPage = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRecruitDialogUnits.prototype, "recruitSelectedUnitComponent", {
    get: function () {
      return this.unitRecruitmentControls;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialogUnits.__initialize_static_members = function () {
    CastleRecruitDialogUnits.FILTER_UNITS_MELEE = L.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE;
    CastleRecruitDialogUnits.FILTER_UNITS_RANGE = L.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE;
    CastleRecruitDialogUnits.FILTER_UNITS_MELEE_MEAD = L.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE_MEAD;
    CastleRecruitDialogUnits.FILTER_UNITS_RANGE_MEAD = L.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE_MEAD;
    CastleRecruitDialogUnits.FILTER_UNITS_ALL = "allUnits";
    CastleRecruitDialogUnits.FILTER_UNITS_FACTION = "auxiliary";
    CastleRecruitDialogUnits.FILTER_TOOLS_ATTACK = L.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK;
    CastleRecruitDialogUnits.FILTER_TOOLS_DEFENCE = L.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE;
    CastleRecruitDialogUnits.SHOP_MAX_ITEM_WIDTH = 81;
    CastleRecruitDialogUnits.SHOP_MAX_ITEM_HEIGHT = 96;
    CastleRecruitDialogUnits.SHOP_ITEMS_PER_PAGE = 5;
    CastleRecruitDialogUnits.MIN_LEVEL_FOR_FESTIVALBUTTON = 5;
    CastleRecruitDialogUnits.WOD_ID_SPEER_MAN = 602;
    CastleRecruitDialogUnits.WOD_ID_MACE_MAN = 603;
    CastleRecruitDialogUnits.WOD_ID_STONES = 637;
    CastleRecruitDialogUnits.ICON_TOTAL_UNITS = 0;
    CastleRecruitDialogUnits.ICON_TOTAL_PRODUCTION_TIME = 1;
    CastleRecruitDialogUnits.ICON_TIME = 2;
    CastleRecruitDialogUnits.ICON_C1 = 3;
    CastleRecruitDialogUnits.ICON_C2 = 4;
    CastleRecruitDialogUnits.ICON_FOOD_CONSUMPTION = 5;
    CastleRecruitDialogUnits.ICON_MEAD_CONSUMPTION = 14;
    CastleRecruitDialogUnits.ICON_BEEF_CONSUMPTION = 18;
    CastleRecruitDialogUnits.ICON_WOOD = 6;
    CastleRecruitDialogUnits.ICON_STONE = 7;
    CastleRecruitDialogUnits.ICON_UNITS = 8;
    CastleRecruitDialogUnits.ICON_TOOLS = 8;
    CastleRecruitDialogUnits.ICON_PRODUCTIVITY = 9;
    CastleRecruitDialogUnits.ICON_FOOD_PRODUCTION = 10;
    CastleRecruitDialogUnits.ICON_MEAD_PRODUCTION = 15;
    CastleRecruitDialogUnits.ICON_BEEF_PRODUCTION = 19;
    CastleRecruitDialogUnits.ICON_FOOD_PRODUCTION_FROZEN = 16;
    CastleRecruitDialogUnits.ICON_MEAD_PRODUCTION_FROZEN = 17;
    CastleRecruitDialogUnits.ICON_BEEF_PRODUCTION_FROZEN = 20;
    CastleRecruitDialogUnits.ICON_TOTAL_TOOLS = 11;
    CastleRecruitDialogUnits.ICON_KNIGHTS = 12;
    CastleRecruitDialogUnits.ICON_BARONS = 13;
    CastleRecruitDialogUnits.LIMIT_UNITS_TO_PRODUCE_IN_TUTORIAL = 5;
  };
  return CastleRecruitDialogUnits;
}(ee.CastleDialogSubLayer);
exports.CastleRecruitDialogUnits = ue;
var de = require("./75.js");
var pe = require("./12.js");
var he = require("./45.js");
var ge = require("./48.js");
var Ce = require("./80.js");
var _e = require("./33.js");
var me = require("./170.js");
var fe = require("./1212.js");
var Oe = require("./9.js");
var Ee = require("./458.js");
var ye = require("./106.js");
var be = require("./66.js");
var De = require("./63.js");
var Ie = require("./315.js");
var Te = require("./1574.js");
var ve = require("./1579.js");
var Se = require("./2962.js");
var Ae = require("./2963.js");
var Le = require("./115.js");
var Pe = require("./2964.js");
var Me = require("./1570.js");
var Re = require("./1578.js");
var Ve = require("./628.js");
p.classImplementsInterfaces(ue, "ICollectableRendererList", "ISublayer");
ue.__initialize_static_members();