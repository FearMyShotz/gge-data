Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./5.js");
var m = require("./5.js");
var f = require("./5.js");
var O = require("./5.js");
var E = require("./5.js");
var y = require("./3.js");
var b = require("./3.js");
var D = require("./3.js");
var I = require("./6.js");
var T = require("./18.js");
var v = require("./51.js");
var S = require("./16.js");
var A = require("./21.js");
var L = require("./26.js");
var P = require("./53.js");
var M = require("./137.js");
var R = require("./4.js");
var V = require("./106.js");
var x = require("./119.js");
var w = require("./738.js");
var B = require("./760.js");
var F = require("./135.js");
var N = require("./3767.js");
var k = function (e) {
  function CastlePostAttackDialog(t = null) {
    var i = this;
    i._remainingTimeForSupportDefenseSpeedBuff = 0;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t || CastlePostAttackDialog.NAME) || this;
  }
  n.__extends(CastlePostAttackDialog, e);
  CastlePostAttackDialog.prototype.showLoaded = function (t = null) {
    this.i_siegetime_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_siegeTime.txt_value, new D.TextVO(""));
    this.i_esthonor_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_estimatedHonor.txt_value, new b.LocalizedTextVO(""));
    this.dialogDisp.mc_estimatedHonor.toolTipText = "dialog_postAttack_estimatedHonor";
    this.dialogDisp.mc_siegeTime.toolTipText = "dialog_postAttack_siegeTime";
    this.lootPriorityDropdown ||= new Y.ComboboxComponent(this.dialogDisp.mc_dropdown, "", 1, 40, 45);
    this.itxt_dropdown ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_dropdown, new b.LocalizedTextVO("dialog_attack_lootprio"));
    this.shareViewCheckbox ||= new o.CheckBoxButton(this.dialogDisp.mc_checkbox, true);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_checkbox, new b.LocalizedTextVO("dialog_postAttack_shareView")).textAlign = a.GGSTextAlign.LEFT;
    V.CharacterHelper.createCharacterBig(this.getCharID(), this.dialogDisp.mc_charPlaceHolder, 144, 186);
    var i = _.OutpostConst.SIEGE_TIME;
    this.initTimeSelection();
    this.initShareView();
    this.initLootPriority();
    this.dialogDisp.mc_siegeTime.visible = this.fightScreenInfoVO.isConquerAttack && !this.fightScreenInfoVO.targetOwner.isOutpostOwner && this.fightScreenInfoVO.targetArea.areaType != p.WorldConst.AREA_TYPE_VILLAGE && this.fightScreenInfoVO.targetArea.areaType != p.WorldConst.AREA_TYPE_KINGS_TOWER && this.fightScreenInfoVO.targetArea.areaType != p.WorldConst.AREA_TYPE_MONUMENT && this.fightScreenInfoVO.targetArea.areaType != p.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER && this.fightScreenInfoVO.targetArea.areaType != p.WorldConst.AREA_TYPE_LABORATORY;
    if (this.i_siegetime_txt_value) {
      this.i_siegetime_txt_value.textContentVO.stringValue = r.TimeStringHelper.getTimeToString(i, r.TimeStringHelper.ONE_TIME_FORMAT, R.CastleModel.languageData.bindFunction(R.CastleModel.languageData.getTextById));
    }
    this.dialogDisp.mc_estimatedHonor.visible = G.CastleFameHelper.canEarnHonorOrFame(this.fightScreenInfoVO.targetArea, this.fightScreenInfoVO.targetActionType);
    var n = I.int(G.CastleFameHelper.getEstimatedHonor(this.fightScreenInfoVO.targetArea, this.fightScreenInfoVO.targetActionType));
    var s = G.CastleFameHelper.canEarnOrLoseHonor(this.fightScreenInfoVO.targetArea, this.fightScreenInfoVO.targetActionType) && !P.ABGHelper.isOnABGServer;
    this.setHonorBonus(n, s);
    e.prototype.showLoaded.call(this, t);
  };
  CastlePostAttackDialog.prototype.getCharID = function () {
    return v.ClientConstCharacter.CHAR_ID_GENERAL;
  };
  CastlePostAttackDialog.prototype.setHonorBonus = function (e, t) {
    if (e >= 0) {
      this.i_esthonor_txt_value.textContentVO.textId = s.GenericTextIds.VALUE_NOMINAL_ADD;
      this.i_esthonor_txt_value.color = S.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      this.i_esthonor_txt_value.textContentVO.textId = s.GenericTextIds.VALUE_NOMINAL_SUBTRACT;
      this.i_esthonor_txt_value.color = S.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
    this.i_esthonor_txt_value.textContentVO.textReplacements = [Math.abs(e)];
    if (t) {
      this.dialogDisp.mc_estimatedHonor.icon_honor.gotoAndStop(CastlePostAttackDialog.FRAME_ICON_HONOR);
      this.dialogDisp.mc_estimatedHonor.toolTipText = "dialog_postAttack_estimatedHonor";
    } else {
      this.dialogDisp.mc_estimatedHonor.icon_honor.gotoAndStop(CastlePostAttackDialog.FRAME_ICON_NO_HONOR);
      this.dialogDisp.mc_estimatedHonor.toolTipText = "dialog_fame_nohonor";
    }
  };
  CastlePostAttackDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    R.CastleModel.specialEventData.addEventListener(L.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    var t = R.CastleModel.allianceData.myAllianceVO;
    if (t) {
      this._remainingTimeForSupportDefenseSpeedBuff = I.int(t.getRemainingBoostDuration(O.AllianceConst.TYPE_TEMP_DEFENSE_SPEED_BOOST));
      if (this._remainingTimeForSupportDefenseSpeedBuff > 0) {
        R.CastleModel.timerData.addEventListener(A.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
      }
    }
  };
  CastlePostAttackDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    R.CastleModel.specialEventData.removeEventListener(L.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    R.CastleModel.timerData.removeEventListener(A.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
  };
  CastlePostAttackDialog.prototype.onSecondTimer = function (e) {
    this._remainingTimeForSupportDefenseSpeedBuff--;
    if (this._remainingTimeForSupportDefenseSpeedBuff <= 0) {
      this.updateTravelTime();
      R.CastleModel.timerData.removeEventListener(A.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
    }
  };
  CastlePostAttackDialog.prototype.onSpecialEventRemoved = function (e) {
    if (e.specialEventVO.isOwnWmoVO(this.dialogProperties.attackInfoVO.targetArea)) {
      this.hide();
    }
  };
  CastlePostAttackDialog.prototype.initShareView = function () {
    if (U.instanceOfClass(this.fightScreenInfoVO, "CastleAttackInfoVO") && R.CastleModel.userData.isInAlliance && this.fightScreenInfoVO.targetActionType != T.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK && this.fightScreenInfoVO.targetActionType != T.ClientConstCastle.ACTION_TYPE_BOSSDUNGEONATTACK && this.fightScreenInfoVO.targetArea.kingdomID != c.FactionConst.KINGDOM_ID && this.fightScreenInfoVO.targetOwner.playerID != _.OutpostConst.OUTPOST_DEFAULT_OWNER_ID && this.fightScreenInfoVO.targetOwner.playerID != _.OutpostConst.CAPITAL_CLASSIC_DEFAULT_OWNER_ID && this.fightScreenInfoVO.targetOwner.playerID != _.OutpostConst.METROPOL_DEFAULT_OWNER_ID || this.fightScreenInfoVO.targetArea.kingdomID == c.FactionConst.KINGDOM_ID) {
      this.shareViewCheckbox.isSelected = true;
      this.shareViewCheckboxVisible = true;
    } else {
      this.shareViewCheckboxVisible = false;
      this.shareViewCheckbox.isSelected = false;
    }
    if (P.ABGHelper.isOnABGServer && this.fightScreenInfoVO.targetArea.areaType == p.WorldConst.AREA_TYPE_METROPOL) {
      this.shareViewCheckboxVisible = false;
      this.shareViewCheckbox.isSelected = true;
    }
  };
  CastlePostAttackDialog.prototype.initTimeSelection = function () {
    this.dialogDisp.mc_wait.visible = false;
  };
  CastlePostAttackDialog.prototype.initLootPriority = function () {
    this.lootPriorityDropdownVisible = R.CastleModel.userData.userLevel >= f.CombatConst.LOOT_PRIO_MIN_LEVEL && U.instanceOfClass(this.fightScreenInfoVO, "CastleAttackInfoVO") && this.fightScreenInfoVO.targetActionType != T.ClientConstCastle.ACTION_TYPE_CONQUER && this.fightScreenInfoVO.targetActionType != T.ClientConstCastle.ACTION_TYPE_CONQUERATTACK && this.fightScreenInfoVO.targetActionType != T.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK && this.fightScreenInfoVO.targetArea.areaType != p.WorldConst.AREA_TYPE_VILLAGE && this.fightScreenInfoVO.targetArea.areaType != p.WorldConst.AREA_TYPE_KINGS_TOWER && this.fightScreenInfoVO.targetArea.areaType != p.WorldConst.AREA_TYPE_MONUMENT && this.fightScreenInfoVO.targetArea.areaType != p.WorldConst.AREA_TYPE_LABORATORY && this.fightScreenInfoVO.targetArea.areaType != p.WorldConst.AREA_TYPE_ISLE_RESOURCE;
    this.lootPriorityDropdown.clearItems();
    var e = j.CastleFightScreenVO.getResourcesVectorItemRenderers();
    this.lootPriorityDropdown.addItem(e[0]);
    this.lootPriorityDropdown.addItem(e[1]);
    this.lootPriorityDropdown.addItem(e[2]);
    this.lootPriorityDropdown.addItem(e[3]);
    if (x.PlayerHelper.isNPCPlayer(this.fightScreenInfoVO.targetOwner.playerID) || this.fightScreenInfoVO.targetArea.kingdomID == c.FactionConst.KINGDOM_ID) {
      if (U.instanceOfClass(this.fightScreenInfoVO.targetArea, "AAlienInvasionMapobjectVO")) {
        if (R.CastleModel.userData.isLegend && this.fightScreenInfoVO.targetOwnerLevel >= C.PlayerConst.LEVEL_CAP) {
          this.lootPriorityDropdown.addItem(e[4]);
          this.lootPriorityDropdown.addItem(e[5]);
          this.lootPriorityDropdown.addItem(e[6]);
          this.lootPriorityDropdown.addItem(e[7]);
        }
      } else if (R.CastleModel.userData.isLegend) {
        var t = x.PlayerHelper.isInvasionPlayer(this.fightScreenInfoVO.targetOwner.playerID);
        if (this.fightScreenInfoVO.targetArea.kingdomID == m.WorldIce.KINGDOM_ID) {
          this.lootPriorityDropdown.addItem(e[4]);
        }
        if (this.fightScreenInfoVO.targetArea.kingdomID == d.WorldDessert.KINGDOM_ID) {
          this.lootPriorityDropdown.addItem(e[5]);
        }
        if (this.fightScreenInfoVO.targetArea.kingdomID == g.WorldVolcano.KINGDOM_ID) {
          this.lootPriorityDropdown.addItem(e[6]);
        }
        if (this.fightScreenInfoVO.targetArea.kingdomID == h.WorldClassic.KINGDOM_ID && !t) {
          this.lootPriorityDropdown.addItem(e[7]);
        }
      }
    } else if (R.CastleModel.userData.isLegend && this.fightScreenInfoVO.targetOwner.isLegend) {
      this.lootPriorityDropdown.addItem(e[4]);
      this.lootPriorityDropdown.addItem(e[5]);
      this.lootPriorityDropdown.addItem(e[6]);
      this.lootPriorityDropdown.addItem(e[7]);
    }
    this.lootPriorityDropdown.selectItemIndex(0);
  };
  CastlePostAttackDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.dialogDisp.mc_checkbox) {
      this.shareViewCheckbox.isSelected = !this.shareViewCheckbox.isSelected;
    }
  };
  CastlePostAttackDialog.prototype.startAttack = function () {
    var e = this.dialogProperties.attackInfoVO.targetArea;
    if (this.hasEnoughEventTime(e)) {
      if (this.fightScreenInfoVO.isConquerAttack && e.areaType != p.WorldConst.AREA_TYPE_CAPITAL && e.areaType != p.WorldConst.AREA_TYPE_VILLAGE && e.areaType != p.WorldConst.AREA_TYPE_KINGS_TOWER && e.areaType != p.WorldConst.AREA_TYPE_ISLE_RESOURCE && e.areaType != p.WorldConst.AREA_TYPE_MONUMENT && e.areaType != p.WorldConst.AREA_TYPE_LABORATORY || this.dialogProperties.selectedLord && this.dialogProperties.selectedLord.id != E.TravelConst.COMMANDER_PREMIUM) {
        this.sendMovement(0);
      } else if (I.int(R.CastleModel.vipData.remainingPremiumCommanders) < 1) {
        var t = I.int(R.CastleModel.boostData.premiumAccountVO.isActive ? 0 : R.CastleModel.costsData.getFinalCostsC2(E.TravelConst.TRAVEL_PREMIUM_COMMANDER_COSTS_C2));
        var i = R.CastleModel.vipData.vipModeActive ? "dialog_buyGeneral_allVIPUsed_copy" : "dialog_buyGeneral_noVIP_copy";
        W.CastleDialogHandler.getInstance().registerDefaultDialogs(X.CastleBuyTempCommanderDialog, new B.CastleCostInfoDialogProperties(t, this.bindFunction(this.onStartAttackWithPremiumCommander), y.Localize.text(i), "", y.Localize.text("help_buyGeneral")));
      } else {
        this.sendMovement(1);
      }
    }
  };
  CastlePostAttackDialog.prototype.sendMovement = function (e) {
    var t = this.selectedHorse;
    var i = I.int(t ? t.wodId : -1);
    if (U.instanceOfClass(this.fightScreenInfoVO, "CastleTreasureHuntFightscreenVO")) {
      this.sendTreasureHuntAttack(i, e);
    } else if (U.instanceOfClass(this.fightScreenInfoVO, "CastleAttackInfoVO")) {
      this.checkEquipmentAndSendAttack(i, e);
    } else if (U.instanceOfClass(this.fightScreenInfoVO, "CastleSupportDefenceVO")) {
      this.sendSupport(i, e);
    } else if (U.instanceOfClass(this.fightScreenInfoVO, "CastleTroopSupportVO")) {
      this.sendTroops(i, e);
    }
  };
  CastlePostAttackDialog.prototype.sendTreasureHuntAttack = function (e, t) {
    R.CastleModel.treasureMapData.sendTreasureHuntAttack(this.fightScreenInfoVO, e, t, this.dialogProperties.selectedLord, this.checkForHorsePayedWithPegasusTickets());
    this.callHideFunction();
    this.hide();
  };
  CastlePostAttackDialog.prototype.checkEquipmentAndSendAttack = function (e, t) {
    var i = new N.EquipmentExpireDialogProperties(this.dialogProperties.selectedLord, this.getTotalTravelTime(), e, t, this.bindFunction(this.sendAttack), this.bindFunction(this.onAttackAnywayDenied));
    if (i.willAnyEquipmentExpireBeforeArrival()) {
      K.CastleExternalDialog.dialogHandler.registerDefaultDialogs(q.EquipmentExpireDialog, i);
    } else {
      this.sendAttack(e, t);
      this.callHideFunction();
      this.hide();
    }
  };
  CastlePostAttackDialog.prototype.onAttackAnywayDenied = function () {
    this.hide();
  };
  CastlePostAttackDialog.prototype.sendAttack = function (e, t) {
    if (this.env.isOnTemporaryServer && this.fightScreenInfoVO.targetArea.areaType == p.WorldConst.AREA_TYPE_CASTLE && M.TempServerHelper.tmpServerEvent && M.TempServerHelper.tmpServerEvent.isCollectorScoring) {
      R.CastleModel.attackData.sendAttackTempServer(this.fightScreenInfoVO, e, t, this.shareViewCheckbox.isSelected, this.lootPriorityDropdown.selectedData.resource, this.dialogProperties.selectedLord, this.checkForHorsePayedWithPegasusTickets(), this.getSlowDownOffsetInSeconds());
    } else if (!P.ABGHelper.isOnABGAndCollector || this.fightScreenInfoVO.targetArea.areaType != p.WorldConst.AREA_TYPE_CASTLE && this.fightScreenInfoVO.targetArea.areaType != p.WorldConst.AREA_TYPE_CAPITAL) {
      R.CastleModel.attackData.sendAttack(this.fightScreenInfoVO, e, t, this.shareViewCheckbox.isSelected, this.lootPriorityDropdown.selectedData.resource, this.dialogProperties.selectedLord, this.checkForHorsePayedWithPegasusTickets(), this.getSlowDownOffsetInSeconds());
    } else {
      R.CastleModel.attackData.sendAttackPlayerAllianceBattleground(this.fightScreenInfoVO, e, t, this.shareViewCheckbox.isSelected, this.lootPriorityDropdown.selectedData.resource, this.dialogProperties.selectedLord, this.checkForHorsePayedWithPegasusTickets(), this.getSlowDownOffsetInSeconds());
    }
    this.callHideFunction();
    this.hide();
  };
  CastlePostAttackDialog.prototype.sendSupport = function (e, t) {
    this.fightScreenInfoVO.waitTime = this.getWaitTime();
    R.CastleModel.attackData.sendSupport(this.fightScreenInfoVO, e, t, this.dialogProperties.selectedLord, this.checkForHorsePayedWithPegasusTickets(), this.getSlowDownOffsetInSeconds());
    this.callHideFunction();
    this.hide();
  };
  CastlePostAttackDialog.prototype.sendTroops = function (e, t) {
    H.CastleTroopSupportData.sendTroops(this.fightScreenInfoVO, e, t, this.dialogProperties.selectedLord, this.fightScreenInfoVO.targetArea.kingdomID, this.checkForHorsePayedWithPegasusTickets(), this.getSlowDownOffsetInSeconds());
    this.callHideFunction();
    this.hide();
  };
  CastlePostAttackDialog.prototype.onStartAttackWithPremiumCommander = function () {
    if (!R.CastleModel.boostData.premiumAccountVO.isActive && R.CastleModel.costsData.getFinalCostsC2(E.TravelConst.TRAVEL_PREMIUM_COMMANDER_COSTS_C2) > R.CastleModel.currencyData.c2Amount) {
      W.CastleDialogHandler.getInstance().registerDefaultDialogs(z.CastleNoMoneyC2Dialog, new F.CastleNoMoneyC2DialogProperties());
    } else {
      this.sendMovement(1);
      this.callHideFunction();
      this.hide();
    }
  };
  CastlePostAttackDialog.prototype.callHideFunction = function () {
    if (this.dialogProperties.hideFunction != null) {
      this.dialogProperties.hideFunction();
    }
  };
  Object.defineProperty(CastlePostAttackDialog.prototype, "shareViewCheckboxVisible", {
    set: function (e) {
      this.shareViewCheckbox.disp.visible = e;
      this.dialogDisp.txt_checkbox.visible = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostAttackDialog.prototype, "lootPriorityDropdownVisible", {
    set: function (e) {
      this.itxt_dropdown.visible = e;
      this.dialogDisp.mc_dropdown.visible = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostAttackDialog.prototype, "fightScreenInfoVO", {
    get: function () {
      return this.dialogProperties.attackInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostAttackDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePostAttackDialog.prototype.startTravelAction = function () {
    this.startAttack();
  };
  Object.defineProperty(CastlePostAttackDialog.prototype, "distance", {
    get: function () {
      return this.fightScreenInfoVO.distance;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(w.ACastlePostActionDialog.prototype, "distance").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostAttackDialog.prototype, "cost", {
    get: function () {
      return this.fightScreenInfoVO.getTravelCost(this.dialogProperties.selectedLord);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(w.ACastlePostActionDialog.prototype, "cost").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostAttackDialog.prototype, "unlockedHorses", {
    get: function () {
      if (!R.CastleModel.permanentCastleData) {
        return null;
      }
      var e;
      var t = R.CastleModel.permanentCastleData;
      if (U.instanceOfClass(this.fightScreenInfoVO.sourceArea, "FactionCampMapobjectVO")) {
        if ((e = t.getCastleByAreaInfo(this.fightScreenInfoVO.sourceArea)) && e.horsesVO) {
          return e.horsesVO.horses;
        } else {
          return null;
        }
      } else if ((e = t.getUnitBaseLocation(this.fightScreenInfoVO.sourceArea)) && e.horsesVO) {
        return e.horsesVO.horses;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastlePostAttackDialog.prototype.getTravelBoost = function (e) {
    return I.int(e.unitBoost);
  };
  CastlePostAttackDialog.prototype.getBoostCostC1 = function (e) {
    return I.int(R.CastleModel.costsData.getFinalCostsC1(E.TravelConst.getHorseCostC1(this.distance, this.fightScreenInfoVO.getSumOfItems(), e.costFactorC1)));
  };
  CastlePostAttackDialog.prototype.getBoostCostC2 = function (e) {
    if (e.isPayedWithPegasusTickets) {
      return 0;
    } else {
      return I.int(R.CastleModel.costsData.getFinalCostsC2(E.TravelConst.getHorseCostC2(this.distance, this.fightScreenInfoVO.getSumOfItems(), e.costFactorC2)));
    }
  };
  Object.defineProperty(CastlePostAttackDialog.prototype, "normalTravelTime", {
    get: function () {
      return this.fightScreenInfoVO.getTravelTime(this.dialogProperties.attackInfoVO.targetArea, this.dialogProperties.selectedLord);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(w.ACastlePostActionDialog.prototype, "normalTravelTime").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePostAttackDialog.prototype.getBoostedTravelTime = function (e) {
    return I.int(this.fightScreenInfoVO.getBoostedTravelTime(this.dialogProperties.attackInfoVO.targetArea, e, this.dialogProperties.selectedLord));
  };
  Object.defineProperty(CastlePostAttackDialog.prototype, "isTravelTimeSubscriptionBoosted", {
    get: function () {
      return this.dialogProperties.attackInfoVO.travelTimeIsSubscriptionBoosted;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(w.ACastlePostActionDialog.prototype, "isTravelTimeSubscriptionBoosted").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostAttackDialog.prototype, "shipsInsteadOfHorses", {
    get: function () {
      return this.fightScreenInfoVO.sourceArea.kingdomID == u.WorldIsland.KINGDOM_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(w.ACastlePostActionDialog.prototype, "shipsInsteadOfHorses").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePostAttackDialog.prototype.getWaitTime = function () {
    return 1;
  };
  CastlePostAttackDialog.NAME = "CastlePostAttack";
  CastlePostAttackDialog.FRAME_ICON_HONOR = 1;
  CastlePostAttackDialog.FRAME_ICON_NO_HONOR = 2;
  return CastlePostAttackDialog;
}(w.ACastlePostActionDialog);
exports.CastlePostAttackDialog = k;
l.classImplementsInterfaces(k, "ICollectableRendererList");
var U = require("./1.js");
var G = require("./755.js");
var H = require("./1103.js");
var j = require("./829.js");
var W = require("./9.js");
var Y = require("./178.js");
var K = require("./11.js");
var z = require("./138.js");
var q = require("./3770.js");
var X = require("./3771.js");