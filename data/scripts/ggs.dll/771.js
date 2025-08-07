Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./21.js");
var s = require("./14.js");
var r = function (e) {
  function WorldAssingmentErrorFactory(t, n) {
    var i = e.call(this) || this;
    i._subErrorId = t;
    i._errorMessage = n;
    return i;
  }
  i.__extends(WorldAssingmentErrorFactory, e);
  WorldAssingmentErrorFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(s.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, WorldAssingmentErrorFactory.WORLD_ASSIGNMENT_ERROR.toString());
    t.logData.set(WorldAssingmentErrorFactory.PARAM_ERROR_MESSAGE, this._errorMessage);
    return t;
  };
  WorldAssingmentErrorFactory.WORLD_ASSIGNMENT_ERROR = 100;
  WorldAssingmentErrorFactory.PARAM_ERROR_MESSAGE = "errorMessage";
  return WorldAssingmentErrorFactory;
}(a.BasicLogObjectFactory);
exports.WorldAssingmentErrorFactory = r;