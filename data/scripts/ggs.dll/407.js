Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./63.js");
var a = require("./64.js");
var s = require("./23.js");
var r = require("./20.js");
var o = function () {
  function LoadingQueueEndElement(e, t) {
    this._loaderObjectFinished = new r.Signal();
    this.elementName = e;
    this.finishCallback = t;
  }
  Object.defineProperty(LoadingQueueEndElement.prototype, "loaderObjectFinished", {
    get: function () {
      return this._loaderObjectFinished;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoadingQueueEndElement.prototype, "loaderName", {
    get: function () {
      return this.elementName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoadingQueueEndElement.prototype, "totalBytes", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoadingQueueEndElement.prototype, "loadedBytes", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  LoadingQueueEndElement.prototype.startLoadingObject = function (e) {
    this._loaderObjectFinished.dispatch(this.elementName);
  };
  LoadingQueueEndElement.prototype.onLoadProgress = function (e) {};
  LoadingQueueEndElement.prototype.handleLoaderSecurityError = function (e) {
    s.ExternalLog.logger.log(new a.SecurityErrorLOFactory(a.SecurityErrorLOFactory.GENERAL_LOADER_SECURITY_ERROR, e.text, e.target.url));
  };
  LoadingQueueEndElement.prototype.handleLoaderIOError = function (e) {
    s.ExternalLog.logger.log(new i.IOErrorLOFactory(i.IOErrorLOFactory.GENERAL_LOADER_IO_ERROR, e.text, e.target.url));
  };
  LoadingQueueEndElement.prototype.onComplete = function (e) {
    if (this.finishCallback != null) {
      this.finishCallback();
    }
  };
  Object.defineProperty(LoadingQueueEndElement.prototype, "loaderInstance", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  LoadingQueueEndElement.prototype.dispose = function () {
    this._loaderObjectFinished.removeAll();
  };
  return LoadingQueueEndElement;
}();
exports.LoadingQueueEndElement = o;