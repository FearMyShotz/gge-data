Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSupportDefenceDialogProperties(t) {
    var i = e.call(this) || this;
    i._supportDefenceVO = t;
    return i;
  }
  n.__extends(CastleSupportDefenceDialogProperties, e);
  Object.defineProperty(CastleSupportDefenceDialogProperties.prototype, "supportDefenceVO", {
    get: function () {
      return this._supportDefenceVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSupportDefenceDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleSupportDefenceDialogProperties = o;