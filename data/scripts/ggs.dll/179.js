Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./113.js");
var s = require("./417.js");
var r = function (e) {
  function ABTestData() {
    var t = e.call(this, "ab") || this;
    t._testID = 0;
    t._caseID = 0;
    t._clientID = "";
    t.gameID = 0;
    t.instanceID = 0;
    t.networkID = 0;
    t.playerID = -1;
    t.referrer = "";
    t.content = "";
    t.accountID = "";
    t.errorMessage = "";
    t.isValid = false;
    t.errorCode = ABTestData.STATUS_ALL_OK;
    if (s.CookieHelper.isCookieEmpty({})) {
      t.save();
    } else {
      t._testID = t.getAttributeAsUint(ABTestData.TEST_ID);
      t._caseID = t.getAttributeAsUint(ABTestData.CASE_ID);
      t.gameID = t.getAttributeAsUint(ABTestData.GAME_ID);
      t.instanceID = t.getAttributeAsUint(ABTestData.INSTANCE_ID);
      t.networkID = t.getAttributeAsUint(ABTestData.NETWORK_ID);
      t.playerID = t.getAttributeAsUint(ABTestData.PLAYER_ID);
      t.referrer = t.getAttributeAsString(ABTestData.REFERRER);
      t.accountID = t.getAttributeAsString(ABTestData.ACCOUNT_ID);
      t._clientID = t.getAttributeAsString(ABTestData.CLIENT_ID);
    }
    return t;
  }
  i.__extends(ABTestData, e);
  Object.defineProperty(ABTestData.prototype, "cookie", {
    get: function () {
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABTestData.prototype, "testID", {
    get: function () {
      return this._testID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABTestData.prototype, "caseID", {
    get: function () {
      return this._caseID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABTestData.prototype, "clientID", {
    get: function () {
      return this._clientID;
    },
    enumerable: true,
    configurable: true
  });
  ABTestData.prototype.save = function () {
    this.setAttribute(ABTestData.TEST_ID, this._testID);
    this.setAttribute(ABTestData.CASE_ID, this._caseID);
    this.setAttribute(ABTestData.CLIENT_ID, this._clientID);
    this.setAttribute(ABTestData.GAME_ID, this.gameID);
    this.setAttribute(ABTestData.INSTANCE_ID, this.instanceID);
    this.setAttribute(ABTestData.NETWORK_ID, this.networkID);
    this.setAttribute(ABTestData.PLAYER_ID, this.playerID);
    this.setAttribute(ABTestData.REFERRER, this.referrer);
    this.setAttribute(ABTestData.ACCOUNT_ID, this.accountID);
  };
  ABTestData.STATUS_ALL_OK = 0;
  ABTestData.STATUS_TIMEOUT_ERROR = 1;
  ABTestData.STATUS_NOT_READY_ERROR = 2;
  ABTestData.TEST_ID = "t";
  ABTestData.CASE_ID = "c";
  ABTestData.CLIENT_ID = "ci";
  ABTestData.CONTENT = "content";
  ABTestData.ERROR_MSG = "errorMsg ";
  ABTestData.IS_VALID = "v";
  ABTestData.PLAYER_ID = "p";
  ABTestData.INSTANCE_ID = "i";
  ABTestData.NETWORK_ID = "n";
  ABTestData.GAME_ID = "g";
  ABTestData.REFERRER = "referrer";
  ABTestData.ACCOUNT_ID = "accountId";
  ABTestData.ERROR_CODE = "errorCode";
  return ABTestData;
}(a.AbstractCookie);
exports.ABTestData = r;