Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./111.js");
var s = function (e) {
  function AEventBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AEventBuildingVE, e);
  AEventBuildingVE.prototype.getVELayerType = function () {
    return a.IsoLayerEnum.ISO_OBJECTS;
  };
  return AEventBuildingVE;
}(require("./490.js").AInteractiveIsoObjectVE);
exports.AEventBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");