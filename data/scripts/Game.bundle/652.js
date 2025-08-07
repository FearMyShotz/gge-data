Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemUnlockAllPassVO() {
    return e.call(this, 1) || this;
  }
  n.__extends(CollectableItemUnlockAllPassVO, e);
  Object.defineProperty(CollectableItemUnlockAllPassVO.prototype, "hubRewardIdsToUnlock", {
    get: function () {
      return this._hubRewardIdsToUnlock;
    },
    set: function (e) {
      this._hubRewardIdsToUnlock = e;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemUnlockAllPassVO.prototype.getTooltipTextId = function () {
    return "dialog_unlockAllExtraTierRewards_name";
  };
  CollectableItemUnlockAllPassVO.prototype.getDescriptionTextId = function () {
    return "dialog_rewardHub_unlockAll_rewardPasses_desc";
  };
  return CollectableItemUnlockAllPassVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemUnlockAllPassVO = o;