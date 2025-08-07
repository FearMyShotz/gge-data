Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function PeaceOfferVO(e, t, i = 50, n = true, s = 0) {
    this._percentageOfferedOrDemanded = 0;
    this._isDemanded = false;
    this._opposingAllianceID = 0;
    this.remainingTimeInSeconds = 0;
    this._opposingAllianceID = e;
    this._opposingAllianceName = t;
    this._percentageOfferedOrDemanded = i;
    this._isDemanded = n;
    this._endTimestamp = new Date();
    this._endTimestamp.setTime(this._endTimestamp.getTime() + s * a.ClientConstTime.SEC_2_MILLISEC);
    this.remainingTimeInSeconds = o.int(s);
  }
  Object.defineProperty(PeaceOfferVO.prototype, "endTimestamp", {
    get: function () {
      return this._endTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PeaceOfferVO.prototype, "percentageOfferedOrDemanded", {
    get: function () {
      return this._percentageOfferedOrDemanded;
    },
    set: function (e) {
      this._percentageOfferedOrDemanded = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PeaceOfferVO.prototype, "isDemanded", {
    get: function () {
      return this._isDemanded;
    },
    set: function (e) {
      this._isDemanded = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PeaceOfferVO.prototype, "opposingAllianceID", {
    get: function () {
      return this._opposingAllianceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PeaceOfferVO.prototype, "opposingAllianceName", {
    get: function () {
      return this._opposingAllianceName;
    },
    enumerable: true,
    configurable: true
  });
  return PeaceOfferVO;
}();
exports.PeaceOfferVO = n;
var o = require("./6.js");
var a = require("./28.js");