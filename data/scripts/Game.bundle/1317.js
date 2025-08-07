Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./57.js");
var c = require("./4.js");
var u = require("./8.js");
var d = require("./929.js");
var p = require("./2341.js");
var h = require("./171.js");
var g = function (e) {
  function FightPresetPicker(t) {
    var i = this;
    i.onPresetActivated = new l.Signal();
    i.onPresetSaved = new l.Signal();
    i.onPresetUnlockRequested = new l.Signal();
    i.onPresetOptions = new l.Signal();
    i.onSelectionChanged = new l.Signal();
    i.onDataChangeHandled = new l.Signal();
    i._previousUnlockedIndex = -1;
    i.gotData = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this)._model = c.CastleModel.fightPresetData;
    i._model.onChange.add(i.bindFunction(i.handleDataChange));
    if (t.stage) {
      i.onAddedToStage(null);
    }
    i._model.loadDataFromServer();
    return i;
  }
  n.__extends(FightPresetPicker, e);
  FightPresetPicker.prototype.init = function () {
    e.prototype.init.call(this);
    u.ButtonHelper.initButtons([this.buttonSave, this.buttonSingleWave, this.buttonMultiWave], this.buttonClass());
    this.buttonSave.mouseChildren = false;
    this.buttonMultiWave.mouseChildren = false;
    this.buttonSave.toolTipText = "dialog_troopPreset_updatePreset_tt";
    this.buttonMultiWave.toolTipText = "dialog_troopPreset_applyPresetToAllWaves_tt";
    if (this.buttonSingleWave) {
      this.buttonSingleWave.mouseChildren = false;
      this.buttonSingleWave.toolTipText = "dialog_troopPreset_applyPresetToWave_tt";
    }
    this.presetCombobox = this.getNewCombobox();
    this.presetCombobox.setTextfieldAutoFit(true);
    this.presetCombobox.disp.tooltipText = "dialog_troopPreset_selectPreset_tt";
    this.presetCombobox.disp.addEventListener(s.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.handleComboboxChange));
    this.presetCombobox.disp.addEventListener(d.CastlePresetComboboxItemRendererEvent.OPTIONS, this.bindFunction(this.handlePresetOptionsButton));
  };
  FightPresetPicker.prototype.selectIndex = function (e) {
    var t = this.presetCombobox.itemData[e];
    if (t && t.data.unlocked) {
      this.presetCombobox.selectItemIndex(e);
    }
  };
  FightPresetPicker.prototype.isInit = function () {
    return !!this.presetCombobox.itemData && this.presetCombobox.itemData.length > 0 && this.gotData;
  };
  FightPresetPicker.prototype.getNewCombobox = function () {
    return new m.ComboboxComponent(this.disp.mc_presetComboBox, "", m.ComboboxComponent.OPEN_UP, 17, 15, -1, FightPresetPicker.MAX_SHOWABLE_ITEMS, new p.ComboboxItemRendererPreset(), 0, true, false, 0, "", 0);
  };
  FightPresetPicker.prototype.buttonClass = function () {
    return f.ClickFeedbackButton;
  };
  FightPresetPicker.prototype.handlePresetOptionsButton = function (e) {
    this.onPresetOptions.dispatch(e.presetVO);
    this.presetCombobox.selectItemIndex(e.presetVO.index);
  };
  Object.defineProperty(FightPresetPicker.prototype, "buttonSave", {
    get: function () {
      return this.disp.btn_save;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightPresetPicker.prototype, "buttonSingleWave", {
    get: function () {
      return this.disp.btn_single_wave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightPresetPicker.prototype, "buttonMultiWave", {
    get: function () {
      return this.disp.btn_multi_wave;
    },
    enumerable: true,
    configurable: true
  });
  FightPresetPicker.prototype.onClick = function (e) {
    if (u.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.buttonSingleWave:
          if (this.selectedPreset && this.selectedPreset.unlocked) {
            this.onPresetActivated.dispatch(this.selectedPreset, false);
          }
          break;
        case this.buttonMultiWave:
          if (this.selectedPreset && this.selectedPreset.unlocked) {
            this.onPresetActivated.dispatch(this.selectedPreset, true);
          }
          break;
        case this.buttonSave:
          C.CastleDialogHandler.getInstance().registerDialogs(_.CastleStandardYesNoDialog, new a.BasicStandardYesNoDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("dialog_troopPreset_overwritePreset_copy"), this.bindFunction(this.onSaveButton)));
      }
    }
  };
  FightPresetPicker.prototype.onSaveButton = function (e = null) {
    if (this.selectedPreset && this.selectedPreset.unlocked) {
      this.onPresetSaved.dispatch(this.selectedPreset);
    }
  };
  Object.defineProperty(FightPresetPicker.prototype, "selectedPreset", {
    get: function () {
      return this.presetCombobox.selectedData;
    },
    enumerable: true,
    configurable: true
  });
  FightPresetPicker.prototype.handleDataChange = function () {
    var e;
    var t;
    var i = 0;
    i = this.presetCombobox.selectedId == -1 && this._model.presets.length > 0 ? 0 : this.presetCombobox.selectedId;
    this.presetCombobox.clearItems();
    for (var n = 0; n < this._model.presets.length; n++) {
      t = this._model.presets[n];
      (e = new h.ComboboxItemRendererVO()).itemLabel = t.label;
      e.data = t;
      this.presetCombobox.addItem(e);
    }
    if (i < 0 || !this.presetCombobox.itemData[i].data.unlocked) {
      i = 0;
    }
    this.presetCombobox.selectItemIndex(i);
    this.update();
    this.onDataChangeHandled.dispatch();
    this.gotData = true;
  };
  FightPresetPicker.prototype.buttonUpdate = function () {
    this.update();
  };
  FightPresetPicker.prototype.update = function () {
    e.prototype.update.call(this);
    var t = !!this.selectedPreset && this.selectedPreset.unlocked;
    var i = t && this.selectedPreset.hasContent;
    var n = i && this._model.multiWaveUnlocked;
    u.ButtonHelper.enableButton(this.buttonSave, t);
    u.ButtonHelper.enableButton(this.buttonSingleWave, i);
    u.ButtonHelper.enableButton(this.buttonMultiWave, n);
    if (n) {
      this.buttonMultiWave.toolTipText = "dialog_troopPreset_applyPresetToAllWaves_tt";
    } else if (this.selectedPreset.hasContent) {
      this.buttonMultiWave.toolTipText = "dialog_troopPreset_applyPresetNameChanges_locked_tt";
    } else {
      this.buttonMultiWave.toolTipText = "dialog_troopPreset_applyPresetToAllWaves_noPreset_tt";
    }
  };
  FightPresetPicker.prototype.handleComboboxChange = function (e) {
    this.update();
    if (!this.selectedPreset.locked) {
      this._previousUnlockedIndex = this.presetCombobox.selectedId;
    }
    if (this.selectedPreset && this.selectedPreset.locked) {
      if (this.selectedPreset.index == this._model.unlockedPresetsCount) {
        this.onPresetUnlockRequested.dispatch(this.selectedPreset);
      } else {
        this.presetCombobox.selectItemIndex(this._model.unlockedPresetsCount);
      }
    }
    this.onSelectionChanged.dispatch();
  };
  FightPresetPicker.prototype.selectPreviousUnlockedItem = function () {
    this.presetCombobox.selectItemIndex(this._previousUnlockedIndex);
  };
  FightPresetPicker.prototype.onRemovedFromStage = function (e) {};
  FightPresetPicker.MAX_SHOWABLE_ITEMS = 20;
  return FightPresetPicker;
}(o.FlashUIComponent);
exports.FightPresetPicker = g;
var C = require("./9.js");
var _ = require("./151.js");
var m = require("./178.js");
var f = require("./36.js");