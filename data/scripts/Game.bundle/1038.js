Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function OfficersSchoolDataEvent(t, i = false, n = false) {
    return e.call(this, t, i, n) || this;
  }
  n.__extends(OfficersSchoolDataEvent, e);
  OfficersSchoolDataEvent.DATA_UPDATED = "dataUpdated";
  return OfficersSchoolDataEvent;
}(createjs.Event);
exports.OfficersSchoolDataEvent = o;