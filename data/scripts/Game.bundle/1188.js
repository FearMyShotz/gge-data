Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./1.js");
var s = function () {
  function IsoDispCreatorCacheBehaviour() {}
  IsoDispCreatorCacheBehaviour.prototype.updateCache = function (e) {
    if (r.Iso.renderer.layers.transformLayer) {
      var t;
      if (e.dispContainer.cacheCanvas) {
        t = e.dispContainer.cacheCanvas;
        e.dispContainer.uncache();
      }
      var i = l.CastleMovieClipHelper.getScreenScaleY(e.dispContainer);
      var o = a.currentBrowserInfo.isEdge || a.currentBrowserInfo.isIE || i < 0.5 ? 0.6 : 1;
      var s = e.dispContainer.getBounds();
      if (s.width > 0 && s.height > 0) {
        if (t) {
          e.dispContainer.cacheCanvas = t;
        }
        try {
          e.dispContainer.cache(Math.floor(s.x), Math.floor(s.y), Math.ceil(s.width), Math.ceil(s.height), o);
        } catch (e) {
          n.warn("cache() failed!  bounds.x: " + Math.floor(s.x).toString() + " bounds.y: " + Math.floor(s.y).toString() + " bounds.width: " + Math.ceil(s.width).toString() + " bounds.height: " + Math.ceil(s.height).toString() + " More info: " + e);
        }
      }
    }
  };
  return IsoDispCreatorCacheBehaviour;
}();
exports.IsoDispCreatorCacheBehaviour = s;
var r = require("./33.js");
var l = require("./41.js");
o.classImplementsInterfaces(s, "IDispCreatorCacheBehaviour");