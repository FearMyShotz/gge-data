Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemAchievementPointVO(t = 0) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(CollectableItemAchievementPointVO, e);
  CollectableItemAchievementPointVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this.amount = t;
  };
  CollectableItemAchievementPointVO.__initialize_static_members = function () {
    CollectableItemAchievementPointVO.SERVER_KEY = "AP";
    CollectableItemAchievementPointVO.XML_KEY = "achievementPoints";
  };
  return CollectableItemAchievementPointVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemAchievementPointVO = o;
o.__initialize_static_members();