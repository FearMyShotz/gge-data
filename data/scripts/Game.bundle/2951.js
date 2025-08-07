Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CancelRecruitmentProperties(t, i) {
    var n = this;
    n.isSoldiers = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).isSoldiers = t;
    n.onCancelRecruitmentConfirmed = i;
    return n;
  }
  n.__extends(CancelRecruitmentProperties, e);
  return CancelRecruitmentProperties;
}(require("./2.js").BasicProperties);
exports.CancelRecruitmentProperties = o;