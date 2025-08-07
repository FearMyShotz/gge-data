Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./75.js");
var s = require("./4.js");
var r = require("./225.js");
var l = require("./3.js");
var c = require("./2.js");
var u = require("./1691.js");
var d = require("./13.js");
var p = require("./19.js");
var h = function (e) {
  function CastleCollectorEventRewardDialog() {
    return e.call(this, CastleCollectorEventRewardDialog.NAME) || this;
  }
  n.__extends(CastleCollectorEventRewardDialog, e);
  CastleCollectorEventRewardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._rewards = new u.CastleGenericRewardsComponent(this.dialogDisp.mc_items, true, true, null, function (e) {
      e.getRenderer(p.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = e.itemVE && e.itemVE.textfieldBackgroundVisible() ? 0 : 5;
    });
  };
  CastleCollectorEventRewardDialog.prototype.initDialog = function () {
    var e;
    var t;
    if (this.dialogProperties.rewardList && this.dialogProperties.rewardList.length > 0) {
      e = new l.LocalizedTextVO(d.TextHelper.toUpperCaseLocaSafeTextId(this.gotRewardTitleTextId));
      t = new l.LocalizedTextVO(this.gotRewardCopyTextId, [this.dialogProperties.points]);
    } else {
      e = new l.LocalizedTextVO(d.TextHelper.toUpperCaseLocaSafeTextId(this.noRewardTitleTextId));
      t = this.makeSpecialRewardLocalizedTextVO(this.noRewardCopyTextId, this.dialogProperties.points, this.dialogProperties.ownRank);
    }
    var i = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, e);
    i.autoFitToBounds = true;
    i.verticalAlign = c.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, t).autoFitToBounds = true;
  };
  CastleCollectorEventRewardDialog.prototype.updateRewards = function () {
    this._rewards.onShow();
    if (this.dialogProperties.rewardList && this.dialogProperties.rewardList.length > 0) {
      this.dialogProperties.rewardList.sort(a.ClientConstSort.sortCombinedEventRewards);
      this._rewards.updateWithNewData(this.dialogProperties.rewardList);
    }
  };
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "eventSuffix", {
    get: function () {
      return s.CastleModel.collectEventData.getCollectInfoVOByID(this.dialogProperties.optionID).collectorEventSkinName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_collector_eventEnd_title_" + this.eventSuffix;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_collector_eventReward_copy_" + this.eventSuffix;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "topXTitleTextId", {
    get: function () {
      return this.firstPlaceTitleTextId;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "topXCopyTextId", {
    get: function () {
      return this.firstPlaceCopyTextId;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "gotRewardTitleTextId", {
    get: function () {
      return this.firstPlaceTitleTextId;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "gotRewardCopyTextId", {
    get: function () {
      return this.firstPlaceCopyTextId;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "noRewardTitleTextId", {
    get: function () {
      return this.firstPlaceCopyTextId;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "noRewardCopyTextId", {
    get: function () {
      return "dialog_collector_eventNoReward_copy_" + this.eventSuffix;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleCollectorEventRewardDialog.NAME = "CastleGenericRewardsDialog";
  return CastleCollectorEventRewardDialog;
}(r.CastleGenericRewardDialog);
exports.CastleCollectorEventRewardDialog = h;
o.classImplementsInterfaces(h, "ICollectableRendererList");