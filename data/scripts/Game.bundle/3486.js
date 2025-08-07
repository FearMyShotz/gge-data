Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./67.js");
var s = require("./19.js");
var r = require("./25.js");
var l = require("./34.js");
var c = createjs.Point;
var u = function (e) {
  function SeasonLeagueEndDialogMedals(t, i = false) {
    var n = this;
    n._useAllianceMedals = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._useAllianceMedals = i;
    return n;
  }
  n.__extends(SeasonLeagueEndDialogMedals, e);
  SeasonLeagueEndDialogMedals.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.updateRewards();
  };
  SeasonLeagueEndDialogMedals.prototype.updateRewards = function () {
    r.CollectableRenderHelper.displayMultipleItemsComplete(this, new a.CollectableRenderClipsList(this.subLayerDisp, "mc_item"), this.useAllianceMedals ? this.dialogProperties.allianceMedals : this.dialogProperties.seasonMedals, new s.CollectableRenderOptions(s.CollectableRenderOptions.SET_DEFAULT, new c(55, 55)));
  };
  Object.defineProperty(SeasonLeagueEndDialogMedals.prototype, "dialogProperties", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogMedals.prototype, "useAllianceMedals", {
    get: function () {
      return this._useAllianceMedals;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueEndDialogMedals;
}(l.CastleDialogSubLayer);
exports.SeasonLeagueEndDialogMedals = u;
o.classImplementsInterfaces(u, "ICollectableRendererList", "ISublayer");