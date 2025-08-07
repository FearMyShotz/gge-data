Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./179.js");
var a = require("./43.js");
var s = require("./23.js");
var r = require("./63.js");
var o = require("./64.js");
var l = require("./30.js");
var u = require("./48.js");
var c = require("./17.js");
var _ = require("./15.js");
var d = require("./3.js");
var m = createjs.Event;
var h = createjs.IOErrorEvent;
var p = createjs.SecurityErrorEvent;
var g = require("./20.js");
var E = function () {
  function ABTest(e) {
    this.testIsInitalized = new g.Signal();
    this._isReady = false;
    this._testData = e;
    this.testIsInitalized.add(this.bindFunction(this.handleTestIsInitalized));
    this.requestDisplayEvent();
  }
  Object.defineProperty(ABTest.prototype, "testData", {
    get: function () {
      return this._testData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABTest.prototype, "isReady", {
    get: function () {
      return this._isReady;
    },
    enumerable: true,
    configurable: true
  });
  ABTest.prototype.requestDisplayEvent = function () {};
  ABTest.prototype.onDisplayEventComplete = function (e) {
    var t = e.target.data;
    l.debug("receiving answer from a-b-test display request: " + t);
    if (t && t != "") {
      var n = undefined.getValue();
      if (n[i.ABTestData.TEST_ID]) {
        this._testData._testID = Number(n[i.ABTestData.TEST_ID]);
      }
      if (n[i.ABTestData.CASE_ID]) {
        this._testData._caseID = Number(n[i.ABTestData.CASE_ID]);
      }
      if (n[i.ABTestData.ERROR_MSG]) {
        this._testData.errorMessage = String(n[i.ABTestData.ERROR_MSG]);
      }
      if (n[i.ABTestData.CLIENT_ID]) {
        this._testData._clientID = String(n[i.ABTestData.CLIENT_ID]);
      }
      if (n[i.ABTestData.CONTENT]) {
        this._testData.content = String(n[i.ABTestData.CONTENT]);
      }
      if (n[i.ABTestData.IS_VALID]) {
        var a = String(n[i.ABTestData.IS_VALID]);
        this._testData.isValid = a == "true";
      }
    } else {
      u.fatal("display event data not valid");
    }
    this.testIsInitalized.dispatch();
  };
  ABTest.prototype.handleTestIsInitalized = function () {
    this._isReady = true;
  };
  ABTest.prototype.onDisplayRequestIOError = function (e) {
    u.fatal("ioerror while connecting to ab-testing interface for requesting display event");
    s.ExternalLog.logger.log(new r.IOErrorLOFactory(r.IOErrorLOFactory.GENERAL_LOADER_IO_ERROR, e.text, this.request.url));
    this.handleABTestError();
  };
  ABTest.prototype.onDisplayRequestIOErrorSecurityError = function (e) {
    u.fatal("securityerror while connecting to ab-testing interface for requesting display event");
    s.ExternalLog.logger.log(new o.SecurityErrorLOFactory(o.SecurityErrorLOFactory.GENERAL_LOADER_SECURITY_ERROR, e.text, this.request.url));
    this.handleABTestError();
  };
  ABTest.prototype.onDisplayEventHTTPStatus = function (e) {
    var t = e.status / 100;
    if (t != 2 && t != 3) {
      this.handleABTestError();
    }
  };
  ABTest.prototype.handleABTestError = function () {
    this._testData.errorMessage = "timeout for display request";
    this._testData.errorCode = i.ABTestData.STATUS_TIMEOUT_ERROR;
    var e = c.TrackingCache.getInstance().getEvent(_.TrackingEventIds.AB_TEST_TIMEOUT_TRACKING);
    e.testID = this.testData._testID;
    e.playerId = this.testData.playerID;
    e.accountID = this.testData.accountID;
    c.TrackingCache.getInstance().sendEvent(_.TrackingEventIds.AB_TEST_TIMEOUT_TRACKING);
  };
  ABTest.prototype.sendConversion = function (e, t, n) {
    if (this._isReady == 0) {
      this._testData.errorCode = i.ABTestData.STATUS_NOT_READY_ERROR;
    }
    this._testData.playerID = e;
    this._testData.instanceID = t;
    this._testData.referrer = n;
    this._testData.save();
    new d.URLRequest(a.PathProvider.instance.abTestTrackURL);
  };
  ABTest.prototype.onConversionIOError = function (e) {
    u.fatal("error while connecting to ab-testing interface for sending conversion");
  };
  ABTest.prototype.onConversionEventComplete = function (e) {
    l.debug("conversion for testcase: " + this._testData._testID + " is complete");
  };
  ABTest.prototype.dispose = function () {
    this.testIsInitalized.removeAll();
    this.disposeLoader();
    this._testData.save();
    this._testData = null;
  };
  ABTest.prototype.disposeLoader = function () {
    if (this.loader) {
      this.loader.removeEventListener(m.COMPLETE, this.bindFunction(this.onDisplayEventComplete));
      this.loader.removeEventListener(h.IO_ERROR, this.bindFunction(this.onDisplayRequestIOError));
      this.loader.removeEventListener(p.SECURITY_ERROR, this.bindFunction(this.onDisplayRequestIOErrorSecurityError));
      this.loader.removeEventListener(m.COMPLETE, this.bindFunction(this.onConversionEventComplete));
      this.loader.removeEventListener(h.IO_ERROR, this.bindFunction(this.onConversionIOError));
      this.loader.close();
      this.loader = null;
    }
  };
  return ABTest;
}();
exports.ABTest = E;