Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./5.js");
var a = require("./16.js");
var s = function () {
  function EventSkinColorsWinter() {}
  EventSkinColorsWinter.prototype.getIsoBackgroundColor = function (e) {
    var t = 0;
    switch (e) {
      case o.WorldClassic.KINGDOM_ID:
        t = 15987442;
        break;
      default:
        t = a.ClientConstColor.USE_DEFAULT_COLOR;
    }
    return t;
  };
  EventSkinColorsWinter.prototype.getWorldmapBackgroundColor = function (e) {
    var t = 0;
    switch (e) {
      case o.WorldClassic.KINGDOM_ID:
        t = 15596025;
        break;
      default:
        t = a.ClientConstColor.USE_DEFAULT_COLOR;
    }
    return t;
  };
  return EventSkinColorsWinter;
}();
exports.EventSkinColorsWinter = s;
n.classImplementsInterfaces(s, "IEventSkinColors");