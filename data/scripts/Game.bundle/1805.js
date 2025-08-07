Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./1112.js");
var c = require("./15.js");
var u = require("./20.js");
var d = require("./8.js");
var p = function (e) {
  function CastleNoConnectionDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, new (a.getDefinitionByName("CastleNoConnection2"))()) || this;
  }
  n.__extends(CastleNoConnectionDialog, e);
  CastleNoConnectionDialog.prototype.applyProperties = function () {
    this.initTexts();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("generic_alert_connection_failed_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("generic_alert_connection_failed_copy"));
    this.dialogDisp.btn_reconnect.visible = false;
    d.ButtonHelper.initButton(this.dialogDisp.mc_dc.btn_dc, 1, u.ClickFeedbackButtonHover);
  };
  CastleNoConnectionDialog.prototype.show = function () {
    e.prototype.show.call(this);
    this.dialogDisp.mc_maintainance_freeze.x = 327;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_maintainance_freeze.txt_copy, new r.LocalizedTextVO("maintenance_freeze_desc"));
  };
  CastleNoConnectionDialog.prototype.initTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_dc.txt_copy1, new r.LocalizedTextVO("maintenance_discord_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_dc.txt_copy2, new r.LocalizedTextVO("maintenance_discord_desc2"));
    this.dialogDisp.mc_dc.btn_dc.toolTipText = "panel_option_discord";
  };
  CastleNoConnectionDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.dialogDisp.mc_dc.btn_dc) {
      o.CommandController.instance.executeCommand(c.CastleBasicController.OPEN_DISCORD, [l.SocialButtonTrackingEvent.BUTTON_NAME_DISCORD_MAINTENANCE]);
    }
  };
  Object.defineProperty(CastleNoConnectionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNoConnectionDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleNoConnectionDialog.__initialize_static_members = function () {
    CastleNoConnectionDialog.NAME = "CastleNoConnectionDialog";
  };
  return CastleNoConnectionDialog;
}(require("./230.js").CastleDialog);
exports.CastleNoConnectionDialog = p;
s.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();