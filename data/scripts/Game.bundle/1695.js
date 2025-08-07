Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./226.js");
var r = function (e) {
  function CastlePointEventRewardDialog() {
    var t = e.call(this) || this;
    t.noRewardFrame = s.CastleGenericRewardDialog.FRAME_NOREWARD_POINT;
    t.headerFrame = s.CastleGenericRewardDialog.FRAME_HEADER_POINT;
    return t;
  }
  n.__extends(CastlePointEventRewardDialog, e);
  CastlePointEventRewardDialog.prototype.makeSpecialRewardLocalizedTextVO = function (e, t, i) {
    if (t != 1) {
      return new a.LocalizedTextVO(e, [t, i]);
    } else {
      return new a.LocalizedTextVO(e, [i]);
    }
  };
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_pointsEvent_gotRoyalReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_pointsEvent_gotRoyalReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_pointsEvent_gotTopxReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_pointsEvent_gotTopxReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points, this.dialogProperties.topXCount];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_pointsEvent_gotReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "gotRewardCopyTextId", {
    get: function () {
      if (this.dialogProperties.points == 1) {
        return "dialog_pointsEvent_gotReward_copy_singular";
      } else {
        return "dialog_pointsEvent_gotReward_copy";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_pointsEvent_eventEnd_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "noRewardCopyTextId", {
    get: function () {
      if (this.dialogProperties.points == 1) {
        return "dialog_pointsEvent_eventEnd_copy_singular";
      } else {
        return "dialog_pointsEvent_eventEnd_copy";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePointEventRewardDialog.__initialize_static_members = function () {
    CastlePointEventRewardDialog.NAME = "CastlePointEventReward";
  };
  return CastlePointEventRewardDialog;
}(s.CastleGenericRewardDialog);
exports.CastlePointEventRewardDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();