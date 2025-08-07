Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleInGameHelpDialogProperties(t) {
    var i = e.call(this) || this;
    i._category = t;
    return i;
  }
  n.__extends(CastleInGameHelpDialogProperties, e);
  Object.defineProperty(CastleInGameHelpDialogProperties.prototype, "inGameHelpActiveID", {
    get: function () {
      return this._category.key;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInGameHelpDialogProperties.prototype, "category", {
    get: function () {
      return this._category;
    },
    enumerable: true,
    configurable: true
  });
  return CastleInGameHelpDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleInGameHelpDialogProperties = o;