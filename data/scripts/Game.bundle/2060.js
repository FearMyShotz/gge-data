Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function IsoMovementDispCreatorCacheBehaviour() {}
  IsoMovementDispCreatorCacheBehaviour.prototype.updateCache = function (e) {
    if (e.dispContainer.cacheCanvas) {
      e.dispContainer.updateCache();
    } else {
      var t = e.dispContainer.getBounds();
      if (t.width > 0 && t.height > 0) {
        e.dispContainer.doCache(e.additionalCacheSize);
      }
    }
  };
  return IsoMovementDispCreatorCacheBehaviour;
}();
exports.IsoMovementDispCreatorCacheBehaviour = o;
n.classImplementsInterfaces(o, "IDispCreatorCacheBehaviour");