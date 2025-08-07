Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./4.js");
var r = require("./513.js");
var l = function (e) {
  function RenameFightPresetDialog() {
    var t = this;
    t.PRESET_MAX_CHARS = 15;
    CONSTRUCTOR_HACK;
    return t = e.call(this, RenameFightPresetDialog.NAME) || this;
  }
  n.__extends(RenameFightPresetDialog, e);
  RenameFightPresetDialog.prototype.showLoaded = function (t = null) {
    this.initStaticText(this.dialogDisp.txt_title, "dialog_troopPreset_rename_header").verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.initStaticText(this.dialogDisp.txt_copy, "dialog_troopPreset_rename_desc");
    this.initStaticText(this.dialogDisp.txt_insertTitle, "dialog_troopPreset_rename_text1").autoFitToBounds = true;
    this.dialogDisp.btn_ok.toolTipText = "dialog_troopPreset_applyPresetNameChanges_tt";
    this.dialogDisp.btn_back.toolTipText = "dialog_troopPreset_cancel_tt";
    this.dialogDisp.btn_close.toolTipText = "dialog_troopPreset_closePresetOptions_tt";
    e.prototype.showLoaded.call(this, t);
  };
  Object.defineProperty(RenameFightPresetDialog.prototype, "textMaxChars", {
    get: function () {
      return this.PRESET_MAX_CHARS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicRenameDialog.prototype, "textMaxChars").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RenameFightPresetDialog.prototype, "defaultName", {
    get: function () {
      return this.preset.name;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicRenameDialog.prototype, "defaultName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RenameFightPresetDialog.prototype.applyProperties = function () {
    e.prototype.applyProperties.call(this);
  };
  RenameFightPresetDialog.prototype.validate = function () {
    if (e.prototype.validate.call(this)) {
      if (o.TextValide.isSmartFoxValide(this.itxt_insert.text)) {
        return true;
      }
      this.alert("generic_alert_watchout", "generic_register_namenotvalid");
    }
    return false;
  };
  RenameFightPresetDialog.prototype.sendCommand = function () {
    this.dialogProperties.presetVO.name = this.itxt_insert.text;
    s.CastleModel.fightPresetData.savePresetName(this.dialogProperties.presetVO);
    this.hide();
  };
  Object.defineProperty(RenameFightPresetDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RenameFightPresetDialog.prototype, "preset", {
    get: function () {
      return this.dialogProperties.presetVO;
    },
    enumerable: true,
    configurable: true
  });
  RenameFightPresetDialog.__initialize_static_members = function () {
    RenameFightPresetDialog.NAME = "RenameFightPreset";
  };
  return RenameFightPresetDialog;
}(r.BasicRenameDialog);
exports.RenameFightPresetDialog = l;
a.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();