Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastlePrimeDayXMLNode() {
    this._primeDayID = 0;
    this._rewardCap = 0;
    this._skinID = 0;
  }
  CastlePrimeDayXMLNode.prototype.parseXML = function (e) {
    this._primeDayID = parseInt(o.CastleXMLUtils.getValueOrDefault("primeDayID", e, "-1", true));
    this._rewardCap = parseInt(o.CastleXMLUtils.getValueOrDefault("rewardCap", e, "-1", true));
    this._paymentRewardIDs = [];
    for (var t = 0, i = o.CastleXMLUtils.getValueOrDefault("paymentRewardIDs", e, "-1", true).split(","); t < i.length; t++) {
      var n = i[t];
      this._paymentRewardIDs.push(parseInt(n));
    }
  };
  Object.defineProperty(CastlePrimeDayXMLNode.prototype, "primeDayID", {
    get: function () {
      return this._primeDayID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayXMLNode.prototype, "rewardCap", {
    get: function () {
      return this._rewardCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayXMLNode.prototype, "skinID", {
    get: function () {
      return this._skinID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayXMLNode.prototype, "paymentRewardIDs", {
    get: function () {
      return this._paymentRewardIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayXMLNode.prototype, "isMultiTiered", {
    get: function () {
      return this._paymentRewardIDs.length > 1;
    },
    enumerable: true,
    configurable: true
  });
  return CastlePrimeDayXMLNode;
}();
exports.CastlePrimeDayXMLNode = n;
var o = require("./22.js");