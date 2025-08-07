Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleRewardInfoDialogProperties(t = null) {
    var i = e.call(this) || this;
    i._collectableItem = t;
    return i;
  }
  n.__extends(CastleRewardInfoDialogProperties, e);
  Object.defineProperty(CastleRewardInfoDialogProperties.prototype, "collectableItem", {
    get: function () {
      return this._collectableItem;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRewardInfoDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleRewardInfoDialogProperties = o;