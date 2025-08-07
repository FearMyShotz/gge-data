Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./226.js");
var s = function (e) {
  function CastleRedAllianceAlienInvasionRewardDialogPlayer() {
    return e.call(this) || this;
  }
  n.__extends(CastleRedAllianceAlienInvasionRewardDialogPlayer, e);
  CastleRedAllianceAlienInvasionRewardDialogPlayer.prototype.applyPropertiesLoaded = function (t = null) {
    this.noRewardFrame = a.CastleGenericRewardDialog.FRAME_NOREWARD_RED_ALIEN_ALLIANCE;
    this.headerFrame = a.CastleGenericRewardDialog.FRAME_HEADER_RED_ALIEN;
    this.gotReward = a.CastleGenericRewardDialog.FRAME_GOT_REWARD_RED_ALIEN;
    this.wonFrame = a.CastleGenericRewardDialog.FRAME_GOT_REWARD_RED_ALIEN;
    e.prototype.applyPropertiesLoaded.call(this, t);
  };
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogPlayer.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_redAlienInvasion_gotRoyalReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogPlayer.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_redAlienInvasion_gotRoyalReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogPlayer.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_redAlienInvasion_gotTopxReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogPlayer.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_redAlienInvasion_gotTopxReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogPlayer.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points, this.dialogProperties.topXCount];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogPlayer.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_redAlienInvasion_gotReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogPlayer.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "dialog_redAlienInvasion_gotReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogPlayer.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_redAlienInvasion_eventEnd_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogPlayer.prototype, "noRewardCopyTextId", {
    get: function () {
      return "dialog_redAlienInvasion_eventEnd_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleRedAllianceAlienInvasionRewardDialogPlayer.__initialize_static_members = function () {
    CastleRedAllianceAlienInvasionRewardDialogPlayer.NAME = "CastleRedAllianceAlienInvasionEventRewardPlayer";
  };
  return CastleRedAllianceAlienInvasionRewardDialogPlayer;
}(a.CastleGenericRewardDialog);
exports.CastleRedAllianceAlienInvasionRewardDialogPlayer = s;
s.__initialize_static_members();
o.classImplementsInterfaces(s, "ICollectableRendererList");