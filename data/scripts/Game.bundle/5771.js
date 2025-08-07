Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function EventAutoScalingDifficultyEffectVO() {
    this._eventAutoScalingEffectID = 0;
    this._difficultyID = 0;
    this._effectGroup = "";
    this._effectID = 0;
    this._minValue = 0;
    this._maxValue = 0;
    this._wearerID = 0;
  }
  Object.defineProperty(EventAutoScalingDifficultyEffectVO.prototype, "wearerID", {
    get: function () {
      return this._wearerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyEffectVO.prototype, "eventAutoScalingEffectID", {
    get: function () {
      return this._eventAutoScalingEffectID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyEffectVO.prototype, "difficultyID", {
    get: function () {
      return this._difficultyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyEffectVO.prototype, "effectGroup", {
    get: function () {
      return this._effectGroup;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyEffectVO.prototype, "effectID", {
    get: function () {
      return this._effectID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyEffectVO.prototype, "minValue", {
    get: function () {
      return this._minValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyEffectVO.prototype, "maxValue", {
    get: function () {
      return this._maxValue;
    },
    enumerable: true,
    configurable: true
  });
  EventAutoScalingDifficultyEffectVO.prototype.parseXML = function (e) {
    this._eventAutoScalingEffectID = parseInt(n.CastleXMLUtils.getValueOrDefault("eventAutoScalingLordEffectID", e, "0", true));
    this._difficultyID = parseInt(n.CastleXMLUtils.getValueOrDefault("difficultyID", e, "0", true));
    this._effectGroup = n.CastleXMLUtils.getValueOrDefault("effectGroup", e, "0", true);
    this._effectID = parseInt(n.CastleXMLUtils.getValueOrDefault("effectID", e, "0"));
    this._minValue = parseInt(n.CastleXMLUtils.getValueOrDefault("minValue", e, "0"));
    this._maxValue = parseInt(n.CastleXMLUtils.getValueOrDefault("maxValue", e, "0"));
    this._wearerID = parseInt(n.CastleXMLUtils.getValueOrDefault("wearerID", e, "0"));
  };
  return EventAutoScalingDifficultyEffectVO;
}();
exports.EventAutoScalingDifficultyEffectVO = o;