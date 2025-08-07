Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./100.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./16.js");
var h = require("./560.js");
var g = require("./13.js");
var C = require("./4.js");
var _ = require("./409.js");
var m = require("./36.js");
var f = require("./20.js");
var O = require("./496.js");
var E = require("./419.js");
var y = require("./420.js");
var b = require("./95.js");
var D = require("./47.js");
var I = require("./59.js");
var T = require("./8.js");
var v = require("./11.js");
var S = require("./247.js");
var A = require("./164.js");
var L = require("./340.js");
var P = require("./5426.js");
var M = createjs.MovieClip;
var R = function (e) {
  function CastleBattleLogPopUpDialog() {
    var t = this;
    t._filter_units = true;
    t._filter_tools = true;
    t._filter_general = true;
    t._currentUnitItems = [];
    t._currentToolItems = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleBattleLogPopUpDialog.NAME) || this;
  }
  n.__extends(CastleBattleLogPopUpDialog, e);
  CastleBattleLogPopUpDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    T.ButtonHelper.initBasicButtons([this.dialogDisp.filter_tools, this.dialogDisp.filter_units, this.dialogDisp.filter_general]);
    T.ButtonHelper.initButtons([this.dialogDisp.btn_close], f.ClickFeedbackButtonHover);
    T.ButtonHelper.initButtons([this.dialogDisp.mc_selector_flank.mc_selector, this.dialogDisp.mc_selector_wave.mc_selector], f.ClickFeedbackButtonHover, 1);
    T.ButtonHelper.initButtons([this.dialogDisp.mc_slider_attacker.btn_slider, this.dialogDisp.mc_slider_defender.btn_slider], L.ClickFeedBackHoverSliderButton, 1);
    this.dialogDisp.mc_selector_flank.mc_items = this.dialogDisp.mc_selector_flank.mc_list;
    this.dialogDisp.mc_selector_wave.mc_items = this.dialogDisp.mc_selector_wave.mc_list;
    this.dialogDisp.icon_tools.toolTipText = "tools";
    this.dialogDisp.icon_units.toolTipText = "units";
    this.dialogDisp.icon_general.toolTipText = "dialog_battleLogDetails_generalAbilities_header";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_battleLogDetails_vsDialog_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_right_empty.txt_text, new d.LocalizedTextVO("dialog_battleLogDetails_vsDialog_finalWaveNoDefense_desc"));
    this.itxt_empty = this.textFieldManager.registerTextField(this.dialogDisp.txt_empty, new d.LocalizedTextVO("dialog_battleLogDetails_vsDialog_defenderDetailsHidden_desc"));
    this._itxt_wave = this.textFieldManager.registerTextField(this.dialogDisp.mc_selector_wave.mc_selector.txt_label, new c.TextVO(""));
    this._itxt_flank = this.textFieldManager.registerTextField(this.dialogDisp.mc_selector_flank.mc_selector.txt_label, new c.TextVO(""));
    this._waveSelector = new E.SimpleComboboxComponent(this.dialogDisp.mc_selector_wave, new y.SimpleComboboxComponentConfig(-2, 1));
    this._flankSelector = new E.SimpleComboboxComponent(this.dialogDisp.mc_selector_flank, new y.SimpleComboboxComponentConfig(-2, 1));
    var i = new I.DynamicSizeScrollStrategyVertical(false, this.dialogDisp.list_attacker.mask.height, true);
    var n = new D.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider_attacker).addMouseWheelElements([this.dialogDisp.bg_attacker, this.dialogDisp.list_attacker]);
    this._scrollComponentAttacker = new b.SimpleScrollComponent(n, i);
    this._scrollYAttacker = this.dialogDisp.list_attacker.y;
    var o = new I.DynamicSizeScrollStrategyVertical(false, this.dialogDisp.list_defender.mask.height, true);
    var a = new D.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider_defender).addMouseWheelElements([this.dialogDisp.bg_defender, this.dialogDisp.list_defender]);
    this._scrollComponentDefender = new b.SimpleScrollComponent(a, o);
    this._scrollYDefender = this.dialogDisp.list_defender.y;
  };
  CastleBattleLogPopUpDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = [];
    for (var n = -1; n <= 2; n++) {
      var o = new O.ModernComboboxComponentItem("CastleBattlePopUp_DropdownElement", CastleBattleLogPopUpDialog.NAME, this.bindFunction(this.fillFlankItem), n);
      i.push(o);
      this._flankSelector.updateWithNewValues(i);
    }
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.list_attacker);
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.list_defender);
    this.controller.addEventListener(h.CastleLogDataEvent.NEW_FULL_LOG, this.bindFunction(this.onDetailedDataAvailable));
    if (this.dialogProperties.logVO.hasDetailedInfo) {
      this.displayPopUp();
    } else {
      C.CastleModel.messageData.getBattleLogDetailed(this.dialogProperties.logVO.logID);
    }
  };
  CastleBattleLogPopUpDialog.prototype.onDetailedDataAvailable = function (e = null) {
    this.controller.removeEventListener(h.CastleLogDataEvent.NEW_FULL_LOG, this.bindFunction(this.onDetailedDataAvailable));
    this.displayPopUp();
  };
  CastleBattleLogPopUpDialog.prototype.displayPopUp = function () {
    var e = this.dialogProperties.logVO;
    a.MovieClipHelper.clearMovieClip(this._waveSelector.disp.mc_item);
    var t = [];
    var i = 0;
    t.push(new O.ModernComboboxComponentItem("CastleBattlePopUp_DropdownElement", CastleBattleLogPopUpDialog.NAME, this.bindFunction(this.fillWaveItem), CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY));
    i++;
    if (e.detailedPreCombatWave) {
      t.push(new O.ModernComboboxComponentItem("CastleBattlePopUp_DropdownElement", CastleBattleLogPopUpDialog.NAME, this.bindFunction(this.fillWaveItem), CastleBattleLogPopUpDialog.WAVE_INDEX_PRE_ATTACK));
      i++;
    }
    t.push(new O.ModernComboboxComponentItem("CastleBattlePopUp_DropdownElement", CastleBattleLogPopUpDialog.NAME, this.bindFunction(this.fillWaveItem), CastleBattleLogPopUpDialog.WAVE_INDEX_SUPPORT_TOOLS));
    i++;
    for (var n = 0; n <= e.lastWaveIndex; n++) {
      var o = new O.ModernComboboxComponentItem("CastleBattlePopUp_DropdownElement", CastleBattleLogPopUpDialog.NAME, this.bindFunction(this.fillWaveItem), n);
      t.push(o);
    }
    if (e.detailedPostCombatWave) {
      t.push(new O.ModernComboboxComponentItem("CastleBattlePopUp_DropdownElement", CastleBattleLogPopUpDialog.NAME, this.bindFunction(this.fillWaveItem), CastleBattleLogPopUpDialog.WAVE_INDEX_POST_ATTACK));
    }
    if (this.dialogProperties.currentWave == CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY) {
      i = 1;
    }
    this._waveSelector.updateWithNewValues(t);
    this._waveSelector.onShow();
    this._waveSelector.selectIndex(this.dialogProperties.currentWave + i);
    this._waveSelector.onSelectionChanged.add(this.bindFunction(this.onComboboxChange));
    this._flankSelector.onShow();
    this._flankSelector.selectIndex(this.dialogProperties.currentFlank + 1);
    this._flankSelector.onSelectionChanged.add(this.bindFunction(this.onComboboxChange));
    this._flankSelector.update();
    if (e.isFactionBattleLog) {
      x.CrestHelper.replaceIntoPlaceHolder(this.dialogDisp.crest_attacker, x.CrestHelper.getPlayerOrFactionCrest(e.attackerBattleInfo.ownerInfoVO));
      x.CrestHelper.replaceIntoPlaceHolder(this.dialogDisp.crest_defender, x.CrestHelper.getPlayerOrFactionCrest(e.defenderBattleInfo.ownerInfoVO));
    } else {
      x.CrestHelper.replaceIntoPlaceHolder(this.dialogDisp.crest_attacker, e.attackerBattleInfo.ownerInfoVO.crest);
      x.CrestHelper.replaceIntoPlaceHolder(this.dialogDisp.crest_defender, e.defenderBattleInfo.ownerInfoVO.crest);
    }
    this.setPlayerName(this.dialogDisp.txt_name_attacker, this.dialogProperties.logVO.attackerBattleInfo);
    this.setPlayerName(this.dialogDisp.txt_name_defender, this.dialogProperties.logVO.defenderBattleInfo);
    this.displayCurrentSelection();
  };
  CastleBattleLogPopUpDialog.prototype.fillFlankItem = function (e) {
    e.disp.basicButton = null;
    e.getItemMc().mc_default.txt_waveNumber.visible = false;
    e.getItemMc().mc_hover.txt_waveNumber.visible = false;
    e.getItemMc().mc_default.icon.gotoAndStop(e.data + 2);
    e.getItemMc().mc_hover.icon.gotoAndStop(e.data + 2);
    e.getItemMc().gotoAndStop(1);
    T.ButtonHelper.initButton(e.getItemMc(), 1, m.ClickFeedbackButton);
    var t = e.data != -1 || this.dialogProperties.currentWave <= -1;
    this.textFieldManager.registerTextField(e.getItemMc().txt_text, new c.TextVO(this.getFlankName(e.data, t)));
    e.enableComponent(t);
    e.disp.mouseChildren = e.isEnabled;
  };
  CastleBattleLogPopUpDialog.prototype.fillWaveItem = function (e) {
    e.disp.basicButton = null;
    var t = this.textFieldManager.registerTextField(e.getItemMc().mc_default.txt_waveNumber, new c.TextVO(" "), new s.InternalGGSTextFieldConfigVO(true));
    var i = this.textFieldManager.registerTextField(e.getItemMc().mc_hover.txt_waveNumber, new c.TextVO(" "), new s.InternalGGSTextFieldConfigVO(true));
    var n = true;
    switch (e.data) {
      case CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY:
        e.getItemMc().mc_default.icon.visible = false;
        e.getItemMc().mc_hover.icon.visible = false;
        break;
      case CastleBattleLogPopUpDialog.WAVE_INDEX_PRE_ATTACK:
        e.getItemMc().mc_default.icon.visible = true;
        e.getItemMc().mc_hover.icon.visible = true;
        e.getItemMc().mc_default.icon.gotoAndStop(5);
        e.getItemMc().mc_hover.icon.gotoAndStop(5);
        break;
      case CastleBattleLogPopUpDialog.WAVE_INDEX_POST_ATTACK:
        e.getItemMc().mc_default.icon.visible = true;
        e.getItemMc().mc_hover.icon.visible = true;
        e.getItemMc().mc_default.icon.gotoAndStop(6);
        e.getItemMc().mc_hover.icon.gotoAndStop(6);
        break;
      case this.dialogProperties.logVO.reinforcementWaveIndex:
        e.getItemMc().mc_default.icon.visible = true;
        e.getItemMc().mc_hover.icon.visible = true;
        e.getItemMc().mc_default.icon.gotoAndStop(8);
        e.getItemMc().mc_hover.icon.gotoAndStop(8);
        break;
      case CastleBattleLogPopUpDialog.WAVE_INDEX_SUPPORT_TOOLS:
        e.getItemMc().mc_default.icon.visible = true;
        e.getItemMc().mc_hover.icon.visible = true;
        e.getItemMc().mc_default.icon.gotoAndStop(7);
        e.getItemMc().mc_hover.icon.gotoAndStop(7);
        break;
      default:
        e.getItemMc().mc_default.icon.visible = false;
        e.getItemMc().mc_hover.icon.visible = false;
        t.text = "" + (e.data + 1);
        i.text = "" + (e.data + 1);
        n = this.dialogProperties.currentFlank != -1;
    }
    e.getItemMc().gotoAndStop(1);
    this.textFieldManager.registerTextField(e.getItemMc().txt_text, new c.TextVO(this.getWaveName(e.data, false, n)), new s.InternalGGSTextFieldConfigVO(true));
    e.enableComponent(n);
    T.ButtonHelper.initButton(e.getItemMc(), 1, m.ClickFeedbackButton);
    e.disp.mouseChildren = e.isEnabled;
  };
  CastleBattleLogPopUpDialog.prototype.getWaveName = function (e, t, i = true) {
    if (e == this.dialogProperties.logVO.reinforcementWaveIndex) {
      return u.Localize.text("dialog_battleLogDetail_finalWave");
    } else if (e == CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY) {
      return u.Localize.text("dialog_battleLogDetail_summary");
    } else if (e == CastleBattleLogPopUpDialog.WAVE_INDEX_PRE_ATTACK) {
      return u.Localize.text("dialog_battleLogDetails_waveSelection_preBattle");
    } else if (e == CastleBattleLogPopUpDialog.WAVE_INDEX_POST_ATTACK) {
      return u.Localize.text("dialog_battleLogDetails_waveSelection_postBattle");
    } else if (e == CastleBattleLogPopUpDialog.WAVE_INDEX_SUPPORT_TOOLS) {
      return u.Localize.text("dialog_battleLogDetails_waveSelection_support");
    } else if (t) {
      return u.Localize.text(o.GenericTextIds.VALUE_ASSIGN_COLON, [u.Localize.text("dialog_battleLogDetail_wave"), (e + 1 < 10 ? "0" : "") + (e + 1)]);
    } else if (i) {
      return u.Localize.text("dialog_battleLogDetail_wave");
    } else {
      return u.Localize.text("dialog_battleLogDetails_waveSelection_waveDisabled");
    }
  };
  CastleBattleLogPopUpDialog.prototype.getFlankName = function (e, t = true) {
    switch (e) {
      case -1:
        if (t) {
          return u.Localize.text("dialog_battleLogDetail_courtyard");
        } else {
          return u.Localize.text("dialog_battleLogDetails_waveSelection_finalWaveDisabled");
        }
      case 0:
        return u.Localize.text("dialog_defence_leftFlank");
      case 1:
        return u.Localize.text("dialog_battleLogDetail_frontal");
      case 2:
        return u.Localize.text("dialog_defence_rightFlank");
    }
    return "";
  };
  CastleBattleLogPopUpDialog.prototype.getFlankNameBattleLog = function () {
    switch (this.dialogProperties.currentFlank) {
      case -3:
        return "EW";
      case -2:
        return "PW";
      case -1:
        return "Y";
      case 0:
        return "L";
      case 1:
        return "M";
      case 2:
        return "R";
    }
    return "";
  };
  CastleBattleLogPopUpDialog.prototype.displayCurrentSelection = function () {
    this.dialogDisp.mc_selector_flank.visible = this.isFlankSelectorVisible;
    this.dialogDisp.mc_right_empty.visible = this.isReinforcementWave;
    this.dialogDisp.filter_units.gotoAndStop(this.isUnitsFilterEnabled ? this._filter_units ? 2 : 1 : 3);
    this.dialogDisp.filter_tools.gotoAndStop(this.isToolsFilterEnabled ? this._filter_tools ? 2 : 1 : 3);
    this.dialogDisp.filter_general.gotoAndStop(this.isGeneralsAbilityFilterEnabled ? this._filter_general ? 2 : 1 : 3);
    T.ButtonHelper.enableButton(this.dialogDisp.filter_units, this.isUnitsFilterEnabled);
    T.ButtonHelper.enableButton(this.dialogDisp.filter_tools, this.isToolsFilterEnabled);
    T.ButtonHelper.enableButton(this.dialogDisp.filter_general, this.isGeneralsAbilityFilterEnabled);
    this._itxt_wave.textContentVO.stringValue = this.getWaveName(this.dialogProperties.currentWave, true);
    this._itxt_flank.textContentVO.stringValue = this.getFlankName(this.dialogProperties.currentFlank);
    this.clearItems();
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.list_attacker);
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.list_defender);
    var e = 0;
    var t = 0;
    e = this.createScrollContent(this.dialogDisp.list_attacker, true);
    if (this.dialogProperties.logVO.hasDefenderInfos && !this.isReinforcementWave) {
      t = this.createScrollContent(this.dialogDisp.list_defender, false);
    }
    e = Math.max(0, e - this.dialogDisp.list_attacker.mask.height);
    t = Math.max(0, t - this.dialogDisp.list_attacker.mask.height);
    this.itxt_empty.visible = !this.dialogProperties.logVO.hasDefenderInfos;
    this._scrollComponentAttacker.init(0, e, 50, 50);
    this._scrollComponentAttacker.show();
    this._scrollComponentAttacker.scrollToValue(0);
    this._scrollComponentAttacker.onScrollSignal.add(this.bindFunction(this.onScrollAttack));
    this._scrollComponentDefender.init(0, t, 50, 50);
    this._scrollComponentDefender.show();
    this._scrollComponentDefender.scrollToValue(0);
    this._scrollComponentDefender.onScrollSignal.add(this.bindFunction(this.onScrollDefense));
  };
  CastleBattleLogPopUpDialog.prototype.createScrollContent = function (e, t) {
    var i = this.dialogProperties.logVO;
    var n = t ? i.attackerBattleInfo : i.defenderBattleInfo;
    var o = CastleBattleLogPopUpDialog.ITEM_GAP_BIG;
    if (this._filter_tools && this.isToolsFilterEnabled) {
      var a = this.createUnitHeader(t, 1);
      a.y = o;
      e.addChild(a);
      o += a.height + CastleBattleLogPopUpDialog.ITEM_GAP_MIDDLE;
      var s = this.generateUnitList(e, this._currentToolItems, n, t, 1);
      s.y = o;
      o += s.height + CastleBattleLogPopUpDialog.ITEM_GAP_BIG;
    }
    if (this._filter_units && this.isUnitsFilterEnabled) {
      var r = this.createUnitHeader(t, 0);
      r.y = o;
      e.addChild(r);
      o += r.height + CastleBattleLogPopUpDialog.ITEM_GAP_MIDDLE;
      var l = this.generateUnitList(e, this._currentUnitItems, n, t, 0);
      l.y = o;
      o += l.height + CastleBattleLogPopUpDialog.ITEM_GAP_BIG;
    }
    if (this._filter_general && this.isGeneralsAbilityFilterEnabled) {
      var c = this.createGeneralContent(t);
      if (c) {
        c.y = o;
        e.addChild(c);
        o += c.height + CastleBattleLogPopUpDialog.ITEM_GAP_BIG;
      }
    }
    return Math.max(0, o - (CastleBattleLogPopUpDialog.ITEM_GAP_BIG - CastleBattleLogPopUpDialog.ITEM_GAP_MIDDLE));
  };
  CastleBattleLogPopUpDialog.prototype.createUnitHeader = function (e, t) {
    var i = t == 0 ? "dialog_battleLogDetails_vsDialog_units" : "dialog_battleLogDetails_vsDialog_tools";
    var n = new (r.getDefinitionByName("BattleLogPopUp_ListHeader"))();
    this.textFieldManager.registerTextField(n.txt_label, new d.LocalizedTextVO(i), new s.InternalGGSTextFieldConfigVO(true)).color = p.ClientConstColor.MODERN_DEFAULT_BRIGHT;
    n.icon.gotoAndStop(t == 0 ? 2 : 1);
    return n;
  };
  CastleBattleLogPopUpDialog.prototype.generateUnitList = function (e, t, i, n, o) {
    var a = new M();
    var s = [];
    var r = [];
    var l = this.dialogProperties.logVO;
    if (this.isSupportWave) {
      s = n ? this.dialogProperties.logVO.supportToolsAttacker : this.dialogProperties.logVO.supportToolsDefender;
    } else if (this.isReinforcementWave && o == 0) {
      s = l.reinforcementUnits;
    } else if (!this.isReinforcementWave) {
      var c = this.getWaveVO(l);
      if (o == 0) {
        s = this.getSoldiers(n, l, c);
      } else {
        var u = this.getFlankVO(n, c);
        if (this.isYardWave) {
          r = [];
          s = n ? this.dialogProperties.logVO.detailedCourtyardAttacker : this.dialogProperties.logVO.detailedCourtyardDefender;
        } else if (u) {
          r = u.effects;
          s = u.tools;
        } else {
          r = [];
          s = [];
        }
      }
    }
    e.addChild(a);
    this.drawEffects(a, t, r, i);
    this.drawUnitsAndTools(a, t, s, i, o, r.length > 0);
    return a;
  };
  CastleBattleLogPopUpDialog.prototype.drawUnitsAndTools = function (e, t, i, n, o, a = false) {
    var l = 0;
    var c = 0;
    for (var u = 0; u < i.length; u++) {
      var p = i[u];
      var h = C.CastleModel.wodData.createVObyWOD(p.wodID, V.CastleWodData.TYPE_UNIT);
      if ((o != 0 || r.instanceOfClass(h, "SoldierUnitVO")) && (o != 1 || r.instanceOfClass(h, "ToolUnitVO"))) {
        var g = new P.CastleBattleLogUnitScrollItemVO();
        g.isEffect = false;
        g.unitVO = h;
        g.participantVO = n;
        g.logUnitVO = p;
        var _ = new (r.getDefinitionByName("BattleLogPopUp_UnitItem"))();
        _.x = CastleBattleLogPopUpDialog.ITEM_START_X + c % CastleBattleLogPopUpDialog.ITEMS_PER_ROW * CastleBattleLogPopUpDialog.ITEM_OFFSET_X;
        _.y = Math.floor(c / CastleBattleLogPopUpDialog.ITEMS_PER_ROW) * CastleBattleLogPopUpDialog.ITEM_OFFSET_Y;
        e.addChild(_);
        var m = new w.CastleBattleLogUnitScrollListItem(_);
        m.fillWithContent(g);
        m.show();
        t.push(m);
        l++;
        c++;
      }
    }
    if (l <= 0 && !a) {
      var f = new (r.getDefinitionByName("BattleLogPopUp_IsEmpty"))();
      this.textFieldManager.registerTextField(f.txt_copy, new d.LocalizedTextVO(o == 0 ? "dialog_battleLogDetails_vsDialog_noUnitsUsed" : "dialog_battleLogDetails_vsDialog_noToolsUsed"), new s.InternalGGSTextFieldConfigVO(true));
      e.addChild(f);
    }
  };
  CastleBattleLogPopUpDialog.prototype.drawEffects = function (e, t, i, n) {
    for (var o = 0; o < i.length; ++o) {
      var a = i[o];
      var s = new P.CastleBattleLogUnitScrollItemVO();
      s.unitVO = a;
      s.isEffect = true;
      s.participantVO = n;
      s.effectInventoryAmount = a.inventoryAmount;
      var l = new (r.getDefinitionByName("BattleLogPopUp_UnitItem"))();
      l.x = CastleBattleLogPopUpDialog.ITEM_START_X + o % CastleBattleLogPopUpDialog.ITEMS_PER_ROW * CastleBattleLogPopUpDialog.ITEM_OFFSET_X;
      l.y = Math.floor(o / CastleBattleLogPopUpDialog.ITEMS_PER_ROW) * CastleBattleLogPopUpDialog.ITEM_OFFSET_Y;
      e.addChild(l);
      var c = new w.CastleBattleLogUnitScrollListItem(l);
      c.fillWithContent(s);
      t.push(c);
    }
  };
  CastleBattleLogPopUpDialog.prototype.getSoldiers = function (e, t, i) {
    if (e) {
      if (this.dialogProperties.currentFlank != -1 || i.isPreOrPostWave) {
        if (i.attacker.getFlank(this.dialogProperties.currentFlank)) {
          return i.attacker.getFlank(this.dialogProperties.currentFlank).soldiers;
        } else {
          return [];
        }
      } else {
        return t.detailedCourtyardAttacker;
      }
    } else if (this.dialogProperties.currentFlank != -1 || i.isPreOrPostWave) {
      if (i.defender.getFlank(this.dialogProperties.currentFlank)) {
        return i.defender.getFlank(this.dialogProperties.currentFlank).soldiers;
      } else {
        return [];
      }
    } else {
      return t.detailedCourtyardDefender;
    }
  };
  CastleBattleLogPopUpDialog.prototype.getFlankVO = function (e, t) {
    if (e) {
      return t.attacker.getFlank(this.dialogProperties.currentFlank);
    } else {
      return t.defender.getFlank(this.dialogProperties.currentFlank);
    }
  };
  CastleBattleLogPopUpDialog.prototype.getWaveVO = function (e) {
    switch (this.dialogProperties.currentWave) {
      case CastleBattleLogPopUpDialog.WAVE_INDEX_POST_ATTACK:
        return e.detailedPostCombatWave;
      case CastleBattleLogPopUpDialog.WAVE_INDEX_PRE_ATTACK:
        return e.detailedPreCombatWave;
      case CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY:
        return e.detailedSummaryWave;
      default:
        return e.detailedBattleWaves[e.detailedPreCombatWave ? this.dialogProperties.currentWave + 1 : this.dialogProperties.currentWave];
    }
  };
  CastleBattleLogPopUpDialog.prototype.createGeneralContent = function (e) {
    var t = e ? this.dialogProperties.logVO.commanderVO ? this.dialogProperties.logVO.commanderVO.assignedGeneralVO : null : this.dialogProperties.logVO.baronVO ? this.dialogProperties.logVO.baronVO.assignedGeneralVO : null;
    if (t) {
      var i = new M();
      var n = new (r.getDefinitionByName("BattleLogPopUp_GeneralHeader"))();
      var o = this.textFieldManager.registerTextField(n.txt_effects, new d.LocalizedTextVO("dialog_battleLogDetails_generalAbilities_header"), new s.InternalGGSTextFieldConfigVO(true));
      var a = this.textFieldManager.registerTextField(n.txt_name, new d.LocalizedTextVO(t.nameText), new s.InternalGGSTextFieldConfigVO(true));
      o.color = p.ClientConstColor.MODERN_DEFAULT_BRIGHT;
      a.color = p.ClientConstColor.MODERN_DEFAULT_BRIGHT;
      a.autoFitToBounds = true;
      new S.GeneralSelectionItem(t, n.mc_general, false, false, false, false, null, true, (e ? this.dialogProperties.logVO.attackerBattleInfo.playerID : this.dialogProperties.logVO.defenderBattleInfo.playerID) == C.CastleModel.userData.playerID);
      i.addChild(n);
      n.mc_general.scaleX = n.mc_general.scaleY = 0.6;
      var l = n.height + CastleBattleLogPopUpDialog.ITEM_GAP_SMALL;
      var u = 0;
      for (var h = 0, g = e ? this.dialogProperties.logVO.attackerAbilities : this.dialogProperties.logVO.defenderAbilities; h < g.length; h++) {
        var m = g[h];
        var f = undefined;
        f = this.dialogProperties.currentWave == CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY ? undefined : this.isReinforcementWave ? CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY : this.dialogProperties.currentWave;
        var O = this.getFlankNameBattleLog();
        if (this.checkAbilityTriggerConditions(m, f, O)) {
          var E = new (r.getDefinitionByName("BattleLogPopUp_AbilityItem"))();
          var y = this.textFieldManager.registerTextField(E.txt_name, new c.TextVO(A.GeneralsHelper.getLocalizedTitleForAbility(m.abilityXmlVO.abilityGroupID)), new s.InternalGGSTextFieldConfigVO(true));
          var b = new (m.abilityXmlVO.getAbilitEffect(e).getEffect(0).effect.effectType.valueClass)();
          if (m.abilityXmlVO.name == "Plunder") {
            b = new _.EffectValueSimple();
          }
          if (r.instanceOfClass(b, "EffectValueAyalaFalcon")) {
            if (this.dialogProperties.currentWave == CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY) {
              b.parseFromValueArray([(e ? m.abilityXmlVO.abilityAttackEffect : m.abilityXmlVO.abilityDefenseEffect).getEffect(0).strength]);
            } else {
              b.parseFromValueArray([this.dialogProperties.currentWave + 1]);
            }
          } else {
            b.parseFromValueArray([m.getValueForWave(f, O)]);
          }
          var D = this.getAbilityTextType(m, e);
          this.textFieldManager.registerTextField(E.txt_effect, new c.TextVO(A.GeneralsHelper.getLocalizedCopyForAbility(m.abilityID, e, D, b)), new s.InternalGGSTextFieldConfigVO(true)).color = p.ClientConstColor.MODERN_DEFAULT_BRIGHT;
          y.color = p.ClientConstColor.MODERN_DEFAULT_BRIGHT;
          E.mc_ability.addChild(A.GeneralsHelper.getGeneralAbilityClip(m.abilityXmlVO.abilityGroupID, 46, -1, e));
          E.y = l;
          i.addChild(E);
          l += E.height + CastleBattleLogPopUpDialog.ITEM_GAP_SMALL;
          u++;
        }
      }
      if (u <= 0 && !t.isNPCGeneral) {
        var I = new (r.getDefinitionByName("BattleLogPopUp_IsEmpty"))();
        I.y = l;
        this.textFieldManager.registerTextField(I.txt_copy, new d.LocalizedTextVO("dialog_battleLogDetails_generalsAbilities_noAbilities_desc"), new s.InternalGGSTextFieldConfigVO(true));
        i.addChild(I);
      }
      o.autoFitToBounds = true;
      return i;
    }
    return null;
  };
  CastleBattleLogPopUpDialog.prototype.getAbilityTextType = function (e, t) {
    if (e.abilityXmlVO.abilityGroupID == 1022 && (this.dialogProperties.currentWave == CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY || t && !this.dialogProperties.logVO.hasDefenderInfos)) {
      return A.GeneralsHelper.ABILITY_TEXT_SHORT;
    } else if (e.abilityXmlVO.abilityGroupID != 1021 && e.abilityXmlVO.abilityGroupID != 1019 || this.dialogProperties.currentWave != CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY) {
      return A.GeneralsHelper.ABILITY_TEXT_SHORT_VALUE;
    } else {
      return A.GeneralsHelper.ABILITY_TEXT_SHORT;
    }
  };
  CastleBattleLogPopUpDialog.prototype.checkAbilityTriggerConditions = function (e, t, i) {
    return t != this.dialogProperties.logVO.reinforcementWaveIndex && (e.isTriggerdInWave(t, this.getFlankNameBattleLog()) || i === undefined && e.isTriggerdInWave(undefined, this.getFlankNameBattleLog()));
  };
  CastleBattleLogPopUpDialog.prototype.onComboboxChange = function (e = null) {
    this.dialogProperties.currentWave = this._waveSelector.getSelectedItem().data;
    this.dialogProperties.currentFlank = this._flankSelector.getSelectedItem().data;
    this.displayCurrentSelection();
    this._waveSelector.update();
    this._flankSelector.update();
  };
  CastleBattleLogPopUpDialog.prototype.onScrollAttack = function () {
    this.dialogDisp.list_attacker.y = this._scrollYAttacker - this._scrollComponentAttacker.currentValue;
  };
  CastleBattleLogPopUpDialog.prototype.onScrollDefense = function () {
    this.dialogDisp.list_defender.y = this._scrollYDefender - this._scrollComponentDefender.currentValue;
  };
  CastleBattleLogPopUpDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.filter_tools:
        this._filter_tools = !this._filter_tools;
        this.displayCurrentSelection();
        break;
      case this.dialogDisp.filter_units:
        this._filter_units = !this._filter_units;
        this.displayCurrentSelection();
        break;
      case this.dialogDisp.filter_general:
        this._filter_general = !this._filter_general;
        this.displayCurrentSelection();
    }
  };
  CastleBattleLogPopUpDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this._waveSelector) {
      this._waveSelector.onHide();
      this._waveSelector.onSelectionChanged.remove(this.bindFunction(this.onComboboxChange));
    }
    if (this._flankSelector) {
      this._flankSelector.onHide();
      this._flankSelector.onSelectionChanged.remove(this.bindFunction(this.onComboboxChange));
    }
    if (this._scrollComponentAttacker) {
      this._scrollComponentAttacker.hide();
      this._scrollComponentAttacker.onScrollSignal.remove(this.bindFunction(this.onScrollAttack));
    }
    if (this._scrollComponentDefender) {
      this._scrollComponentDefender.hide();
      this._scrollComponentAttacker.onScrollSignal.remove(this.bindFunction(this.onScrollAttack));
    }
    this.clearItems();
    this.controller.removeEventListener(h.CastleLogDataEvent.NEW_FULL_LOG, this.bindFunction(this.onDetailedDataAvailable));
  };
  CastleBattleLogPopUpDialog.prototype.clearItems = function () {
    this._currentToolItems.forEach(function (e) {
      e.hide();
      e.remove();
    });
    this._currentToolItems.forEach(function (e) {
      e.hide();
      e.remove();
    });
    this._currentToolItems = [];
    this._currentUnitItems = [];
  };
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isReinforcementWave", {
    get: function () {
      return this.dialogProperties.currentWave == this.dialogProperties.logVO.reinforcementWaveIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isPreCombatWave", {
    get: function () {
      return this.dialogProperties.currentWave == CastleBattleLogPopUpDialog.WAVE_INDEX_PRE_ATTACK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isPostCombatWave", {
    get: function () {
      return this.dialogProperties.currentWave == CastleBattleLogPopUpDialog.WAVE_INDEX_POST_ATTACK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isSupportWave", {
    get: function () {
      return this.dialogProperties.currentWave == CastleBattleLogPopUpDialog.WAVE_INDEX_SUPPORT_TOOLS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isYardWave", {
    get: function () {
      return this.dialogProperties.currentFlank == -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isToolsFilterEnabled", {
    get: function () {
      return !this.isReinforcementWave && !this.isPreCombatWave && !this.isPostCombatWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isUnitsFilterEnabled", {
    get: function () {
      return !this.isSupportWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isGeneralsAbilityFilterEnabled", {
    get: function () {
      return !this.isSupportWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isFlankSelectorVisible", {
    get: function () {
      return !this.isSupportWave && !this.isReinforcementWave;
    },
    enumerable: true,
    configurable: true
  });
  CastleBattleLogPopUpDialog.prototype.setPlayerName = function (e, t) {
    if (t.ownerIsAlliance) {
      this.textFieldManager.registerTextField(e, new c.TextVO(t.ownerInfoVO.allianceName)).autoFitToBounds = true;
    } else if (t.ownerInfoVO.playerName == "") {
      this.textFieldManager.registerTextField(e, new d.LocalizedTextVO("deleted_Player"));
    } else {
      this.textFieldManager.registerTextField(e, new c.TextVO(t.ownerInfoVO.playerName)).autoFitToBounds = true;
    }
  };
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBattleLogPopUpDialog.NAME = "CastleBattleLogPopUp_Generals2";
  CastleBattleLogPopUpDialog.ITEMS_PER_ROW = 5;
  CastleBattleLogPopUpDialog.ITEM_START_X = 54;
  CastleBattleLogPopUpDialog.ITEM_OFFSET_X = 50;
  CastleBattleLogPopUpDialog.ITEM_OFFSET_Y = 64;
  CastleBattleLogPopUpDialog.ITEM_GAP_BIG = 30;
  CastleBattleLogPopUpDialog.ITEM_GAP_MIDDLE = 16;
  CastleBattleLogPopUpDialog.ITEM_GAP_SMALL = 10;
  CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY = -1;
  CastleBattleLogPopUpDialog.WAVE_INDEX_PRE_ATTACK = -2;
  CastleBattleLogPopUpDialog.WAVE_INDEX_POST_ATTACK = -3;
  CastleBattleLogPopUpDialog.WAVE_INDEX_SUPPORT_TOOLS = -4;
  return CastleBattleLogPopUpDialog;
}(v.CastleExternalDialog);
exports.CastleBattleLogPopUpDialog = R;
var V = require("./56.js");
var x = require("./61.js");
var w = require("./5427.js");
l.classImplementsInterfaces(R, "ICollectableRendererList");