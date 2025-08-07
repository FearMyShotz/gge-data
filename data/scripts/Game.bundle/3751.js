Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./52.js");
var s = require("./824.js");
var r = createjs.Point;
var l = function (e) {
  function CastleSamuraiInvasionDaimyoShopSublayer(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleSamuraiInvasionDaimyoShopSublayer, e);
  CastleSamuraiInvasionDaimyoShopSublayer.prototype.getDescriptionText = function () {
    return "dialog_samuraiMedalShop_desc_detail";
  };
  CastleSamuraiInvasionDaimyoShopSublayer.prototype.getHelpText = function () {
    return "help_samuraiShop";
  };
  CastleSamuraiInvasionDaimyoShopSublayer.prototype.getCurrencies = function () {
    return [new u.CollectableTypeVO(c.CollectableEnum.GENERIC_CURRENCY, a.ClientConstCurrency.ID_SAMURAI_TOKEN), new u.CollectableTypeVO(c.CollectableEnum.GENERIC_CURRENCY, a.ClientConstCurrency.ID_SAMURAI_MEDAL)];
  };
  CastleSamuraiInvasionDaimyoShopSublayer.prototype.getMerchantScrollItem = function () {
    return d.CastleSamuraiInvasionDaimyoShopScrollItem;
  };
  CastleSamuraiInvasionDaimyoShopSublayer.prototype.getCurrencyIconSize = function () {
    return new r(30, 30);
  };
  return CastleSamuraiInvasionDaimyoShopSublayer;
}(s.CastleAbstractInvasionMerchantSublayer);
exports.CastleSamuraiInvasionDaimyoShopSublayer = l;
var c = require("./12.js");
var u = require("./74.js");
var d = require("./3752.js");
o.classImplementsInterfaces(l, "ICollectableRendererList", "ISublayer");