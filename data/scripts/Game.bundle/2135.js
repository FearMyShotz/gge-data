Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function MonumentLevelInfoVO() {
    this._level = 0;
    this._boost = 0;
    this._requiredPoints = 0;
  }
  MonumentLevelInfoVO.prototype.parseXML = function (e) {
    this._level = parseInt(e.level || "");
    this._boost = parseInt(e.fameBoost || "");
    this._requiredPoints = parseInt(e.requiredPoints || "");
  };
  Object.defineProperty(MonumentLevelInfoVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentLevelInfoVO.prototype, "landmarkBonus", {
    get: function () {
      return this._boost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentLevelInfoVO.prototype, "requiredPoints", {
    get: function () {
      return this._requiredPoints;
    },
    enumerable: true,
    configurable: true
  });
  return MonumentLevelInfoVO;
}();
exports.MonumentLevelInfoVO = o;
n.classImplementsInterfaces(o, "IUpgradableLandmarkLevelInfoVO");