Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleNoMoneyC2DialogProperties(t = 0) {
    var i = this;
    i.type = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).type = t;
    return i;
  }
  n.__extends(CastleNoMoneyC2DialogProperties, e);
  CastleNoMoneyC2DialogProperties.__initialize_static_members = function () {
    CastleNoMoneyC2DialogProperties.TYPE_OWN = 0;
    CastleNoMoneyC2DialogProperties.TYPE_ALLIANCE = 1;
  };
  return CastleNoMoneyC2DialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleNoMoneyC2DialogProperties = o;
o.__initialize_static_members();