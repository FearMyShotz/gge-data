Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./123.js");
var c = require("./4.js");
var u = function (e) {
  function FusionForgeHubDialogShopHard(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(FusionForgeHubDialogShopHard, e);
  FusionForgeHubDialogShopHard.prototype.init = function () {
    e.prototype.init.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new s.LocalizedTextVO("dialog_fusionHub_HCShop_desc"));
  };
  FusionForgeHubDialogShopHard.prototype.getEventPackages = function () {
    return c.CastleModel.fusionForgeData.xml.getFusionShopPackages(this.getBuyTypeId());
  };
  FusionForgeHubDialogShopHard.prototype.getCurrencyType = function () {
    return new p.CollectableTypeVO(d.CollectableEnum.C2);
  };
  FusionForgeHubDialogShopHard.prototype.getBuyType = function () {
    return r.int(a.PackageConst.BUY_TYPE_FUSION);
  };
  FusionForgeHubDialogShopHard.prototype.getBuyTypeId = function () {
    return r.int(l.ClientConstPackages.FUSION_SHOP_ID_HARD);
  };
  return FusionForgeHubDialogShopHard;
}(require("./766.js").AModernPackageShopDialogSublayer);
exports.FusionForgeHubDialogShopHard = u;
var d = require("./12.js");
var p = require("./74.js");
o.classImplementsInterfaces(u, "ICollectableRendererList", "ISublayer");