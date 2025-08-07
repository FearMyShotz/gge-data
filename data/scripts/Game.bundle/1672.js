Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./4.js");
var s = function (e) {
  function ModernWelcomebackDialogProperties(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).rewardList = a.CastleModel.rewardData.getWelcomeBackRewardListById(t);
    return i;
  }
  n.__extends(ModernWelcomebackDialogProperties, e);
  return ModernWelcomebackDialogProperties;
}(o.BasicProperties);
exports.ModernWelcomebackDialogProperties = s;