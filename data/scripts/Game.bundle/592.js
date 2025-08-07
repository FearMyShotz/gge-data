Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function ModernPackageShopBuyElementEnum(t, i, n) {
    var a = e.call(this, t, o.BasicEnum.instantiationKey) || this;
    a._clazz = i;
    a._assetClipName = n;
    return a;
  }
  n.__extends(ModernPackageShopBuyElementEnum, e);
  ModernPackageShopBuyElementEnum.getTypeByDataClass = function (e) {
    return this.getByProperty(ModernPackageShopBuyElementEnum, "clazz", e, ModernPackageShopBuyElementEnum.COMMON_INFO);
  };
  Object.defineProperty(ModernPackageShopBuyElementEnum.prototype, "clazz", {
    get: function () {
      return this._clazz;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopBuyElementEnum.prototype, "assetClipName", {
    get: function () {
      return this._assetClipName;
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopBuyElementEnum.__initialize_static_members = function () {
    ModernPackageShopBuyElementEnum.COMMON_INFO = new ModernPackageShopBuyElementEnum("commonInfo", c.ModernPackageShopBuyElementCommonInfo, "ShopElement_CommonInfo");
    ModernPackageShopBuyElementEnum.COMMON_INFO_RELIC = new ModernPackageShopBuyElementEnum("commonInfoRelic", d.ModernPackageShopBuyElementCommonInfoRelic, "ShopElement_CommonInfoRelic");
    ModernPackageShopBuyElementEnum.COMMON_INFO_BUNDLE = new ModernPackageShopBuyElementEnum("commonInfoBundle", u.ModernPackageShopBuyElementCommonInfoBundle, "ShopElement_CommonInfoBundle");
    ModernPackageShopBuyElementEnum.AMOUNT = new ModernPackageShopBuyElementEnum("amount", s.ModernPackageShopBuyElementAmount, "ShopElement_Amount");
    ModernPackageShopBuyElementEnum.COSTS = new ModernPackageShopBuyElementEnum("costs", p.ModernPackageShopBuyElementCosts, "ShopElement_Costs");
    ModernPackageShopBuyElementEnum.INFO = new ModernPackageShopBuyElementEnum("info", h.ModernPackageShopBuyElementInfo, "ShopElement_Info");
    ModernPackageShopBuyElementEnum.RELIC_INFO = new ModernPackageShopBuyElementEnum("relicInfo", g.ModernPackageShopBuyElementRelicInfo, "ShopElement_RelicInfo");
    ModernPackageShopBuyElementEnum.BUNDLE_REWARDS = new ModernPackageShopBuyElementEnum("bundleRewards", l.ModernPackageShopBuyElementBundleRewards, "ShopElement_BundleRewards");
    ModernPackageShopBuyElementEnum.BOTTOM_MENU = new ModernPackageShopBuyElementEnum("bottomMenu", r.ModernPackageShopBuyElementBottomMenu, "ShopElement_BottomMenu");
  };
  return ModernPackageShopBuyElementEnum;
}(require("./84.js").CastleEnum);
exports.ModernPackageShopBuyElementEnum = a;
var s = require("./2214.js");
var r = require("./2215.js");
var l = require("./2219.js");
var c = require("./906.js");
var u = require("./2220.js");
var d = require("./2221.js");
var p = require("./2222.js");
var h = require("./2223.js");
var g = require("./2224.js");
a.__initialize_static_members();