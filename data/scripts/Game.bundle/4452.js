Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function GGSGiftEventVO() {
    var t = this;
    t._hasBeenCollected = false;
    t._skinID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(GGSGiftEventVO, e);
  GGSGiftEventVO.prototype.collect = function () {
    this._hasBeenCollected = true;
  };
  GGSGiftEventVO.prototype.parseParamObject = function (e) {
    this._hasBeenCollected = e.AC > 0;
    if (e.SID) {
      this._skinID = parseInt(e.SID);
    }
  };
  GGSGiftEventVO.prototype.isCollectable = function () {
    return !this._hasBeenCollected && this.remainingEventTimeInSeconds > 0;
  };
  Object.defineProperty(GGSGiftEventVO.prototype, "skinID", {
    get: function () {
      return this._skinID;
    },
    enumerable: true,
    configurable: true
  });
  return GGSGiftEventVO;
}(require("./79.js").ASpecialEventVO);
exports.GGSGiftEventVO = a;
o.classImplementsInterfaces(a, "IEventOverviewable");