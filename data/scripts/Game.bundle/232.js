Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SliderEvent(t, i, n = true, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).newValues = i;
    return a;
  }
  n.__extends(SliderEvent, e);
  Object.defineProperty(SliderEvent.prototype, "selectedValue", {
    get: function () {
      return this.newValues;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SliderEvent.prototype, "selectedValues", {
    get: function () {
      return this.newValues;
    },
    enumerable: true,
    configurable: true
  });
  SliderEvent.__initialize_static_members = function () {
    SliderEvent.VALUE_CHANGED = "valuechanged";
  };
  return SliderEvent;
}(require("./366.js").CastleEvent);
exports.SliderEvent = o;
o.__initialize_static_members();