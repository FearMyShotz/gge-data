Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1127.js");
var s = function (e) {
  function CastleKhanTabletBoosterDialog() {
    return e.call(this, CastleKhanTabletBoosterDialog.NAME) || this;
  }
  n.__extends(CastleKhanTabletBoosterDialog, e);
  Object.defineProperty(CastleKhanTabletBoosterDialog.prototype, "titleText", {
    get: function () {
      return "dialog_nomadBooster_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACastlePointBoosterDialog.prototype, "titleText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKhanTabletBoosterDialog.prototype, "descriptionText", {
    get: function () {
      return "dialog_nomadBooster_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACastlePointBoosterDialog.prototype, "descriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleKhanTabletBoosterDialog.prototype.bonusToolTipTextID = function () {
    return "dialog_nomadBooster_boost_tt";
  };
  CastleKhanTabletBoosterDialog.__initialize_static_members = function () {
    CastleKhanTabletBoosterDialog.NAME = "CastleKhanTabletBoosterExternal";
  };
  return CastleKhanTabletBoosterDialog;
}(a.ACastlePointBoosterDialog);
exports.CastleKhanTabletBoosterDialog = s;
s.__initialize_static_members();
o.classImplementsInterfaces(s, "ICollectableRendererList");