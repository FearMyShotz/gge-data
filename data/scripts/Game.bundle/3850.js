Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./13.js");
var l = require("./4.js");
var c = require("./346.js");
var u = require("./9.js");
var d = require("./20.js");
var p = require("./250.js");
var h = require("./8.js");
var g = require("./613.js");
var C = require("./588.js");
var _ = require("./216.js");
var m = require("./1391.js");
var f = require("./1238.js");
var O = require("./115.js");
var E = require("./361.js");
var y = require("./3851.js");
var b = require("./839.js");
var D = require("./554.js");
var I = createjs.MouseEvent;
var T = function () {
  function AttackDialogPresets() {}
  AttackDialogPresets.prototype.init = function (e) {
    this.mc = e;
    n.GoodgameTextFieldManager.getInstance().registerTextField(this.mc.btn_multi_wave.txt_copy, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_troopPreset_applyPreset_button")));
    h.ButtonHelper.initButtons([this.mc.btn_save, this.mc.btn_first_wave, this.mc.btn_single_wave, this.mc.btn_multi_wave, this.mc.btn_edit], d.ClickFeedbackButtonHover, 1);
    h.ButtonHelper.enableButton(this.mc.btn_save, false);
    this.initPresetPicker();
    this.mc.addEventListener(I.CLICK, this.bindFunction(this.onClick));
    this.controller.onAutoFillALLSelectionChanged.add(this.bindFunction(this.onConditionChange));
    this._presetPicker.onSelectionChanged.add(this.bindFunction(this.onSelectionChanged));
    this.controller.onLordChanged.add(this.bindFunction(this.onConditionChange));
    this.controller.updateAllWaveInfo.add(this.bindFunction(this.onConditionChange));
    this.onSelectionChanged();
    this.onConditionChange();
  };
  AttackDialogPresets.prototype.onSelectionChanged = function () {
    var e = this._presetPicker.selectedPreset;
    this.mc.btn_edit.visible = !!e && e.unlocked;
    if (this.controller.isAutoFillSaveSelected && this.controller.controllerReady && this._presetPicker.isInit()) {
      this.controller.saveAttackFilterOptions(false);
    }
    this.onConditionChange();
  };
  AttackDialogPresets.prototype.onConditionChange = function () {
    if (l.CastleModel.fightPresetData.multiWaveUnlocked) {
      this.mc.btn_edit.toolTipText = "dialog_troopPreset_changePresetName_tt";
    } else {
      this.mc.btn_edit.toolTipText = "dialog_troopPreset_changePresetName_noSlotPurchased_tt";
    }
    var e = this.controller.getNumberOfNormalWavesSelected();
    var t = this.controller.getIsWaveSelectedForAutoFill(D.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME);
    var i = this.controller.getIsWaveSelectedForAutoFill(b.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME);
    this.mc.btn_first_wave.toolTipText = "dialog_troopPreset_applyPresetToFirstWave_tt";
    this.mc.btn_single_wave.toolTipText = "dialog_troopPreset_applyPresetToNextWave_tt";
    this.mc.btn_multi_wave.toolTipText = e > 1 ? "dialog_troopPreset_applyPresetToSelectedWaves_tt" : "dialog_troopPreset_applyPresetToSelectedWave_tt";
    this.mc.btn_save.toolTipText = "dialog_troopPreset_savePreset_button";
    h.ButtonHelper.enableButton(this.mc.btn_first_wave, true);
    h.ButtonHelper.enableButton(this.mc.btn_single_wave, true);
    h.ButtonHelper.enableButton(this.mc.btn_multi_wave, true);
    h.ButtonHelper.enableButton(this.mc.btn_save, true);
    if (e == 0) {
      h.ButtonHelper.enableButton(this.mc.btn_single_wave, false);
      h.ButtonHelper.enableButton(this.mc.btn_multi_wave, false);
      h.ButtonHelper.enableButton(this.mc.btn_save, false);
      if (t) {
        this.mc.btn_single_wave.toolTipText = "dialog_troopPreset_cannotApply_supportTools_tt";
        this.mc.btn_multi_wave.toolTipText = "dialog_troopPreset_cannotApply_supportTools_tt";
        this.mc.btn_save.toolTipText = "dialog_troopPreset_cannotApply_supportTools_tt";
      } else if (i) {
        this.mc.btn_single_wave.toolTipText = "dialog_troopPreset_cannotApply_finalWave_tt";
        this.mc.btn_multi_wave.toolTipText = "dialog_troopPreset_cannotApply_finalWave_tt";
        this.mc.btn_save.toolTipText = "dialog_troopPreset_cannotApply_finalWave_tt";
      } else {
        this.mc.btn_single_wave.toolTipText = "dialog_attack_rework2022_selectWaveRequired_tt";
        this.mc.btn_multi_wave.toolTipText = "dialog_attack_rework2022_selectWaveRequired_tt";
        this.mc.btn_save.toolTipText = "dialog_troopPreset_updatePreset_noWaveSelected_tt";
      }
    } else if (e > 1) {
      h.ButtonHelper.enableButton(this.mc.btn_single_wave, false);
      h.ButtonHelper.enableButton(this.mc.btn_save, false);
      this.mc.btn_single_wave.toolTipText = "dialog_troopPreset_applyPresetToNextWave_selectSingleWave_tt";
      this.mc.btn_save.toolTipText = "dialog_troopPreset_savePreset_selectSingleWave_tt";
    } else if (e == 1 && (t || i)) {
      h.ButtonHelper.enableButton(this.mc.btn_save, false);
      if (t) {
        this.mc.btn_save.toolTipText = "dialog_troopPreset_cannotApply_supportTools_tt";
      } else if (i) {
        this.mc.btn_save.toolTipText = "dialog_troopPreset_cannotApply_finalWave_tt";
      }
    }
    if (h.ButtonHelper.isButtonEnabled(this.mc.btn_save)) {
      for (var n = 0; n < this.controller.attackVO.army.waves.length; n++) {
        if (this.controller.getIsWaveSelectedForAutoFill(n)) {
          if (this.controller.attackVO.army.waves[n].getSumOfItems() == 0) {
            h.ButtonHelper.enableButton(this.mc.btn_save, false);
            this.mc.btn_save.toolTipText = "dialog_troopPreset_emptyWaveUnitsTools_tt";
          }
          break;
        }
      }
    }
  };
  AttackDialogPresets.prototype.onClick = function (e) {
    if (h.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.mc.btn_edit:
          this.onEdit();
      }
    }
  };
  AttackDialogPresets.prototype.onEdit = function () {
    var e = this._presetPicker.selectedPreset;
    u.CastleDialogHandler.getInstance().registerDefaultDialogs(m.RenameFightPresetDialog, new f.RenameFightPresetDialogProperties(e));
  };
  AttackDialogPresets.prototype.initPresetPicker = function () {
    if (!this._presetPicker) {
      this._presetPicker = new y.AttackDialogPresetPicker(this.mc);
      this._presetPicker.onPresetActivated.add(this.bindFunction(this.fillWaveFromPreset));
      this._presetPicker.onPresetSaved.add(this.bindFunction(this.handleSavePresetRequested));
      this._presetPicker.onPresetUnlockRequested.add(this.bindFunction(this.handleUnlockPresetRequested));
      this._presetPicker.onPresetOptions.add(this.bindFunction(this.handlePresetOptions));
      this.controller.setPresetPicker(this._presetPicker);
    }
    this._presetPicker.selectIndex(0);
  };
  AttackDialogPresets.prototype.handlePresetOptions = function (e) {
    u.CastleDialogHandler.getInstance().registerDefaultDialogs(m.RenameFightPresetDialog, new f.RenameFightPresetDialogProperties(e));
  };
  AttackDialogPresets.prototype.handleSavePresetRequested = function (e) {
    if (e.unlocked) {
      this.fillPresetFromWave(e);
      l.CastleModel.fightPresetData.savePresetArmy(e);
    }
  };
  AttackDialogPresets.prototype.handleUnlockPresetRequested = function (e) {
    var t = this;
    u.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleConfirmCostsDialog, new C.CastleConfirmCostsDialogProperties(a.Localize.text("dialog_troopPreset_unlock_header"), a.Localize.text("dialog_troopPreset_unlock_desc"), e.unlockPrice, null, function () {
      t.unlockPreset(e);
    }, function () {
      t._presetPicker.selectPreviousUnlockedItem();
    }, function () {
      t._presetPicker.selectPreviousUnlockedItem();
    }));
  };
  AttackDialogPresets.prototype.unlockPreset = function (e) {
    l.CastleModel.fightPresetData.unlockPreset(e);
  };
  AttackDialogPresets.prototype.fillPresetFromWave = function (e) {
    e.setContentFromWave(this.controller.attackVO.army.waves[this.getFirstSelectedWaveIndex()], this.attackInfoVO.toolsSupportWodIds);
  };
  AttackDialogPresets.prototype.fillWaveFromPreset = function (e, t) {
    var i = "";
    var o = "";
    if (t == y.AttackDialogPresetPicker.PRESET_FILL_SELECTED_WAVES) {
      for (var a = 0; a < this.attackInfoVO.army.waves.length; a++) {
        if (this.controller.getIsWaveSelectedForAutoFill(a)) {
          o = this.applyPresetToWave(this.attackInfoVO.army.waves[a], e);
          i = i != "" ? i : o;
        }
      }
    } else if (t == y.AttackDialogPresetPicker.PRESET_FILL_NEXT_WAVE) {
      for (a = 0; a < this.attackInfoVO.army.waves.length; a++) {
        if (this.controller.getIsWaveSelectedForAutoFill(a)) {
          this.controller.changeSelectionForAutoFill(a, false);
          var s = a + 1 < this.attackInfoVO.army.waves.length ? a + 1 : 0;
          this.controller.changeSelectionForAutoFill(s, true);
          o = this.applyPresetToWave(this.attackInfoVO.army.waves[s], e);
          i = i != "" ? i : o;
          break;
        }
      }
    } else {
      o = this.applyPresetToWave(this.attackInfoVO.army.waves[0], e);
      i = i != "" ? i : o;
    }
    if (i != "") {
      u.CastleDialogHandler.getInstance().registerDefaultDialogs(_.DarkOkDialog, new n.BasicStandardOkDialogProperties("attention", i));
    }
    var r = [];
    for (var l = 0; l < e.getSupportTools().length; l++) {
      var c = e.getSupportTools()[l];
      if (c == -1 || this.attackInfoVO.unitInventory.getUnit(c)) {
        r.push(c);
        if (c != -1 && this.attackInfoVO.toolsSupportWodIds.indexOf(c) < 0) {
          this.attackInfoVO.unitInventory.getUnit(c).inventoryAmount -= 1;
        }
      } else {
        r.push(-1);
      }
    }
    this.updateWaves();
  };
  AttackDialogPresets.prototype.applyPresetToWave = function (e, t) {
    E.AttackDialogWaveInfoHelper.clearContainer(e.itemsLeftWall_tools);
    E.AttackDialogWaveInfoHelper.clearContainer(e.itemsLeftWall_units);
    E.AttackDialogWaveInfoHelper.clearContainer(e.itemsMiddleWall_tools);
    E.AttackDialogWaveInfoHelper.clearContainer(e.itemsMiddleWall_units);
    E.AttackDialogWaveInfoHelper.clearContainer(e.itemsRightWall_tools);
    E.AttackDialogWaveInfoHelper.clearContainer(e.itemsRightWall_units);
    var i = 0;
    var n = false;
    var a = this.attackInfoVO.unitInventory;
    var r = "";
    for (var u = 0; u < e.flanks.length; u++) {
      for (var d = e.flanks[u], h = 0, g = 0; g < d.items.length; g++) {
        var C = d.items[g - h];
        if (C.isUnlocked()) {
          if (C.unitVO) {
            a.addUnit(C.unitVO.wodId, C.unitVO.inventoryAmount);
            C.unitVO = null;
          }
          var _ = t.getUnitWodId(u, g);
          if (_ != -1) {
            var m = t.getUnitCount(u, g);
            var f = s.int(Math.min(d.freeItems, m));
            var O = s.int(o.instanceOfClass(this.attackInfoVO, "CastleTreasureHuntFightscreenVO") ? this.attackInfoVO.treasureMapVO.mapID : this.attackInfoVO.targetArea.kingdomID);
            var y = l.CastleModel.wodData.getUnitVOByWodId(_);
            if (n = !o.instanceOfClass(y, "ToolUnitVO") || p.AttackHelper.canUseToolForAttackOnTarget(this.attackInfoVO.targetArea, y, O)) {
              C.unitVO = a.deductUnit(_, f);
              i = C.getAmount();
              C.outline = i == m ? s.int(c.CastleFightItemVO.OUTLINE_NONE) : i == 0 ? s.int(c.CastleFightItemVO.OUTLINE_RED) : s.int(c.CastleFightItemVO.OUTLINE_ORANGE);
            } else {
              C.outline = s.int(c.CastleFightItemVO.OUTLINE_RED);
              i = 0;
            }
          }
          if (i == 0) {
            h++;
            r = this.getInvalidPresetWarningText(y, O, n);
          }
        }
      }
    }
    return r;
  };
  AttackDialogPresets.prototype.getInvalidPresetWarningText = function (e, t, i) {
    var n = "";
    if (e) {
      if (!i) {
        n = "dialog_attackPresets_feedback_normalAttack_specialUnits";
      }
    }
    return n;
  };
  AttackDialogPresets.prototype.destroy = function () {
    this.mc.removeEventListener(I.CLICK, this.bindFunction(this.onClick));
    this.controller.onAutoFillALLSelectionChanged.remove(this.bindFunction(this.onConditionChange));
    this._presetPicker.onSelectionChanged.remove(this.bindFunction(this.onSelectionChanged));
    this.controller.onLordChanged.remove(this.bindFunction(this.onConditionChange));
    this.controller.updateAllWaveInfo.add(this.bindFunction(this.onConditionChange));
  };
  AttackDialogPresets.prototype.updateWaves = function () {
    this.controller.updateAllWaveInfo.dispatch();
  };
  Object.defineProperty(AttackDialogPresets.prototype, "attackInfoVO", {
    get: function () {
      return this.controller.attackVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPresets.prototype, "selectedLord", {
    get: function () {
      return this.controller.selectedLord;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPresets.prototype, "controller", {
    get: function () {
      return O.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogPresets.prototype.getFirstSelectedWaveIndex = function () {
    for (var e = 0; e < this.controller.attackVO.army.waves.length; e++) {
      if (this.controller.getIsWaveSelectedForAutoFill(e)) {
        return e;
      }
    }
    return -1;
  };
  AttackDialogPresets.__initialize_static_members = function () {};
  return AttackDialogPresets;
}();
exports.AttackDialogPresets = T;
o.classImplementsInterfaces(T, "ICollectableRendererList");
T.__initialize_static_members();