Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./225.js");
var s = function (e) {
  function CastleAllianceTournamentEventRewardDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastleAllianceTournamentEventRewardDialog, e);
  CastleAllianceTournamentEventRewardDialog.prototype.applyPropertiesLoaded = function (t = null) {
    this.noRewardFrame = a.CastleGenericRewardDialog.FRAME_NOREWARD_POINT;
    this.headerFrame = a.CastleGenericRewardDialog.FRAME_HEADER_SAMURAI;
    this.wonFrame = a.CastleGenericRewardDialog.FRAME_WON;
    this.gotReward = a.CastleGenericRewardDialog.FRAME_GOT_REWARD;
    e.prototype.applyPropertiesLoaded.call(this, t);
  };
  Object.defineProperty(CastleAllianceTournamentEventRewardDialog.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_allianceTournament_gotRoyalReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentEventRewardDialog.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_allianceTournament_gotRoyalReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentEventRewardDialog.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_allianceTournament_gotTopxReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentEventRewardDialog.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_allianceTournament_gotTopxReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentEventRewardDialog.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points, this.dialogProperties.topXCount];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentEventRewardDialog.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_allianceTournament_gotReward_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentEventRewardDialog.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "dialog_allianceTournament_gotReward_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceTournamentEventRewardDialog.__initialize_static_members = function () {
    CastleAllianceTournamentEventRewardDialog.NAME = "CastleAllianceTournamentEventReward";
  };
  return CastleAllianceTournamentEventRewardDialog;
}(a.CastleGenericRewardDialog);
exports.CastleAllianceTournamentEventRewardDialog = s;
s.__initialize_static_members();
o.classImplementsInterfaces(s, "ICollectableRendererList");