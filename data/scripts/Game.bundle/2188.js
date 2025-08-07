Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./24.js");
var a = createjs.MovieClip;
var s = function () {
  function LordEffectSourceItem(e) {
    var t = this;
    this._bonusVO = e;
    this._disp = new a();
    var i = this._bonusVO.effectSources.length > 1;
    e.effectSources.sort(function (e, t) {
      return e.order - t.order;
    }).forEach(function (n, o) {
      var a = t.createSourceMC(n, i);
      t._disp.addChild(a);
      a.x = t.getLayout(e.effectSources.length)[o][0];
      a.y = t.getLayout(e.effectSources.length)[o][1];
    });
  }
  LordEffectSourceItem.prototype.createSourceMC = function (e, t) {
    var i = LordEffectSourceItem.ASSET_CLIP_PREFIX + e.name + (t ? LordEffectSourceItem.ASSET_CLIP_SMALL_SUFFIX : "");
    return new o.CastleGoodgameExternalClip(i, n.BasicModel.basicLoaderData.getVersionedItemAssetUrl(LordEffectSourceItem.ASSET_NAME), null, 24, false);
  };
  LordEffectSourceItem.prototype.getLayout = function (e) {
    switch (e) {
      case 1:
        return LordEffectSourceItem.LAYOUT[0];
      case 2:
        return LordEffectSourceItem.LAYOUT[1];
      default:
        return LordEffectSourceItem.LAYOUT[2];
    }
  };
  Object.defineProperty(LordEffectSourceItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  LordEffectSourceItem.ASSET_NAME = "Effect_Source_Icons";
  LordEffectSourceItem.ASSET_CLIP_PREFIX = "Effect_Source_";
  LordEffectSourceItem.ASSET_CLIP_SMALL_SUFFIX = "_Small";
  LordEffectSourceItem.LAYOUT = [[[0, 0]], [[-5, 0], [5, 0]], [[-5, -5], [5, -5], [-5, 5], [5, 5]]];
  return LordEffectSourceItem;
}();
exports.LordEffectSourceItem = s;