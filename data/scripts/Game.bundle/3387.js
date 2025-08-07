Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleAllianceBuyCustomizableBoostDialogProperties(t, i, n, o, a) {
    var s = e.call(this) || this;
    s.buffSeriesID = 0;
    s.isTemporaryBoosterActive = false;
    s.titleText = t;
    s.descriptionText = i;
    s.buffSeriesID = n;
    s.targetAllianceSublayer = o;
    s.isTemporaryBoosterActive = a;
    return s;
  }
  n.__extends(CastleAllianceBuyCustomizableBoostDialogProperties, e);
  return CastleAllianceBuyCustomizableBoostDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleAllianceBuyCustomizableBoostDialogProperties = o;