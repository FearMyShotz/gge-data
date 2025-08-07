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
var u = require("./52.js");
var d = function (e) {
  function FusionForgeHubDialogShopSoft(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(FusionForgeHubDialogShopSoft, e);
  FusionForgeHubDialogShopSoft.prototype.init = function () {
    e.prototype.init.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new s.LocalizedTextVO("dialog_fusionHub_FCShop_desc"));
  };
  FusionForgeHubDialogShopSoft.prototype.getEventPackages = function () {
    return c.CastleModel.fusionForgeData.xml.getFusionShopPackages(this.getBuyTypeId());
  };
  FusionForgeHubDialogShopSoft.prototype.getCurrencyType = function () {
    return new h.CollectableTypeVO(p.CollectableEnum.GENERIC_CURRENCY, u.ClientConstCurrency.ID_FUSION_CURRENCY);
  };
  FusionForgeHubDialogShopSoft.prototype.getBuyType = function () {
    return r.int(a.PackageConst.BUY_TYPE_FUSION);
  };
  FusionForgeHubDialogShopSoft.prototype.getBuyTypeId = function () {
    return r.int(l.ClientConstPackages.FUSION_SHOP_ID_SOFT);
  };
  return FusionForgeHubDialogShopSoft;
}(require("./764.js").AModernPackageShopDialogSublayer);
exports.FusionForgeHubDialogShopSoft = d;
var p = require("./12.js");
var h = require("./74.js");
o.classImplementsInterfaces(d, "ICollectableRendererList", "ISublayer");