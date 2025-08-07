Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./225.js");
var s = function (e) {
  function CastleAllianceNomadInvasionRewardDialogAlliance() {
    return e.call(this) || this;
  }
  n.__extends(CastleAllianceNomadInvasionRewardDialogAlliance, e);
  CastleAllianceNomadInvasionRewardDialogAlliance.prototype.applyPropertiesLoaded = function (t = null) {
    this.noRewardFrame = a.CastleGenericRewardDialog.FRAME_NOREWARD_NOMAD_ALLIANCE;
    this.headerFrame = a.CastleGenericRewardDialog.FRAME_HEADER_NOMAD_ALLIANCE;
    this.wonFrame = a.CastleGenericRewardDialog.FRAME_WON_NOMAD_ALLIANCE;
    e.prototype.applyPropertiesLoaded.call(this, t);
  };
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogAlliance.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_nomadInvasionAlliance_gotRoyalReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogAlliance.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_nomadInvasionAlliance_gotRoyalReward" + this.grantTypeSuffix + "_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogAlliance.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_nomadInvasionAlliance_gotTopxReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogAlliance.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_nomadInvasionAlliance_gotTopxReward" + this.grantTypeSuffix + "_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogAlliance.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points, this.dialogProperties.topXCount];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogAlliance.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_nomadInvasionAlliance_gotReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogAlliance.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "dialog_nomadInvasionAlliance_gotReward" + this.grantTypeSuffix + "_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogAlliance.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_nomadInvasionAlliance_eventEnd_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardDialogAlliance.prototype, "noRewardCopyTextId", {
    get: function () {
      return "dialog_nomadInvasionAlliance_eventEnd_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceNomadInvasionRewardDialogAlliance.__initialize_static_members = function () {
    CastleAllianceNomadInvasionRewardDialogAlliance.NAME = "CastleAllianceNomadInvasionRewardAlliance";
  };
  return CastleAllianceNomadInvasionRewardDialogAlliance;
}(a.CastleGenericRewardDialog);
exports.CastleAllianceNomadInvasionRewardDialogAlliance = s;
s.__initialize_static_members();
o.classImplementsInterfaces(s, "ICollectableRendererList");