Object.defineProperty(exports, "__esModule", {
  value: true
});
createjs.LoadQueue.prototype.loadFile = function (e, t, n) {
  if (e != null) {
    var i = this._addItem(e, null, n);
    if (t !== false) {
      this.setPaused(false);
    } else {
      this.setPaused(true);
    }
    return i;
  }
  var a = new createjs.ErrorEvent("PRELOAD_NO_FILE");
  this._sendError(a);
};
createjs.LoadQueue.prototype._addItem = function (e, t, n) {
  var i = this._createLoadItem(e, t, n);
  if (i != null) {
    var a = this._createLoader(i);
    if (a != null) {
      if ("plugins" in a) {
        a.plugins = this._plugins;
      }
      i._loader = a;
      this._loadQueue.push(a);
      var s = e.priority || 0;
      this._priorityQueue = this._priorityQueue || [];
      this._priorityQueue.push(s);
      this._numItems++;
      this._updateProgress();
      if (this.maintainScriptOrder && i.type === createjs.LoadQueue.JAVASCRIPT || i.maintainOrder === true) {
        this._scriptOrder.push(i);
        this._loadedScripts.push(null);
      }
    }
    return a;
  }
};
createjs.LoadQueue.prototype.loadManifest = function (e, t, n) {
  var i;
  var a = null;
  if (Array.isArray(e)) {
    if (e.length === 0) {
      var s = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
      this._sendError(s);
      return;
    }
    i = e;
  } else if (typeof e == "string") {
    i = [{
      src: e,
      type: createjs.AbstractLoader.MANIFEST
    }];
  } else {
    if (typeof e != "object") {
      var r = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
      this._sendError(r);
      return;
    }
    if (e.src !== undefined) {
      if (e.type == null) {
        e.type = createjs.AbstractLoader.MANIFEST;
      } else if (e.type !== createjs.AbstractLoader.MANIFEST) {
        var o = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
        this._sendError(o);
      }
      i = [e];
    } else if (e.manifest !== undefined) {
      i = e.manifest;
      a = e.path;
    }
  }
  var l = this;
  i.forEach(function (e, t, i) {
    if (window.AssetURL) {
      e = window.AssetURL.convert(e);
      i[t] = e;
    }
    l._addItem(e, a, n);
  });
  if (t !== false) {
    this.setPaused(false);
  } else {
    this.setPaused(true);
  }
  return [];
};
function i(e, t, n, i) {
  if (e > n) {
    return e;
  } else if (t > i[e]) {
    return n;
  } else {
    return e;
  }
}
createjs.LoadQueue.prototype._loadNext = function () {
  if (!this._paused) {
    if (!this._loadStartWasDispatched) {
      this._sendLoadStart();
      this._loadStartWasDispatched = true;
    }
    if (this._numItems === this._numItemsLoaded) {
      this.loaded = true;
      this._sendComplete();
      if (this.next && this.next.load) {
        this.next.load();
      }
    } else {
      this.loaded = false;
    }
    for (var e = 0; e < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); e++) {
      var t = this._priorityQueue.reduce(i, e);
      var n = this._loadQueue[t];
      if (this._canStartLoad(n)) {
        this._loadQueue.splice(t, 1);
        this._priorityQueue.splice(t, 1);
        e--;
        this._loadItem(n);
      }
    }
  }
};
createjs.RequestUtils.getTypeByExtension = function (e) {
  if (e == null) {
    return createjs.AbstractLoader.TEXT;
  }
  switch (e.toLowerCase()) {
    case "jpeg":
    case "jpg":
    case "gif":
    case "png":
    case "webp":
    case "bmp":
      return createjs.AbstractLoader.IMAGE;
    case "ogg":
    case "mp3":
    case "webm":
      return createjs.AbstractLoader.SOUND;
    case "mp4":
    case "webm":
    case "ts":
      return createjs.AbstractLoader.VIDEO;
    case "json":
      return createjs.AbstractLoader.JSON;
    case "xml":
      return createjs.AbstractLoader.XML;
    case "css":
      return createjs.AbstractLoader.CSS;
    case "js":
      return createjs.AbstractLoader.JAVASCRIPT;
    case "svg":
      return createjs.AbstractLoader.SVG;
    case "bpg":
      return createjs.AbstractLoader.BINARY;
    default:
      return createjs.AbstractLoader.TEXT;
  }
};
createjs.LoadQueue.prototype._cleanLoadItem = function (e) {
  var t = e.getItem();
  if (t) {
    delete t._loader;
  }
  if (e._request instanceof createjs.JSONLoader || e._request instanceof createjs.JSONPLoader) {
    e._request.removeAllEventListeners();
    e._request._request = null;
  } else {
    e._request = null;
  }
};
createjs.ImageLoader.prototype._formatImage = function (e, t) {
  var n = this._tag;
  var i = window.URL || window.webkitURL;
  if (this._preferXHR) {
    if (i) {
      var a = this.getResult(true);
      if (!a || a.constructor.name !== "Blob" && a.constructor.name !== "File") {
        t(n);
        return;
      }
      var s = i.createObjectURL(a);
      n.src = s;
      n.addEventListener("load", this._cleanUpURL, false);
      n.addEventListener("error", this._cleanUpURL, false);
    } else {
      n.src = this._item.src;
    }
  } else {
    ;
  }
  if (n.complete) {
    e(n);
  } else {
    n.onload = createjs.proxy(function () {
      n.onload = null;
      n.onerror = null;
      e(this._tag);
    }, this);
    n.onerror = createjs.proxy(function () {
      n.onload = null;
      n.onerror = null;
      t(this._tag);
    }, this);
  }
};