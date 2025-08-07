Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastlePlayerGiftSentDialogProperties(t) {
    var i = e.call(this) || this;
    i._playerName = t;
    return i;
  }
  n.__extends(CastlePlayerGiftSentDialogProperties, e);
  Object.defineProperty(CastlePlayerGiftSentDialogProperties.prototype, "playerName", {
    get: function () {
      return this._playerName;
    },
    enumerable: true,
    configurable: true
  });
  return CastlePlayerGiftSentDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastlePlayerGiftSentDialogProperties = o;