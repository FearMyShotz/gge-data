Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./113.js");
var r = function (e) {
  function ASurroundingBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ASurroundingBuildingVE, e);
  ASurroundingBuildingVE.prototype.destroyDisp = function () {
    this._buildingClip = null;
    e.prototype.destroyDisp.call(this);
  };
  ASurroundingBuildingVE.prototype.createDisp = function () {
    this.loadResourceAsset();
  };
  ASurroundingBuildingVE.prototype.loadResourceAsset = function () {
    if (o.BasicModel.basicLoaderData.isItemAssetVersioned(this.assetFileName)) {
      this.dispComponent.addClip(this._buildingClip = this.loadExternalClip(this.assetClipName, null, this.getDispClipColor(), 0, false, this.hasBuildingPlaceHolder ? l.IsoHelper.view.getBuildingPlaceHolderClass(this.vo.width, this.vo.height) : null));
    } else {
      console.warn(this.assetFileName + " not versioned.");
    }
  };
  ASurroundingBuildingVE.prototype.getVELayerType = function () {
    return s.IsoLayerEnum.ISO_OBJECTS;
  };
  Object.defineProperty(ASurroundingBuildingVE.prototype, "hasBuildingPlaceHolder", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASurroundingBuildingVE.prototype, "delayLoadingUntilFree", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASurroundingBuildingVE.prototype, "surroundingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ASurroundingBuildingVE;
}(require("./489.js").AInteractiveIsoObjectVE);
exports.ASurroundingBuildingVE = r;
var l = require("./46.js");
a.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");