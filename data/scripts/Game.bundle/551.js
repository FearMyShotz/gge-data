Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function PPDDExternalPart(e, t) {
    a.MovieClipHelper.clearMovieClip(e);
    if (o.BasicModel.basicLoaderData.isItemAssetVersioned(t)) {
      e.addChild(this.loadClip(t));
    }
  }
  PPDDExternalPart.prototype.loadClip = function (e) {
    var t = o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
    this.clip = new s.CastleGoodgameExternalClip(e, t, null, 0, false);
    if (this.clip.isLoaded) {
      this.onDisplayObjectClipIsLoaded(this.clip);
    } else {
      this.clip.clipLoaded.addOnceWithPriority(this.bindFunction(this.onDisplayObjectClipIsLoaded));
    }
    return this.clip;
  };
  PPDDExternalPart.prototype.onDisplayObjectClipIsLoaded = function (e = null) {};
  Object.defineProperty(PPDDExternalPart.prototype, "clipDisp", {
    get: function () {
      return this.clip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PPDDExternalPart.prototype, "isLoaded", {
    get: function () {
      return !!this.clip && this.clip.isLoaded;
    },
    enumerable: true,
    configurable: true
  });
  return PPDDExternalPart;
}();
exports.PPDDExternalPart = n;
var o = require("./2.js");
var a = require("./2.js");
var s = require("./24.js");