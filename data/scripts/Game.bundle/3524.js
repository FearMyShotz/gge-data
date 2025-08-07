Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleMailGiftDialogProperties(t) {
    var i = e.call(this) || this;
    i._rewardID = t;
    return i;
  }
  n.__extends(CastleMailGiftDialogProperties, e);
  Object.defineProperty(CastleMailGiftDialogProperties.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleMailGiftDialogProperties;
}(require("./220.js").BasicProperties);
exports.CastleMailGiftDialogProperties = o;