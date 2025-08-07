Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1611.js");
var s = require("./111.js");
var r = function (e) {
  function BeachTopSurroundingsVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BeachTopSurroundingsVE, e);
  BeachTopSurroundingsVE.prototype.onAllDispClipsLoaded = function () {
    this.disp.scaleY = -1;
    e.prototype.onAllDispClipsLoaded.call(this);
  };
  BeachTopSurroundingsVE.prototype.getVELayerType = function () {
    return s.IsoLayerEnum.STATIC_SURROUNDINGS;
  };
  return BeachTopSurroundingsVE;
}(a.ABeachSurroundingsVE);
exports.BeachTopSurroundingsVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");