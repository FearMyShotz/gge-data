Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./14.js");
var a = require("./284.js");
var s = function () {
  function BasicLogObjectFactory() {
    this._subErrorId = -1;
  }
  Object.defineProperty(BasicLogObjectFactory.prototype, "dataFacade", {
    set: function (e) {
      this._facade = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicLogObjectFactory.prototype.create = function () {
    var e = new a.AbstractLogObject();
    e.logData.set(i.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, "");
    e.logData.set(i.ExternalLoggingConstants.PARAM_HTML5_TAG, "html5");
    e.logData.set(i.ExternalLoggingConstants.PARAM_LOG_TYPE, i.ExternalLoggingConstants.LOGGING_TYPE_ERROR.toString());
    e.logData.set(i.ExternalLoggingConstants.PARAM_SUB_ERROR_ID, this._subErrorId.toString());
    e.logData.set(i.ExternalLoggingConstants.PARAM_SOURCESTORE, this._facade.sourceStore);
    e.logData.set(i.ExternalLoggingConstants.PARAM_DEVICETYPE, this._facade.deviceType);
    e.logData.set(i.ExternalLoggingConstants.PARAM_DEVICECATEGORY, this._facade.deviceCategory);
    e.logData.set(i.ExternalLoggingConstants.PARAM_OS, this._facade.os);
    e.logData.set(i.ExternalLoggingConstants.PARAM_CLIENT_VERSION, this._facade.clientVersion);
    e.logData.set(i.ExternalLoggingConstants.PARAM_ITEM_XML_VERSION, this._facade.itemXMLVersion);
    e.logData.set(i.ExternalLoggingConstants.PARAM_IS_IN_BACKGROUND, this._facade.isInBackground);
    e.logData.set(i.ExternalLoggingConstants.PARAM_CONNECTION_TYPE, this._facade.connectionType);
    e.logData.set(i.ExternalLoggingConstants.PARAM_IS_FIRST_APP_START_AFTER_UPDATE, this._facade.isFirstAppStartAfterUpdate);
    e.logData.set(i.ExternalLoggingConstants.PARAM_HTTP_REFERER, this._facade.httpReferer);
    e.logData.set(i.ExternalLoggingConstants.PARAM_SESSION_ID, this._facade.sessionId);
    e.logData.set(i.ExternalLoggingConstants.PARAM_SESSION_LENGTH, this._facade.sessionLength);
    e.logData.set(i.ExternalLoggingConstants.PARAM_GAME_ID, this._facade.gameId);
    e.logData.set(i.ExternalLoggingConstants.PARAM_NETWORK_ID, this._facade.networkId);
    e.logData.set(i.ExternalLoggingConstants.PARAM_INSTANCE, this._facade.instanceId);
    e.logData.set(i.ExternalLoggingConstants.PARAM_COUNTRY_CODE, this._facade.countryCode);
    e.logData.set(i.ExternalLoggingConstants.PARAM_LANGUAGE_CODE, this._facade.languageCode);
    e.logData.set(i.ExternalLoggingConstants.PARAM_ACCOUNT_ID, this._facade.accountId);
    e.logData.set(i.ExternalLoggingConstants.PARAM_PLAYER_ID, this._facade.playerId);
    e.logData.set(i.ExternalLoggingConstants.PARAM_IS_FIRST_VISIT_OF_GGS, this._facade.isFirstVisitOfGGS);
    e.logData.set(i.ExternalLoggingConstants.PARAM_CDN, this._facade.cdn);
    e.logData.set(i.ExternalLoggingConstants.PARAM_CLIENT_TYPE, this._facade.clientType);
    e.logData.set(i.ExternalLoggingConstants.PARAM_PERFORMANCE_CATEGORY, this._facade.performanceCategory);
    e.logData.set(i.ExternalLoggingConstants.PARAM_HTTP_USER_AGENT, this._facade.browserUserAgent);
    e.logData.set(i.ExternalLoggingConstants.PARAM_HTTP_PLATFORM, this._facade.browserPlatform);
    e.logData.set(i.ExternalLoggingConstants.PARAM_HTTP_VENDOR, this._facade.browserVendor);
    e.logData.set(i.ExternalLoggingConstants.PARAM_UTC_TIME_STAMP, Date.now().toString());
    e.isEssentialFilled = true;
    return e;
  };
  return BasicLogObjectFactory;
}();
exports.BasicLogObjectFactory = s;