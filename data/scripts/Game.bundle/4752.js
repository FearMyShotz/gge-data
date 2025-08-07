Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./100.js");
var a = require("./1.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./1.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./5.js");
var m = require("./3.js");
var f = require("./3.js");
var O = require("./3.js");
var E = require("./3.js");
var y = require("./6.js");
var b = require("./18.js");
var D = require("./16.js");
var I = require("./21.js");
var T = require("./169.js");
var v = require("./119.js");
var S = require("./139.js");
var A = require("./44.js");
var L = require("./4.js");
var P = require("./713.js");
var M = require("./581.js");
var R = require("./619.js");
var V = require("./620.js");
var x = require("./757.js");
var w = require("./708.js");
var B = require("./68.js");
var F = require("./42.js");
var N = require("./8.js");
var k = require("./584.js");
var U = require("./236.js");
var G = require("./376.js");
var H = require("./351.js");
var j = function (e) {
  function CastleSupportDefenceDialog() {
    var t = this;
    t._remainingTimeForSupportDefenseSpeedBuff = 0;
    t._remainingTimeForSupportDefensePowerBuff = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleSupportDefenceDialog.NAME) || this;
  }
  n.__extends(CastleSupportDefenceDialog, e);
  CastleSupportDefenceDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.bottomMenu.btn_cat_keep.visible = false;
    this.bottomMenu.btn_cat_wall.visible = false;
    this.bottomMenu.btn_cat_gate.visible = false;
    this.bottomMenu.btn_cat_field.visible = false;
    this.bottomMenu.btn_cat_moat.visible = false;
    this.bottomMenu.btn_cat_tools.visible = false;
    this.bottomMenu.btn_toolLimit.visible = false;
    this.supportDefenceDialog.unitConnector.visible = false;
    this.bottomMenu.btn_tactics.toolTipText = "panel_deco_military";
    this.supportDefenceDialog.btn_help.toolTipText = "generic_help";
    this.supportDefenceDialog.mc_supportItemHolder.icon_meleeDefence.toolTipText = "meleedefence";
    this.supportDefenceDialog.mc_supportItemHolder.icon_rangeDefence.toolTipText = "rangedefence";
    this.supportDefenceDialog.mc_supportItemHolder.icon_amount.toolTipText = "panel_fight_unitCount";
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_amount.toolTipText = "panel_fight_unitCount";
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_combat_melee.toolTipText = "meleedefence";
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_combat_range.toolTipText = "rangedefence";
    this.supportDefenceDialog.mc_supportLimit.mc_wallCapacity.toolTipText = "dialog_defence_unitsOnAllWalls";
    this.supportDefenceDialog.mc_supportLimit.mc_wallCapacity.mouseChildren = false;
    this.supportDefenceDialog.mc_supportLimit.mc_yardCapacity.toolTipText = "panel_fight_unitsInCourtyard_limit_tooltip";
    this.supportDefenceDialog.mc_supportLimit.mc_yardCapacity.mouseChildren = false;
    this.supportDefenceDialog.mc_supportLimit.mc_supportCapcaity.toolTipText = "dialog_support_allianceDefenseUnitAmount";
    this.supportDefenceDialog.mc_supportLimit.mc_supportCapcaity.mouseChildren = false;
    this._advancedFightScreenHelper = new Z.CastleAdvancedSupportDefenceDialogHelper(this);
    this.itxt_castlename = this.textFieldManager.registerTextField(this.userInfoMenu.txt_castlename, new m.TextVO(""));
    this.i_itemHolder_txt_amount = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.txt_amount, new O.LocalizedNumberVO(0));
    this.i_itemHolder_txt_combatRangeDefence = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.txt_combatRangeDefence, new O.LocalizedNumberVO(0));
    this.i_itemHolder_txt_combatMeleeDefence = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.txt_combatMeleeDefence, new O.LocalizedNumberVO(0));
    this.i_compOpt_cost_txt_value = this.textFieldManager.registerTextField(this.bottomMenu.component_Options.info_cost.txt_value, new O.LocalizedNumberVO(0));
    this.i_compOpt_time_txt_value = this.textFieldManager.registerTextField(this.bottomMenu.component_Options.info_time.txt_value, new m.TextVO(""));
    this._itxt_wallCapacity = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportLimit.mc_wallCapacity.text_wallCapacity, new E.LocalizedTextVO(l.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    this._itxt_yardCapacity = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportLimit.mc_yardCapacity.txt_yardCapacity, new E.LocalizedTextVO(l.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    this._itxt_supportCapacity = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportLimit.mc_supportCapcaity.txt_supportCapcaity, new E.LocalizedTextVO(l.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    this.supportDefenceDialog.mc_townshipSupport.toolTipText = "dialog_townshipDefense_supportOverview_tooltip";
    N.ButtonHelper.initBasicButton(this.supportDefenceDialog.mc_townshipSupport);
  };
  CastleSupportDefenceDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.showTactics();
    var i = L.CastleModel.allianceData.myAllianceVO;
    if (i) {
      this._remainingTimeForSupportDefenseSpeedBuff = y.int(i.getRemainingBoostDuration(h.AllianceConst.TYPE_TEMP_DEFENSE_SPEED_BOOST));
      this._remainingTimeForSupportDefensePowerBuff = y.int(i.getRemainingBoostDuration(h.AllianceConst.TYPE_TEMP_DEFENSE_POWER_BOOST));
    }
  };
  CastleSupportDefenceDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    if (this._remainingTimeForSupportDefenseSpeedBuff > 0 || this._remainingTimeForSupportDefensePowerBuff > 0) {
      L.CastleModel.timerData.addEventListener(I.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
    }
    this.controller.addEventListener(S.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onSupportChanged));
    this.controller.addEventListener(v.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.updateSelectedLord));
  };
  CastleSupportDefenceDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.onSupportDefenceInfos();
  };
  CastleSupportDefenceDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    L.CastleModel.timerData.removeEventListener(I.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
    this.controller.removeEventListener(S.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onSupportChanged));
    this.controller.removeEventListener(v.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.updateSelectedLord));
  };
  CastleSupportDefenceDialog.prototype.onAutoFillAllWavesClicked = function () {
    new z.StrongestDefenceSupportFlankStrategy().fillFlankWithSoldiers(this.supportDefenceVO.supportUnits, null, null, this.supportDefenceVO.unitInventory, new P.AutoFillOptions());
    this.refreshElements();
  };
  CastleSupportDefenceDialog.prototype.onAutoFillCurrentWaveClicked = function () {
    new z.StrongestDefenceSupportFlankStrategy().fillFlankWithSoldiers(this.supportDefenceVO.supportUnits, null, null, this.supportDefenceVO.unitInventory, new P.AutoFillOptions());
    this.refreshElements();
  };
  CastleSupportDefenceDialog.prototype.setAppearanceFightButton = function () {
    e.prototype.setAppearanceFightButton.call(this);
    this.bottomMenu.btn_close.toolTipText = "ringmenu_supportDefence";
    var t = this.textFieldManager.registerTextField(this.bottomMenu.btn_close.txt_name, new E.LocalizedTextVO("ringmenu_supportDefence"));
    t.autoFitToBounds = true;
    t.verticalAlign = F.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    var i = this.properties.supportDefenceVO.unitInventory.getDefensiveSoldierCount(false) > 0;
    this.autoFill.setActive(true, true, i);
  };
  Object.defineProperty(CastleSupportDefenceDialog.prototype, "supportDefenceVO", {
    get: function () {
      return this._fightScreenVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleSupportDefenceDialog.prototype.onSecondTimer = function (e) {
    if (this._remainingTimeForSupportDefenseSpeedBuff > 0) {
      this._remainingTimeForSupportDefenseSpeedBuff--;
      if (this._remainingTimeForSupportDefenseSpeedBuff == 0) {
        this.updateArrivalTime();
      }
    }
    if (this._remainingTimeForSupportDefensePowerBuff > 0) {
      this._remainingTimeForSupportDefensePowerBuff--;
      if (this._remainingTimeForSupportDefensePowerBuff == 0) {
        this.updateUnitStrength();
      }
    }
    if (this._remainingTimeForSupportDefenseSpeedBuff == 0 && this._remainingTimeForSupportDefensePowerBuff == 0) {
      L.CastleModel.timerData.removeEventListener(I.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
    }
  };
  CastleSupportDefenceDialog.prototype.onSupportDefenceInfos = function () {
    this._fightScreenVO = this.properties.supportDefenceVO;
    this._unitMixedInventory = this.supportDefenceVO.unitInventory;
    this._unitMixedInventory.addAll(this.supportDefenceVO.strongholdUnitInventory.getUnits(null));
    $.CrestHelper.setCrestGraphics(this.supportDefenceDialog.myCrest, this._fightScreenVO.sourceOwnerCrestVO);
    this.showPlayerOrAllianceCrest(this.supportDefenceDialog.targetCrest, this._fightScreenVO.targetOwnerCrestVO, this.targetArea);
    this.itxt_castlename.textContentVO.stringValue = this._fightScreenVO.sourceArea.areaNameString;
    this.showUserLevel();
    this.showPlayerInfo(this._fightScreenVO.targetArea, this._fightScreenVO.targetOwnerLevel);
    this.setShopCategory(G.CastleFightDialog.SHOP_CATEGORY_UNITS_DEF);
    this.bottomMenu.component_Options.wavePicker.visible = false;
    this.drawAreaVO();
    this.initLordPicker();
    this.hidePresetPicker();
    this.fillItems();
    this.showTownshipSupportInfo();
    this.showCapacities();
  };
  CastleSupportDefenceDialog.prototype.showTownshipSupportInfo = function () {
    if (w.instanceOf_ISupportCapacityVO(this.targetArea)) {
      var e = this.targetArea;
      this.bottomMenu.component_Options.mc_townshipSupport.visible = true;
      this.bottomMenu.component_Options.mc_townshipSupport.mouseChildren = false;
      var t = y.int(this.supportDefenceVO.getUnitCountFromSupportMovements());
      var i = y.int(this.supportDefenceVO.getSumOfUnits() + t);
      var n = e.supportCapacity;
      var o = this.textFieldManager.registerTextField(this.bottomMenu.component_Options.mc_townshipSupport.info_defenceCount.txt_value, new E.LocalizedTextVO(l.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [i, n]));
      o.autoFitToBounds = true;
      o.verticalAlign = F.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      if (i >= n) {
        o.color = D.ClientConstColor.FONT_INSUFFICIENT_COLOR;
        this.bottomMenu.component_Options.mc_townshipSupport.icon_warning.visible = true;
        this.bottomMenu.component_Options.mc_townshipSupport.toolTipText = e.supportCapacityReachedToolTipID;
      } else {
        o.color = D.ClientConstColor.FONT_DEFAULT_COLOR;
        this.bottomMenu.component_Options.mc_townshipSupport.icon_warning.visible = false;
        this.bottomMenu.component_Options.mc_townshipSupport.toolTipText = e.supportCapacityToolTipID;
      }
      if (y.int(this.supportDefenceVO.getMyUnitCountFromSupportMovements()) == 0) {
        this.dialogDisp.mc_townshipSupport.toolTipText = e.supportOverviewNoTroopsToolTipID;
        N.ButtonHelper.enableButton(this.dialogDisp.mc_townshipSupport, false);
      } else {
        N.ButtonHelper.enableButton(this.dialogDisp.mc_townshipSupport, true);
        this.dialogDisp.mc_townshipSupport.toolTipText = e.supportOverviewToolTip;
      }
    } else {
      this.bottomMenu.component_Options.mc_townshipSupport.visible = false;
      if (this.dialogDisp.mc_townshipSupport) {
        this.dialogDisp.mc_townshipSupport.visible = false;
      }
    }
  };
  CastleSupportDefenceDialog.prototype.onSupportChanged = function (e) {
    if (w.instanceOf_ISupportCapacityVO(this.targetArea)) {
      this.showTownshipSupportInfo();
    }
  };
  CastleSupportDefenceDialog.prototype.showSpyInfo = function (t, i, n = true, o = false, a = false, s = false, r = true) {
    if (!re.instanceOfClass(this.targetArea, "DaimyoTownshipMapObjectVO")) {
      e.prototype.showSpyInfo.call(this, t, i, n, o, a, s, r);
    }
  };
  CastleSupportDefenceDialog.prototype.initLordPicker = function (e = 0) {
    this.lordPickerMc.visible = true;
    if (this._lordPicker) {
      this._lordPicker.destroy();
    }
    if (this.targetArea.areaType == g.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) {
      var t = L.CastleModel.userData.castleList.getMainCastleByKingdomID(C.WorldClassic.KINGDOM_ID);
      var i = L.CastleModel.lordData.getBaronByCastleId(t.objectId);
      var n = [];
      n.push(i);
      this._lordPicker = new J.CastleLordPicker(this.lordPickerMc, n, true, true, true);
      this.lordPickerMc.mc_lordCombobox.toolTipText = "dialog_townshipSupport_castellan_tooltip";
    } else {
      var o = this.getLordsWithPremiumCommander();
      this._lordPicker = new J.CastleLordPicker(this.lordPickerMc, o, this._fightScreenVO.isConquerAttack, false, true);
      this.lordPickerMc.mc_lordCombobox.toolTipText = null;
    }
    this._lordPicker.selectedIndex = e;
    this._lordPicker.addEventListener(T.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onSelectedLordChanged));
    this.updateSelectedLord();
    this.updateLordPickerTooltip();
  };
  CastleSupportDefenceDialog.prototype.fillItems = function () {
    this._allContainerOnScreen = [];
    this.fillItemContainer(this.supportDefenceDialog.mc_supportItemHolder.mc_supportItems, this.supportDefenceVO.supportUnits, 10, 43);
    this.i_itemHolder_txt_amount.textContentVO.numberValue = this.supportDefenceVO.supportUnits.sumOfItems;
    this.onSelectedLordChanged(null);
  };
  CastleSupportDefenceDialog.prototype.onSelectedLordChanged = function (e = null) {
    this.updateSelectedLord();
    this.i_compOpt_cost_txt_value.textContentVO.numberValue = this.supportDefenceVO.getTravelCost(this.getSelectedLordVO());
    this.updateUnitStrength();
    this.updateArrivalTime();
    this.i_compOpt_cost_txt_value.color = this.supportDefenceVO.getTravelCost(this.getSelectedLordVO()) > L.CastleModel.currencyData.c1Amount ? D.ClientConstColor.FONT_INSUFFICIENT_COLOR : D.ClientConstColor.FONT_DEFAULT_COLOR;
    this.updateLordPickerTooltip();
  };
  CastleSupportDefenceDialog.prototype.updateUnitStrength = function () {
    this.i_itemHolder_txt_combatRangeDefence.textContentVO.numberValue = this.supportDefenceVO.supportUnits.getDefenceRangeValue(this.getSelectedLordVO(), this._fightScreenVO.targetArea);
    this.i_itemHolder_txt_combatMeleeDefence.textContentVO.numberValue = this.supportDefenceVO.supportUnits.getDefenceMeleeValue(this.getSelectedLordVO(), this._fightScreenVO.targetArea);
  };
  CastleSupportDefenceDialog.prototype.updateArrivalTime = function () {
    this.i_compOpt_time_txt_value.textContentVO.stringValue = u.TimeStringHelper.getShortTimeStringBySeconds(this.supportDefenceVO.getTravelTime(this._fightScreenVO.targetArea, this.getSelectedLordVO()));
  };
  CastleSupportDefenceDialog.prototype.fillItemContainer = function (e, t, i, n) {
    d.MovieClipHelper.clearMovieClip(e.mc_items);
    for (var o = 0; o < t.items.length; o++) {
      var a = t.items[o];
      var s = new Library.CastleInterfaceElements.AttackSlotContainer();
      s.itemVO = a;
      s.itemContainer = t;
      s.mc_bg.allowFastGlow = false;
      s.btn_Plus.x += 1;
      s.btn_Plus.y += 2;
      e.mc_items.addChild(s);
      if (!a.isFree()) {
        ee.WodPicHelper.setCorrectUnitBackgroundPic(a.unitVO, s.mc_bg, Library.CastleInterfaceElements.AttackslotContainerBackground, Library.CastleInterfaceElements.AttackslotContainerBackground_Berimond);
        ee.WodPicHelper.addUnitPic(L.CastleModel.wodData.voSubList(K.CastleWodData.TYPE_UNIT).get(a.unitVO.wodId), s.content.mc_unit, 35, 35, L.CastleModel.userData.playerCrest.colorsTwo[0], L.CastleModel.userData.playerCrest.colorsTwo[1], 20);
      }
      this.initContainer(s);
      this.positionContainer(s, i, o, n);
      this._allContainerOnScreen.push(s);
    }
  };
  CastleSupportDefenceDialog.prototype.updateContainer = function () {
    this.fillItems();
  };
  CastleSupportDefenceDialog.prototype.initContainer = function (t) {
    e.prototype.initContainer.call(this, t);
    t.scaleX = t.scaleY = 1;
    t.useFilters(B.BitmapFilterHelper.NO_FILTER);
    t.alpha = 1;
    t.mouseChildren = false;
    t.content.mouseChildren = false;
    t.content.mouseEnabled = false;
    if (t.itemContainer.highlighted) {
      t.btn_Plus.gotoAndStop(2);
    } else {
      t.btn_Plus.gotoAndStop(1);
    }
    var i = t.itemVO;
    var n = t.itemContainer;
    t.content.infoPercent.visible = false;
    t.content.infoAmount.visible = !i.isFree();
    t.btn_Plus.visible = i.isFree() && !this._selectedDragUnit && !L.CastleModel.tutorialData.isTutorialActive;
    if (i.isFree()) {
      t.toolTipText = null;
    } else if (i.slotType == q.ToolUnitVO.SLOTTYPE_SOLDIER) {
      var a = i.unitVO;
      var s = c.MathBase.max(a.buffedMeleeAttack, a.buffedRangeAttack) * i.unitVO.inventoryAmount;
      t.toolTipText = {
        t: l.GenericTextIds.VALUE_SIMPLE_COMP,
        p: [s, f.Localize.text("panel_fight_battlestrength")]
      };
      var r = c.MathBase.max(a.meleeDefence, a.rangeDefence) * i.unitVO.inventoryAmount;
      t.toolTipText = {
        t: "panel_fight_battlestrength_value",
        p: [r]
      };
    } else {
      var u = i.unitVO;
      t.toolTipText = u.getTooltipString(i.getAmount());
    }
    if (!i.isFree()) {
      this.textFieldManager.registerTextField(t.content.infoAmount.txt_value, new O.LocalizedNumberVO(i.unitVO.inventoryAmount), new o.InternalGGSTextFieldConfigVO(true));
    }
    if (i.isFree() && n.isFull) {
      t.alpha = 0.3;
    }
  };
  CastleSupportDefenceDialog.prototype.editUnitSlot = function (e, t, i) {
    ne.CastleExternalDialog.dialogHandler.registerDefaultDialogs(te.CastleAttackAddUnitsDialog, new k.CastleBasicAddUnitsDialogProperties(e, this.bindFunction(this.changeItemAmount), i, true, t));
  };
  CastleSupportDefenceDialog.prototype.onUnitFitsSlot = function (e, t) {
    ne.CastleExternalDialog.dialogHandler.registerDefaultDialogs(te.CastleAttackAddUnitsDialog, new k.CastleBasicAddUnitsDialogProperties(this._selectedDragUnit, this.bindFunction(this.changeItemAmount), e, false, t));
  };
  CastleSupportDefenceDialog.prototype.refreshElements = function () {
    this.fillItems();
    this.fillShopItemsByGroup();
    this.onSelectedLordChanged(null);
    this.showTownshipSupportInfo();
    e.prototype.refreshElements.call(this);
  };
  CastleSupportDefenceDialog.prototype.getFilteredArray = function (e) {
    var t = [];
    switch (e) {
      case G.CastleFightDialog.SHOP_CATEGORY_UNITS_ATT:
        t = this._unitMixedInventory.getOffensiveSoldiers(false);
        break;
      case G.CastleFightDialog.SHOP_CATEGORY_UNITS_DEF:
        t = this._unitMixedInventory.getDefensiveSoldiers(false);
        break;
      case G.CastleFightDialog.SHOP_CATEGORY_UNITS:
        t = this._unitMixedInventory.getOffensiveSoldiers(false);
        for (var i = 0, n = this._unitMixedInventory.getDefensiveSoldiers(false); i < n.length; i++) {
          var o = n[i];
          if (!(t.indexOf(o) > -1)) {
            t.push(o);
          }
        }
    }
    t.sort(W.ClientConstSort.sortByUnitSortOrder);
    return t;
  };
  CastleSupportDefenceDialog.prototype.closeScreen = function () {
    if (this.supportDefenceVO.supportUnits.sumOfItems != 0) {
      if (this.supportDefenceVO.getTravelCost(this.getSelectedLordVO()) > L.CastleModel.currencyData.c1Amount) {
        ne.CastleExternalDialog.dialogHandler.registerDefaultDialogs(oe.CastleNoMoneyC1Dialog, new H.CastleNoMoneyC1DialogProperties());
      } else {
        this.supportDefenceVO.targetActionType = this.targetArea.areaType == g.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP ? b.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE_TOWNSHIP : b.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE;
        r.CommandController.instance.executeCommand(Y.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [this.supportDefenceVO.targetActionType, this.bindFunction(this.hide), this.supportDefenceVO, this.getSelectedLordVO()]);
      }
    } else {
      ne.CastleExternalDialog.dialogHandler.registerDefaultDialogs(ie.CastleCharacterYesNoOKDialog, new U.CastleCharacterYesNoOKDialogProperties(f.Localize.text("generic_alert_watchout"), f.Localize.text("dialog_attack_noUnits"), 4, null, null, false));
    }
  };
  CastleSupportDefenceDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    switch (t.target) {
      case this._fightDetailView.layerLeft:
        this._fightDetailView.addGlow(this._fightDetailView.layerLeft);
        this.showSpyInfo(this._fightScreenVO.spyInfo.itemsLeft, f.Localize.text("dialog_spyLog_flankSpy"), true, false, true);
        break;
      case this._fightDetailView.layerRight:
        this._fightDetailView.addGlow(this._fightDetailView.layerRight);
        this.showSpyInfo(this._fightScreenVO.spyInfo.itemsRight, f.Localize.text("dialog_spyLog_flankSpy"), true, false, true);
        break;
      case this._fightDetailView.layerMiddle:
        this._fightDetailView.addGlow(this._fightDetailView.layerMiddle);
        this.showSpyInfo(this._fightScreenVO.spyInfo.itemsMiddle, f.Localize.text("dialog_spyLog_frontSpy"), true, true, true);
        break;
      case this._fightDetailView.layerKeep:
        this._fightDetailView.addGlow(this._fightDetailView.layerKeep);
        this.showSpyInfo(this._fightScreenVO.spyInfo.itemsKeep, f.Localize.text("dialog_spyLog_keepSpy"), false, false, true, true);
    }
    if (t.target instanceof p.getDefinitionByName("AttackItemContainer") || re.instanceOfClass(t.target, "AttackSlotContainer") && t.target.btn_Plus.visible || t.target instanceof p.getDefinitionByName("SupportDefenceUnitContainer")) {
      this.layoutManager.customCursor.setCursorType(s.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleSupportDefenceDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    switch (t.target) {
      case this._fightDetailView.layerLeft:
      case this._fightDetailView.layerRight:
      case this._fightDetailView.layerMiddle:
      case this._fightDetailView.layerKeep:
        this._fightDetailView.removeGlow();
    }
  };
  CastleSupportDefenceDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (N.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.supportDefenceDialog.btn_close:
          this.hide();
          break;
        case this.supportDefenceDialog.btn_help:
          X.CastleDialogHandler.getInstance().showHelper("", f.Localize.text("help_supportDefence"));
          break;
        case this.supportDefenceDialog.mc_townshipSupport:
          X.CastleDialogHandler.getInstance().registerDefaultDialogs(ae.SupportOverviewDialog, new se.SupportOverviewDialogProperties(this.targetArea));
      }
      if (this._fightDetailView) {
        switch (t.target) {
          case this._fightDetailView.layerKeep:
            if (this._fightDetailView.selectedTarget == this._fightDetailView.layerKeep) {
              this._fightDetailView.selectedTarget = null;
            } else {
              this._fightDetailView.selectedTarget = null;
              this.showSpyInfo(this._fightScreenVO.spyInfo.itemsKeep, f.Localize.text("dialog_spyLog_keepSpy"), false, false, true, true);
              this._fightDetailView.selectedTarget = this._fightDetailView.layerKeep;
              this._fightDetailView.removeGlow();
            }
            this.updateSpyInfo();
            break;
          case this._fightDetailView.layerLeft:
            if (this._fightDetailView.selectedTarget == this._fightDetailView.layerLeft) {
              this._fightDetailView.selectedTarget = null;
            } else {
              this._fightDetailView.selectedTarget = null;
              this.showSpyInfo(this._fightScreenVO.spyInfo.itemsLeft, f.Localize.text("dialog_spyLog_flankSpy"), true, false, true);
              this._fightDetailView.selectedTarget = this._fightDetailView.layerLeft;
              this._fightDetailView.removeGlow();
            }
            this.updateSpyInfo();
            break;
          case this._fightDetailView.layerRight:
            if (this._fightDetailView.selectedTarget == this._fightDetailView.layerRight) {
              this._fightDetailView.selectedTarget = null;
            } else {
              this._fightDetailView.selectedTarget = null;
              this.showSpyInfo(this._fightScreenVO.spyInfo.itemsRight, f.Localize.text("dialog_spyLog_flankSpy"), true, false, true);
              this._fightDetailView.selectedTarget = this._fightDetailView.layerRight;
              this._fightDetailView.removeGlow();
            }
            this.updateSpyInfo();
            break;
          case this._fightDetailView.layerMiddle:
            if (this._fightDetailView.selectedTarget == this._fightDetailView.layerMiddle) {
              this._fightDetailView.selectedTarget = null;
            } else {
              this._fightDetailView.selectedTarget = null;
              this.showSpyInfo(this._fightScreenVO.spyInfo.itemsMiddle, f.Localize.text("dialog_spyLog_frontSpy"), true, true, true);
              this._fightDetailView.selectedTarget = this._fightDetailView.layerMiddle;
              this._fightDetailView.removeGlow();
            }
            this.updateSpyInfo();
        }
      }
    }
  };
  CastleSupportDefenceDialog.prototype.updateLordPickerTooltip = function () {
    var e = this._lordPicker.selectedLord ? this.getSelectedLordVO() : L.CastleModel.lordData.getDefaultLordByID(_.TravelConst.COMMANDER_PREMIUM);
    this._lordPicker.lordTooltipTrigger.setProperties(e, this.sourceArea, this.targetArea, Q.LordEffectHelper.STRATEGY_SUPPORT);
  };
  CastleSupportDefenceDialog.prototype.showCapacities = function () {
    if (!(this.supportDefenceVO.targetArea instanceof R.FactionCapitalMapobjectVO) && !(this.supportDefenceVO.targetArea instanceof V.FactionTowerMapobjectVO) && !(this.supportDefenceVO.targetArea instanceof x.FactionVillageMapobjectVO) && !(this.supportDefenceVO.targetArea instanceof M.DaimyoTownshipMapObjectVO) && !A.SpecialServerHelper.isOnSpecialServer) {
      var e = [this.supportDefenceVO.unitsWall, this.supportDefenceVO.unitsWallLimit];
      var t = [this.supportDefenceVO.unitsYard, this.supportDefenceVO.unitsYardLimit];
      var i = [this.supportDefenceVO.allianceUnitYard, this.supportDefenceVO.allianceUnitYardLimit];
      this._itxt_wallCapacity.textContentVO.textReplacements = e;
      this._itxt_yardCapacity.textContentVO.textReplacements = t;
      this._itxt_supportCapacity.textContentVO.textReplacements = i;
      this.supportDefenceDialog.mc_supportLimit.visible = true;
    } else {
      this.supportDefenceDialog.mc_supportLimit.visible = false;
    }
  };
  CastleSupportDefenceDialog.prototype.updateSelectedLord = function () {
    e.prototype.updateSelectedLord.call(this);
    var t = L.CastleModel.lordData.getLordByID(this._selectedLord.id);
    if (t && t.assignedGeneralVO && !t.isBaron && this.supportDefenceVO.targetArea.areaType != g.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER) {
      this.dialogDisp.icon_warning_unassign_general.visible = true;
      this.dialogDisp.icon_warning_unassign_general.toolTipText = f.Localize.text("dialog_support_warning_generalAssigned_tooltip", [t.assignedGeneralVO.nameTextShort]);
    } else {
      this.dialogDisp.icon_warning_unassign_general.visible = false;
    }
  };
  Object.defineProperty(CastleSupportDefenceDialog.prototype, "supportDefenceDialog", {
    get: function () {
      return this.dialogDisp;
    },
    enumerable: true,
    configurable: true
  });
  CastleSupportDefenceDialog.NAME = "CastleSupportDefence";
  return CastleSupportDefenceDialog;
}(G.CastleFightDialog);
exports.CastleSupportDefenceDialog = j;
a.classImplementsInterfaces(j, "ICollectableRendererList");
var W = require("./75.js");
var Y = require("./29.js");
var K = require("./56.js");
var z = require("./4753.js");
var q = require("./181.js");
var X = require("./9.js");
var Q = require("./133.js");
var J = require("./1252.js");
var Z = require("./4754.js");
var $ = require("./61.js");
var ee = require("./63.js");
var te = require("./749.js");
var ie = require("./238.js");
var ne = require("./11.js");
var oe = require("./352.js");
var ae = require("./961.js");
var se = require("./962.js");
var re = require("./1.js");