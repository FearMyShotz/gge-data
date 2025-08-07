Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1052.js");
var s = require("./27.js");
var r = function (e) {
  function ACollectableItemPercentageBoosterVO() {
    return e.call(this, 1) || this;
  }
  n.__extends(ACollectableItemPercentageBoosterVO, e);
  ACollectableItemPercentageBoosterVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    if (o.instanceOfClass(t, "Array")) {
      this._percentageBoosterVO = new a.PercentageBoosterVO(t[0], t[1]);
    } else {
      this._percentageBoosterVO = new a.PercentageBoosterVO(t.PB, t.D);
    }
  };
  ACollectableItemPercentageBoosterVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.percentageBoosterVO = this.percentageBoosterVO.clone();
    return t;
  };
  ACollectableItemPercentageBoosterVO.prototype.isCombineAbleWith = function (e) {
    return false;
  };
  ACollectableItemPercentageBoosterVO.prototype.getTextfieldText = function () {
    return s.CastleTimeStringHelper.getShortTimeString(this.percentageBoosterVO.duration);
  };
  Object.defineProperty(ACollectableItemPercentageBoosterVO.prototype, "percentageBoosterVO", {
    get: function () {
      return this._percentageBoosterVO;
    },
    set: function (e) {
      this._percentageBoosterVO = e;
    },
    enumerable: true,
    configurable: true
  });
  return ACollectableItemPercentageBoosterVO;
}(require("./96.js").ACollectableItemVO);
exports.ACollectableItemPercentageBoosterVO = r;