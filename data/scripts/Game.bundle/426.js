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
var u = require("./100.js");
var d = require("./1.js");
var p = require("./1.js");
var h = require("./1.js");
var g = require("./1.js");
var C = require("./5.js");
var _ = require("./5.js");
var m = require("./5.js");
var f = require("./5.js");
var O = require("./3.js");
var E = require("./3.js");
var y = require("./3.js");
var b = require("./3.js");
var D = require("./6.js");
var I = require("./23.js");
var T = require("./23.js");
var v = require("./23.js");
var S = require("./18.js");
var A = require("./16.js");
var L = require("./39.js");
var P = require("./893.js");
var M = require("./2142.js");
var R = require("./2143.js");
var V = require("./2144.js");
var x = require("./894.js");
var w = require("./708.js");
var B = require("./892.js");
var F = require("./37.js");
var N = require("./21.js");
var k = require("./232.js");
var U = require("./199.js");
var G = require("./118.js");
var H = require("./179.js");
var j = require("./139.js");
var W = require("./709.js");
var Y = require("./44.js");
var K = require("./13.js");
var z = require("./4.js");
var q = require("./33.js");
var X = require("./27.js");
var Q = require("./64.js");
var J = require("./318.js");
var Z = require("./582.js");
var $ = require("./583.js");
var ee = require("./710.js");
var te = require("./68.js");
var ie = require("./24.js");
var ne = require("./197.js");
var oe = require("./895.js");
var ae = require("./42.js");
var se = require("./8.js");
var re = require("./585.js");
var le = require("./376.js");
var ce = require("./350.js");
var ue = require("./721.js");
var de = require("./722.js");
var pe = require("./718.js");
var he = require("./247.js");
var ge = require("./719.js");
var Ce = require("./164.js");
var _e = require("./430.js");
var me = require("./2510.js");
var fe = require("./2511.js");
var Oe = require("./614.js");
var Ee = require("./2512.js");
var ye = createjs.Container;
var be = createjs.Point;
var De = function (e) {
  function CastleDefenceDialog(t = CastleDefenceDialog.NAME) {
    var i = this;
    i._currentDefenceCategory = 0;
    i._isInitialized = false;
    i._isGeneralSelectionOpen = true;
    i._hasActiveAllianceYardSupportLimit = false;
    i.level100LoadedCount = 0;
    i._lastUnitLineUpTime = 0;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastleDefenceDialog, e);
  CastleDefenceDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.defenceDialog.categoryMenu.btn_keep.visible = true;
    this.defenceDialog.categoryMenu.btn_wall.visible = true;
    this.defenceDialog.categoryMenu.btn_moat.visible = true;
    this.defenceDialog.categoryMenu.btn_allianceTower.visible = false;
    this.bottomMenu.btn_chat.visible = true;
    this.bottomMenu.btn_toolLimit.visible = true;
    this.bottomMenu.btn_tactics.visible = false;
    this.bottomMenu.btn_cat_tools.visible = false;
    this.bottomMenu.btn_cat_units_att.visible = false;
    this.bottomMenu.btn_cat_units_def.visible = false;
    this.defenceDialog.categoryMenu.mc_wall.btn_priority.visible = false;
    this.defenceDialog.mc_generals.visible = false;
    this.defenceDialog.mc_generals.mc_generalInfo.btn_info.mc_open.visible = false;
    this.setupTexts();
    this.defenceDialog.categoryMenu.btn_keep.toolTipText = "keep";
    this.defenceDialog.categoryMenu.btn_wall.toolTipText = "wall";
    this.defenceDialog.categoryMenu.btn_moat.toolTipText = "moat";
    this.defenceDialog.categoryMenu.btn_allianceTower.toolTipText = "dialog_beyondTheHorizon_AllianceTower_defense_buffsTab_tooltip";
    this.defenceDialog.btn_help.toolTipText = "generic_help";
    this.defenceDialog.categoryMenu.mc_wall.wall_left.btn_allocationLeftWall.toolTipText = "dialog_defence_attackButtons";
    this.defenceDialog.categoryMenu.mc_wall.wall_middle.btn_allocationMiddleWall.toolTipText = "dialog_defence_attackButtons";
    this.defenceDialog.categoryMenu.mc_wall.wall_right.btn_allocatioRightWall.toolTipText = "dialog_defence_attackButtons";
    this.defenceDialog.categoryMenu.mc_keep.btn_allocationKeep.toolTipText = "dialog_defence_attackButtons";
    this.defenceDialog.categoryMenu.mc_wall.wall_left.info_percentLeftWall.toolTipText = "dialog_defence_unitsOnWall";
    this.defenceDialog.categoryMenu.mc_wall.wall_middle.info_percentMiddleWall.toolTipText = "dialog_defence_unitsOnWall";
    this.defenceDialog.categoryMenu.mc_wall.wall_right.info_percentRightWall.toolTipText = "dialog_defence_unitsOnWall";
    this.defenceDialog.categoryMenu.mc_wall.info_armorWall.toolTipText = "dialog_defence_defenceBonusWall";
    this.defenceDialog.categoryMenu.mc_wall.info_armorGate.toolTipText = "dialog_defence_defenceBonusGate";
    this.defenceDialog.categoryMenu.mc_wall.btn_priority.toolTipText = "dialog_defence_unit_priority";
    this.defenceDialog.categoryMenu.mc_keep.info_unitCount.toolTipText = "panel_fight_unitsInCourtyard_limit_tooltip";
    this.defenceDialog.categoryMenu.mc_keep.info_supportLimit.toolTipText = "dialog_support_allianceDefenseUnitAmount";
    this.defenceDialog.categoryMenu.mc_moat.info_MoatBonus.toolTipText = "dialog_defence_moatBonus";
    this.defenceDialog.categoryMenu.mc_moat.info_MoatBonus.mouseChildren = false;
    this.defenceDialog.categoryMenu.info_townshipDefenders.mouseChildren = false;
    this.defenceDialog.mc_townshipSupport.toolTipText = "dialog_townshipDefense_supportOverview_tooltip";
    this.defenceDialog.categoryMenu.mc_allianceTower.mc_reassignTimer.toolTipText = "dialog_remainingTime_AllianceTower_towerReassignment_tooltip";
    this.defenceDialog.categoryMenu.mc_allianceTower.mc_reviveTimer.toolTipText = "dialog_remainingTime_AllianceTower_playerRevive_tooltip";
    this.defenceDialog.categoryMenu.mc_allianceTower.mc_reassignTimer.mouseChildren = false;
    this.defenceDialog.categoryMenu.mc_allianceTower.mc_reviveTimer.mouseChildren = false;
    this.defenceDialog.categoryMenu.mc_allianceTower.mc_capacity.mouseChildren = false;
    se.ButtonHelper.initBasicButtons([this.defenceDialog.mc_townshipSupport]);
    se.ButtonHelper.initButtons([this.defenceDialog.categoryMenu.mc_allianceTower.btn_activate, this.defenceDialog.categoryMenu.mc_allianceTower.btn_increase, this.defenceDialog.categoryMenu.mc_keep.btn_allocationKeep, this.defenceDialog.mc_generals.mc_generalInfo.btn_mini, this.defenceDialog.mc_generals.mc_generalInfo.btn_switch, this.defenceDialog.mc_generals.mc_generalSelection.btn_generalOverview, this.defenceDialog.mc_generals.mc_generalInfo.btn_info, this.defenceDialog.mc_generals.mc_generalInfo.mc_abilitiesDetails.btn_change], Qe.ClickFeedbackButtonHover);
    se.ButtonHelper.initButtons([this.defenceDialog.categoryMenu.btn_allianceTower], o.TwoStateButton);
    this._currentDefenceCategory = D.int(S.ClientConstCastle.DEFENCE_CATEGORY_WALL);
    this._unitAllocationSlider = new oe.MultiSlider(this.defenceDialog.categoryMenu.mc_wall.multislider, 2, 24, 424, Library.CastleInterfaceElements.DefenceUnitAllocationSliderButton);
    this._unitAllocationSlider.addEventListener(k.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onUnitallocationChanged));
    this.initMCs();
    this.showChat();
    this._advancedFightScreenHelper = new Be.CastleAdvancedDefenceDialogHelper(this);
    this.defenceDialog.frontFlankToolConnector.visible = false;
    this.defenceDialog.rightFlankToolConnector.visible = false;
    this.defenceDialog.leftFlankToolConnector.visible = false;
    this.initGeneralSelection();
    this.closeGeneralSelection();
    this._isInitialized = true;
  };
  CastleDefenceDialog.prototype.setupTexts = function () {
    this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_keep.txt_header, new y.LocalizedTextVO("keep"));
    this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_keep.txt_info, new y.LocalizedTextVO("help_defence_castle")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_wall.wall_left.txt_leftWall, new y.LocalizedTextVO("dialog_defence_leftFlank"));
    this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_wall.wall_middle.txt_middleWall, new y.LocalizedTextVO("dialog_defence_middleFlank"));
    this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_wall.wall_right.txt_rightWall, new y.LocalizedTextVO("dialog_defence_rightFlank"));
    this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_moat.moat_left.txt_leftWall, new y.LocalizedTextVO("dialog_defence_leftFlank"));
    this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_moat.moat_middle.txt_middleWall, new y.LocalizedTextVO("dialog_defence_middleFlank"));
    this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_moat.moat_right.txt_rightWall, new y.LocalizedTextVO("dialog_defence_rightFlank"));
    this.textFieldManager.registerTextField(this.defenceDialog.bottomMenu.info_township.txt_text, new y.LocalizedTextVO("dialog_townshipDefense_defenseTools_desc")).verticalAlign = ae.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_allianceTower.btn_activate.txt_label, new b.TextVO(K.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_defense_buffStatus_activateBuff_button")));
    this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_allianceTower.btn_increase.txt_label, new b.TextVO(K.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_defense_buffStatus_increaseBuff_button")));
    this.textFieldManager.registerTextField(this.defenceDialog.mc_generals.mc_generalSelection.txt_header, new y.LocalizedTextVO("dialog_attack_rework2022_generals_quickSelection_header"));
    this.textFieldManager.registerTextField(this.defenceDialog.mc_generals.mc_generalSelection.btn_generalOverview.txt_label, new b.TextVO(K.TextHelper.toUpperCaseLocaSafeTextId("dialog_attack_rework2022_generals_overview_button")));
    this.textFieldManager.registerTextField(this.defenceDialog.mc_generals.mc_generalInfo.mc_abilites.txt_name, new y.LocalizedTextVO("dialog_attack_rework2022_generals_generalsAbilities_desc"));
    this.textFieldManager.registerTextField(this.defenceDialog.mc_generals.mc_generalInfo.mc_abilitiesDetails.mc_detail.txt_header, new y.LocalizedTextVO("dialog_attack_rework2022_generals_generalsAbilities_desc"));
    this.textFieldManager.registerTextField(this.defenceDialog.mc_generals.mc_generalInfo.mc_noGeneral.txt_text, new y.LocalizedTextVO("dialog_defence_generals_assignedNone_tooltip")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.defenceDialog.mc_generals.mc_generalInfo.mc_generalInfoTooltip.txt_header, new y.LocalizedTextVO("dialog_attack_rework2022_generals_passiveEffectsList_header"));
    this.textFieldManager.registerTextField(this.defenceDialog.mc_generals.mc_generalInfo.mc_abilitiesDetails.btn_change.txt_label, new y.LocalizedTextVO("dialog_attack_rework2022_generals_specialAbilities_change_button"));
    this.itxt_percent_leftWall = this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_wall.wall_left.info_percentLeftWall.txt_value, new y.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.itxt_percent_middleWall = this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_wall.wall_middle.info_percentMiddleWall.txt_value, new y.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.itxt_percent_rightWall = this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_wall.wall_right.info_percentRightWall.txt_value, new y.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [0]));
    var e = this._isInitialized ? z.CastleModel.defenceData.getDefenceCastleName() : "---";
    this.itxt_castleName = this.textFieldManager.registerTextField(this.userInfoMenu.txt_castlename, new b.TextVO(e));
    this.itxt_castleName.autoFitToBounds = true;
    this.itxt_shopText = this.textFieldManager.registerTextField(this.bottomMenu.txt_shopText, new y.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_defense_generalInfo_copy"));
    this.itxt_reassignTimer = this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_allianceTower.mc_reassignTimer.txt_value, new b.TextVO(""));
    this.itxt_reviveTimer = this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_allianceTower.mc_reviveTimer.txt_value, new b.TextVO(""));
    this.itxt_buffStatusActive = this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_allianceTower.mc_buffsActive.txt_buffStatus, new b.TextVO(""));
    this.itxt_buffStatusInactive = this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_allianceTower.mc_buffsInactive.txt_buffStatus, new b.TextVO(""));
    this.itxt_buffStatusActive.autoFitToBounds = true;
    this.itxt_buffStatusInactive.autoFitToBounds = true;
    this.setDefenceInfos();
  };
  CastleDefenceDialog.prototype.setAppearanceFightButton = function () {
    e.prototype.setAppearanceFightButton.call(this);
    this.textFieldManager.registerTextField(this.bottomMenu.btn_close.txt_name, new y.LocalizedTextVO("confirm")).autoFitToBounds = true;
    var t = this.textFieldManager.registerTextField(this.bottomMenu.btn_close.txt_name, new y.LocalizedTextVO("confirm"));
    t.autoFitToBounds = true;
    t.verticalAlign = ae.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  CastleDefenceDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this.onMouseOutOfCastle(t);
  };
  CastleDefenceDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    se.ButtonHelper.enableButton(this.defenceDialog.btn_help, this.isOutOfTutorial());
  };
  CastleDefenceDialog.prototype.setDefenceBtns = function () {
    var e;
    var t = this.canSelectCategory(S.ClientConstCastle.DEFENCE_CATEGORY_KEEP);
    var i = this.canSelectCategory(S.ClientConstCastle.DEFENCE_CATEGORY_MOAT);
    var n = this.canSelectCategory(S.ClientConstCastle.DEFENCE_CATEGORY_WALL);
    var o = t ? "keep" : L.ClientConstTextIds.NOT_AVAILABLE;
    var a = n ? "wall" : L.ClientConstTextIds.NOT_AVAILABLE;
    var s = D.int(z.CastleModel.wodData.createVObyWOD(CastleDefenceDialog.WOD_ID_MOAT, Te.CastleWodData.TYPE_BUILDING).requiredLevel);
    if (this.defenceDataAreaInfo) {
      e = ["MonumentMapobjectVO", "KingstowerMapobjectVO", "VillageMapobjectVO"].indexOf(h.getQualifiedClassName(this.defenceDataAreaInfo).split("::")[1]) > -1 && !g.instanceOfClass(this.defenceDataAreaInfo, "ResourceIsleMapobjectVO") || this.isAllianceTowerDefence ? L.ClientConstTextIds.NOT_AVAILABLE : i == 1 || z.CastleModel.userData.userLevel >= s ? "moat" : L.ClientConstTextIds.LEVEL_NEEDED + ne.CastleToolTipManager.ID_PARAM_SEPERATOR + s;
      this.defenceDialog.categoryMenu.btn_keep.setCaching(false);
      this.defenceDialog.categoryMenu.btn_moat.setCaching(false);
      se.ButtonHelper.enableButton(this.defenceDialog.categoryMenu.btn_keep, t);
      se.ButtonHelper.enableButton(this.defenceDialog.categoryMenu.btn_moat, i);
      se.ButtonHelper.enableButton(this.defenceDialog.categoryMenu.btn_wall, n);
      this.defenceDialog.categoryMenu.btn_allianceTower.visible = this.isAllianceTowerDefence;
      this.defenceDialog.categoryMenu.btn_keep.toolTipText = o;
      this.defenceDialog.categoryMenu.btn_moat.toolTipText = e;
      this.defenceDialog.categoryMenu.btn_wall.toolTipText = a;
    }
  };
  CastleDefenceDialog.prototype.canSelectCategory = function (e) {
    switch (e) {
      case S.ClientConstCastle.DEFENCE_CATEGORY_KEEP:
        return !this.isAllianceTowerDefence;
      case S.ClientConstCastle.DEFENCE_CATEGORY_MOAT:
        return this.defenceDataAreaInfo && this.defenceDataAreaInfo.moatLevel >= 1 && !this.isAllianceTowerDefence;
      case S.ClientConstCastle.DEFENCE_CATEGORY_WALL:
        return !this.isAllianceTowerDefence;
    }
    return true;
  };
  CastleDefenceDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, 2);
    this.dialogDisp.visible = false;
    this.isWaitingForServerMessage = true;
    this.enableTownshipDefenceComponents();
    this.defenceDialog.categoryMenu.mc_wall.info_unitCount.toolTipText = "dialog_defence_unitsOnAllWalls";
    var i = this.defenceDialogProperties.worldMapObjectVO;
    this.controller.addEventListener(W.CastleDefenceDataEvent.GET_DEFENCE_INFOS, this.bindFunction(this.onGetDefenceInfos));
    i.addEventListener(Q.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onWorldmapObjectChanged));
    this.updateCrest();
    this.updateDefenceData();
    z.CastleModel.smartfoxClient.sendCommandVO(new x.C2SGetLordsInfoVO());
    if (this.isAllianceTowerDefence) {
      this._currentAllianceTowerBuffInfoVO = null;
      z.CastleModel.smartfoxClient.sendCommandVO(new B.C2SGetAllianceTowerBuffInfoVO(i.absAreaPos, i.ownerInfo.allianceID));
      this.controller.addEventListener(F.CastleServerMessageArrivedEvent.ABG_TOWERS_BUFF_INFO, this.bindFunction(this.onAllianceTowerBuffInfoReceived));
    }
    this.controller.addEventListener(W.CastleDefenceDataEvent.DEFENCELIST_CHANGED, this.bindFunction(this.onDefenseChange));
    this.controller.addEventListener(G.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onEquipOrRename));
    this.controller.addEventListener(G.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.onGeneralAssigned));
    z.CastleModel.generalsData.addEventListener(H.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralAssigned));
    if (this._generalSelection) {
      this.updateGeneralSelection();
    }
    this.updateGeneral();
  };
  CastleDefenceDialog.prototype.onDefenseChange = function (e) {
    this.updateTexts();
    this._toolsLimitComponent.updateSlider(z.CastleModel.defenceData.minAttackUnitsToConsumeTools);
    this._unitAllocationSlider.setSliderTo(0, z.CastleModel.defenceData.unitPercentLeft);
    this._unitAllocationSlider.setSliderTo(1, z.CastleModel.defenceData.unitPercentLeft + z.CastleModel.defenceData.unitPercentMiddle);
  };
  CastleDefenceDialog.prototype.updateCrest = function () {
    if (this._allianceCrestContainer) {
      this._allianceCrestContainer.visible = false;
    }
    this.defenceDialog.crest.visible = true;
    if (this.defenceDialogProperties.worldMapObjectVO.kingdomID == m.FactionConst.KINGDOM_ID) {
      var e = z.CastleModel.specialEventData.getActiveEventByEventId(_.EventConst.EVENTTYPE_FACTION);
      Fe.CrestHelper.setCrestGraphics(this.defenceDialog.crest, e.ownFaction == m.FactionConst.BLUE_FACTION ? Ae.FactionEventVO.BLUE_CREST_VO : Ae.FactionEventVO.RED_CREST_VO, null, true);
    } else {
      this.showPlayerOrAllianceCrest(this.defenceDialog.crest, z.CastleModel.userData.playerCrest, this.targetArea);
    }
  };
  CastleDefenceDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    if (this.sourceArea.areaType == C.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) {
      this.controller.addEventListener(j.CastleArmyDataEvent.MOVEMENTS_REMOVED, this.bindFunction(this.onSupportChanged));
    }
  };
  CastleDefenceDialog.prototype.onSupportChanged = function (e) {
    this.sendLastChanges();
    this.updateDefenceData();
  };
  CastleDefenceDialog.prototype.updateDefenceData = function () {
    z.CastleModel.smartfoxClient.sendCommandVO(new P.C2SDefenceCompleteVO(this.defenceDialogProperties.worldMapObjectVO.absAreaPos, this.defenceDialogProperties.worldMapObjectVO.objectId, -1));
  };
  CastleDefenceDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    var t = this.defenceDialogProperties.worldMapObjectVO;
    this.controller.removeEventListener(W.CastleDefenceDataEvent.GET_DEFENCE_INFOS, this.bindFunction(this.onGetDefenceInfos));
    t.removeEventListener(Q.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onWorldmapObjectChanged));
    this.controller.removeEventListener(j.CastleArmyDataEvent.MOVEMENTS_REMOVED, this.bindFunction(this.onSupportChanged));
    z.CastleModel.timerData.removeEventListener(N.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.controller.removeEventListener(F.CastleServerMessageArrivedEvent.ABG_TOWERS_BUFF_INFO, this.bindFunction(this.onAllianceTowerBuffInfoReceived));
    this.controller.removeEventListener(W.CastleDefenceDataEvent.DEFENCELIST_CHANGED, this.bindFunction(this.onDefenseChange));
    this.controller.removeEventListener(G.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onEquipOrRename));
    this.controller.removeEventListener(G.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.onGeneralAssigned));
    z.CastleModel.generalsData.removeEventListener(H.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralAssigned));
    if (this._currentGeneralIcon) {
      this._currentGeneralIcon.onHide();
    }
    if (this._generalSelection) {
      this._generalSelection.onHide();
    }
  };
  CastleDefenceDialog.prototype.refreshElements = function () {
    this.fillItemsByCategory();
    this.fillShopItemsByGroup();
    e.prototype.refreshElements.call(this);
  };
  CastleDefenceDialog.prototype.updateUnitAllocationText = function () {
    var e = this.calcUnitPercentArray();
    var t = e[0];
    var i = e[1];
    var n = e[2];
    this.itxt_percent_leftWall = this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_wall.wall_left.info_percentLeftWall.txt_value, new y.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [t]));
    this.itxt_percent_middleWall = this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_wall.wall_middle.info_percentMiddleWall.txt_value, new y.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [i]));
    this.itxt_percent_rightWall = this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_wall.wall_right.info_percentRightWall.txt_value, new y.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [n]));
    this.defenceDialog.categoryMenu.mc_wall.wall_left.info_percentLeftWall.doCache();
    this.defenceDialog.categoryMenu.mc_wall.wall_middle.info_percentMiddleWall.doCache();
    this.defenceDialog.categoryMenu.mc_wall.wall_right.info_percentRightWall.doCache();
  };
  CastleDefenceDialog.prototype.calcUnitPercentArray = function () {
    var e = this._unitAllocationSlider.getPercentValues();
    return [Math.round(e[0] * 100), Math.round(e[1] * 100), Math.round(e[2] * 100)];
  };
  CastleDefenceDialog.prototype.onUnitallocationChanged = function (e) {
    this.updateUnitAllocationText();
    this._userHasMadeChanges = true;
  };
  CastleDefenceDialog.prototype.onGetDefenceInfos = function (t) {
    this.setActiveBaron();
    this.setDefenceBtns();
    this._unitMixedInventory = z.CastleModel.defenceData.unitInventory;
    switch (this.defenceDialogProperties.preselectedShopCategory) {
      case f.DefenseConst.TOOL_TYPE_WALL:
        this.setCategory(S.ClientConstCastle.DEFENCE_CATEGORY_WALL);
        this.setShopCategory(f.DefenseConst.TOOL_TYPE_WALL);
        break;
      case f.DefenseConst.TOOL_TYPE_GATE:
        this.setCategory(S.ClientConstCastle.DEFENCE_CATEGORY_WALL);
        this.setShopCategory(f.DefenseConst.TOOL_TYPE_GATE);
        break;
      case f.DefenseConst.TOOL_TYPE_KEEP:
        this.setCategory(S.ClientConstCastle.DEFENCE_CATEGORY_KEEP);
        break;
      case f.DefenseConst.TOOL_TYPE_MOAT:
        this.setCategory(S.ClientConstCastle.DEFENCE_CATEGORY_MOAT);
        break;
      case CastleDefenceDialog.REINIT_CURRENT_CATEGORIES:
        this.setCategory(this._currentDefenceCategory);
        this.setShopCategory(this._currentShopCategory);
        break;
      case CastleDefenceDialog.NO_SHOP:
        this.setCategory(S.ClientConstCastle.DEFENCE_CATEGORY_ALLIANCETOWER);
    }
    this.defenceDialogProperties.preselectedShopCategory = CastleDefenceDialog.REINIT_CURRENT_CATEGORIES;
    this.drawAreaVO();
    this.updateTexts();
    this.updateCrest();
    this.updateTownshipDefenceInfo();
    this.itxt_castleName = this.textFieldManager.registerTextField(this.userInfoMenu.txt_castlename, new b.TextVO(z.CastleModel.defenceData.getDefenceCastleName()));
    this.itxt_castleName.autoFitToBounds = true;
    this._hasActiveAllianceYardSupportLimit = !(this.sourceArea instanceof $.FactionInteractiveMapobjectVO) && !(this.sourceArea instanceof Z.DaimyoTownshipMapObjectVO) && !Y.SpecialServerHelper.isOnSpecialServer && z.CastleModel.armyData.getUnitSupportUnitCountToArea(this.sourceArea) > 0;
    if (this.isWaitingForServerMessage) {
      e.prototype.showLoaded.call(this, 1);
      this.dialogDisp.visible = true;
      this.isWaitingForServerMessage = false;
    }
  };
  CastleDefenceDialog.prototype.updateTexts = function () {
    this.itxt_moatDefence.textContentVO.textReplacements = [z.CastleModel.defenceData.moatDefence];
    this.itxt_keepDefence.textContentVO.textReplacements = [z.CastleModel.defenceData.keepUnitCount, z.CastleModel.defenceData.keepUnitSlotCount];
    this.itxt_gateDefence.textContentVO.textReplacements = [z.CastleModel.defenceData.gateDefence];
    this.itxt_supportCount.textContentVO.textReplacements = [z.CastleModel.defenceData.remainingSupportUnits, z.CastleModel.defenceData.allianceUnitYardLimit];
    var e = !Y.SpecialServerHelper.isOnSpecialServer && !(this.sourceArea instanceof Z.DaimyoTownshipMapObjectVO);
    this.defenceDialog.categoryMenu.mc_keep.info_unitCount.visible = e;
    this.defenceDialog.categoryMenu.mc_keep.info_supportLimit.visible = e;
    this.defenceDialog.categoryMenu.mc_keep.btn_allocationKeep.visible = e;
    var t = Math.ceil(z.CastleModel.defenceData.wallUnitCount);
    var i = Math.ceil(z.CastleModel.defenceData.wallUnitSlotCount);
    this.itxt_unitCount.textContentVO.textReplacements = [t, i];
    this.itxt_wallDefence.textContentVO.textReplacements = [z.CastleModel.defenceData.wallDefence];
    this.itxt_shopText.visible = this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_ALLIANCETOWER;
    this.defenceDialog.categoryMenu.mc_wall.info_armorGate.doCache();
    this.defenceDialog.categoryMenu.mc_wall.info_unitCount.doCache();
    this.defenceDialog.categoryMenu.mc_moat.info_MoatBonus.doCache();
    this.defenceDialog.categoryMenu.mc_keep.info_unitCount.doCache();
    this.defenceDialog.categoryMenu.mc_wall.info_armorWall.doCache();
  };
  CastleDefenceDialog.prototype.setDefenceInfos = function () {
    this.itxt_gateDefence = this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_wall.info_armorGate.txt_value, new y.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.itxt_unitCount = this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_wall.info_unitCount.txt_value, new y.LocalizedTextVO(r.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    this.itxt_unitCount.autoFitToBounds = true;
    this.itxt_supportCount = this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_keep.info_supportLimit.txt_value, new y.LocalizedTextVO("numbersXY", [0, 0]));
    this.itxt_supportCount.autoFitToBounds = true;
    this.itxt_moatDefence = this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_moat.info_MoatBonus.txt_value, new y.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.itxt_keepDefence = this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_keep.info_unitCount.txt_value, new y.LocalizedTextVO("numbersXY"));
    this.itxt_wallDefence = this.textFieldManager.registerTextField(this.defenceDialog.categoryMenu.mc_wall.info_armorWall.txt_value, new y.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [0]));
  };
  CastleDefenceDialog.prototype.setActiveBaron = function () {
    if (this._lordVO == null || this._lordVO.id != z.CastleModel.defenceData.lordID) {
      var e = this.defenceDataAreaInfo;
      if (!e) {
        return;
      }
      var t = e.areaType == C.WorldConst.AREA_TYPE_CAPITAL && e.isUnderConquerControl;
      var i = e.areaType == C.WorldConst.AREA_TYPE_METROPOL && e.isUnderConquerControl;
      if (t) {
        this._lordVO = z.CastleModel.lordData.getDummyCapitalBaron(e.kingdomID);
      } else if (i) {
        this._lordVO = z.CastleModel.lordData.getDummyMetropolBaron();
      } else if (z.CastleModel.defenceData.lordID > -1) {
        this._lordVO = z.CastleModel.lordData.getBaronByID(z.CastleModel.defenceData.lordID);
      } else if (this.isAllianceTowerDefence) {
        this._lordVO = z.CastleModel.lordData.getDefaultLordByID(z.CastleModel.defenceData.lordID);
      } else {
        c.error("No Lord defined for this defence dialog (probably missing in dfc command)!");
      }
    } else {
      this.updateBaronData();
    }
    var n = this.defenceDialog.mc_targetLord;
    var o = !!this._lordVO && this._lordVO.id >= 0;
    if (o) {
      se.ButtonHelper.initBasicButton(n);
    } else {
      n.basicButton = null;
    }
    n.mouseChildren = false;
    n.actLikeButton = o;
    if (n && this._lordVO) {
      n.visible = true;
      n.mouseChildren = false;
      var a = this._lordVO;
      l.MovieClipHelper.clearMovieClip(n.mc_lordHolder);
      Ne.EquipmentIconHelper.addLordIcon(a, n.mc_lordHolder, 35, -1, null, true);
      if (n.mc_lordHolder.warning) {
        this.dialogDisp.setChildIndex(n.mc_lordHolder.warning, this.dialogDisp.getChildIndex(this.dialogDisp.mc_generals) - 1);
      }
      var s = we.LordEffectHelper.STRATEGY_FULL_ACTIVE;
      if (g.instanceOfClass(this.targetArea, "DaimyoTownshipMapObjectVO")) {
        s = we.LordEffectHelper.STRATEGY_SUPPORT;
      }
      this._lordTooltipTrigger.setProperties(a, this.sourceArea, this.targetArea, s);
    } else if (n.mc_targetLord) {
      n.visible = false;
    }
    this.updateMainLordEffects();
    this.updateGeneral();
  };
  CastleDefenceDialog.prototype.updateBaronData = function () {
    if (this._lordVO && this._lordVO.id == z.CastleModel.defenceData.lordID && this._lordVO.id > -1) {
      this._lordVO = z.CastleModel.lordData.getBaronByID(z.CastleModel.defenceData.lordID);
    }
  };
  CastleDefenceDialog.prototype.sendLastChanges = function (e = -1) {
    if (!this.isWaitingForServerMessage) {
      var t = e > -1 ? e : this._currentDefenceCategory;
      if (this._userHasMadeChanges && !this.isAllianceTowerDefence) {
        switch (t) {
          case S.ClientConstCastle.DEFENCE_CATEGORY_KEEP:
            this.sendKeepData();
            break;
          case S.ClientConstCastle.DEFENCE_CATEGORY_WALL:
            this.sendWallData();
            if (this.hasActiveAllianceYardSupportLimit) {
              this.sendKeepData();
            }
            break;
          case S.ClientConstCastle.DEFENCE_CATEGORY_MOAT:
            this.sendMoatData();
        }
        this._userHasMadeChanges = false;
      }
      if (this._toolsLimitComponent.isSliderChanged) {
        this.sendKeepData();
      }
    }
  };
  CastleDefenceDialog.prototype.initButtons = function () {
    e.prototype.initButtons.call(this);
    this.defenceDialog.btn_close.visible = false;
    this.defenceDialog.bottomMenu.btn_cat_keep.visible = this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_KEEP;
    this.defenceDialog.bottomMenu.btn_cat_wall.visible = this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_WALL;
    this.defenceDialog.bottomMenu.btn_cat_gate.visible = this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_WALL;
    this.defenceDialog.bottomMenu.btn_cat_field.visible = false;
    this.defenceDialog.bottomMenu.btn_cat_moat.visible = this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_MOAT;
  };
  CastleDefenceDialog.prototype.initMCs = function () {
    this.defenceDialog.categoryMenu.mc_keep.visible = this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_KEEP;
    this.defenceDialog.categoryMenu.mc_wall.visible = this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_WALL;
    this.defenceDialog.categoryMenu.mc_moat.visible = this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_MOAT;
    this.defenceDialog.categoryMenu.mc_allianceTower.visible = this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_ALLIANCETOWER;
  };
  CastleDefenceDialog.prototype.getDefenceCategory = function () {
    return this._currentDefenceCategory;
  };
  CastleDefenceDialog.prototype.changeCategory = function (e) {
    if (e != this._currentDefenceCategory && this.canSelectCategory(e)) {
      this.sendLastChanges();
      this.setCategory(e);
      this.setActiveBaron();
    }
  };
  CastleDefenceDialog.prototype.setCategory = function (e) {
    this.setupTexts();
    z.CastleModel.timerData.removeEventListener(N.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.controller.removeEventListener(F.CastleServerMessageArrivedEvent.ABG_TOWERS_BUFF_INFO, this.bindFunction(this.onAllianceTowerBuffInfoReceived));
    this._userHasMadeChanges = false;
    this._currentDefenceCategory = e;
    this.defenceDialog.categoryMenu.mc_keep.visible = this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_KEEP;
    this.defenceDialog.categoryMenu.mc_wall.visible = this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_WALL;
    this.defenceDialog.categoryMenu.mc_moat.visible = this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_MOAT;
    this.defenceDialog.categoryMenu.mc_allianceTower.visible = this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_ALLIANCETOWER;
    this.defenceDialog.categoryMenu.btn_keep.selectButton = this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_KEEP;
    this.defenceDialog.categoryMenu.btn_wall.selectButton = this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_WALL;
    this.defenceDialog.categoryMenu.btn_moat.selectButton = this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_MOAT;
    se.ButtonHelper.setButtonSelected(this.defenceDialog.categoryMenu.btn_allianceTower, this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_ALLIANCETOWER);
    switch (this._currentDefenceCategory) {
      case S.ClientConstCastle.DEFENCE_CATEGORY_KEEP:
        this.setShopCategory(f.DefenseConst.TOOL_TYPE_KEEP);
        break;
      case S.ClientConstCastle.DEFENCE_CATEGORY_WALL:
        this._unitAllocationSlider.setSliderTo(0, z.CastleModel.defenceData.unitPercentLeft);
        this._unitAllocationSlider.setSliderTo(1, z.CastleModel.defenceData.unitPercentLeft + z.CastleModel.defenceData.unitPercentMiddle);
        this.updateUnitAllocationText();
        this.setShopCategory(f.DefenseConst.TOOL_TYPE_WALL);
        break;
      case S.ClientConstCastle.DEFENCE_CATEGORY_MOAT:
        this.setShopCategory(f.DefenseConst.TOOL_TYPE_MOAT);
        break;
      case S.ClientConstCastle.DEFENCE_CATEGORY_ALLIANCETOWER:
        this.setShopCategory(CastleDefenceDialog.NO_SHOP);
        this.updateAllianceTowerInfo();
    }
    this.fillItemsByCategory();
    this.updateTexts();
  };
  CastleDefenceDialog.prototype.sendKeepData = function () {
    var e = z.CastleModel.defenceData.itemsKeep ? z.CastleModel.defenceData.itemsKeep.getSlotList() : [];
    var t = z.CastleModel.defenceData.itemsKeepSupport ? z.CastleModel.defenceData.itemsKeepSupport.getSlotList() : [];
    if (this.defenceDataAreaInfo) {
      var i = new M.C2SDefenceKeepVO(this.defenceDataAreaInfo.absAreaPos, this.defenceDataAreaInfo.objectId, e, t, z.CastleModel.defenceData.minAttackUnitsToConsumeTools, z.CastleModel.defenceData.unitCompositionKeep);
      z.CastleModel.smartfoxClient.sendCommandVO(i);
    }
  };
  CastleDefenceDialog.prototype.sendWallData = function () {
    if (z.CastleModel.defenceData.itemsLeftWall && z.CastleModel.defenceData.itemsMiddleWall && z.CastleModel.defenceData.itemsRightWall) {
      var e = z.CastleModel.defenceData.itemsLeftWall.getSlotList(true);
      var t = z.CastleModel.defenceData.itemsMiddleWall.getSlotList(true);
      var i = z.CastleModel.defenceData.itemsRightWall.getSlotList(true);
      var n = this.calcUnitPercentArray();
      var o = n[0];
      var a = n[1];
      var s = n[2];
      if (!this.defenceDataAreaInfo) {
        return;
      }
      z.CastleModel.smartfoxClient.sendCommandVO(new V.C2SDefenceWallVO(this.defenceDataAreaInfo.absAreaPos, this.defenceDataAreaInfo.objectId, e, o, z.CastleModel.defenceData.unitCompositionLeft, t, a, z.CastleModel.defenceData.unitCompositionMiddle, i, s, z.CastleModel.defenceData.unitCompositionRight));
    }
  };
  CastleDefenceDialog.prototype.sendMoatData = function () {
    var e = z.CastleModel.defenceData.itemsLeftMoat.getSlotList(true);
    var t = z.CastleModel.defenceData.itemsMiddleMoat.getSlotList(true);
    var i = z.CastleModel.defenceData.itemsRightMoat.getSlotList(true);
    if (this.defenceDataAreaInfo) {
      z.CastleModel.smartfoxClient.sendCommandVO(new R.C2SDefenceMoatVO(this.defenceDataAreaInfo.absAreaPos, this.defenceDataAreaInfo.objectId, e, t, i));
    }
  };
  CastleDefenceDialog.prototype.fillItemsByCategory = function () {
    var e = this;
    if (this._allContainerOnScreen) {
      this._allContainerOnScreen.forEach(function (t) {
        if (t.itxt_value) {
          e.textFieldManager.unregisterTextFieldByReference(t.itxt_value);
        }
      });
    }
    this._allContainerOnScreen = [];
    switch (this._currentDefenceCategory) {
      case S.ClientConstCastle.DEFENCE_CATEGORY_KEEP:
        this.fillItemContainer(this.defenceDialog.categoryMenu.mc_keep.items_keep, this.defenceDialogProperties.worldMapObjectVO.keepLevel > 0 ? z.CastleModel.defenceData.itemsKeep : null);
        this.fillItemContainer(this.defenceDialog.categoryMenu.mc_keep.items_keep_support_tools, z.CastleModel.defenceData.itemsKeepSupport);
        break;
      case S.ClientConstCastle.DEFENCE_CATEGORY_WALL:
        this.fillItemContainer(this.defenceDialog.categoryMenu.mc_wall.wall_left.items_leftWall, z.CastleModel.defenceData.itemsLeftWall);
        this.fillItemContainer(this.defenceDialog.categoryMenu.mc_wall.wall_middle.items_middleWall, z.CastleModel.defenceData.itemsMiddleWall, true);
        this.fillItemContainer(this.defenceDialog.categoryMenu.mc_wall.wall_right.items_rightWall, z.CastleModel.defenceData.itemsRightWall);
        break;
      case S.ClientConstCastle.DEFENCE_CATEGORY_MOAT:
        this.fillItemContainer(this.defenceDialog.categoryMenu.mc_moat.moat_left.items_leftWall, z.CastleModel.defenceData.itemsLeftMoat, false, CastleDefenceDialog.ITEMSIZE, CastleDefenceDialog.ITEMSIZE * 0.5);
        this.fillItemContainer(this.defenceDialog.categoryMenu.mc_moat.moat_middle.items_middleWall, z.CastleModel.defenceData.itemsMiddleMoat, true, CastleDefenceDialog.ITEMSIZE, CastleDefenceDialog.ITEMSIZE * 0.5);
        this.fillItemContainer(this.defenceDialog.categoryMenu.mc_moat.moat_right.items_rightWall, z.CastleModel.defenceData.itemsRightMoat, false, CastleDefenceDialog.ITEMSIZE, CastleDefenceDialog.ITEMSIZE * 0.5);
    }
  };
  CastleDefenceDialog.prototype.getFittingDefenseSlotForTutorial = function (e) {
    var t = z.CastleModel.wodData.getUnitVOByWodId(e);
    for (var i = this.defenceDialog.categoryMenu.mc_wall.wall_middle.items_middleWall.mc_items, n = 0; n < i.numChildren; n++) {
      var o = i.getChildAt(n);
      var a = o.itemContainer;
      var s = o.itemVO;
      if (t.isToolForSlotType(s.slotType) && !a.isFull) {
        return o;
      }
    }
    return null;
  };
  CastleDefenceDialog.prototype.fillItemContainer = function (e, t, i = false, n = 0, o = 0) {
    l.MovieClipHelper.clearMovieClip(e.mc_items);
    if (t) {
      for (var a = 0; a < t.items.length; a++) {
        var s = t.items[a];
        if (s.isUnlocked()) {
          var r = new Library.CastleInterfaceElements.FightScreenSlotContainer();
          r.name = e.name + "_slot" + a;
          r.itemVO = s;
          r.itemContainer = t;
          r.allowFastGlow = false;
          if (s.isFree()) {
            switch (s.slotType) {
              case Me.ToolUnitVO.SLOTTYPE_TOOL_WALL:
                r.toolTipText = "dialog_defence_wallplace";
                break;
              case Me.ToolUnitVO.SLOTTYPE_TOOL_GATE:
                r.toolTipText = "dialog_defence_gateplace";
                break;
              case Me.ToolUnitVO.SLOTTYPE_TOOL_MOAT:
                r.toolTipText = "dialog_defence_moatplace";
                break;
              case Me.ToolUnitVO.SLOTTYPE_TOOL_KEEP:
                r.toolTipText = "dialog_defence_keepplace";
                break;
              case Me.ToolUnitVO.SLOTTYPE_TOOL_SUPPORT_DEFENSE:
                if (this.canSelectedDragISupportItemCanBePlaced(t)) {
                  r.toolTipText = "dialog_defence_defenseSupportPlace";
                } else {
                  r.toolTipText = "dialog_defence_supportTools_slot_toolTypeInUse";
                }
            }
          } else if (s.unitVO) {
            ke.WodPicHelper.addUnitPic(s.unitVO, r.content.mc_unit, 30, 30, z.CastleModel.userData.playerCrest.colorsTwo[0], z.CastleModel.userData.playerCrest.colorsTwo[1], 15);
            r.toolTipText = s.unitVO.type.toLowerCase() + "_name";
          }
          this.initContainer(r);
          this.positionContainer(r, CastleDefenceDialog.ITEMS_PER_ROW, a, CastleDefenceDialog.ITEMSIZE, n, o);
          e.mc_items.addChild(r);
          this._allContainerOnScreen.push(r);
        } else {
          var c = new Library.CastleInterfaceElements.FightScreenSlotContainer_PlaceHolder();
          this.positionContainer(c, CastleDefenceDialog.ITEMS_PER_ROW, a, CastleDefenceDialog.ITEMSIZE, n, o);
          e.mc_items.addChild(c);
          c.mouseChildren = false;
          if (i) {
            c.toolTipText = this.itemText(s, i);
          } else if (s.isLegendSlot()) {
            if (s.slotType == Me.ToolUnitVO.SLOTTYPE_TOOL_SUPPORT_DEFENSE) {
              c.toolTipText = "dialog_defence_needsSupportTools_slot";
            } else {
              c.toolTipText = {
                t: "dialog_defence_needs",
                p: [z.CastleModel.legendSkillData.getSkillByID(s.unlockSkillID).nameTextID]
              };
            }
          } else if (s.slotType == Me.ToolUnitVO.SLOTTYPE_TOOL_SUPPORT_DEFENSE) {
            c.toolTipText = "dialog_defence_needsSupportTools_slot";
          } else {
            c.toolTipText = {
              t: "needs",
              p: [this.itemText(s, i)]
            };
          }
        }
      }
      this.updateTexts();
    }
  };
  CastleDefenceDialog.prototype.canSelectedDragISupportItemCanBePlaced = function (e) {
    if (this._selectedDragUnit && this._selectedDragUnit.isDefenceSupportTool) {
      for (var t = 0; t < e.items.length; t++) {
        var i = e.items[t];
        if (i.unitVO && i.unitVO.type == this._selectedDragUnit.type) {
          return false;
        }
      }
    }
    return true;
  };
  CastleDefenceDialog.prototype.itemText = function (e, t) {
    switch (e.slotType) {
      case Me.ToolUnitVO.SLOTTYPE_TOOL_WALL:
        if (t) {
          return O.Localize.text("dialog_defence_middleSlotTooLow");
        } else {
          return O.Localize.text("castlewall_level", [e.itemLevel]);
        }
      case Me.ToolUnitVO.SLOTTYPE_TOOL_GATE:
        if (t) {
          return O.Localize.text("dialog_defence_middleSlotTooLow");
        } else {
          return O.Localize.text("gate_level", [e.itemLevel]);
        }
      case Me.ToolUnitVO.SLOTTYPE_TOOL_MOAT:
        return O.Localize.text("moat");
      case Me.ToolUnitVO.SLOTTYPE_TOOL_KEEP:
        return O.Localize.text("keep_level", [e.itemLevel]);
      case Me.ToolUnitVO.SLOTTYPE_TOOL_SUPPORT_DEFENSE:
        return O.Localize.text("dialog_defence_needsSupportTools_slot", [e.itemLevel]);
    }
    return "";
  };
  CastleDefenceDialog.prototype.initContainer = function (t) {
    e.prototype.initContainer.call(this, t);
    t.scaleX = t.scaleY = 1;
    t.useFilters(te.BitmapFilterHelper.NO_FILTER);
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
    t.categoryIcon.gotoAndStop(i.slotType);
    t.categoryIcon.alpha = 0.4;
    if (!i.isFree()) {
      if (t.itxt_value && t.itxt_value.textContentVO) {
        t.itxt_value.textContentVO.numberValue = i.unitVO.inventoryAmount;
      } else {
        t.content.infoAmount.txt_value.y += 1;
        t.content.infoAmount.txt_value.defaultCacheScale = 2;
        t.itxt_value = this.textFieldManager.registerTextField(t.content.infoAmount.txt_value, new E.LocalizedNumberVO(i.unitVO.inventoryAmount));
      }
    }
    t.categoryIcon.visible = i.isFree();
    t.content.infoAmount.visible = !i.isFree();
    t.btn_Plus.visible = i.isFree() && !this._selectedDragUnit && this.getDefenceCategory() == S.ClientConstCastle.DEFENCE_CATEGORY_WALL && !z.CastleModel.tutorialData.isTutorialActive;
  };
  CastleDefenceDialog.prototype.getFilteredArray = function (e) {
    var t = new Map();
    var i = [];
    if (!(z.CastleModel.userData.userLevel < 5)) {
      var n = z.CastleModel.permanentCastleData.getUnitBaseLocation(this.defenceDialogProperties.worldMapObjectVO);
      if (n) {
        var o = n.unitsVO.getFightscreenToolsByUnitType(S.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE);
        if (o != null) {
          for (var a = 0, s = o; a < s.length; a++) {
            var r = s[a];
            if (r !== undefined && r && r.costC2 > 0 && r.isToolForSlotType(e)) {
              r.inventoryAmount = 0;
              t.set(r.wodId, r);
            }
          }
        }
      }
    }
    if (this._unitMixedInventory) {
      var l = this._unitMixedInventory.getUnitsByType(S.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE);
      if (l != null) {
        for (var c = 0, u = l; c < u.length; c++) {
          var d = u[c];
          if (d !== undefined && (d.isToolForSlotType(e) || this.checkKeepSupportToolForCategory(d, e))) {
            var p = this.getUnitWodInArray(d.wodId, i);
            if (p) {
              p.inventoryAmount = D.int(this._unitMixedInventory.getUnitCountByWodId(d.wodId));
            } else {
              t.set(d.wodId, d);
            }
          }
        }
      }
    }
    t.forEach(function (e, t) {
      i.push(e);
    });
    i.sort(Ie.ClientConstSort.sortByUnitSortOrder);
    return i;
  };
  CastleDefenceDialog.prototype.checkKeepSupportToolForCategory = function (e, t) {
    return t == Me.ToolUnitVO.SLOTTYPE_TOOL_KEEP && e && e.isDefenceSupportTool;
  };
  CastleDefenceDialog.prototype.getWallAndGateShopArray = function () {
    var e = [];
    return e = (e = e.concat(this.getFilteredArray(Me.ToolUnitVO.SLOTTYPE_TOOL_WALL))).concat(this.getFilteredArray(Me.ToolUnitVO.SLOTTYPE_TOOL_GATE));
  };
  CastleDefenceDialog.prototype.onWorldmapObjectChanged = function (e) {
    var t = false;
    if (!this.defenceDialogProperties.worldMapObjectVO || !this.defenceDialogProperties.worldMapObjectVO.isOwnMapobject && !g.instanceOfClass(this.defenceDialogProperties.worldMapObjectVO, "DaimyoTownshipMapObjectVO") && !g.instanceOfClass(this.defenceDialogProperties.worldMapObjectVO, "ABGAllianceTowerMapobjectVO")) {
      t = true;
    }
    if (t) {
      this.hide();
    }
  };
  CastleDefenceDialog.prototype.updateContainer = function () {
    this.fillItemsByCategory();
  };
  CastleDefenceDialog.prototype.dispatchSlotClickedEvent = function () {
    this.controller.dispatchEvent(new U.CastleDialogEvent(U.CastleDialogEvent.DEFENCE_SCREEN_ITEMS_UPDATED));
  };
  CastleDefenceDialog.prototype.editUnitSlot = function (e, t, i) {
    Re.CastleDialogHandler.getInstance().registerDefaultDialogs(ze.CastleDefenceAddUnitsDialog, new re.CastleBasicAddUnitsDialogProperties(e, this.bindFunction(this.changeItemAmount), i, true, t));
  };
  CastleDefenceDialog.prototype.onUnitFitsSlot = function (e, t) {
    this.controller.dispatchEvent(new U.CastleDialogEvent(U.CastleDialogEvent.DEFENCE_SCREEN_TOOLS_PLACED));
    Re.CastleDialogHandler.getInstance().registerDefaultDialogs(ze.CastleDefenceAddUnitsDialog, new re.CastleBasicAddUnitsDialogProperties(this._selectedDragUnit, this.bindFunction(this.changeItemAmount), e, false, t));
  };
  CastleDefenceDialog.prototype.showInstantBuyDialog = function (e) {
    Re.CastleDialogHandler.getInstance().registerDefaultDialogs(qe.CastleDefenceBuyUnitsDialog, new Oe.CastleDefenceBuyUnitsDialogProperties(e, this.defenceDialogProperties.worldMapObjectVO));
  };
  CastleDefenceDialog.prototype.onMouseDown = function (t) {
    e.prototype.onMouseDown.call(this, t);
  };
  CastleDefenceDialog.prototype.onClick = function (t) {
    if (se.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.unitInfo.btn_rightArrow:
        case this.unitInfo.btn_leftArrow:
          return;
        case this.defenceDialog.mc_targetLord:
          if (!z.CastleModel.tutorialData.isTutorialActive && this._lordVO && g.instanceOfClass(this._lordVO, "BaronVO") && !this._lordVO.isDummyBaron) {
            this.sendLastChanges();
            Re.CastleDialogHandler.getInstance().registerDefaultDialogs(He.CastleEquipmentDialog, new ce.CastleEquipmentDialogProperties(this.bindFunction(this.onCloseEquipmentDialog), this._lordVO.id, true));
          }
          break;
        case this.defenceDialog.btn_close:
          this.closeScreen();
          break;
        case this.defenceDialog.categoryMenu.btn_keep:
          this.changeCategory(S.ClientConstCastle.DEFENCE_CATEGORY_KEEP);
          break;
        case this.defenceDialog.categoryMenu.btn_wall:
          this.changeCategory(S.ClientConstCastle.DEFENCE_CATEGORY_WALL);
          break;
        case this.defenceDialog.categoryMenu.btn_moat:
          this.changeCategory(S.ClientConstCastle.DEFENCE_CATEGORY_MOAT);
          break;
        case this.defenceDialog.categoryMenu.mc_wall.wall_left.btn_allocationLeftWall:
          Re.CastleDialogHandler.getInstance().registerDefaultDialogs(Xe.CastleDefenceUnitcompositionDialog, new Ee.CastleDefenceUnitcompositionDialogProperties(this.bindFunction(this.changeUnitCompositon), 0, z.CastleModel.defenceData.unitCompositionLeft));
          break;
        case this.defenceDialog.categoryMenu.mc_wall.wall_middle.btn_allocationMiddleWall:
          Re.CastleDialogHandler.getInstance().registerDefaultDialogs(Xe.CastleDefenceUnitcompositionDialog, new Ee.CastleDefenceUnitcompositionDialogProperties(this.bindFunction(this.changeUnitCompositon), 1, z.CastleModel.defenceData.unitCompositionMiddle));
          break;
        case this.defenceDialog.categoryMenu.mc_wall.wall_right.btn_allocatioRightWall:
          Re.CastleDialogHandler.getInstance().registerDefaultDialogs(Xe.CastleDefenceUnitcompositionDialog, new Ee.CastleDefenceUnitcompositionDialogProperties(this.bindFunction(this.changeUnitCompositon), 2, z.CastleModel.defenceData.unitCompositionRight));
          break;
        case this.defenceDialog.categoryMenu.mc_keep.btn_allocationKeep:
          Re.CastleDialogHandler.getInstance().registerDefaultDialogs(Xe.CastleDefenceUnitcompositionDialog, new Ee.CastleDefenceUnitcompositionDialogProperties(this.bindFunction(this.changeUnitCompositon), 3, z.CastleModel.defenceData.unitCompositionKeep));
          break;
        case this.defenceDialog.btn_help:
          if (this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_KEEP) {
            Re.CastleDialogHandler.getInstance().showHelper("", O.Localize.text("help_defence_castle"));
          } else if (this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_WALL) {
            Re.CastleDialogHandler.getInstance().showHelper("", O.Localize.text("help_defence_wall"));
          } else if (this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_MOAT) {
            Re.CastleDialogHandler.getInstance().showHelper("", O.Localize.text("help_defence_moat"));
          } else if (this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_ALLIANCETOWER) {
            Re.CastleDialogHandler.getInstance().showHelper("", O.Localize.text("help_beyondTheHorizon_AllianceTower_defense"));
          }
          break;
        case this.defenceDialog.mc_townshipSupport:
          Re.CastleDialogHandler.getInstance().registerDefaultDialogs(je.SupportOverviewDialog, new We.SupportOverviewDialogProperties(this.defenceDialogProperties.worldMapObjectVO));
          break;
        case this.defenceDialog.categoryMenu.mc_allianceTower.btn_activate:
          Ge.CastleExternalDialog.dialogHandler.registerDefaultDialogs(Ye.CastleABGTowerEffectsActivateDialog, new me.CastleABGTowerEffectsActivateDialogProperties(this.targetArea, this._currentAllianceTowerBuffInfoVO));
          break;
        case this.defenceDialog.categoryMenu.mc_allianceTower.btn_increase:
          Ge.CastleExternalDialog.dialogHandler.registerDefaultDialogs(Ke.CastleABGTowerEffectsDialog, new fe.CastleABGTowerEffectsDialogProperties(this.targetArea));
          break;
        case this.defenceDialog.mc_generals.mc_generalInfo.btn_mini:
          this.defenceDialog.mc_generals.visible = false;
          this.controller.dispatchEvent(new U.CastleDialogEvent(U.CastleDialogEvent.DEFENCE_SCREEN_CLOSE_GENERALS));
          break;
        case this.defenceDialog.mc_generals.mc_generalSelection.btn_generalOverview:
          Re.CastleDialogHandler.getInstance().registerDefaultDialogs(_e.GeneralsOverviewDialog);
          break;
        case this.defenceDialog.mc_generals.mc_generalInfo.btn_info:
          this.defenceDialog.mc_generals.mc_generalInfo.btn_info.mc_open.visible = this.defenceDialog.mc_generals.mc_generalInfo.mc_generalInfoTooltip.visible = !this.defenceDialog.mc_generals.mc_generalInfo.mc_generalInfoTooltip.visible;
          break;
        case this.defenceDialog.mc_generals.mc_generalInfo.mc_abilitiesDetails.btn_change:
          Re.CastleDialogHandler.getInstance().registerDefaultDialogs(ue.GeneralsAbilityDialog, new de.GeneralsAbilityDialogProperties(this.getDefendingLord().assignedGeneralVO, false));
      }
      if (this._fightDetailView) {
        switch (t.target) {
          case this._fightDetailView.layerKeep:
            if (z.CastleModel.kingdomData.activeKingdomID != m.FactionConst.KINGDOM_ID) {
              this.changeCategory(S.ClientConstCastle.DEFENCE_CATEGORY_KEEP);
              break;
            }
          case this._fightDetailView.layerLeft:
          case this._fightDetailView.layerRight:
          case this._fightDetailView.layerMiddle:
            this.changeCategory(S.ClientConstCastle.DEFENCE_CATEGORY_WALL);
            break;
          case this._fightDetailView.layerMoat:
            this.changeCategory(S.ClientConstCastle.DEFENCE_CATEGORY_MOAT);
        }
      }
      if (t.target != this.defenceDialog.mc_generals.mc_generalInfo.btn_switch || this._isGeneralSelectionOpen) {
        if (l.MovieClipHelper.isChildrenOf(t.target, this.defenceDialog.mc_generals.mc_generalInfo) || l.MovieClipHelper.isChildrenOf(t.target, this.defenceDialog.mc_generals.mc_overlay)) {
          this.closeGeneralSelection();
        }
      } else {
        this.openGeneralSelection();
      }
      this.clickOnCastleView(t);
    }
  };
  CastleDefenceDialog.prototype.onCloseEquipmentDialog = function () {
    if (this.isVisible()) {
      this.updateDefenceData();
      z.CastleModel.smartfoxClient.sendCommandVO(new x.C2SGetLordsInfoVO());
    }
  };
  CastleDefenceDialog.prototype.closeScreen = function () {
    if (this._fightDetailView && this.defenceDialog.castleLayer.contains(this._fightDetailView.castleLayer)) {
      this.defenceDialog.castleLayer.removeChild(this._fightDetailView.castleLayer);
    }
    this.defenceDialog.categoryMenu.mc_keep.visible = false;
    this.defenceDialog.categoryMenu.mc_wall.visible = false;
    this.defenceDialog.categoryMenu.mc_moat.visible = false;
    this.defenceDialog.categoryMenu.mc_allianceTower.visible = false;
    this.sendLastChanges();
    if (this.layoutManager.isInMyCastle) {
      z.CastleModel.smartfoxClient.sendCommandVO(new w.C2SGetUnitInventoryVO());
    }
    this.hide();
  };
  CastleDefenceDialog.prototype.changeUnitCompositon = function (e, t) {
    switch (e) {
      case 0:
        z.CastleModel.defenceData.unitCompositionLeft = t;
        break;
      case 1:
        z.CastleModel.defenceData.unitCompositionMiddle = t;
        break;
      case 2:
        z.CastleModel.defenceData.unitCompositionRight = t;
        break;
      case 3:
        z.CastleModel.defenceData.unitCompositionKeep = t;
    }
    this._userHasMadeChanges = true;
    if (this._hasActiveAllianceYardSupportLimit) {
      this.sendLastChanges();
    }
  };
  CastleDefenceDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    this.mouseOverCastleView(t);
    if (g.instanceOfClass(t.target, "DefenceItemContainer") || g.instanceOfClass(t.target, "FightScreenSlotContainer") && t.target.btn_Plus.visible || t.target instanceof p.getDefinitionByName("DefenceWall_left") || t.target instanceof p.getDefinitionByName("DefenceWall_middle") || t.target instanceof p.getDefinitionByName("DefenceWall_right")) {
      this.layoutManager.customCursor.setCursorType(s.BasicCustomCursor.CURSOR_CLICK);
    }
    if (t.target == this.defenceDialog.mc_generals.mc_generalInfo.mc_abilites) {
      this.defenceDialog.mc_generals.mc_generalInfo.mc_abilitiesDetails.visible = true;
    } else if (this.defenceDialog.mc_generals.mc_generalInfo.mc_abilitiesDetails.visible && t.target != this.defenceDialog.mc_generals.mc_generalInfo.mc_abilitiesDetails && !l.MovieClipHelper.isChildrenOf(t.target, this.defenceDialog.mc_generals.mc_generalInfo.mc_abilitiesDetails)) {
      this.defenceDialog.mc_generals.mc_generalInfo.mc_abilitiesDetails.visible = false;
    }
  };
  CastleDefenceDialog.prototype.onMouseUp = function (t) {
    e.prototype.onMouseUp.call(this, t);
    if (this._userHasMadeChanges && this.hasActiveAllianceYardSupportLimit) {
      this.sendLastChanges();
    }
  };
  CastleDefenceDialog.prototype.mouseOverCastleView = function (e) {
    if (this._fightDetailView) {
      switch (e.target) {
        case this._fightDetailView.layerKeep:
        case this._fightDetailView.layerLeft:
        case this._fightDetailView.layerRight:
        case this._fightDetailView.layerMiddle:
        case this._fightDetailView.layerMoat:
          this._fightDetailView.addGlow(e.target);
      }
      if (!this._fightDetailView.selectedTarget) {
        if (e.target == this._fightDetailView.layerLeft || this.checkParents(e.target, this.defenceDialog.categoryMenu.mc_wall.wall_left) || this.checkParents(e.target, this.defenceDialog.categoryMenu.mc_moat.moat_left)) {
          this.getUnitLineUp(e.timeStamp);
          this.showInventoryInfo(this.getFinalUnitLineUp(this._lastUnitLineUp[0].concat(this._lastUnitLineUp[4])), this.defenceDialogProperties.worldMapObjectVO, this.defenceDialogProperties.worldMapObjectVO.ownerInfo, O.Localize.text("dialog_defenceUnitcomposition_title"));
        } else if (e.target == this._fightDetailView.layerRight || this.checkParents(e.target, this.defenceDialog.categoryMenu.mc_wall.wall_right) || this.checkParents(e.target, this.defenceDialog.categoryMenu.mc_moat.moat_right)) {
          this.getUnitLineUp(e.timeStamp);
          this.showInventoryInfo(this.getFinalUnitLineUp(this._lastUnitLineUp[2].concat(this._lastUnitLineUp[4])), this.defenceDialogProperties.worldMapObjectVO, this.defenceDialogProperties.worldMapObjectVO.ownerInfo, O.Localize.text("dialog_defenceUnitcomposition_title"));
        } else if (e.target == this._fightDetailView.layerMiddle || this.checkParents(e.target, this.defenceDialog.categoryMenu.mc_wall.wall_middle) || this.checkParents(e.target, this.defenceDialog.categoryMenu.mc_moat.moat_middle)) {
          this.getUnitLineUp(e.timeStamp);
          this.showInventoryInfo(this.getFinalUnitLineUp(this._lastUnitLineUp[1].concat(this._lastUnitLineUp[4])), this.defenceDialogProperties.worldMapObjectVO, this.defenceDialogProperties.worldMapObjectVO.ownerInfo, O.Localize.text("dialog_defenceUnitcomposition_title"), true, true);
        } else if (e.target == this._fightDetailView.layerKeep || this.checkParents(e.target, this.defenceDialog.categoryMenu.mc_keep)) {
          this.getUnitLineUp(e.timeStamp);
          this.showInventoryInfo(this.getFinalUnitLineUp(this._lastUnitLineUp[3].concat(this._lastUnitLineUp[4])), this.defenceDialogProperties.worldMapObjectVO, this.defenceDialogProperties.worldMapObjectVO.ownerInfo, O.Localize.text("dialog_defenceUnitcomposition_title"), false, false, false, true);
        }
      }
    }
  };
  CastleDefenceDialog.prototype.getUnitLineUp = function (e) {
    if (e - this._lastUnitLineUpTime > 1500) {
      var t = this.calcUnitPercentArray();
      var i = t[0];
      var n = t[1];
      var o = t[2];
      var a = new Le.UnitInventoryDictionary();
      a.addAll(this._unitMixedInventory.getUnits(null));
      var s = [i, n, o];
      var r = [z.CastleModel.defenceData.unitCompositionLeft, z.CastleModel.defenceData.unitCompositionMiddle, z.CastleModel.defenceData.unitCompositionRight, z.CastleModel.defenceData.unitCompositionKeep];
      this._lastUnitLineUp = ve.UnitAllocator.calculateUnitLineup(z.CastleModel.defenceData.wallUnitSlotCount, 0, a, s, r);
      this._lastUnitLineUpTime = e;
    }
  };
  CastleDefenceDialog.prototype.getFinalUnitLineUp = function (e) {
    return e;
  };
  CastleDefenceDialog.prototype.clickOnCastleView = function (e) {
    if (this._fightDetailView) {
      if (this._fightDetailView.selectedTarget == e.target) {
        this._fightDetailView.selectedTarget = null;
        this._fightDetailView.removeGlow();
        return;
      }
      this._fightDetailView.selectedTarget = null;
      this.mouseOverCastleView(e);
      switch (e.target) {
        case this._fightDetailView.layerKeep:
        case this._fightDetailView.layerLeft:
        case this._fightDetailView.layerRight:
        case this._fightDetailView.layerMiddle:
          this._fightDetailView.removeGlow();
          this._fightDetailView.selectedTarget = e.target;
          this._fightDetailView.addGlow(this._fightDetailView.selectedTarget);
          break;
        default:
          this._fightDetailView.removeGlow();
          this.hideSpyInfo();
      }
    }
  };
  CastleDefenceDialog.prototype.calculateToolsInfo = function (t, i = 0, n = 0, o = 0, a = true, s = false, r = false, l = false) {
    var c = D.int(z.CastleModel.defenceData.moatDefence);
    var u = D.int(z.CastleModel.defenceData.gateDefence);
    var d = D.int(z.CastleModel.defenceData.wallDefence);
    if (this.isAllianceTowerDefence) {
      d = D.int(Pe.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(this._lordVO, q.EffectTypeEnum.EFFECT_TYPE_WALL_BONUS, this.targetArea.areaType).strength);
      u = D.int(Pe.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(this._lordVO, q.EffectTypeEnum.EFFECT_TYPE_GATE_BONUS, this.targetArea.areaType).strength);
      c = D.int(Pe.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(this._lordVO, q.EffectTypeEnum.EFFECT_TYPE_MOAT_BONUS, this.targetArea.areaType).strength);
    }
    return e.prototype.calculateToolsInfo.call(this, t, u, c, d, a, s, r, l);
  };
  CastleDefenceDialog.prototype.checkParents = function (e, t) {
    return !!e && !!(e instanceof ye) && (e == t || e.parent == t || e.parent.parent == t || e.parent.parent.parent == t);
  };
  CastleDefenceDialog.prototype.fillShopItemsByGroup = function () {
    var e = this.getFilteredArray(this._currentShopCategory);
    this.initShopArrows(e.length);
    this._shopCurrentPage = Math.min(this._shopCurrentPage, this._shopMaxPage);
    var t = D.int(this._shopCurrentPage * le.CastleFightDialog.SHOP_ITEMS_PER_PAGE);
    for (var i = 0; i < le.CastleFightDialog.SHOP_ITEMS_PER_PAGE; i++) {
      var n = this.bottomMenu.itemSelection["i" + i];
      var o = this.bottomMenu["btn_info" + i];
      se.ButtonHelper.initBasicButton(o);
      se.ButtonHelper.enableButton(o, this.isOutOfTutorial());
      if (t < e.length) {
        n.mc_contentHolder.mouseChildren = false;
        n.mc_contentHolder.mouseEnabled = false;
        var a = e[t];
        if (!n.unitVO || n.unitVO.wodId != a.wodId || n.unitVO.inventoryAmount != a.inventoryAmount) {
          n.unitVO = a;
          n.mc_bg.mouseChildren = false;
          ke.WodPicHelper.addPlayerUnitPicToContainer(a, n.mc_contentHolder, le.CastleFightDialog.SHOP_MAX_ITEM_WIDTH, le.CastleFightDialog.SHOP_MAX_ITEM_HEIGHT, le.CastleFightDialog.SHOP_MAX_ITEM_WIDTH, le.CastleFightDialog.SHOP_MAX_ITEM_HEIGHT, 22, null, true, Ue.WodPicHelperUnitFramePerfectCallbackWrapper.callback(a, le.CastleFightDialog.SHOP_MAX_ITEM_WIDTH, le.CastleFightDialog.SHOP_MAX_ITEM_HEIGHT));
        }
        this.textFieldManager.registerTextField(n.mc_contentHolder.txt_amount, new E.LocalizedNumberVO(a.inventoryAmount), new u.InternalGGSTextFieldConfigVO(true));
        Se.FightScreenHelper.initInstantBuyButton(n.btn_instantBuy, a, this.sourceArea);
        o.property = a;
        o.visible = true;
        n.mouseChildren = true;
        n.visible = true;
      } else {
        n.visible = false;
        o.visible = false;
      }
      t++;
    }
    this.controller.dispatchEvent(new U.CastleDialogEvent(U.CastleDialogEvent.FIGHT_SCREEN_SHOP_FILLED));
  };
  CastleDefenceDialog.prototype.getCategoryButtonForUnit = function (e) {
    var t = z.CastleModel.wodData.getUnitVOByWodId(e);
    if (t.isToolForSlotType(Me.ToolUnitVO.SLOTTYPE_TOOL_GATE)) {
      if (this._currentDefenceCategory != S.ClientConstCastle.DEFENCE_CATEGORY_WALL) {
        return this.defenceDialog.categoryMenu.btn_wall;
      } else {
        return this.defenceDialog.bottomMenu.btn_cat_gate;
      }
    } else if (t.isToolForSlotType(Me.ToolUnitVO.SLOTTYPE_TOOL_KEEP)) {
      return this.defenceDialog.categoryMenu.btn_keep;
    } else if (t.isToolForSlotType(Me.ToolUnitVO.SLOTTYPE_TOOL_MOAT)) {
      return this.defenceDialog.categoryMenu.btn_moat;
    } else if (t.isToolForSlotType(Me.ToolUnitVO.SLOTTYPE_TOOL_WALL)) {
      if (this._currentDefenceCategory != S.ClientConstCastle.DEFENCE_CATEGORY_WALL) {
        return this.defenceDialog.categoryMenu.btn_wall;
      } else {
        return this.defenceDialog.bottomMenu.btn_cat_wall;
      }
    } else {
      return null;
    }
  };
  Object.defineProperty(CastleDefenceDialog.prototype, "sourceArea", {
    get: function () {
      return this.defenceDialogProperties.worldMapObjectVO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(le.CastleFightDialog.prototype, "sourceArea").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceDialog.prototype, "defenceDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceDialog.prototype, "defenceDialog", {
    get: function () {
      return this.dialogDisp;
    },
    enumerable: true,
    configurable: true
  });
  CastleDefenceDialog.prototype.onKingdomUpdates = function (e) {
    if (this.defenceDataAreaInfo && !z.CastleModel.kingdomData.isKingdomUnlocked(this.defenceDataAreaInfo.kingdomID)) {
      this.hide();
    }
  };
  Object.defineProperty(CastleDefenceDialog.prototype, "targetArea", {
    get: function () {
      return this.defenceDialogProperties.worldMapObjectVO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(le.CastleFightDialog.prototype, "targetArea").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleDefenceDialog.prototype.getDefendingLord = function () {
    return this._lordVO;
  };
  CastleDefenceDialog.prototype.getDefendingLegendSkillIDs = function () {
    return z.CastleModel.legendSkillData.skillIDArray;
  };
  CastleDefenceDialog.prototype.hasActiveAllianceYardSupportLimit = function () {
    return this._hasActiveAllianceYardSupportLimit;
  };
  CastleDefenceDialog.prototype.changeItemAmount = function (t, i, n) {
    e.prototype.changeItemAmount.call(this, t, i, n);
    if (t instanceof Me.ToolUnitVO && t.getBonusByEffect(J.ToolEffectType.DEFENSE_UNIT_AMOUNT_WALL) > 0) {
      this.sendKeepData();
      this.sendWallData();
      this._userHasMadeChanges = false;
    }
  };
  CastleDefenceDialog.prototype.enableTownshipDefenceComponents = function () {
    var e = this.sourceArea.areaType == C.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP;
    this.dialogDisp.mc_townshipSupport.visible = e || this.isAllianceTowerDefence;
    this.dialogDisp.categoryMenu.info_townshipDefenders.visible = e;
    this.dialogDisp.bottomMenu.info_township.visible = e;
  };
  CastleDefenceDialog.prototype.updateTownshipDefenceInfo = function () {
    if (ee.instanceOf_ISupportCapacityVO(this.sourceArea)) {
      var e = 0;
      var t = 0;
      var i = z.CastleModel.armyData.getMovementsToAreaPos(this.sourceArea);
      if (i != null) {
        for (var n = 0, o = i; n < o.length; n++) {
          var a = o[n];
          if (a !== undefined && g.instanceOfClass(a, "SupportDefenceMapmovementVO")) {
            e += D.int(a.armySize);
            if (a.isMyMovement) {
              t += D.int(a.armySize);
            }
          }
        }
      }
      var s = D.int(this.sourceArea.supportCapacity);
      this.updateCapacityText(this.dialogDisp.categoryMenu.info_townshipDefenders, e, s, A.ClientConstColor.FONT_DEFAULT_COLOR);
      this.updateCapacityText(this.dialogDisp.categoryMenu.mc_allianceTower.mc_capacity, e, s, A.ClientConstColor.MODERN_DEFAULT_BRIGHT);
      if (t == 0) {
        this.dialogDisp.mc_townshipSupport.toolTipText = this.sourceArea.supportOverviewNoTroopsToolTipID;
        se.ButtonHelper.enableButton(this.dialogDisp.mc_townshipSupport, false);
      } else {
        se.ButtonHelper.enableButton(this.dialogDisp.mc_townshipSupport, true);
        this.dialogDisp.mc_townshipSupport.toolTipText = this.sourceArea.supportOverviewToolTip;
      }
    }
  };
  CastleDefenceDialog.prototype.updateCapacityText = function (e, t, i, n) {
    var o = this.textFieldManager.registerTextField(e.txt_value, new y.LocalizedTextVO(r.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [t, i]));
    if (t >= i) {
      o.color = A.ClientConstColor.FONT_INSUFFICIENT_COLOR;
      if (e.icon_warning) {
        e.icon_warning.visible = true;
      }
      e.toolTipText = this.sourceArea.defenceCapacityReachedToolTipID;
    } else {
      o.color = n;
      if (e.icon_warning) {
        e.icon_warning.visible = false;
      }
      e.toolTipText = this.sourceArea.defenceCapacityToolTipID;
    }
    o.autoFitToBounds = true;
    o.verticalAlign = ae.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  CastleDefenceDialog.prototype.updateAllianceTowerInfo = function () {
    if (this.isAllianceTowerDefence && this._currentDefenceCategory == S.ClientConstCastle.DEFENCE_CATEGORY_ALLIANCETOWER) {
      var e = this.defenceDialog.categoryMenu.mc_allianceTower;
      new Ve.ABGTowerConnectionsComponent(e.mc_connections, xe.ABGTowerConnectionStateComponent.TYPE_DIALOG, xe.ABGTowerConnectionStateComponent.SIZE_DIALOG, xe.ABGTowerConnectionStateComponent.SPACING_DIALOG).setConnections(this.defenceDialogProperties.worldMapObjectVO.connections);
      if (this._currentAllianceTowerBuffInfoVO) {
        this.defenceDialog.categoryMenu.mc_allianceTower.mc_buffsActive.visible = false;
        if (this._currentAllianceTowerBuffInfoVO.isAnyEffectUpgraded()) {
          if (this._currentAllianceTowerBuffInfoVO.isActive) {
            var t = X.CastleTimeStringHelper.getShortTimeString(z.CastleModel.allianceBattlegroundData.remainingSecondsTillRevive);
            this.itxt_buffStatusActive.textContentVO.stringValue = O.Localize.text("dialog_beyondTheHorizon_AllianceTower_defense_buffStatus_active", [t]);
            this.defenceDialog.categoryMenu.mc_allianceTower.mc_buffsActive.visible = true;
            se.ButtonHelper.enableButton(this.defenceDialog.categoryMenu.mc_allianceTower.btn_activate, false);
            this.defenceDialog.categoryMenu.mc_allianceTower.btn_activate.toolTipText = "dialog_beyondTheHorizon_AllianceTower_defense_buffStatus_activateBuff_buffActive_tooltip";
          } else {
            this.itxt_buffStatusInactive.textContentVO.stringValue = O.Localize.text("dialog_beyondTheHorizon_AllianceTower_defense_buffStatus_inactive");
            if (!this.defenceDialogProperties.worldMapObjectVO.isAttackable && this.defenceDialogProperties.worldMapObjectVO.defeatedConnections >= this.defenceDialogProperties.worldMapObjectVO.connections.length) {
              se.ButtonHelper.enableButton(this.defenceDialog.categoryMenu.mc_allianceTower.btn_activate, false);
              this.defenceDialog.categoryMenu.mc_allianceTower.btn_activate.toolTipText = "dialog_beyondTheHorizon_AllianceTower_defense_buffStatus_notUpgraded";
            } else {
              se.ButtonHelper.enableButton(this.defenceDialog.categoryMenu.mc_allianceTower.btn_activate, true);
              this.defenceDialog.categoryMenu.mc_allianceTower.btn_activate.toolTipText = null;
            }
          }
        } else {
          this.itxt_buffStatusInactive.textContentVO.stringValue = O.Localize.text("dialog_beyondTheHorizon_AllianceTower_defense_buffStatus_notUpgraded");
          se.ButtonHelper.enableButton(this.defenceDialog.categoryMenu.mc_allianceTower.btn_activate, false);
          this.defenceDialog.categoryMenu.mc_allianceTower.btn_activate.toolTipText = "dialog_beyondTheHorizon_AllianceTower_defense_buffStatus_activateBuff_notUpgraded_tooltip";
        }
        this.dialogDisp.mc_targetLord.gotoAndStop(this._currentAllianceTowerBuffInfoVO.isActive ? 2 : 1);
      } else {
        this.dialogDisp.mc_targetLord.gotoAndStop(1);
      }
      this._lordVO.parseAllianceTowerBuffInfo(this._currentAllianceTowerBuffInfoVO);
      z.CastleModel.timerData.addEventListener(N.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
      this.controller.addEventListener(F.CastleServerMessageArrivedEvent.ABG_TOWERS_BUFF_INFO, this.bindFunction(this.onAllianceTowerBuffInfoReceived));
    }
  };
  CastleDefenceDialog.prototype.onTimerUpdate = function (e) {
    if (this.isAllianceTowerDefence && (this.itxt_reassignTimer.textContentVO.stringValue = X.CastleTimeStringHelper.getShortTimeString(z.CastleModel.allianceBattlegroundData.remainingSecondsTillRelink), this.itxt_reviveTimer.textContentVO.stringValue = X.CastleTimeStringHelper.getShortTimeString(z.CastleModel.allianceBattlegroundData.remainingSecondsTillRevive), this._currentAllianceTowerBuffInfoVO && this._currentAllianceTowerBuffInfoVO.isActive)) {
      var t = X.CastleTimeStringHelper.getShortTimeString(z.CastleModel.allianceBattlegroundData.remainingSecondsTillRevive);
      this.itxt_buffStatusActive.textContentVO.stringValue = O.Localize.text("dialog_beyondTheHorizon_AllianceTower_defense_buffStatus_active", [t]);
    }
  };
  Object.defineProperty(CastleDefenceDialog.prototype, "isAllianceTowerDefence", {
    get: function () {
      return g.instanceOfClass(this.targetArea, "ABGAllianceTowerMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  CastleDefenceDialog.prototype.onAllianceTowerBuffInfoReceived = function (e) {
    this._currentAllianceTowerBuffInfoVO = e.params[0];
    this.updateAllianceTowerInfo();
  };
  CastleDefenceDialog.prototype.initGeneralSelection = function () {
    if (!this._generalSelection) {
      var e = new ge.GeneralSelectionProperties();
      e.disableMovingGenerals = true;
      this._generalSelection = new pe.GeneralSelection(this.defenceDialog.mc_generals.mc_generalSelection, e);
      this._generalSelection.onSelectSignal.add(this.bindFunction(this.onSelectGeneral));
      this._generalSelectionPosX = this.defenceDialog.mc_generals.mc_generalSelection.x;
    }
  };
  CastleDefenceDialog.prototype.updateGeneralSelection = function () {
    var e = Array.from(z.CastleModel.generalsData.playerGenerals.values()).filter(function (e) {
      return e.isUnlocked && e.isImplemented;
    });
    e.unshift(null);
    this._generalSelection.init(e);
    this._generalSelection.onShow();
    var t = this.getDefendingLord();
    var i = t ? t.assignedGeneralVO : null;
    this._generalSelection.selectGeneralVO(i, false);
    se.ButtonHelper.enableButton(this.defenceDialog.mc_generals.mc_generalSelection.btn_generalOverview, z.CastleModel.generalsIntroductionData.isIntroductionFinished());
  };
  CastleDefenceDialog.prototype.updateGeneral = function () {
    var e = this.getDefendingLord();
    var t = e && e.assignedGeneralVO || null;
    var i = t ? t.generalID : -1;
    var n = Ce.GeneralsHelper.getGeneralsBackground(i, false);
    l.MovieClipHelper.clearMovieClip(this.defenceDialog.mc_generals.mc_generalInfo.mc_generalBG);
    this.defenceDialog.mc_generals.mc_generalInfo.mc_generalBG.addChild(n);
    var o = Ce.GeneralsHelper.getGeneralClip(i, true, 0.56);
    l.MovieClipHelper.clearMovieClip(this.defenceDialog.mc_generals.mc_generalInfo.mc_generalAnimation);
    if (o) {
      this.defenceDialog.mc_generals.mc_generalInfo.mc_generalAnimation.addChild(o);
    }
    if (this._currentGeneralIcon) {
      this._currentGeneralIcon.onHide();
    }
    l.MovieClipHelper.clearMovieClip(this.defenceDialog.mc_generalIcon);
    this._currentGeneralIcon = new he.GeneralSelectionItem(t, this.defenceDialog.mc_generalIcon, false);
    if (z.CastleModel.generalsIntroductionData.canAccessGenerals()) {
      this._currentGeneralIcon.onShow();
    }
    this._currentGeneralIcon.onClickSignal.add(this.bindFunction(this.onClickGeneralIcon));
    this._currentGeneralIcon.disp.toolTipText = t ? {
      t: "dialog_defence_generals assignedName_tooltip",
      p: [t.nameText]
    } : "dialog_defence_generals_assignedNone_tooltip";
    this.defenceDialog.mc_generals.mc_generalInfo.mc_abilites.visible = !!t;
    this.defenceDialog.mc_generals.mc_generalInfo.btn_info.visible = !!t;
    this.defenceDialog.mc_generals.mc_generalInfo.icon_state.visible = !!t;
    this.defenceDialog.mc_generals.mc_generalInfo.mc_noGeneral.visible = !t;
    this.defenceDialog.mc_generals.mc_generalInfo.mc_generalInfoTooltip.visible = false;
    this.defenceDialog.mc_generals.mc_generalInfo.mc_abilitiesDetails.visible = false;
    this.defenceDialog.mc_generals.mc_generalInfo.btn_info.toolTipText = "dialog_attack_rework2022_generals_passiveEffectsList_tooltip";
    this.defenceDialog.mc_generals.mc_generalInfo.mc_abilites.mouseChildren = false;
    if (t) {
      this.textFieldManager.registerTextField(this.defenceDialog.mc_generals.mc_generalInfo.mc_generalInfoTooltip.txt_effects, new b.TextVO(t.getPassiveEffectsText())).autoFitToBounds = true;
      this.playLevel100Animation();
      var a = t.getSelectedAbilities(false);
      for (var s = 0; s < 5; s++) {
        var r = this.defenceDialog.mc_generals.mc_generalInfo.mc_abilites["mc_ability" + s];
        var c = this.defenceDialog.mc_generals.mc_generalInfo.mc_abilitiesDetails.mc_detail["mc_ability" + s];
        l.MovieClipHelper.clearMovieClip(r);
        l.MovieClipHelper.clearMovieClip(c.mc_icon);
        if (t.defenseSlots.length <= s) {
          this.textFieldManager.registerTextField(c.txt_desc, new b.TextVO(" "));
        } else if (a[s]) {
          r.addChild(Ce.GeneralsHelper.getGeneralAbilityClip(a[s].abilityGroupID, 46, -1, false));
          c.mc_icon.addChild(Ce.GeneralsHelper.getGeneralAbilityClip(a[s].abilityGroupID, 46, a[s].abilityID, false));
          this.textFieldManager.registerTextField(c.txt_desc, new b.TextVO(Ce.GeneralsHelper.getLocalizedCopyForAbility(a[s].abilityID, false))).autoFitToBounds = true;
        } else {
          r.addChild(Ce.GeneralsHelper.getGeneralAbilityClip(-1, 46, -1, false));
          c.mc_icon.addChild(Ce.GeneralsHelper.getGeneralAbilityClip(-1, 46));
          this.textFieldManager.registerTextField(c.txt_desc, new b.TextVO(Ce.GeneralsHelper.getLocalizedCopyForAbility(-1, false)));
        }
      }
    } else {
      this.clearAnim100Clips();
    }
  };
  CastleDefenceDialog.prototype.playLevel100Animation = function () {
    this.defenceDialog.tickEnabled = true;
    var e = this.getDefendingLord();
    var t = e && e.assignedGeneralVO || null;
    if (!t || t.currentStarLevel < t.maxStarLevel) {
      this.clearAnim100Clips();
    } else {
      this.defenceDialog.mc_generals.mc_generalInfo.mc_lvl100_front.scaleX = this.defenceDialog.mc_generals.mc_generalInfo.mc_lvl100_front.scaleY = this.defenceDialog.mc_generals.mc_generalInfo.mc_lvl100_back.scaleX = this.defenceDialog.mc_generals.mc_generalInfo.mc_lvl100_back.scaleY = 0.26;
      this.level100LoadedCount = 0;
      var i = "Generals_Level100_" + t.generalXmlVO.rarity.name + "_front";
      if (i != this.lastLoaded100Anim) {
        this.clearAnim100Clips();
        this.lastLoaded100Anim = i;
        var n = "Generals_Level100_" + t.generalXmlVO.rarity.name + "_back";
        this.frontClip = new ie.CastleGoodgameExternalClip(i, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(i), null, 24, false);
        this.backClip = new ie.CastleGoodgameExternalClip(n, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(n), null, 24, false);
        this.defenceDialog.mc_generals.mc_generalInfo.mc_lvl100_front.addChild(this.frontClip);
        this.defenceDialog.mc_generals.mc_generalInfo.mc_lvl100_back.addChild(this.backClip);
        this.frontClip.doWhenLoaded(this.bindFunction(this.level100AnimationLoaded));
        this.backClip.doWhenLoaded(this.bindFunction(this.level100AnimationLoaded));
      }
    }
  };
  CastleDefenceDialog.prototype.clearAnim100Clips = function () {
    if (this.frontClip && this.frontClip.parent) {
      this.frontClip.parent.removeChild(this.frontClip);
    }
    if (this.backClip && this.backClip.parent) {
      this.backClip.parent.removeChild(this.backClip);
    }
    this.lastLoaded100Anim = "";
  };
  CastleDefenceDialog.prototype.level100AnimationLoaded = function () {
    this.level100LoadedCount++;
    if (!(this.level100LoadedCount < 2)) {
      if (this.frontClip.currentshownDisplayObject) {
        l.MovieClipHelper.playAllMovies(this.frontClip.currentshownDisplayObject);
      }
      if (this.backClip.currentshownDisplayObject) {
        l.MovieClipHelper.playAllMovies(this.backClip.currentshownDisplayObject);
      }
    }
  };
  CastleDefenceDialog.prototype.updateMainLordEffects = function () {
    var e = this._lordVO;
    var t = [];
    if (e) {
      var i = we.LordEffectHelper.STRATEGY_FULL_ACTIVE;
      t = e.getUniqueBoni(false, null, this.sourceArea.areaType, i, true);
    }
    Ce.GeneralsHelper.showLordMainEffects(this.defenceDialog.mc_generals.mc_generalInfo.mc_lordEffects, t, new be(35, 35), true);
  };
  CastleDefenceDialog.prototype.onEquipOrRename = function (e) {
    this.onLordChange();
  };
  CastleDefenceDialog.prototype.onGeneralAssigned = function (e) {
    this.onLordChange();
    this.sendKeepData();
    this.updateDefenceData();
  };
  CastleDefenceDialog.prototype.onLordChange = function () {
    this.setActiveBaron();
    this.updateMainLordEffects();
    this.updateGeneral();
  };
  CastleDefenceDialog.prototype.onClickGeneralIcon = function () {
    this.defenceDialog.mc_generals.visible = true;
    this.controller.dispatchEvent(new U.CastleDialogEvent(U.CastleDialogEvent.DEFENCE_SCREEN_OPEN_GENERALS));
  };
  CastleDefenceDialog.prototype.onSelectGeneral = function (e) {
    z.CastleModel.lordData.assignGeneral(this._lordVO, e);
  };
  CastleDefenceDialog.prototype.openGeneralSelection = function () {
    if (!this._isGeneralSelectionOpen) {
      this._isGeneralSelectionOpen = true;
      this.defenceDialog.mc_generals.mc_generalInfo.btn_switch.mc_open.visible = true;
      this.defenceDialog.mc_generals.mc_generalInfo.btn_switch.toolTipText = "dialog_defence_rework2022_generals_hideGeneralsSelection_tooltip";
      I.TweenMax.killTweensOf(this.defenceDialog.mc_generals.mc_generalSelection);
      this.defenceDialog.mc_generals.mc_generalSelection.visible = true;
      I.TweenMax.to(this.defenceDialog.mc_generals.mc_generalSelection, 0.2, {
        x: this._generalSelectionPosX,
        ease: v.Power1.easeOut
      });
      this.controller.dispatchEvent(new U.CastleDialogEvent(U.CastleDialogEvent.DEFENCE_SCREEN_OPEN_GENERALS_SELECTION));
    }
  };
  CastleDefenceDialog.prototype.closeGeneralSelection = function () {
    var e = this;
    if (this._isGeneralSelectionOpen) {
      this._isGeneralSelectionOpen = false;
      this.defenceDialog.mc_generals.mc_generalInfo.btn_switch.mc_open.visible = false;
      this.defenceDialog.mc_generals.mc_generalInfo.btn_switch.toolTipText = "dialog_defence_rework2022_generals_showGeneralsSelection_tooltip";
      I.TweenMax.killTweensOf(this.defenceDialog.mc_generals.mc_generalSelection);
      I.TweenMax.to(this.defenceDialog.mc_generals.mc_generalSelection, 0.2, {
        x: this._generalSelectionPosX + this.defenceDialog.mc_generals.mc_generalSelection.width,
        ease: T.Linear.easeOut,
        onComplete: function () {
          return e.defenceDialog.mc_generals.mc_generalSelection.visible = false;
        }
      });
      this.controller.dispatchEvent(new U.CastleDialogEvent(U.CastleDialogEvent.DEFENCE_SCREEN_CLOSE_GENERALS_SELECTION));
    }
  };
  Object.defineProperty(CastleDefenceDialog.prototype, "generalSelection", {
    get: function () {
      return this._generalSelection;
    },
    enumerable: true,
    configurable: true
  });
  CastleDefenceDialog.prototype.setTickEnablement = function () {
    this.disp.tickEnabled = true;
  };
  CastleDefenceDialog.__initialize_static_members = function () {};
  CastleDefenceDialog.NAME = "CastleDefence";
  CastleDefenceDialog.WOD_ID_MOAT = 455;
  CastleDefenceDialog.ITEMSIZE = 40;
  CastleDefenceDialog.ITEMS_PER_ROW = 3;
  CastleDefenceDialog.REINIT_CURRENT_CATEGORIES = 0;
  CastleDefenceDialog.NO_SHOP = 6;
  return CastleDefenceDialog;
}(le.CastleFightDialog);
exports.CastleDefenceDialog = De;
d.classImplementsInterfaces(De, "ICollectableRendererList");
var Ie = require("./75.js");
var Te = require("./56.js");
var ve = require("./2513.js");
var Se = require("./510.js");
var Ae = require("./202.js");
var Le = require("./156.js");
var Pe = require("./110.js");
var Me = require("./181.js");
var Re = require("./9.js");
var Ve = require("./706.js");
var xe = require("./424.js");
var we = require("./133.js");
var Be = require("./2514.js");
var Fe = require("./61.js");
var Ne = require("./73.js");
var ke = require("./63.js");
var Ue = require("./377.js");
var Ge = require("./11.js");
var He = require("./246.js");
var je = require("./962.js");
var We = require("./963.js");
var Ye = require("./2515.js");
var Ke = require("./2517.js");
var ze = require("./1401.js");
var qe = require("./617.js");
var Xe = require("./2544.js");
var Qe = require("./20.js");
De.__initialize_static_members();
De.__initialize_static_members();