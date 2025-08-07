Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleTieredPrimeDayRewardProperties(t) {
    var i = e.call(this) || this;
    i._rewards = t;
    return i;
  }
  n.__extends(CastleTieredPrimeDayRewardProperties, e);
  Object.defineProperty(CastleTieredPrimeDayRewardProperties.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTieredPrimeDayRewardProperties;
}(require("./2.js").BasicProperties);
exports.CastleTieredPrimeDayRewardProperties = o;