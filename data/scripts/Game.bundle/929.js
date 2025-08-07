Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastlePresetComboboxItemRendererEvent(t, i) {
    var n = this;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, true, true) || this).presetVO = i;
    return n;
  }
  n.__extends(CastlePresetComboboxItemRendererEvent, e);
  CastlePresetComboboxItemRendererEvent.__initialize_static_members = function () {
    CastlePresetComboboxItemRendererEvent.OPTIONS = "presetComboboxItemOptions";
  };
  return CastlePresetComboboxItemRendererEvent;
}(createjs.Event);
exports.CastlePresetComboboxItemRendererEvent = o;
o.__initialize_static_members();