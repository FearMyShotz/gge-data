Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function DecoStorageEvent(t, i = null, n = true, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.params = i;
    return a;
  }
  n.__extends(DecoStorageEvent, e);
  DecoStorageEvent.__initialize_static_members = function () {
    DecoStorageEvent.ON_INVENTORY_UPDATED = "onInventoryUpdated";
    DecoStorageEvent.ON_NEW_INDICATOR_UPDATED = "onNewIndicatorUpdated";
    DecoStorageEvent.ON_TEMP_DECOS_UPDATED = "onTempDecosUpdated";
  };
  return DecoStorageEvent;
}(createjs.Event);
exports.DecoStorageEvent = o;
o.__initialize_static_members();