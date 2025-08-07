Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function ASlumBuildingPartVO(t) {
    var i = e.call(this) || this;
    i._name = "Slum";
    i._group = "Surroundings";
    i._posOffset = t;
    return i;
  }
  n.__extends(ASlumBuildingPartVO, e);
  Object.defineProperty(ASlumBuildingPartVO.prototype, "parentVO", {
    get: function () {
      return this._parentVO;
    },
    set: function (e) {
      this._parentVO = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASlumBuildingPartVO.prototype, "slumData", {
    get: function () {
      return this.parentVO.slumData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASlumBuildingPartVO.prototype, "slumLevel", {
    get: function () {
      if (this.parentVO) {
        return this.parentVO.slumLevel;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASlumBuildingPartVO.prototype, "posOffset", {
    get: function () {
      return this._posOffset;
    },
    set: function (e) {
      this._posOffset = e;
    },
    enumerable: true,
    configurable: true
  });
  return ASlumBuildingPartVO;
}(require("./209.js").ASurroundingBuildingVO);
exports.ASlumBuildingPartVO = a;
o.classImplementsInterfaces(a, "IRelativeGridBuildingVO");