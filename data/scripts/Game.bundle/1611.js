Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./113.js");
var s = require("./194.js");
var r = function (e) {
  function ABeachSurroundingsVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ABeachSurroundingsVE, e);
  Object.defineProperty(ABeachSurroundingsVE.prototype, "assetClipName", {
    get: function () {
      return "Beach_" + this.vo.group;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVE.prototype, "assetClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABeachSurroundingsVE.prototype, "assetFileName", {
    get: function () {
      return this.assetClipName;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVE.prototype, "assetFileName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ABeachSurroundingsVE.prototype.getVELayerType = function () {
    return a.IsoLayerEnum.STATIC_SURROUNDINGS;
  };
  return ABeachSurroundingsVE;
}(s.ASurroundingBuildingVE);
exports.ABeachSurroundingsVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");