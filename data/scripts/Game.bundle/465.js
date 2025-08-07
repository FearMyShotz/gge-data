Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function RewardsDialogScoreBarComponentExternal() {}
  RewardsDialogScoreBarComponentExternal.prototype.load = function (e, t, i, n, l, c, u) {
    r.MovieClipHelper.clearMovieClip(e);
    this._properties = u;
    var d = this.bindFunction(function (e) {
      var i = e.currentshownDisplayObject;
      this.scoreBar = new o.RewardsDialogScoreBarComponent(i, n, l, c, u);
      t();
    });
    var p = s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(i);
    var h = new a.CastleGoodgameExternalClip(i, p, null, 0, false);
    e.addChild(h);
    if (h.isLoaded) {
      d(h);
    } else {
      h.clipLoaded.addOnce(d);
    }
  };
  RewardsDialogScoreBarComponentExternal.prototype.destroy = function () {
    if (this.scoreBar) {
      this.scoreBar.destroy();
      this.scoreBar = null;
    }
  };
  RewardsDialogScoreBarComponentExternal.prototype.update = function (e) {
    if (this.scoreBar) {
      this.scoreBar.update(e);
    }
  };
  Object.defineProperty(RewardsDialogScoreBarComponentExternal.prototype, "properties", {
    get: function () {
      return this._properties;
    },
    enumerable: true,
    configurable: true
  });
  return RewardsDialogScoreBarComponentExternal;
}();
exports.RewardsDialogScoreBarComponentExternal = n;
var o = require("./3407.js");
var a = require("./24.js");
var s = require("./2.js");
var r = require("./2.js");