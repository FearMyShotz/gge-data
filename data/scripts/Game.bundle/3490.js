Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./226.js");
var s = function (e) {
  function CastleAllianceAlienInvasionRewardDialogPlayer() {
    return e.call(this) || this;
  }
  n.__extends(CastleAllianceAlienInvasionRewardDialogPlayer, e);
  CastleAllianceAlienInvasionRewardDialogPlayer.prototype.applyPropertiesLoaded = function (t = null) {
    this.noRewardFrame = a.CastleGenericRewardDialog.FRAME_NOREWARD_ALIEN_ALLIANCE;
    this.headerFrame = a.CastleGenericRewardDialog.FRAME_HEADER_ALIEN_ALLIANCE;
    e.prototype.applyPropertiesLoaded.call(this, t);
  };
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_alienInvasion_gotRoyalReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_alienInvasion_gotRoyalReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_alienInvasion_gotTopxReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_alienInvasion_gotTopxReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points, this.dialogProperties.topXCount];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_alienInvasion_gotReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "dialog_alienInvasion_gotReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_alienInvasion_eventEnd_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "noRewardCopyTextId", {
    get: function () {
      return "dialog_alienInvasion_eventEnd_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionRewardDialogPlayer.__initialize_static_members = function () {
    CastleAllianceAlienInvasionRewardDialogPlayer.NAME = "CastleAllianceAlienInvasionEventRewardPlayer";
  };
  return CastleAllianceAlienInvasionRewardDialogPlayer;
}(a.CastleGenericRewardDialog);
exports.CastleAllianceAlienInvasionRewardDialogPlayer = s;
s.__initialize_static_members();
o.classImplementsInterfaces(s, "ICollectableRendererList");