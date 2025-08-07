Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./225.js");
var s = function (e) {
  function CastleSamuraiInvasionAllianceRewardDialog() {
    return e.call(this) || this;
  }
  n.__extends(CastleSamuraiInvasionAllianceRewardDialog, e);
  CastleSamuraiInvasionAllianceRewardDialog.prototype.applyPropertiesLoaded = function (t = null) {
    this.noRewardFrame = a.CastleGenericRewardDialog.FRAME_NOREWARD_SAMURAI_ALLIANCE;
    this.headerFrame = a.CastleGenericRewardDialog.FRAME_HEADER_SAMURAI_ALLIANCE;
    this.wonFrame = a.CastleGenericRewardDialog.FRAME_WON_SAMURAI_ALLIANCE;
    this.gotReward = a.CastleGenericRewardDialog.FRAME_GOT_REWARD_SAMURAI_ALLIANCE;
    e.prototype.applyPropertiesLoaded.call(this, t);
  };
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_samuraiInvasionAlliance_gotRoyalReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_samuraiInvasionAlliance_gotRoyalReward" + this.grantTypeSuffix + "_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_samuraiInvasionAlliance_gotTopxReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_samuraiInvasionAlliance_gotTopxReward" + this.grantTypeSuffix + "_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points, this.dialogProperties.topXCount];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_samuraiInvasionAlliance_gotReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "dialog_samuraiInvasionAlliance_gotReward" + this.grantTypeSuffix + "_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_samuraiInvasionAlliance_eventEnd_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "noRewardCopyTextId", {
    get: function () {
      return "dialog_samuraiInvasionAlliance_eventEnd_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleSamuraiInvasionAllianceRewardDialog.__initialize_static_members = function () {
    CastleSamuraiInvasionAllianceRewardDialog.NAME = "CastleSamuraiInvasionAllianceReward";
  };
  return CastleSamuraiInvasionAllianceRewardDialog;
}(a.CastleGenericRewardDialog);
exports.CastleSamuraiInvasionAllianceRewardDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();