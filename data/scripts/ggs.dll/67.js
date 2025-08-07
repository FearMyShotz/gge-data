Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = createjs.EventDispatcher;
var s = createjs.LoadQueue;
var r = createjs.Event;
var o = require("./340.js");
var l = require("./2.js").getLogger("BulkLoader");
var u = function (e) {
  function BulkLoader(t) {
    var n = e.call(this) || this;
    n.loadingList = new Map();
    n.loadQueue = new s();
    n._numConnections = 0;
    n.id = t;
    n.loadQueue.setMaxConnections(50);
    n.loadQueue.maintainScriptOrder = true;
    if (t === "assetLoader") {
      window.AssetLoader = n.loadQueue;
    }
    n.loadQueue.on(BulkLoader.COMPLETE, function (e) {
      setTimeout(function () {
        n.dispatchEvent(new r(r.COMPLETE, true));
      }, 1);
    }, n);
    n.loadQueue.on(BulkLoader.ERROR, function (e) {
      setTimeout(function () {
        n.dispatchEvent(e);
      }, 1);
    }, n);
    return n;
  }
  i.__extends(BulkLoader, e);
  BulkLoader.prototype.start = function (e = -1) {
    if (e > 0) {
      this._numConnections = e;
    }
  };
  BulkLoader.prototype.add = function (e, t) {
    var n;
    t.src = e;
    if (this.isLoaded(e)) {
      if ((n = BulkLoader.loadedList.get(e)).loaded) {
        var i = new createjs.LoaderEvent(r.COMPLETE, false, true);
        i.result = n.getResult();
        i.url = e;
        i.rawResult = n.getResult(e, true);
        setTimeout(function () {
          n.dispatchEvent(i);
        }, 1);
      }
    } else {
      n = this.loadQueue.loadFile(t);
    }
    return n;
  };
  BulkLoader.prototype.addAssetBundle = function (e, t) {
    var n = this;
    if (this.loadingList.has(e)) {
      return this.loadingList.get(e);
    }
    var i = e + ".js";
    var a = e + ".json";
    var s = new o.LoadingItem();
    this.loadingList.set(e, s);
    var u = 0;
    function c(t, i) {
      BulkLoader.loadedList.set(e + "." + i.currentTarget._item.ext, i.currentTarget);
      if (++u === 2) {
        var a = new createjs.LoaderEvent(r.COMPLETE, false, true);
        a.url = e;
        l.debug("Finished loading: " + e);
        n.loadingList.delete(e);
        var o = t.replace("Script", "");
        var c = window.setInterval(function () {
          if (window.AssetLoader.getResult(o)) {
            window.clearInterval(c);
            s.dispatchEvent(a);
          }
        }, 2);
      }
    }
    if (this.isLoaded(i)) {
      u++;
    } else {
      var _ = this.add(i, {
        id: t.id + "Script",
        type: createjs.AbstractLoader.JAVASCRIPT,
        priority: t.priority || 1
      });
      _.addEventListener(r.COMPLETE, c.bind(this, t.id + "Script"));
      _.addEventListener(r.COMPLETE, function (e) {
        _.removeAllEventListeners();
      });
      _.addEventListener("error", function (e) {
        s.onLoadingErrorOccured();
        setTimeout(function () {
          if (s.errorTryCount < 3) {
            l.warn("A js loading error occured, but we will try again.");
            _.load();
          } else {
            s.dispatchEvent(e);
            _.removeAllEventListeners();
          }
        }, 1);
      });
      _.addEventListener("fileerror", function (e) {
        s.onLoadingErrorOccured();
        setTimeout(function () {
          if (s.errorTryCount < 3) {
            l.warn("A js loading error occured, but we will try again.");
            _.load();
          } else {
            s.dispatchEvent(e);
            _.removeAllEventListeners();
          }
        }, 1);
      });
    }
    if (this.isLoaded(a)) {
      u++;
    } else {
      var d = this.add(a, {
        id: t.id,
        type: createjs.AbstractLoader.SPRITESHEET,
        priority: t.priority || 1
      });
      d.addEventListener(r.COMPLETE, c.bind(this, t.id));
      d.addEventListener(r.COMPLETE, function (e) {
        d.removeAllEventListeners();
      });
      d.addEventListener("error", function (e) {
        s.onLoadingErrorOccured();
        setTimeout(function () {
          if (s.errorTryCount < 3) {
            l.warn("A Spritesheet loading error occured, but we will try again.");
            d.load();
          } else {
            s.dispatchEvent(e);
            d.removeAllEventListeners();
          }
        }, 1);
      });
      d.addEventListener("fileerror", function (e) {
        s.onLoadingErrorOccured();
        setTimeout(function () {
          if (s.errorTryCount < 3) {
            l.warn("A Spritesheet loading error occured, but we will try again.");
            d.load();
          } else {
            s.dispatchEvent(e);
            d.removeAllEventListeners();
          }
        }, 1);
      });
    }
    if (this.isLoaded(i) && this.isLoaded(a)) {
      s._isLoaded = true;
    }
    return s;
  };
  Object.defineProperty(BulkLoader.prototype, "isRunning", {
    get: function () {
      return !this.loadQueue.loaded;
    },
    enumerable: true,
    configurable: true
  });
  BulkLoader.prototype.removeAll = function () {
    this.loadQueue.cancel();
    this.loadQueue.removeAll();
    this.loadQueue.close();
  };
  BulkLoader.prototype.isLoaded = function (e) {
    return BulkLoader.loadedList.has(e) || BulkLoader.loadedList.has(e + ".js") && BulkLoader.loadedList.has(e + ".json") && BulkLoader.loadedList.get(e + ".json").loaded;
  };
  Object.defineProperty(BulkLoader.prototype, "isFinished", {
    get: function () {
      return this.loadQueue._loadQueue.length === 0;
    },
    enumerable: true,
    configurable: true
  });
  BulkLoader.loadedList = new Map();
  BulkLoader.COMPLETE = "complete";
  BulkLoader.PROGRESS = "progress";
  BulkLoader.ERROR = "error";
  BulkLoader.FILE_LOAD = "fileload";
  BulkLoader.FILE_PROGRESS = "fileprogress";
  return BulkLoader;
}(a);
exports.BulkLoader = u;