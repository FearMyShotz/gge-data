Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./55.js");
var r = require("./24.js");
var l = require("./46.js");
var c = require("./158.js");
var u = createjs.Point;
var d = function (e) {
  function CollectableItemEffectVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemEffectVE, e);
  CollectableItemEffectVE.prototype.iconCreate = function () {
    this.scaleManually = true;
    var e = CollectableItemEffectVE.ASSET_NAME_PREFIX + this.effectVO.effectId;
    if (o.BasicModel.basicLoaderData.isItemAssetVersioned(e)) {
      this.dispCreator.addClip(new r.CastleGoodgameExternalClip(e, l.IsoHelper.view.getAssetFileURL(e), null, 0, false));
    }
    if (this.effectVO.isTemporary) {
      this.dispCreator.addClip(new r.CastleGoodgameExternalClip(CollectableItemEffectVE.TEMP_ASSET_NAME, l.IsoHelper.view.getAssetFileURL(CollectableItemEffectVE.TEMP_ASSET_NAME), null, 0, false));
    }
  };
  CollectableItemEffectVE.prototype.onAllDispClipsLoaded = function (t = null) {
    var i = this.options.icon.dimension;
    for (var n = 0, o = this.dispCreator.clipList; n < o.length; n++) {
      var a = o[n];
      if (a !== undefined) {
        a.scaleX = a.scaleY = s.ClientConstUtils.getScaleFactorForFitInBounds(new u(a.width, a.height), i);
      }
    }
    e.prototype.onAllDispClipsLoaded.call(this, t);
  };
  Object.defineProperty(CollectableItemEffectVE.prototype, "effectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemEffectVE.__initialize_static_members = function () {
    CollectableItemEffectVE.TEMP_ASSET_NAME = CollectableItemEffectVE.ASSET_NAME_PREFIX + "Temp";
  };
  CollectableItemEffectVE.ASSET_NAME_PREFIX = "Effect_Icon_";
  return CollectableItemEffectVE;
}(c.ACollectableItemVE);
exports.CollectableItemEffectVE = d;
a.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();