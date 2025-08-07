Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleMessageInfoDialogProperties(t) {
    var i = e.call(this) || this;
    i._infoId = t;
    return i;
  }
  n.__extends(CastleMessageInfoDialogProperties, e);
  Object.defineProperty(CastleMessageInfoDialogProperties.prototype, "infoId", {
    get: function () {
      return this._infoId;
    },
    enumerable: true,
    configurable: true
  });
  return CastleMessageInfoDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleMessageInfoDialogProperties = o;