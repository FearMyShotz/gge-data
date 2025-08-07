Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./5.js");
var a = require("./16.js");
var s = function () {
  function EventSkinColorsWinterOffensive() {}
  EventSkinColorsWinterOffensive.prototype.getIsoBackgroundColor = function (e) {
    var t = 0;
    switch (e) {
      case o.WorldClassic.KINGDOM_ID:
        t = 15070454;
        break;
      default:
        t = a.ClientConstColor.USE_DEFAULT_COLOR;
    }
    return t;
  };
  EventSkinColorsWinterOffensive.prototype.getWorldmapBackgroundColor = function (e) {
    var t = 0;
    switch (e) {
      case o.WorldClassic.KINGDOM_ID:
        t = 7512743;
        break;
      default:
        t = a.ClientConstColor.USE_DEFAULT_COLOR;
    }
    return t;
  };
  return EventSkinColorsWinterOffensive;
}();
exports.EventSkinColorsWinterOffensive = s;
n.classImplementsInterfaces(s, "IEventSkinColors");