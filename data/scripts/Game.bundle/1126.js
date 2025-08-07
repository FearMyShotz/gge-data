Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastlePointBoosterDialogProperties(t) {
    var i = this;
    i._boosterID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._boosterID = t;
    return i;
  }
  n.__extends(CastlePointBoosterDialogProperties, e);
  Object.defineProperty(CastlePointBoosterDialogProperties.prototype, "boosterID", {
    get: function () {
      return this._boosterID;
    },
    enumerable: true,
    configurable: true
  });
  return CastlePointBoosterDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastlePointBoosterDialogProperties = o;