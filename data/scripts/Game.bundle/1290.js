Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function ABTest_Refresh_Event(t, i, n = false, o = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n, o) || this;
  }
  n.__extends(ABTest_Refresh_Event, e);
  ABTest_Refresh_Event.__initialize_static_members = function () {
    ABTest_Refresh_Event.REFRESH_ABTESTS_EVENT = "refresh_ab_tests_event";
  };
  return ABTest_Refresh_Event;
}(require("./2.js").TestCaseInfoEvent);
exports.ABTest_Refresh_Event = o;
o.__initialize_static_members();