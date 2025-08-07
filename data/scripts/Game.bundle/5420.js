Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./44.js");
var l = require("./5421.js");
var c = require("./119.js");
var u = require("./83.js");
var d = require("./99.js");
var p = function (e) {
  function MessageBattleLogVO() {
    var t = this;
    t._subtypeAttack = 0;
    t._subtypeResult = 0;
    t._areaType = 0;
    t._optionalTMapID = -1;
    t._optionalTMapAreaType = -1;
    t._kingdomID = 0;
    t._ownerID = 0;
    t._areaName = "";
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageBattleLogVO, e);
  MessageBattleLogVO.prototype.parseMessageHeader = function (e) {
    var t = e.split(o.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    var i = t[0].split("+");
    var n = t[1].split("+");
    this._areaType = parseInt(i[0]);
    this._subtypeAttack = parseInt(i[1]);
    this._subtypeResult = parseInt(i[2]);
    if (i.length > 3) {
      this._optionalTMapID = parseInt(i[3]);
      if (i.length > 4) {
        this._optionalTMapAreaType = parseInt(i[4]);
      }
    }
    this._kingdomID = parseInt(n[0]);
    this._ownerID = parseInt(n[1]);
    if (n.length > 2) {
      this._areaName = n[2];
    }
  };
  MessageBattleLogVO.prototype.parseSubject = function () {
    if (this.forwarded) {
      return s.Localize.text("dialog_forwardlog_message", [s.Localize.text("battlelog")]);
    }
    if (this.subtypeResult == o.MessageConst.SUBTYPE_ATTACKER_SUCCESS) {
      if (this.subtypeAttack == o.MessageConst.SUBTYPE_ATTACK_NORMAL) {
        if (this.areaType == a.WorldConst.AREA_TYPE_FACTION_VILLAGE) {
          return s.Localize.text("dialog_messageHeader_villageConquered");
        } else if (this.areaType == a.WorldConst.AREA_TYPE_ISLE_RESOURCE) {
          return s.Localize.text("dialog_messageHeader_islandConquered");
        } else {
          return s.Localize.text("attack") + ": " + s.Localize.text("dialog_battleLog_victory");
        }
      }
      if (this.subtypeAttack == o.MessageConst.SUBTYPE_ATTACK_CONQUER) {
        if (this.areaType == a.WorldConst.AREA_TYPE_VILLAGE || this.areaType == a.WorldConst.AREA_TYPE_FACTION_VILLAGE) {
          return s.Localize.text("dialog_messageHeader_villageConquered");
        } else if (this.areaType == a.WorldConst.AREA_TYPE_ISLE_RESOURCE) {
          return s.Localize.text("dialog_messageHeader_islandConquered");
        } else if (this.areaType == a.WorldConst.AREA_TYPE_KINGS_TOWER) {
          return s.Localize.text(r.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_kingstowerConquered"));
        } else if (this.areaType == a.WorldConst.AREA_TYPE_MONUMENT) {
          return s.Localize.text("dialog_messageHeader_monumentConquered");
        } else if (this.areaType == a.WorldConst.AREA_TYPE_LABORATORY) {
          return s.Localize.text("dialog_messageHeader_laboratoryConquered");
        } else {
          return s.Localize.text("dialog_battleLog_conquerVictory");
        }
      }
    } else if (this.subtypeResult == o.MessageConst.SUBTYPE_ATTACKER_FAILED) {
      if (this.subtypeAttack == o.MessageConst.SUBTYPE_ATTACK_NORMAL) {
        if (this.areaType == a.WorldConst.AREA_TYPE_ISLE_RESOURCE) {
          return s.Localize.text("dialog_battleLog_conquerLost");
        } else {
          return s.Localize.text("attack") + ": " + s.Localize.text("dialog_battleLog_defeat");
        }
      }
      if (this.subtypeAttack == o.MessageConst.SUBTYPE_ATTACK_CONQUER) {
        return s.Localize.text("dialog_battleLog_conquerLost");
      }
    } else if (this.subtypeResult == o.MessageConst.SUBTYPE_DEFENDER_SUCCESS) {
      if (this.subtypeAttack == o.MessageConst.SUBTYPE_ATTACK_NORMAL) {
        if (this.areaType == a.WorldConst.AREA_TYPE_VILLAGE) {
          return s.Localize.text("dialog_battleLog_conquerVictimVictory");
        } else {
          return s.Localize.text("dialog_battleLog_defence") + ": " + s.Localize.text("dialog_battleLog_victory");
        }
      }
      if (this.subtypeAttack == o.MessageConst.SUBTYPE_ATTACK_NPC) {
        return s.Localize.text("dialog_battleLog_raid") + ": " + s.Localize.text("dialog_battleLog_victory");
      }
      if (this.subtypeAttack == o.MessageConst.SUBTYPE_ATTACK_CONQUER) {
        return s.Localize.text("dialog_battleLog_conquerVictimVictory");
      }
      if (this.subtypeAttack == o.MessageConst.SUBTYPE_ATTACK_OCCUPY) {
        return s.Localize.text("dialog_battleLog_conquerLost");
      }
    } else if (this.subtypeResult == o.MessageConst.SUBTYPE_DEFENDER_FAILED) {
      if (this.subtypeAttack == o.MessageConst.SUBTYPE_ATTACK_NORMAL) {
        if (this.areaType == a.WorldConst.AREA_TYPE_VILLAGE) {
          return s.Localize.text("dialog_messageHeader_villageLost");
        } else if (this.areaType == a.WorldConst.AREA_TYPE_ISLE_RESOURCE) {
          return s.Localize.text("dialog_messageHeader_islandLost");
        } else {
          return s.Localize.text("dialog_battleLog_defence") + ": " + s.Localize.text("dialog_battleLog_defeat");
        }
      }
      if (this.subtypeAttack == o.MessageConst.SUBTYPE_ATTACK_NPC) {
        return s.Localize.text("dialog_battleLog_raid") + ": " + s.Localize.text("dialog_battleLog_defeat");
      }
      if (this.subtypeAttack == o.MessageConst.SUBTYPE_ATTACK_CONQUER) {
        if (this.areaType == a.WorldConst.AREA_TYPE_KINGS_TOWER) {
          return s.Localize.text(r.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_kingstowerLost"));
        } else if (this.areaType == a.WorldConst.AREA_TYPE_MONUMENT) {
          return s.Localize.text("dialog_messageHeader_monumentLost");
        } else if (this.areaType == a.WorldConst.AREA_TYPE_LABORATORY) {
          return s.Localize.text("dialog_messageHeader_laboratoryLost");
        } else {
          return s.Localize.text("dialog_battleLog_conquerVictimLost");
        }
      }
      if (this.subtypeAttack == o.MessageConst.SUBTYPE_ATTACK_OCCUPY) {
        return s.Localize.text("dialog_battleLog_conquerVictimVictory");
      }
    }
    return "";
  };
  MessageBattleLogVO.prototype.parseSender = function () {
    if (this.forwarded) {
      return this._senderName;
    } else if (this.areaName != "") {
      if (this.areaType == a.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER) {
        return s.Localize.text("allianceTower_placeholder_Maya", [this.areaName]);
      } else {
        return this.areaName;
      }
    } else if (this._optionalTMapAreaType == o.MessageConst.SUBTYPE_TREASUREMAP_ENDNODE) {
      if (g.TMapHelper.isSeaQueenMap(this._optionalTMapID)) {
        return s.Localize.text("dialog_seasonEvent_4_FinalCastle");
      } else if (g.TMapHelper.isThornKingMap(this._optionalTMapID)) {
        return s.Localize.text("dialog_seasonEvent_2_FinalCastle");
      } else if (g.TMapHelper.isUnderworldMap(this._optionalTMapID)) {
        return s.Localize.text("dialog_seasonEvent_64_FinalCastle");
      } else {
        return s.Localize.text("dialog_treasureMap_TreasureTooltip");
      }
    } else {
      return c.PlayerHelper.getNPCCastleName(this.kingdomID, this.ownerID, this.areaType);
    }
  };
  Object.defineProperty(MessageBattleLogVO.prototype, "dialogInfo", {
    get: function () {
      return new u.DialogInfoVO(h.CastleBattleLogMessageAdvanced, new l.CastleBattleLogDialogProperties(this.messageID, true, this.forwarded, this.senderName, this._areaType));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageBattleLogVO.prototype, "subtypeAttack", {
    get: function () {
      return this._subtypeAttack;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageBattleLogVO.prototype, "subtypeResult", {
    get: function () {
      return this._subtypeResult;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageBattleLogVO.prototype, "areaType", {
    get: function () {
      return this._areaType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageBattleLogVO.prototype, "optionalTMapID", {
    get: function () {
      return this._optionalTMapID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageBattleLogVO.prototype, "optionalTMapAreaType", {
    get: function () {
      return this._optionalTMapAreaType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageBattleLogVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageBattleLogVO.prototype, "ownerID", {
    get: function () {
      return this._ownerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageBattleLogVO.prototype, "areaName", {
    get: function () {
      return this._areaName;
    },
    enumerable: true,
    configurable: true
  });
  return MessageBattleLogVO;
}(d.AMessageVO);
exports.MessageBattleLogVO = p;
var h = require("./1954.js");
var g = require("./272.js");