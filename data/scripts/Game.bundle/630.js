Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ResearchIconHelper() {}
  ResearchIconHelper.addResearchIcon = function (e, t, i = NaN, n = null) {
    a.MovieClipHelper.clearMovieClip(t);
    t.mouseChildren = false;
    var o = ResearchIconHelper.getIconClip("Icon_Research_Background");
    t.addChild(o);
    o.doWhenLoaded(function (a) {
      var s = e.icon();
      t.addChild(s);
      s.doWhenLoaded(function (e) {
        if (!isNaN(i)) {
          t.scaleX = t.scaleY = o.scaleY * i / o.height;
        }
        r.CastleMovieClipHelper.updateParentCache(e);
        if (n) {
          s.doWhenLoaded(n);
        }
      });
    });
  };
  ResearchIconHelper.getIconClip = function (e) {
    return new s.CastleGoodgameExternalClip(e, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e), null, 0, false);
  };
  return ResearchIconHelper;
}();
exports.ResearchIconHelper = n;
var o = require("./2.js");
var a = require("./2.js");
var s = require("./24.js");
var r = require("./41.js");