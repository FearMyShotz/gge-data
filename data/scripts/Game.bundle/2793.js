Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./2794.js");
var r = require("./4.js");
var l = function (e) {
  function PrivateResourceVillageDestroyDialog() {
    return e.call(this) || this;
  }
  n.__extends(PrivateResourceVillageDestroyDialog, e);
  PrivateResourceVillageDestroyDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new a.LocalizedTextVO("dialog_privateResourceVillages_removePopup_desc"));
    this.dialogDisp.mc_exclamationMark.visible = true;
  };
  PrivateResourceVillageDestroyDialog.prototype.onConfirm = function () {
    r.CastleModel.smartfoxClient.sendCommandVO(new s.C2SRemovePrivateResourceVillageVO(this.dialogProperties.uniqueVillageID));
  };
  return PrivateResourceVillageDestroyDialog;
}(require("./1011.js").APrivateResourceVillageActionDialog);
exports.PrivateResourceVillageDestroyDialog = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");