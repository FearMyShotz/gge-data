Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1127.js");
var s = function (e) {
  function CastleRageBoosterDialog() {
    return e.call(this, CastleRageBoosterDialog.NAME) || this;
  }
  n.__extends(CastleRageBoosterDialog, e);
  Object.defineProperty(CastleRageBoosterDialog.prototype, "titleText", {
    get: function () {
      return "dialog_rageBooster_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACastlePointBoosterDialog.prototype, "titleText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRageBoosterDialog.prototype, "descriptionText", {
    get: function () {
      return "dialog_rageBooster_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACastlePointBoosterDialog.prototype, "descriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleRageBoosterDialog.prototype.bonusToolTipTextID = function () {
    return "dialog_rageBooster_boost_tt";
  };
  CastleRageBoosterDialog.__initialize_static_members = function () {
    CastleRageBoosterDialog.NAME = "CastleRageBoosterExternal";
  };
  return CastleRageBoosterDialog;
}(a.ACastlePointBoosterDialog);
exports.CastleRageBoosterDialog = s;
s.__initialize_static_members();
o.classImplementsInterfaces(s, "ICollectableRendererList");