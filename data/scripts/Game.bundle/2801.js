Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./2802.js");
var l = require("./4.js");
var c = function (e) {
  function PrivateResourceVillageBuyDialog() {
    return e.call(this) || this;
  }
  n.__extends(PrivateResourceVillageBuyDialog, e);
  PrivateResourceVillageBuyDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO("dialog_privateResourceVillages_buyPopup_desc", [this.dialogProperties.villageInfoVO.villageLevel, a.Localize.text(this.dialogProperties.villageInfoVO.typeString)]));
    u.CastlePrivateResourceVillageRenderHelper.fillResourceBonus(this.dialogDisp.mc_buy, this.dialogProperties.villageInfoVO.type, this.dialogProperties.villageInfoVO.bonus.strength);
    this._cost = this.dialogProperties.villageInfoVO.tokenCostTotal;
    this.fillCosts(this._cost);
    this.dialogDisp.mc_buy.visible = true;
    this.dialogDisp.mc_costs.visible = true;
  };
  PrivateResourceVillageBuyDialog.prototype.onConfirm = function () {
    l.CastleModel.smartfoxClient.sendCommandVO(new r.C2SBuyPrivateResourceVillageVO(this.dialogProperties.villageInfoVO.villageID));
  };
  return PrivateResourceVillageBuyDialog;
}(require("./1011.js").APrivateResourceVillageActionDialog);
exports.PrivateResourceVillageBuyDialog = c;
var u = require("./535.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");