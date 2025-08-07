Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function ModernGenericRewardDialogProperties(t, i, n, o = null) {
    var a = e.call(this) || this;
    a._rewardList = n;
    a.additionalInfo = o;
    a.title = t;
    a.copy = i;
    return a;
  }
  n.__extends(ModernGenericRewardDialogProperties, e);
  Object.defineProperty(ModernGenericRewardDialogProperties.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    set: function (e) {
      this._rewardList = e;
    },
    enumerable: true,
    configurable: true
  });
  return ModernGenericRewardDialogProperties;
}(require("./2.js").BasicProperties);
exports.ModernGenericRewardDialogProperties = o;