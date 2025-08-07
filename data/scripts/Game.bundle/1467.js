Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleConstructionItemsSwitchEvent(t, i, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this)._worldmapObjectVO = i;
    return a;
  }
  n.__extends(CastleConstructionItemsSwitchEvent, e);
  Object.defineProperty(CastleConstructionItemsSwitchEvent.prototype, "worldmapObjectVO", {
    get: function () {
      return this._worldmapObjectVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsSwitchEvent.SWITCH_CASTLE = "ciSwitchCastle";
  return CastleConstructionItemsSwitchEvent;
}(createjs.Event);
exports.CastleConstructionItemsSwitchEvent = o;