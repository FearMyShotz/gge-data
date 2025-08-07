Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleCollectTaxElementEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleCollectTaxElementEvent, e);
  CastleCollectTaxElementEvent.__initialize_static_members = function () {
    CastleCollectTaxElementEvent.START_TAX_COLLECTION = "startTaxCollection";
  };
  return CastleCollectTaxElementEvent;
}(createjs.Event);
exports.CastleCollectTaxElementEvent = o;
o.__initialize_static_members();