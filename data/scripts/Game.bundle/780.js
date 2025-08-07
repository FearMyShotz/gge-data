Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./781.js");
var s = function (e) {
  function BasicGateVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BasicGateVE, e);
  BasicGateVE.prototype.onRenderStrategyChanged = function (e) {
    this.updateDisp();
  };
  BasicGateVE.prototype.createDisp = function () {
    this.dispComponent.addClip(this._buildingClip = this.loadExternalClip(this.assetClipName, null));
    this.addScaffoldClip();
  };
  Object.defineProperty(BasicGateVE.prototype, "assetFileName", {
    get: function () {
      return "Castlewall" + this.getIsoEventSkinSkinSuffix();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ADefenceBuildingVE.prototype, "assetFileName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGateVE.prototype, "assetClipName", {
    get: function () {
      if (this.isTransparent) {
        return "Basic_Gate_Transparent" + this.getIsoEventSkinSkinSuffix();
      } else {
        return this.vo.getVisualClassName() + this.getIsoEventSkinSkinSuffix();
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ADefenceBuildingVE.prototype, "assetClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGateVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Gate1;
    },
    enumerable: true,
    configurable: true
  });
  return BasicGateVE;
}(a.ADefenceBuildingVE);
exports.BasicGateVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");