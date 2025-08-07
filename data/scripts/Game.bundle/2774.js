Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function SlumBuildingPartCharacterVO(t, i) {
    var n = e.call(this, null) || this;
    n._indoorPos = t;
    n._outdoorPos = i;
    n.updatePosOffset();
    return n;
  }
  n.__extends(SlumBuildingPartCharacterVO, e);
  SlumBuildingPartCharacterVO.prototype.updateData = function () {
    this.updatePosOffset();
    e.prototype.updateData.call(this);
  };
  SlumBuildingPartCharacterVO.prototype.updatePosOffset = function () {
    this.posOffset = this.isIndoor ? this.indoorPos : this.outdoorPos;
  };
  Object.defineProperty(SlumBuildingPartCharacterVO.prototype, "isIndoor", {
    get: function () {
      return this.slumLevel > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SlumBuildingPartCharacterVO.prototype, "indoorPos", {
    get: function () {
      return this._indoorPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SlumBuildingPartCharacterVO.prototype, "outdoorPos", {
    get: function () {
      return this._outdoorPos;
    },
    enumerable: true,
    configurable: true
  });
  return SlumBuildingPartCharacterVO;
}(require("./1514.js").ASlumBuildingPartVO);
exports.SlumBuildingPartCharacterVO = a;
o.classImplementsInterfaces(a, "IRelativeGridBuildingVO");