Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastlePlayerGiftSelectionProperties(t) {
    var i = this;
    i._playerID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._playerID = t;
    return i;
  }
  n.__extends(CastlePlayerGiftSelectionProperties, e);
  Object.defineProperty(CastlePlayerGiftSelectionProperties.prototype, "playerID", {
    get: function () {
      return this._playerID;
    },
    enumerable: true,
    configurable: true
  });
  return CastlePlayerGiftSelectionProperties;
}(require("./2.js").BasicProperties);
exports.CastlePlayerGiftSelectionProperties = o;