Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleFameBoosterEventDialogProperties(t) {
    var i = e.call(this) || this;
    i._fameBoosterEventVO = t;
    return i;
  }
  n.__extends(CastleFameBoosterEventDialogProperties, e);
  Object.defineProperty(CastleFameBoosterEventDialogProperties.prototype, "fameBoosterEventVO", {
    get: function () {
      return this._fameBoosterEventVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleFameBoosterEventDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleFameBoosterEventDialogProperties = o;