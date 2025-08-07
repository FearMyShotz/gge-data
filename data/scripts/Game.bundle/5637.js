Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function XmlFusionCostSequenceVO() {
    this._id = -1;
    this._forgeId = -1;
    this._fusionTargetLevelIterationIndex = -1;
    this._costJSONKey = "";
    this._costAmount = 0;
  }
  XmlFusionCostSequenceVO.prototype.parseXml = function (e) {
    this._id = o.int(a.CastleXMLUtils.getIntAttribute("id", e, -1));
    this._forgeId = o.int(a.CastleXMLUtils.getIntAttribute("forgeID", e, -1));
    this._fusionTargetLevelIterationIndex = o.int(a.CastleXMLUtils.getIntAttribute("fusionTargetLevelIterationIndex", e, -1));
    this._costJSONKey = a.CastleXMLUtils.getStringAttribute("costJSONKey", e, "");
    this._costAmount = o.int(a.CastleXMLUtils.getIntAttribute("costAmount", e, 0));
  };
  Object.defineProperty(XmlFusionCostSequenceVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionCostSequenceVO.prototype, "forgeId", {
    get: function () {
      return this._forgeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionCostSequenceVO.prototype, "fusionTargetLevelIterationIndex", {
    get: function () {
      return this._fusionTargetLevelIterationIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionCostSequenceVO.prototype, "costJSONKey", {
    get: function () {
      return this._costJSONKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionCostSequenceVO.prototype, "costAmount", {
    get: function () {
      return this._costAmount;
    },
    enumerable: true,
    configurable: true
  });
  return XmlFusionCostSequenceVO;
}();
exports.XmlFusionCostSequenceVO = n;
var o = require("./6.js");
var a = require("./22.js");