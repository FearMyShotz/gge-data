Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleSpecialEventFactory() {}
  CastleSpecialEventFactory.createByEventType = function (e) {
    try {
      e = e.substr(0, 1).toUpperCase() + e.substr(1);
      return new (o.getDefinitionByName(e + "EventVO"))();
    } catch (e) {
      return null;
    }
  };
  CastleSpecialEventFactory.__initialize_static_members = function () {
    CastleSpecialEventFactory.EVENT_VO_CLASSPATH = "com.goodgamestudios.castle.model.components.specialevents.";
  };
  return CastleSpecialEventFactory;
}();
exports.CastleSpecialEventFactory = n;
var o = require("./1.js");
n.__initialize_static_members();