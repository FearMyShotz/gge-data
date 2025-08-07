Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AutoRecruitmentInfoEvent(t, i, n, o = true, a = false) {
    var s = this;
    s.response = false;
    CONSTRUCTOR_HACK;
    (s = e.call(this, t, o, a) || this).response = i;
    s.serverData = n;
    return s;
  }
  n.__extends(AutoRecruitmentInfoEvent, e);
  AutoRecruitmentInfoEvent.__initialize_static_members = function () {
    AutoRecruitmentInfoEvent.ON_DUPLICATE_RECRUITMENT_INFO = "onDuplicateRecruitmentInfo";
  };
  return AutoRecruitmentInfoEvent;
}(createjs.Event);
exports.AutoRecruitmentInfoEvent = o;
o.__initialize_static_members();