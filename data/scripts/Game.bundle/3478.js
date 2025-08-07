Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./13.js");
var s = require("./4.js");
var r = require("./1685.js");
var l = function (e) {
  function CastleCampaignRewardDialogProperties(t) {
    var i = e.call(this) || this;
    i._reward = s.CastleModel.rewardData.getListByIdArray(t.RIDS);
    return i;
  }
  n.__extends(CastleCampaignRewardDialogProperties, e);
  Object.defineProperty(CastleCampaignRewardDialogProperties.prototype, "reward", {
    get: function () {
      return this._reward;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicQuestRewardDialogProperties.prototype, "reward").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCampaignRewardDialogProperties.prototype, "crestFrameIndex", {
    get: function () {
      return c.CastleQuestData.CATEGORY_CAMPAIGN + 1;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicQuestRewardDialogProperties.prototype, "crestFrameIndex").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCampaignRewardDialogProperties.prototype, "titleText", {
    get: function () {
      return a.TextHelper.toUpperCaseLocaSafe(o.Localize.text("dialog_questFinish_TimeLimitedCampaignComplete"));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicQuestRewardDialogProperties.prototype, "titleText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCampaignRewardDialogProperties.prototype, "descriptionText", {
    get: function () {
      return o.Localize.text("dialog_questFinish_TimeLimitedCampaignComplete_description");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicQuestRewardDialogProperties.prototype, "descriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCampaignRewardDialogProperties.prototype, "randomEquipmentRewardList", {
    get: function () {
      return null;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicQuestRewardDialogProperties.prototype, "randomEquipmentRewardList").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleCampaignRewardDialogProperties;
}(r.BasicQuestRewardDialogProperties);
exports.CastleCampaignRewardDialogProperties = l;
var c = require("./544.js");