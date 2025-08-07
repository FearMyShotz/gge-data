Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./4.js");
var o = function () {
  function GeneralAbilityXmlVO(e = null) {
    if (e) {
      this.fillFromParamXml(e);
    }
  }
  GeneralAbilityXmlVO.prototype.fillFromParamXml = function (e) {
    this._abilityID = parseInt(e.abilityID || "0");
    this._name = e.name;
    this._abilityGroupID = parseInt(e.abilityGroupID || "0");
    this._level = parseInt(e.level || "0");
    this._abilityTriggerID = parseInt(e.abilityTriggerID || "0");
    this._triggerPerWave = parseInt(e.triggerPerWave || "0");
    this._abilityDefenseEffectID = parseInt(e.abilityDefenseEffectID || "0");
    this._abilityAttackEffectID = parseInt(e.abilityAttackEffectID || "0");
  };
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "abilityID", {
    get: function () {
      return this._abilityID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "abilityGroupID", {
    get: function () {
      return this._abilityGroupID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "abilityTriggerID", {
    get: function () {
      return this._abilityTriggerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "triggerPerWave", {
    get: function () {
      return this._triggerPerWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "abilityDefenseEffectID", {
    get: function () {
      return this._abilityDefenseEffectID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "abilityAttackEffectID", {
    get: function () {
      return this._abilityAttackEffectID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "abilityAttackEffect", {
    get: function () {
      return n.CastleModel.generalsData.getAbilityEffectByID(this.abilityAttackEffectID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityXmlVO.prototype, "abilityDefenseEffect", {
    get: function () {
      return n.CastleModel.generalsData.getAbilityEffectByID(this.abilityDefenseEffectID);
    },
    enumerable: true,
    configurable: true
  });
  GeneralAbilityXmlVO.prototype.getAbilitEffect = function (e) {
    if (e) {
      return this.abilityAttackEffect;
    } else {
      return this.abilityDefenseEffect;
    }
  };
  GeneralAbilityXmlVO.TRIGGER_PRECOMBAT = 1;
  GeneralAbilityXmlVO.TRIGGER_EVERYXWAVES = 2;
  GeneralAbilityXmlVO.TRIGGER_YARD = 3;
  GeneralAbilityXmlVO.TRIGGER_POSTCOMBAT = 4;
  return GeneralAbilityXmlVO;
}();
exports.GeneralAbilityXmlVO = o;