Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleNotifyDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleNotifyDialog.NAME) || this;
  }
  n.__extends(CastleNotifyDialog, e);
  CastleNotifyDialog.prototype.initLoaded = function (t = null) {
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    e.prototype.initLoaded.call(this, t);
  };
  CastleNotifyDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.TextVO(this.dialogProperties.copy));
  };
  CastleNotifyDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.dialogDisp.btn_ok) {
      this.hide();
    }
  };
  Object.defineProperty(CastleNotifyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleNotifyDialog.__initialize_static_members = function () {
    CastleNotifyDialog.NAME = "CastleNotifyEx";
  };
  return CastleNotifyDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleNotifyDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();