Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./153.js");
var r = require("./145.js");
var l = require("./1557.js");
var c = function (e) {
  function DecoBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DecoBuildingVE, e);
  DecoBuildingVE.prototype.createAdditionalClips = function () {
    e.prototype.createAdditionalClips.call(this);
    if (this.vo.type == "KingOfCommunity") {
      this.additionalClips.addClips(r.IsoAdditionalClipEnum.KOC_FIRE1);
      this.additionalClips.addClips(r.IsoAdditionalClipEnum.KOC_FIRE2);
      this.additionalClips.addClips(r.IsoAdditionalClipEnum.KOC_FIRE3);
      this.additionalClips.addClips(r.IsoAdditionalClipEnum.KOC_FIRE4);
    }
  };
  Object.defineProperty(DecoBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      if (this.decoBuildingVO.allBuildingEffects.length > 0) {
        return Library.CastleInterfaceElements_Icons.Icon_BuildingWithEffect;
      } else {
        return Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ADecoBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DecoBuildingVE.prototype.getRingMenuButtons = function () {
    var t = e.prototype.getRingMenuButtons.call(this);
    t.push(new u.RingMenuButtonFusionForge());
    return t;
  };
  DecoBuildingVE.prototype.onAllDispClipsLoaded = function () {
    e.prototype.onAllDispClipsLoaded.call(this);
    if (this.vo.type == "KingOfCommunity" && this.buildingClip) {
      var t = a.int(this.isoRenderer.isoData.areaData.areaInfo.kingdomID);
      var i = this.buildingClip.currentshownDisplayObject;
      i.getChildByName("mc_sand").visible = t == s.KingdomEnum.DESSERT.id;
      i.getChildByName("mc_snow").visible = t == s.KingdomEnum.ICE.id;
      i.getChildByName("mc_volcano").visible = t == s.KingdomEnum.VOLCANO.id;
    }
  };
  return DecoBuildingVE;
}(l.ADecoBuildingVE);
exports.DecoBuildingVE = c;
var u = require("./2920.js");
o.classImplementsInterfaces(c, "ICollectableRendererList", "IIngameUICapable");