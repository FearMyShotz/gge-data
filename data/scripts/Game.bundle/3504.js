Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1695.js");
var s = function (e) {
  function LongTermPointEventRewardDialog() {
    var t = e.call(this) || this;
    t.wonFrame = r.CastleGenericRewardDialog.FRAME_GOT_REWARD;
    t.noRewardFrame = r.CastleGenericRewardDialog.FRAME_NOREWARD_BEGGING;
    t.headerFrame = LongTermPointEventRewardDialog.LTPE_FRAME_HEADER_DEFAULT;
    return t;
  }
  n.__extends(LongTermPointEventRewardDialog, e);
  LongTermPointEventRewardDialog.prototype.showLoaded = function (t = null) {
    this.headerFrame = this.dialogProperties.skin.id;
    e.prototype.showLoaded.call(this, t);
  };
  Object.defineProperty(LongTermPointEventRewardDialog.prototype, "assetClassName", {
    get: function () {
      return LongTermPointEventRewardDialog.ASSET_NAME;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastlePointEventRewardDialog.prototype, "assetClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardDialog.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_longPointsEvent_gotRoyalReward_title" + this.dialogProperties.skin.textSuffix;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastlePointEventRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardDialog.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_longPointsEvent_gotRoyalReward_copy" + this.dialogProperties.skin.textSuffix;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastlePointEventRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardDialog.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_longPointsEvent_gotTopxReward_title" + this.dialogProperties.skin.textSuffix;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastlePointEventRewardDialog.prototype, "topXTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardDialog.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_longPointsEvent_gotTopxReward_copy" + this.dialogProperties.skin.textSuffix;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastlePointEventRewardDialog.prototype, "topXCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardDialog.prototype, "gotRewardCopyTextId", {
    get: function () {
      if (this.dialogProperties.skin.id == LongTermPointEventRewardDialog.LTPE_FRAME_HEADER_NEW_KING) {
        if (this.dialogProperties.points == 1) {
          return "dialog_pointEvent_gotReward_kingEric_copy_singular";
        } else {
          return "dialog_pointEvent_gotReward_kingEric_copy";
        }
      } else if (this.dialogProperties.points == 1) {
        return "dialog_longPointsEvent_gotReward_copy_singular";
      } else {
        return "dialog_longPointsEvent_gotReward_copy";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastlePointEventRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardDialog.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_longPointsEvent_eventEnd_title" + this.dialogProperties.skin.textSuffix;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastlePointEventRewardDialog.prototype, "noRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardDialog.prototype, "noRewardCopyTextId", {
    get: function () {
      if (this.dialogProperties.points == 1) {
        return "dialog_longPointsEvent_eventEnd" + this.dialogProperties.skin.textSuffix + "_singular";
      } else {
        return "dialog_longPointsEvent_eventEnd" + this.dialogProperties.skin.textSuffix;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastlePointEventRewardDialog.prototype, "noRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventRewardDialog.__initialize_static_members = function () {
    LongTermPointEventRewardDialog.NAME = "LongTermPeRewardDialog";
    LongTermPointEventRewardDialog.ASSET_NAME = "LongTermPointEventReward";
    LongTermPointEventRewardDialog.LTPE_FRAME_HEADER_DEFAULT = 1;
    LongTermPointEventRewardDialog.LTPE_FRAME_HEADER_HALLOWEEN = 2;
    LongTermPointEventRewardDialog.LTPE_FRAME_HEADER_WINTER = 3;
    LongTermPointEventRewardDialog.LTPE_FRAME_HEADER_SPRING = 4;
    LongTermPointEventRewardDialog.LTPE_FRAME_HEADER_REUSABLE = 5;
    LongTermPointEventRewardDialog.LTPE_FRAME_HEADER_NEW_KING = 6;
  };
  return LongTermPointEventRewardDialog;
}(a.CastlePointEventRewardDialog);
exports.LongTermPointEventRewardDialog = s;
var r = require("./226.js");
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();