Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./225.js");
var s = function (e) {
  function CastleRedAllianceAlienInvasionRewardDialogAlliance() {
    return e.call(this) || this;
  }
  n.__extends(CastleRedAllianceAlienInvasionRewardDialogAlliance, e);
  CastleRedAllianceAlienInvasionRewardDialogAlliance.prototype.applyPropertiesLoaded = function (t = null) {
    this.noRewardFrame = a.CastleGenericRewardDialog.FRAME_NOREWARD_RED_ALIEN_ALLIANCE;
    this.headerFrame = a.CastleGenericRewardDialog.FRAME_HEADER_RED_ALIEN;
    e.prototype.applyPropertiesLoaded.call(this, t);
  };
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogAlliance.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_redAlienInvasionAlliance_gotRoyalReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogAlliance.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_redAlienInvasionAlliance_gotRoyalReward" + this.grantTypeSuffix + "_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogAlliance.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_redAlienInvasionAlliance_gotTopxReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogAlliance.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_redAlienInvasionAlliance_gotTopxReward" + this.grantTypeSuffix + "_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogAlliance.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points, this.dialogProperties.topXCount];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogAlliance.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_redAlienInvasionAlliance_gotReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogAlliance.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "dialog_redAlienInvasionAlliance_gotReward" + this.grantTypeSuffix + "_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogAlliance.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_redAlienInvasionAlliance_eventEnd_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardDialogAlliance.prototype, "noRewardCopyTextId", {
    get: function () {
      return "dialog_redAlienInvasionAlliance_eventEnd_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleRedAllianceAlienInvasionRewardDialogAlliance.__initialize_static_members = function () {
    CastleRedAllianceAlienInvasionRewardDialogAlliance.NAME = "CastleRedAllianceAlienInvasionRewardAlliance";
  };
  return CastleRedAllianceAlienInvasionRewardDialogAlliance;
}(a.CastleGenericRewardDialog);
exports.CastleRedAllianceAlienInvasionRewardDialogAlliance = s;
s.__initialize_static_members();
o.classImplementsInterfaces(s, "ICollectableRendererList");