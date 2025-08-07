Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./9.js");
var r = require("./20.js");
var l = require("./178.js");
var c = require("./1317.js");
var u = require("./8.js");
var d = require("./151.js");
var p = require("./344.js");
var h = require("./3853.js");
var g = function (e) {
  function AttackDialogPresetPicker(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(AttackDialogPresetPicker, e);
  AttackDialogPresetPicker.prototype.init = function () {
    e.prototype.init.call(this);
    u.ButtonHelper.initButtons([this.buttonEdit], this.buttonClass());
    this.buttonEdit.mouseChildren = false;
    this.buttonEdit.toolTipText = "dialog_troopPreset_rename_header";
  };
  AttackDialogPresetPicker.prototype.getNewCombobox = function () {
    return new l.ComboboxComponent(this.disp.mc_presetComboBox, "", l.ComboboxComponent.OPEN_UP, 32, 32, -1, 15, new h.ComboboxItemRendererAttackDialogPreset(), 0, true, false, 0, "", -2, false, -33, -20, 8, 10);
  };
  AttackDialogPresetPicker.prototype.buttonClass = function () {
    return r.ClickFeedbackButtonHover;
  };
  Object.defineProperty(AttackDialogPresetPicker.prototype, "buttonEdit", {
    get: function () {
      return this.disp.btn_edit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPresetPicker.prototype, "buttonFirstWave", {
    get: function () {
      return this.disp.btn_first_wave;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogPresetPicker.prototype.onClick = function (e) {
    if (u.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.buttonFirstWave:
          if (this.selectedPreset && this.selectedPreset.unlocked) {
            this.onPresetActivated.dispatch(this.selectedPreset, AttackDialogPresetPicker.PRESET_FILL_FIRST_WAVE);
            p.AttackDialogTrackingHelper.getInstance().trackDetailCounter(p.AttackDialogTrackingHelper.TRACK_PRESET_1ST_WAVE);
          }
          break;
        case this.buttonMultiWave:
          if (this.selectedPreset && this.selectedPreset.unlocked) {
            this.onPresetActivated.dispatch(this.selectedPreset, AttackDialogPresetPicker.PRESET_FILL_SELECTED_WAVES);
            p.AttackDialogTrackingHelper.getInstance().trackDetailCounter(p.AttackDialogTrackingHelper.TRACK_PRESET_SELECTED);
          }
          break;
        case this.buttonSingleWave:
          if (this.selectedPreset && this.selectedPreset.unlocked) {
            this.onPresetActivated.dispatch(this.selectedPreset, AttackDialogPresetPicker.PRESET_FILL_NEXT_WAVE);
            p.AttackDialogTrackingHelper.getInstance().trackDetailCounter(p.AttackDialogTrackingHelper.TRACK_PRESET_NEXT_WAVE);
          }
          break;
        case this.buttonSave:
          s.CastleDialogHandler.getInstance().registerDialogs(d.CastleStandardYesNoDialog, new o.BasicStandardYesNoDialogProperties(a.Localize.text("generic_alert_watchout"), a.Localize.text("dialog_troopPreset_overwritePreset_copy"), this.bindFunction(this.onSaveButton)));
      }
    }
  };
  AttackDialogPresetPicker.prototype.update = function () {};
  AttackDialogPresetPicker.PRESET_FILL_FIRST_WAVE = "first";
  AttackDialogPresetPicker.PRESET_FILL_NEXT_WAVE = "next";
  AttackDialogPresetPicker.PRESET_FILL_SELECTED_WAVES = "selected";
  return AttackDialogPresetPicker;
}(c.FightPresetPicker);
exports.AttackDialogPresetPicker = g;