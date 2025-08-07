Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./19.js");
var l = require("./13.js");
var c = function (e) {
  function ModernPackageShopBuyElementCommonInfoRelic() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ModernPackageShopBuyElementCommonInfoRelic, e);
  ModernPackageShopBuyElementCommonInfoRelic.prototype.updateText = function () {
    u.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new a.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId(this.parentDialog.dialogProperties.eventPackageVO.nameTextID, this.parentDialog.dialogProperties.eventPackageVO.nameParams)));
    u.CastleComponent.textFieldManager.registerTextField(this.disp.txt_desc, new a.TextVO(this.getDescriptionText()));
    u.CastleComponent.textFieldManager.registerTextField(this.disp.txt_sell, new a.TextVO(this.getSellPriceText()));
  };
  ModernPackageShopBuyElementCommonInfoRelic.prototype.getSellPriceText = function () {
    if (d.instanceOfClass(this.relicVO, "RelicEquipmentVO")) {
      return this.relicVO.relicInfoVO.getSellPriceText();
    } else if (d.instanceOfClass(this.relicVO, "RelicGemVO")) {
      return this.relicVO.relicInfoVO.getSellPriceText();
    } else {
      return "";
    }
  };
  Object.defineProperty(ModernPackageShopBuyElementCommonInfoRelic.prototype, "relicVO", {
    get: function () {
      if (d.instanceOfClass(this.parentDialog.dialogProperties.eventPackageVO.reward, "CollectableItemRelicVO")) {
        return this.parentDialog.dialogProperties.eventPackageVO.reward.vo;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopBuyElementCommonInfoRelic.prototype.getDescriptionText = function () {
    if (d.instanceOfClass(this.relicVO, "RelicEquipmentVO")) {
      return this.relicVO.getDescriptionText();
    } else if (d.instanceOfClass(this.relicVO, "RelicGemVO")) {
      return this.relicVO.getDescriptionText();
    } else {
      return null;
    }
  };
  ModernPackageShopBuyElementCommonInfoRelic.prototype.getRewardIconOptions = function () {
    var t = e.prototype.getRewardIconOptions.call(this);
    t.renderMask = s.int(r.CollectableRenderOptions.SET_BASIC ^ r.CollectableRenderOptions.TOOLTIP);
    return t;
  };
  return ModernPackageShopBuyElementCommonInfoRelic;
}(require("./906.js").ModernPackageShopBuyElementCommonInfo);
exports.ModernPackageShopBuyElementCommonInfoRelic = c;
var u = require("./14.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");
var d = require("./1.js");