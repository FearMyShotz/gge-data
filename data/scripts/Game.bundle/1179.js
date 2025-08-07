Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemRandomRewardVO(t = null, i = 1) {
    var n = e.call(this, i) || this;
    n._rewardType = a.CollectableEnum.UNKNOWN;
    n._rewardType = t || a.CollectableEnum.UNKNOWN;
    return n;
  }
  n.__extends(CollectableItemRandomRewardVO, e);
  Object.defineProperty(CollectableItemRandomRewardVO.prototype, "rewardType", {
    get: function () {
      return this._rewardType;
    },
    set: function (e) {
      this._rewardType = e;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemRandomRewardVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemRandomRewardVO = o;
var a = require("./12.js");