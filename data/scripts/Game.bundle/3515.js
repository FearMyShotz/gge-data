Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSeasonEventFailDialogProperties(t) {
    var i = e.call(this) || this;
    i.failedId = 0;
    i.failedId = t;
    return i;
  }
  n.__extends(CastleSeasonEventFailDialogProperties, e);
  Object.defineProperty(CastleSeasonEventFailDialogProperties.prototype, "copyTextID", {
    get: function () {
      return "dialog_season_loose_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeasonEventFailDialogProperties.prototype, "assetName", {
    get: function () {
      return "EventOver_" + this.failedId;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSeasonEventFailDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleSeasonEventFailDialogProperties = o;