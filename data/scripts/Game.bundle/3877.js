Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function LayoutManagerErrorLOFactory(t, i) {
    var n = this;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._error = t;
    n._dialogId = i;
    if (t.stack) {
      n._stackLines = t.stack.split("]");
    }
    return n;
  }
  n.__extends(LayoutManagerErrorLOFactory, e);
  LayoutManagerErrorLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_TYPE, this._error);
    t.logData.set(LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_ID, this._error.errorID);
    t.logData.set(LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_TARGET, this._error.name);
    t.logData.set(LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_TEXT, this._error.message);
    if (this._stackLines) {
      t.logData.set(LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_STACKTRACE, this._stackLines[0] + " " + this._stackLines[1]);
    }
    t.logData.set(LayoutManagerErrorLOFactory.PARAM_DIALOG_ID, this._dialogId);
    return t;
  };
  LayoutManagerErrorLOFactory.__initialize_static_members = function () {
    LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_TYPE = "eventErrorType";
    LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_ID = "eventErrorId";
    LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_TARGET = "eventErrorTarget";
    LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_TEXT = "eventErrorText";
    LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_STACKTRACE = "eventErrorStackTrace";
    LayoutManagerErrorLOFactory.PARAM_DIALOG_ID = "dialogId";
  };
  return LayoutManagerErrorLOFactory;
}(require("./2.js").BasicLogObjectFactory);
exports.LayoutManagerErrorLOFactory = o;
o.__initialize_static_members();