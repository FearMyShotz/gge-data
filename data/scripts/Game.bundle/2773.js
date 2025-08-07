Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function SlumBuildingPartBuildingVO(t, i) {
    var n = this;
    n._necessarySlumLevel = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._necessarySlumLevel = i;
    return n;
  }
  n.__extends(SlumBuildingPartBuildingVO, e);
  Object.defineProperty(SlumBuildingPartBuildingVO.prototype, "isDamaged", {
    get: function () {
      return this.necessarySlumLevel > this.slumLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SlumBuildingPartBuildingVO.prototype, "necessarySlumLevel", {
    get: function () {
      return this._necessarySlumLevel;
    },
    enumerable: true,
    configurable: true
  });
  return SlumBuildingPartBuildingVO;
}(require("./1514.js").ASlumBuildingPartVO);
exports.SlumBuildingPartBuildingVO = a;
o.classImplementsInterfaces(a, "IRelativeGridBuildingVO");