Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./113.js");
var s = require("./194.js");
var r = function (e) {
  function FogSurroundingsVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FogSurroundingsVE, e);
  FogSurroundingsVE.prototype.init = function (t) {
    e.prototype.init.call(this, t);
  };
  FogSurroundingsVE.prototype.onAllDispClipsLoaded = function () {
    e.prototype.onAllDispClipsLoaded.call(this);
    this.dispComponent.dispContainer.scaleX = l.Iso.renderer.camera.scrollBounds.width / 2 * 1.1;
    this.elementContainer.mouseEnabled = false;
  };
  FogSurroundingsVE.prototype.getVELayerType = function () {
    return a.IsoLayerEnum.FOG;
  };
  Object.defineProperty(FogSurroundingsVE.prototype, "hasBuildingPlaceHolder", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVE.prototype, "hasBuildingPlaceHolder").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FogSurroundingsVE;
}(s.ASurroundingBuildingVE);
exports.FogSurroundingsVE = r;
var l = require("./33.js");
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");