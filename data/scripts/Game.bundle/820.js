Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function PrebuiltCastleResponseEvent(t) {
    var i = this;
    i.isError = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this, PrebuiltCastleResponseEvent.RESPONSE, false, false) || this).isError = t;
    return i;
  }
  n.__extends(PrebuiltCastleResponseEvent, e);
  PrebuiltCastleResponseEvent.__initialize_static_members = function () {
    PrebuiltCastleResponseEvent.RESPONSE = "response";
  };
  return PrebuiltCastleResponseEvent;
}(createjs.Event);
exports.PrebuiltCastleResponseEvent = o;
o.__initialize_static_members();