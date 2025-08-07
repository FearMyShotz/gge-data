Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleAllianceHelpRequestDataEvent(t, i = null, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).requestVO = i;
    return a;
  }
  n.__extends(CastleAllianceHelpRequestDataEvent, e);
  CastleAllianceHelpRequestDataEvent.__initialize_static_members = function () {
    CastleAllianceHelpRequestDataEvent.DATA_UPDATED = "data_updated";
    CastleAllianceHelpRequestDataEvent.REQUEST_COMPLETE = "request_complete";
  };
  return CastleAllianceHelpRequestDataEvent;
}(createjs.Event);
exports.CastleAllianceHelpRequestDataEvent = o;
o.__initialize_static_members();