Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./15.js");
var s = require("./17.js");
var r = require("./52.js");
var o = require("./4.js");
var l = function (e) {
  function BrowserStateFullscreenTrackingCommand() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.loginDone = false;
    return t;
  }
  i.__extends(BrowserStateFullscreenTrackingCommand, e);
  BrowserStateFullscreenTrackingCommand.prototype.execute = function (e = null) {
    if (!this.loginDone) {
      this.track();
      window.addEventListener("resize", this.bindFunction(this.onResize), false);
      this.loginDone = true;
    }
  };
  BrowserStateFullscreenTrackingCommand.prototype.track = function () {
    s.TrackingCache.getInstance().getEvent(a.TrackingEventIds.BROWSER_STATE).playerId = o.BasicModel.userData.playerID;
    s.TrackingCache.getInstance().sendEvent(a.TrackingEventIds.BROWSER_STATE);
  };
  BrowserStateFullscreenTrackingCommand.prototype.onResize = function () {
    if (this.delayer) {
      clearTimeout(this.delayer);
    }
    this.delayer = setTimeout(this.bindFunction(this.onCheckIfFullscreenChanged), 100);
  };
  BrowserStateFullscreenTrackingCommand.prototype.onCheckIfFullscreenChanged = function () {
    var e = window.document;
    var t = !!e.fullscreenElement || !!e.webkitFullscreenElement || !!e.mozFullScreenElement || !!e.msFullscreenElement;
    var n = window.screen.width;
    var i = window.screen.height;
    var a = e.body ? Math.max(e.body.clientWidth, window.innerWidth) : window.innerWidth;
    var s = e.body ? Math.max(e.body.clientHeight, window.innerHeight) : window.innerHeight;
    if (e.fullscreen || t || n === a && i === s) {
      this.track();
      window.removeEventListener("resize", this.bindFunction(this.onResize), false);
    }
  };
  return BrowserStateFullscreenTrackingCommand;
}(r.BasicTrackingCommand);
exports.BrowserStateFullscreenTrackingCommand = l;