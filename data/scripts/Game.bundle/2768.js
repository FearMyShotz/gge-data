Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./16.js");
var a = function () {
  function EventSkinColorsDefault() {}
  EventSkinColorsDefault.prototype.getIsoBackgroundColor = function (e) {
    return o.ClientConstColor.USE_DEFAULT_COLOR;
  };
  EventSkinColorsDefault.prototype.getWorldmapBackgroundColor = function (e) {
    return o.ClientConstColor.USE_DEFAULT_COLOR;
  };
  return EventSkinColorsDefault;
}();
exports.EventSkinColorsDefault = a;
n.classImplementsInterfaces(a, "IEventSkinColors");