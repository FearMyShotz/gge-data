Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleKingdomUnitTransferVO() {
    this._units = [];
    this._endTime = 0;
    this._targetKingdomID = 0;
  }
  CastleKingdomUnitTransferVO.prototype.fillFromParamObject = function (e) {
    this._units = e.I;
    var t = r.int(e.RS);
    this._endTime = l.CachedTimer.getCachedTimer() + t * a.ClientConstTime.SEC_2_MILLISEC;
    this._targetKingdomID = r.int(e.KID);
  };
  Object.defineProperty(CastleKingdomUnitTransferVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      return Math.max((this._endTime - l.CachedTimer.getCachedTimer()) * a.ClientConstTime.MILLISEC_2_SEC, 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomUnitTransferVO.prototype, "totalTravelTimeInSeconds", {
    get: function () {
      return c.CastleModel.kingdomData.getKingdomVOByID(this._targetKingdomID).unitTravelTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomUnitTransferVO.prototype, "progressPercent", {
    get: function () {
      return 1 - Math.max(this.remainingTimeInSeconds / this.totalTravelTimeInSeconds, 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomUnitTransferVO.prototype, "toolTipText", {
    get: function () {
      var e = "";
      if (this._units != null) {
        for (var t = 0, i = this._units; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            var a = c.CastleModel.wodData.voSubList(o.CastleWodData.TYPE_UNIT).get(n[0]);
            e += n[1] + "x " + s.Localize.text(a.getNameString()) + "\n";
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomUnitTransferVO.prototype, "units", {
    get: function () {
      return this._units;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomUnitTransferVO.prototype, "targetKingdomID", {
    get: function () {
      return this._targetKingdomID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleKingdomUnitTransferVO;
}();
exports.CastleKingdomUnitTransferVO = n;
var o = require("./56.js");
var a = require("./28.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./30.js");
var c = require("./4.js");