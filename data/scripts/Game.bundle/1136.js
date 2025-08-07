Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleNameValidationEvent(t, i = true, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleNameValidationEvent, e);
  CastleNameValidationEvent.VPN_OK = "VPN_OK";
  CastleNameValidationEvent.VLN_OK = "VLN_OK";
  return CastleNameValidationEvent;
}(createjs.Event);
exports.CastleNameValidationEvent = o;