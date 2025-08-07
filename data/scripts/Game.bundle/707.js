Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleDefenceDataEvent(t, i = null, n = true, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(CastleDefenceDataEvent, e);
  CastleDefenceDataEvent.__initialize_static_members = function () {
    CastleDefenceDataEvent.GET_DEFENCE_INFOS = "getdefenceinfos";
    CastleDefenceDataEvent.DEFENCELIST_CHANGED = "defencelistchanged";
    CastleDefenceDataEvent.DEFENCE_PRIORITYLIST_CHANGED = "defenceprioritylistchanged";
  };
  return CastleDefenceDataEvent;
}(createjs.Event);
exports.CastleDefenceDataEvent = o;
o.__initialize_static_members();