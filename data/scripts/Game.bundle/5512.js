Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./137.js");
var c = require("./13.js");
var u = require("./15.js");
var d = require("./8.js");
var p = require("./11.js");
var h = require("./36.js");
var g = function (e) {
  function CastleTempServerMultiplierDialog() {
    return e.call(this, CastleTempServerMultiplierDialog.NAME) || this;
  }
  n.__extends(CastleTempServerMultiplierDialog, e);
  CastleTempServerMultiplierDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    d.ButtonHelper.initButtons([this.dialogDisp.btn_enter, this.dialogDisp.btn_close], h.ClickFeedbackButton);
  };
  CastleTempServerMultiplierDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("temp_server_name")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_value, new r.LocalizedTextVO("value_multiplied_range", [this.dialogProperties.minMultiplier, this.dialogProperties.maxMultiplier]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_multiplierInfo_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_enter.txt_value, new s.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("temp_server_name")));
    this.dialogDisp.btn_enter.visible = !this.env.isOnTemporaryServer;
  };
  CastleTempServerMultiplierDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_enter:
        this.gotoEvent();
    }
  };
  CastleTempServerMultiplierDialog.prototype.gotoEvent = function () {
    if (l.TempServerHelper.tmpServerEvent) {
      if (l.TempServerHelper.tmpServerEvent.castleBought) {
        o.CommandController.instance.executeCommand(u.CastleBasicController.CONNECT_TO_TEMPORARY_SERVER);
      } else {
        l.TempServerHelper.tmpServerEvent.openDialog();
      }
    } else {
      this.hide();
    }
  };
  Object.defineProperty(CastleTempServerMultiplierDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTempServerMultiplierDialog.NAME = "CastleTempServerMultiplier";
  return CastleTempServerMultiplierDialog;
}(p.CastleExternalDialog);
exports.CastleTempServerMultiplierDialog = g;
a.classImplementsInterfaces(g, "ICollectableRendererList");