Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./69.js");
var r = require("./54.js");
var l = require("./4.js");
var c = createjs.TimerEvent;
var u = function (e) {
  function UpgradableLandmarkData() {
    var t = this;
    t._currentlyShownLandmarks = [];
    t._alreadyReset = false;
    t._remainingResetTime = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(UpgradableLandmarkData, e);
  UpgradableLandmarkData.prototype.addToShownList = function (e) {
    if (!(this._currentlyShownLandmarks.indexOf(e) > -1)) {
      this._currentlyShownLandmarks.push(e);
    }
  };
  UpgradableLandmarkData.prototype.resetShownLandmarks = function () {
    if (this._currentlyShownLandmarks != null) {
      for (var e = 0, t = this._currentlyShownLandmarks; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.reset();
        }
      }
    }
    this._currentlyShownLandmarks = [];
  };
  UpgradableLandmarkData.prototype.updateLandmark = function (e) {
    var t = this.userList.getVOByID(e.OID);
    if (t) {
      t.updateProgress(e.OID, e.CP);
    }
  };
  UpgradableLandmarkData.prototype.resetLandmarks = function () {
    if (!this._alreadyReset) {
      this.resetShownLandmarks();
      this._alreadyReset = true;
      var e = new o.Timer(10000, 1);
      e.addEventListener(c.TIMER_COMPLETE, this.bindFunction(this.onResetWarningCooldown));
      e.start();
    }
  };
  UpgradableLandmarkData.prototype.onResetWarningCooldown = function (e) {
    var t = e.target;
    t.stop();
    t = null;
    this._alreadyReset = false;
  };
  UpgradableLandmarkData.prototype.resetComplete = function () {
    this.resetLandmarks();
    if (d.CastleLayoutManager.getInstance().currentState == d.CastleLayoutManager.STATE_WORLDMAP) {
      var e = d.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
      l.CastleModel.worldmapData.updateAreaRange(e.x, e.y, e.x + e.width, e.y + e.height);
    }
  };
  Object.defineProperty(UpgradableLandmarkData.prototype, "userList", {
    get: function () {
      throw new s.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  return UpgradableLandmarkData;
}(r.CastleBasicData);
exports.UpgradableLandmarkData = u;
var d = require("./17.js");
a.classImplementsInterfaces(u, "IUpdatable");