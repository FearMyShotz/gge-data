Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./21.js");
var s = require("./14.js");
var r = function (e) {
  function PageIntegrationErrorFactory(t, n) {
    var i = e.call(this) || this;
    i._subErrorId = t;
    i._errorMessage = n;
    return i;
  }
  i.__extends(PageIntegrationErrorFactory, e);
  PageIntegrationErrorFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(s.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, PageIntegrationErrorFactory.PAGE_INTEGRATION_ERROR.toString());
    t.logData.set(PageIntegrationErrorFactory.PARAM_ERROR_MESSAGE, this._errorMessage);
    return t;
  };
  PageIntegrationErrorFactory.PAGE_INTEGRATION_ERROR = 101;
  PageIntegrationErrorFactory.CACHE_BREAKER_ELEMENT_MISSING = 101001;
  PageIntegrationErrorFactory.GAME_ELEMENT_MISSING = 101002;
  PageIntegrationErrorFactory.PARAM_ERROR_MESSAGE = "errorMessage";
  return PageIntegrationErrorFactory;
}(a.BasicLogObjectFactory);
exports.PageIntegrationErrorFactory = r;