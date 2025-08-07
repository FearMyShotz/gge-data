Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./225.js");
var s = function (e) {
  function CastleBeggingKnightsRewardDialog() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).noRewardFrame = a.CastleGenericRewardDialog.FRAME_NOREWARD_BEGGING;
    t.headerFrame = a.CastleGenericRewardDialog.FRAME_HEADER_BEGGING;
    return t;
  }
  n.__extends(CastleBeggingKnightsRewardDialog, e);
  Object.defineProperty(CastleBeggingKnightsRewardDialog.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_BeggingKnights_gotRoyalReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBeggingKnightsRewardDialog.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_BeggingKnights_gotRoyalReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBeggingKnightsRewardDialog.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_BeggingKnights_gotMultiReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBeggingKnightsRewardDialog.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_BeggingKnights_gotMultiReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBeggingKnightsRewardDialog.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.topXCount];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBeggingKnightsRewardDialog.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_BeggingKnights_gotReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBeggingKnightsRewardDialog.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "dialog_BeggingKnights_gotReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBeggingKnightsRewardDialog.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_BeggingKnights_eventEnd_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBeggingKnightsRewardDialog.prototype, "noRewardCopyTextId", {
    get: function () {
      return "dialog_BeggingKnights_eventEnd_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleBeggingKnightsRewardDialog.__initialize_static_members = function () {
    CastleBeggingKnightsRewardDialog.NAME = "CastleBeggingKnightsReward";
  };
  return CastleBeggingKnightsRewardDialog;
}(a.CastleGenericRewardDialog);
exports.CastleBeggingKnightsRewardDialog = s;
s.__initialize_static_members();
o.classImplementsInterfaces(s, "ICollectableRendererList");