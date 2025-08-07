Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./226.js");
var s = function (e) {
  function CastleAllianceNomadInvasionRewardDialogPlayer() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastleAllianceNomadInvasionRewardDialogPlayer, e);
  CastleAllianceNomadInvasionRewardDialogPlayer.prototype.applyPropertiesLoaded = function (t = null) {
    this.noRewardFrame = a.CastleGenericRewardDialog.FRAME_NOREWARD_NOMAD_ALLIANCE;
    this.headerFrame = a.CastleGenericRewardDialog.FRAME_HEADER_NOMAD_ALLIANCE;
    this.wonFrame = a.CastleGenericRewardDialog.FRAME_WON_NOMAD_ALLIANCE;
    e.prototype.applyPropertiesLoaded.call(this, t);
  };
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogPlayer.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_nomadInvasion_gotRoyalReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogPlayer.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_nomadInvasion_gotRoyalReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogPlayer.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_nomadInvasion_gotTopxReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogPlayer.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_nomadInvasion_gotTopxReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogPlayer.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points, this.dialogProperties.topXCount];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogPlayer.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_nomadInvasion_gotReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogPlayer.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "dialog_nomadInvasion_gotReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogPlayer.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_nomadInvasion_eventEnd_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogPlayer.prototype, "noRewardCopyTextId", {
    get: function () {
      return "dialog_nomadInvasion_eventEnd_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceNomadInvasionRewardDialogPlayer.__initialize_static_members = function () {
    CastleAllianceNomadInvasionRewardDialogPlayer.NAME = "CastleAllianceNomadInvasionEventRewardPlayer";
  };
  return CastleAllianceNomadInvasionRewardDialogPlayer;
}(a.CastleGenericRewardDialog);
exports.CastleAllianceNomadInvasionRewardDialogPlayer = s;
s.__initialize_static_members();
o.classImplementsInterfaces(s, "ICollectableRendererList");