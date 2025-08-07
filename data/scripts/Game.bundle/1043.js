Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleMonumentProgressEvent(t, i, n = false, o = false) {
    var s = this;
    s.donatedAmount = 0;
    s.objectID = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this, t, n, o) || this).donatedAmount = i[1];
    s.objectID = a.int(i[0]);
    return s;
  }
  n.__extends(CastleMonumentProgressEvent, e);
  CastleMonumentProgressEvent.__initialize_static_members = function () {
    CastleMonumentProgressEvent.NEW_PROGRESS = "new_progress";
  };
  return CastleMonumentProgressEvent;
}(createjs.Event);
exports.CastleMonumentProgressEvent = o;
var a = require("./6.js");
o.__initialize_static_members();