Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./4.js");
var r = require("./1904.js");
var l = function (e) {
  function FactionHunterEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(FactionHunterEventDialog, e);
  Object.defineProperty(FactionHunterEventDialog.prototype, "remainingEventTimeInSeconds", {
    get: function () {
      return s.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_UNITDEALER_FACTION_INVASION).remainingEventTimeInSeconds;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleFactionArmorerEventDialog.prototype, "remainingEventTimeInSeconds").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionHunterEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return c.FactionHunterMerchantScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleFactionArmorerEventDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionHunterEventDialog.prototype, "speechBubbleTextID", {
    get: function () {
      return "dialog_berimondInvasion_armorer_speechBubble";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleFactionArmorerEventDialog.prototype, "speechBubbleTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionHunterEventDialog.prototype, "descriptionTextID", {
    get: function () {
      return "dialog_berimondInvasion_armorer_hint";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleFactionArmorerEventDialog.prototype, "descriptionTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionHunterEventDialog.__initialize_static_members = function () {
    FactionHunterEventDialog.NAME = "FactionHunterEventDialog";
  };
  return FactionHunterEventDialog;
}(r.CastleFactionArmorerEventDialog);
exports.FactionHunterEventDialog = l;
var c = require("./4437.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();