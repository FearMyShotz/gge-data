Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function EventAutoScalingVO() {
    this._npcDefenseScoreMultiplier = 0;
    this._difficultyID = 0;
  }
  Object.defineProperty(EventAutoScalingVO.prototype, "difficultyID", {
    get: function () {
      return this._difficultyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingVO.prototype, "npcDefenseScoreMultiplier", {
    get: function () {
      return this._npcDefenseScoreMultiplier;
    },
    enumerable: true,
    configurable: true
  });
  EventAutoScalingVO.prototype.parseXML = function (e) {
    this._difficultyID = parseInt(n.CastleXMLUtils.getValueOrDefault("difficultyID", e, "0", true));
    this._npcDefenseScoreMultiplier = parseInt(n.CastleXMLUtils.getValueOrDefault("npcDefenseScoreMultiplier", e, "0", true));
  };
  return EventAutoScalingVO;
}();
exports.EventAutoScalingVO = o;