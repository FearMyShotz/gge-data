Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./113.js");
var s = require("./194.js");
var r = function (e) {
  function FillerSurroundingsVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FillerSurroundingsVE, e);
  FillerSurroundingsVE.prototype.getVELayerType = function () {
    var e = this.fillerSurroundingVO.getVisualClassName();
    if (e.indexOf("Road_Surroundings") > -1) {
      return a.IsoLayerEnum.GROUND;
    } else if (this.fillerSurroundingVO.isPath) {
      return a.IsoLayerEnum.GROUND_FILLER;
    } else if (e.indexOf("Stones_Surroundings") > -1 || e.indexOf("Trees_Surroundings") > -1 || e.indexOf("Paving_Surroundings") > -1 || e.indexOf("Snowpile_Surroundings") > -1) {
      return a.IsoLayerEnum.STATIC_SURROUNDINGS;
    } else {
      return a.IsoLayerEnum.ISO_OBJECTS;
    }
  };
  Object.defineProperty(FillerSurroundingsVE.prototype, "fillerSurroundingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FillerSurroundingsVE.prototype, "hasBuildingPlaceHolder", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVE.prototype, "hasBuildingPlaceHolder").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FillerSurroundingsVE.prototype.onMouseDown = function (t) {
    if (l.FillerSurroundingEditor.IS_ACTIVE) {
      l.FillerSurroundingEditor.getInstance().onSelect(this);
    }
    e.prototype.onMouseDown.call(this, t);
  };
  FillerSurroundingsVE.prototype.updateInteractionVisibility = function () {
    if (!l.FillerSurroundingEditor.IS_ACTIVE) {
      e.prototype.updateInteractionVisibility.call(this);
    }
  };
  return FillerSurroundingsVE;
}(s.ASurroundingBuildingVE);
exports.FillerSurroundingsVE = r;
var l = require("./1000.js");
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");