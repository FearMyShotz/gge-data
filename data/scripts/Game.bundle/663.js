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
var p = require("./1.js");
var h = require("./1.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./3.js");
var m = require("./3.js");
var f = require("./3.js");
var O = require("./3.js");
var E = require("./6.js");
var y = require("./18.js");
var b = require("./16.js");
var D = require("./28.js");
var I = require("./1068.js");
var T = require("./217.js");
var v = require("./243.js");
var S = require("./1070.js");
var A = require("./427.js");
var L = require("./218.js");
var P = require("./129.js");
var M = require("./26.js");
var R = require("./183.js");
var V = require("./153.js");
var x = require("./4.js");
var w = require("./8.js");
var B = require("./236.js");
var F = require("./11.js");
var N = require("./120.js");
var k = require("./3555.js");
var U = function (e) {
  function CastleTransferTroopsDialog() {
    var t = this;
    t._destinationCapacity = E.int(Number.MAX_VALUE);
    t.insufficientFunds = false;
    t.targetCapacityArrived = false;
    t._currentFilter = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleTransferTroopsDialog.NAME) || this;
  }
  n.__extends(CastleTransferTroopsDialog, e);
  CastleTransferTroopsDialog.prototype.initLoaded = function (t = null) {
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok, this.dialogDisp.mc_selection.btn_leftArrow, this.dialogDisp.mc_selection.btn_rightArrow, this.dialogDisp.mc_inventory.btn_leftArrow, this.dialogDisp.mc_inventory.btn_rightArrow]);
    w.ButtonHelper.initTwoStateButtons([this.dialogDisp.tab_all, this.dialogDisp.tab_attackUnits, this.dialogDisp.tab_defenceUnits, this.dialogDisp.tab_meadUnits, this.dialogDisp.tab_attackTools, this.dialogDisp.tab_defenceTools]);
    new o.BasicButtonGroup([this.dialogDisp.tab_all.basicButton, this.dialogDisp.tab_attackUnits.basicButton, this.dialogDisp.tab_defenceUnits.basicButton, this.dialogDisp.tab_meadUnits.basicButton, this.dialogDisp.tab_attackTools.basicButton, this.dialogDisp.tab_defenceTools.basicButton]).selectButton(this.dialogDisp.tab_all.basicButton);
    for (var i = 0; i < CastleTransferTroopsDialog.ITEMS_PER_PAGE; i++) {
      w.ButtonHelper.initBasicButton(this.dialogDisp.mc_selection["btn_info" + i]);
      w.ButtonHelper.initBasicButton(this.dialogDisp.mc_inventory["btn_info" + i]);
    }
    this.dialogDisp.tab_all.toolTipText = "dialog_castleListOverview_all";
    this.dialogDisp.tab_attackUnits.toolTipText = "attackunit";
    this.dialogDisp.tab_defenceUnits.toolTipText = "defenceunit";
    this.dialogDisp.tab_meadUnits.visible = x.CastleModel.legendSkillData.meadUnitsUnlocked;
    this.dialogDisp.tab_meadUnits.toolTipText = "meadBeefUnits";
    this.dialogDisp.tab_attackTools.toolTipText = "attackTools";
    this.dialogDisp.tab_defenceTools.toolTipText = "defenceTools";
    this.dialogDisp.mc_limit.mouseChildren = false;
    this.dialogDisp.mc_costs.toolTipText = "travelCost";
    this.dialogDisp.mc_costs.mouseChildren = false;
    this.dialogDisp.mc_infoTime.toolTipText = "travelTime";
    this.dialogDisp.mc_infoTime.mouseChildren = false;
    this.dialogDisp.mc_tools.toolTipText = "dialog_recuit_tools";
    this.dialogDisp.mc_tools.mouseChildren = false;
    this.dialogDisp.mc_food.toolTipText = "foodwastage";
    this.dialogDisp.mc_food.mouseChildren = false;
    this.dialogDisp.mc_mead.toolTipText = "meadwastage";
    this.dialogDisp.mc_mead.mouseChildren = false;
    this.dialogDisp.mc_beef.toolTipText = "beefwastage";
    this.dialogDisp.mc_beef.mouseChildren = false;
    e.prototype.initLoaded.call(this, t);
  };
  CastleTransferTroopsDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.mc_limit.toolTipText = this._destinationCapacity < Number.MAX_VALUE ? "generic_unit_capacity" : "panel_fight_unitCount";
    if (h.instanceOfClass(this.dialogProperties, "CastleTransferTroopsToKingdomProperties")) {
      var i = this.dialogProperties;
      if (i.targetKingdomVO.kID == V.KingdomEnum.ISLAND.id && i.targetKingdomVO.resetTime < D.ClientConstTime.HOURES_2_SEC * 2) {
        F.CastleExternalDialog.dialogHandler.registerDialogs(K.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties("attention", "dialog_postAttack_eventNotLongEnough"));
        this.hide();
        return;
      }
    }
    this._castleSelector ||= new W.CastleSelectorComponent(this.dialogDisp.castleSelector);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new f.LocalizedTextVO("dialog_season_sendTroops_title"));
    this.itxt_unitCount ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_limit.txt_unitCount, new f.LocalizedTextVO(""));
    this.itxt_toolCount ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_tools.txt_tools, new m.LocalizedNumberVO(0));
    this.itxt_costValue ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_costValue, new O.TextVO(""));
    this.itxt_noTroops ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_noTroops, new f.LocalizedTextVO("dialog_attack_noSpace"));
    this.i_iTime_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_infoTime.txt_value, new O.TextVO(""));
    this.itxt_foodConsumption ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_food.txt_food, new m.LocalizedNumberVO(0));
    this.itxt_meadConsumption ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_mead.txt_food, new m.LocalizedNumberVO(0));
    this.itxt_beefConsumption ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_beef.txt_food, new m.LocalizedNumberVO(0));
    this.lockDialog();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_help, new f.LocalizedTextVO(this.dialogProperties.descriptionTextID));
    this.i_iTime_txt_value.textContentVO.stringValue = c.TimeStringHelper.getTimeToString(this.dialogProperties.unitTravelTime, c.TimeStringHelper.TWO_TIME_FORMAT, _.Localize.text);
    this.dialogDisp.mc_infoTime.visible = this.dialogProperties.unitTravelTime > 0;
    this.dialogDisp.mc_costs.visible = this.dialogProperties.unitTravelTaxRate > 0;
    this._castleSelector.castleList.disp.addEventListener(a.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this._castleSelector.initComponent(x.CastleModel.otherPlayerData.getOwnInfoVO(), x.CastleModel.userData.castleList, null, this.dialogProperties.exceptingKingdomID);
    this.controller.addEventListener(L.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDataUpdated));
    x.CastleModel.specialEventData.addEventListener(M.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    this.controller.addEventListener(v.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
    x.CastleModel.treasureMapData.addEventListener(R.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapUpdated));
    this.controller.addEventListener(P.CastleMilitaryDataEvent.UNIT_UPDATED, this.bindFunction(this.onMilitaryUpdated));
    this.controller.addEventListener(S.CastleUnitCapacityEvent.UNIT_CAPACITY_CHANGED, this.bindFunction(this.onUnitCapacity));
    for (var n = 0, o = this.dialogProperties.additionalDataUpdateCommands; n < o.length; n++) {
      var r = o[n];
      if (r !== undefined) {
        x.CastleModel.smartfoxClient.sendCommandVO(r);
      }
    }
    x.CastleModel.smartfoxClient.sendCommandVO(new I.C2SSpecialEventInfoVO());
    x.CastleModel.smartfoxClient.sendCommandVO(new T.C2SGetDetailedCastleListVO(0));
    this.dialogDisp.mc_costs.txt_costValue.text = "0";
    this._destinationCapacity = E.int(this.dialogProperties.targetCapacity);
    w.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
    this.dialogDisp.btn_ok.toolTipText = null;
    this.targetCapacityArrived = true;
    this.updateInventories();
    this.setCostsAndFillItems();
    this._unitSelection.disp.addEventListener(A.CastleInventoryComponentEvent.SCROLL_INVENTORY, this.bindFunction(this.onScrollInventory));
    this._castleInventory.disp.addEventListener(A.CastleInventoryComponentEvent.SCROLL_INVENTORY, this.bindFunction(this.onScrollInventory));
  };
  CastleTransferTroopsDialog.prototype.onEilandReset = function (e) {
    if (this.dialogProperties.isSpecialEvent(g.EventConst.EVENTTYPE_ISLAND_KINGDOM)) {
      this.hide();
    }
  };
  CastleTransferTroopsDialog.prototype.onSpecialEventRemoved = function (e) {
    if (this.dialogProperties.isSpecialEvent(e.specialEventVO.eventId)) {
      this.hide();
    }
  };
  CastleTransferTroopsDialog.prototype.onTreasureMapUpdated = function (e) {
    this._destinationCapacity = E.int(this.dialogProperties.targetCapacity);
    this.updateData();
  };
  CastleTransferTroopsDialog.prototype.onDataUpdated = function (e) {
    this.unLockDialog();
    this.updateData();
  };
  CastleTransferTroopsDialog.prototype.onMilitaryUpdated = function (e) {
    this.updateData();
  };
  CastleTransferTroopsDialog.prototype.updateData = function () {
    var e = this._selectionInventory.getUnits(null);
    this.updateInventories();
    if (e.length > 0) {
      this.restoreSelection(e);
    } else {
      this.fillItems();
    }
  };
  CastleTransferTroopsDialog.prototype.restoreSelection = function (e) {
    for (var t = 0; t < e.length; t++) {
      if (h.instanceOfClass(e[t], "BasicUnitVO")) {
        this.changeItemAmount([e[t], e[t].inventoryAmount]);
      }
    }
  };
  CastleTransferTroopsDialog.prototype.onSelectCastle = function (e = null) {
    this.updateInventories();
    this.fillItems();
    this.itxt_costValue.textContentVO = new m.LocalizedNumberVO(this.travelCostC1);
    this.dialogDisp.mc_kingdomCrest.gotoAndStop(this._castleSelector.selectedCastleVO.kingdomID + 1);
  };
  CastleTransferTroopsDialog.prototype.onUnitCapacity = function (e) {
    this.targetCapacityArrived = true;
    this.controller.removeEventListener(S.CastleUnitCapacityEvent.UNIT_CAPACITY_CHANGED, this.bindFunction(this.onUnitCapacity));
    this._destinationCapacity = e.capacity;
    this.updateData();
  };
  CastleTransferTroopsDialog.prototype.updateInventories = function () {
    this._selectionInventory = new G.UnitInventoryDictionary();
    this._sourceInventory = new G.UnitInventoryDictionary();
    var e = x.CastleModel.userCastleListDetailed.getVObyCastleID(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID);
    if (e) {
      var t = new G.UnitInventoryDictionary();
      t.addAll(e.unitInventory.getUnits(null));
      t.addAll(e.strongholdUnitInventory.getUnits(null));
      this._originalInventory = new G.UnitInventoryDictionary();
      this._originalInventory.addAll(t.getUnits(null));
      this._sourceInventory = new G.UnitInventoryDictionary();
      this._sourceInventory.addAll(this._originalInventory.getUnits(null));
      this.removeNotSendAbleTools();
    }
  };
  CastleTransferTroopsDialog.prototype.removeNotSendAbleTools = function () {
    this._sourceInventory.retainAll(this.bindFunction(function (e) {
      return !u.castAs(e, "ToolUnitVO") || !!this.dialogProperties.isToolTravelingAllowed(e);
    }));
  };
  CastleTransferTroopsDialog.prototype.fillItems = function () {
    this.itxt_noTroops.visible = false;
    var e = E.int(this._selectionInventory.getSoldierCount());
    var t = e >= this._destinationCapacity;
    var i = e > this._destinationCapacity;
    var n = p.getDefinitionByName("TransferTroopsInventoryItem");
    if (this._unitSelection) {
      this._unitSelection.updateInventory(this._selectionInventory.getUnits(null), t ? null : this.getSoldiersNotInSelection(false));
    } else {
      this._unitSelection = new j.CastleInventoryComponent(this.dialogDisp.mc_selection, CastleTransferTroopsDialog.ITEMS_PER_PAGE, this._selectionInventory.getUnits(null), n, 48, 60, true, null, 0, 6, 25);
      this._unitSelection.enableMouseWheel();
    }
    this._unitSelection.disp.addEventListener(A.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickSelectionItem));
    if (this._castleInventory) {
      if (t) {
        if (this._destinationCapacity == 0) {
          this.itxt_noTroops.visible = true;
          this._castleInventory.updateInventory(this.getFilteredUnits(this._sourceInventory), this.getFilteredUnits(this._sourceInventory));
        } else {
          this._castleInventory.updateInventory(this.getFilteredUnits(this._sourceInventory), this.getSoldiersNotInSelection(true));
        }
      } else {
        this._castleInventory.updateInventory(this.getFilteredUnits(this._sourceInventory));
      }
    } else {
      this._castleInventory = new j.CastleInventoryComponent(this.dialogDisp.mc_inventory, CastleTransferTroopsDialog.ITEMS_PER_PAGE, this.getFilteredUnits(this._sourceInventory), n, 48, 60, true, null, 0, 6, 25);
      this._castleInventory.enableMouseWheel();
    }
    this._castleInventory.disp.addEventListener(A.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickInventoryItem));
    if (this.targetCapacityArrived) {
      if (this._destinationCapacity < Number.MAX_VALUE) {
        this.itxt_unitCount = this.textFieldManager.registerTextField(this.dialogDisp.mc_limit.txt_unitCount, new f.LocalizedTextVO(l.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this._selectionInventory.getSoldierCount().toString(), this._destinationCapacity]));
        this.itxt_unitCount.color = t ? b.ClientConstColor.FONT_INSUFFICIENT_COLOR : b.ClientConstColor.FONT_DEFAULT_COLOR;
        w.ButtonHelper.enableButton(this.dialogDisp.btn_ok, !i);
        this.dialogDisp.btn_ok.toolTipText = this.dialogDisp.btn_ok.enabled ? null : "dialog_season_unitCapacityFull";
      } else {
        this.itxt_unitCount = this.textFieldManager.registerTextField(this.dialogDisp.mc_limit.txt_unitCount, new m.LocalizedNumberVO(this._selectionInventory.getSoldierCount()));
        this.itxt_unitCount.color = b.ClientConstColor.FONT_DEFAULT_COLOR;
      }
    } else {
      this.itxt_unitCount = this.textFieldManager.registerTextField(this.dialogDisp.mc_limit.txt_unitCount, new O.TextVO(""));
    }
    this.itxt_toolCount.textContentVO.numberValue = this._selectionInventory.getToolCount();
    var o = this.getSelectionFoodConsumption();
    this.itxt_foodConsumption.textContentVO.numberValue = o;
    this.itxt_foodConsumption.color = o < 0 ? b.ClientConstColor.FONT_INSUFFICIENT_COLOR : b.ClientConstColor.FONT_DEFAULT_COLOR;
    var a = this.getSelectionMeadConsumption();
    this.itxt_meadConsumption.textContentVO.numberValue = a;
    this.itxt_meadConsumption.color = a < 0 ? b.ClientConstColor.FONT_INSUFFICIENT_COLOR : b.ClientConstColor.FONT_DEFAULT_COLOR;
    var s = this.getSelectionBeefConsumption();
    this.itxt_beefConsumption.textContentVO.numberValue = s;
    this.itxt_beefConsumption.color = s < 0 ? b.ClientConstColor.FONT_INSUFFICIENT_COLOR : b.ClientConstColor.FONT_DEFAULT_COLOR;
    this.updateInfoButtons();
  };
  CastleTransferTroopsDialog.prototype.getSelectionFoodConsumption = function () {
    var e = 0;
    for (var t = 0, i = this._selectionInventory.getSoldiers(); t < i.length; t++) {
      var n = i[t];
      e -= n.foodSupply * n.inventoryAmount;
    }
    return e;
  };
  CastleTransferTroopsDialog.prototype.getSelectionMeadConsumption = function () {
    var e = 0;
    for (var t = 0, i = this._selectionInventory.getSoldiers(); t < i.length; t++) {
      var n = i[t];
      e -= n.meadSupply * n.inventoryAmount;
    }
    return e;
  };
  CastleTransferTroopsDialog.prototype.getSelectionBeefConsumption = function () {
    var e = 0;
    for (var t = 0, i = this._selectionInventory.getSoldiers(); t < i.length; t++) {
      var n = i[t];
      e -= n.beefSupply * n.inventoryAmount;
    }
    return e;
  };
  CastleTransferTroopsDialog.prototype.getFilteredUnits = function (e) {
    var t;
    var i;
    var n = 0;
    switch (this._currentFilter) {
      case CastleTransferTroopsDialog.FILTER_ALL:
      case CastleTransferTroopsDialog.FILTER_UNITS_MEAD:
        t = e.getUnits(null);
        break;
      case CastleTransferTroopsDialog.FILTER_UNITS_ATTACK:
        t = e.getOffensiveSoldiers(false);
        break;
      case CastleTransferTroopsDialog.FILTER_UNITS_DEFENCE:
        t = e.getDefensiveSoldiers(false);
        break;
      case CastleTransferTroopsDialog.FILTER_TOOLS_ATTACK:
        t = e.getUnitsByType(y.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK);
        break;
      case CastleTransferTroopsDialog.FILTER_TOOLS_DEFENCE:
        t = e.getUnitsByType(y.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE);
    }
    if (this._currentFilter == CastleTransferTroopsDialog.FILTER_UNITS_MEAD) {
      for (i = []; n < t.length; n++) {
        if (t[n].meadSupply > 0 || t[n].beefSupply > 0) {
          i.push(t[n]);
        }
      }
    }
    if (h.instanceOfClass(this.dialogProperties, "CastleTransferTroopsToKingdomProperties") && this.dialogProperties.targetKingdomVO.kID == g.FactionConst.KINGDOM_ID) {
      t = i || t;
      i = [];
      n = 0;
      for (; n < t.length; n++) {
        if (t[n].meadSupply <= 0 && t[n].beefSupply <= 0) {
          i.push(t[n]);
        }
      }
    }
    if (h.instanceOfClass(this.dialogProperties, "CastleTransferTroopsToSeasonProperties")) {
      t = i || t;
      i = [];
      n = 0;
      for (; n < t.length; n++) {
        if (t[n].meadSupply <= 0 && t[n].beefSupply <= 0) {
          i.push(t[n]);
        }
      }
    }
    return i || t;
  };
  CastleTransferTroopsDialog.prototype.getSoldiersNotInSelection = function (e) {
    var t = [];
    var i = e ? this.getFilteredUnits(this._sourceInventory) : this._sourceInventory.getUnits(null);
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && h.instanceOfClass(a, "SoldierUnitVO") && this._selectionInventory.getUnitCountByWodId(a.wodId) == 0) {
          t.push(a);
        }
      }
    }
    return t;
  };
  CastleTransferTroopsDialog.prototype.onClickSelectionItem = function (e) {
    this.openSelectDialog(e.unitVO);
  };
  CastleTransferTroopsDialog.prototype.onClickInventoryItem = function (e) {
    this.openSelectDialog(e.unitVO);
  };
  CastleTransferTroopsDialog.prototype.openSelectDialog = function (e) {
    if (!this.isLocked) {
      var t = E.int(Math.max(0, this._selectionInventory.getUnitCountByWodId(e.wodId)));
      var i = 0;
      if (this._destinationCapacity != 0) {
        if (h.instanceOfClass(e, "ToolUnitVO")) {
          i = E.int(this._originalInventory.getUnitCountByWodId(e.wodId));
        } else {
          var n = E.int(this._destinationCapacity - this._selectionInventory.getSoldierCount() + this._selectionInventory.getUnitCountByWodId(e.wodId));
          if (n <= 0) {
            return;
          }
          i = E.int(Math.min(Math.max(0, this._originalInventory.getUnitCountByWodId(e.wodId)), n));
        }
        H.CastleDialogHandler.getInstance().registerDefaultDialogs(this.dialogProperties.addUnitsDialogKey, new k.CastleSendTroopsAddUnitsDialogProperties(t, i, e, this.bindFunction(this.changeItemAmount)));
      }
    }
  };
  CastleTransferTroopsDialog.prototype.changeItemAmount = function (e) {
    var t = e.shift();
    var i = E.int(this._originalInventory.getUnitCountByWodId(t.wodId));
    var n = E.int(Math.min(e.shift(), i));
    this._selectionInventory.setUnit(t.wodId, n);
    this._sourceInventory.setUnit(t.wodId, i - n);
    this.setCostsAndFillItems();
  };
  CastleTransferTroopsDialog.prototype.setCostsAndFillItems = function () {
    this.itxt_costValue.textContentVO = new m.LocalizedNumberVO(this.travelCostC1);
    this.insufficientFunds = x.CastleModel.currencyData.c1Amount < this.travelCostC1;
    this.itxt_costValue.color = this.insufficientFunds ? b.ClientConstColor.FONT_INSUFFICIENT_COLOR : b.ClientConstColor.FONT_DEFAULT_COLOR;
    this.fillItems();
  };
  Object.defineProperty(CastleTransferTroopsDialog.prototype, "travelCostC1", {
    get: function () {
      var e = this._selectionInventory.getUnits(null);
      var t = 0;
      if (e != null) {
        for (var i = 0, n = e; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined) {
            if (h.instanceOfClass(o, "SoldierUnitVO")) {
              t += o.kingdomTravellingCost * (this.dialogProperties.unitTravelTaxRate / 100) * this._selectionInventory.getUnitCountByWodId(o.wodId);
            } else {
              t += C.TravelConst.KINGDOM_TOOL_TRAVEL_COST_C1 * (this.dialogProperties.unitTravelTaxRate / 100) * this._selectionInventory.getUnitCountByWodId(o.wodId);
            }
          }
        }
      }
      t = Math.round(t);
      return x.CastleModel.costsData.getFinalCostsC1(t);
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferTroopsDialog.prototype.onClick = function (e) {
    if (w.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancle:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.sendUnits();
          break;
        case this.dialogDisp.tab_all:
          this.currentFilter = CastleTransferTroopsDialog.FILTER_ALL;
          break;
        case this.dialogDisp.tab_attackUnits:
          this.currentFilter = CastleTransferTroopsDialog.FILTER_UNITS_ATTACK;
          break;
        case this.dialogDisp.tab_defenceUnits:
          this.currentFilter = CastleTransferTroopsDialog.FILTER_UNITS_DEFENCE;
          break;
        case this.dialogDisp.tab_meadUnits:
          this.currentFilter = CastleTransferTroopsDialog.FILTER_UNITS_MEAD;
          break;
        case this.dialogDisp.tab_attackTools:
          this.currentFilter = CastleTransferTroopsDialog.FILTER_TOOLS_ATTACK;
          break;
        case this.dialogDisp.tab_defenceTools:
          this.currentFilter = CastleTransferTroopsDialog.FILTER_TOOLS_DEFENCE;
          break;
        case this.dialogDisp.mc_selection.btn_leftArrow:
        case this.dialogDisp.mc_selection.btn_rightArrow:
        case this.dialogDisp.mc_inventory.btn_leftArrow:
        case this.dialogDisp.mc_inventory.btn_rightArrow:
          this.updateInfoButtons();
      }
      for (var t = 0; t < CastleTransferTroopsDialog.ITEMS_PER_PAGE; t++) {
        if (e.target == this.dialogDisp.mc_selection["btn_info" + t]) {
          this.showUnitInfo(t, this._unitSelection);
        } else if (e.target == this.dialogDisp.mc_inventory["btn_info" + t]) {
          this.showUnitInfo(t, this._castleInventory);
        }
      }
    }
  };
  CastleTransferTroopsDialog.prototype.updateInfoButtons = function () {
    for (var e = 0; e < CastleTransferTroopsDialog.ITEMS_PER_PAGE; e++) {
      this.dialogDisp.mc_selection["btn_info" + e].visible = e + this._unitSelection.inventoryCurrentPage * CastleTransferTroopsDialog.ITEMS_PER_PAGE < this._unitSelection.inventoryLength;
      this.dialogDisp.mc_inventory["btn_info" + e].visible = e + this._castleInventory.inventoryCurrentPage * CastleTransferTroopsDialog.ITEMS_PER_PAGE < this._castleInventory.inventoryLength;
    }
  };
  CastleTransferTroopsDialog.prototype.showUnitInfo = function (e, t) {
    var i = t.inventoryArray[t.inventoryCurrentPage * CastleTransferTroopsDialog.ITEMS_PER_PAGE + e];
    F.CastleExternalDialog.dialogHandler.registerDefaultDialogs(q.CastleRecruitInfoDialog, new N.CastleRecruitInfoDialogProperties(i));
  };
  CastleTransferTroopsDialog.prototype.sendUnits = function () {
    if (this._selectionInventory.getUnitCount(null) > 0) {
      if (this._selectionInventory.getSoldierCount() == 0) {
        H.CastleDialogHandler.getInstance().registerDefaultDialogs(Y.CastleCharacterYesNoOKDialog, new B.CastleCharacterYesNoOKDialogProperties(_.Localize.text("generic_alert_watchout"), _.Localize.text("dialog_attack_noUnits"), 4, null, null, false));
      } else if (this.dialogProperties.insufficentTimeAlert) {
        H.CastleDialogHandler.getInstance().registerDefaultDialogs(z.CastleStandardYesNoDialog, new r.BasicStandardYesNoDialogProperties(_.Localize.text("generic_alert_information"), _.Localize.text("alert_season_sendTroops_insufficentTime"), this.bindFunction(this.sendUnitsCommand), this.bindFunction(this.dontSendUnitsCommand)));
      } else {
        this.sendUnitsCommand();
      }
    } else {
      H.CastleDialogHandler.getInstance().registerDefaultDialogs(K.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties(_.Localize.text("generic_alert_information"), _.Localize.text("dialog_attack_noUnits")));
    }
  };
  CastleTransferTroopsDialog.prototype.sendUnitsCommand = function (e = null) {
    x.CastleModel.smartfoxClient.sendCommandVO(this.dialogProperties.getUnitTransferCommand(this._castleSelector, this._selectionInventory.getAsWodAmountArray(), null));
    if (!this.insufficientFunds) {
      this.hide();
    }
  };
  CastleTransferTroopsDialog.prototype.dontSendUnitsCommand = function (e = null) {
    this.hide();
  };
  CastleTransferTroopsDialog.prototype.removeEventListenerOnHide = function () {
    x.CastleModel.specialEventData.removeEventListener(M.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    if (this._castleSelector) {
      this._castleSelector.disp.removeEventListener(a.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    }
    this.controller.removeEventListener(v.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
    this.controller.removeEventListener(L.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(S.CastleUnitCapacityEvent.UNIT_CAPACITY_CHANGED, this.bindFunction(this.onUnitCapacity));
    this.controller.removeEventListener(P.CastleMilitaryDataEvent.UNIT_UPDATED, this.bindFunction(this.onMilitaryUpdated));
    if (this._unitSelection) {
      this._unitSelection.disp.removeEventListener(A.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickSelectionItem));
    }
    if (this._castleInventory) {
      this._castleInventory.disp.removeEventListener(A.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickInventoryItem));
    }
    x.CastleModel.treasureMapData.removeEventListener(R.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapUpdated));
    if (this._unitSelection) {
      this._unitSelection.disp.removeEventListener(A.CastleInventoryComponentEvent.SCROLL_INVENTORY, this.bindFunction(this.onScrollInventory));
    }
    if (this._castleInventory) {
      this._castleInventory.disp.removeEventListener(A.CastleInventoryComponentEvent.SCROLL_INVENTORY, this.bindFunction(this.onScrollInventory));
    }
    if (this._unitSelection) {
      this._unitSelection.onHide();
    }
    if (this._castleInventory) {
      this._castleInventory.onHide();
    }
  };
  CastleTransferTroopsDialog.prototype.onScrollInventory = function (e) {
    this.updateInfoButtons();
  };
  CastleTransferTroopsDialog.prototype.destroy = function () {
    if (this._castleInventory) {
      this._castleInventory.destroy();
      this._castleInventory = null;
    }
    if (this._unitSelection) {
      this._unitSelection.destroy();
      this._unitSelection = null;
    }
    this.itxt_unitCount = null;
    this.itxt_costValue = null;
    this.itxt_noTroops = null;
    e.prototype.destroy.call(this);
  };
  Object.defineProperty(CastleTransferTroopsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsDialog.prototype, "currentFilter", {
    set: function (e) {
      this._currentFilter = e;
      this.fillItems();
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferTroopsDialog.NAME = "CastleSendTroopsToSeason_R";
  CastleTransferTroopsDialog.FILTER_ALL = 0;
  CastleTransferTroopsDialog.FILTER_UNITS_ATTACK = 1;
  CastleTransferTroopsDialog.FILTER_UNITS_MEAD = 5;
  CastleTransferTroopsDialog.FILTER_UNITS_DEFENCE = 2;
  CastleTransferTroopsDialog.FILTER_TOOLS_ATTACK = 3;
  CastleTransferTroopsDialog.FILTER_TOOLS_DEFENCE = 4;
  CastleTransferTroopsDialog.ITEMS_PER_PAGE = 9;
  return CastleTransferTroopsDialog;
}(F.CastleExternalDialog);
exports.CastleTransferTroopsDialog = U;
var G = require("./156.js");
var H = require("./9.js");
var j = require("./378.js");
var W = require("./321.js");
var Y = require("./238.js");
var K = require("./38.js");
var z = require("./151.js");
var q = require("./115.js");
d.classImplementsInterfaces(U, "ICollectableRendererList");