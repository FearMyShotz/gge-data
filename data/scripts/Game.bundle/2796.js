Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./2797.js");
var l = require("./37.js");
var c = require("./4.js");
var u = function (e) {
  function PrivateResourceVillageUpgradeDialog() {
    return e.call(this) || this;
  }
  n.__extends(PrivateResourceVillageUpgradeDialog, e);
  PrivateResourceVillageUpgradeDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO("dialog_privateResourceVillages_upgradePopup_desc"));
    var i = c.CastleModel.privateResourceVillageData.getPrivateVillageInfo(this.dialogProperties.villageInfoVO.kingdomID, this.dialogProperties.villageInfoVO.type, this.dialogProperties.villageInfoVO.villageLevel + 1);
    d.CastlePrivateResourceVillageRenderHelper.fillResourceBonus(this.dialogDisp.mc_upgrade.mc_oldBonus, this.dialogProperties.villageInfoVO.type, this.dialogProperties.villageInfoVO.bonus.strength);
    d.CastlePrivateResourceVillageRenderHelper.fillResourceBonus(this.dialogDisp.mc_upgrade.mc_newBonus, i.type, i.bonus.strength);
    this.dialogDisp.mc_upgrade.mc_oldBonus.toolTipText = {
      t: "dialog_privateResourceVillages_upgrade_currentBonus_tt",
      p: [a.Localize.text(this.dialogProperties.villageInfoVO.typeString)]
    };
    this.dialogDisp.mc_upgrade.mc_newBonus.toolTipText = {
      t: "dialog_privateResourceVillages_upgrade_upgradeBonus_tt",
      p: [a.Localize.text(i.typeString)]
    };
    this._cost = i.tokenCost;
    this.fillCosts(this._cost);
    this.dialogDisp.mc_upgrade.visible = true;
    this.dialogDisp.mc_costs.visible = true;
  };
  PrivateResourceVillageUpgradeDialog.prototype.onConfirm = function () {
    this.controller.dispatchEvent(new l.CastleServerMessageArrivedEvent(l.CastleServerMessageArrivedEvent.UPV_SENT));
    c.CastleModel.smartfoxClient.sendCommandVO(new r.C2SUpgradePrivateResourceVillageVO(this.dialogProperties.villageInfoVO.villageID, this.dialogProperties.uniqueVillageID));
  };
  return PrivateResourceVillageUpgradeDialog;
}(require("./1011.js").APrivateResourceVillageActionDialog);
exports.PrivateResourceVillageUpgradeDialog = u;
var d = require("./535.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");