Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSuggestPeaceDialogProperties(t) {
    var i = e.call(this) || this;
    i._peaceOfferVO = t;
    return i;
  }
  n.__extends(CastleSuggestPeaceDialogProperties, e);
  Object.defineProperty(CastleSuggestPeaceDialogProperties.prototype, "peaceOfferVO", {
    get: function () {
      return this._peaceOfferVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSuggestPeaceDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleSuggestPeaceDialogProperties = o;