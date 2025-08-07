Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function FestivalVO() {
    this._festivalType = 0;
    this._endTime = NaN;
    this.boostAmount = 0;
  }
  FestivalVO.prototype.fillFromParamObject = function (e) {
    if (e) {
      this._festivalType = o.int(e.T);
      this.parseDuration(e.RT);
      this._activeFestivalVO = r.CastleModel.premiumData.getFestivalItemByID(this._festivalType);
      if (this._activeFestivalVO) {
        this.boostAmount = this._activeFestivalVO.boost;
      }
    }
  };
  FestivalVO.prototype.parseDuration = function (e) {
    this._endTime = Math.max(0, s.CachedTimer.getCachedTimer() + e * a.ClientConstTime.SEC_2_MILLISEC);
  };
  Object.defineProperty(FestivalVO.prototype, "isActive", {
    get: function () {
      return this.remainingTimeInSeconds > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FestivalVO.prototype, "activeFestivalVO", {
    get: function () {
      return this._activeFestivalVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FestivalVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      return Math.max(0, (this._endTime - s.CachedTimer.getCachedTimer()) * a.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  return FestivalVO;
}();
exports.FestivalVO = n;
var o = require("./6.js");
var a = require("./28.js");
var s = require("./30.js");
var r = require("./4.js");