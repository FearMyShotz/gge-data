Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./3.js");
var a = require("./2205.js");
var s = require("./2206.js");
var r = require("./2207.js");
var l = require("./179.js");
var c = require("./4.js");
var u = require("./904.js");
var d = function () {
  function GeneralVO(e) {
    this._currentXP = 0;
    this._currentStarLevel = 0;
    this._isUnlocked = false;
    this._hasLevelUp = false;
    this._isNew = false;
    this._kills = 0;
    this._might = 0;
    this._won = 0;
    this._lost = 0;
    this._unlockedSkillIDs = [];
    this._selectedAbilities = [];
    this._fixedLevel = -1;
    this._oldXP = 0;
    this._generalXmlVO = c.CastleModel.generalsData.generalXmlVOs.get(e);
    if (!this.generalXmlVO) {
      this._generalXmlVO = new u.GeneralXmlVO();
      this._generalXmlVO.initAsPreview(e);
    }
  }
  GeneralVO.prototype.parseData = function (e) {
    this.currentXPAll = e.XP || 0;
    this.currentStarLevel = e.ST || 0;
    this.isNew = e.IN == 1 || false;
    this.hasLevelUp = e.LU == 1 || false;
    this._unlockedSkillIDs = e.SIDS || [];
    this._selectedAbilities = e.GASAIDS || [];
    this.fixedLevel = e[n.CommKeys.LEVEL] || -1;
    if (!e.ST && this._fixedLevel > 0) {
      this.currentStarLevel = Math.floor((this._fixedLevel % 10 == 0 ? this._fixedLevel - 1 : this.fixedLevel) / 10);
    }
    this._oldXP = e[n.CommKeys.OLD_XP] || 0;
    this._won = e[n.CommKeys.WINS] || 0;
    this._lost = e[n.CommKeys.DEFEATS] || 0;
    this._isUnlocked = true;
  };
  Object.defineProperty(GeneralVO.prototype, "nameText", {
    get: function () {
      return o.Localize.text("dialog_generals_generalName_placeholder", [this.nameTextShort]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "nameTextShort", {
    get: function () {
      return o.Localize.text("generals_characters_" + this.generalID + "_name");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "nameSubtitleText", {
    get: function () {
      return o.Localize.text("generals_characters_" + this.generalID + "_summary");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "generalXmlVO", {
    get: function () {
      return this._generalXmlVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "hasLevelUp", {
    get: function () {
      return this._hasLevelUp;
    },
    set: function (e) {
      this._hasLevelUp = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "isNew", {
    get: function () {
      return this._isNew;
    },
    set: function (e) {
      this._isNew = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "currentStarLevel", {
    get: function () {
      return this._currentStarLevel;
    },
    set: function (e) {
      this._currentStarLevel = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "isUnlocked", {
    get: function () {
      return this._isUnlocked && this.isImplemented;
    },
    set: function (e) {
      this._isUnlocked = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "kills", {
    get: function () {
      return this._kills;
    },
    set: function (e) {
      this._kills = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "might", {
    get: function () {
      return this._might;
    },
    set: function (e) {
      this._might = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "generalID", {
    get: function () {
      return this._generalXmlVO.generalID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "attackSlots", {
    get: function () {
      return this._generalXmlVO.attackSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "defenseSlots", {
    get: function () {
      return this._generalXmlVO.defenseSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "maxLevel", {
    get: function () {
      return this._generalXmlVO.maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "maxStarLevel", {
    get: function () {
      return this._generalXmlVO.maxStarLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "upgradeCurrencyIDs", {
    get: function () {
      return this._generalXmlVO.upgradeCurrencyIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "unlockCurrencyID", {
    get: function () {
      return this._generalXmlVO.unlockCurrencyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "generalRarityID", {
    get: function () {
      return this._generalXmlVO.generalRarityID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "rarityTextID", {
    get: function () {
      return "generals_rarity_" + this._generalXmlVO.generalRarityID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "rarityTextColor", {
    get: function () {
      switch (this.generalRarityID) {
        case 1:
          return GeneralVO.GENERAL_COLOR_COMMON;
        case 2:
          return GeneralVO.GENERAL_COLOR_RARE;
        case 3:
          return GeneralVO.GENERAL_COLOR_EPIC;
        case 4:
          return GeneralVO.GENERAL_COLOR_LEGENDARY;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "lost", {
    get: function () {
      return this._lost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "won", {
    get: function () {
      return this._won;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "storyTextID", {
    get: function () {
      return "generals_characters_" + this.generalID + "_narrative";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "nextLevelXP", {
    get: function () {
      return this.generalXmlVO.rarity.getCurrentMaxXPOfLevel(this._currentXP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "nextXpNeededForCap", {
    get: function () {
      return this.generalXmlVO.rarity.nextXpNeededForCap(this._currentXP);
    },
    enumerable: true,
    configurable: true
  });
  GeneralVO.prototype.getXPProgressFactor = function () {
    if (this.nextLevelXP <= 0) {
      return 1;
    } else {
      return Math.min(1, this.currentLevelXP / this.nextLevelXP);
    }
  };
  Object.defineProperty(GeneralVO.prototype, "currentXPAll", {
    set: function (e) {
      this._currentXP = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "currentLevelXP", {
    get: function () {
      return this.generalXmlVO.rarity.getCurrentXPOfLevel(this._currentXP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "currentXP", {
    get: function () {
      return this._currentXP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "currentLevel", {
    get: function () {
      if (this._fixedLevel > -1) {
        return this._fixedLevel;
      } else {
        return this.generalXmlVO.rarity.getLevelForXP(this._currentXP);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "fixedLevel", {
    set: function (e) {
      this._fixedLevel = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "xpGained", {
    get: function () {
      return this._currentXP - this._oldXP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "levelsGained", {
    get: function () {
      return this.currentLevel - this.generalXmlVO.rarity.getLevelForXP(this._oldXP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "troopCapacity", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "assignedLord", {
    get: function () {
      return this._assignedLord;
    },
    set: function (e) {
      this._assignedLord = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "requiredShards", {
    get: function () {
      if (this.isUnlocked) {
        return this._generalXmlVO.rarity.getRequiredShards(this._currentStarLevel);
      } else {
        return this._generalXmlVO.rarity.unlockCosts;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "availableShards", {
    get: function () {
      if (this._generalXmlVO.unlockCurrencyID > 0) {
        return c.CastleModel.currencyData.getAmountById(this._generalXmlVO.unlockCurrencyID);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "canBeUnlocked", {
    get: function () {
      return !this.isUnlocked && c.CastleModel.currencyData.getAmountById(this.unlockCurrencyID) >= this.requiredShards && this.isImplemented;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "isImplemented", {
    get: function () {
      return this._generalXmlVO.isImplemented;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "isNPCGeneral", {
    get: function () {
      return this._generalXmlVO.isNPCGeneral;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "unlockedSkillIDs", {
    get: function () {
      return this._unlockedSkillIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "selectedAbilities", {
    get: function () {
      return this._selectedAbilities;
    },
    enumerable: true,
    configurable: true
  });
  GeneralVO.prototype.getSkillPointsSpent = function () {
    return c.CastleModel.generalsData.getSkillPointsSpent(this.generalID);
  };
  GeneralVO.prototype.getSkillPointsAvailable = function () {
    return this.currentLevel - this.getSkillPointsSpent();
  };
  GeneralVO.prototype.getActiveSkillInGroup = function (e) {
    var t;
    for (var i = 0, n = e.childs; i < n.length; i++) {
      var o = n[i].generalSkillVO;
      if (this.isSkillActive(o.id)) {
        t = o;
      }
    }
    return t;
  };
  GeneralVO.prototype.isSkillActive = function (e) {
    return this.unlockedSkillIDs.indexOf(e) > -1;
  };
  GeneralVO.prototype.getSelectedAbilities = function (e) {
    var t = [];
    for (var i = 0; i < this.selectedAbilities.length; i++) {
      if (e && this.generalXmlVO.attackSlots.indexOf(this.selectedAbilities[i][0]) >= 0 && this.selectedAbilities[i][1] > 0) {
        t.push(c.CastleModel.generalsData.getAbilityByID(this.selectedAbilities[i][1]));
      }
      if (!e && this.generalXmlVO.defenseSlots.indexOf(this.selectedAbilities[i][0]) >= 0 && this.selectedAbilities[i][1] > 0) {
        t.push(c.CastleModel.generalsData.getAbilityByID(this.selectedAbilities[i][1]));
      }
    }
    return t;
  };
  GeneralVO.prototype.unlockSkill = function (e) {
    c.CastleModel.smartfoxClient.sendCommandVO(new r.C2SGeneralUnlockSkillVO(e.id));
  };
  GeneralVO.prototype.resetSkills = function () {
    c.CastleModel.smartfoxClient.sendCommandVO(new s.C2SGeneralResetSkills(this.generalID));
  };
  Object.defineProperty(GeneralVO.prototype, "isXpUpgradeable", {
    get: function () {
      return this.currentLevel < (this.currentStarLevel + 1) * 10 && this.currentLevel < this.maxLevel && this.isUnlocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "isStarLevelUpgradeable", {
    get: function () {
      return this.currentLevel % 10 == 0 && this.currentLevel > 0 && Math.floor(this.currentLevel / 10) > this._currentStarLevel && this.currentStarLevel < this.maxStarLevel || !this.isUnlocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "hasEnoughShardsToUpgradeStarLevel", {
    get: function () {
      return this.isStarLevelUpgradeable && this.availableShards >= this.requiredShards;
    },
    enumerable: true,
    configurable: true
  });
  GeneralVO.prototype.getPassiveSkills = function () {
    return this.unlockedSkillIDs.map(function (e) {
      return c.CastleModel.generalsData.getSkillById(e);
    }).filter(function (e) {
      return !!e && !e.isAbilitySkill;
    });
  };
  GeneralVO.prototype.getPassiveEffects = function () {
    return this.getPassiveSkills().reduce(function (e, t) {
      return e.concat(t.boni);
    }, []);
  };
  GeneralVO.prototype.getPassiveEffectsText = function () {
    return this.getPassiveSkills().sort(function (e, t) {
      return t.skillGroupID - e.skillGroupID;
    }).reduce(function (e, t) {
      return (e ? e + "\n" : e) + t.getEffectText();
    }, "");
  };
  GeneralVO.prototype.resetFlags = function () {
    c.CastleModel.smartfoxClient.sendCommandVO(new a.C2SGeneralResetFlagsVO(this.generalID));
    this.isNew = false;
    this.hasLevelUp = false;
    c.CastleModel.generalsData.dispatchEvent(new l.GeneralsEvent(l.GeneralsEvent.GENERALS_UPDATED));
  };
  GeneralVO.GENERAL_COLOR_COMMON = 13421772;
  GeneralVO.GENERAL_COLOR_RARE = 10541384;
  GeneralVO.GENERAL_COLOR_EPIC = 13141503;
  GeneralVO.GENERAL_COLOR_LEGENDARY = 16362780;
  return GeneralVO;
}();
exports.GeneralVO = d;