Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function FactionEventMainDialogProperties(t = -1) {
    var i = this;
    i._layerID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._layerID = t;
    return i;
  }
  n.__extends(FactionEventMainDialogProperties, e);
  Object.defineProperty(FactionEventMainDialogProperties.prototype, "layerID", {
    get: function () {
      return this._layerID;
    },
    enumerable: true,
    configurable: true
  });
  return FactionEventMainDialogProperties;
}(require("./2.js").BasicProperties);
exports.FactionEventMainDialogProperties = o;