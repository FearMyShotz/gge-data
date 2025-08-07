Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function RewardScrollItemVO(t) {
    var i = e.call(this) || this;
    i._collectableItem = t;
    return i;
  }
  n.__extends(RewardScrollItemVO, e);
  Object.defineProperty(RewardScrollItemVO.prototype, "collectableItem", {
    get: function () {
      return this._collectableItem;
    },
    enumerable: true,
    configurable: true
  });
  return RewardScrollItemVO;
}(require("./2.js").ScrollItemVO);
exports.RewardScrollItemVO = o;