Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./57.js");
var a = require("./41.js");
var s = createjs.Container;
var r = function () {
  function DispCreatorComponent() {
    this._isCreating = false;
    this._clipList = [];
    this._loadingClips = 0;
    this._onLoadedSignal = new o.Signal();
    this._cacheDisp = true;
    this._additionalCacheSize = 0;
  }
  DispCreatorComponent.prototype.init = function (e) {
    this._dispContainer = new s();
    this._dispContainer.name = "DispContainer";
    this._dispContainer.mouseChildren = false;
    e.addChild(this._dispContainer);
  };
  DispCreatorComponent.prototype.destroy = function () {
    this.onLoadedSignal.removeAll();
    this.reset();
    if (this.dispContainer) {
      if (this.dispContainer.parent) {
        this.dispContainer.parent.removeChild(this.dispContainer);
      }
      this._dispContainer = null;
    }
  };
  DispCreatorComponent.prototype.reset = function () {
    if (this._dispContainer) {
      this._dispContainer.children.forEach(function (e) {
        if (e instanceof n.AbstractDisplayObjectClip) {
          e.dispose();
        }
      });
      this._dispContainer.removeChildren();
      a.CastleMovieClipHelper.uncacheSafe(this._dispContainer);
    }
    this._clipList = [];
    this._loadingClips = 0;
    this._onLoadedSignal.removeAll();
  };
  DispCreatorComponent.prototype.addClip = function (e) {
    if (!e) {
      return null;
    }
    this._clipList.push(e);
    this.dispContainer.addChild(e);
    var t = e;
    if (t) {
      if (t.isLoaded) {
        if (!this.isCreating) {
          this.checkAndTriggerLoadedCallback();
        }
      } else {
        t.clipLoaded.add(this.bindFunction(this.onClipLoaded));
        this._loadingClips++;
      }
      t.setOnFrameChangeCallback(this.bindFunction(this.updateCache));
    } else {
      this.updateCache();
    }
    return e;
  };
  DispCreatorComponent.prototype.updateCache = function () {
    if (this._cacheDisp) {
      if (this._cacheBehaviour) {
        this._cacheBehaviour.updateCache(this);
      } else {
        var e = this._dispContainer.getBounds();
        if (e.width > 0 && e.height > 0) {
          this._dispContainer.doCache(this._additionalCacheSize);
        }
      }
    }
  };
  DispCreatorComponent.prototype.addDisp = function (e) {
    if (e) {
      this.dispContainer.addChild(e);
    }
    return e;
  };
  DispCreatorComponent.prototype.switchCreationState = function (e, t = true) {
    this._isCreating = e;
    if (!e && t) {
      this.checkAndTriggerLoadedCallback();
    }
  };
  DispCreatorComponent.prototype.checkAndTriggerLoadedCallback = function () {
    if (this._loadingClips <= 0 && !this._isCreating) {
      this.onLoadedSignal.dispatch();
      this.updateCache();
    }
  };
  DispCreatorComponent.prototype.onClipLoaded = function (e) {
    e.clipLoaded.removeAll();
    this._loadingClips--;
    if (!this.isCreating) {
      this.checkAndTriggerLoadedCallback();
      this.updateCache();
    }
  };
  Object.defineProperty(DispCreatorComponent.prototype, "isLoaded", {
    get: function () {
      return this._loadingClips <= 0 && !this.isCreating;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DispCreatorComponent.prototype, "firstClip", {
    get: function () {
      if (this._clipList.length > 0) {
        return this._clipList[0];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  DispCreatorComponent.prototype.getClipMc = function (e) {
    if (e >= 0 && e < this._clipList.length) {
      return this._clipList[e].currentshownDisplayObject;
    } else {
      return null;
    }
  };
  Object.defineProperty(DispCreatorComponent.prototype, "dispContainer", {
    get: function () {
      return this._dispContainer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DispCreatorComponent.prototype, "clipList", {
    get: function () {
      return this._clipList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DispCreatorComponent.prototype, "onLoadedSignal", {
    get: function () {
      return this._onLoadedSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DispCreatorComponent.prototype, "isCreating", {
    get: function () {
      return this._isCreating;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DispCreatorComponent.prototype, "cacheDisp", {
    get: function () {
      return this._cacheDisp;
    },
    set: function (e) {
      this._cacheDisp = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DispCreatorComponent.prototype, "additionalCacheSize", {
    get: function () {
      return this._additionalCacheSize;
    },
    set: function (e) {
      this._additionalCacheSize = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DispCreatorComponent.prototype, "cacheBehaviour", {
    get: function () {
      return this._cacheBehaviour;
    },
    set: function (e) {
      this._cacheBehaviour = e;
    },
    enumerable: true,
    configurable: true
  });
  return DispCreatorComponent;
}();
exports.DispCreatorComponent = r;