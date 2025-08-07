Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./28.js");
var a = function (e) {
  function FullScreenEvent(t, n = false, i = false, a = false, s = false) {
    var r = e.call(this, t, n, i) || this;
    r._fullScreen = a;
    r._interactive = s;
    return r;
  }
  i.__extends(FullScreenEvent, e);
  Object.defineProperty(FullScreenEvent.prototype, "fullScreen", {
    get: function () {
      return this._fullScreen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FullScreenEvent.prototype, "interactive", {
    get: function () {
      return this._interactive;
    },
    enumerable: true,
    configurable: true
  });
  FullScreenEvent.prototype.clone = function () {
    return new FullScreenEvent(this.type, this.bubbles, this.cancelable, this._fullScreen, this._interactive);
  };
  FullScreenEvent.FULL_SCREEN = "fullScreen";
  FullScreenEvent.FULL_SCREEN_INTERACTIVE_ACCEPTED = "fullScreenInteractiveAccepted";
  return FullScreenEvent;
}(createjs.Event);
exports.FullScreenEvent = a;