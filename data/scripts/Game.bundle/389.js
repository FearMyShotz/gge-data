Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastlePlayerInfoEvent(t, i = null, n = false, o = false) {
    var a = this;
    a.params = null;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(CastlePlayerInfoEvent, e);
  CastlePlayerInfoEvent.__initialize_static_members = function () {
    CastlePlayerInfoEvent.GET_PLAYERINFO = "get_player_info";
  };
  return CastlePlayerInfoEvent;
}(createjs.Event);
exports.CastlePlayerInfoEvent = o;
o.__initialize_static_members();