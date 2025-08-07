Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./24.js");
var r = function (e) {
  function ACollectableItemPermanentSlotVE() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(ACollectableItemPermanentSlotVE, e);
  ACollectableItemPermanentSlotVE.prototype.iconCreate = function () {
    this.dispCreator.addClip(this._clip = new s.CastleGoodgameExternalClip(ACollectableItemPermanentSlotVE.PERMANENT_UNIT_AND_TOOL_SLOT, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(ACollectableItemPermanentSlotVE.PERMANENT_UNIT_AND_TOOL_SLOT), null, 0, false));
  };
  Object.defineProperty(ACollectableItemPermanentSlotVE.prototype, "iconMcFrame", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  ACollectableItemPermanentSlotVE.prototype.onAllDispClipsLoaded = function (t = null) {
    this._clip.currentshownDisplayObject.gotoAndStop(this.iconMcFrame);
    e.prototype.onAllDispClipsLoaded.call(this, t);
  };
  ACollectableItemPermanentSlotVE.__initialize_static_members = function () {
    ACollectableItemPermanentSlotVE.PERMANENT_UNIT_AND_TOOL_SLOT = "UnitAToolSlot";
  };
  return ACollectableItemPermanentSlotVE;
}(require("./158.js").ACollectableItemVE);
exports.ACollectableItemPermanentSlotVE = r;
a.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();