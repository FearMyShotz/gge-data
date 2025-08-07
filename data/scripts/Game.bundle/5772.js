Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = require("./4.js");
var a = function () {
  function EventAutoScalingDifficultyVO() {
    this._difficultyID = 0;
    this._eventID = 0;
    this._npcDefenseScoreMultiplier = 0;
    this._typeID = 0;
    this._isLocked = false;
    this._unlockC2 = 0;
  }
  EventAutoScalingDifficultyVO.prototype.parseXML = function (e) {
    this._difficultyID = parseInt(n.CastleXMLUtils.getValueOrDefault("difficultyID", e, "0", true));
    this._eventID = parseInt(n.CastleXMLUtils.getValueOrDefault("eventID", e, "0", true));
    this._npcDefenseScoreMultiplier = parseFloat(n.CastleXMLUtils.getValueOrDefault("npcDefenseScoreMultiplier", e, "0"));
    this._isLocked = parseInt(n.CastleXMLUtils.getValueOrDefault("isLocked", e, "0")) == 1;
    this._typeID = parseInt(n.CastleXMLUtils.getValueOrDefault("difficultyTypeID", e, "0"));
    this._unlockC2 = parseInt(n.CastleXMLUtils.getValueOrDefault("rentC2Cost", e, "0"));
  };
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "unlockC2", {
    get: function () {
      return this._unlockC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "sortOrder", {
    get: function () {
      return this.difficultyType.sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "multiplier", {
    get: function () {
      return o.CastleModel.eventDifficultyScaling.getAutoScalingByDifficultyID(this._difficultyID).npcDefenseScoreMultiplier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "name", {
    get: function () {
      return this.difficultyType.name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "name_textID", {
    get: function () {
      return "dialog_difficultyScaling_" + this.difficultyType.name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "difficultyType", {
    get: function () {
      return o.CastleModel.eventDifficultyScaling.getDifficultyTypesByTypeID(this._typeID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "difficultyID", {
    get: function () {
      return this._difficultyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "npcDefenseScoreMultiplier", {
    get: function () {
      return this._npcDefenseScoreMultiplier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "isLocked", {
    get: function () {
      return this._isLocked;
    },
    enumerable: true,
    configurable: true
  });
  return EventAutoScalingDifficultyVO;
}();
exports.EventAutoScalingDifficultyVO = a;