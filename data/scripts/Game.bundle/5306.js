Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./60.js");
var s = require("./4.js");
var r = require("./1950.js");
var l = function () {
  function OfferQuestConditionContainer() {}
  Object.defineProperty(OfferQuestConditionContainer.prototype, "registerName", {
    get: function () {
      return a.ClientConstOffer.QUEST_CONDITION_CONTAINER;
    },
    enumerable: true,
    configurable: true
  });
  OfferQuestConditionContainer.prototype.registerOfferCondition = function (e) {
    e.addEntry(this.registerName, this);
  };
  OfferQuestConditionContainer.prototype.parseFromObjectParam = function (e, t, i) {
    var n;
    this._questConditions = new Map();
    for (n in t) {
      if (n == "conditions") {
        this._questConditions.set("conditions", s.CastleModel.privateOfferData.createQuestCondition("conditions", t[n], null, r.OfferQuestConditionLogicEnum.getConditionLogicByName(t[n].logic)));
      } else {
        var o = s.CastleModel.privateOfferData.createQuestCondition(t[n].name, t[n].params, t[n].publicId);
        if (o) {
          this._questConditions.set(t[n].name, o);
        }
      }
    }
  };
  OfferQuestConditionContainer.prototype.parseProgress = function (e) {
    if (this._questConditions != null) {
      for (var t = 0, i = Array.from(this._questConditions.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.parseProgress(e);
        }
      }
    }
  };
  OfferQuestConditionContainer.prototype.setLogic = function (e) {
    this._logic = e || r.OfferQuestConditionLogicEnum.AND;
  };
  OfferQuestConditionContainer.prototype.toString = function () {
    var e = "Condition Container";
    if (this._questConditions != null) {
      for (var t = 0, i = Array.from(this._questConditions.keys()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e += "\n   " + n + " --> " + this._questConditions.get(n);
        }
      }
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
      var e;
      switch (this._logic) {
        case r.OfferQuestConditionLogicEnum.AND:
          if (this._questConditions != null) {
            for (var t = 0, i = Array.from(this._questConditions.values()); t < i.length; t++) {
              if ((e = i[t]) !== undefined && !e.conditionPassed) {
                return false;
              }
            }
          }
          return true;
        case r.OfferQuestConditionLogicEnum.OR:
          if (this._questConditions != null) {
            for (var n = 0, o = Array.from(this._questConditions.values()); n < o.length; n++) {
              if ((e = o[n]) !== undefined && e.conditionPassed) {
                return true;
              }
            }
          }
          return false;
        case r.OfferQuestConditionLogicEnum.XOR:
          var a = false;
          if (this._questConditions != null) {
            for (var s = 0, l = Array.from(this._questConditions.values()); s < l.length; s++) {
              if ((e = l[s]) !== undefined) {
                if (a) {
                  if (e.conditionPassed) {
                    return false;
                  }
                } else if (e.conditionPassed) {
                  a = true;
                }
              }
            }
          }
          return a;
        case r.OfferQuestConditionLogicEnum.NOT:
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
  Object.defineProperty(OfferQuestConditionContainer.prototype, "conditionsProgressInPercent", {
    get: function () {
      switch (this._logic) {
        case r.OfferQuestConditionLogicEnum.AND:
          var e = 0;
          var t = 0;
          if (this._questConditions != null) {
            for (var i = 0, n = Array.from(this._questConditions.values()); i < n.length; i++) {
              var a = n[i];
              if (a !== undefined) {
                ++t;
                e += a.conditionsProgressInPercent;
              }
            }
          }
          return e / t;
        case r.OfferQuestConditionLogicEnum.OR:
          e = 0;
          if (this._questConditions != null) {
            for (var s = 0, l = Array.from(this._questConditions.values()); s < l.length; s++) {
              if ((a = l[s]) !== undefined) {
                e = o.int(Math.max(e, a.conditionsProgressInPercent));
              }
            }
          }
          return e;
        case r.OfferQuestConditionLogicEnum.XOR:
          e = 0;
          if (this._questConditions != null) {
            for (var c = 0, u = Array.from(this._questConditions.values()); c < u.length; c++) {
              if ((a = u[c]) !== undefined && (e = o.int(Math.max(e, a.conditionsProgressInPercent)), a.conditionPassed)) {
                if (a.conditionPassed) {
                  return 0;
                }
                true;
              }
            }
          }
          return e;
        case r.OfferQuestConditionLogicEnum.NOT:
          if (this._questConditions != null) {
            for (var d = 0, p = Array.from(this._questConditions.values()); d < p.length; d++) {
              if ((a = p[d]) !== undefined && a.conditionPassed) {
                return 0;
              }
            }
          }
          return 100;
      }
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionContainer.prototype, "publicID", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  return OfferQuestConditionContainer;
}();
exports.OfferQuestConditionContainer = l;
n.classImplementsInterfaces(l, "IOfferQuestCondition");