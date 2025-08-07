Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./111.js");
var s = function (e) {
  function PathSurroundingsVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(PathSurroundingsVE, e);
  PathSurroundingsVE.prototype.getVELayerType = function () {
    return a.IsoLayerEnum.GROUND_FILLER;
  };
  return PathSurroundingsVE;
}(require("./194.js").ASurroundingBuildingVE);
exports.PathSurroundingsVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");