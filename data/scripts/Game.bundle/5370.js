Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./22.js");
var c = require("./24.js");
var u = require("./4.js");
var d = require("./5371.js");
var p = function () {
  function DailyQuestVO() {
    this._questID = 0;
    this._isFinished = false;
    this._triggerKingdomID = 0;
    this.isTempServerQuest = false;
    this.addDailyTaskPoints = 0;
  }
  DailyQuestVO.prototype.reset = function () {
    this._isFinished = false;
  };
  DailyQuestVO.prototype.fillFromParamXML = function (e) {
    this._questID = parseInt(e.dailyQuestID || "");
    this._triggerKingdomID = parseInt(l.CastleXMLUtils.getValueOrDefault("triggerKingdomID", e, "0", true));
    this.isTempServerQuest = parseInt(l.CastleXMLUtils.getValueOrDefault("isTempServerQuest", e, "0")) == 1;
    this.addDailyTaskPoints = parseInt(l.CastleXMLUtils.getValueOrDefault("addDailyDutyPoints", e, "0"));
    var t = Boolean(parseInt(l.CastleXMLUtils.getValueOrDefault("levelCalculated", e, "0", false)));
    var i = (e.conditions || "").split("#");
    this._conditions = [];
    for (var n = 0; n < i.length; ++n) {
      var o = String(i[n]).split("+");
      var a = new d.DailyQuestConditionVO();
      a.loadFromParamArray(o);
      a.levelCalculated = t;
      a.questID = this._questID;
      this._conditions[n] = a;
    }
    this._isFinished = false;
    this._rewards = h.CollectableManager.parser.x2cRewards.createList(e);
  };
  DailyQuestVO.prototype.setProgress = function (e) {
    for (var t = 0; t < e.length; ++t) {
      this._conditions[t].conditionCounter = e[t];
    }
  };
  DailyQuestVO.prototype.setFinished = function () {
    if (this._conditions != null) {
      for (var e = 0, t = this._conditions; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.conditionCounter = i.conditionMaxCounter;
        }
      }
    }
    this._isFinished = true;
  };
  Object.defineProperty(DailyQuestVO.prototype, "conditions", {
    get: function () {
      return this._conditions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestVO.prototype, "isFinished", {
    get: function () {
      return this._isFinished;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestVO.prototype, "questID", {
    get: function () {
      return this._questID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestVO.prototype, "triggerKingdomID", {
    get: function () {
      return r.int(this._triggerKingdomID > -1 ? this._triggerKingdomID : u.CastleModel.kingdomData.activeKingdomID != a.FactionConst.KINGDOM_ID ? u.CastleModel.kingdomData.activeKingdomID : s.WorldClassic.KINGDOM_ID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestVO.prototype, "eventID", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestVO.prototype, "mapID", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  DailyQuestVO.prototype.getQuestName = function () {
    return "dialog_dailyQuests_name_" + this.questID;
  };
  DailyQuestVO.prototype.getQuestDescription = function () {
    var e;
    for (var t = 0; t < this._conditions.length; t++) {
      e = this._conditions[t];
      if (t > 0) {
        "\n";
      }
      e.getConditionText();
    }
    return this.conditions[0].getConditionText();
  };
  DailyQuestVO.prototype.getQuestIcon = function (e = false) {
    if (e) {
      return new c.CastleGoodgameExternalClip(this.questIconClassName, this.getFilePath(), null, 0, false);
    } else if (this._questClip) {
      return this._questClip.asDisplayObject();
    } else {
      this._questClip = new c.CastleGoodgameExternalClip(this.questIconClassName, this.getFilePath(), null, 0, false);
      this._questClip.recycleAsset = false;
      return this._questClip.asDisplayObject();
    }
  };
  Object.defineProperty(DailyQuestVO.prototype, "questIconClassName", {
    get: function () {
      return "DailyQuestIcon_" + this.questID;
    },
    enumerable: true,
    configurable: true
  });
  DailyQuestVO.prototype.getFilePath = function () {
    return n.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.questIconClassName);
  };
  return DailyQuestVO;
}();
exports.DailyQuestVO = p;
var h = require("./50.js");
o.classImplementsInterfaces(p, "IShowMeQuestVO");