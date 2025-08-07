Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleLaboratoryProgressEvent(t, i, n = false, o = false) {
    var s = this;
    s.donatedAmount = 0;
    s.objectID = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this, t, n, o) || this).donatedAmount = i[1];
    s.objectID = a.int(i[0]);
    return s;
  }
  n.__extends(CastleLaboratoryProgressEvent, e);
  CastleLaboratoryProgressEvent.__initialize_static_members = function () {
    CastleLaboratoryProgressEvent.NEW_PROGRESS = "new_progress";
  };
  return CastleLaboratoryProgressEvent;
}(createjs.Event);
exports.CastleLaboratoryProgressEvent = o;
var a = require("./6.js");
o.__initialize_static_members();