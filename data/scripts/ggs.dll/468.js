Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./22.js");
var a = require("./187.js");
var s = function () {
  function OfferQuestConditionContainer(e, t) {
    this._modelData = t;
    this._questConditions = new Map();
    this.parseQuestConditionList(e);
  }
  OfferQuestConditionContainer.prototype.parseQuestConditionList = function (e) {
    var t;
    for (var n = 0; n < e.length; ++n) {
      if (t = this._modelData.createQuestCondition(e[n].name, e[n].params)) {
        this._questConditions.set(e[n].name, t);
      }
    }
  };
  Object.defineProperty(OfferQuestConditionContainer.prototype, "registerName", {
    get: function () {
      return i.Constants_Offer.QUEST_CONDITION_CONTAINER;
    },
    enumerable: true,
    configurable: true
  });
  OfferQuestConditionContainer.prototype.parseFromObjectParam = function (e, t) {
    this._questConditions = new Map();
    for (var n = 0; n < t.length; ++n) {
      if (t[n].conditions) {
        this._questConditions.set("conditions", this._modelData.createQuestCondition("conditions", t[n].conditions));
      } else {
        var i = this._modelData.createQuestCondition(t[n].name, t[n].params);
        if (i) {
          this._questConditions.set(t[n].name, i);
        }
      }
    }
  };
  OfferQuestConditionContainer.prototype.setLogic = function (e) {
    this._logic = e || a.OfferQuestConditionLogicEnum.AND;
  };
  OfferQuestConditionContainer.prototype.toString = function () {
    var e = "Condition Container";
    for (var t = 0, n = Array.from(this._questConditions.keys()); t < n.length; t++) {
      var i = n[t];
      e += "\n   " + i + " --> " + this._questConditions.get(i);
    }
    return e;
  };
  Object.defineProperty(OfferQuestConditionContainer.prototype, "logic", {
    get: function () {
      return this._logic;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionContainer.prototype, "conditionPassed", {
    get: function () {
      switch (this._logic) {
        case a.OfferQuestConditionLogicEnum.AND:
          for (var e = 0, t = Array.from(this._questConditions.values()); e < t.length; e++) {
            if (!t[e].conditionPassed) {
              return false;
            }
          }
          return true;
        case a.OfferQuestConditionLogicEnum.OR:
          for (var n = 0, i = Array.from(this._questConditions.values()); n < i.length; n++) {
            if (i[n].conditionPassed) {
              return true;
            }
          }
          return false;
        case a.OfferQuestConditionLogicEnum.XOR:
          var s = false;
          for (var r = 0, o = Array.from(this._questConditions.values()); r < o.length; r++) {
            var l = o[r];
            if (s) {
              if (l.conditionPassed) {
                return false;
              }
            } else if (l.conditionPassed) {
              s = true;
            }
          }
          return s;
        case a.OfferQuestConditionLogicEnum.NOT:
        default:
          return false;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionContainer.prototype, "conditionTextId", {
    get: function () {
      return "QUEST CONDITION CONTAINER";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionContainer.prototype, "conditionTextReplacements", {
    get: function () {
      return [];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionContainer.prototype, "questConditions", {
    get: function () {
      return this._questConditions;
    },
    enumerable: true,
    configurable: true
  });
  OfferQuestConditionContainer.prototype.dispose = function () {
    if (this._questConditions) {
      for (var e = 0, t = Array.from(this._questConditions.values()); e < t.length; e++) {
        t[e].dispose();
      }
      this._questConditions = null;
    }
    this._modelData = null;
  };
  return OfferQuestConditionContainer;
}();
exports.OfferQuestConditionContainer = s;