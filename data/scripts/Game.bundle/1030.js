Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleRefineryToolsmithDialogProperties(t = 1) {
    var i = e.call(this) || this;
    i._queueID = t;
    return i;
  }
  n.__extends(CastleRefineryToolsmithDialogProperties, e);
  Object.defineProperty(CastleRefineryToolsmithDialogProperties.prototype, "queueID", {
    get: function () {
      return this._queueID;
    },
    set: function (e) {
      this._queueID = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRefineryToolsmithDialogProperties;
}(require("./219.js").BasicProperties);
exports.CastleRefineryToolsmithDialogProperties = o;