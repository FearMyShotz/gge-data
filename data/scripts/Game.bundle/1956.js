Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleMessageTipDialogProperties(t = null, i = -1, n = -1) {
    var o = this;
    o._offerID = 0;
    o._privateOfferType = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).messageVO = t;
    if (t) {
      o._offerID = t.offerID;
      o._privateOfferType = t.privateOfferType;
    } else {
      o._offerID = i;
      o._privateOfferType = n;
    }
    return o;
  }
  n.__extends(CastleMessageTipDialogProperties, e);
  Object.defineProperty(CastleMessageTipDialogProperties.prototype, "offerID", {
    get: function () {
      return this._offerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageTipDialogProperties.prototype, "privateOfferType", {
    get: function () {
      return this._privateOfferType;
    },
    enumerable: true,
    configurable: true
  });
  return CastleMessageTipDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleMessageTipDialogProperties = o;