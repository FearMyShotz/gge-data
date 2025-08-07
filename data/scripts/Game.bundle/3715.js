Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./52.js");
var r = function (e) {
  function CastleNomadInvasionMedalMerchantSublayer(t) {
    var i = e.call(this, t) || this;
    i.textFieldManager.registerTextField(t.txt_description, new a.LocalizedTextVO("dialog_nomadInvasion_khanTrader_NPC_desc"));
    return i;
  }
  n.__extends(CastleNomadInvasionMedalMerchantSublayer, e);
  CastleNomadInvasionMedalMerchantSublayer.prototype.getDescriptionText = function () {
    return "dialog_nomadInvasion_khanTrader_desc";
  };
  CastleNomadInvasionMedalMerchantSublayer.prototype.getCurrencies = function () {
    return [new c.CollectableTypeVO(l.CollectableEnum.GENERIC_CURRENCY, s.ClientConstCurrency.ID_KHAN_MEDAL)];
  };
  CastleNomadInvasionMedalMerchantSublayer.prototype.getHelpText = function () {
    return "help_nomadInvasion_khanTrader";
  };
  CastleNomadInvasionMedalMerchantSublayer.prototype.getMerchantScrollItem = function () {
    return u.CastleNomadInvasionMerchantScrollItem;
  };
  return CastleNomadInvasionMedalMerchantSublayer;
}(require("./824.js").CastleAbstractInvasionMerchantSublayer);
exports.CastleNomadInvasionMedalMerchantSublayer = r;
var l = require("./12.js");
var c = require("./74.js");
var u = require("./1769.js");
o.classImplementsInterfaces(r, "ICollectableRendererList", "ISublayer");