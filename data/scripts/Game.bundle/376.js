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
var u = require("./2.js");
var d = require("./1.js");
var p = require("./1.js");
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
var I = require("./58.js");
var T = require("./39.js");
var v = require("./55.js");
var S = require("./146.js");
var A = require("./585.js");
var L = require("./91.js");
var P = require("./169.js");
var M = require("./427.js");
var R = require("./199.js");
var V = require("./709.js");
var x = require("./192.js");
var w = require("./26.js");
var B = require("./32.js");
var F = require("./30.js");
var N = require("./85.js");
var k = require("./4.js");
var U = require("./710.js");
var G = require("./35.js");
var H = require("./346.js");
var j = require("./230.js");
var W = require("./586.js");
var Y = require("./318.js");
var K = require("./68.js");
var z = require("./711.js");
var q = require("./214.js");
var X = require("./235.js");
var Q = require("./187.js");
var J = require("./8.js");
var Z = require("./73.js");
var $ = require("./112.js");
var ee = require("./377.js");
var te = require("./1237.js");
var ie = require("./587.js");
var ne = require("./11.js");
var oe = require("./1238.js");
var ae = require("./120.js");
var se = createjs.Point;
var re = createjs.MovieClip;
var le = createjs.MouseEvent;
var ce = function (e) {
  function CastleFightDialog(t) {
    var i = this;
    i._shopCurrentPage = 0;
    i._shopMaxPage = 0;
    i._currentShopCategory = 0;
    i._userHasMadeChanges = false;
    i._originalSpyInfoHelpTextPosX = NaN;
    i._originalSpyInfoHelpTextWidth = NaN;
    i._preventRefresh = false;
    i._lastRefreshTimeStamp = NaN;
    i.forceShopRedraw = false;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t, s.BasicModel.basicLoaderData.getVersionedItemAssetUrl("FightScreens_Generals4")) || this;
  }
  n.__extends(CastleFightDialog, e);
  CastleFightDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.setTickEnablement();
    this.disp.changeTextFieldCacheScale(2);
    this._originalSpyInfoHelpTextPosX = this.unitInfo.mc_unitHolder.x;
    this._originalSpyInfoHelpTextWidth = this.unitInfo.txt_help_dynamic.width;
    this._autoFill = new Me.FightDialogAutoFillComponent(this.dialogDisp.bottomMenu.mc_autoFill);
    this.bottomMenu.btn_chat.toolTipText = "allianceChat";
    this.bottomMenu.btn_toolLimit.toolTipText = "dialog_defence_toolTriggerLimit_header";
    this.textFieldManager.registerTextField(this.bottomMenu.component_Chat.btn_linkToAlliance.txt_text, new f.LocalizedTextVO("allianceChat"));
    this.bottomMenu.btn_tactics.toolTipText = "panel_fight_attackplaning";
    this.bottomMenu.component_Options.info_time.toolTipText = "panel_fight_Traveltime";
    this.bottomMenu.component_Options.info_time.mouseChildren = false;
    this.bottomMenu.component_Options.info_time_back.toolTipText = "travelTime_back";
    this.bottomMenu.component_Options.info_time_back.visible = false;
    this.bottomMenu.component_Options.info_cost.toolTipText = "travelingcosts";
    this.bottomMenu.component_Options.info_cost.mouseChildren = false;
    this.bottomMenu.component_Options.info_morale.visible = false;
    this.bottomMenu.btn_cat_units_att.toolTipText = "attackunit";
    this.bottomMenu.btn_cat_units_def.toolTipText = "defenceunit";
    this.bottomMenu.btn_cat_tools.toolTipText = "dialog_recuit_tools";
    this.bottomMenu.btn_cat_keep.toolTipText = "keep";
    this.bottomMenu.btn_cat_gate.toolTipText = "gate";
    this.bottomMenu.btn_cat_wall.toolTipText = "wall";
    this.bottomMenu.btn_cat_moat.toolTipText = "moat";
    this.userInfoMenu.hitareaC2.toolTipText = T.ClientConstTextIds.C2;
    this.userInfoMenu.hitareaC1.toolTipText = T.ClientConstTextIds.C1;
    this.bottomMenu.component_Options.mc_lordPicker_attack.visible = false;
    this.bottomMenu.component_Options.mc_townshipSupport.visible = false;
    this.bottomMenu.component_Options.lootInfo.visible = false;
    this.bottomMenu.component_Options.lootInfo.mouseChildren = false;
    J.ButtonHelper.initButtons([this.bottomMenu.btn_chat, this.bottomMenu.btn_tactics, this.bottomMenu.btn_toolLimit, this.bottomMenu.btn_cat_moat, this.bottomMenu.btn_cat_field, this.bottomMenu.btn_cat_units_att, this.bottomMenu.btn_cat_units_def, this.bottomMenu.btn_cat_tools, this.bottomMenu.btn_cat_gate, this.bottomMenu.btn_cat_wall, this.bottomMenu.btn_cat_keep], o.TwoStateIconZoomButton);
    J.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.bottomMenu.itemSelection.btn_leftArrow, this.bottomMenu.itemSelection.btn_rightArrow, this.bottomMenu.component_Chat.btn_up, this.bottomMenu.component_Chat.btn_down, this.bottomMenu.component_Chat.btn_enter, this.unitInfo.btn_leftArrow, this.unitInfo.btn_rightArrow, this.userInfoMenu.btn_payment]);
    J.ButtonHelper.initButton(this.bottomMenu.btn_close, -1, xe.ClickFeedbackButtonBackground);
    J.ButtonHelper.enableButton(this.bottomMenu.btn_toolLimit, this.isOutOfTutorial());
    this.textFieldManager.registerTextField(this.unitInfo.txt_help_dynamic, new f.LocalizedTextVO(""), new l.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    this.unitInfo.txt_help_dynamic.visible = true;
    if (this.unitInfo) {
      this.unitInfo.btn_leftArrow.visible = false;
      this.unitInfo.btn_rightArrow.visible = false;
    }
    this.advancedTroopSelection = new Oe.CastleAdvancedTroopSelectionComponent(this.disp.mc_advancedSelectionList);
    this.unLockDialog();
    this._lastKnownUserCrest = k.CastleModel.userData.playerCrest.clone();
    if (this.disp.mc_targetLord) {
      this._lordTooltipTrigger = new ye.LordEffectTooltipTrigger(this.disp.mc_targetLord);
    }
    this.dialogDisp.bottomMenu.info_township.visible = false;
    if (this.enemyInfoMenu) {
      this.enemyInfoMenu.mc_level.txt_level.x = -25;
      this.enemyInfoMenu.mc_level.txt_level.y = -12;
    }
    if (this.userLevelInfo) {
      this.userLevelInfo.mc_level.txt_level.x = -20;
      this.userLevelInfo.mc_level.txt_level.y = -12;
    }
  };
  CastleFightDialog.prototype.initLordPicker = function (e = 0) {
    this.lordPickerMc.visible = true;
    if (this._lordPicker) {
      this._lordPicker.destroy();
    }
    var t = this.getLordsWithPremiumCommander();
    this._lordPicker = new be.CastleLordPicker(this.lordPickerMc, t, this._fightScreenVO.isConquerAttack, false, true);
    this._lordPicker.selectedIndex = e;
    this._lordPicker.addEventListener(P.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onSelectedLordChanged));
    this.updateSelectedLord();
    this.updateLordPickerTooltip();
  };
  CastleFightDialog.prototype.getLordsWithPremiumCommander = function () {
    var e = k.CastleModel.lordData.getDefaultLordByID(g.TravelConst.COMMANDER_PREMIUM);
    if (k.CastleModel.userData.level >= I.ClientConstLevelRestrictions.MIN_LEVEL_SELECT_PREMIUM_COMMANDER) {
      return k.CastleModel.lordData.commanders.concat([e]);
    } else {
      return k.CastleModel.lordData.commanders;
    }
  };
  CastleFightDialog.prototype.initPresetPicker = function () {
    if (!this._presetPicker) {
      this.presetPickerMc.visible = true;
      this._presetPicker = new De.FightPresetPicker(this.presetPickerMc);
      this._presetPicker.onPresetActivated.add(this.bindFunction(this.fillWaveFromPreset));
      this._presetPicker.onPresetSaved.add(this.bindFunction(this.handleSavePresetRequested));
      this._presetPicker.onPresetUnlockRequested.add(this.bindFunction(this.handleUnlockPresetRequested));
      this._presetPicker.onPresetOptions.add(this.bindFunction(this.handlePresetOptions));
    }
  };
  CastleFightDialog.prototype.handlePresetOptions = function (e) {
    ge.CastleDialogHandler.getInstance().registerDefaultDialogs(Le.RenameFightPresetDialog, new oe.RenameFightPresetDialogProperties(e));
  };
  CastleFightDialog.prototype.handleSavePresetRequested = function (e) {
    if (e.unlocked) {
      this.fillPresetFromWave(e);
      k.CastleModel.fightPresetData.savePresetArmy(e);
    }
  };
  CastleFightDialog.prototype.handleUnlockPresetRequested = function (e) {
    var t = this;
    ge.CastleDialogHandler.getInstance().registerDefaultDialogs(Ae.CastleConfirmCostsDialog, new ie.CastleConfirmCostsDialogProperties(m.Localize.text("dialog_troopPreset_unlock_header"), m.Localize.text("dialog_troopPreset_unlock_desc"), e.unlockPrice, null, function () {
      t.unlockPreset(e);
    }, function () {
      t._presetPicker.selectPreviousUnlockedItem();
    }, function () {
      t._presetPicker.selectPreviousUnlockedItem();
    }));
  };
  CastleFightDialog.prototype.unlockPreset = function (e) {
    k.CastleModel.fightPresetData.unlockPreset(e);
  };
  CastleFightDialog.prototype.fillPresetFromWave = function (e) {};
  CastleFightDialog.prototype.fillWaveFromPreset = function (e, t) {};
  Object.defineProperty(CastleFightDialog.prototype, "presetPickerMc", {
    get: function () {
      return this.bottomMenu.component_Options.mc_fightPresetPicker;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "lordPickerMc", {
    get: function () {
      return this.bottomMenu.component_Options.mc_lordPicker_attack;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightDialog.prototype.showUserLevel = function () {
    if (this.userLevelInfo) {
      if (k.CastleModel.userData.isLegend) {
        this.userLevelInfo.mc_level.visible = false;
        this.userLevelInfo.mc_legendLevel.visible = true;
        this.textFieldManager.registerTextField(this.userLevelInfo.mc_legendLevel.legend.txt_legendLevel, new O.NumberVO(k.CastleModel.userData.userLegendLevel));
        this.userLevelInfo.mc_legendLevel.bg.toolTipText = "level";
        this.userLevelInfo.mc_legendLevel.legend.toolTipText = "legendLevel";
        this.userLevelInfo.mc_legendLevel.bg.mouseChildren = false;
        this.userLevelInfo.mc_legendLevel.legend.mouseChildren = false;
        this.userLevelInfo.mc_legendLevel.doCache();
      } else {
        this.userLevelInfo.mc_level.visible = true;
        this.userLevelInfo.mc_legendLevel.visible = false;
        this.userLevelInfo.mc_level.txt_level.redraw();
        this.textFieldManager.registerTextField(this.userLevelInfo.mc_level.txt_level, new O.NumberVO(k.CastleModel.userData.userLevel));
        this.userLevelInfo.mc_level.toolTipText = "level";
        this.userLevelInfo.mc_level.mouseChildren = false;
        this.userLevelInfo.mc_level.doCache();
      }
    }
  };
  CastleFightDialog.prototype.showPlayerInfo = function (e, t) {
    this.enemyInfoMenu.visible = true;
    var i = e.controllerWorldMapOwnerInfoVO;
    var n = new d.ColorTransform();
    if (h.instanceOfClass(e, "DungeonMapobjectVO") || i.allianceID != k.CastleModel.userData.allianceID) {
      n.color = D.ClientConstColor.GENERIC_RED;
    } else {
      n.color = D.ClientConstColor.GENERIC_LIGHT_BLUE;
    }
    this.enemyInfoMenu.cc.useFilters([new createjs.ColorFilter(n.redMultiplier, n.greenMultiplier, n.blueMultiplier, n.alphaMultiplier, n.redOffset, n.greenOffset, n.blueOffset, n.alphaOffset)]);
    this.textFieldManager.registerTextField(this.enemyInfoMenu.txt_castle, new E.TextVO(e.areaNameString)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.enemyInfoMenu.txt_name, new E.TextVO(i.playerName)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.enemyInfoMenu.txt_alliance, new E.TextVO(i.allianceName));
    this.enemyInfoMenu.mc_level.toolTipText = "level";
    this.enemyInfoMenu.mc_level.mouseChildren = false;
    this.enemyInfoMenu.mc_legendLevel.bg.toolTipText = "level";
    this.enemyInfoMenu.mc_legendLevel.legend.toolTipText = "legendLevel";
    this.enemyInfoMenu.mc_legendLevel.bg.mouseChildren = false;
    this.enemyInfoMenu.mc_legendLevel.legend.mouseChildren = false;
    if (h.instanceOfClass(e, "ABGAllianceTowerMapobjectVO")) {
      this.enemyInfoMenu.mc_level.visible = false;
      this.enemyInfoMenu.mc_legendLevel.visible = false;
    } else if (i.isLegend) {
      this.enemyInfoMenu.mc_level.visible = false;
      this.enemyInfoMenu.mc_legendLevel.visible = true;
      this.textFieldManager.registerTextField(this.enemyInfoMenu.mc_legendLevel.legend.txt_legendLevel, new O.NumberVO(i.playerLegendLevel));
    } else if ($.PlayerHelper.isNpcPvpPlayer(i.playerID)) {
      this.enemyInfoMenu.mc_level.visible = t < _.PlayerConst.LEVEL_CAP;
      this.enemyInfoMenu.mc_legendLevel.visible = t >= _.PlayerConst.LEVEL_CAP;
      this.textFieldManager.registerTextField(this.enemyInfoMenu.mc_legendLevel.legend.txt_legendLevel, new E.TextVO("-"));
      this.enemyInfoMenu.mc_level.txt_level.redraw();
      this.textFieldManager.registerTextField(this.enemyInfoMenu.mc_level.txt_level, new O.NumberVO(t));
    } else {
      this.enemyInfoMenu.mc_level.visible = true;
      this.enemyInfoMenu.mc_legendLevel.visible = false;
      this.enemyInfoMenu.mc_level.txt_level.redraw();
      this.textFieldManager.registerTextField(this.enemyInfoMenu.mc_level.txt_level, new O.NumberVO(t));
    }
    if (this.enemyInfoMenu.mc_level.visible) {
      this.enemyInfoMenu.mc_level.doCache();
    }
    if (e.absAreaPosX == -1 || e.absAreaPosY == -1) {
      this.textFieldManager.registerTextField(this.enemyInfoMenu.txt_coordinates, new E.TextVO(""));
    } else {
      this.textFieldManager.registerTextField(this.enemyInfoMenu.txt_coordinates, new f.LocalizedTextVO(r.GenericTextIds.VALUE_COORDS, [e.absAreaPosX, e.absAreaPosY], true));
    }
    this.enemyInfoMenu.doCache();
    if (this.disp.mc_targetLord && this._fightScreenVO.spyInfo && this._fightScreenVO.spyInfo.defendingLord) {
      this.disp.mc_targetLord.visible = true;
      this.disp.mc_targetLord.mouseChildren = false;
      c.MovieClipHelper.clearMovieClip(this.disp.mc_targetLord.mc_lordHolder);
      var o = this._fightScreenVO.spyInfo.defendingLord;
      Z.EquipmentIconHelper.addLordIcon(o, this.disp.mc_targetLord.mc_lordHolder, 40);
      var a = Ee.LordEffectHelper.getFilterStrategyAttackOrDefence(this.targetArea.ownerInfo.playerID, false);
      this._lordTooltipTrigger.setProperties(o, this.targetArea, this.targetArea, a);
    } else if (this.disp.mc_targetLord) {
      this.disp.mc_targetLord.visible = false;
    }
    if (this.disp.mc_targetSkills && this._fightScreenVO.spyInfo && this._fightScreenVO.spyInfo.defenderSkills && this._fightScreenVO.spyInfo.defenderSkills.length > 0) {
      this.disp.mc_targetSkills.visible = true;
      this.disp.mc_targetSkills.mouseChildren = false;
      this.disp.mc_targetSkills.toolTipText = z.CastleLegendEffectTextComposer.getLegendBonusText(this._fightScreenVO.spyInfo.defenderSkills);
    } else if (this.disp.mc_targetSkills) {
      this.disp.mc_targetSkills.visible = false;
    }
  };
  CastleFightDialog.prototype.hideAllShopItemsCastle = function () {
    for (var e = 0; e < CastleFightDialog.SHOP_ITEMS_PER_PAGE; e++) {
      this.bottomMenu.itemSelection["i" + e].visible = false;
    }
  };
  CastleFightDialog.prototype.drawDefaultBackground = function () {
    c.MovieClipHelper.clearMovieClip(this.landscapeBG);
    c.MovieClipHelper.clearMovieClip(this.castleLayer);
    fe.DetailViewCreator.createDetailViewFromIWorldmapObject(null, this.landscapeBG, this.castleLayer, k.CastleModel.kingdomData.activeKingdomVO);
  };
  CastleFightDialog.prototype.drawAreaVO = function () {
    var e;
    var t = this.defenceDataAreaInfo;
    e = this._fightScreenVO ? this._fightScreenVO.detailViewObject : t;
    this._fightDetailView = fe.DetailViewCreator.createDetailViewFromIWorldmapObject(e, this.landscapeBG, this.castleLayer, k.CastleModel.kingdomData.getKingdomVOByID(this._fightScreenVO ? this._fightScreenVO.sourceArea.kingdomID : t.kingdomID));
    this.castleLayer.addEventListener(le.MOUSE_OUT, this.bindFunction(this.onMouseOutOfCastle));
  };
  Object.defineProperty(CastleFightDialog.prototype, "defenceDataAreaInfo", {
    get: function () {
      return k.CastleModel.defenceData.areaInfo;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightDialog.prototype.onChangeCurrency = function (e = null) {
    this.textFieldManager.registerTextField(this.userInfoMenu.txt_userCurrency1, new N.CastleLocalizedNumberVO(k.CastleModel.currencyData.c1Amount, {
      compactThreshold: T.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    this.textFieldManager.registerTextField(this.userInfoMenu.txt_userCurrency2, new N.CastleLocalizedNumberVO(k.CastleModel.currencyData.c2Amount, {
      compactThreshold: T.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    this.userInfoMenu.setChildIndex(this.userInfoMenu.hitareaC2, this.userInfoMenu.numChildren - 1);
    if (this.dialogDisp.cacheCanvas || this.dialogDisp.parent && this.dialogDisp.parent.cacheCanvas) {
      Re.CastleMovieClipHelper.updateParentCache(this.dialogDisp);
    }
  };
  CastleFightDialog.prototype.onNewToolBought = function (e) {
    var t = e.params[0];
    var i = y.int(t.W);
    var n = y.int(t.A);
    this._unitMixedInventory.changeUnitAmount(i, n);
    if (this.advancedTroopSelection.disp.visible && this.advancedTroopSelection.currentUnitCategory == b.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      this.advancedTroopSelection.addToMergedInventory(i, n);
    }
    this.fillShopItemsByGroup();
  };
  CastleFightDialog.prototype.setAppearanceFightButton = function () {
    this.autoFill.setActive(false);
  };
  CastleFightDialog.prototype.showLoaded = function (t = null) {
    if (t) {
      if (t == 1) {
        e.prototype.showLoaded.call(this, t);
        return;
      }
    } else {
      e.prototype.showLoaded.call(this, t);
    }
    this.forceShopRedraw = true;
    this.autoFill.onFillCurrentWaveButtonClicked.add(this.bindFunction(this.onAutoFillCurrentWaveClicked));
    this.autoFill.onFillAllWavesButtonClicked.add(this.bindFunction(this.onAutoFillAllWavesClicked));
    this.autoFill.onClearButtonClicked.add(this.bindFunction(this.onAutoFillClearClicked));
    this.autoFill.onShow();
    this.hideAllShopItemsCastle();
    this.setAppearanceFightButton();
    this._shopCurrentPage = 0;
    this.drawDefaultBackground();
    this.hideSpyInfo();
    this.bottomMenu.itemSelection.mc_unitToolTip.visible = false;
    this._paymentComponent = new Ce.ButtonAddGoldComponent(this.userInfoMenu.btn_payment);
    this._paymentComponent.init();
    this.onChangeCurrency();
    this._chatComponent ||= new me.CastleChatComponent(new U.CastleChatVO(this.bottomMenu.component_Chat.txt_chat, this.bottomMenu.component_Chat.txt_input, this.bottomMenu.component_Chat.btn_enter, this.bottomMenu.component_Chat.mc_blockChat, this.bottomMenu.component_Chat.btn_up, this.bottomMenu.component_Chat.btn_down, this.bottomMenu.component_Chat.btn_slider, this.bottomMenu.component_Chat.mc_sliderLine));
    this._chatComponent.enableComponent(k.CastleModel.userData.isInAlliance);
    this._chatComponent.setChatVisibility(k.CastleModel.userData.isInAlliance);
    this._chatComponent.onShow();
    this._toolsLimitComponent = new we.ToolsLimitComponent(this.bottomMenu.component_ToolLimit, k.CastleModel.defenceData.minAttackUnitsToConsumeTools);
    this._toolsLimitComponent.onShow();
    if (this._lordTooltipTrigger) {
      this._lordTooltipTrigger.show();
    }
    if (this.dialogDisp.mc_hornHolder) {
      this.attackHorn = new Te.StatusIconAttackWarnings();
      this.dialogDisp.mc_hornHolder.scaleX = this.dialogDisp.mc_hornHolder.scaleY = 0.65;
      this.attackHorn.addToContainer(this.dialogDisp.mc_hornHolder);
    }
    if (this.dialogDisp.mc_targetLord) {
      this.dialogDisp.mc_targetLord.gotoAndStop(1);
    }
  };
  CastleFightDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(V.CastleFightDataEvent.NEW_TOOL_BOUGHT, this.bindFunction(this.onNewToolBought));
    this.controller.addEventListener(B.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onChangeCurrency));
    this.controller.addEventListener(B.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
    this.controller.addEventListener(L.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onShowDialog));
    k.CastleModel.allianceData.addEventListener(A.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewChatMessage));
    k.CastleModel.kingdomData.addEventListener(x.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomUpdates));
    k.CastleModel.specialEventData.addEventListener(w.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onSpecialEventChange));
    k.CastleModel.specialEventData.addEventListener(w.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventChange));
  };
  CastleFightDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.bottomMenu.component_Chat.btn_linkToAlliance.visible = !k.CastleModel.userData.isInAlliance;
    J.ButtonHelper.initBasicButton(this.bottomMenu.component_Chat.btn_linkToAlliance);
    J.ButtonHelper.enableButton(this.bottomMenu.component_Chat.btn_linkToAlliance, k.CastleModel.userData.userXP >= g.AllianceConst.MIN_XP);
  };
  CastleFightDialog.prototype.onSpecialEventChange = function (e) {
    this.refreshElements();
    this._advancedFightScreenHelper.handle(null);
  };
  CastleFightDialog.prototype.onKingdomUpdates = function (e) {
    if (this._fightScreenVO && (!k.CastleModel.kingdomData.isKingdomUnlocked(this._fightScreenVO.sourceArea.kingdomID) || this.targetArea && !k.CastleModel.kingdomData.isKingdomUnlocked(this.targetArea.kingdomID))) {
      this.hide();
    }
  };
  CastleFightDialog.prototype.onAllianceStatusChanged = function (e) {
    if (k.CastleModel.userData.allianceID < 0) {
      this._chatComponent.clearInputText();
    }
  };
  CastleFightDialog.prototype.onShowDialog = function (e) {
    this.removeDragItem();
  };
  CastleFightDialog.prototype.onSelectedLordChanged = function (e = null) {
    this.updateSelectedLord();
    this.updateSpyInfo();
    this.updateLordPickerTooltip();
  };
  CastleFightDialog.prototype.updateSelectedLord = function () {
    if (this._lordPicker && this._lordPicker.selectedLord) {
      var e = v.ClientConstUtils.getClassFromObject(this._lordPicker.selectedLord);
      this._selectedLord = new e();
      this._selectedLord.copyFromLord(this._lordPicker.selectedLord);
      if (this._fightScreenVO.additionalEffects) {
        this._selectedLord.areaEffects = this._fightScreenVO.additionalEffects.effects;
      } else {
        this._selectedLord.areaEffects = [];
      }
    }
  };
  CastleFightDialog.prototype.onAutoFillCurrentWaveClicked = function () {};
  CastleFightDialog.prototype.onAutoFillAllWavesClicked = function () {};
  CastleFightDialog.prototype.onAutoFillClearClicked = function () {};
  CastleFightDialog.prototype.hideLoaded = function (t = null) {
    if (this.attackHorn) {
      this.attackHorn.dispose();
    }
    this.autoFill.onFillCurrentWaveButtonClicked.remove(this.bindFunction(this.onAutoFillCurrentWaveClicked));
    this.autoFill.onFillAllWavesButtonClicked.remove(this.bindFunction(this.onAutoFillAllWavesClicked));
    this.autoFill.onClearButtonClicked.remove(this.bindFunction(this.onAutoFillClearClicked));
    this.autoFill.onHide();
    this.layoutManager.hideDialog(Se.CastleAttackAddUnitsDialog);
    if (this._fightDetailView) {
      this._fightDetailView.selectedTarget = null;
      this._fightDetailView.clearView();
      if (this.castleLayer && this.castleLayer.contains(this._fightDetailView.castleLayer)) {
        this.castleLayer.removeChild(this._fightDetailView.castleLayer);
      }
    }
    if (this._chatComponent) {
      this._chatComponent.onHide();
    }
    if (this._toolsLimitComponent) {
      this._toolsLimitComponent.onHide();
    }
    if (this._paymentComponent) {
      this._paymentComponent.destroy();
    }
    if (this._selectedItemMc) {
      this.layoutManager.nativeCursor.stopDrag(this._selectedItemMc);
    }
    if (this._lordTooltipTrigger) {
      this._lordTooltipTrigger.hide();
    }
    this._advancedFightScreenHelper.hide();
    this._currentShopCategory = -1;
    this._slotUnderMouse = null;
    e.prototype.hideLoaded.call(this, t);
  };
  CastleFightDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.unitInfo.removeEventListener(M.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickUnitItem));
    this.castleLayer.removeEventListener(le.MOUSE_OUT, this.bindFunction(this.onMouseOutOfCastle));
    if (this._lordPicker) {
      this._lordPicker.removeEventListener(P.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onSelectedLordChanged));
    }
    this.controller.removeEventListener(B.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
    this.controller.removeEventListener(V.CastleFightDataEvent.NEW_TOOL_BOUGHT, this.bindFunction(this.onNewToolBought));
    this.controller.removeEventListener(B.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onChangeCurrency));
    this.controller.removeEventListener(L.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onShowDialog));
    k.CastleModel.kingdomData.removeEventListener(x.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomUpdates));
    k.CastleModel.allianceData.removeEventListener(A.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewChatMessage));
    k.CastleModel.specialEventData.removeEventListener(w.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onSpecialEventChange));
    k.CastleModel.specialEventData.removeEventListener(w.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventChange));
  };
  CastleFightDialog.prototype.onNewChatMessage = function (e) {
    if (!this.bottomMenu.component_Chat.visible) {
      this.bottomMenu.btn_chat.icon.gotoAndStop(2);
    }
  };
  CastleFightDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this.resetSlotVisuals();
    if (this._selectedDragUnit) {
      this.checkForFittingSlots(this._selectedDragUnit);
    }
  };
  CastleFightDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (this._fightDetailView && (this.isFrontLayer(t) || this.isKeepLayer(t) || this.isRightFlankLayer(t) || this.isLeftFlankLayer(t) || this.isMiddleFlankLayer(t) || this.isMoatLayer(t))) {
      this.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_CLICK);
    }
    if (h.instanceOfClass(t.target, "FightScreenSlotContainer") || h.instanceOfClass(t.target, "AttackSlotContainer")) {
      this._slotUnderMouse = t.target;
      var i = t.target.itemVO;
      var n = t.target.itemContainer;
      if (this._selectedDragUnit) {
        if (!this._selectedDragUnit.isToolForSlotType(i.slotType) && !n.isFull && !n.exceedsSupportToolSlotLimit(i, this._selectedDragUnit)) {
          if (this._slotUnderMouse.mc_bg) {
            this._slotUnderMouse.mc_bg.useFilters(K.BitmapFilterHelper.FILTER_GLOW_FIGHT_SLOT_UNAVAILABLE, false);
          } else {
            this._slotUnderMouse.useFilters(K.BitmapFilterHelper.FILTER_GLOW_FIGHT_SLOT_UNAVAILABLE, false);
          }
        }
      } else if (!i.isFree()) {
        this.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_CLICK);
        this._slotUnderMouse.scaleX = this._slotUnderMouse.scaleY = 1.1;
      }
    }
    if (h.instanceOfClass(t.target.parent, "FightScreenInventory_Item")) {
      var o = t.target.parent.unitVO;
      this.bottomMenu.itemSelection.mc_unitToolTip.visible = true;
      this.bottomMenu.itemSelection.mc_unitToolTip.x = t.target.parent.x;
      this.textFieldManager.registerTextField(this.bottomMenu.itemSelection.mc_unitToolTip.txt_title, new f.LocalizedTextVO(o.getNameString())).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.bottomMenu.itemSelection.mc_unitToolTip.txt_value, new f.LocalizedTextVO(o.getShortInfoString())).autoFitToBounds = true;
      if (o.isAuxiliary) {
        this.textFieldManager.registerTextField(this.bottomMenu.itemSelection.mc_unitToolTip.txt_status, new f.LocalizedTextVO("auxiliaries"));
      } else {
        this.textFieldManager.registerTextField(this.bottomMenu.itemSelection.mc_unitToolTip.txt_status, new f.LocalizedTextVO(""));
      }
      this.bottomMenu.itemSelection.mc_unitToolTip.mouseChildren = false;
      this.bottomMenu.itemSelection.mc_unitToolTip.mouseEnabled = false;
    } else if (t.target != this.bottomMenu.itemSelection.mc_unitToolTip) {
      this.bottomMenu.itemSelection.mc_unitToolTip.visible = false;
    }
  };
  CastleFightDialog.prototype.isMoatLayer = function (e) {
    return e.target == this._fightDetailView.layerMoat && this.hasMoatLayerAction;
  };
  CastleFightDialog.prototype.isMiddleFlankLayer = function (e) {
    return e.target == this._fightDetailView.layerMiddle && this.hasMiddleFlankLayerAction;
  };
  CastleFightDialog.prototype.isLeftFlankLayer = function (e) {
    return e.target == this._fightDetailView.layerLeft && this.hasLeftFlankLayerAction;
  };
  CastleFightDialog.prototype.isRightFlankLayer = function (e) {
    return e.target == this._fightDetailView.layerRight && this.hasRightFlankLayerAction;
  };
  CastleFightDialog.prototype.isKeepLayer = function (e) {
    return e.target == this._fightDetailView.layerKeep && this.hasKeepLayerAction;
  };
  CastleFightDialog.prototype.isFrontLayer = function (e) {
    return e.target == this._fightDetailView.layerFront && this.hasFrontLayerAction;
  };
  Object.defineProperty(CastleFightDialog.prototype, "hasMoatLayerAction", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "hasMiddleFlankLayerAction", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "hasLeftFlankLayerAction", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "hasRightFlankLayerAction", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "hasKeepLayerAction", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "hasFrontLayerAction", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightDialog.prototype.onMouseDown = function (e) {
    if (h.instanceOfClass(e.target.parent, "FightScreenInventory_Item")) {
      var t = e.target.parent;
      switch (t) {
        case this.bottomMenu.itemSelection.i0:
        case this.bottomMenu.itemSelection.i1:
        case this.bottomMenu.itemSelection.i2:
        case this.bottomMenu.itemSelection.i3:
        case this.bottomMenu.itemSelection.i4:
        case this.bottomMenu.itemSelection.i5:
        case this.bottomMenu.itemSelection.i6:
        case this.bottomMenu.itemSelection.i7:
          var i = t.unitVO;
          this.bottomMenu.itemSelection.mc_unitToolTip.visible = false;
          if (this._selectedDragUnit) {
            if (i.wodId == this._selectedDragUnit.wodId) {
              this.onResetDragItem();
              this.removeDragItem();
            } else if (t.unitVO.inventoryAmount > 0) {
              this.addDragItem(i);
            }
            this._advancedFightScreenHelper.handle(t);
            this.updateContainer();
          } else if (t.unitVO.inventoryAmount > 0) {
            this.addDragItem(t.unitVO);
            this._advancedFightScreenHelper.handle(t);
            this.updateContainer();
          }
          if (d.currentBrowserInfo.isTouchEvent(e) && this._selectedDragUnit) {
            this.checkForFittingSlots(this._selectedDragUnit);
            this.layoutManager.nativeCursor.draggedItemVisible = false;
          }
      }
    }
  };
  CastleFightDialog.prototype.resetSlotVisuals = function () {
    if (this._slotUnderMouse && this._slotUnderMouse.stage) {
      this.initContainer(this._slotUnderMouse);
      this._slotUnderMouse = null;
    }
  };
  CastleFightDialog.prototype.addDragItem = function (e) {
    this.removeDragItem();
    this._selectedDragUnit = e;
    this._selectedItemMc = Ie.WodPicHelper.addPlayerUnitPic(this._selectedDragUnit, null, CastleFightDialog.MAX_WIDTH, CastleFightDialog.MAX_HEIGHT);
    this.layoutManager.nativeCursor.startDrag(this._selectedItemMc);
    this.checkForFittingSlots(e);
    this._fightDetailView.castleLayer.mouseEnabled = false;
  };
  CastleFightDialog.prototype.updateContainer = function () {};
  CastleFightDialog.prototype.removeDragItem = function () {
    if (this._selectedItemMc) {
      this.layoutManager.nativeCursor.stopDrag(this._selectedItemMc);
      this._selectedItemMc = null;
      this._selectedDragUnit = null;
      this.clearSlotMarks();
      this._fightDetailView.castleLayer.mouseEnabled = true;
    }
  };
  CastleFightDialog.prototype.initContainer = function (e) {
    e.changeTextFieldCacheScale(2);
  };
  CastleFightDialog.prototype.positionContainer = function (e, t, i, n, o = 0, a = 0) {
    e.x = i % t * n + o;
    var s = Math.floor(i / t);
    e.y = s * n + a;
  };
  CastleFightDialog.prototype.clearSlotMarks = function () {
    if (this._allContainerOnScreen != null) {
      for (var e = 0, t = this._allContainerOnScreen; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          this.initContainer(i);
        }
      }
    }
  };
  CastleFightDialog.prototype.checkForFittingSlots = function (e) {
    if (this._allContainerOnScreen != null) {
      for (var t = 0, i = this._allContainerOnScreen; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = n.itemContainer;
          var a = n.itemVO;
          var s = o.isFull || o.exceedsSupportToolSlotLimit(a, e);
          if ((a.isFree() || a.isSameType(this._selectedDragUnit)) && e.isToolForSlotType(a.slotType) && !s) {
            n.alpha = 1;
            n.content.mc_unit.alpha = 1;
          } else {
            n.content.mc_unit.alpha = 0.3;
          }
          if (e.isToolForSlotType(a.slotType) && !s) {
            if (n.mc_bg) {
              n.mc_bg.useFilters(K.BitmapFilterHelper.FILTER_GLOW_FIGHT_SLOT_AVAILABLE, false);
            } else {
              n.useFilters(K.BitmapFilterHelper.FILTER_GLOW_FIGHT_SLOT_AVAILABLE, false);
            }
          }
        }
      }
    }
  };
  CastleFightDialog.prototype.onMouseUp = function (e) {
    if (d.currentBrowserInfo.isTouchEvent(e) && this._selectedDragUnit) {
      e.target = e.target.stage.getObjectUnderPoint(e.stageX, e.stageY, 1);
    }
    if (h.instanceOfClass(e.target, "FightScreenSlotContainer") || h.instanceOfClass(e.target, "AttackSlotContainer")) {
      var t;
      var i = e.target.itemContainer;
      var n = e.target.itemVO;
      if (this._selectedDragUnit) {
        if (h.instanceOfClass(this._selectedDragUnit, "ToolUnitVO") && this._selectedDragUnit.hasLimitedAmountPerWave && this.isMaxAmountPerWaveReached(this._selectedDragUnit)) {
          return;
        }
        if (this._selectedDragUnit.isToolForSlotType(n.slotType)) {
          if (!n.isFree() || i.isFull || i.exceedsSupportToolSlotLimit(n, this._selectedDragUnit)) {
            if (n.isSameType(this._selectedDragUnit)) {
              if (!(t = this._unitMixedInventory.getUnit(n.unitVO.wodId))) {
                t = k.CastleModel.wodData.createVObyWOD(n.unitVO.wodId, ue.CastleWodData.TYPE_UNIT);
              }
              this.editUnitSlot(t, i, n);
            } else if (!n.isFree() && !i.exceedsSupportToolSlotLimit(n, this._selectedDragUnit)) {
              this.onUnitFitsSlot(n, i);
            }
          } else {
            this.onUnitFitsSlot(n, i);
          }
        }
      } else {
        if (!n.isFree()) {
          if (!(t = this._unitMixedInventory.getUnit(n.unitVO.wodId))) {
            t = k.CastleModel.wodData.createVObyWOD(n.unitVO.wodId, ue.CastleWodData.TYPE_UNIT);
          }
          if (h.instanceOfClass(this, "CastleDefenceDialog") && h.instanceOfClass(e.target, "FightScreenSlotContainer") && castAs(this, "CastleDefenceDialog").getDefenceCategory() != b.ClientConstCastle.DEFENCE_CATEGORY_WALL) {
            this.editUnitSlot(t, i, n);
          }
        }
        this._advancedFightScreenHelper.handle(e.target);
      }
      this.onResetDragItem();
      this.removeDragItem();
      this.updateContainer();
      this.dispatchSlotClickedEvent();
    } else if (!h.instanceOfClass(e.target.parent, "FightScreenInventory_Item")) {
      this._advancedFightScreenHelper.handle(e.target);
      this.onResetDragItem();
      this.removeDragItem();
      this.updateContainer();
      this.onResetDragItem();
      this.dispatchSlotClickedEvent();
    }
  };
  CastleFightDialog.prototype.dispatchSlotClickedEvent = function () {};
  CastleFightDialog.prototype.isMaxAmountPerWaveReached = function (e) {
    return false;
  };
  CastleFightDialog.prototype.editUnitSlot = function (e, t, i) {};
  CastleFightDialog.prototype.onUnitFitsSlot = function (e, t) {};
  CastleFightDialog.prototype.onResetDragItem = function () {};
  CastleFightDialog.prototype.changeItemAmount = function (e, t, i) {
    var n = 0;
    if (t.unitVO) {
      if (!t.isSameType(e)) {
        this.changeItemAmount(t.unitVO, t, 0);
        this.changeItemAmount(e, t, i);
        return;
      }
      if (i != t.unitVO.inventoryAmount) {
        n = y.int(t.unitVO.inventoryAmount - i);
      }
    } else {
      n = -i;
      t.unitVO = k.CastleModel.wodData.createVObyWOD(e.wodId, ue.CastleWodData.TYPE_UNIT);
    }
    if (i == 0) {
      t.unitVO = null;
    } else {
      t.unitVO.inventoryAmount = i;
    }
    t.outline = y.int(H.CastleFightItemVO.OUTLINE_NONE);
    this._unitMixedInventory.changeUnitAmount(e.wodId, n);
    this.handleRefresh();
    this._userHasMadeChanges = true;
  };
  CastleFightDialog.prototype.handleRefresh = function () {
    if (!this._preventRefresh) {
      if (F.CachedTimer.getCachedTimer() - this._lastRefreshTimeStamp < 300) {
        this._preventRefresh = true;
        window.setTimeout(this.bindFunction(this.refreshElements), Math.max(0, 300 - (F.CachedTimer.getCachedTimer() - this._lastRefreshTimeStamp)));
      } else {
        this.refreshElements();
      }
    }
  };
  CastleFightDialog.prototype.refreshElements = function () {
    this._preventRefresh = false;
    this._lastRefreshTimeStamp = F.CachedTimer.getCachedTimer();
  };
  CastleFightDialog.prototype.onClick = function (t) {
    if (J.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      if (t.target instanceof re && t.target.statusIcon) {
        t.target.statusIcon.onClick();
      }
      switch (t.target) {
        case this.userInfoMenu.btn_payment:
          this._paymentComponent.onClickButton(S.CastleOpenShopExecutor.SOURCE_FIGHTSCREEN, Be.CXFSourceTrackingConstants.SOURCE_FIGHTSCREEN);
          break;
        case this.bottomMenu.itemSelection.btn_leftArrow:
        case this.bottomMenu.itemSelection.btn_rightArrow:
          this.onClickShopArrow(t);
          break;
        case this.bottomMenu.btn_close:
          this.closeScreen();
          break;
        case this.bottomMenu.btn_chat:
          this.bottomMenu.btn_chat.icon.gotoAndStop(1);
          this.showChat();
          break;
        case this.bottomMenu.btn_toolLimit:
          this.showToolsLimit();
          break;
        case this.bottomMenu.btn_tactics:
          this.showTactics();
          break;
        case this.bottomMenu.btn_cat_keep:
          this.setShopCategory(C.DefenseConst.TOOL_TYPE_KEEP);
          break;
        case this.bottomMenu.btn_cat_wall:
          this.setShopCategory(C.DefenseConst.TOOL_TYPE_WALL);
          break;
        case this.bottomMenu.btn_cat_gate:
          this.setShopCategory(C.DefenseConst.TOOL_TYPE_GATE);
          break;
        case this.bottomMenu.btn_cat_field:
          this.setShopCategory(C.DefenseConst.TOOL_TYPE_FIELD);
          break;
        case this.bottomMenu.btn_cat_moat:
          this.setShopCategory(C.DefenseConst.TOOL_TYPE_MOAT);
          break;
        case this.bottomMenu.btn_cat_tools:
          this.setShopCategory(CastleFightDialog.SHOP_CATEGORY_TOOLS);
          break;
        case this.bottomMenu.btn_cat_units_att:
          this.setShopCategory(CastleFightDialog.SHOP_CATEGORY_UNITS_ATT);
          break;
        case this.bottomMenu.btn_cat_units_def:
          this.setShopCategory(CastleFightDialog.SHOP_CATEGORY_UNITS_DEF);
          break;
        case this.bottomMenu.itemSelection.i0.btn_instantBuy:
        case this.bottomMenu.itemSelection.i1.btn_instantBuy:
        case this.bottomMenu.itemSelection.i2.btn_instantBuy:
        case this.bottomMenu.itemSelection.i3.btn_instantBuy:
        case this.bottomMenu.itemSelection.i4.btn_instantBuy:
        case this.bottomMenu.itemSelection.i5.btn_instantBuy:
        case this.bottomMenu.itemSelection.i6.btn_instantBuy:
        case this.bottomMenu.itemSelection.i7.btn_instantBuy:
          this.showInstantBuyDialog(t.target.parent.unitVO);
          break;
        case this.bottomMenu.btn_info0:
        case this.bottomMenu.btn_info1:
        case this.bottomMenu.btn_info2:
        case this.bottomMenu.btn_info3:
        case this.bottomMenu.btn_info4:
        case this.bottomMenu.btn_info5:
        case this.bottomMenu.btn_info6:
        case this.bottomMenu.btn_info7:
          if (this.isOutOfTutorial()) {
            ge.CastleDialogHandler.getInstance().registerDefaultDialogs(Pe.CastleRecruitInfoDialog, new ae.CastleRecruitInfoDialogProperties(t.target.property));
          }
          break;
        case this.bottomMenu.component_Chat.btn_linkToAlliance:
          if (k.CastleModel.userData.userXP >= g.AllianceConst.MIN_XP) {
            ge.CastleDialogHandler.getInstance().registerDefaultDialogs(ve.CastleAllianceTeaserDialog, new te.CastleStartAllianceDialogProperties(this.bindFunction(this.hide)));
          }
      }
    }
  };
  CastleFightDialog.prototype.showInstantBuyDialog = function (e) {};
  CastleFightDialog.prototype.setShopCategory = function (e) {
    if (e != this._currentShopCategory) {
      this._currentShopCategory = e;
      this._shopCurrentPage = 0;
      this.fillShopItemsByGroup();
      this.initButtons();
    }
  };
  CastleFightDialog.prototype.updateSpyInfo = function () {
    if (this.unitInfo.visible && this.unitInfo.cachedData) {
      var e = this._fightDetailView.selectedTarget;
      this._fightDetailView.selectedTarget = null;
      this.showSpyInfo(this.unitInfo.cachedData.unitInv, this.unitInfo.cachedData.title, this.unitInfo.cachedData.swamb, this.unitInfo.cachedData.sgb, false, this.unitInfo.cachedData.isYard, false);
      this._fightDetailView.selectedTarget = e;
    }
  };
  CastleFightDialog.prototype.showSpyInfo = function (e, t, i = true, n = false, o = false, a = false, s = true) {
    if (this.isOutOfTutorial()) {
      if (!this._fightDetailView.selectedTarget) {
        if (s && this._fightScreenVO.spyInfo.itemsSupport) {
          var r = new W.UnitInventoryList();
          r.addAll(e.getUnits(null));
          r.addAll(this._fightScreenVO.spyInfo.itemsSupport.getUnits(null));
          e = r;
        }
        this.unitInfo.cachedData = {
          unitInv: e,
          title: t,
          swamb: i,
          sgb: n,
          isYard: a
        };
        this.setAttackSpyInfoTXT("");
        if (this._fightScreenVO.spyInfo.remainingSpyInfoTime <= 0) {
          c.MovieClipHelper.clearMovieClip(this.unitInfo.mc_unitHolder);
          this.textFieldManager.registerTextField(this.unitInfo.txt_title, new f.LocalizedTextVO("dialog_attack_noSpyinfos"));
          this.unitInfo.visible = true;
          this.unitInfo.btn_leftArrow.visible = false;
          this.unitInfo.btn_rightArrow.visible = false;
          this.setAttackSpyInfoTXT("dialog_attack_noSpyHelp");
        } else {
          var l = u.TimeStringHelper.getTimeToString(this._fightScreenVO.spyInfo.spyInfoAgeInSeconds, u.TimeStringHelper.ONE_TIME_FORMAT, m.Localize.text);
          var d = h.instanceOfClass(this._fightDetailView, "EventTreasurmapDetailView") || this._fightScreenVO.spyInfo.spyInfoAgeInSeconds < 1 ? "" : " (" + m.Localize.text("ago", [l]) + ")";
          if (e) {
            this.showInventoryInfo(e.getUnits(null), this.targetArea, this._fightScreenVO.targetOwner, t + d, i, n, o, a);
          }
        }
      }
    } else {
      this.unitInfo.visible = false;
    }
  };
  CastleFightDialog.prototype.setAttackSpyInfoTXT = function (e = null) {
    var t = this.unitInfo.mc_unitHolder.getBounds(this.unitInfo.mc_unitHolder.parent);
    if (e != null) {
      this.unitInfo.txt_help_dynamic.text = m.Localize.text(e);
    }
    if (this.unitInfo.mc_unitHolder.width == 0) {
      this.unitInfo.txt_help_dynamic.x = this._originalSpyInfoHelpTextPosX;
    } else {
      this.unitInfo.txt_help_dynamic.x = t.x + t.width + 10;
    }
    var i = this._originalSpyInfoHelpTextWidth - t.width;
    if (i > 0) {
      this.unitInfo.txt_help_dynamic.width = i;
    }
  };
  CastleFightDialog.prototype.showInventoryInfo = function (e, t, i, n, o = true, a = false, s = false, r = false) {
    if (this.unitInfo.property && h.instanceOfClass(this.unitInfo.property, "CastleInventoryComponent")) {
      this.unitInfo.removeEventListener(M.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickUnitItem));
      this.unitInfo.property.destroy();
    }
    c.MovieClipHelper.clearMovieClip(this.unitInfo.mc_unitHolder);
    if (e) {
      this.textFieldManager.registerTextField(this.unitInfo.txt_title, new E.TextVO(n));
      var l = [];
      var u = [];
      for (var d = 0; d < e.length; ++d) {
        if (h.instanceOfClass(e[d], "ToolUnitVO") && e[d].numberofDolls <= 0) {
          l.push(e[d]);
          if (e[d].isSupportTool && r) {
            u.push(e[d]);
          }
        } else {
          u.push(e[d]);
        }
      }
      var p = this.calculateToolsInfo(l, t.baseGateBonus, t.baseMoatBonus, t.baseWallBonus, o, a, s, r);
      this.unitInfo.property = new _e.CastleInventoryComponent(this.unitInfo, 9, p.concat(u), Library.CastleInterfaceElements.CastleAttackSpyInfoContainer_T, 35, 35, true, i.crest, 0, 5, 15, new se(10, 25), false, false);
      if (u.length > 0) {
        this.setAttackSpyInfoTXT("");
      } else {
        this.setAttackSpyInfoTXT("dialog_defense_noUnitHelp");
      }
      this.unitInfo.addEventListener(M.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickUnitItem));
      this.unitInfo.visible = true;
    }
  };
  CastleFightDialog.prototype.onClickUnitItem = function (e) {
    if (e.unitVO.wodId > 0) {
      ge.CastleDialogHandler.getInstance().registerDefaultDialogs(Pe.CastleRecruitInfoDialog, new ae.CastleRecruitInfoDialogProperties(e.unitVO, e.crestVO));
    }
  };
  CastleFightDialog.prototype.calculateToolsInfo = function (e, t = 0, i = 0, n = 0, o = true, a = false, s = false, r = false) {
    var l;
    var c = this.getDefendingLord();
    var u = this.getDefendingLegendSkillIDs();
    var d = new Map();
    var p = [];
    var g = true;
    var C = true;
    var m = t * 0.01;
    var f = 0;
    var O = i * 0.01;
    var E = 0;
    var y = n * 0.01;
    if (e != null) {
      for (var b = 0, D = e; b < D.length; b++) {
        var I = D[b];
        if (I !== undefined) {
          m += I.gateBonus;
          O += I.moatBonus;
          y += I.wallBonus;
          E += I.defRangeBonus;
          f += I.defMeleeBonus;
          var T = I.getBonusByEffect(Y.ToolEffectType.DEFENSE_BONUS);
          E += T;
          f += T;
          if (r) {
            var v = I.getBonusByEffect(Y.ToolEffectType.DEFENSE_BOOST_YARD);
            E += v;
            f += v;
          }
        }
      }
    }
    if (c) {
      if (this._fightScreenVO) {
        y += pe.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(c, G.EffectTypeEnum.EFFECT_TYPE_WALL_BONUS, this.targetArea.areaType).strength / 100;
        m += pe.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(c, G.EffectTypeEnum.EFFECT_TYPE_GATE_BONUS, this.targetArea.areaType).strength / 100;
        O += pe.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(c, G.EffectTypeEnum.EFFECT_TYPE_MOAT_BONUS, this.targetArea.areaType).strength / 100;
      }
      var S = pe.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(c, G.EffectTypeEnum.EFFECT_TYPE_MELEE_BONUS, this.targetArea.areaType).strength;
      var A = pe.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(c, G.EffectTypeEnum.EFFECT_TYPE_RANGE_BONUS, this.targetArea.areaType).strength;
      var L = pe.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(c, G.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BONUS, this.targetArea.areaType).strength;
      f += (S + L) / 100;
      E += (A + L) / 100;
      if (S > 0) {
        g = true;
      }
      if (A > 0) {
        C = true;
      }
    }
    if (u && u.length > 0) {
      if (u != null) {
        for (var P = 0, M = u; P < M.length; P++) {
          var R = M[P];
          if (R !== undefined) {
            l = k.CastleModel.legendSkillData.getSkillByID(R);
            d.get(l.effectType);
            d.set(l.effectType, l.totalEffectValue / 100);
          }
        }
      }
      if (this._fightScreenVO) {
        y += d.get(j.CastleLegendSkillEffectsEnum.WALL_BONUS) ? d.get(j.CastleLegendSkillEffectsEnum.WALL_BONUS) : 0;
        m += d.get(j.CastleLegendSkillEffectsEnum.GATE_BONUS) ? d.get(j.CastleLegendSkillEffectsEnum.GATE_BONUS) : 0;
        O += d.get(j.CastleLegendSkillEffectsEnum.MOAT_BONUS) ? d.get(j.CastleLegendSkillEffectsEnum.MOAT_BONUS) : 0;
      }
      f += d.get(j.CastleLegendSkillEffectsEnum.DEFENSE_MELEE_BONUS) ? d.get(j.CastleLegendSkillEffectsEnum.DEFENSE_MELEE_BONUS) : 0;
      E += d.get(j.CastleLegendSkillEffectsEnum.DEFENSE_RANGE_BONUS) ? d.get(j.CastleLegendSkillEffectsEnum.DEFENSE_RANGE_BONUS) : 0;
      f += d.get(j.CastleLegendSkillEffectsEnum.DEFENSE_BONUS) ? d.get(j.CastleLegendSkillEffectsEnum.DEFENSE_BONUS) : 0;
      E += d.get(j.CastleLegendSkillEffectsEnum.DEFENSE_BONUS) ? d.get(j.CastleLegendSkillEffectsEnum.DEFENSE_BONUS) : 0;
      if (d.get(j.CastleLegendSkillEffectsEnum.DEFENSE_MELEE_BONUS) > 0) {
        g = true;
      }
      if (d.get(j.CastleLegendSkillEffectsEnum.DEFENSE_RANGE_BONUS) > 0) {
        C = true;
      }
    }
    if (this._fightScreenVO && this._fightScreenVO.targetOwnerLevel >= _.PlayerConst.LEVEL_CAP && (!$.PlayerHelper.isNPCPlayer(this._fightScreenVO.targetOwner.playerID) || $.PlayerHelper.isNpcPvpPlayer(this._fightScreenVO.targetOwner.playerID))) {
      if (!h.instanceOfClass(this._fightScreenVO, "CastleSupportDefenceVO")) {
        y -= k.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(j.CastleLegendSkillEffectsEnum.WALL_REDUCTION) / 100;
        m -= k.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(j.CastleLegendSkillEffectsEnum.GATE_REDUCTION) / 100;
        O -= k.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(j.CastleLegendSkillEffectsEnum.MOAT_REDUCTION) / 100;
      }
    }
    var V = this.getSelectedLordVO();
    if (V && !s) {
      c = V;
      m = Math.max(m - pe.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(c, G.EffectTypeEnum.EFFECT_TYPE_GATE_REDUCTION, this.targetArea.areaType).strength / 100, 0);
      O = Math.max(O - pe.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(c, G.EffectTypeEnum.EFFECT_TYPE_MOAT_REDUCTION, this.targetArea.areaType).strength / 100, 0);
      y = Math.max(y - pe.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(c, G.EffectTypeEnum.EFFECT_TYPE_WALL_REDUCTION, this.targetArea.areaType).strength / 100, 0);
    }
    if (o && (O > 0 || this.targetArea.baseMoatBonus > 0)) {
      p.push(new he.EffectIconUnitVO(Y.ToolEffectType.MOAT_BONUS, Math.round(Math.max(O * 100))));
    }
    if (a && t >= 0) {
      p.push(new he.EffectIconUnitVO(Y.ToolEffectType.GATE_BONUS, Math.round(m * 100)));
    }
    if (o) {
      p.push(new he.EffectIconUnitVO(Y.ToolEffectType.WALL_BONUS, Math.round(y * 100)));
    }
    if (g) {
      p.push(new he.EffectIconUnitVO(Y.ToolEffectType.DEF_MELEE_BONUS, Math.round(f * 100 + 100)));
    }
    if (C) {
      p.push(new he.EffectIconUnitVO(Y.ToolEffectType.DEF_RANGE_BONUS, Math.round(E * 100 + 100)));
    }
    return p;
  };
  CastleFightDialog.prototype.getSelectedLordVO = function () {
    if (this._lordPicker && this._lordPicker.selectedLord) {
      return this._selectedLord;
    } else {
      return null;
    }
  };
  CastleFightDialog.prototype.getDefendingLord = function () {
    return this._fightScreenVO.spyInfo.defendingLord;
  };
  CastleFightDialog.prototype.getDefendingLegendSkillIDs = function () {
    return this._fightScreenVO.spyInfo.defenderSkills;
  };
  CastleFightDialog.prototype.hideSpyInfo = function () {
    if (this.unitInfo) {
      this.unitInfo.visible = false;
    }
  };
  CastleFightDialog.prototype.initButtons = function () {
    J.ButtonHelper.setButtonSelected(this.bottomMenu.btn_cat_keep, this._currentShopCategory == C.DefenseConst.TOOL_TYPE_KEEP);
    J.ButtonHelper.setButtonSelected(this.bottomMenu.btn_cat_wall, this._currentShopCategory == C.DefenseConst.TOOL_TYPE_WALL);
    J.ButtonHelper.setButtonSelected(this.bottomMenu.btn_cat_gate, this._currentShopCategory == C.DefenseConst.TOOL_TYPE_GATE);
    J.ButtonHelper.setButtonSelected(this.bottomMenu.btn_cat_field, this._currentShopCategory == C.DefenseConst.TOOL_TYPE_FIELD);
    J.ButtonHelper.setButtonSelected(this.bottomMenu.btn_cat_moat, this._currentShopCategory == C.DefenseConst.TOOL_TYPE_MOAT);
    J.ButtonHelper.setButtonSelected(this.bottomMenu.btn_cat_units_att, this._currentShopCategory == CastleFightDialog.SHOP_CATEGORY_UNITS_ATT);
    J.ButtonHelper.setButtonSelected(this.bottomMenu.btn_cat_units_def, this._currentShopCategory == CastleFightDialog.SHOP_CATEGORY_UNITS_DEF);
    J.ButtonHelper.setButtonSelected(this.bottomMenu.btn_cat_tools, this._currentShopCategory == CastleFightDialog.SHOP_CATEGORY_TOOLS);
  };
  CastleFightDialog.prototype.onClickShopArrow = function (e) {
    var t = this._shopCurrentPage;
    if (e.target == this.bottomMenu.itemSelection.btn_leftArrow) {
      this._shopCurrentPage = y.int(Math.max(0, this._shopCurrentPage - 1));
    } else {
      this._shopCurrentPage = y.int(Math.min(this._shopMaxPage, this._shopCurrentPage + 1));
    }
    if (t != this._shopCurrentPage) {
      this.fillShopItemsByGroup();
    }
  };
  CastleFightDialog.prototype.initShopArrows = function (e) {
    this._shopMaxPage = y.int((e - 1) / CastleFightDialog.SHOP_ITEMS_PER_PAGE);
    this.bottomMenu.itemSelection.btn_rightArrow.visible = this._shopMaxPage > 0 && this._shopCurrentPage < this._shopMaxPage;
    this.bottomMenu.itemSelection.btn_leftArrow.visible = this._shopMaxPage > 0 && this._shopCurrentPage > 0;
  };
  CastleFightDialog.prototype.onMouseOutOfCastle = function (e) {
    if (!e.relatedTarget || !e.relatedTarget.isInContainer(this.unitInfo)) {
      if (Re.CastleMovieClipHelper.isDOPartOfDO(e.target, this.unitInfo)) {
        this._fightDetailView.removeGlow();
        if (!this._fightDetailView.selectedTarget) {
          this.hideSpyInfo();
        }
      }
      if (this._fightDetailView) {
        this._fightDetailView.removeGlow();
        if (!this._fightDetailView.selectedTarget) {
          this.hideSpyInfo();
        }
      }
    }
  };
  CastleFightDialog.prototype.fillShopItemsByGroup = function () {
    var e = this.getFilteredArray(this._currentShopCategory);
    this.initShopArrows(e.length);
    this._shopCurrentPage = y.int(Math.min(this._shopCurrentPage, this._shopMaxPage));
    var t = this._shopCurrentPage * CastleFightDialog.SHOP_ITEMS_PER_PAGE;
    for (var i = 0; i < CastleFightDialog.SHOP_ITEMS_PER_PAGE; i++) {
      var n = this.bottomMenu.itemSelection["i" + i];
      var o = this.bottomMenu["btn_info" + i];
      J.ButtonHelper.initBasicButton(o);
      J.ButtonHelper.enableButton(o, this.isOutOfTutorial());
      if (t < e.length) {
        n.mc_contentHolder.mouseChildren = false;
        n.mc_contentHolder.mouseEnabled = false;
        var a = e[t];
        if (!n.unitVO || n.unitVO.wodId != a.wodId || n.unitVO.inventoryAmount != a.inventoryAmount || !this._lastKnownUserCrest.equals(k.CastleModel.userData.playerCrest) || !!this.forceShopRedraw) {
          n.unitVO = a;
          n.mc_bg.mouseChildren = false;
          Ie.WodPicHelper.setCorrectUnitBackgroundPic(a, n.mc_bg, Library.CastleInterfaceElements.FightScreenInventoryItemBackground, Library.CastleInterfaceElements.FightScreenInventoryItemBackground_Berimond);
          Ie.WodPicHelper.addPlayerUnitPicToContainer(a, n.mc_contentHolder, CastleFightDialog.SHOP_MAX_ITEM_WIDTH, CastleFightDialog.SHOP_MAX_ITEM_HEIGHT, CastleFightDialog.SHOP_MAX_ITEM_WIDTH, CastleFightDialog.SHOP_MAX_ITEM_HEIGHT, 22, new se(10, 10), true, ee.WodPicHelperUnitFramePerfectCallbackWrapper.callback(a, CastleFightDialog.SHOP_MAX_ITEM_WIDTH, CastleFightDialog.SHOP_MAX_ITEM_HEIGHT, true, false, 0, true));
        }
        this.textFieldManager.registerTextField(n.mc_contentHolder.txt_amount, new N.CastleLocalizedNumberVO(a.inventoryAmount, {
          compactThreshold: 1000000
        }), new l.InternalGGSTextFieldConfigVO(true));
        this.initInstantBuyButton(n.btn_instantBuy, a);
        n.mouseChildren = true;
        o.property = a;
        o.visible = true;
        n.visible = true;
      } else {
        n.visible = false;
        o.visible = false;
      }
      t++;
    }
    this._lastKnownUserCrest = k.CastleModel.userData.playerCrest.clone();
    this.forceShopRedraw = false;
    this.controller.dispatchEvent(new R.CastleDialogEvent(R.CastleDialogEvent.FIGHT_SCREEN_SHOP_FILLED));
  };
  CastleFightDialog.prototype.initInstantBuyButton = function (e, t) {
    de.FightScreenHelper.initInstantBuyButton(e, t, this.sourceArea);
  };
  CastleFightDialog.prototype.getFilteredArray = function (e) {
    return null;
  };
  Object.defineProperty(CastleFightDialog.prototype, "sourceArea", {
    get: function () {
      if (this._fightScreenVO) {
        return this._fightScreenVO.sourceArea;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleFightDialog.prototype.getUnitWodInArray = function (e, t) {
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.wodId == e) {
          return o;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleFightDialog.prototype, "castleadvancedTroopSelection", {
    get: function () {
      return this.advancedTroopSelection;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightDialog.prototype.closeScreen = function () {};
  CastleFightDialog.prototype.showChat = function () {
    this.bottomMenu.component_Chat.visible = true;
    this.bottomMenu.component_Options.visible = false;
    this.bottomMenu.component_ToolLimit.visible = false;
    J.ButtonHelper.setButtonSelected(this.bottomMenu.btn_tactics, false);
    J.ButtonHelper.setButtonSelected(this.bottomMenu.btn_toolLimit, false);
    J.ButtonHelper.setButtonSelected(this.bottomMenu.btn_chat, true);
  };
  CastleFightDialog.prototype.showToolsLimit = function () {
    this.bottomMenu.component_ToolLimit.visible = true;
    this.bottomMenu.component_Options.visible = false;
    this.bottomMenu.component_Chat.visible = false;
    J.ButtonHelper.setButtonSelected(this.bottomMenu.btn_tactics, false);
    J.ButtonHelper.setButtonSelected(this.bottomMenu.btn_chat, false);
    J.ButtonHelper.setButtonSelected(this.bottomMenu.btn_toolLimit, true);
  };
  CastleFightDialog.prototype.showTactics = function () {
    this.bottomMenu.component_Options.visible = true;
    this.bottomMenu.component_Chat.visible = false;
    this.bottomMenu.component_ToolLimit.visible = false;
    J.ButtonHelper.setButtonSelected(this.bottomMenu.btn_chat, false);
    J.ButtonHelper.setButtonSelected(this.bottomMenu.btn_toolLimit, false);
    J.ButtonHelper.setButtonSelected(this.bottomMenu.btn_tactics, true);
  };
  Object.defineProperty(CastleFightDialog.prototype, "unitInfo", {
    get: function () {
      return this.disp.mc_unitInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "enemyInfoMenu", {
    get: function () {
      return this.disp.enemyInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "userInfoMenu", {
    get: function () {
      return this.disp.userInfo.nameAndCurrency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "userLevelInfo", {
    get: function () {
      return this.disp.userInfo.levelInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "bottomMenu", {
    get: function () {
      return this.disp.bottomMenu;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "castleLayer", {
    get: function () {
      return this.disp.castleLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "landscapeBG", {
    get: function () {
      return this.disp.mc_bg;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "targetArea", {
    get: function () {
      return this._fightScreenVO.targetArea;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var e = 1;
      if (this.disp.stage.stageWidth < this.dispBounds.width || this.disp.stage.stageWidth > this.dispBounds.width) {
        e = this.disp.stage.stageWidth / this.dispBounds.width;
      }
      if (this.disp.stage.stageHeight < this.dispBounds.height * e) {
        e = this.disp.stage.stageHeight / this.dispBounds.height;
      }
      e = Math.min(e, 1.5);
      this.disp.x = -this.dispBounds.left * e - this.dispBounds.width * e / 2 + this.disp.stage.stageWidth / 2;
      this.disp.y = -this.dispBounds.top * e - this.dispBounds.height * e / 2 + this.disp.stage.stageHeight / 2;
      this.disp.scaleX = this.disp.scaleY = e;
    }
  };
  CastleFightDialog.prototype.getShopItemHolderByUnit = function (e) {
    for (var t = 0; t < CastleFightDialog.SHOP_ITEMS_PER_PAGE; t++) {
      var i = this.bottomMenu.itemSelection["i" + t];
      if (i.unitVO) {
        if (i.unitVO.wodId == e) {
          return i;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleFightDialog.prototype, "curentShopCategory", {
    get: function () {
      return this._currentShopCategory;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightDialog.prototype.hidePresetPicker = function () {
    this.presetPickerMc.visible = false;
  };
  CastleFightDialog.prototype.updateLordPickerTooltip = function () {};
  Object.defineProperty(CastleFightDialog.prototype, "autoFill", {
    get: function () {
      return this._autoFill;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightDialog.prototype.setTickEnablement = function () {
    this.disp.tickEnabled = false;
  };
  CastleFightDialog.prototype.showPlayerOrAllianceCrest = function (e, t, i) {
    if (h.instanceOfClass(i, "ABGAllianceTowerMapobjectVO")) {
      if (!this._allianceCrestContainer) {
        this._allianceCrestContainer = new re();
        this.dialogDisp.addChildAt(this._allianceCrestContainer, this.dialogDisp.getChildIndex(e) + 1);
      }
      this._allianceCrestContainer.x = e.x;
      this._allianceCrestContainer.y = e.y;
      this._allianceCrestContainer.visible = true;
      e.visible = false;
      c.MovieClipHelper.clearMovieClip(this._allianceCrestContainer);
      Q.CastleAllianceCrestHelper.setCrestGraphics(this._allianceCrestContainer, i.ownerInfo.allianceCrestVO, X.AllianceCrestSizeEnum.SIZE_FIGHTSCREEN, q.AllianceCrestEnum.DEFAULT_CREST);
    } else {
      if (this._allianceCrestContainer) {
        this._allianceCrestContainer.visible = false;
      }
      Ve.CrestHelper.setCrestGraphics(e, t, null, true);
      e.visible = true;
    }
  };
  CastleFightDialog.MAX_WIDTH = 50;
  CastleFightDialog.MAX_HEIGHT = 50;
  CastleFightDialog.SHOP_CATEGORY_TOOLS = 100;
  CastleFightDialog.SHOP_CATEGORY_UNITS = 101;
  CastleFightDialog.SHOP_CATEGORY_UNITS_DEF = 102;
  CastleFightDialog.SHOP_CATEGORY_UNITS_ATT = 103;
  CastleFightDialog.SHOP_CATEGORY_SUPPORT_TOOLS = 104;
  CastleFightDialog.SHOP_MAX_ITEM_WIDTH = 45;
  CastleFightDialog.SHOP_MAX_ITEM_HEIGHT = 55;
  CastleFightDialog.SHOP_ITEMS_PER_PAGE = 8;
  return CastleFightDialog;
}(ne.CastleExternalDialog);
exports.CastleFightDialog = ce;
var ue = require("./56.js");
var de = require("./509.js");
var pe = require("./111.js");
var he = require("./895.js");
var ge = require("./9.js");
var Ce = require("./428.js");
var _e = require("./378.js");
var me = require("./712.js");
var fe = require("./1240.js");
var Oe = require("./348.js");
var Ee = require("./133.js");
var ye = require("./298.js");
var be = require("./1252.js");
var De = require("./1317.js");
var Ie = require("./63.js");
var Te = require("./929.js");
var ve = require("./388.js");
var Se = require("./749.js");
var Ae = require("./612.js");
var Le = require("./1391.js");
var Pe = require("./115.js");
var Me = require("./1246.js");
var Re = require("./41.js");
var Ve = require("./61.js");
var xe = require("./121.js");
var we = require("./2508.js");
var Be = require("./108.js");
p.classImplementsInterfaces(ce, "ICollectableRendererList");