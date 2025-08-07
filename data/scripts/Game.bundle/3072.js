Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./145.js");
var r = function (e) {
  function OfferBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OfferBuildingVE, e);
  OfferBuildingVE.prototype.createDisp = function () {
    this.dispComponent.addClip(this.loadExternalClip(this.assetClipName));
  };
  OfferBuildingVE.prototype.createAdditionalClips = function () {
    this.additionalClips.addClips(s.IsoAdditionalClipEnum.CAMP_FIRE);
    this.additionalClips.addClips(s.IsoAdditionalClipEnum.EXCLAMATION_MARK);
  };
  OfferBuildingVE.prototype.onMouseClick = function () {
    o.CommandController.instance.executeCommand(l.IngameClientCommands.OPEN_PRIVATE_OFFER_DIALOG_COMMAND, this.offerBuildingVO.offerVO);
  };
  Object.defineProperty(OfferBuildingVE.prototype, "offerBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return OfferBuildingVE;
}(require("./1031.js").AEventBuildingVE);
exports.OfferBuildingVE = r;
var l = require("./29.js");
a.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");