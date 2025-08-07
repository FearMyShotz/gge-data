Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSlotRewardEventDialogProperties(t) {
    var i = this;
    i._isToolSlot = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._isToolSlot = Boolean(t);
    return i;
  }
  n.__extends(CastleSlotRewardEventDialogProperties, e);
  Object.defineProperty(CastleSlotRewardEventDialogProperties.prototype, "isToolSlot", {
    get: function () {
      return this._isToolSlot;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSlotRewardEventDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleSlotRewardEventDialogProperties = o;