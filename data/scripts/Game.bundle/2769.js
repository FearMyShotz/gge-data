Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./5.js");
var a = require("./16.js");
var s = function () {
  function EventSkinColorsHalloween() {}
  EventSkinColorsHalloween.prototype.getIsoBackgroundColor = function (e) {
    return a.ClientConstColor.USE_DEFAULT_COLOR;
  };
  EventSkinColorsHalloween.prototype.getWorldmapBackgroundColor = function (e) {
    var t = 0;
    switch (e) {
      case o.WorldClassic.KINGDOM_ID:
        t = 3229451;
        break;
      default:
        t = a.ClientConstColor.USE_DEFAULT_COLOR;
    }
    return t;
  };
  return EventSkinColorsHalloween;
}();
exports.EventSkinColorsHalloween = s;
n.classImplementsInterfaces(s, "IEventSkinColors");