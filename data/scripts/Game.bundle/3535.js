Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleRewardHubPickAllDialogProperties(t) {
    var i = e.call(this) || this;
    i._hasLockedRewards = t;
    return i;
  }
  n.__extends(CastleRewardHubPickAllDialogProperties, e);
  Object.defineProperty(CastleRewardHubPickAllDialogProperties.prototype, "hasLockedRewards", {
    get: function () {
      return this._hasLockedRewards;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRewardHubPickAllDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleRewardHubPickAllDialogProperties = o;