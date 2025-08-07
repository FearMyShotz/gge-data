Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./14.js");
var s = function (e) {
  function IOErrorLOFactory(t, n, i) {
    var a = e.call(this) || this;
    a._subErrorId = t;
    a._operationText = n;
    a._url = i;
    return a;
  }
  i.__extends(IOErrorLOFactory, e);
  IOErrorLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, IOErrorLOFactory.IO_ERROR.toString());
    t.logData.set(a.ExternalLoggingConstants.PARAM_ERROR_EVENT_OPERATION_TEXT, this._operationText);
    t.logData.set(a.ExternalLoggingConstants.PARAM_URL, this._url);
    return t;
  };
  IOErrorLOFactory.GENERAL_LOADER_IO_ERROR = 3001;
  IOErrorLOFactory.GENERAL_TRACKING_IO_ERROR = 3002;
  IOErrorLOFactory.GENERAL_LOADER_INVALID_DATA_ERROR = 3003;
  IOErrorLOFactory.IO_ERROR = 3;
  return IOErrorLOFactory;
}(require("./21.js").BasicLogObjectFactory);
exports.IOErrorLOFactory = s;