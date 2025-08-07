Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1127.js");
var s = function (e) {
  function CastleKhanMedalBoosterDialog() {
    return e.call(this, CastleKhanMedalBoosterDialog.NAME) || this;
  }
  n.__extends(CastleKhanMedalBoosterDialog, e);
  Object.defineProperty(CastleKhanMedalBoosterDialog.prototype, "titleText", {
    get: function () {
      return "dialog_khanMedalBooster_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACastlePointBoosterDialog.prototype, "titleText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKhanMedalBoosterDialog.prototype, "descriptionText", {
    get: function () {
      return "dialog_khanMedalBooster_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACastlePointBoosterDialog.prototype, "descriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleKhanMedalBoosterDialog.prototype.bonusToolTipTextID = function () {
    return "dialog_khanMedalBooster_boost_tt";
  };
  CastleKhanMedalBoosterDialog.__initialize_static_members = function () {
    CastleKhanMedalBoosterDialog.NAME = "CastleKhanMedalBoosterExternal";
  };
  return CastleKhanMedalBoosterDialog;
}(a.ACastlePointBoosterDialog);
exports.CastleKhanMedalBoosterDialog = s;
s.__initialize_static_members();
o.classImplementsInterfaces(s, "ICollectableRendererList");