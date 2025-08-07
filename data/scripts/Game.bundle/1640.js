Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./69.js");
var s = function () {
  function ABasicQuestConditionVO() {
    this._conditionCounter = 0;
    this._conditionMaxCounter = 0;
    this._questID = 0;
    this._conditionCounter = 0;
  }
  ABasicQuestConditionVO.prototype.loadFromParamArray = function (e) {
    this._conditionType = e[0];
    this._conditionMaxCounter = o.int(e[1]);
    this._conditionData = String(e[2]).split("|");
    for (var t = 0; t < this._conditionData.length; t++) {
      this._conditionData[t] = parseInt(this._conditionData[t]);
    }
  };
  ABasicQuestConditionVO.prototype.hasConditionType = function (e) {
    return e == this._conditionType;
  };
  Object.defineProperty(ABasicQuestConditionVO.prototype, "conditionType", {
    get: function () {
      return this._conditionType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicQuestConditionVO.prototype, "conditionCounter", {
    get: function () {
      throw new a.AbstractMethodError();
    },
    set: function (e) {
      this._conditionCounter = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicQuestConditionVO.prototype, "conditionMaxCounter", {
    get: function () {
      throw new a.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicQuestConditionVO.prototype, "conditionData", {
    get: function () {
      throw new a.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  ABasicQuestConditionVO.prototype.isDone = function () {
    return this._conditionCounter == -1 || this._conditionCounter >= this.conditionMaxCounter;
  };
  ABasicQuestConditionVO.prototype.isInProgress = function () {
    return this._conditionCounter > 0;
  };
  Object.defineProperty(ABasicQuestConditionVO.prototype, "questID", {
    set: function (e) {
      this._questID = e;
    },
    enumerable: true,
    configurable: true
  });
  return ABasicQuestConditionVO;
}();
exports.ABasicQuestConditionVO = s;
n.classImplementsInterfaces(s, "IShowMeQuestConditionVO");