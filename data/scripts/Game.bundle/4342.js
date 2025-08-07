Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./22.js");
var a = function () {
  function MightRankVO() {
    this._threshold = 0;
    this._id = 0;
    this._rewardID = 0;
  }
  MightRankVO.prototype.parseXML = function (e) {
    this._id = parseInt(o.CastleXMLUtils.getValueOrDefault("mightID", e, "0"));
    this._threshold = parseInt(o.CastleXMLUtils.getValueOrDefault("threshold", e, "0"));
    this._rewardID = parseInt(o.CastleXMLUtils.getValueOrDefault("rewardID", e, "0"));
  };
  MightRankVO.prototype.getId = function () {
    return this._id;
  };
  Object.defineProperty(MightRankVO.prototype, "threshold", {
    get: function () {
      return this._threshold;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MightRankVO.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  return MightRankVO;
}();
exports.MightRankVO = a;
n.classImplementsInterfaces(a, "ICastleXmlNode");