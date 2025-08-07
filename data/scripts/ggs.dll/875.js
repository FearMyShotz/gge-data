Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = function () {
  function CacheHelper() {}
  CacheHelper.cacheGraphic = function (e, t = 5000, n = 5000) {
    e.uncache();
    var i = e.getBounds();
    if (i.width > 0 && i.height > 0 && i.width <= t && i.height <= n) {
      if (e.cacheCanvas) {
        e.updateCache();
      } else {
        e.cache(i.x, i.y, i.width, i.height);
      }
    } else {
      CacheHelper.logger.warn("Could not cache Graphic " + e.name + ", because size is " + i.width + "x" + i.height);
    }
  };
  CacheHelper.showWhatsCached = function (e = null) {
    for (var t = e || window.gamestage, n = 0; n < t.numChildren; n++) {
      if (CacheHelper._showCacheMarkers) {
        CacheHelper.hideWhatsCachedOnContainer(t.getChildAt(n));
      } else {
        CacheHelper.showWhatsCachedOfContainer(t.getChildAt(n));
      }
    }
    CacheHelper._showCacheMarkers = !CacheHelper._showCacheMarkers;
  };
  CacheHelper.showWhatsCachedOfContainer = function (e) {
    for (var t = 0; t < e.numChildren; t++) {
      var n = e.getChildAt(t);
      if (n.name != CacheHelper.markerName && n.cacheCanvas) {
        var i = new createjs.Shape();
        var a = n.getBounds();
        i.graphics.beginFill(CacheHelper.markerColor, CacheHelper.markerAlpha);
        i.graphics.drawCircle(a.right - a.left / 2, a.top - a.bottom / 2, 25);
        i.graphics.endFill();
        i.name = CacheHelper.markerName;
        n.addChild(i);
        n.updateCache();
      }
      if (n instanceof createjs.Container && n.numChildren > 0) {
        CacheHelper.showWhatsCachedOfContainer(n);
      }
    }
  };
  CacheHelper.hideWhatsCachedOnContainer = function (e) {
    for (var t = 0; t < e.numChildren; t++) {
      var n = e.getChildAt(t);
      if (n.name == CacheHelper.markerName) {
        var i = n.parent;
        i.removeChild(n);
        if (i.cacheCanvas) {
          i.updateCache();
        }
        t--;
      } else if (n instanceof createjs.Container && n.numChildren > 0) {
        CacheHelper.hideWhatsCachedOnContainer(n);
      }
    }
  };
  CacheHelper._showCacheMarkers = false;
  CacheHelper.markerName = "CacheMarker";
  CacheHelper.markerColor = "#ff0000";
  CacheHelper.markerAlpha = 0.85;
  CacheHelper.logger = i.getLogger("CacheHelper");
  return CacheHelper;
}();
exports.CacheHelper = a;