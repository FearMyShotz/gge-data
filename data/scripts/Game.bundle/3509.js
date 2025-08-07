Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./225.js");
var s = function (e) {
  function CastleNomadInvasionEventRewardDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastleNomadInvasionEventRewardDialog, e);
  CastleNomadInvasionEventRewardDialog.prototype.applyPropertiesLoaded = function (t = null) {
    this.noRewardFrame = a.CastleGenericRewardDialog.FRAME_NOREWARD_NOMAD;
    this.headerFrame = a.CastleGenericRewardDialog.FRAME_HEADER_NOMAD;
    this.wonFrame = a.CastleGenericRewardDialog.FRAME_WON_NOMAD;
    e.prototype.applyPropertiesLoaded.call(this, t);
  };
  Object.defineProperty(CastleNomadInvasionEventRewardDialog.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_nomadInvasion_gotRoyalReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNomadInvasionEventRewardDialog.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_nomadInvasion_gotRoyalReward_desc";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNomadInvasionEventRewardDialog.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_nomadInvasion_gotTopXReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNomadInvasionEventRewardDialog.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_nomadInvasion_gotTopXReward_desc";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNomadInvasionEventRewardDialog.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points, this.dialogProperties.topXCount];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNomadInvasionEventRewardDialog.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_nomadInvasion_gotReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNomadInvasionEventRewardDialog.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "dialog_nomadInvasion_gotReward_desc";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNomadInvasionEventRewardDialog.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_nomadInvasion_eventEnd_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNomadInvasionEventRewardDialog.prototype, "noRewardCopyTextId", {
    get: function () {
      return "dialog_nomadInvasion_eventEnd_desc";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleNomadInvasionEventRewardDialog.__initialize_static_members = function () {
    CastleNomadInvasionEventRewardDialog.NAME = "CastleNomadInvasionEventReward";
  };
  return CastleNomadInvasionEventRewardDialog;
}(a.CastleGenericRewardDialog);
exports.CastleNomadInvasionEventRewardDialog = s;
s.__initialize_static_members();
o.classImplementsInterfaces(s, "ICollectableRendererList");