Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./111.js");
var s = function (e) {
  function CliffsSurroundingsVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CliffsSurroundingsVE, e);
  CliffsSurroundingsVE.prototype.getVELayerType = function () {
    return a.IsoLayerEnum.GROUND;
  };
  return CliffsSurroundingsVE;
}(require("./194.js").ASurroundingBuildingVE);
exports.CliffsSurroundingsVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");