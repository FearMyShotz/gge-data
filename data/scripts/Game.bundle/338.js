Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastlePanelEvent(t, i = null, n = false, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.panel = i;
    return a;
  }
  n.__extends(CastlePanelEvent, e);
  CastlePanelEvent.MOUSE_OVER_PANEL = "mouseoverpanel";
  CastlePanelEvent.MOUSE_OUT_PANEL = "mouseoutpanel";
  CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES = "RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES";
  CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES = "RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES";
  return CastlePanelEvent;
}(createjs.Event);
exports.CastlePanelEvent = o;