Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./166.js");
var s = require("./145.js");
var r = require("./194.js");
var l = function (e) {
  function EilandSlumSurroundingsVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EilandSlumSurroundingsVE, e);
  EilandSlumSurroundingsVE.prototype.createAdditionalClips = function () {
    this.additionalClips.addClips(s.IsoAdditionalClipEnum.EXCLAMATION_MARK3);
  };
  Object.defineProperty(EilandSlumSurroundingsVE.prototype, "assetClipName", {
    get: function () {
      return this.vo.name + "_" + this.vo.group + "_" + this.vo.getAreaKingdomName() + "_1";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ASurroundingBuildingVE.prototype, "assetClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EilandSlumSurroundingsVE.prototype, "assetFileName", {
    get: function () {
      return this.assetClipName;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ASurroundingBuildingVE.prototype, "assetFileName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EilandSlumSurroundingsVE.prototype.onMouseClick = function () {
    c.CastleComponent.dialogHandler.registerDefaultDialogs(u.CastleAquamarineShopDialog, new a.CastleGenericMerchantDialogProperties(null));
  };
  return EilandSlumSurroundingsVE;
}(r.ASurroundingBuildingVE);
exports.EilandSlumSurroundingsVE = l;
var c = require("./14.js");
var u = require("./3170.js");
o.classImplementsInterfaces(l, "ICollectableRendererList", "IIngameUICapable");