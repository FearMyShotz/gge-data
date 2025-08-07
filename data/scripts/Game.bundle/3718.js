Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./52.js");
var r = function (e) {
  function CastleNomadInvasionMerchantSublayer(t) {
    var i = e.call(this, t) || this;
    i.textFieldManager.registerTextField(t.txt_description, new a.LocalizedTextVO("dialog_nomadInvasion_desc"));
    return i;
  }
  n.__extends(CastleNomadInvasionMerchantSublayer, e);
  CastleNomadInvasionMerchantSublayer.prototype.getDescriptionText = function () {
    return "dialog_nomadInvasion_trader_desc";
  };
  CastleNomadInvasionMerchantSublayer.prototype.getCurrencies = function () {
    return [new c.CollectableTypeVO(l.CollectableEnum.GENERIC_CURRENCY, s.ClientConstCurrency.ID_KHAN_TABLET)];
  };
  CastleNomadInvasionMerchantSublayer.prototype.getHelpText = function () {
    return "help_nomadinvasion";
  };
  CastleNomadInvasionMerchantSublayer.prototype.getMerchantScrollItem = function () {
    return u.CastleNomadInvasionMerchantScrollItem;
  };
  return CastleNomadInvasionMerchantSublayer;
}(require("./822.js").CastleAbstractInvasionMerchantSublayer);
exports.CastleNomadInvasionMerchantSublayer = r;
var l = require("./12.js");
var c = require("./74.js");
var u = require("./1767.js");
o.classImplementsInterfaces(r, "ICollectableRendererList", "ISublayer");