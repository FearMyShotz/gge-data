Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function ModernPackageShopBuyElementCommonInfoBundle() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ModernPackageShopBuyElementCommonInfoBundle, e);
  ModernPackageShopBuyElementCommonInfoBundle.prototype.updateText = function () {
    var e;
    var t = this.parentDialog.dialogProperties.eventPackageVO;
    r.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new a.LocalizedTextVO(t.nameTextID, t.nameParams)).autoFitToBounds = true;
    r.CastleComponent.textFieldManager.registerTextField(this.disp.txt_desc, new a.LocalizedTextVO(t.descriptionTextID, t.descriptionParams)).autoFitToBounds = true;
    e = t.isNotRebuyable ? t.remainingStock > 1 ? "dialog_bundlePackage_purchase_stockCounter_multi" : t.remainingStock == 1 ? "dialog_bundlePackage_purchase_stockCounter_single" : "dialog_shop_soldOut" : " ";
    r.CastleComponent.textFieldManager.registerTextField(this.disp.txt_left, new a.LocalizedTextVO(e, [t.remainingStock])).autoFitToBounds = true;
  };
  return ModernPackageShopBuyElementCommonInfoBundle;
}(require("./905.js").ModernPackageShopBuyElementCommonInfo);
exports.ModernPackageShopBuyElementCommonInfoBundle = s;
var r = require("./14.js");
o.classImplementsInterfaces(s, "ICollectableRendererList");