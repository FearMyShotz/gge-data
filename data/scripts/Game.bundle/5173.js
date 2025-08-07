Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleTroopSupportDialogProperties(t) {
    var i = e.call(this) || this;
    if (!t) {
      throw new ReferenceError("CastleTroopSupportVO must not be null!");
    }
    i._troopSupportVO = t;
    return i;
  }
  n.__extends(CastleTroopSupportDialogProperties, e);
  Object.defineProperty(CastleTroopSupportDialogProperties.prototype, "troopSupportVO", {
    get: function () {
      return this._troopSupportVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTroopSupportDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleTroopSupportDialogProperties = o;