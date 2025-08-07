Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./225.js");
var s = function (e) {
  function CastleSamuraiInvasionEventRewardDialog() {
    return e.call(this) || this;
  }
  n.__extends(CastleSamuraiInvasionEventRewardDialog, e);
  CastleSamuraiInvasionEventRewardDialog.prototype.applyPropertiesLoaded = function (t = null) {
    this.noRewardFrame = a.CastleGenericRewardDialog.FRAME_NOREWARD_SAMURAI;
    this.headerFrame = a.CastleGenericRewardDialog.FRAME_HEADER_SAMURAI;
    this.wonFrame = a.CastleGenericRewardDialog.FRAME_WON_SAMURAI;
    this.gotReward = a.CastleGenericRewardDialog.FRAME_GOT_REWARD_SAMURAI;
    e.prototype.applyPropertiesLoaded.call(this, t);
  };
  Object.defineProperty(CastleSamuraiInvasionEventRewardDialog.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_samuraiInvasion_gotRoyalReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionEventRewardDialog.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_samuraiInvasion_gotRoyalReward_desc";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionEventRewardDialog.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_samuraiInvasion_gotTopXReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionEventRewardDialog.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_samuraiInvasion_gotTopXReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionEventRewardDialog.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points, this.dialogProperties.topXCount];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionEventRewardDialog.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_samuraiInvasion_gotReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionEventRewardDialog.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "dialog_samuraiInvasion_gotReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionEventRewardDialog.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_samuraiInvasion_eventEnd_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionEventRewardDialog.prototype, "noRewardCopyTextId", {
    get: function () {
      return "dialog_samuraiInvasion_eventEnd_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleSamuraiInvasionEventRewardDialog.__initialize_static_members = function () {
    CastleSamuraiInvasionEventRewardDialog.NAME = "CastleSamuraiInvasionEventReward";
  };
  return CastleSamuraiInvasionEventRewardDialog;
}(a.CastleGenericRewardDialog);
exports.CastleSamuraiInvasionEventRewardDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();