Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./49.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./207.js");
var c = require("./13.js");
var u = require("./3836.js");
var d = require("./509.js");
var p = require("./713.js");
var h = require("./9.js");
var g = require("./20.js");
var C = require("./718.js");
var _ = require("./8.js");
var m = require("./215.js");
var f = require("./3843.js");
var O = require("./117.js");
var E = require("./3848.js");
var y = require("./470.js");
var b = require("./3851.js");
var D = require("./344.js");
var I = require("./361.js");
var T = require("./836.js");
var v = require("./837.js");
var S = require("./554.js");
var A = createjs.MouseEvent;
var L = function () {
  function AttackDialogAutoFill() {
    this.presets = new b.AttackDialogPresets();
    this.isInit = false;
    this._dragInventory = new E.AttackDialogDragInventory();
  }
  AttackDialogAutoFill.prototype.init = function (e, t) {
    this.mcOpen = e;
    this.mcClosed = t;
    this.mcClosed.visible = false;
    this.presets.init(this.mcOpen.mc_autoFillAndPreset);
    this._dragInventory.init(this.mcOpen.mc_inventory);
    this._advisorComponent ||= new f.AttackDialogAdvisor(this.mcOpen.mc_advisor);
    this.showTab(AttackDialogAutoFill.TAB_AUTOFILL_PRESETS);
    this.controller.onShowAutoFillOptions.add(this.bindFunction(this.show));
    this.controller.onHideAutoFillOptions.add(this.bindFunction(this.hide));
    this.controller.onAutoFillAllWaves.add(this.bindFunction(this.autoFillAllWaves));
    this.controller.updateAutoFillSelections.add(this.bindFunction(this.updateSavedSelected));
    this.controller.onAutoFillALLSelectionChanged.add(this.bindFunction(this.updateButtonStates));
    if (!this.isInit) {
      a.GoodgameTextFieldManager.getInstance().registerTextField(this.mcOpen.mc_autoFillAndPreset.txt_saveFilter, new r.LocalizedTextVO("dialog_attack_rework2022_presetsAndAutofill_saveForNextAttack_desc"));
      a.GoodgameTextFieldManager.getInstance().registerTextField(this.mcOpen.mc_autoFillAndPreset.btn_fill_waves.txt_copy, new r.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_attack_autofill_fillWaves_button")));
      a.GoodgameTextFieldManager.getInstance().registerTextField(this.mcOpen.mc_autoFillAndPreset.btn_clear_waves.txt_copy, new r.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_attack_autofill_clearWaves_button")));
      a.GoodgameTextFieldManager.getInstance().registerTextField(this.mcOpen.mc_autoFillAndPreset.txt_filter_units, new r.LocalizedTextVO("dialog_attack_rework2022_filterUnits_header"));
      a.GoodgameTextFieldManager.getInstance().registerTextField(this.mcOpen.mc_autoFillAndPreset.txt_filter_tools, new r.LocalizedTextVO("dialog_attack_rework2022_filterTools_header"));
      this.mcClosed.btn_open.toolTipText = "dialog_attack_rework2022_button_presetsAndAutofill_tooltip";
      _.ButtonHelper.initButtons([this.mcOpen.mc_autoFillAndPreset.btn_fill_waves, this.mcOpen.mc_autoFillAndPreset.btn_clear_waves, this.mcOpen.btn_close, this.mcClosed.btn_open, this.mcOpen.btn_autofill_presets, this.mcOpen.btn_inventory, this.mcOpen.btn_advisor], g.ClickFeedbackButtonHover, 1);
      this.mcOpen.mc_autoFillAndPreset.visible = true;
      this.mcOpen.mc_inventory.visible = false;
      this._saveToggle = new C.ToggleSwitchButton(this.mcOpen.mc_autoFillAndPreset.btn_save_nextTime);
      this.cbx_tool_basic = new n.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_tool_basic, true);
      this.cbx_tool_premium = new n.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_tool_premium, true);
      this.cbx_tool_elite = new n.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_tool_elite, true);
      this.cbx_tool_event = new n.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_tool_event, true);
      this.cbx_tool_combo = new n.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_tool_combo, true);
      this.cbx_unit_melee = new n.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_melee, true);
      this.cbx_unit_range = new n.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_range, true);
      this.cbx_unit_c1 = new n.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_c1, true);
      this.cbx_unit_c2 = new n.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_c2, true);
      this.cbx_unit_mead = new n.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_mead, true);
      this.cbx_unit_beef = new n.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_beef, true);
      this.cbx_units_all = new n.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_units_all, true);
      this.cbx_tools_all = new n.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_tools_all, true);
      this.mcOpen.mc_autoFillAndPreset.mc_basic.toolTipText = "toolType_basic";
      this.mcOpen.mc_autoFillAndPreset.mc_premium.toolTipText = "toolType_premium";
      this.mcOpen.mc_autoFillAndPreset.mc_elite.toolTipText = "toolType_elite";
      this.mcOpen.mc_autoFillAndPreset.mc_event.toolTipText = "toolType_event";
      this.mcOpen.mc_autoFillAndPreset.mc_combo.toolTipText = "toolType_combo";
      this.mcOpen.mc_autoFillAndPreset.mc_melee.toolTipText = "unitType_melee";
      this.mcOpen.mc_autoFillAndPreset.mc_range.toolTipText = "unitType_ranged";
      this.mcOpen.mc_autoFillAndPreset.mc_c1.toolTipText = "unitType_cash";
      this.mcOpen.mc_autoFillAndPreset.mc_c2.toolTipText = "unitType_gold";
      this.mcOpen.mc_autoFillAndPreset.mc_mead.toolTipText = "unitType_mead";
      this.mcOpen.mc_autoFillAndPreset.mc_beef.toolTipText = "unitType_beef";
      this.mcOpen.btn_autofill_presets.toolTipText = "dialog_attack_rework2022_presetsAndAutofill_header";
      this.mcOpen.btn_inventory.toolTipText = "dialog_attack_unitsToolList_tooltip";
      this.isInit = true;
    }
    this.options = new p.AutoFillOptions();
    this.controller.setAutoFillOptions(this.options);
    this.cbx_tool_basic.selected();
    this.cbx_tool_premium.selected();
    this.cbx_tool_elite.selected();
    this.cbx_tool_event.selected();
    this.cbx_tool_combo.selected();
    this.cbx_unit_melee.selected();
    this.cbx_unit_range.selected();
    this.cbx_unit_c1.selected();
    this.cbx_unit_c2.selected();
    this.cbx_unit_mead.selected();
    this.cbx_unit_beef.selected();
    this.updateButtonStates();
    this.updateAdvisorTab();
    this.mcOpen.parent.addEventListener(A.CLICK, this.bindFunction(this.onClick));
    this.controller.onLordChanged.add(this.bindFunction(this.onLordChanged));
  };
  AttackDialogAutoFill.prototype.show = function () {
    this.mcOpen.visible = true;
    this.mcClosed.visible = false;
    this.presets.onConditionChange();
  };
  AttackDialogAutoFill.prototype.onClick = function (e) {
    var t = this;
    if (_.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.mcOpen.mc_autoFillAndPreset.cbx_tool_basic:
          this.cbx_tool_basic.toggleSelected();
          this.options.setToolFilter(p.AutoFillOptions.TOOL_FILTER_BASIC, this.cbx_tool_basic.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_tool_premium:
          this.cbx_tool_premium.toggleSelected();
          this.options.setToolFilter(p.AutoFillOptions.TOOL_FILTER_PREMIUM, this.cbx_tool_premium.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_tool_elite:
          this.cbx_tool_elite.toggleSelected();
          this.options.setToolFilter(p.AutoFillOptions.TOOL_FILTER_ELITE, this.cbx_tool_elite.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_tool_event:
          this.cbx_tool_event.toggleSelected();
          this.options.setToolFilter(p.AutoFillOptions.TOOL_FILTER_EVENT, this.cbx_tool_event.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_tool_combo:
          this.cbx_tool_combo.toggleSelected();
          this.options.setToolFilter(p.AutoFillOptions.TOOL_FILTER_COMBO, this.cbx_tool_combo.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_melee:
          this.cbx_unit_melee.toggleSelected();
          this.options.setUnitFilter(p.AutoFillOptions.UNIT_FILTER_MELEE, this.cbx_unit_melee.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_range:
          this.cbx_unit_range.toggleSelected();
          this.options.setUnitFilter(p.AutoFillOptions.UNIT_FILTER_RANGE, this.cbx_unit_range.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_c1:
          this.cbx_unit_c1.toggleSelected();
          this.options.setUnitFilter(p.AutoFillOptions.UNIT_FILTER_C1, this.cbx_unit_c1.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_c2:
          this.cbx_unit_c2.toggleSelected();
          this.options.setUnitFilter(p.AutoFillOptions.UNIT_FILTER_C2, this.cbx_unit_c2.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_mead:
          this.cbx_unit_mead.toggleSelected();
          this.options.setUnitFilter(p.AutoFillOptions.UNIT_FILTER_MEAD, this.cbx_unit_mead.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_beef:
          this.cbx_unit_beef.toggleSelected();
          this.options.setUnitFilter(p.AutoFillOptions.UNIT_FILTER_BEEF, this.cbx_unit_beef.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_units_all:
          var i = this.options.getActiveUnitFilter().length < p.AutoFillOptions.UNIT_FILTER_TYPES.length;
          this.options.unitFilter.forEach(function (e, n) {
            return t.options.unitFilter.set(n, i);
          });
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_tools_all:
          var n = this.options.getActiveToolFilter().length < p.AutoFillOptions.TOOL_FILTER_TYPES.length;
          this.options.toolFilter.forEach(function (e, i) {
            return t.options.toolFilter.set(i, n);
          });
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.btn_fill_waves:
          this.autoFillSelectedWaves();
          D.AttackDialogTrackingHelper.getInstance().trackDetailCounter(D.AttackDialogTrackingHelper.TRACK_AUTOFILL_ALL);
          break;
        case this.mcOpen.mc_autoFillAndPreset.btn_clear_waves:
          this.onAutoFillClearClicked();
          break;
        case this.mcOpen.btn_close:
          this.controller.onHideAutoFillOptions.dispatch();
          break;
        case this.mcClosed.btn_open:
          this.controller.onShowAutoFillOptions.dispatch();
          break;
        case this.mcOpen.mc_autoFillAndPreset.btn_save_nextTime:
          this.updateSavedItems();
          break;
        case this.mcOpen.btn_autofill_presets:
          this.showTab(AttackDialogAutoFill.TAB_AUTOFILL_PRESETS);
          break;
        case this.mcOpen.btn_inventory:
          this.showTab(AttackDialogAutoFill.TAB_INVENTORY);
          break;
        case this.mcOpen.btn_advisor:
          this.showTab(AttackDialogAutoFill.TAB_ADVISOR_ATTACK);
      }
    }
  };
  AttackDialogAutoFill.prototype.showTab = function (e) {
    this.mcOpen.mc_autoFillAndPreset.visible = e == AttackDialogAutoFill.TAB_AUTOFILL_PRESETS;
    this.mcOpen.btn_autofill_presets.mc_selected.visible = e == AttackDialogAutoFill.TAB_AUTOFILL_PRESETS;
    this.mcOpen.mc_inventory.visible = e == AttackDialogAutoFill.TAB_INVENTORY;
    this.mcOpen.btn_inventory.mc_selected.visible = e == AttackDialogAutoFill.TAB_INVENTORY;
    this.mcOpen.mc_advisor.visible = e == AttackDialogAutoFill.TAB_ADVISOR_ATTACK;
    this.mcOpen.btn_advisor.mc_selected.visible = e == AttackDialogAutoFill.TAB_ADVISOR_ATTACK;
    if (e == AttackDialogAutoFill.TAB_INVENTORY) {
      this._dragInventory.updateInventory();
    }
    if (e == AttackDialogAutoFill.TAB_ADVISOR_ATTACK) {
      this._advisorComponent.onShow();
    } else {
      this._advisorComponent.onHide();
    }
  };
  AttackDialogAutoFill.prototype.updateSavedItems = function () {
    this.controller.saveAttackFilterOptions(!this._saveToggle.value);
  };
  AttackDialogAutoFill.prototype.updateShowAutoFillOptionsExclamationMark = function () {
    this.mcClosed.mc_warn.visible = this.showAutoFillOptionsExclamationMark();
    this.updateSavedItems();
  };
  AttackDialogAutoFill.prototype.updateSavedSelected = function () {
    this._saveToggle.setValue(this.controller.isAutoFillSaveSelected, false);
    if (this.options.isToolFilterActive(p.AutoFillOptions.TOOL_FILTER_BASIC)) {
      this.cbx_tool_basic.selected();
    } else {
      this.cbx_tool_basic.deselected();
    }
    if (this.options.isToolFilterActive(p.AutoFillOptions.TOOL_FILTER_PREMIUM)) {
      this.cbx_tool_premium.selected();
    } else {
      this.cbx_tool_premium.deselected();
    }
    if (this.options.isToolFilterActive(p.AutoFillOptions.TOOL_FILTER_ELITE)) {
      this.cbx_tool_elite.selected();
    } else {
      this.cbx_tool_elite.deselected();
    }
    if (this.options.isToolFilterActive(p.AutoFillOptions.TOOL_FILTER_EVENT)) {
      this.cbx_tool_event.selected();
    } else {
      this.cbx_tool_event.deselected();
    }
    if (this.options.isToolFilterActive(p.AutoFillOptions.TOOL_FILTER_COMBO)) {
      this.cbx_tool_combo.selected();
    } else {
      this.cbx_tool_combo.deselected();
    }
    if (this.options.isUnitFilterActive(p.AutoFillOptions.UNIT_FILTER_MELEE)) {
      this.cbx_unit_melee.selected();
    } else {
      this.cbx_unit_melee.deselected();
    }
    if (this.options.isUnitFilterActive(p.AutoFillOptions.UNIT_FILTER_RANGE)) {
      this.cbx_unit_range.selected();
    } else {
      this.cbx_unit_range.deselected();
    }
    if (this.options.isUnitFilterActive(p.AutoFillOptions.UNIT_FILTER_C1)) {
      this.cbx_unit_c1.selected();
    } else {
      this.cbx_unit_c1.deselected();
    }
    if (this.options.isUnitFilterActive(p.AutoFillOptions.UNIT_FILTER_C2)) {
      this.cbx_unit_c2.selected();
    } else {
      this.cbx_unit_c2.deselected();
    }
    if (this.options.isUnitFilterActive(p.AutoFillOptions.UNIT_FILTER_MEAD)) {
      this.cbx_unit_mead.selected();
    } else {
      this.cbx_unit_mead.deselected();
    }
    if (this.options.isUnitFilterActive(p.AutoFillOptions.UNIT_FILTER_BEEF)) {
      this.cbx_unit_beef.selected();
    } else {
      this.cbx_unit_beef.deselected();
    }
    var e = this.options.getActiveUnitFilter().length;
    var t = p.AutoFillOptions.UNIT_FILTER_TYPES.length;
    if (e == 0) {
      this.cbx_units_all.disp.gotoAndStop(1);
    } else if (e == t) {
      this.cbx_units_all.disp.gotoAndStop(2);
    } else {
      this.cbx_units_all.disp.gotoAndStop(3);
    }
    var i = this.options.getActiveToolFilter().length;
    var n = p.AutoFillOptions.UNIT_FILTER_TYPES.length;
    if (i == 0) {
      this.cbx_tools_all.disp.gotoAndStop(1);
    } else if (i == n) {
      this.cbx_tools_all.disp.gotoAndStop(2);
    } else {
      this.cbx_tools_all.disp.gotoAndStop(3);
    }
  };
  AttackDialogAutoFill.prototype.showAutoFillOptionsExclamationMark = function () {
    return !this.cbx_unit_melee.isSelected || !this.cbx_unit_range.isSelected || !this.cbx_unit_c1.isSelected || !this.cbx_unit_c2.isSelected || !this.cbx_unit_mead.isSelected || !this.cbx_unit_beef.isSelected || !this.cbx_tool_basic.isSelected || !this.cbx_tool_premium.isSelected || !this.cbx_tool_elite.isSelected || !this.cbx_tool_event.isSelected || !this.cbx_tool_combo.isSelected;
  };
  AttackDialogAutoFill.prototype.hide = function () {
    this.mcOpen.visible = false;
    this.mcClosed.visible = true;
  };
  AttackDialogAutoFill.prototype.destroy = function () {
    this.controller.onShowAutoFillOptions.remove(this.bindFunction(this.show));
    this.controller.onHideAutoFillOptions.remove(this.bindFunction(this.hide));
    this.controller.onAutoFillAllWaves.remove(this.bindFunction(this.autoFillAllWaves));
    this.controller.updateAutoFillSelections.remove(this.bindFunction(this.updateSavedSelected));
    if (this.mcOpen && this.mcOpen.parent) {
      this.mcOpen.parent.removeEventListener(A.CLICK, this.bindFunction(this.onClick));
    }
    this.controller.onAutoFillALLSelectionChanged.remove(this.bindFunction(this.updateButtonStates));
    this._dragInventory.destroy();
    this._advisorComponent.destroy();
    this.controller.onLordChanged.remove(this.bindFunction(this.onLordChanged));
  };
  AttackDialogAutoFill.prototype.autoFillSelectedWaves = function () {
    this.updateOptions();
    for (var e = 0; e < this.attackInfoVO.army.waves.length; e++) {
      if (this.controller.getIsWaveSelectedForAutoFill(e)) {
        this.autoFillWave(this.attackInfoVO.army.waves[e]);
      }
    }
    if (this.controller.getIsWaveSelectedForAutoFill(T.AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME)) {
      this.autoFillYardWave();
    }
    this.updateWaves();
  };
  AttackDialogAutoFill.prototype.autoFillAllWaves = function () {
    this.autoFillSelectedWaves();
  };
  AttackDialogAutoFill.prototype.autoFillYardWave = function () {
    if (this.attackInfoVO.yardWaveContainer) {
      new u.StrongestDefenceCounterWaveStrategy().fillYardContainer(this.attackInfoVO, this.options, this.attackInfoVO.yardWaveContainer, d.FightScreenHelper.getDefenderEffectVO(this.attackInfoVO));
    }
  };
  AttackDialogAutoFill.prototype.autoFillWave = function (e) {
    new u.StrongestDefenceCounterWaveStrategy().fillWave(this.attackInfoVO, this.options, e, d.FightScreenHelper.getAttackerEffectVO(e, this.selectedLord, y.AttackDialogHelper.isLegendaryFight, this.attackInfoVO), d.FightScreenHelper.getDefenderEffectVO(this.attackInfoVO));
  };
  AttackDialogAutoFill.prototype.onAutoFillClearClicked = function () {
    this.updateOptions();
    for (var e = 0; e < this.attackInfoVO.army.waves.length; e++) {
      if (this.controller.getIsWaveSelectedForAutoFill(e)) {
        if (this.controller.getIsWaveSelectedForAutoFill(O.AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT)) {
          this.clearContainer(this.attackInfoVO.army.waves[e].itemsLeftWall_tools);
          this.clearContainer(this.attackInfoVO.army.waves[e].itemsLeftWall_units);
        }
        if (this.controller.getIsWaveSelectedForAutoFill(O.AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT)) {
          this.clearContainer(this.attackInfoVO.army.waves[e].itemsRightWall_units);
          this.clearContainer(this.attackInfoVO.army.waves[e].itemsRightWall_tools);
        }
        if (this.controller.getIsWaveSelectedForAutoFill(O.AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE)) {
          this.clearContainer(this.attackInfoVO.army.waves[e].itemsMiddleWall_tools);
          this.clearContainer(this.attackInfoVO.army.waves[e].itemsMiddleWall_units);
        }
      }
    }
    if (this.controller.getIsWaveSelectedForAutoFill(T.AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME)) {
      this.clearContainer(this.attackInfoVO.yardWaveContainer);
    }
    if (this.controller.getIsWaveSelectedForAutoFill(S.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME)) {
      this.clearContainer(this.attackInfoVO.supportItemContainer);
    }
    this.updateWaves();
  };
  AttackDialogAutoFill.prototype.clearContainer = function (e) {
    I.AttackDialogWaveInfoHelper.clearContainer(e);
  };
  AttackDialogAutoFill.prototype.updateOptions = function () {
    this.options.fillLeftFlank = this.controller.getIsWaveSelectedForAutoFill(O.AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT);
    this.options.fillRightFlank = this.controller.getIsWaveSelectedForAutoFill(O.AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT);
    this.options.fillMiddleFlank = this.controller.getIsWaveSelectedForAutoFill(O.AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE);
  };
  AttackDialogAutoFill.prototype.updateWaves = function () {
    this.controller.updateAllWaveInfo.dispatch();
  };
  AttackDialogAutoFill.prototype.updateButtonStates = function () {
    var e = this.controller.getNumberOfNormalWavesSelected() > 0;
    var t = this.controller.isAnyFlankSelected();
    var i = this.controller.getIsWaveSelectedForAutoFill(S.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME);
    var n = this.controller.getIsWaveSelectedForAutoFill(v.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME);
    if (e || i || n) {
      if (t) {
        if (!i || n || e) {
          this.mcOpen.mc_autoFillAndPreset.btn_fill_waves.toolTipText = null;
          this.mcOpen.mc_autoFillAndPreset.btn_clear_waves.toolTipText = null;
          _.ButtonHelper.enableButton(this.mcOpen.mc_autoFillAndPreset.btn_fill_waves, true);
          _.ButtonHelper.enableButton(this.mcOpen.mc_autoFillAndPreset.btn_clear_waves, true);
        } else {
          this.mcOpen.mc_autoFillAndPreset.btn_fill_waves.toolTipText = "dialog_attack_autofill__cannotApply_supportTools_tt";
          this.mcOpen.mc_autoFillAndPreset.btn_clear_waves.toolTipText = null;
          _.ButtonHelper.enableButton(this.mcOpen.mc_autoFillAndPreset.btn_fill_waves, false);
          _.ButtonHelper.enableButton(this.mcOpen.mc_autoFillAndPreset.btn_clear_waves, true);
        }
      } else {
        this.mcOpen.mc_autoFillAndPreset.btn_fill_waves.toolTipText = n ? null : "dialog_attack_rework2022_selectBattleSectionRequired_tt";
        this.mcOpen.mc_autoFillAndPreset.btn_clear_waves.toolTipText = i || n ? null : "dialog_attack_rework2022_selectBattleSectionRequired_tt";
        _.ButtonHelper.enableButton(this.mcOpen.mc_autoFillAndPreset.btn_fill_waves, n);
        _.ButtonHelper.enableButton(this.mcOpen.mc_autoFillAndPreset.btn_clear_waves, i || n);
      }
    } else {
      this.mcOpen.mc_autoFillAndPreset.btn_fill_waves.toolTipText = "dialog_attack_rework2022_selectWaveRequired_tt";
      this.mcOpen.mc_autoFillAndPreset.btn_clear_waves.toolTipText = "dialog_attack_rework2022_selectWaveRequired_tt";
      _.ButtonHelper.enableButton(this.mcOpen.mc_autoFillAndPreset.btn_fill_waves, false);
      _.ButtonHelper.enableButton(this.mcOpen.mc_autoFillAndPreset.btn_clear_waves, false);
    }
  };
  Object.defineProperty(AttackDialogAutoFill.prototype, "attackInfoVO", {
    get: function () {
      return this.controller.attackVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogAutoFill.prototype, "selectedLord", {
    get: function () {
      return this.controller.selectedLord;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogAutoFill.prototype, "saveToggle", {
    get: function () {
      return this._saveToggle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogAutoFill.prototype, "controller", {
    get: function () {
      return O.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogAutoFill.__initialize_static_members = function () {};
  AttackDialogAutoFill.prototype.onLordChanged = function () {
    this.updateAdvisorTab();
    if (this._advisorComponent && this._advisorComponent.isShown && !this.controller.isAttackAdvisorAvailable()) {
      h.CastleDialogHandler.getInstance().registerDefaultDialogs(m.DarkOkDialog, new o.BasicStandardOkDialogProperties("title_advisor_warning_commander", "info_advisor_warning_commander"));
      this.showTab(AttackDialogAutoFill.TAB_AUTOFILL_PRESETS);
    }
  };
  AttackDialogAutoFill.prototype.updateAdvisorTab = function () {
    var e = this.controller.isAttackAdvisorAvailable();
    this.mcOpen.btn_advisor.visible = e;
    this.mcOpen.btn_advisor.mc_icon.gotoAndStop(e ? this.controller.attackAdvisorType : 1);
    this.mcOpen.btn_advisor.toolTipText = "title_advisor_" + l.AdvisorAttackHelper.getTextIDSuffix(this.controller.attackAdvisorType);
  };
  AttackDialogAutoFill.TAB_AUTOFILL_PRESETS = 0;
  AttackDialogAutoFill.TAB_INVENTORY = 1;
  AttackDialogAutoFill.TAB_ADVISOR_ATTACK = 2;
  return AttackDialogAutoFill;
}();
exports.AttackDialogAutoFill = L;
s.classImplementsInterfaces(L, "ICollectableRendererList");
L.__initialize_static_members();