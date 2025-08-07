Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./226.js");
var s = function (e) {
  function CastleLuckyPointEventRewardDialog() {
    var t = e.call(this) || this;
    t.noRewardFrame = a.CastleGenericRewardDialog.FRAME_NOREWARD_LUCKY;
    t.headerFrame = a.CastleGenericRewardDialog.FRAME_HEADER_LUCKY;
    return t;
  }
  n.__extends(CastleLuckyPointEventRewardDialog, e);
  Object.defineProperty(CastleLuckyPointEventRewardDialog.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_luckyWheel_pointsEvent_gotRoyalReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyPointEventRewardDialog.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_luckyWheel_pointsEvent_gotRoyalReward_desc";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyPointEventRewardDialog.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_luckyWheel_pointsEvent_gotTopxReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyPointEventRewardDialog.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_luckyWheel_pointsEvent_gotTopxReward_desc";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyPointEventRewardDialog.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points, this.dialogProperties.topXCount];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyPointEventRewardDialog.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_luckyWheel_pointsEvent_gotReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyPointEventRewardDialog.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "dialog_luckyWheel_pointsEvent_gotReward_desc";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyPointEventRewardDialog.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_luckyWheel_pointsEvent_eventEnd_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyPointEventRewardDialog.prototype, "noRewardCopyTextId", {
    get: function () {
      return "dialog_luckyWheel_pointsEvent_eventEnd_desc";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyPointEventRewardDialog.__initialize_static_members = function () {
    CastleLuckyPointEventRewardDialog.NAME = "CastleLuckyEventReward";
  };
  return CastleLuckyPointEventRewardDialog;
}(a.CastleGenericRewardDialog);
exports.CastleLuckyPointEventRewardDialog = s;
s.__initialize_static_members();
o.classImplementsInterfaces(s, "ICollectableRendererList");