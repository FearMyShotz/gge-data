Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1611.js");
var s = require("./111.js");
var r = function (e) {
  function BeachBottomSurroundingsVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BeachBottomSurroundingsVE, e);
  BeachBottomSurroundingsVE.prototype.getVELayerType = function () {
    return s.IsoLayerEnum.STATIC_SURROUNDINGS;
  };
  return BeachBottomSurroundingsVE;
}(a.ABeachSurroundingsVE);
exports.BeachBottomSurroundingsVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");