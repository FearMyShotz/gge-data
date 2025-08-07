Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./48.js");
var a = require("./179.js");
var s = require("./48.js");
exports.fatal = s.fatal;
var r = require("./35.js");
var o = require("./416.js");
var l = function () {
  function ABTestController() {
    this.enabledTests = [];
    if (ABTestController._instance) {
      throw new Error("this is a singleton. cannot instanciate more than once");
    }
  }
  Object.defineProperty(ABTestController, "instance", {
    get: function () {
      ABTestController._instance ||= new ABTestController();
      return ABTestController._instance;
    },
    enumerable: true,
    configurable: true
  });
  ABTestController.prototype.initialize = function (e, t, n, i, s, r, l) {
    for (var u = 0, c = e.children(); u < c.length; u++) {
      var _ = c[u];
      var d = new a.ABTestData();
      d._testID = Number(_.attribute("id"));
      d.gameID = t;
      d.instanceID = n;
      d.networkID = i;
      d.accountID = s;
      d.playerID = r;
      d.referrer = l;
      this.enabledTests.push(new o.ABTest(d));
    }
  };
  ABTestController.prototype.getTest = function (e) {
    for (var t = this.enabledTests.length, n = 0; n < t; n++) {
      if (this.enabledTests[n].testData.testID == e) {
        return this.enabledTests[n];
      }
    }
    i.fatal("no test with id " + e + " available");
    return null;
  };
  ABTestController.prototype.getGlobalTest = function () {
    if (this.enabledTests.length > 0 && this.enabledTests[0]) {
      return this.enabledTests[0];
    } else {
      i.fatal("no test with available");
      return null;
    }
  };
  ABTestController.prototype.trackConversion = function (e, t, n, i) {
    for (var a = this.enabledTests.length, s = 0; s < a; s++) {
      if (this.enabledTests[s].testData.testID == e) {
        if (this.enabledTests[s].testData.isValid) {
          this.enabledTests[s].sendConversion(t, n, i);
        } else {
          r.warn("ab-test with id: " + e + " is not valid");
        }
      }
    }
  };
  return ABTestController;
}();
exports.ABTestController = l;