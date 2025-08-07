Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SkipCooldownEvent(t, i, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this)._mapObjectVO = i;
    return a;
  }
  n.__extends(SkipCooldownEvent, e);
  Object.defineProperty(SkipCooldownEvent.prototype, "mapObjectVO", {
    get: function () {
      return this._mapObjectVO;
    },
    enumerable: true,
    configurable: true
  });
  SkipCooldownEvent.__initialize_static_members = function () {
    SkipCooldownEvent.UPDATE = "update";
  };
  return SkipCooldownEvent;
}(createjs.Event);
exports.SkipCooldownEvent = o;
o.__initialize_static_members();