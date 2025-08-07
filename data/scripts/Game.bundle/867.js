Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleZoomEvent(t, i, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).zoomType = i;
    return a;
  }
  n.__extends(CastleZoomEvent, e);
  CastleZoomEvent.__initialize_static_members = function () {
    CastleZoomEvent.ZOOM = "zoom";
    CastleZoomEvent.ZOOM_IN = "zoomin";
    CastleZoomEvent.ZOOM_OUT = "zoomout";
  };
  return CastleZoomEvent;
}(createjs.Event);
exports.CastleZoomEvent = o;
o.__initialize_static_members();