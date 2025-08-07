Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = function () {
  function XmlSamuraiDaimyoContractVO() {
    this._id = 0;
    this._rank = 0;
    this._enableOnStart = false;
    this._nextContract = 0;
    this._shogunPoints = 0;
    this._warEffortPoints = 0;
  }
  XmlSamuraiDaimyoContractVO.prototype.parseXml = function (e) {
    this._id = n.int(o.CastleXMLUtils.getIntAttribute("id", e, -1));
    this._rank = n.int(o.CastleXMLUtils.getIntAttribute("rank", e, -1));
    this._enableOnStart = o.CastleXMLUtils.getBooleanAttribute("enableOnStart", e, false);
    this._nextContract = n.int(o.CastleXMLUtils.getIntAttribute("nextContract", e, -1));
    this._shogunPoints = n.int(o.CastleXMLUtils.getIntAttribute("shogunPoints", e, -1));
    this._warEffortPoints = n.int(o.CastleXMLUtils.getIntAttribute("warEffortPoints", e, -1));
  };
  Object.defineProperty(XmlSamuraiDaimyoContractVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSamuraiDaimyoContractVO.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSamuraiDaimyoContractVO.prototype, "enableOnStart", {
    get: function () {
      return this._enableOnStart;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSamuraiDaimyoContractVO.prototype, "nextContract", {
    get: function () {
      return this._nextContract;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSamuraiDaimyoContractVO.prototype, "shogunPoints", {
    get: function () {
      return this._shogunPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSamuraiDaimyoContractVO.prototype, "warEffortPoints", {
    get: function () {
      return this._warEffortPoints;
    },
    enumerable: true,
    configurable: true
  });
  return XmlSamuraiDaimyoContractVO;
}();
exports.XmlSamuraiDaimyoContractVO = a;