Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./277.js");
var u = require("./4.js");
var d = require("./1640.js");
var p = function (e) {
  function DailyQuestConditionVO() {
    var t = e.call(this) || this;
    t._levelCalculated = false;
    return t;
  }
  n.__extends(DailyQuestConditionVO, e);
  Object.defineProperty(DailyQuestConditionVO.prototype, "conditionCounter", {
    get: function () {
      if (this.isDone()) {
        return this.conditionMaxCounter;
      } else {
        return this._conditionCounter;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ABasicQuestConditionVO.prototype, "conditionCounter").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestConditionVO.prototype, "conditionMaxCounter", {
    get: function () {
      if (this.levelCalculated) {
        switch (this.conditionType) {
          case c.ClientConstQuestCondition.QUESTTYPE_COLLECT_TAX:
            return s.ConditionConst.amountOfTaxesToCollect(u.CastleModel.dailyQuestData.playerQuestLevel);
          case c.ClientConstQuestCondition.QUESTTYPE_SPY:
            return s.ConditionConst.calculateSpyCount(u.CastleModel.dailyQuestData.playerQuestLevel);
          case c.ClientConstQuestCondition.QUESTTYPE_WIN_FAME_FIGHT:
            return s.ConditionConst.calculateFameForFight(u.CastleModel.dailyQuestData.playerQuestLevel, this.conditionData[0]);
        }
      }
      return this._conditionMaxCounter;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ABasicQuestConditionVO.prototype, "conditionMaxCounter").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestConditionVO.prototype, "conditionData", {
    get: function () {
      if (this.levelCalculated) {
        switch (this.conditionType) {
          case c.ClientConstQuestCondition.QUESTTYPE_COUNT_DUNGEONS:
            return [s.ConditionConst.getLevelOfClassicDungeonToDestroy(u.CastleModel.dailyQuestData.playerQuestLevel)];
        }
      }
      return this._conditionData;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ABasicQuestConditionVO.prototype, "conditionData").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DailyQuestConditionVO.prototype.getConditionText = function (e = true) {
    var t;
    var i = "";
    if (this.conditionType == c.ClientConstQuestCondition.QUESTTYPE_SPY || this.conditionType == c.ClientConstQuestCondition.QUESTTYPE_REQUEST_ALLIANCE_HELP) {
      i = this.conditionMaxCounter == 1 ? "_singular" : "";
    }
    var n = l.int(this.conditionType == c.ClientConstQuestCondition.QUESTTYPE_COUNT_DUNGEONS ? this.conditionData[0] : this.conditionMaxCounter);
    t = r.Localize.text("dialog_dailyQuests_Copy_" + this._questID + i, [n]);
    if (e) {
      t += " " + r.Localize.text(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.conditionCounter, this._questID == 7 ? 1 : this.conditionMaxCounter]);
    }
    return t;
  };
  Object.defineProperty(DailyQuestConditionVO.prototype, "levelCalculated", {
    get: function () {
      return this._levelCalculated;
    },
    set: function (e) {
      this._levelCalculated = e;
    },
    enumerable: true,
    configurable: true
  });
  return DailyQuestConditionVO;
}(d.ABasicQuestConditionVO);
exports.DailyQuestConditionVO = p;
a.classImplementsInterfaces(p, "IShowMeQuestConditionVO");