Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./52.js");
var s = require("./822.js");
var r = createjs.Point;
var l = function (e) {
  function CastleSamuraiInvasionMerchantSublayer(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleSamuraiInvasionMerchantSublayer, e);
  CastleSamuraiInvasionMerchantSublayer.prototype.getDescriptionText = function () {
    return "dialog_samuraiShop_desc_detail";
  };
  CastleSamuraiInvasionMerchantSublayer.prototype.getHelpText = function () {
    return "help_samuraiShop";
  };
  CastleSamuraiInvasionMerchantSublayer.prototype.getCurrencies = function () {
    return [new u.CollectableTypeVO(c.CollectableEnum.GENERIC_CURRENCY, a.ClientConstCurrency.ID_SAMURAI_TOKEN)];
  };
  CastleSamuraiInvasionMerchantSublayer.prototype.getMerchantScrollItem = function () {
    return d.CastleSamuraiInvasionMerchantScrollItem;
  };
  CastleSamuraiInvasionMerchantSublayer.prototype.getCurrencyIconSize = function () {
    return new r(50, 50);
  };
  return CastleSamuraiInvasionMerchantSublayer;
}(s.CastleAbstractInvasionMerchantSublayer);
exports.CastleSamuraiInvasionMerchantSublayer = l;
var c = require("./12.js");
var u = require("./74.js");
var d = require("./3755.js");
o.classImplementsInterfaces(l, "ICollectableRendererList", "ISublayer");