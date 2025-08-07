Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CachedTimer() {}
  CachedTimer.getCachedTimer = function () {
    if (CachedTimer.dirty || document.visibilityState == "hidden") {
      return CachedTimer.getFreshTimer();
    } else {
      return CachedTimer.cachedTimer;
    }
  };
  CachedTimer.clearCachedTimer = function () {
    CachedTimer.dirty = true;
  };
  CachedTimer.getFreshTimer = function () {
    CachedTimer.cachedTimer = Date.now();
    CachedTimer.dirty = false;
    return CachedTimer.cachedTimer;
  };
  CachedTimer.__initialize_static_members = function () {
    CachedTimer.cachedTimer = 0;
  };
  CachedTimer.dirty = true;
  return CachedTimer;
}();
exports.CachedTimer = n;
n.__initialize_static_members();