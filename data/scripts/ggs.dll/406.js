Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./64.js");
var a = require("./23.js");
var s = require("./3.js");
var r = require("./20.js");
var o = require("./2.js");
var l = createjs.TimerEvent;
var u = o.getLogger("LoaderObject");
var c = function () {
  function LoaderObject(e, t, n, i = null) {
    this._loaderObjectFinished = new r.Signal();
    this.loadingProgressStarted = new r.Signal();
    this.loadingError = new r.Signal();
    this.loadingProgressDeltaTimer = new s.Timer(1000);
    this.loadingProgressDeltaNullTicks = 0;
    this.subloaderErrorLogging = true;
    this._loaderInstance = e;
    this._loaderName = t;
    this._request = n;
    this._onCompleteCallback = i !== null ? this.bindFunction(i) : null;
    this._currentState = LoaderObject.STATE_IDLE;
    this.loadingProgressDeltaTimer.addEventListener(l.TIMER, this.bindFunction(this.handleLoadingProgressDeltaTimerTick));
  }
  Object.defineProperty(LoaderObject.prototype, "currentState", {
    get: function () {
      return this._currentState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoaderObject.prototype, "isLoadingFinished", {
    get: function () {
      return this._currentState == LoaderObject.STATE_LOADING_PROGRESS_FINISHED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoaderObject.prototype, "loaderName", {
    get: function () {
      return this._loaderName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoaderObject.prototype, "loaderInstance", {
    get: function () {
      return this._loaderInstance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoaderObject.prototype, "totalBytes", {
    get: function () {
      if (this._currentState == LoaderObject.STATE_LOADING_PROGRESS_STARTED || this._currentState == LoaderObject.STATE_LOADING_PROGRESS_FINISHED) {
        return this._totalBytes;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoaderObject.prototype, "loadedBytes", {
    get: function () {
      if (this._currentState == LoaderObject.STATE_LOADING_PROGRESS_STARTED || this._currentState == LoaderObject.STATE_LOADING_PROGRESS_FINISHED) {
        return this._loadedBytes;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoaderObject.prototype, "loaderObjectFinished", {
    get: function () {
      return this._loaderObjectFinished;
    },
    enumerable: true,
    configurable: true
  });
  LoaderObject.prototype.dispose = function () {
    this._loaderObjectFinished.removeAll();
    this.loadingProgressStarted.removeAll();
    this._onCompleteCallback = null;
    this._loaderInstance = null;
    this.removeTimer();
  };
  LoaderObject.prototype.startLoadingObject = function (e) {
    this.subloaderErrorLogging = e;
    this.loadingProgressDeltaTimer.start();
    if (this._loaderInstance instanceof s.Loader) {
      this._loaderInstance.load(this._request);
    } else if (this._loaderInstance instanceof s.URLLoader) {
      this._loaderInstance.load(this._request);
    }
  };
  LoaderObject.prototype.onLoadProgress = function (e) {};
  LoaderObject.prototype.handleLoadingProgressDeltaTimerTick = function (e) {
    if (this.loadingProgressDelta <= 0) {
      this.loadingProgressDeltaNullTicks++;
    } else {
      this.loadingProgressDeltaNullTicks = 0;
    }
    if (this.loadingProgressDeltaNullTicks >= 5) {
      this.subloaderErrorLogging;
    }
  };
  LoaderObject.prototype.handleLoaderSecurityError = function (e) {
    if (this.subloaderErrorLogging) {
      a.ExternalLog.logger.log(new i.SecurityErrorLOFactory(i.SecurityErrorLOFactory.GENERAL_LOADER_SECURITY_ERROR, e.text, this._request.url));
    }
    this._currentState = LoaderObject.STATE_LOADING_ERROR;
    this.loadingError.dispatch(this._loaderName, e);
    this.loaderObjectFinished.dispatch(this._loaderName);
    this.removeTimer();
  };
  LoaderObject.prototype.handleLoaderIOError = function (e) {
    this.subloaderErrorLogging;
    this._currentState = LoaderObject.STATE_LOADING_ERROR;
    this.loadingError.dispatch(this._loaderName, e);
    this.loaderObjectFinished.dispatch(this._loaderName);
    this.removeTimer();
  };
  LoaderObject.prototype.onComplete = function (e) {
    this._currentState = LoaderObject.STATE_LOADING_PROGRESS_FINISHED;
    this._loaderObjectFinished.dispatch(this._loaderName);
    this.removeTimer();
    if (this._onCompleteCallback != null) {
      try {
        this._onCompleteCallback(this.loaderName);
      } catch (e) {
        u.error(e);
      }
    }
  };
  LoaderObject.prototype.removeTimer = function () {
    if (this.loadingProgressDeltaTimer) {
      this.loadingProgressDeltaTimer.stop();
      this.loadingProgressDeltaTimer.removeEventListener(l.TIMER, this.bindFunction(this.handleLoadingProgressDeltaTimerTick));
    }
  };
  LoaderObject.STATE_IDLE = 1;
  LoaderObject.STATE_LOADING_PROGRESS_INITIATED = 2;
  LoaderObject.STATE_LOADING_PROGRESS_STARTED = 3;
  LoaderObject.STATE_LOADING_PROGRESS_FINISHED = 4;
  LoaderObject.STATE_LOADING_ERROR = 5;
  return LoaderObject;
}();
exports.LoaderObject = c;