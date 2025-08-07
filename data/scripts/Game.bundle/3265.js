Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3266.js");
var a = function (e) {
  function CollectableItemSkipDiscountVO(t = 0, i = 0) {
    var n = e.call(this, 1) || this;
    n._skipDiscountVO = new o.SkipDiscountBoosterVO(t, i);
    return n;
  }
  n.__extends(CollectableItemSkipDiscountVO, e);
  CollectableItemSkipDiscountVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this._skipDiscountVO = new o.SkipDiscountBoosterVO(t[0], t[1]);
  };
  CollectableItemSkipDiscountVO.prototype.getTooltipTextId = function () {
    return "skipDiscount_tooltip";
  };
  CollectableItemSkipDiscountVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.skipDiscountVO = this.skipDiscountVO.clone();
    return t;
  };
  CollectableItemSkipDiscountVO.prototype.isCombineAbleWith = function (e) {
    return false;
  };
  Object.defineProperty(CollectableItemSkipDiscountVO.prototype, "skipDiscountVO", {
    get: function () {
      return this._skipDiscountVO;
    },
    set: function (e) {
      this._skipDiscountVO = e;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemSkipDiscountVO.SERVER_KEY = "SD_DISABLED";
  CollectableItemSkipDiscountVO.XML_KEY = "skipDiscount";
  return CollectableItemSkipDiscountVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemSkipDiscountVO = a;