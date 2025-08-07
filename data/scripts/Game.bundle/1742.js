Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleKongregateNotificationDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleKongregateNotificationDialog.NAME) || this;
  }
  n.__extends(CastleKongregateNotificationDialog, e);
  CastleKongregateNotificationDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_rateEmpire_sucess_copy"));
  };
  CastleKongregateNotificationDialog.prototype.onClick = function (e) {
    if (e.target == this.dialogDisp.btn_ok) {
      this.hide();
    }
  };
  CastleKongregateNotificationDialog.prototype.updatePosition = function () {
    e.prototype.updatePosition.call(this);
    var t = this.dialogDisp.getBounds(null);
    this.dialogDisp.y = t.top + 250;
  };
  CastleKongregateNotificationDialog.__initialize_static_members = function () {
    CastleKongregateNotificationDialog.NAME = "CastleKongregateNotification";
  };
  return CastleKongregateNotificationDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleKongregateNotificationDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();