Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./226.js");
var s = function (e) {
  function CastleAllianceAlienInvasionRewardDialogAlliance() {
    return e.call(this) || this;
  }
  n.__extends(CastleAllianceAlienInvasionRewardDialogAlliance, e);
  CastleAllianceAlienInvasionRewardDialogAlliance.prototype.applyPropertiesLoaded = function (t = null) {
    this.noRewardFrame = a.CastleGenericRewardDialog.FRAME_NOREWARD_ALIEN_ALLIANCE;
    this.headerFrame = a.CastleGenericRewardDialog.FRAME_HEADER_ALIEN_ALLIANCE;
    e.prototype.applyPropertiesLoaded.call(this, t);
  };
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogAlliance.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_alienInvasionAlliance_gotRoyalReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogAlliance.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_alienInvasionAlliance_gotRoyalReward" + this.grantTypeSuffix + "_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogAlliance.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_alienInvasionAlliance_gotTopxReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogAlliance.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_alienInvasionAlliance_gotTopxReward" + this.grantTypeSuffix + "_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogAlliance.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points, this.dialogProperties.topXCount];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogAlliance.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_alienInvasionAlliance_gotReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogAlliance.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "dialog_alienInvasionAlliance_gotReward" + this.grantTypeSuffix + "_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogAlliance.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_alienInvasionAlliance_eventEnd_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogAlliance.prototype, "noRewardCopyTextId", {
    get: function () {
      return "dialog_alienInvasionAlliance_eventEnd_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionRewardDialogAlliance.__initialize_static_members = function () {
    CastleAllianceAlienInvasionRewardDialogAlliance.NAME = "CastleAllianceAlienInvasionRewardAlliance";
  };
  return CastleAllianceAlienInvasionRewardDialogAlliance;
}(a.CastleGenericRewardDialog);
exports.CastleAllianceAlienInvasionRewardDialogAlliance = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();