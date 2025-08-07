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
var p = require("./2.js");
var h = require("./1.js");
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
var I = require("./1713.js");
var T = require("./21.js");
var v = require("./1070.js");
var S = require("./44.js");
var A = require("./4.js");
var L = require("./35.js");
var P = require("./68.js");
var M = require("./42.js");
var R = require("./584.js");
var V = require("./236.js");
var x = require("./376.js");
var w = require("./351.js");
var B = require("./613.js");
var F = function (e) {
  function CastleTroopSupportDialog() {
    var t = this;
    t.startSoldierAmount = 0;
    t.targetCapacity = y.int(Number.MAX_VALUE);
    t._remainingTimeForAttackPowerBuff = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleTroopSupportDialog.NAME) || this;
  }
  n.__extends(CastleTroopSupportDialog, e);
  CastleTroopSupportDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.itxt_castlename = this.textFieldManager.registerTextField(this.userInfoMenu.txt_castlename, new m.TextVO(""));
    this.itxt_units = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.txt_units, new O.LocalizedNumberVO(0));
    this.itxt_tools = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.txt_tools, new m.TextVO(""));
    this.itxt_combatPower = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.txt_combatPower, new O.LocalizedNumberVO(0));
    this.itxt_foodConsumption = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.txt_foodConsumption, new O.LocalizedNumberVO(0));
    this.itxt_meadConsumption = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.mc_mead.txt_meadConsumption, new O.LocalizedNumberVO(0));
    this.itxt_beefConsumption = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.mc_beef.txt_beefConsumption, new O.LocalizedNumberVO(0));
    this.itxt_info_time = this.textFieldManager.registerTextField(this.bottomMenu.component_Options.info_time.txt_value, new m.TextVO(""));
    this.itxt_info_cost = this.textFieldManager.registerTextField(this.bottomMenu.component_Options.info_cost.txt_value, new m.TextVO(""));
    this.bottomMenu.btn_cat_keep.visible = false;
    this.bottomMenu.btn_cat_wall.visible = false;
    this.bottomMenu.btn_cat_gate.visible = false;
    this.bottomMenu.btn_cat_field.visible = false;
    this.bottomMenu.btn_cat_moat.visible = false;
    this.bottomMenu.btn_cat_tools.visible = true;
    this.bottomMenu.btn_toolLimit.visible = false;
    this.bottomMenu.btn_tactics.toolTipText = "panel_deco_military";
    this.supportDefenceDialog.toolsConnector.visible = false;
    this.supportDefenceDialog.unitConnector.visible = false;
    this.supportDefenceDialog.unitSideConnectors.visible = false;
    this._advancedFightScreenHelper = new W.CastleAdvancedTroopSupportDialogHelper(this);
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_soldier.toolTipText = "panel_fight_unitCount";
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_tools.toolTipText = "tut_defence_dragTools_title";
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_combatPower.toolTipText = "panel_fight_battlestrength";
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_foodConsumption.toolTipText = "foodwastage";
    this.supportDefenceDialog.mc_supportItemHolder.mc_mead.icon_mead.toolTipText = "meadwastage";
    this.supportDefenceDialog.mc_supportItemHolder.mc_beef.icon_beef.toolTipText = "beefwastage";
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_meadConsumption.toolTipText = "meadwastage";
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_beefConsumption.toolTipText = "beefwastage";
    this.supportDefenceDialog.btn_help.toolTipText = "generic_help";
  };
  CastleTroopSupportDialog.prototype.setAppearanceFightButton = function () {
    e.prototype.setAppearanceFightButton.call(this);
    this.bottomMenu.btn_close.visible = true;
    this.bottomMenu.btn_close.toolTipText = "ringmenu_sendTroups";
    var t = this.textFieldManager.registerTextField(this.bottomMenu.btn_close.txt_name, new E.LocalizedTextVO("ringmenu_sendTroups"));
    t.autoFitToBounds = true;
    t.verticalAlign = M.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  CastleTroopSupportDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.showTactics();
    this.lockDialog();
    this.onSupportDefenceInfos();
    var i = A.CastleModel.allianceData.myAllianceVO;
    if (i) {
      this._remainingTimeForAttackPowerBuff = y.int(i.getRemainingBoostDuration(g.AllianceConst.TYPE_TEMP_ATTACK_POWER_BOOST));
      if (this._remainingTimeForAttackPowerBuff > 0) {
        A.CastleModel.timerData.addEventListener(T.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
      }
    }
    this.supportDefenceDialog.mc_supportItemHolder.mc_mead.visible = A.CastleModel.legendSkillData.meadUnitsUnlocked;
    this.supportDefenceDialog.mc_supportItemHolder.mc_beef.visible = A.CastleModel.legendSkillData.meadUnitsUnlocked;
  };
  CastleTroopSupportDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    A.CastleModel.timerData.removeEventListener(T.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
    this.controller.removeEventListener(v.CastleUnitCapacityEvent.UNIT_CAPACITY_CHANGED, this.bindFunction(this.onUnitCapacity));
  };
  CastleTroopSupportDialog.prototype.onSecondTimer = function (e) {
    this._remainingTimeForAttackPowerBuff--;
    if (this._remainingTimeForAttackPowerBuff <= 0) {
      A.CastleModel.timerData.removeEventListener(T.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
      this.updateFightStrength();
    }
  };
  CastleTroopSupportDialog.prototype.onUnitCapacity = function (e) {
    this.controller.removeEventListener(v.CastleUnitCapacityEvent.UNIT_CAPACITY_CHANGED, this.bindFunction(this.onUnitCapacity));
    this.targetCapacity = e.capacity;
    this.fillDialog();
  };
  Object.defineProperty(CastleTroopSupportDialog.prototype, "supportDefenceVO", {
    get: function () {
      return this._fightScreenVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleTroopSupportDialog.prototype.onSupportDefenceInfos = function () {
    this._fightScreenVO = this.properties.troopSupportVO;
    if (this.supportDefenceVO.targetArea.kingdomID == C.FactionConst.KINGDOM_ID) {
      this.controller.addEventListener(v.CastleUnitCapacityEvent.UNIT_CAPACITY_CHANGED, this.bindFunction(this.onUnitCapacity));
      A.CastleModel.smartfoxClient.sendCommandVO(new I.C2SGetCampUnitCapacity(this.supportDefenceVO.targetArea.objectId));
    } else {
      this.targetCapacity = y.int(Number.MAX_VALUE);
      this.fillDialog();
    }
    this.initLordPicker();
    this.hidePresetPicker();
    this.onSelectedLordChanged();
  };
  CastleTroopSupportDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target instanceof h.getDefinitionByName("AttackItemContainer") || J.instanceOfClass(t.target, "AttackSlotContainer") && t.target.btn_Plus.visible || t.target instanceof h.getDefinitionByName("TroopSupportUnitContainerHitArea") || t.target instanceof h.getDefinitionByName("TroopSupportToolContainer")) {
      this.layoutManager.customCursor.setCursorType(s.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleTroopSupportDialog.prototype.fillDialog = function () {
    this.unLockDialog();
    this._unitMixedInventory = this.supportDefenceVO.unitInventory;
    this._unitMixedInventory.addAll(this.supportDefenceVO.strongholdUnitInventory.getUnits(null));
    this.startSoldierAmount = y.int(this._unitMixedInventory.getSoldierCount());
    Y.CrestHelper.setCrestGraphics(this.supportDefenceDialog.myCrest, this._fightScreenVO.sourceOwnerCrestVO);
    Y.CrestHelper.setCrestGraphics(this.supportDefenceDialog.targetCrest, this._fightScreenVO.targetOwnerCrestVO);
    this.itxt_castlename.textContentVO.stringValue = this._fightScreenVO.sourceArea.areaNameString;
    this.showUserLevel();
    this.showPlayerInfo(this._fightScreenVO.targetArea, this._fightScreenVO.targetOwnerLevel);
    this.setShopCategory(x.CastleFightDialog.SHOP_CATEGORY_UNITS_DEF);
    this.bottomMenu.component_Options.wavePicker.visible = false;
    this.drawAreaVO();
    this.fillItems();
  };
  CastleTroopSupportDialog.prototype.calculateCombatStrength = function (e, t) {
    var i = t.getAttackMeleeBonus();
    var n = e.getAttackMeleeValue(this.getSelectedLordVO());
    var o = this.calcFightStrength(n, i);
    var a = t.getAttackRangeBonus();
    var s = e.getAttackRangeValue(this.getSelectedLordVO());
    var r = this.calcFightStrength(s, a);
    return y.int(r + o);
  };
  CastleTroopSupportDialog.prototype.getAllianceAttackBoost = function () {
    var e;
    var t;
    if (A.CastleModel.allianceData && A.CastleModel.allianceData.myAllianceVO && (e = A.CastleModel.allianceData.myAllianceVO, (t = A.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(g.AllianceConst.TYPE_TEMP_ATTACK_POWER_BOOST, e.getBoostLevel(g.AllianceConst.TYPE_TEMP_ATTACK_POWER_BOOST)).getBonusVOByEffectType(L.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS)) && t.effect.isForAreaType(this._fightScreenVO.targetArea.areaType))) {
      return t.strength / 100;
    } else {
      return 0;
    }
  };
  CastleTroopSupportDialog.prototype.calcFightStrength = function (e, t) {
    return e * (1 + t) * (1 + this.getAllianceAttackBoost());
  };
  CastleTroopSupportDialog.prototype.updateContainer = function () {
    this.fillItems();
  };
  CastleTroopSupportDialog.prototype.fillItems = function () {
    this._allContainerOnScreen = [];
    this.supportDefenceVO.supportUnits.maxItems = this.targetCapacity;
    if (this.supportDefenceVO) {
      this.fillItemContainer(this.supportDefenceDialog.mc_supportItemHolder.mc_units, this.supportDefenceVO.supportUnits, 10, 43);
    }
    this.fillItemContainer(this.supportDefenceDialog.mc_supportItemHolder.mc_tools, this.supportDefenceVO.supportTools, 9, 43);
    if (this.targetCapacity != Number.MAX_VALUE) {
      this.itxt_units.textContentVO = new m.TextVO(r.BasicModel.languageData.getTextById(c.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.supportDefenceVO.supportUnits.sumOfItems, this.targetCapacity]));
    } else {
      this.itxt_units.textContentVO = new O.LocalizedNumberVO(this.supportDefenceVO.supportUnits.sumOfItems);
    }
    this.itxt_tools.textContentVO.stringValue = String(this.supportDefenceVO.supportTools.sumOfItems);
    this.itxt_foodConsumption.textContentVO.numberValue = this.supportDefenceVO.supportUnits.getFoodConsumption();
    this.itxt_meadConsumption.textContentVO.numberValue = this.supportDefenceVO.supportUnits.getMeadConsumption();
    this.itxt_beefConsumption.textContentVO.numberValue = this.supportDefenceVO.supportUnits.getBeefConsumption();
    this.updateFightStrength();
  };
  CastleTroopSupportDialog.prototype.updateFightStrength = function () {
    this.itxt_combatPower.textContentVO.numberValue = this.calculateCombatStrength(this.supportDefenceVO.supportUnits, this.supportDefenceVO.supportTools);
  };
  CastleTroopSupportDialog.prototype.onSelectedLordChanged = function (e = null) {
    this.updateSelectedLord();
    this.itxt_info_time.textContentVO.stringValue = p.TimeStringHelper.getShortTimeStringBySeconds(this.supportDefenceVO.getTravelTime(this._fightScreenVO.targetArea, this.getSelectedLordVO()));
    this.itxt_info_cost.textContentVO.stringValue = String(this.supportDefenceVO.getTravelCost(this.getSelectedLordVO()));
    this.itxt_info_cost.color = this.supportDefenceVO.getTravelCost(this.getSelectedLordVO()) > A.CastleModel.currencyData.c1Amount ? D.ClientConstColor.FONT_INSUFFICIENT_COLOR : D.ClientConstColor.FONT_DEFAULT_COLOR;
    this.bottomMenu.component_Options.info_cost.mouseChildren = false;
    this.updateLordPickerTooltip();
  };
  CastleTroopSupportDialog.prototype.fillItemContainer = function (e, t, i, n) {
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
        K.WodPicHelper.addUnitPic(A.CastleModel.wodData.voSubList(U.CastleWodData.TYPE_UNIT).get(a.unitVO.wodId), s.content.mc_unit, 35, 35, A.CastleModel.userData.playerCrest.colorsTwo[0], A.CastleModel.userData.playerCrest.colorsTwo[1], 20);
      }
      this.initContainer(s);
      this.positionContainer(s, i, o, n);
      this._allContainerOnScreen.push(s);
    }
  };
  CastleTroopSupportDialog.prototype.showInstantBuyDialog = function (e) {
    H.CastleDialogHandler.getInstance().registerDefaultDialogs(Q.CastleDefenceBuyUnitsDialog, new B.CastleDefenceBuyUnitsDialogProperties(e, this.supportDefenceVO.sourceArea, -1));
  };
  CastleTroopSupportDialog.prototype.initContainer = function (t) {
    e.prototype.initContainer.call(this, t);
    t.scaleX = t.scaleY = 1;
    t.useFilters(P.BitmapFilterHelper.NO_FILTER);
    t.content.mc_unit.alpha = 1;
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
    t.btn_Plus.visible = i.isFree() && !this._selectedDragUnit && !A.CastleModel.tutorialData.isTutorialActive;
    if (i.isFree()) {
      t.toolTipText = null;
    } else if (i.slotType == G.ToolUnitVO.SLOTTYPE_SOLDIER) {
      var a = i.unitVO;
      var s = u.MathBase.max(a.buffedMeleeAttack, a.buffedRangeAttack) * i.unitVO.inventoryAmount;
      t.toolTipText = {
        t: "panel_fight_battlestrength_value",
        p: [s]
      };
    } else {
      var r = i.unitVO;
      t.toolTipText = r.getTooltipString(i.getAmount());
    }
    if (!i.isFree()) {
      this.textFieldManager.registerTextField(t.content.infoAmount.txt_value, new O.LocalizedNumberVO(i.unitVO.inventoryAmount), new o.InternalGGSTextFieldConfigVO(true));
    }
    if (i.isFree() && n.isFull) {
      t.alpha = 0.3;
    }
  };
  CastleTroopSupportDialog.prototype.editUnitSlot = function (e, t, i) {
    H.CastleDialogHandler.getInstance().registerDefaultDialogs(z.CastleAttackAddUnitsDialog, new R.CastleBasicAddUnitsDialogProperties(e, this.bindFunction(this.changeItemAmount), i, true, t, this.targetCapacity, true));
  };
  CastleTroopSupportDialog.prototype.onUnitFitsSlot = function (e, t) {
    H.CastleDialogHandler.getInstance().registerDefaultDialogs(z.CastleAttackAddUnitsDialog, new R.CastleBasicAddUnitsDialogProperties(this._selectedDragUnit, this.bindFunction(this.changeItemAmount), e, false, t, this.targetCapacity, true));
  };
  CastleTroopSupportDialog.prototype.refreshElements = function () {
    this.fillItems();
    this.fillShopItemsByGroup();
    this.onSelectedLordChanged();
    e.prototype.refreshElements.call(this);
  };
  CastleTroopSupportDialog.prototype.getFilteredArray = function (e) {
    var t = [];
    switch (e) {
      case x.CastleFightDialog.SHOP_CATEGORY_UNITS_ATT:
        t = this._unitMixedInventory.getOffensiveSoldiers(false);
        break;
      case x.CastleFightDialog.SHOP_CATEGORY_UNITS_DEF:
        t = this._unitMixedInventory.getDefensiveSoldiers(false);
        break;
      case x.CastleFightDialog.SHOP_CATEGORY_UNITS:
        t = this._unitMixedInventory.getOffensiveSoldiers(false);
        for (var i = 0, n = this._unitMixedInventory.getDefensiveSoldiers(false); i < n.length; i++) {
          var o = n[i];
          if (!(t.indexOf(o) > -1)) {
            t.push(o);
          }
        }
        break;
      case x.CastleFightDialog.SHOP_CATEGORY_TOOLS:
        var a = A.CastleModel.permanentCastleData.getUnitBaseLocation(this.supportDefenceVO.sourceArea);
        if (a) {
          var s = a.unitsVO.getFightscreenTools();
          if (s != null) {
            for (var r = 0, l = s; r < l.length; r++) {
              var c = l[r];
              if (c !== undefined && J.instanceOfClass(c, "ToolUnitVO") && !J.instanceOfClass(c, "ShadowtoolUnitVO") && c.costC2 > 0 && (!this.supportDefenceVO.targetArea || c.isTravelingToTargetAllowed(this.supportDefenceVO.targetArea.kingdomID, this.supportDefenceVO.targetArea.areaType))) {
                c.inventoryAmount = 0;
                t.push(c);
              }
            }
          }
        }
        var u = this._unitMixedInventory.getTools();
        if (u != null) {
          for (var d = 0, p = u; d < p.length; d++) {
            var h = p[d];
            if (h !== undefined && (!this.supportDefenceVO.targetArea || h.isTravelingToTargetAllowed(this.supportDefenceVO.targetArea.kingdomID, this.supportDefenceVO.targetArea.areaType))) {
              var g = this.getUnitWodInArray(h.wodId, t);
              if (g) {
                g.inventoryAmount = y.int(this._unitMixedInventory.getUnitCountByWodId(h.wodId));
              } else {
                t.push(h);
              }
            }
          }
        }
    }
    t.sort(N.ClientConstSort.sortByUnitSortOrder);
    return t;
  };
  CastleTroopSupportDialog.prototype.closeScreen = function () {
    if (this.supportDefenceVO.supportUnits.sumOfItems != 0) {
      if (this.supportDefenceVO.getTravelCost(this.getSelectedLordVO()) > A.CastleModel.currencyData.c1Amount) {
        H.CastleDialogHandler.getInstance().registerDefaultDialogs(X.CastleNoMoneyC1Dialog, new w.CastleNoMoneyC1DialogProperties());
      } else if (this.supportDefenceVO.supportUnits.sumOfItems >= this.startSoldierAmount && J.instanceOfClass(this.supportDefenceVO.sourceArea, "ResourceIsleMapobjectVO")) {
        H.CastleDialogHandler.getInstance().registerDefaultDialogs(q.CastleCharacterYesNoOKDialog, new V.CastleCharacterYesNoOKDialogProperties(f.Localize.text("generic_alert_watchout"), f.Localize.text("island_unitWarningQuestion"), 4, this.bindFunction(this.showPostAttack), null, true));
      } else if (this.supportDefenceVO.supportUnits.sumOfItems >= this.startSoldierAmount && J.instanceOfClass(this.supportDefenceVO.sourceArea, "VillageMapobjectVO")) {
        H.CastleDialogHandler.getInstance().registerDefaultDialogs(q.CastleCharacterYesNoOKDialog, new V.CastleCharacterYesNoOKDialogProperties(f.Localize.text("generic_alert_watchout"), f.Localize.text("village_unitWarningQuestion"), 4, this.bindFunction(this.showPostAttack), null, true));
      } else if (this.supportDefenceVO.supportUnits.sumOfItems >= this.startSoldierAmount && J.instanceOfClass(this.supportDefenceVO.sourceArea, "KingstowerMapobjectVO")) {
        H.CastleDialogHandler.getInstance().registerDefaultDialogs(q.CastleCharacterYesNoOKDialog, new V.CastleCharacterYesNoOKDialogProperties(f.Localize.text("generic_alert_watchout"), f.Localize.text(S.SpecialServerHelper.checkTextIDForSkinText("kingstower_unitWarningQuestion")), 4, this.bindFunction(this.showPostAttack), null, true));
      } else if (this.supportDefenceVO.supportUnits.sumOfItems >= this.startSoldierAmount && J.instanceOfClass(this.supportDefenceVO.sourceArea, "MonumentMapobjectVO")) {
        H.CastleDialogHandler.getInstance().registerDefaultDialogs(q.CastleCharacterYesNoOKDialog, new V.CastleCharacterYesNoOKDialogProperties(f.Localize.text("generic_alert_watchout"), f.Localize.text("monument_unitWarningQuestion"), 4, this.bindFunction(this.showPostAttack), null, true));
      } else if (this.supportDefenceVO.supportUnits.sumOfItems >= this.startSoldierAmount && J.instanceOfClass(this.supportDefenceVO.sourceArea, "LaboratoryMapobjectVO")) {
        H.CastleDialogHandler.getInstance().registerDefaultDialogs(q.CastleCharacterYesNoOKDialog, new V.CastleCharacterYesNoOKDialogProperties(f.Localize.text("generic_alert_watchout"), f.Localize.text("laboratory_unitWarningQuestion"), 4, this.bindFunction(this.showPostAttack), null, true));
      } else {
        this.showPostAttack();
      }
    } else {
      H.CastleDialogHandler.getInstance().registerDefaultDialogs(q.CastleCharacterYesNoOKDialog, new V.CastleCharacterYesNoOKDialogProperties(f.Localize.text("generic_alert_watchout"), f.Localize.text("dialog_attack_noUnits"), 4, null, null, false));
    }
  };
  CastleTroopSupportDialog.prototype.showPostAttack = function (e = null) {
    this.supportDefenceVO.targetActionType = b.ClientConstCastle.ACTION_TYPE_SENDTROUPS;
    l.CommandController.instance.executeCommand(k.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [this.supportDefenceVO.targetActionType, this.bindFunction(this.hide), this.supportDefenceVO, this.getSelectedLordVO()]);
  };
  CastleTroopSupportDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.supportDefenceDialog.btn_close:
        this.hide();
        break;
      case this.supportDefenceDialog.btn_help:
        H.CastleDialogHandler.getInstance().showHelper("", f.Localize.text("help_supportDefence"));
    }
  };
  Object.defineProperty(CastleTroopSupportDialog.prototype, "supportDefenceDialog", {
    get: function () {
      return this.dialogDisp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTroopSupportDialog.prototype, "hasKeepLayerAction", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(x.CastleFightDialog.prototype, "hasKeepLayerAction").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTroopSupportDialog.prototype, "hasLeftFlankLayerAction", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(x.CastleFightDialog.prototype, "hasLeftFlankLayerAction").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTroopSupportDialog.prototype, "hasRightFlankLayerAction", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(x.CastleFightDialog.prototype, "hasRightFlankLayerAction").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTroopSupportDialog.prototype, "hasMoatLayerAction", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(x.CastleFightDialog.prototype, "hasMoatLayerAction").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTroopSupportDialog.prototype, "hasMiddleFlankLayerAction", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(x.CastleFightDialog.prototype, "hasMiddleFlankLayerAction").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTroopSupportDialog.prototype, "hasFrontLayerAction", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(x.CastleFightDialog.prototype, "hasFrontLayerAction").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleTroopSupportDialog.prototype.updateLordPickerTooltip = function () {
    if (this._lordPicker) {
      var e = this._lordPicker.selectedLord ? this.getSelectedLordVO() : A.CastleModel.lordData.getDefaultLordByID(_.TravelConst.COMMANDER_PREMIUM);
      this._lordPicker.lordTooltipTrigger.setProperties(e, null, this.targetArea, j.LordEffectHelper.STRATEGY_STATION);
    }
  };
  CastleTroopSupportDialog.NAME = "CastleTroopSupport";
  return CastleTroopSupportDialog;
}(x.CastleFightDialog);
exports.CastleTroopSupportDialog = F;
var N = require("./75.js");
var k = require("./29.js");
var U = require("./56.js");
var G = require("./181.js");
var H = require("./9.js");
var j = require("./133.js");
var W = require("./5173.js");
var Y = require("./61.js");
var K = require("./63.js");
var z = require("./749.js");
var q = require("./238.js");
var X = require("./352.js");
var Q = require("./616.js");
a.classImplementsInterfaces(F, "ICollectableRendererList");
var J = require("./1.js");