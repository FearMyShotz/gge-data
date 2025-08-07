Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./406.js");
var a = require("./407.js");
var s = require("./3.js");
var r = require("./3.js");
var o = createjs.Event;
var l = createjs.IOErrorEvent;
var u = createjs.ProgressEvent;
var c = createjs.SecurityErrorEvent;
var _ = require("./20.js");
var d = function () {
  function GoodgameLoader(e, t = true) {
    this._isLoading = false;
    this._loadingError = new _.Signal();
    this._loadingQueueElementFinished = new _.Signal();
    this._loadingQueueElementStarted = new _.Signal();
    this._loaderMap = new Map();
    this._queue = [];
    this._finishedQueueEndElements = new Array();
    this.subloaderErrorLogging = true;
    this._loaderID = e;
    this.subloaderErrorLogging = t;
  }
  Object.defineProperty(GoodgameLoader.prototype, "loaderID", {
    get: function () {
      return this._loaderID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameLoader.prototype, "isLoading", {
    get: function () {
      return this._isLoading;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameLoader.prototype, "loadingError", {
    get: function () {
      return this._loadingError;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameLoader.prototype, "loadingQueueElementFinished", {
    get: function () {
      return this._loadingQueueElementFinished;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameLoader.prototype, "loadingQueueElementStarted", {
    get: function () {
      return this._loadingQueueElementStarted;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameLoader.prototype.addCookieSaverLoader = function (e, t = "", n = null, a = null, _ = null, d = false, m = false) {
    if (this._loaderMap.get(e) && d != 1) {
      return this._loaderMap.get(e);
    }
    if (this._loaderMap.get(e) && d == 1) {
      var h = this._loaderMap.get(e);
      var p = h.loaderInstance;
      p.contentLoaderInfo.removeEventListener(l.IO_ERROR, h.bindFunction(h.handleLoaderIOError));
      p.contentLoaderInfo.removeEventListener(c.SECURITY_ERROR, h.bindFunction(h.handleLoaderSecurityError));
      p.contentLoaderInfo.removeEventListener(u.PROGRESS, h.bindFunction(h.onLoadProgress));
      p.contentLoaderInfo.removeEventListener(o.COMPLETE, h.bindFunction(h.onComplete));
      h.dispose();
    }
    if (!t) {
      return null;
    }
    n = n || new r.URLRequest(t);
    var g = new s.Loader();
    var E = new i.LoaderObject(g, e, n, _);
    E.loaderObjectFinished.add(this.bindFunction(this.queueElementHasFinished));
    E.loadingProgressStarted.add(this.bindFunction(this.queueElementNowLoading));
    E.loadingError.add(this.loadingError.bindFunction(this.loadingError.dispatch));
    g.contentLoaderInfo.addEventListener(l.IO_ERROR, E.bindFunction(E.handleLoaderIOError));
    g.contentLoaderInfo.addEventListener(c.SECURITY_ERROR, E.bindFunction(E.handleLoaderSecurityError));
    g.contentLoaderInfo.addEventListener(u.PROGRESS, E.bindFunction(E.onLoadProgress));
    g.contentLoaderInfo.addEventListener(o.COMPLETE, E.bindFunction(E.onComplete));
    this._loaderMap.set(e, E);
    this._queue.push(E);
    this.startLoading();
    return E;
  };
  GoodgameLoader.prototype.addXMLLoader = function (e, t, n, a = null, s = false) {
    if (!this._loaderMap.get(e) || s == 1) {
      if (this._loaderMap.get(e) && s == 1) {
        var o = this._loaderMap.get(e);
        var l = o.loaderInstance;
        l.removeEventListener("complete", o.bindFunction(o.onComplete));
        l.removeEventListener("progress", o.bindFunction(o.onLoadProgress));
        l.removeEventListener("error", o.bindFunction(o.handleLoaderIOError));
        o.dispose();
      }
      var u = new r.URLRequest(t);
      var c = new createjs.LoadItem();
      c.id = e;
      c.src = t;
      c.type = n;
      var _ = new createjs.LoadQueue();
      var d = new i.LoaderObject(_, e, u, a);
      d.loaderObjectFinished.add(this.bindFunction(this.queueElementHasFinished));
      d.loadingProgressStarted.add(this.bindFunction(this.queueElementNowLoading));
      d.loadingError.add(this.loadingError.bindFunction(this.loadingError.dispatch));
      _.addEventListener("complete", d.bindFunction(d.onComplete));
      _.addEventListener("progress", d.bindFunction(d.onLoadProgress));
      _.addEventListener("error", d.bindFunction(d.handleLoaderIOError));
      _.loadFile(c, true);
      this._loaderMap.set(e, d);
      this._queue.push(d);
      this.startLoading();
    }
  };
  GoodgameLoader.prototype.addLoaderInfoObject = function (e, t, n = null) {
    if (!this._loaderMap.get(e)) {
      var a = new i.LoaderObject(t, e, null, n);
      a.loaderObjectFinished.add(this.bindFunction(this.queueElementHasFinished));
      a.loadingProgressStarted.add(this.bindFunction(this.queueElementNowLoading));
      a.loadingError.add(this.loadingError.bindFunction(this.loadingError.dispatch));
      t.addEventListener(u.PROGRESS, a.bindFunction(a.onLoadProgress));
      t.addEventListener(o.COMPLETE, a.bindFunction(a.onComplete));
      this._loaderMap.set(e, a);
      this._queue.push(a);
      this.startLoading();
    }
  };
  GoodgameLoader.prototype.addURLRequest = function (e, t, n = null) {
    if (!this._loaderMap.get(e)) {
      var a = new r.URLLoader();
      var s = new i.LoaderObject(a, e, t, n);
      s.loaderObjectFinished.add(this.bindFunction(this.queueElementHasFinished));
      s.loadingProgressStarted.add(this.bindFunction(this.queueElementNowLoading));
      s.loadingError.add(this.loadingError.bindFunction(this.loadingError.dispatch));
      a.addEventListener(l.IO_ERROR, s.bindFunction(s.handleLoaderIOError));
      a.addEventListener(c.SECURITY_ERROR, s.bindFunction(s.handleLoaderSecurityError));
      a.addEventListener(u.PROGRESS, s.bindFunction(s.onLoadProgress));
      a.addEventListener(o.COMPLETE, s.bindFunction(s.onComplete));
      this._loaderMap.set(e, s);
      this._queue.push(s);
      this.startLoading();
    }
  };
  GoodgameLoader.prototype.addQueueEndElement = function (e, t = null) {
    var n = new a.LoadingQueueEndElement(e, t);
    n.loaderObjectFinished.add(this.bindFunction(this.queueElementHasFinished));
    this._queue.push(n);
    this.startLoading();
  };
  GoodgameLoader.prototype.hasQueEndElementFinished = function (e) {
    return this._finishedQueueEndElements[e] != null;
  };
  GoodgameLoader.prototype.getLoaderData = function (e) {
    var t = this._loaderMap.get(e);
    if (!t) {
      return null;
    }
    if (t.currentState != i.LoaderObject.STATE_LOADING_PROGRESS_FINISHED) {
      return null;
    }
    if (t.loaderInstance instanceof r.URLLoader) {
      return t.loaderInstance.data;
    }
    if (t.loaderInstance instanceof s.Loader) {
      return t.loaderInstance.contentLoaderInfo.content;
    }
    if (t.loaderInstance instanceof createjs.LoadQueue) {
      var n = t.loaderInstance.getItems(true);
      if (n.length > 0) {
        return n[0].rawResult;
      } else {
        return null;
      }
    }
    return null;
  };
  GoodgameLoader.prototype.removeLoaderData = function (e) {
    return this._loaderMap.delete(e);
  };
  GoodgameLoader.prototype.getLoaderObject = function (e) {
    var t = this._loaderMap.get(e);
    return t || null;
  };
  GoodgameLoader.prototype.hasSubloaderFinished = function (e) {
    var t = this._loaderMap.get(e);
    return !!t && t.currentState == i.LoaderObject.STATE_LOADING_PROGRESS_FINISHED;
  };
  GoodgameLoader.prototype.getCompleteProgress = function () {
    var e;
    var t;
    for (var n = 0, i = Array.from(this._loaderMap.values()); n < i.length; n++) {
      var a = i[n];
      e += a.totalBytes;
      t += a.loadedBytes;
    }
    return t / e;
  };
  GoodgameLoader.prototype.getProgressOfSubloader = function (e) {
    var t = this._loaderMap.get(e);
    if (t) {
      return t.loadedBytes / t.totalBytes;
    } else {
      return -1;
    }
  };
  GoodgameLoader.prototype.getProgressOfActualSubloader = function () {
    if (this._queue.length > 0) {
      var e = this._queue[0];
      if (e) {
        if (e.loadedBytes != 0 || e.totalBytes != 0) {
          return e.loadedBytes / e.totalBytes;
        } else {
          return 0;
        }
      } else {
        return -1;
      }
    }
    return 0;
  };
  GoodgameLoader.prototype.calculateDataRate = function () {
    var e = (Date.now() - this._loadingStartTime) / 1000;
    var t = 0;
    for (var n = 0, i = Array.from(this._loaderMap.values()); n < i.length; n++) {
      t += i[n].loadedBytes / 1024;
    }
    return Math.round(t / e);
  };
  GoodgameLoader.prototype.hasSubloader = function (e) {
    return !!this._loaderMap.get(e);
  };
  Object.defineProperty(GoodgameLoader.prototype, "elementsInQueue", {
    get: function () {
      return this._queue.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameLoader.prototype, "elementsAlreadyLoaded", {
    get: function () {
      var e = 0;
      for (var t = 0, n = Array.from(this._loaderMap.values()); t < n.length; t++) {
        n[t];
        e++;
      }
      return e - this._queue.length;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameLoader.prototype.dispose = function () {
    this._loadingQueueElementFinished.removeAll();
    this._loadingQueueElementStarted.removeAll();
    for (var e = 0, t = Array.from(this._loaderMap.keys()); e < t.length; e++) {
      var n = t[e];
      this._loaderMap.get(n).dispose();
      this._loaderMap.delete(n);
    }
    this._loaderMap = null;
  };
  GoodgameLoader.prototype.startLoading = function () {
    if (this._queue.length > 1) {
      this._isLoading = true;
    } else {
      this._isLoading = false;
    }
    if (!this._isLoading) {
      if (this._queue.length > 0) {
        if (this.elementsAlreadyLoaded == 0) {
          this._loadingStartTime = Date.now();
        }
        this._queue[0].startLoadingObject(this.subloaderErrorLogging);
      }
    }
  };
  GoodgameLoader.prototype.queueElementNowLoading = function (e) {
    this._loadingQueueElementStarted.dispatch(this._loaderID, e);
  };
  GoodgameLoader.prototype.queueElementHasFinished = function (e) {
    if (this._queue.length !== 0 && this._queue[0].loaderName === e) {
      var t = this._queue.shift();
      if (t instanceof a.LoadingQueueEndElement) {
        t.onComplete(null);
        t.dispose();
        this._finishedQueueEndElements[t.loaderName] = t;
        this._isLoading = false;
      }
      var n = t.loaderInstance;
      if (n != null) {
        n.removeEventListener(l.IO_ERROR, t.bindFunction(t.handleLoaderIOError));
        n.removeEventListener(c.SECURITY_ERROR, t.bindFunction(t.handleLoaderSecurityError));
        n.removeEventListener(u.PROGRESS, t.bindFunction(t.onLoadProgress));
        n.removeEventListener(o.COMPLETE, t.bindFunction(t.onComplete));
      }
      this._loadingQueueElementFinished.dispatch(this._loaderID, e);
      if (this._queue.length > 0) {
        this._queue[0].startLoadingObject(this.subloaderErrorLogging);
      }
    }
  };
  return GoodgameLoader;
}();
exports.GoodgameLoader = d;