Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./5032.js");
var d = require("./4.js");
var p = function (e) {
  function CastleRelocateRuinDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleRelocateRuinDialog.NAME) || this;
  }
  n.__extends(CastleRelocateRuinDialog, e);
  CastleRelocateRuinDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.itxt_position ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_position, new l.LocalizedTextVO(o.GenericTextIds.VALUE_COORDS, [this.dialogProperties.posX, this.dialogProperties.posY]));
    this.itxt_position.textContentVO.textId = o.GenericTextIds.VALUE_COORDS;
    this.itxt_position.textContentVO.textReplacements = [this.dialogProperties.posX, this.dialogProperties.posY];
    this.itxt_time ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new c.TextVO(a.TimeStringHelper.getCommaTimeStringFromSeconds(this.dialogProperties.remainingTime, r.Localize.text)));
    if (this.dialogProperties.remainingTime > 0) {
      this.itxt_time.textContentVO = new c.TextVO(a.TimeStringHelper.getCommaTimeStringFromSeconds(this.dialogProperties.remainingTime, r.Localize.text));
    } else {
      this.itxt_time.textContentVO = new l.LocalizedTextVO("dialog_relocateRuin_waiting");
    }
  };
  CastleRelocateRuinDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("panel_relocate_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new l.LocalizedTextVO("dialog_relocateRuin_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_free, new l.LocalizedTextVO("dialog_relocateRuin_freeIn"));
    this.dialogDisp.btn_reminder.toolTipText = "dialog_relocateRuin_reminder";
    this.dialogDisp.btn_reminder.visible = this.dialogProperties.showButton;
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new c.TextVO(a.TimeStringHelper.getCommaTimeStringFromSeconds(this.dialogProperties.remainingTime, r.Localize.text)));
    this.itxt_position = this.textFieldManager.registerTextField(this.dialogDisp.txt_position, new l.LocalizedTextVO(o.GenericTextIds.VALUE_COORDS, [this.dialogProperties.posX, this.dialogProperties.posY]));
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_reminder, this.dialogDisp.btn_close]);
    this.dialogDisp.btn_reminder.visible = this.dialogProperties.showButton;
  };
  CastleRelocateRuinDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_reminder:
        d.CastleModel.smartfoxClient.sendCommandVO(new u.C2SRememberRuinVO(this.dialogProperties.posX, this.dialogProperties.posY));
        this.hide();
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleRelocateRuinDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRelocateRuinDialog.__initialize_static_members = function () {
    CastleRelocateRuinDialog.NAME = "CastleRelocateRuin";
  };
  return CastleRelocateRuinDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleRelocateRuinDialog = p;
s.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();