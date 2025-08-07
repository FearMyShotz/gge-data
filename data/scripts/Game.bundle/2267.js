Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1290.js");
var c = require("./15.js");
var u = require("./2268.js");
var d = require("./4.js");
var p = function (e) {
  function CastleOwnSplitRunData(t) {
    var i = this;
    i.testCases = [];
    i.testCasesReceived = 0;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastleOwnSplitRunData, e);
  CastleOwnSplitRunData.prototype.retrieveTestCaseInfos = function () {
    o.BasicController.getInstance().addEventListener(r.TestCaseInfoEvent.TEST_CASE_INFO_RECEIVED, this.bindFunction(this.onTestCaseInfoReceived));
    c.CastleBasicController.getInstance().addEventListener(l.ABTest_Refresh_Event.REFRESH_ABTESTS_EVENT, this.bindFunction(this.refreshTests));
    this.testCasesReceived = 0;
    if (this.testCases != null) {
      for (var e = 0, t = this.testCases; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          a.BasicModel.smartfoxClient.sendMessage(s.BasicSmartfoxConstants.C2S_TEST_CASE_INFO, [i]);
        }
      }
    }
  };
  CastleOwnSplitRunData.prototype.onTestCaseInfoReceived = function (e) {
    var t;
    this.testCasesReceived++;
    for (t in e.paramObj) {
      this._abTests.set(t, e.paramObj[t]);
    }
    if (this.testCasesReceived == this.testCases.length) {
      o.BasicController.getInstance().removeEventListener(r.TestCaseInfoEvent.TEST_CASE_INFO_RECEIVED, this.bindFunction(this.onTestCaseInfoReceived));
      this.abTestDataArrived();
    }
  };
  CastleOwnSplitRunData.prototype.removeAllListeners = function () {
    c.CastleBasicController.getInstance().removeEventListener(r.TestCaseInfoEvent.TEST_CASE_INFO_RECEIVED, this.bindFunction(this.onTestCaseInfoReceived));
    c.CastleBasicController.getInstance().removeEventListener(l.ABTest_Refresh_Event.REFRESH_ABTESTS_EVENT, this.bindFunction(this.refreshTests));
  };
  CastleOwnSplitRunData.prototype.getTestCaseIfNotPresent = function (e) {
    if (!this.getParam(e)) {
      a.BasicModel.smartfoxClient.sendMessage(s.BasicSmartfoxConstants.C2S_TEST_CASE_INFO, [e]);
    }
  };
  CastleOwnSplitRunData.prototype.refreshTests = function (e = null) {
    this.abTestDataArrived();
  };
  CastleOwnSplitRunData.prototype.abTestDataArrived = function () {
    d.CastleModel.gfxData.applyAnimationABTest();
    this.handleABTest689();
  };
  CastleOwnSplitRunData.prototype.handleABTest689 = function () {
    new u.ABTest_FirstTimeChallengeCampVsIcon().setupTest(this._abTests);
  };
  CastleOwnSplitRunData.prototype.handleHCShopABTestPayload = function (e) {
    e.config = {
      categories: {
        hardCurrency: {
          enabled: true
        }
      }
    };
    return e;
  };
  return CastleOwnSplitRunData;
}(require("./1216.js").CastleSplitRunData);
exports.CastleOwnSplitRunData = p;