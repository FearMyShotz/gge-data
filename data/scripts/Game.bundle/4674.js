Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function VCKCommandOkEvent(t, i = true, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(VCKCommandOkEvent, e);
  VCKCommandOkEvent.__initialize_static_members = function () {
    VCKCommandOkEvent.VCK_OK = "vck_ok";
  };
  return VCKCommandOkEvent;
}(createjs.Event);
exports.VCKCommandOkEvent = o;
o.__initialize_static_members();