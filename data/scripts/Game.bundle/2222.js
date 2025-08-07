Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = function (e) {
  function ModernPackageShopBuyElementInfo() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ModernPackageShopBuyElementInfo, e);
  ModernPackageShopBuyElementInfo.prototype.update = function () {
    e.prototype.update.call(this);
    if (this.parentDialog.dialogProperties.eventPackageVO.reward.itemType == l.CollectableEnum.RELIC_EQUIPMENT) {
      this.setTextByRelic();
    }
  };
  ModernPackageShopBuyElementInfo.prototype.setTextByRelic = function () {
    var e = "";
    e = u.instanceOfClass(this.relicVO, "RelicEquipmentVO") && s.CastleModel.equipData.isInventoryFull ? "generic_inventoryFull_item_tooltip" : u.instanceOfClass(this.relicVO, "RelicGemVO") && s.CastleModel.gemData.isInventoryFull ? "generic_inventoryFull_gem_tooltip" : this.parentDialog.dialogProperties.eventPackageVO.descriptionTextID;
    c.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, new a.LocalizedTextVO(e, this.parentDialog.dialogProperties.eventPackageVO.descriptionParams));
    this.disp.mc_warning.visible = false;
    this.disp.mc_info.visible = true;
    this.setVisibility(e != "");
  };
  Object.defineProperty(ModernPackageShopBuyElementInfo.prototype, "relicVO", {
    get: function () {
      if (u.instanceOfClass(this.parentDialog.dialogProperties.eventPackageVO.reward, "CollectableItemRelicVO")) {
        return this.parentDialog.dialogProperties.eventPackageVO.reward.vo;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  return ModernPackageShopBuyElementInfo;
}(require("./431.js").AModernPackageShopBuyElement);
exports.ModernPackageShopBuyElementInfo = r;
var l = require("./12.js");
var c = require("./14.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");
var u = require("./1.js");