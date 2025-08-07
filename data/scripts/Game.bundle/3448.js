Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./4.js");
var r = function (e) {
  function CastleUnderworldMoraleBoosterRewardDialogProperties(t) {
    var i = this;
    i._rewardId = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._rewardId = a.int(a.int(t));
    var n = s.CastleModel.rewardData.getListById(i._rewardId);
    if (n && n.length > 0) {
      i._decoCollectableItem = n.getItemByIndex(0);
    }
    n = null;
    return i;
  }
  n.__extends(CastleUnderworldMoraleBoosterRewardDialogProperties, e);
  Object.defineProperty(CastleUnderworldMoraleBoosterRewardDialogProperties.prototype, "rewardId", {
    get: function () {
      return this._rewardId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnderworldMoraleBoosterRewardDialogProperties.prototype, "decoCollectableItem", {
    get: function () {
      return this._decoCollectableItem;
    },
    enumerable: true,
    configurable: true
  });
  return CastleUnderworldMoraleBoosterRewardDialogProperties;
}(o.BasicProperties);
exports.CastleUnderworldMoraleBoosterRewardDialogProperties = r;