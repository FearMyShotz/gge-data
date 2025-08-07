Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = require("./145.js");
var r = require("./1557.js");
var l = function (e) {
  function CustomDecoBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CustomDecoBuildingVE, e);
  CustomDecoBuildingVE.prototype.createAdditionalClips = function () {
    e.prototype.createAdditionalClips.call(this);
    if (!!this.buildingVO.buildingState.isFunctionally && (this.vo.wodId == a.ClientConstCastle.COLOSS_DECO_WOD || this.vo.wodId == a.ClientConstCastle.COIN_COLOSSUS_DECO_WOD)) {
      this.additionalClips.addClips(s.IsoAdditionalClipEnum.COLOSSUS_FIRE);
    }
  };
  Object.defineProperty(CustomDecoBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ADecoBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CustomDecoBuildingVE;
}(r.ADecoBuildingVE);
exports.CustomDecoBuildingVE = l;
o.classImplementsInterfaces(l, "ICollectableRendererList", "IIngameUICapable");