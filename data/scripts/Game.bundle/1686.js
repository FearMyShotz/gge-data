Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./13.js");
var s = require("./1685.js");
var r = function (e) {
  function CastleQuestCompletedDialogProperties(t, i = null) {
    var n = e.call(this) || this;
    n.quest = t;
    if (i && i.GEQ) {
      n.parseReward(i.GEQ);
    }
    return n;
  }
  n.__extends(CastleQuestCompletedDialogProperties, e);
  CastleQuestCompletedDialogProperties.prototype.parseReward = function (e) {
    this._randomEquipmentRewardList = l.CollectableManager.parser.s2cParamList.createList(e);
  };
  Object.defineProperty(CastleQuestCompletedDialogProperties.prototype, "reward", {
    get: function () {
      return this.quest.getActualRewardList();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.BasicQuestRewardDialogProperties.prototype, "reward").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestCompletedDialogProperties.prototype, "crestFrameIndex", {
    get: function () {
      return this.quest.questCategory + 1;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.BasicQuestRewardDialogProperties.prototype, "crestFrameIndex").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestCompletedDialogProperties.prototype, "titleText", {
    get: function () {
      return a.TextHelper.toUpperCaseLocaSafe(o.Localize.text("dialog_questFinish_MissionComplete"));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.BasicQuestRewardDialogProperties.prototype, "titleText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestCompletedDialogProperties.prototype, "descriptionText", {
    get: function () {
      return a.TextHelper.toUpperCaseLocaSafe(this.quest.getQuestName());
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.BasicQuestRewardDialogProperties.prototype, "descriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestCompletedDialogProperties.prototype, "randomEquipmentRewardList", {
    get: function () {
      return this._randomEquipmentRewardList;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.BasicQuestRewardDialogProperties.prototype, "randomEquipmentRewardList").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleQuestCompletedDialogProperties;
}(s.BasicQuestRewardDialogProperties);
exports.CastleQuestCompletedDialogProperties = r;
var l = require("./50.js");