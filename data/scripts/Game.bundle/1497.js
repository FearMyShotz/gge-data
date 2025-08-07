Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleResourceCartsDataEvent(t, i = null, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(CastleResourceCartsDataEvent, e);
  CastleResourceCartsDataEvent.__initialize_static_members = function () {
    CastleResourceCartsDataEvent.DATA_CHANGED = "datachanged";
    CastleResourceCartsDataEvent.ON_RESOURCE_DROPPED = "onResourceDropped";
  };
  return CastleResourceCartsDataEvent;
}(createjs.Event);
exports.CastleResourceCartsDataEvent = o;
o.__initialize_static_members();