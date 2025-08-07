Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleAllianceBuyTemporaryBoostExternalDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAllianceBuyTemporaryBoostExternalDialog.NAME) || this;
  }
  n.__extends(CastleAllianceBuyTemporaryBoostExternalDialog, e);
  CastleAllianceBuyTemporaryBoostExternalDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_boostAmount, new a.TextVO(this.dialogProperties_0.boostAmount));
    this.textFieldManager.registerTextField(this.dialogDisp.info_time.txt_value, new a.TextVO(this.dialogProperties_0.boostDuration));
    this.dialogDisp.info_time.toolTipText = "runTime";
  };
  Object.defineProperty(CastleAllianceBuyTemporaryBoostExternalDialog.prototype, "dialogProperties_0", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBuyTemporaryBoostExternalDialog.__initialize_static_members = function () {
    CastleAllianceBuyTemporaryBoostExternalDialog.NAME = "CastleAllianceBuyTemporaryBoost";
  };
  return CastleAllianceBuyTemporaryBoostExternalDialog;
}(require("./3392.js").ACastleAllianceBuyBoostExternalDialog);
exports.CastleAllianceBuyTemporaryBoostExternalDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();