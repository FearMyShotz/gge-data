Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function TestCaseInfoEvent(t, n, i = false, a = false) {
    var s = e.call(this, t, i, a) || this;
    s._paramObj = n;
    return s;
  }
  i.__extends(TestCaseInfoEvent, e);
  Object.defineProperty(TestCaseInfoEvent.prototype, "paramObj", {
    get: function () {
      return this._paramObj;
    },
    enumerable: true,
    configurable: true
  });
  TestCaseInfoEvent.TEST_CASE_INFO_RECEIVED = "testCaseInfoReceived";
  return TestCaseInfoEvent;
}(createjs.Event);
exports.TestCaseInfoEvent = a;