Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./28.js");
var o = require("./22.js");
var a = require("./12.js");
var s = require("./45.js");
var r = require("./30.js");
var l = require("./4.js");
var c = function () {
  function GeneralsHubQuestVO(e = null) {
    this._CDFinishedTimestamp = -1;
    this._freeAvailableQuests = 0;
    this._waitingForServer = false;
    if (e) {
      this.fillFromParamXml(e);
    }
  }
  GeneralsHubQuestVO.prototype.fillFromParamXml = function (e) {
    this._characterID = parseInt(e.characterID || "0");
    this._coolDownInSeconds = parseInt(e.coolDownInSeconds || "0");
    this._maxFreeOpenings = parseInt(e.maxFreeOpenings || "0");
    this._badLuckProtectionDrawAmount = parseInt(e.badLuckProtectionDrawAmount || "0");
    this._freeOpeningTombolaID = parseInt(e.freeOpeningTombolaID || "0");
    this._packageIDs = o.CastleXMLUtils.getIntArrayFromString(e.packageIDs || "", "+");
    this._name = e.name;
    this._spinRarities = o.CastleXMLUtils.getIntArrayFromString(e.spinRarities || "", ",");
    this._badLuckSpinRarities = o.CastleXMLUtils.getIntArrayFromString(e.badLuckSpinRarities || "", ",");
    this._tombolas = [];
    for (var t = e.tombolas.split("#"), i = 0; i < t.length; i++) {
      this._tombolas.push(o.CastleXMLUtils.getIntArrayFromString(t[i], "+"));
    }
  };
  GeneralsHubQuestVO.prototype.parseServerObject = function (e) {
    this._freeAvailableQuests = e.FOA;
    var t = new Date();
    t.setTime(e.LFO * n.ClientConstTime.SEC_2_MILLISEC);
    var i = new Date();
    i.setTime(t.getTime() + this.coolDownInSeconds * n.ClientConstTime.SEC_2_MILLISEC);
    this._CDFinishedTimestamp = i.getTime();
    this._waitingForServer = false;
  };
  GeneralsHubQuestVO.prototype.getTombolaID = function (e = 0) {
    if (e >= this._tombolas.length) {
      return -1;
    } else {
      return this._tombolas[e][1];
    }
  };
  GeneralsHubQuestVO.prototype.getTombolaOfferingCurrencyID = function (e = 0) {
    if (e >= this._tombolas.length) {
      return -1;
    } else {
      return this._tombolas[e][0];
    }
  };
  GeneralsHubQuestVO.prototype.getTombolaOfferingCurrencyIDByTombolaID = function (e) {
    for (var t = 0; t < this._tombolas.length; t++) {
      if (this._tombolas[t][1] == e) {
        return this._tombolas[t][0];
      }
    }
    return -1;
  };
  Object.defineProperty(GeneralsHubQuestVO.prototype, "freeOpeningTombolaID", {
    get: function () {
      return this._freeOpeningTombolaID;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubQuestVO.prototype.getCostVOForPayQuest = function (e = 0) {
    return s.CollectableHelper.createVO(a.CollectableEnum.GENERIC_CURRENCY, 1, this.getTombolaOfferingCurrencyID(e));
  };
  Object.defineProperty(GeneralsHubQuestVO.prototype, "amountOfTombolas", {
    get: function () {
      return this._tombolas.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "characterID", {
    get: function () {
      return this._characterID;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubQuestVO.prototype.getPackageVOForCurrencyID = function (e) {
    for (var t = 0, i = this._packageIDs; t < i.length; t++) {
      var n = i[t];
      var o = l.CastleModel.eventPackageData.getEventPackageByID(n);
      if (o && e == o.reward.xmlCurrencyVO.id) {
        return o;
      }
    }
    return null;
  };
  Object.defineProperty(GeneralsHubQuestVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "nameTextID", {
    get: function () {
      return "dialog_generals_inn_character_" + this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "coolDownInSeconds", {
    get: function () {
      return this._coolDownInSeconds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "maxFreeOpenings", {
    get: function () {
      return this._maxFreeOpenings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "availableQuests", {
    get: function () {
      return this._freeAvailableQuests;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "remainingCoolDownInSeconds", {
    get: function () {
      var e = r.CachedTimer.getCachedTimer();
      var t = this._CDFinishedTimestamp;
      var i = Math.max(0, t - e) * n.ClientConstTime.MILLISEC_2_SEC;
      if (i <= 0 && this.availableQuests <= 0 && !this._waitingForServer) {
        this._waitingForServer = true;
        l.CastleModel.generalsData.requestQuestUpdateData();
      }
      return i;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "badLuckProtectionDrawAmount", {
    get: function () {
      return this._badLuckProtectionDrawAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "spinRarities", {
    get: function () {
      return this._spinRarities;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "badLuckSpinRarities", {
    get: function () {
      return this._badLuckSpinRarities;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubQuestVO.ID_FAT_KING = 1;
  GeneralsHubQuestVO.ID_KNIGHT = 2;
  GeneralsHubQuestVO.ID_PRINCESS = 3;
  return GeneralsHubQuestVO;
}();
exports.GeneralsHubQuestVO = c;