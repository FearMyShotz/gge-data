Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./14.js");
var s = function (e) {
  function FileErrorLOFactory(t, n = null) {
    var i = e.call(this) || this;
    i._subErrorId = t;
    i._assetName = n;
    return i;
  }
  i.__extends(FileErrorLOFactory, e);
  FileErrorLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, FileErrorLOFactory.FILE_ERROR.toString());
    if (this._assetName !== undefined) {
      t.logData.set(FileErrorLOFactory.PARAM_ASSETNAME, this._assetName);
    }
    return t;
  };
  FileErrorLOFactory.ASSET_NOT_VERSIONED_FILE_ERROR = 14001;
  FileErrorLOFactory.PARAM_ASSETNAME = "assetName";
  FileErrorLOFactory.FILE_ERROR = 14;
  return FileErrorLOFactory;
}(require("./21.js").BasicLogObjectFactory);
exports.FileErrorLOFactory = s;