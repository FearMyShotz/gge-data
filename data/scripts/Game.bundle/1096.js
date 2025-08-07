Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function EventAutoScalingDifficultyTypeVO() {
    this._difficultyTypeID = 0;
    this._sortOrder = 0;
    this._name = "";
  }
  Object.defineProperty(EventAutoScalingDifficultyTypeVO.prototype, "difficultyTypeID", {
    get: function () {
      return this._difficultyTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyTypeVO.prototype, "sortOrder", {
    get: function () {
      return this._sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyTypeVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  EventAutoScalingDifficultyTypeVO.prototype.parseXML = function (e) {
    this._difficultyTypeID = parseInt(n.CastleXMLUtils.getValueOrDefault("difficultyTypeID", e, "0", true));
    this._name = n.CastleXMLUtils.getValueOrDefault("name", e, "0", true);
    this._sortOrder = parseInt(n.CastleXMLUtils.getValueOrDefault("sortOrder", e, "0"));
  };
  EventAutoScalingDifficultyTypeVO.EASY_TYPE_ID = 1;
  return EventAutoScalingDifficultyTypeVO;
}();
exports.EventAutoScalingDifficultyTypeVO = o;