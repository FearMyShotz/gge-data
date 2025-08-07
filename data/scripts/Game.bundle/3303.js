Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./24.js");
var r = require("./46.js");
var l = function (e) {
  function CollectableItemSeasonLeagueMedalVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemSeasonLeagueMedalVE, e);
  CollectableItemSeasonLeagueMedalVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemSeasonLeagueMedalVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemSeasonLeagueMedalVE.prototype.iconCreate = function () {
    var e = a.int(this.medalVO && this.medalVO.id > 0 ? this.medalVO.id : 0);
    this.dispCreator.addClip(new s.CastleGoodgameExternalClip(CollectableItemSeasonLeagueMedalVE.ASSET_CLIP_NAME_PREFIX + e, r.IsoHelper.view.getAssetFileURL(CollectableItemSeasonLeagueMedalVE.ASSET_FILE_NAME)));
  };
  Object.defineProperty(CollectableItemSeasonLeagueMedalVE.prototype, "medalVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemSeasonLeagueMedalVE.ASSET_CLIP_NAME_PREFIX = "SeasonLeagueMedal_";
  CollectableItemSeasonLeagueMedalVE.ASSET_FILE_NAME = "SeasonLeagueMedals";
  return CollectableItemSeasonLeagueMedalVE;
}(require("./158.js").ACollectableItemVE);
exports.CollectableItemSeasonLeagueMedalVE = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");