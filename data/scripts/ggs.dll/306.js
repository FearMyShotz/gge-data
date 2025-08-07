Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./15.js");
var s = require("./13.js");
var r = require("./5.js");
var o = require("./4.js");
var l = function (e) {
  function BrowserStateFullscreenTrackingEvent(t) {
    var n = e.call(this, t) || this;
    n.playerId = 0;
    return n;
  }
  i.__extends(BrowserStateFullscreenTrackingEvent, e);
  BrowserStateFullscreenTrackingEvent.prototype.getVars = function () {
    var e = window.document;
    var t = !!e.fullscreenElement || !!e.webkitFullscreenElement || !!e.mozFullScreenElement || !!e.msFullscreenElement;
    var n = {
      eventId: a.TrackingEventIds.BROWSER_STATE,
      event_mapping_version: 2,
      playerId: this.playerId
    };
    n.sessionId = this.getUniqueIdForDayAndPlayer();
    var i = window.screen.width;
    var s = window.screen.height;
    var r = e.body ? Math.max(e.body.clientWidth, window.innerWidth) : window.innerWidth;
    var o = e.body ? Math.max(e.body.clientHeight, window.innerHeight) : window.innerHeight;
    n.browser_state = e.fullscreen || t || i === r && s === o ? BrowserStateFullscreenTrackingEvent.BROWSER_STATE_FULLSCREEN : BrowserStateFullscreenTrackingEvent.BROWSER_STATE_WINDOWED;
    n.full_screen_state = t ? BrowserStateFullscreenTrackingEvent.BROWSER_STATE_FULLSCREEN : BrowserStateFullscreenTrackingEvent.BROWSER_STATE_WINDOWED;
    return n;
  };
  BrowserStateFullscreenTrackingEvent.prototype.getUniqueIdForDayAndPlayer = function () {
    var e = new Date();
    var t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
    var n = Math.round(t.time / 10000000);
    var i = r.EnvGlobalsHandler.globals;
    var a = this.playerId;
    var s = o.BasicModel.instanceProxy.selectedInstanceVO.zoneId;
    return parseInt(n + "" + i.gameId + s + a);
  };
  BrowserStateFullscreenTrackingEvent.BROWSER_STATE_WINDOWED = 1;
  BrowserStateFullscreenTrackingEvent.BROWSER_STATE_FULLSCREEN = 2;
  return BrowserStateFullscreenTrackingEvent;
}(s.BasicTrackingEvent);
exports.BrowserStateFullscreenTrackingEvent = l;