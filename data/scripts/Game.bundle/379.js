Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleFullScreenInputBlocker(e) {
    this.mc = e;
    this.mc.visible = false;
  }
  CastleFullScreenInputBlocker.prototype.onFullScreenChanged = function (e) {
    this.mc.visible = e.fullScreen;
  };
  CastleFullScreenInputBlocker.prototype.onChangeDisplayState = function (e) {
    switch (e.params[0]) {
      case a.StageDisplayState.FULL_SCREEN:
        this.mc.visible = true;
        break;
      case a.StageDisplayState.NORMAL:
        this.mc.visible = false;
    }
  };
  CastleFullScreenInputBlocker.prototype.removeListeners = function () {
    if (!o.currentBrowserInfo.isMobile) {
      r.CastleBasicController.getInstance().removeEventListener(s.CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE, this.bindFunction(this.onChangeDisplayState));
      if (this.mc.stage) {
        this.mc.stage.removeEventListener(o.FullScreenEvent.FULL_SCREEN, this.bindFunction(this.onFullScreenChanged));
      }
    }
  };
  return CastleFullScreenInputBlocker;
}();
exports.CastleFullScreenInputBlocker = n;
var o = require("./1.js");
var a = require("./1.js");
var s = require("./91.js");
var r = require("./15.js");