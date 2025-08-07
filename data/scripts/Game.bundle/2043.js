Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.TimerEvent;
var o = function () {
  function IsoController() {
    this._updateTimer = new d.Timer(1000, 0);
    this._updateTimer.start();
    this._updateTimer.addEventListener(n.TIMER, this.bindFunction(this.onTimerUpdate));
    this._processor = new r.IsoCommandProcessor();
    this._server = new p.IsoServerCommands();
    this._keyWords = new l.IsoKeyWordManager();
  }
  IsoController.prototype.destroy = function () {
    if (this._updateTimer) {
      this._updateTimer.removeEventListener(n.TIMER, this.bindFunction(this.onTimerUpdate));
      this._updateTimer = null;
    }
    this.unregisterViewUpdater();
    this._keyWords = null;
    this._server = null;
    this._processor = null;
  };
  IsoController.prototype.registerViewUpdater = function () {
    if (this.viewUpdater) {
      this.unregisterViewUpdater();
    }
    this._viewUpdater = new c.IsoUpdaterView();
    this.viewUpdater.init();
    return this.viewUpdater;
  };
  IsoController.prototype.unregisterViewUpdater = function () {
    if (this.viewUpdater) {
      this.viewUpdater.destroy();
    }
    this._viewUpdater = null;
  };
  Object.defineProperty(IsoController.prototype, "dataUpdater", {
    get: function () {
      var e = a.Iso.data;
      if (e) {
        return e.updater;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  IsoController.prototype.onTimerUpdate = function (e) {
    var t = u.CachedTimer.getCachedTimer();
    if (s.IsoHelper.view.isInIsoScreen) {
      if (this.dataUpdater) {
        this.dataUpdater.update(t);
      }
      if (this.viewUpdater && this.viewUpdater.isoRenderer.isReady) {
        this.viewUpdater.updateOnTimer(t);
      }
    }
  };
  Object.defineProperty(IsoController.prototype, "viewUpdater", {
    get: function () {
      return this._viewUpdater;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoController.prototype, "keyWords", {
    get: function () {
      return this._keyWords;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoController.prototype, "processor", {
    get: function () {
      return this._processor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoController.prototype, "server", {
    get: function () {
      return this._server;
    },
    enumerable: true,
    configurable: true
  });
  return IsoController;
}();
exports.IsoController = o;
var a = require("./34.js");
var s = require("./46.js");
var r = require("./2044.js");
var l = require("./2045.js");
var c = require("./2054.js");
var u = require("./30.js");
var d = require("./1.js");
var p = require("./2067.js");